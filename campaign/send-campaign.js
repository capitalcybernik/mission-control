#!/usr/bin/env node
// CGA CPA Outreach Campaign Sender
// Usage: node send-campaign.js --email-num=1 --dry-run
//        node send-campaign.js --email-num=1 --send --limit=10
//        node send-campaign.js --email-num=2 --send --limit=15

const fs = require('fs');
const path = require('path');
const nodemailer = require('/tmp/node_modules/nodemailer');
const { email1, email2, email3 } = require('./email-templates');
const { isUnsubscribed, loadUnsubscribed } = require('./unsubscribe');

// Parse args
const args = {};
process.argv.slice(2).forEach(arg => {
    if (arg.startsWith('--')) {
        const [key, val] = arg.slice(2).split('=');
        args[key] = val === undefined ? true : val;
    }
});

const EMAIL_NUM = parseInt(args['email-num'] || '1');
const DRY_RUN = args['dry-run'] || !args['send'];
const LIMIT = parseInt(args['limit'] || '0');
const TIER = args['tier'] || 'all'; // tier1, tier2, or all
const DELAY_MS = parseInt(args['delay'] || '90000'); // 90s between emails

// Sender accounts
const SENDERS = [
    { name: 'Abigail Harris', email: 'abigail@ransomwareprotectionforyou.com', pass: 'Nb_2025#_$' },
    { name: 'Amelia Taylor', email: 'amelia@cyberpentestingforu.com', pass: 'Nb_2025#_$' },
    { name: 'Aria Scott', email: 'aria@protectionfromransomwareattacks.com', pass: 'Nb_2025#_$' },
    { name: 'Aubrey Carter', email: 'aubrey@cyber-risk-assessments.com', pass: 'Nb_2025#_$' },
    { name: 'Aurora Wright', email: 'aurora@security-risk-assessments.com', pass: 'Nb_2025#_$' },
];

SENDERS.forEach(s => s.phone = '+1 (888) 323 9991');

// Parse TSV
function parseTSV(content) {
    const lines = content.trim().split('\n');
    const headers = lines[0].split('\t');
    return lines.slice(1).map(line => {
        const vals = line.split('\t');
        const obj = {};
        headers.forEach((h, i) => obj[h] = vals[i] || '');
        return obj;
    });
}

// Load contacts
function loadContacts() {
    const file = TIER === 'all' ? 'campaign-all.tsv' 
        : TIER === 'tier1' ? 'campaign-tier1.tsv' 
        : 'campaign-tier2.tsv';
    const tsvPath = path.join(__dirname, '..', file);
    const content = fs.readFileSync(tsvPath, 'utf8');
    return parseTSV(content);
}

// Load sent log
function loadSentLog() {
    const logPath = path.join(__dirname, `sent-email${EMAIL_NUM}.json`);
    if (fs.existsSync(logPath)) {
        return JSON.parse(fs.readFileSync(logPath, 'utf8'));
    }
    return { sent: [] };
}

function saveSentLog(log) {
    const logPath = path.join(__dirname, `sent-email${EMAIL_NUM}.json`);
    fs.writeFileSync(logPath, JSON.stringify(log, null, 2));
}

function createTransporter(sender) {
    return nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: { user: sender.email, pass: sender.pass },
        tls: { ciphers: 'SSLv3' }
    });
}

function getTemplate(num, contact, sender) {
    switch(num) {
        case 1: return email1(contact, sender);
        case 2: return email2(contact, sender);
        case 3: return email3(contact, sender);
        default: throw new Error(`Unknown email number: ${num}`);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    const contacts = loadContacts();
    const sentLog = loadSentLog();
    const unsubData = loadUnsubscribed();
    const sentEmails = new Set(sentLog.sent.map(s => s.email));
    
    // Filter out unsubscribed contacts
    const unsubscribedCount = contacts.filter(c => isUnsubscribed(c.email)).length;
    const availableContacts = contacts.filter(c => !isUnsubscribed(c.email));
    const toSend = availableContacts.filter(c => !sentEmails.has(c.email));
    
    console.log(`\n=== CGA Campaign: Email ${EMAIL_NUM} ===`);
    console.log(`Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE SEND'}`);
    console.log(`Tier: ${TIER}`);
    console.log(`Total contacts: ${contacts.length}`);
    console.log(`Unsubscribed: ${unsubscribedCount} (excluded)`);
    console.log(`Already sent: ${sentEmails.size}`);
    console.log(`Remaining: ${toSend.length}`);
    console.log(`Limit: ${LIMIT || 'none'}`);
    console.log(`Delay: ${DELAY_MS}ms`);
    console.log('');
    
    if (unsubscribedCount > 0) {
        console.log(`⚠️  ${unsubscribedCount} contact(s) unsubscribed - will NOT receive emails 2 or 3`);
        console.log('');
    }
    
    const batch = LIMIT > 0 ? toSend.slice(0, LIMIT) : toSend;
    
    let successCount = 0;
    let errorCount = 0;
    let skippedCount = 0;
    
    for (let i = 0; i < batch.length; i++) {
        const contact = batch[i];
        
        // Double-check unsubscribe status
        if (isUnsubscribed(contact.email)) {
            skippedCount++;
            console.log(`[SKIP ${i+1}/${batch.length}] ${contact.email} - unsubscribed`);
            continue;
        }
        
        const sender = SENDERS[i % SENDERS.length];
        const template = getTemplate(EMAIL_NUM, contact, sender);
        
        if (DRY_RUN) {
            console.log(`[DRY RUN ${i+1}/${batch.length}] To: ${contact.first} ${contact.last} <${contact.email}> | From: ${sender.name} <${sender.email}>`);
            console.log(`  Subject: ${template.subject}`);
            console.log(`  Company: ${contact.company}`);
            console.log();
            continue;
        }
        
        try {
            const transporter = createTransporter(sender);
            const result = await transporter.sendMail({
                from: `"${sender.name}" <${sender.email}>`,
                to: contact.email,
                subject: template.subject,
                html: template.html
            });
            
            sentLog.sent.push({
                email: contact.email,
                name: `${contact.first} ${contact.last}`,
                company: contact.company,
                sender: sender.email,
                messageId: result.messageId,
                sentAt: new Date().toISOString()
            });
            saveSentLog(sentLog);
            
            successCount++;
            console.log(`[SENT ${i+1}/${batch.length}] ${contact.first} ${contact.last} <${contact.email}> | ${sender.name} | ✅`);
            
            if (i < batch.length - 1) {
                await sleep(DELAY_MS);
            }
        } catch (err) {
            errorCount++;
            console.log(`[ERROR ${i+1}/${batch.length}] ${contact.email} | ${err.message}`);
        }
    }
    
    console.log(`\n=== Complete ===`);
    console.log(`Sent: ${successCount} | Errors: ${errorCount} | Skipped (unsub): ${skippedCount}`);
    console.log(`\n${unsubData.unsubscribed.length} total unsubscribed contacts on file`);
    console.log(`Unsubscribe file: ${path.join(__dirname, 'unsubscribed.json')}`);
}

main().catch(console.error);