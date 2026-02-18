#!/usr/bin/env node
/**
 * Daily Security Audit Script
 * Runs at 12:00 AM UTC daily
 * Checks for credential leaks, suspicious patterns, repo anomalies
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const WORKSPACE = '/root/.openclaw/workspace';
const SENSITIVE_PATTERNS = [
  /[a-zA-Z0-9]{20,}/,  // API keys, tokens
  /password\s*[=:]\s*["\'][^"\']+["\']/i,
  /api[_-]?key\s*[=:]\s*["\'][^"\']+["\']/i,
  /secret\s*[=:]\s*["\'][^"\']+["\']/i,
  /token\s*[=:]\s*["\'][^"\']+["\']/i,
  /-----BEGIN (RSA |DSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /-----BEGIN CERTIFICATE-----/,
];

const SENSITIVE_FILES = [
  '.env',
  '.env.local',
  '.env.production',
  '.env.development',
  '.env.*',
  '*-credentials*',
  '*-secrets*',
  '*.key',
  '*.pem',
  '.dart-config',
  '*token*',
  '*password*',
  '*secret*',
];

const findings = [];

function log(issue, severity = 'warning') {
  findings.push({ issue, severity, timestamp: new Date().toISOString() });
  console.log(`[${severity.toUpperCase()}] ${issue}`);
}

// Check 1: Scan for sensitive files in git
function checkGitHistory() {
  console.log('\n=== Checking Git History for Sensitive Files ===');
  try {
    const output = execSync('git log --all --full-history --name-only --pretty=format: | sort -u', {
      cwd: WORKSPACE,
      encoding: 'utf8'
    });
    
    const files = output.split('\n').filter(f => f.trim());
    const suspicious = files.filter(f => {
      return SENSITIVE_FILES.some(pattern => {
        const regex = new RegExp(pattern.replace(/\*/g, '.*'));
        return regex.test(f);
      });
    });
    
    if (suspicious.length > 0) {
      log(`Sensitive files detected in git history: ${suspicious.join(', ')}`, 'critical');
    } else {
      console.log('✓ No sensitive files found in git history');
    }
  } catch (e) {
    console.log('⚠ Could not check git history:', e.message);
  }
}

// Check 2: Scan recent files for credential patterns
function scanRecentFiles() {
  console.log('\n=== Scanning Recent Files for Credential Patterns ===');
  
  const filesToScan = [
    'MEMORY.md',
    'TOOLS.md',
    'memory/*.md',
    '*.log',
    '*.jsonl'
  ];
  
  let scanned = 0;
  filesToScan.forEach(pattern => {
    try {
      const files = execSync(`find ${WORKSPACE} -name "${pattern}" -mtime -1 2>/dev/null`, { encoding: 'utf8' });
      files.split('\n').forEach(file => {
        if (!file.trim()) return;
        scanned++;
        const content = fs.readFileSync(file, 'utf8');
        
        SENSITIVE_PATTERNS.forEach((pattern, idx) => {
          if (pattern.test(content)) {
            log(`Pattern ${idx + 1} match in ${path.basename(file)}`, 'warning');
          }
        });
      });
    } catch (e) {
      // File might not exist
    }
  });
  
  console.log(`Scanned ${scanned} recent files`);
}

// Check 3: Check for .env files in workspace
function checkEnvFiles() {
  console.log('\n=== Checking for .env Files ===');
  try {
    const envFiles = execSync('find /root -name ".env*" -type f 2>/dev/null', { encoding: 'utf8' });
    const files = envFiles.split('\n').filter(f => f.trim());
    
    if (files.length > 0) {
      log(`.env files found: ${files.join(', ')}`, files.some(f => f.includes('.git')) ? 'critical' : 'warning');
    } else {
      console.log('✓ No .env files found');
    }
  } catch (e) {
    console.log('✓ No .env files found');
  }
}

