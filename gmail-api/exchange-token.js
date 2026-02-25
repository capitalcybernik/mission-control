const { google } = require('googleapis');
const fs = require('fs');

const creds = JSON.parse(fs.readFileSync('credentials.json'));
const { client_id, client_secret, redirect_uris } = creds.installed;

const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

const code = '4/0AfrIepAivNj-MrsSMAy0nhd2DSXEI48sES7HowUUahaGxPrIa-dC9L4ZEwknFwGeoDF2Cg';

oAuth2Client.getToken(code).then(({ tokens }) => {
  fs.writeFileSync('token.json', JSON.stringify(tokens, null, 2));
  console.log('SUCCESS: Token saved to token.json');
  console.log('Access token:', tokens.access_token ? 'YES' : 'NO');
  console.log('Refresh token:', tokens.refresh_token ? 'YES' : 'NO');
  console.log('Expiry:', tokens.expiry_date);
}).catch(err => {
  console.error('ERROR:', err.message);
});
