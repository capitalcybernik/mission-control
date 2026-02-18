# AI SEO Skill

SEO analysis and optimization tool using SerpAPI for real search data.

## Overview

This skill analyzes website SEO performance, tracks keyword rankings, and provides actionable recommendations for improvement.

## Configuration

Create `.serpapi-config` in workspace root:
```bash
SERPAPI_KEY=your_api_key_here
```

**Current key location:** TOOLS.md (never commit to repo)

## Rate Limits

SerpAPI free tier: 100 searches/month
SerpAPI paid tier: 5,000+ searches/month

**This skill:** Max 10 searches/day to stay within limits

## Core Functions

### analyze_site(domain)
Analyze overall SEO health of a website.

### check_keyword_ranking(keyword, domain, location='us')
Check where a domain ranks for a specific keyword.

### find_keyword_opportunities(domain, competitors)
Find keywords where competitors rank but target domain doesn't.

### audit_page(url)
Technical SEO audit of a specific page.

### track_competitors(domain, competitor_list)
Compare domain against competitors on key metrics.

### suggest_content_gaps(domain, topic)
Find content gaps based on top-ranking pages for a topic.

## Usage

```javascript
const { analyzeSite, checkKeyword, findOpportunities } = require('./ai-seo');

// Analyze both sites
const ccAnalysis = await analyzeSite('capital-cyber.com');
const cgaAnalysis = await analyzeSite('cybergrantsalliance.org');

// Check keyword ranking
const ranking = await checkKeyword('CMMC compliance', 'capital-cyber.com');

// Find opportunities
const gaps = await findOpportunities('capital-cyber.com', [
  'coalfire.com',
  'reddsolutions.com'
]);
```

## SEO Focus Areas

### capital-cyber.com
- Primary: CMMC compliance, cybersecurity services, managed IT
- Secondary: Cyber insurance, government contractors, NIST 800-171
- Audience: Defense contractors, small businesses, insurance agents

### cybergrantsalliance.org
- Primary: Cybersecurity grants, free pen testing, nonprofit
- Secondary: FTC Safeguards, CPA compliance, healthcare security
- Audience: Small businesses, CPAs, healthcare, nonprofits

## Research Queries

Run these weekly:
1. "CMMC compliance" + location variations
2. "cybersecurity services" + target verticals
3. Competitor analysis for both sites
4. Content gap analysis vs. top 3 competitors

## Output Format

All analysis exports to:
- Markdown reports in `/seo-reports/`
- JSON data for tracking trends
- Priority action items for implementation

## Safety

- API key stored in TOOLS.md only
- Rate limiting enforced (10 req/day max)
- No automated posting without review
- All recommendations need human approval

---

**Created:** 2026-02-18  
**API:** SerpAPI  
**Status:** Active
