// Email Templates for CGA CPA Outreach Campaign
// 3-email sequence, personalized per contact
const { getUnsubscribeLink, CGA_ADDRESS } = require('./unsubscribe');

function getState(location) {
    if (!location) return '';
    const parts = location.split(',');
    if (parts.length >= 2) {
        const state = parts[parts.length - 2]?.trim() || '';
        return state;
    }
    return '';
}

function getFooter(sender, email) {
    const unsubLink = getUnsubscribeLink(email);
    return `

<p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
<strong>${sender.name}</strong><br>
Volunteer, Cyber Grants Alliance<br>
${sender.phone}<br>
<a href="https://cybergrantsalliance.org">CyberGrantsAlliance.org</a><br><br>
${CGA_ADDRESS}<br><br>
<a href="${unsubLink}" style="color: #666;">Unsubscribe</a> from these emails.
</p>`;
}

function email1(contact, sender) {
    const state = getState(contact.location);
    const stateRef = state ? ` in ${state}` : '';
    
    const subject = `Cybersecurity grant for ${contact.company}`;
    
    const html = `<p>Hi ${contact.first},</p>

<p>I'm reaching out as a volunteer with the Cyber Grants Alliance, a nonprofit on a mission to help accounting firms strengthen their cybersecurity posture without the heavy price tag.</p>

<p>As you may know, the FTC Safeguards Rule now classifies all CPA firms and tax preparers as "financial institutions," which means your firm is legally required to implement specific security controls and maintain a Written Information Security Program (WISP). Penalties for failing to comply can reach up to <strong>$100,000 per violation</strong>, with personal liability of $10,000 for firm leaders.</p>

<p>We currently have grants available that cover a significant portion of the cost to help firms${stateRef} get compliant, including an annual risk assessment grant that complies with FTC requirements.</p>

<p>If this is something ${contact.company} could benefit from, it takes about 2 minutes to apply:<br>
👉 <strong><a href="https://cybergrantsalliance.org">CyberGrantsAlliance.org</a></strong></p>

<p>Happy to answer any questions.</p>

<p>Best,<br>
<strong>${sender.name}</strong><br>
Volunteer, Cyber Grants Alliance<br>
${sender.phone}<br>
<a href="https://cybergrantsalliance.org">CyberGrantsAlliance.org</a></p>

<p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
${CGA_ADDRESS}<br><br>
<a href="${getUnsubscribeLink(contact.email)}" style="color: #666;">Unsubscribe</a> from these emails.
</p>`;

    return { subject, html };
}

function email2(contact, sender) {
    const state = getState(contact.location);
    
    const subject = `FBI warning relevant to ${contact.company}`;
    
    const html = `<p>Hi ${contact.first},</p>

<p>I wanted to follow up on my last note and share something that's been getting a lot of attention in the accounting world.</p>

<p>On January 28, 2026, the FBI launched <strong>Operation Winter SHIELD</strong> (Securing Homeland Infrastructure by Enhancing Layered Defense), a 10 week national campaign identifying the most critical cybersecurity actions organizations need to take right now. The FBI developed these recommendations based on real investigations and the most common security gaps they see being exploited.</p>

<p>CPA firms are squarely in the crosshairs. Tax season means a flood of sensitive data (SSNs, bank accounts, financial records) moving through your systems, and attackers know it. In fact, <strong>43% of all cyberattacks target small and medium businesses</strong>, and Q1 2025 set the record for the highest number of ransomware victims ever reported.</p>

<p>The Cyber Grants Alliance exists specifically to help firms like ${contact.company} close these gaps before something happens. Our grants can cover the cost of a security assessment, WISP development, and staff training.</p>

<p>It takes about 2 minutes to apply:<br>
👉 <strong><a href="https://cybergrantsalliance.org">CyberGrantsAlliance.org</a></strong></p>

<p>Worth a look before tax season gets any busier.</p>

<p>Best,<br>
<strong>${sender.name}</strong><br>
Volunteer, Cyber Grants Alliance<br>
${sender.phone}<br>
<a href="https://cybergrantsalliance.org">CyberGrantsAlliance.org</a></p>

<p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
${CGA_ADDRESS}<br><br>
<a href="${getUnsubscribeLink(contact.email)}" style="color: #666;">Unsubscribe</a> from these emails.
</p>`;

    return { subject, html };
}

function email3(contact, sender) {
    const isDM = contact.is_dm === 'True' || contact.is_dm === true;
    const personalLiability = isDM 
        ? ' As a firm leader, you could face <strong>$10,000 in personal fines</strong> per violation on top of the firm penalties.'
        : '';
    
    const subject = `CPA firm fined $60,000 after ransomware attack`;
    
    const html = `<p>Hi ${contact.first},</p>

<p>I'll keep this brief because I know tax season is in full swing.</p>

<p>Earlier this year, <strong>Wojeski & Company</strong>, a CPA firm, was hit with a <strong>$60,000 penalty</strong> by the New York Attorney General after a ransomware attack exposed over 4,700 clients' Social Security numbers, financial records, and medical information. The firm took a year and a half to notify affected clients, which made things significantly worse.</p>

<p>The AG's office said it plainly: <em>"As an accounting firm, Wojeski should have taken stronger measures to protect New Yorkers' personal data."</em></p>

<p>Under the FTC Safeguards Rule, penalties can reach <strong>$100,000 per violation</strong> and <strong>$43,000 per day</strong> for ongoing violations.${personalLiability} The FTC also now requires firms to report breaches within 30 days.</p>

<p>The Cyber Grants Alliance offers grants to help CPA firms get compliant and protected before something like this happens. No cost assessments, WISP development, and employee training, all covered through our grant program.</p>

<p>2 minutes to apply:<br>
👉 <strong><a href="https://cybergrantsalliance.org">CyberGrantsAlliance.org</a></strong></p>

<p>Don't wait until it's your firm in the headline.</p>

<p>Best,<br>
<strong>${sender.name}</strong><br>
Volunteer, Cyber Grants Alliance<br>
${sender.phone}<br>
<a href="https://cybergrantsalliance.org">CyberGrantsAlliance.org</a></p>

<p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
${CGA_ADDRESS}<br><br>
<a href="${getUnsubscribeLink(contact.email)}" style="color: #666;">Unsubscribe</a> from these emails.
</p>`;

    return { subject, html };
}

module.exports = { email1, email2, email3, getState };