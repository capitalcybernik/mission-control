const nodemailer = require('nodemailer');
const fs = require('fs');

const blogContent = fs.readFileSync('/root/.openclaw/workspace/drafts/cmmc-four-phase-rollout-blog.md', 'utf8');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: { user: 'capitalcyberus@gmail.com', pass: 'dhzl djvl blkx xipq' }
});

transporter.sendMail({
  from: 'capitalcyberus@gmail.com',
  to: 'anup@capital-cyber.com',
  subject: 'CMMC Blog Draft: Four-Phase Rollout',
  text: `Hi Anup,

Here's a blog draft on the CMMC 2.0 Four-Phase Rollout, written by Ares on Nikhil's request. Please review and let us know if you'd like any changes before publishing.

---

${blogContent}`
}, (err, info) => {
  if (err) { console.error('Error:', err); process.exit(1); }
  console.log('Email sent:', info.messageId);
});