// Check 4: Check repo size for anomalies
function checkRepoSize() {
  console.log('\n=== Checking Repository Size ===');
  try {
    const sizeOutput = execSync('du -sb /root/.openclaw/workspace/.git 2>/dev/null', { encoding: 'utf8' });
    const sizeBytes = parseInt(sizeOutput.split('\t')[0]);
    const sizeMB = sizeBytes / (1024 * 1024);
    
    console.log(`Repo size: ${sizeMB.toFixed(2)} MB`);
    
    // Check for sudden growth (compare with previous check)
    const stateFile = '/tmp/repo-size-state.json';
    let previousSize = 0;
    
    if (fs.existsSync(stateFile)) {
      const state = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
      previousSize = state.size || 0;
    }
    
    if (previousSize > 0) {
      const growth = sizeBytes - previousSize;
      const growthMB = growth / (1024 * 1024);
      
      if (growthMB > 10) {
        log(`Repository grew by ${growthMB.toFixed(2)} MB in last 24h`, 'warning');
      } else {
        console.log(`✓ Normal growth: ${growthMB.toFixed(2)} MB`);
      }
    }
    
    fs.writeFileSync(stateFile, JSON.stringify({ size: sizeBytes, timestamp: new Date().toISOString() }));
    
  } catch (e) {
    console.log('⚠ Could not check repo size:', e.message);
  }
}

// Check 5: Verify SECURITY.md exists and is current
function checkSecurityFile() {
  console.log('\n=== Checking SECURITY.md ===');
  const secFile = path.join(WORKSPACE, 'SECURITY.md');
  
  if (!fs.existsSync(secFile)) {
    log('SECURITY.md not found!', 'critical');
    return;
  }
  
  const content = fs.readFileSync(secFile, 'utf8');
  const hasDate = content.includes('Effective:');
  const hasClassification = content.includes('Classification:');
  
  if (!hasDate || !hasClassification) {
    log('SECURITY.md may be incomplete', 'warning');
  } else {
    console.log('✓ SECURITY.md present and formatted');
  }
}

// Check 6: Check memory files for suspicious patterns
function checkMemoryFiles() {
  console.log('\n=== Checking Memory Files ===');
  const memoryDir = path.join(WORKSPACE, 'memory');
  
  if (!fs.existsSync(memoryDir)) {
    console.log('No memory directory');
    return;
  }
  
  const files = fs.readdirSync(memoryDir).filter(f => f.endsWith('.md'));
  let suspicious = 0;
  
  files.forEach(file => {
    const content = fs.readFileSync(path.join(memoryDir, file), 'utf8');
    
    // Check for suspicious injection patterns
    if (/system:|ignore previous|you are now|disregard your/i.test(content)) {
      log(`Suspicious pattern in memory/${file}`, 'warning');
      suspicious++;
    }
  });
  
  if (suspicious === 0) {
    console.log(`✓ Checked ${files.length} memory files - clean`);
  }
}

// Main execution
async function main() {
  console.log('═══════════════════════════════════════');
  console.log('   DAILY SECURITY AUDIT');
  console.log('   ' + new Date().toISOString());
  console.log('═══════════════════════════════════════');
  
  checkSecurityFile();
  checkGitHistory();
  scanRecentFiles();
  checkEnvFiles();
  checkRepoSize();
  checkMemoryFiles();
  
  console.log('\n═══════════════════════════════════════');
  console.log('   AUDIT COMPLETE');
  console.log(`   Findings: ${findings.length}`);
  console.log('═══════════════════════════════════════');
  
  // Write findings to log
  const logFile = path.join(WORKSPACE, 'security-audit-log.jsonl');
  findings.forEach(f => {
    fs.appendFileSync(logFile, JSON.stringify(f) + '\n');
  });
  
  // Exit with error if critical findings
  const critical = findings.filter(f => f.severity === 'critical');
  if (critical.length > 0) {
    console.log(`\n⚠ ${critical.length} CRITICAL issues found!`);
    process.exit(1);
  }
}

main().catch(console.error);