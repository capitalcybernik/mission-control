const { google } = require('googleapis');
const fs = require('fs');

const creds = JSON.parse(fs.readFileSync('credentials.json'));
const tokens = JSON.parse(fs.readFileSync('token.json'));
const { client_id, client_secret, redirect_uris } = creds.installed;

const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
oAuth2Client.setCredentials(tokens);

// Save refreshed tokens
oAuth2Client.on('tokens', (newTokens) => {
  const merged = { ...tokens, ...newTokens };
  fs.writeFileSync('token.json', JSON.stringify(merged, null, 2));
});

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

async function createEvent() {
  const event = {
    summary: 'Claude API Subscription Expires',
    description: 'Your Anthropic Claude API token (used by OpenClaw/Ares) expires today.\\n\\nAction needed:\\n1. Go to https://console.anthropic.com\\n2. Generate a new setup token\\n3. Update OpenClaw configuration\\n\\nAccount email: nikhil@vniks.com\\nToken ending in: ZS5AAA',
    location: 'https://console.anthropic.com',
    start: {
      dateTime: '2027-02-17T09:00:00',
      timeZone: 'America/New_York',
    },
    end: {
      dateTime: '2027-02-17T09:30:00',
      timeZone: 'America/New_York',
    },
    attendees: [
      { email: 'nikhil@capital-cyber.com' },
    ],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 43200 },  // 30 days
        { method: 'email', minutes: 10080 },   // 7 days
        { method: 'popup', minutes: 1440 },     // 1 day
        { method: 'popup', minutes: 60 },        // 1 hour
      ],
    },
  };

  try {
    const res = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      sendUpdates: 'all',
    });
    console.log('SUCCESS: Calendar invite created and sent!');
    console.log('Event ID:', res.data.id);
    console.log('Link:', res.data.htmlLink);
    console.log('Status:', res.data.status);
  } catch (err) {
    console.error('ERROR:', err.message);
  }
}

createEvent();
