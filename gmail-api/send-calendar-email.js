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

const icsContent = [
  'BEGIN:VCALENDAR',
  'VERSION:2.0',
  'PRODID:-//Capital Cyber//Ares//EN',
  'METHOD:REQUEST',
  'BEGIN:VEVENT',
  'UID:claude-api-expiry-2027@capital-cyber.com',
  'DTSTART:20270217T140000Z',
  'DTEND:20270217T143000Z',
  'SUMMARY:Claude API Subscription Expires',
  'DESCRIPTION:Your Anthropic Claude API token (used by OpenClaw/Ares) expires today.\\n\\nAction needed:\\n1. Go to https://console.anthropic.com\\n2. Generate a new setup token\\n3. Update OpenClaw configuration\\n\\nAccount email: nikhil@vniks.com\\nToken ending in: ZS5AAA',
  'LOCATION:https://console.anthropic.com',
  'ORGANIZER;CN=Capital Cyber:mailto:capitalcyberus@gmail.com',
  'ATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;CN=Nikhil:mailto:nikhil@capital-cyber.com',
  'STATUS:CONFIRMED',
  'BEGIN:VALARM',
  'TRIGGER:-P30D',
  'ACTION:DISPLAY',
  'DESCRIPTION:Claude API expires in 30 days',
  'END:VALARM',
  'BEGIN:VALARM',
  'TRIGGER:-P7D',
  'ACTION:DISPLAY',
  'DESCRIPTION:Claude API expires in 7 days',
  'END:VALARM',
  'BEGIN:VALARM',
  'TRIGGER:-P1D',
  'ACTION:DISPLAY',
  'DESCRIPTION:Claude API expires tomorrow',
  'END:VALARM',
  'END:VEVENT',
  'END:VCALENDAR'
].join('\r\n');

const boundary = 'boundary_ares_calendar_invite';
const icsBase64 = Buffer.from(icsContent).toString('base64');

const emailBody = [
  `From: capitalcyberus@gmail.com`,
  `To: capitalcyberus@gmail.com`,
  `Subject: Calendar Invite: Claude API Subscription Expires (Feb 17, 2027)`,
  `MIME-Version: 1.0`,
  `Content-Type: multipart/mixed; boundary="${boundary}"`,
  ``,
  `--${boundary}`,
  `Content-Type: text/plain; charset=utf-8`,
  ``,
  `Calendar invite attached: Claude API Subscription Expires`,
  `Date: February 17, 2027 at 9:00 AM EST`,
  ``,
  `Your Anthropic Claude API token expires on this date.`,
  `Open the attached .ics file to add this to your calendar.`,
  ``,
  `Reminders included: 30 days, 7 days, and 1 day before expiry.`,
  ``,
  `--${boundary}`,
  `Content-Type: text/calendar; charset=utf-8; method=REQUEST`,
  `Content-Transfer-Encoding: base64`,
  `Content-Disposition: attachment; filename="claude-api-expiry.ics"`,
  ``,
  icsBase64,
  ``,
  `--${boundary}--`
].join('\r\n');

const raw = Buffer.from(emailBody).toString('base64url');

gmail.users.messages.send({
  userId: 'me',
  requestBody: { raw },
}).then(res => {
  console.log('SUCCESS: Calendar invite email sent! Message ID:', res.data.id);
}).catch(err => {
  console.error('ERROR:', err.message);
});
