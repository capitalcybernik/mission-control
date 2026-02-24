#!/usr/bin/env node
/**
 * Ares SMS Tool — Send outbound texts via Twilio
 * Usage: node send-sms.js <to_number> <message>
 * Number format: +1XXXXXXXXXX
 */

const twilio = require('twilio');

const ACCOUNT_SID = 'AC217e17844ac36dc75ed3bcecb65a82ba';
const AUTH_TOKEN = 'e814dbd496ac3d0e154e9047fde9a8e4';
const FROM_NUMBER = '+12028994592';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node send-sms.js <to_number> "<message>"');
  console.error('Example: node send-sms.js +15551234567 "Hey, following up on our conversation"');
  process.exit(1);
}

const to = args[0];
const body = args.slice(1).join(' ');

const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

client.messages
  .create({
    body,
    from: FROM_NUMBER,
    to,
  })
  .then((msg) => {
    console.log(`✅ SMS sent — SID: ${msg.sid}`);
    console.log(`   To: ${to}`);
    console.log(`   Status: ${msg.status}`);
  })
  .catch((err) => {
    console.error(`❌ Failed: ${err.message}`);
    process.exit(1);
  });
