const fs = require('fs');
const { google } = require('googleapis');

const creds = JSON.parse(fs.readFileSync('./credentials.json'));
const tokens = JSON.parse(fs.readFileSync('./token.json'));
const { client_id, client_secret, redirect_uris } = creds.installed;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
oAuth2Client.setCredentials(tokens);
const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

const boundary = 'boundary_' + Date.now();

const email = [
  'From: capitalcyberus@gmail.com',
  'To: nikhil@capital-cyber.com',
  'Subject: Action Items from Weekly Sales Review (Feb 21)',
  'MIME-Version: 1.0',
  'Content-Type: multipart/alternative; boundary="' + boundary + '"',
  '',
  '--' + boundary,
  'Content-Type: text/plain; charset=utf-8',
  '',
  'ACTION ITEMS FROM FEB 21 MEETING:\n\n',
  '1. NAMING CONVENTION\n',
  '   - Nikhil to research and create standardized naming system for files/docs\n',
  '   - Due: This week\n\n',
  '2. CMMC EVENT PLANNING\n',
  '   - Rick to project manage with twice-weekly check-ins\n',
  '   - Confirm date (April 25/28 or early May)\n',
  '   - Reach out to Annette to confirm her participation\n',
  '   - Create event page/registration\n\n',
  '3. GO HIGH LEVEL SETUP\n',
  '   - Add as new rock in Dart AI\n',
  '   - Research Sean Lazauskis partnership terms\n\n',
  '4. AI CONTENT PROCESS\n',
  '   - Rick: Review and tweak all AI-generated content before publishing\n',
  '   - Nikhil to provide feedback on what needs changing\n\n',
  '5. TRAINING CALLS\n',
  '   - Start recording Will\'s sales calls for AI training\n',
  '   - Download and organize recordings\n\n',
  '6. USB SECURITY DEVICE RESEARCH\n',
  '   - Q2 project: Research white-label USB security devices\n',
  '   - Price point: $15-60 as lead magnet\n\n',
  '- Ares, Master Control',
  '',
  '--' + boundary + '--'
].join('\r\n');

const raw = Buffer.from(email).toString('base64url');

gmail.users.messages.send({
  userId: 'me',
  requestBody: { raw: raw }
}).then(res => console.log('Sent:', res.data.id)).catch(e => console.error(e));
