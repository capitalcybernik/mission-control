const { sendEmail } = require('./send-email.js');
const fs = require('fs');

const html = fs.readFileSync('../assets/cga-private-schools-onepager.html', 'utf8');

sendEmail('nikhil@capital-cyber.com', 'CGA Private School Grant One-Pager (with CZ Tech Partner Info)', 
  'CGA Private Schools One-Pager attached as HTML.\n\nOpen in browser and print to PDF, or forward to Kevin at CZ Tech.'
).then(() => {
  console.log('Text email sent. Sending HTML version...');
  // Send HTML version using the sendEmail with isHtml
  const { google } = require('googleapis');
  const creds = JSON.parse(fs.readFileSync('./credentials.json'));
  const tokens = JSON.parse(fs.readFileSync('./token.json'));
  const { client_id, client_secret, redirect_uris } = creds.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  oAuth2Client.setCredentials(tokens);
  const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
  
  const email = [
    'From: capitalcyberus@gmail.com',
    'To: nikhil@capital-cyber.com',
    'Subject: CGA Private School Grant One-Pager',
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=utf-8',
    '',
    html
  ].join('\r\n');
  
  const raw = Buffer.from(email).toString('base64url');
  return gmail.users.messages.send({ userId: 'me', requestBody: { raw } });
}).then(() => console.log('HTML email sent')).catch(e => console.error(e));
