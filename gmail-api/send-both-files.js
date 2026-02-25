const fs = require('fs');
const { google } = require('googleapis');

const creds = JSON.parse(fs.readFileSync('./credentials.json'));
const tokens = JSON.parse(fs.readFileSync('./token.json'));
const { client_id, client_secret, redirect_uris } = creds.installed;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
oAuth2Client.setCredentials(tokens);
const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

const htmlContent = fs.readFileSync('../assets/cga-private-schools-onepager.html');
const cheatSheet = fs.readFileSync('../RICK_OPENCLAW_CHEATSHEET.html');
const boundary = 'boundary_' + Date.now();

const email = [
  'From: capitalcyberus@gmail.com',
  'To: nikhil@capital-cyber.com',
  'Subject: CGA One-Pager (FIXED) + Rick Cheat Sheet (HTML)',
  'MIME-Version: 1.0',
  'Content-Type: multipart/mixed; boundary="' + boundary + '"',
  '',
  '--' + boundary,
  'Content-Type: text/plain; charset=utf-8',
  '',
  'FIXED FILES:\n\n1. CGA Private Schools One-Pager: "registered nonprofit" (not 501c3), no em dashes\n2. Rick Cheat Sheet: Clean HTML version, no em dashes\n\nBoth attached. Open HTML files in browser, print to PDF if needed.',
  '',
  '--' + boundary,
  'Content-Type: text/html; name="CGA-Private-Schools-OnePager.html"',
  'Content-Disposition: attachment; filename="CGA-Private-Schools-OnePager.html"',
  'Content-Transfer-Encoding: base64',
  '',
  htmlContent.toString('base64'),
  '--' + boundary,
  'Content-Type: text/html; name="RICK_OPENCLAW_CHEATSHEET.html"',
  'Content-Disposition: attachment; filename="RICK_OPENCLAW_CHEATSHEET.html"',
  'Content-Transfer-Encoding: base64',
  '',
  cheatSheet.toString('base64'),
  '--' + boundary + '--'
].join('\r\n');

const raw = Buffer.from(email).toString('base64url');

gmail.users.messages.send({
  userId: 'me',
  requestBody: { raw: raw }
}).then(res => console.log('Sent:', res.data.id)).catch(e => console.error(e));
