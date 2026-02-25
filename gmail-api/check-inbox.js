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

async function checkInbox(query, maxResults = 5) {
  const res = await gmail.users.messages.list({
    userId: 'me',
    q: query,
    maxResults
  });
  
  if (!res.data.messages || res.data.messages.length === 0) {
    console.log('No messages found for query:', query);
    return;
  }
  
  for (const msg of res.data.messages) {
    const full = await gmail.users.messages.get({
      userId: 'me',
      id: msg.id,
      format: 'full'
    });
    
    const headers = full.data.payload.headers;
    const subject = headers.find(h => h.name === 'Subject')?.value || 'No subject';
    const from = headers.find(h => h.name === 'From')?.value || 'Unknown';
    const date = headers.find(h => h.name === 'Date')?.value || 'Unknown';
    
    let body = '';
    if (full.data.payload.body?.data) {
      body = Buffer.from(full.data.payload.body.data, 'base64').toString('utf8');
    } else if (full.data.payload.parts) {
      for (const part of full.data.payload.parts) {
        if (part.mimeType === 'text/plain' && part.body?.data) {
          body = Buffer.from(part.body.data, 'base64').toString('utf8');
          break;
        }
      }
    }
    
    console.log(`\n=== ${subject} ===`);
    console.log(`From: ${from}`);
    console.log(`Date: ${date}`);
    console.log(`Body: ${body.substring(0, 500)}`);
    console.log('---');
  }
}

const query = process.argv[2] || 'wordpress OR "wp-admin" OR cybergrantsalliance';
checkInbox(query).catch(console.error);
