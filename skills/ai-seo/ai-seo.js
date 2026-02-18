/**
 * AI SEO Skill - SerpAPI Integration
 * Rate limited: 10 searches/day maximum
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Load API key from TOOLS.md or environment
function getApiKey() {
  // Check environment first
  if (process.env.SERPAPI_KEY) return process.env.SERPAPI_KEY;
  
  // Check TOOLS.md for key
  const toolsPath = path.join(__dirname, '../../TOOLS.md');
  if (fs.existsSync(toolsPath)) {
    const content = fs.readFileSync(toolsPath, 'utf8');
    const match = content.match(/SERPAPI_KEY[:=]\s*([a-f0-9]+)/i);
    if (match) return match[1];
  }
  
  throw new Error('SERPAPI_KEY not found in TOOLS.md or environment');
}

// Rate limiting
const RATE_LIMIT_FILE = '/tmp/serpapi-usage.json';
const MAX_DAILY = 10;

function checkRateLimit() {
  let usage = { count: 0, date: new Date().toDateString() };
  
  if (fs.existsSync(RATE_LIMIT_FILE)) {
    usage = JSON.parse(fs.readFileSync(RATE_LIMIT_FILE, 'utf8'));
  }
  
  // Reset if new day
  if (usage.date !== new Date().toDateString()) {
    usage = { count: 0, date: new Date().toDateString() };
  }
  
  if (usage.count >= MAX_DAILY) {
    throw new Error(`Rate limit reached: ${MAX_DAILY} searches/day. Try again tomorrow.`);
  }
  
  usage.count++;
  fs.writeFileSync(RATE_LIMIT_FILE, JSON.stringify(usage));
  
  console.log(`[SEO] Search ${usage.count}/${MAX_DAILY} used today`);
  return usage.count;
}

function getRemaining() {
  if (!fs.existsSync(RATE_LIMIT_FILE)) return MAX_DAILY;
  const usage = JSON.parse(fs.readFileSync(RATE_LIMIT_FILE, 'utf8'));
  if (usage.date !== new Date().toDateString()) return MAX_DAILY;
  return MAX_DAILY - usage.count;
}

// Make SerpAPI request
function serpApiRequest(params) {
  return new Promise((resolve, reject) => {
    checkRateLimit();
    
    const apiKey = getApiKey();
    const queryParams = new URLSearchParams({
      ...params,
      api_key: apiKey,
      engine: 'google'
    });
    
    const req = https.request({
      hostname: 'serpapi.com',
      path: '/search?' + queryParams.toString(),
      method: 'GET'
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(data));
        }
      });
    });
    
    req.on('error', reject);
    req.end();
  });
}

// Analyze site SEO health
async function analyzeSite(domain) {
  console.log(`\n=== Analyzing: ${domain} ===`);
  
  const results = {
    domain,
    analyzedAt: new Date().toISOString(),
    searchesUsed: 0,
    findings: {}
  };
  
  // Check branded search
  try {
    const branded = await serpApiRequest({
      q: `site:${domain}`,
      num: 100
    });
    results.findings.brandedResults = branded.search_information?.total_results || 'N/A';
    results.searchesUsed++;
  } catch (e) {
    results.findings.brandedError = e.message;
  }
  
  // Check site: command
  try {
    const indexed = await serpApiRequest({
      q: `site:${domain}`,
      num: 10
    });
    results.findings.indexedPages = indexed.organic_results?.length || 0;
    results.searchesUsed++;
  } catch (e) {
    results.findings.indexError = e.message;
  }
  
  return results;
}

// Check keyword ranking
async function checkKeyword(keyword, domain, location = 'us') {
  console.log(`\n=== Checking: "${keyword}" for ${domain} ===`);
  
  try {
    const result = await serpApiRequest({
      q: keyword,
      num: 100,
      location
    });
    
    const position = result.organic_results?.findIndex(
      r => r.link?.includes(domain)
    );
    
    return {
      keyword,
      domain,
      position: position >= 0 ? position + 1 : 'Not ranked',
      results: result.organic_results?.length || 0,
      searchesUsed: 1
    };
  } catch (e) {
    return { error: e.message, keyword, domain };
  }
}

// Quick SEO health check for both sites
async function quickAnalysis() {
  console.log('=== QUICK SEO ANALYSIS ===\n');
  
  const sites = [
    'capital-cyber.com',
    'cybergrantsalliance.org'
  ];
  
  const results = [];
  for (const site of sites) {
    if (getRemaining() < 2) {
      console.log(`⚠ Rate limit low, skipping ${site}`);
      break;
    }
    
    const analysis = await analyzeSite(site);
    results.push(analysis);
    
    // Check one key keyword per site
    const keywords = {
      'capital-cyber.com': 'CMMC compliance services',
      'cybergrantsalliance.org': 'free cybersecurity grants'
    };
    
    if (getRemaining() > 0) {
      const keywordResult = await checkKeyword(keywords[site], site);
      analysis.findings.keywordCheck = keywordResult;
    }
  }
  
  return results;
}

// Generate markdown report
function generateReport(results) {
  let report = `# SEO Analysis Report\n\n**Generated:** ${new Date().toISOString()}\n\n`;
  
  for (const site of results) {
    report += `## ${site.domain}\n\n`;
    report += `- **Indexed pages:** ${site.findings.indexedPages || 'N/A'}\n`;
    report += `- **Branded results:** ${site.findings.brandedResults || 'N/A'}\n`;
    
    if (site.findings.keywordCheck) {
      const kc = site.findings.keywordCheck;
      report += `- **Keyword "${kc.keyword}":** Position ${kc.position}\n`;
    }
    
    report += `\n`;
  }
  
  report += `---\n**Searches remaining today:** ${getRemaining()}/${MAX_DAILY}\n`;
  
  return report;
}

// Main execution
async function main() {
  console.log(`Starting SEO analysis... ${getRemaining()} searches available today\n`);
  
  try {
    const results = await quickAnalysis();
    const report = generateReport(results);
    
    // Save report
    const reportPath = path.join(__dirname, '../../seo-reports', `seo-report-${Date.now()}.md`);
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, report);
    
    console.log('\n=== REPORT ===\n');
    console.log(report);
    console.log(`\nReport saved: ${reportPath}`);
    
  } catch (e) {
    console.error('Error:', e.message);
  }
}

// Export for programmatic use
module.exports = {
  analyzeSite,
  checkKeyword,
  quickAnalysis,
  generateReport,
  getRemaining
};

// Run if called directly
if (require.main === module) {
  main();
}
