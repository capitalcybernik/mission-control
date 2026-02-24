#!/usr/bin/env node
// LinkedIn Post Publisher
// Usage: node post-to-linkedin.js <post-file> [--dry-run]

const https = require('https');
const fs = require('fs');
const path = require('path');

const TOKEN_FILE = path.join(__dirname, '../../TOOLS.md');
const QUEUE_DIR = path.join(__dirname, '../../drafts/linkedin-queue');

// Extract token from TOOLS.md
function getToken() {
  const tools = fs.readFileSync(TOKEN_FILE, 'utf8');
  const match = tools.match(/LinkedIn Access Token:\s*`([^`]+)`/);
  if (!match) throw new Error('LinkedIn access token not found in TOOLS.md');
  return match[1];
}

// Get LinkedIn user sub/ID
function getUserInfo(token) {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.linkedin.com',
      path: '/v2/userinfo',
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        if (res.statusCode !== 200) return reject(new Error(`UserInfo failed: ${res.statusCode} ${data}`));
        resolve(JSON.parse(data));
      });
    });
    req.on('error', reject);
    req.end();
  });
}

// Post to LinkedIn
function createPost(token, personUrn, text) {
  const body = JSON.stringify({
    author: personUrn,
    lifecycleState: 'PUBLISHED',
    specificContent: {
      'com.linkedin.ugc.ShareContent': {
        shareCommentary: { text },
        shareMediaCategory: 'NONE'
      }
    },
    visibility: {
      'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC'
    }
  });

  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.linkedin.com',
      path: '/v2/ugcPosts',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'X-Restli-Protocol-Version': '2.0.0'
      }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        if (res.statusCode >= 300) return reject(new Error(`Post failed: ${res.statusCode} ${data}`));
        resolve({ status: res.statusCode, data });
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const postFile = args.find(a => !a.startsWith('--'));

  if (!postFile) {
    console.error('Usage: node post-to-linkedin.js <post-file> [--dry-run]');
    process.exit(1);
  }

  const text = fs.readFileSync(postFile, 'utf8').trim();
  console.log(`Post content (${text.length} chars):\n${text.substring(0, 200)}...`);

  if (dryRun) {
    console.log('\n[DRY RUN] Would post above content. Exiting.');
    return;
  }

  const token = getToken();
  const userInfo = await getUserInfo(token);
  const personUrn = `urn:li:person:${userInfo.sub}`;
  console.log(`\nPosting as: ${userInfo.name} (${personUrn})`);

  const result = await createPost(token, personUrn, text);
  console.log(`\n✅ Posted successfully! Status: ${result.status}`);
  
  // Move to posted folder
  const postedDir = path.join(__dirname, '../../drafts/linkedin-posted');
  if (!fs.existsSync(postedDir)) fs.mkdirSync(postedDir, { recursive: true });
  const basename = path.basename(postFile);
  fs.renameSync(postFile, path.join(postedDir, `${new Date().toISOString().slice(0,10)}-${basename}`));
  console.log(`Moved to posted/`);
}

main().catch(e => { console.error(e.message); process.exit(1); });
