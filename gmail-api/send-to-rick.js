const fs = require('fs');
const { google } = require('googleapis');

const creds = JSON.parse(fs.readFileSync('./credentials.json'));
const tokens = JSON.parse(fs.readFileSync('./token.json'));
const { client_id, client_secret, redirect_uris } = creds.installed;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
oAuth2Client.setCredentials(tokens);
const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

const cheatSheet = fs.readFileSync('../RICK_OPENCLAW_CHEATSHEET.html');
const boundary = 'boundary_' + Date.now();

const email = [
  'From: capitalcyberus@gmail.com',
  'To: rick@capital-cyber.com',
  'Subject: OpenClaw Quick Start Guide - For Your Training',
  'MIME-Version: 1.0',
  'Content-Type: multipart/mixed; boundary="' + boundary + '"',
  '',
  '--' + boundary,
  'Content-Type: text/plain; charset=utf-8',
  '',
  'Hi Rick,',
  '',
  'Attached is your OpenClaw Quick Start Guide for training.',
  '',
  'This cheat sheet covers:',
  '- How to give Ares work (what I can/can\'t do)',
  '- Command reference',
  '- The request-to-result workflow',
  '- Style and tone guidelines',
  '- Escalation rules',
  '',
  'Open the HTML file in any browser. You can print it or save as PDF if you prefer.',
  '',
  'Questions? Just message me on Telegram (@Ares2040_bot) or ask Nikhil.',
  '',
  '- Ares, Master Control',
  '',
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
}).then(res => console.log('Sent to Rick:', res.data.id)).catch(e => console.error(e));
