const { google } = require('googleapis');
const fs = require('fs');

const creds = JSON.parse(fs.readFileSync(__dirname + '/credentials.json'));
const tokens = JSON.parse(fs.readFileSync(__dirname + '/token.json'));
const { client_id, client_secret, redirect_uris } = creds.installed;

const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
oAuth2Client.setCredentials(tokens);

oAuth2Client.on('tokens', (newTokens) => {
  const merged = { ...tokens, ...newTokens };
  fs.writeFileSync(__dirname + '/token.json', JSON.stringify(merged, null, 2));
});

const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

async function sendEmail(to, subject, body, isHtml = false) {
  const contentType = isHtml ? 'text/html' : 'text/plain';
  const raw = Buffer.from(
    `From: capitalcyberus@gmail.com\r\n` +
    `To: ${to}\r\n` +
    `Subject: ${subject}\r\n` +
    `MIME-Version: 1.0\r\n` +
    `Content-Type: ${contentType}; charset=utf-8\r\n\r\n` +
    body
  ).toString('base64url');

  try {
    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw },
    });
    console.log('SUCCESS: Email sent! Message ID:', res.data.id);
    return res.data;
  } catch (err) {
    console.error('ERROR:', err.message);
    throw err;
  }
}

// CLI usage: node send-email.js "to@email.com" "Subject" "Body text"
if (require.main === module) {
  const [,, to, subject, ...bodyParts] = process.argv;
  if (!to || !subject) {
    console.log('Usage: node send-email.js "to@email.com" "Subject" "Body text"');
    process.exit(1);
  }
  sendEmail(to, subject, bodyParts.join(' '));
}

module.exports = { sendEmail };
