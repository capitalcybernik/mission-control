const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: { user: 'capitalcyberus@gmail.com', pass: 'dhzl djvl blkx xipq' }
});

const body = `Rick, Nikhil,

Here's a clean breakdown of the four CMMC 2.0 deployment phases. This is the timeline every DoD contractor in our pipeline needs to understand, and the framework for how we position our services this year.

PHASE 1: NOVEMBER 10, 2025 to NOVEMBER 9, 2026 (WE ARE HERE)

What's happening: DoD has started including CMMC Level 1 and Level 2 self-assessment requirements in new solicitations and contracts. Contracting officers have discretion on which contracts include CMMC requirements, but the trend is accelerating.

What contractors must do: Complete a self-assessment, post their SPRS score, and have a senior official sign an affirmation. This must be done BEFORE contract award.

Assessment types accepted: Level 1 Self-Assessment, Level 2 Self-Assessment. DoD may also include Level 2 C3PAO requirements for select contracts.

Capital Cyber angle: This is our entry window. Contractors who haven't done their self-assessment need help NOW. Our gap assessments and SSP/POA&M documentation services are the exact solution.


PHASE 2: NOVEMBER 10, 2026 to NOVEMBER 9, 2027

What's happening: The big shift. All applicable CUI contracts will require Level 2 certification assessments conducted by accredited C3PAOs. Self-assessments are no longer sufficient for CUI contracts.

What contractors must do: Have a C3PAO conduct a formal assessment. This means all 110 NIST SP 800-171 controls must be implemented (or on a POA&M that closes within 180 days). The SSP must be complete and audit-ready.

New additions: DoD may begin including Level 3 (DIBCAC) requirements for high-sensitivity programs.

Capital Cyber angle: This is the deadline that drives urgency. Contractors need 6 to 12 months of prep before a C3PAO assessment. If they haven't started by mid-2026, they're in trouble. Our full compliance package (gap assessment through C3PAO prep) is built for this.


PHASE 3: NOVEMBER 10, 2027 to NOVEMBER 9, 2028

What's happening: CMMC requirements expand to option period exercises on existing contracts. Level 2 C3PAO assessments required for all applicable contracts AND option periods. Level 3 (DIBCAC) assessments intended for all applicable contracts.

What contractors must do: Maintain active certification. Even contracts awarded before CMMC can trigger compliance requirements when option periods come up for renewal.

Capital Cyber angle: Ongoing vCSO and compliance maintenance services become critical. Clients who certified in Phase 2 need continuous monitoring and annual affirmations. This is recurring revenue.


PHASE 4: NOVEMBER 10, 2028 AND BEYOND

What's happening: Full implementation. Every applicable DoD contract requires CMMC certification. No exceptions, no discretion, no waivers. Supply chain accountability fully enforced.

What contractors must do: Maintain valid certification at all times. Ensure all subcontractors in the supply chain meet appropriate CMMC levels. Triennial reassessments for Level 2 and Level 3.

Capital Cyber angle: By this point, CMMC compliance is table stakes. The firms that built their client base in Phases 1 and 2 own the market. Maintenance, reassessment prep, and supply chain compliance advisory become steady revenue streams.


KEY DATES TO REMEMBER

Nov 10, 2025: Phase 1 begins (ACTIVE NOW)
Nov 10, 2026: Phase 2 begins, C3PAO assessments mandatory for CUI contracts
Nov 10, 2027: Phase 3, option periods included
Nov 10, 2028: Full implementation, no exceptions
Level 1 renewal: Annual
Level 2 (C3PAO) renewal: Every 3 years


Let me know if you want this formatted for client-facing use as well.

Ares
Master Control`;

transporter.sendMail({
  from: '"Ares - Capital Cyber" <capitalcyberus@gmail.com>',
  to: 'rick@capital-cyber.com',
  cc: 'nikhil@capital-cyber.com',
  subject: 'CMMC 2.0: The Four-Phase Deployment Timeline (Reference)',
  text: body
}, (err, info) => {
  if (err) console.error('Error:', err);
  else console.log('Sent:', info.messageId);
});
