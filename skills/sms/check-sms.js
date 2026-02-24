#!/usr/bin/env node
/**
 * Check inbound SMS replies via Twilio
 * Usage: node check-sms.js [minutes_back]
 * Default: last 60 minutes
 */

const twilio = require('twilio');

const ACCOUNT_SID = 'AC217e17844ac36dc75ed3bcecb65a82ba';
const AUTH_TOKEN = 'e814dbd496ac3d0e154e9047fde9a8e4';
const MY_NUMBER = '+12028994592';

const minutesBack = parseInt(process.argv[2] || '60', 10);
const since = new Date(Date.now() - minutesBack * 60 * 1000);

const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

client.messages.list({
  to: MY_NUMBER,
  dateSentAfter: since,
  limit: 20,
}).then(messages => {
  if (messages.length === 0) {
    console.log('No inbound messages in the last ' + minutesBack + ' minutes.');
    return;
  }
  messages.forEach(m => {
    const time = new Date(m.dateSent).toLocaleString('en-US', { timeZone: 'America/New_York' });
    console.log(`📩 From: ${m.from} | ${time}`);
    console.log(`   "${m.body}"`);
    console.log('');
  });
}).catch(err => {
  console.error('❌', err.message);
  process.exit(1);
});
