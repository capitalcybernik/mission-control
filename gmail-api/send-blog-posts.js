const fs = require('fs');
const { google } = require('googleapis');

const creds = JSON.parse(fs.readFileSync('./credentials.json'));
const tokens = JSON.parse(fs.readFileSync('./token.json'));
const { client_id, client_secret, redirect_uris } = creds.installed;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
oAuth2Client.setCredentials(tokens);
const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

// Read all blog post files
const blogPosts = [
  { name: '01-cmmc-phase-1-enforcement.md', title: 'CMMC Phase 1 Enforcement' },
  { name: '02-tax-season-cybersecurity-cpas.md', title: 'Tax Season Cybersecurity for CPAs' },
  { name: '03-mortgage-wire-fraud-protection.md', title: 'Mortgage Wire Fraud Protection' },
  { name: '04-not-your-it-company-msp-mssp-mcp.md', title: 'Not Your IT Company: MSP/MSSP/MCP' }
];

const boundary = 'boundary_' + Date.now();
const boundary2 = 'boundary2_' + Date.now();

// Build email with multipart/mixed (for attachments) and multipart/alternative (for text/html)
let email = [
  'From: capitalcyberus@gmail.com',
  'To: anup@capital-cyber.com',
  'Cc: nikhil@capital-cyber.com',
  'Subject: 4 Blog Posts for Capital Cyber Website',
  'MIME-Version: 1.0',
  'Content-Type: multipart/mixed; boundary="' + boundary + '"',
  ''
];

// Add text body
email = email.concat([
  '--' + boundary,
  'Content-Type: text/plain; charset=utf-8',
  '',
  'Hi Anup,',
  '',
  'Attached are 4 blog posts for the Capital Cyber website.',
  '',
  '1. CMMC Phase 1 Enforcement - For government contractors',
  '2. Tax Season Cybersecurity - For CPA firms',
  '3. Mortgage Wire Fraud Protection - For mortgage companies',
  '4. Not Your IT Company - Positioning piece on MSP/MSSP/MCP',
  '',
  'Each file includes detailed image notes/suggestions throughout.',
  '',
  'Please review and let me know if any edits needed.',
  '',
  'Thanks,',
  'Ares'
]);

// Add attachments
for (const post of blogPosts) {
  const content = fs.readFileSync(`../blog-posts/${post.name}`);
  const base64Content = content.toString('base64');
  
  email = email.concat([
    '--' + boundary,
    `Content-Type: text/markdown; name="${post.name}"`,
    `Content-Disposition: attachment; filename="${post.name}"`,
    'Content-Transfer-Encoding: base64',
    '',
    base64Content
  ]);
}

// Close boundary
email.push('--' + boundary + '--');

const emailText = email.join('\r\n');
const raw = Buffer.from(emailText).toString('base64url');

gmail.users.messages.send({
  userId: 'me',
  requestBody: { raw: raw }
}).then(res => {
  console.log('Sent:', res.data.id);
}).catch(e => {
  console.error('Error:', e);
});
