// Unsubscribe tracking for CGA Campaign
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const UNSUBSCRIBE_FILE = path.join(__dirname, 'unsubscribed.json');
const CGA_ADDRESS = '42841 Creek View Plaza Ste 120 PMB 1027, Ashburn, VA 20147';

// Load unsubscribed list
function loadUnsubscribed() {
    if (fs.existsSync(UNSUBSCRIBE_FILE)) {
        return JSON.parse(fs.readFileSync(UNSUBSCRIBE_FILE, 'utf8'));
    }
    return { unsubscribed: [], updatedAt: null };
}

// Save unsubscribed list
function saveUnsubscribed(data) {
    fs.writeFileSync(UNSUBSCRIBE_FILE, JSON.stringify(data, null, 2));
}

// Check if email is unsubscribed
function isUnsubscribed(email) {
    const data = loadUnsubscribed();
    return data.unsubscribed.includes(email.toLowerCase().trim());
}

// Add email to unsubscribe list
function unsubscribe(email) {
    const data = loadUnsubscribed();
    const normalizedEmail = email.toLowerCase().trim();
    if (!data.unsubscribed.includes(normalizedEmail)) {
        data.unsubscribed.push(normalizedEmail);
        data.updatedAt = new Date().toISOString();
        saveUnsubscribed(data);
        return true;
    }
    return false;
}

// Generate unsubscribe link for a contact
const SECRET_KEY = 'cga-unsubscribe-2026';

function getUnsubscribeLink(email) {
    const normalizedEmail = email.toLowerCase().trim();
    const hash = crypto.createHash('sha256').update(normalizedEmail + SECRET_KEY).digest('hex').substring(0, 16);
    return `https://cybergrantsalliance.org/unsubscribe?e=${encodeURIComponent(email)}&h=${hash}`;
}

// Get footer with unsubscribe and address
function getEmailFooter(sender) {
    return `

<p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
<strong>${sender.name}</strong><br>
Volunteer, Cyber Grants Alliance<br>
${sender.phone}<br>
<a href="https://cybergrantsalliance.org">CyberGrantsAlliance.org</a><br><br>
${CGA_ADDRESS}<br><br>
<a href="{{UNSUBSCRIBE_LINK}}" style="color: #666;">Unsubscribe</a> from these emails.
</p>`;
}

module.exports = {
    loadUnsubscribed,
    saveUnsubscribed,
    isUnsubscribed,
    unsubscribe,
    getUnsubscribeLink,
    getEmailFooter,
    CGA_ADDRESS
};