# Why Mortgage Companies Are Losing Millions to Wire Fraud (And How to Stop It)

**[IMAGE PLACEMENT 1: Hero Image]**
*Suggested image:* Dramatic split showing a happy homebuyer getting keys on left, and on right a wire transfer being intercepted by a hacker with dollar signs disappearing. Headline: "The $200,000 Mistake."
*Alt text:* "Wire fraud targeting mortgage companies and real estate transactions"
*Size:* 1200x630px

---

The average mortgage company processes 50-200 wire transfers per month. Each one is a $150,000 to $500,000 transaction. And each one is vulnerable to the same attack that has cost the industry over $1.5 billion since 2021.

Wire fraud is not a theoretical risk for mortgage companies. It is the primary cyber threat you face. This post explains how the attack works, why mortgage companies are perfect targets, and exactly what you need to do to protect your closings.

## The Anatomy of a Mortgage Wire Fraud Attack

Here is how it actually happens, step by step, based on real FBI case files and our forensic work with attacked firms.

### Phase 1: Reconnaissance (Days 1-14)

The attacker researches your company. They find your:
- Loan officers and their email addresses
- Closing attorneys you work with
- Typical transaction timeline (how many days from application to closing)
- Wire transfer patterns (do you use the same title company repeatedly?)

They subscribe to your email newsletters. They follow your loan officers on LinkedIn. They learn your communication style.

**[IMAGE PLACEMENT 2: Reconnaissance Phase]**
*Suggested image:* Collage showing: LinkedIn profile with magnifying glass, email inbox with multiple messages, calendar showing closing dates, title company logo collection. Convey "research" and "monitoring" visually.
*Alt text:* "How cybercriminals research mortgage companies before attacking"

### Phase 2: Initial Compromise (Days 15-30)

The attacker sends a phishing email to your loan officer. It looks like:
- A document sharing link from a "prospective borrower"
- A voicemail notification from your phone system
- An e-signature request that seems legitimate

Someone clicks. Now the attacker has access to your email.

They do not act immediately. They wait. They watch. They learn who handles wires, what your templates look like, and when your busiest closing days are.

### Phase 3: The Interception (Days 31-45)

A borrower emails asking about wiring closing funds. Or a title company sends final instructions. The attacker sees this in real-time.

They use one of two tactics:

**Tactic A: The Redirect**
- Attacker replies from a spoofed email address (nearly identical to yours or the title company's)
- Changes the wire instructions mid-conversation
- "Update: Please use this account instead"
- Your borrower wires $187,000 to the attacker's account

**Tactic B: The Injection**
- Attacker compromises the title company's email too
- Sends wire instructions directly to your borrower
- Instructions look perfect, use the right logos, right language
- Account number is just slightly different (or completely different if the title company was the first target)

**[IMAGE PLACEMENT 3: The Interception]**
*Suggested image:* Email chain mockup showing: Original wire instructions → Intercepted → Modified instructions with changed account number highlighted in red. Show two email addresses that look almost identical (jane@title-company.com vs jane@title-c0mpany.com).
*Alt text:* "How attackers intercept and modify wire transfer instructions"

### Phase 4: The Money Vanishes (Day 46)

The wire hits the attacker's account. Within 2 hours, it is moved through 3-5 intermediary accounts. Within 24 hours, it is converted to cryptocurrency or withdrawn as cash overseas.

By the time anyone realizes the mistake, recovery is nearly impossible.

**Average loss per incident:** $187,000
**Recovery rate:** Under 15%
**Time to discovery:** Usually 1-3 days after the wire (often a weekend when banks are slow)

## Why Mortgage Companies Are Perfect Targets

Attackers do not choose victims randomly. They choose the most profitable, least defended targets. Here is why you are on their list:

### High Transaction Values

A typical business email compromise nets $50,000-$75,000. A mortgage wire fraud averages $187,000. Some closings exceed $500,000. Same effort, 3x the payout.

### Time Pressure

Closings have hard deadlines. If a wire is delayed, the deal falls through. This pressure makes people skip verification steps. Attackers know you will prioritize speed over security.

### Multiple Parties = Confusion

A typical closing involves: borrower, loan officer, processor, underwriter, title company, closing attorney, real estate agents. With this many people communicating, verifying who said what is hard.

### Limited Cybersecurity Investment

Most mortgage companies spend on LOS software, CRMs, and marketing. They underspend on email security, MFA, and wire verification protocols. Attackers know this.

**[IMAGE PLACEMENT 4: Target Profile Infographic]**
*Suggested image:* Four-quadrant diagram showing: High Value (large dollar amounts), Time Pressure (clock icon), Multiple Parties (group icon), Low Security (unlocked padlock). Place mortgage company icon in center where all four converge.
*Alt text:* "Why mortgage companies are prime targets for wire fraud attacks"

## The Real-World Consequences

Beyond the lost money, wire fraud destroys:

**Customer trust:** Your borrower just lost their down payment. They will tell everyone. They will sue you. They will post on social media.

**E&O insurance:** Your errors and omissions policy may not cover cyber fraud. Even if it does, premiums spike after a claim.

**Regulatory scrutiny:** State mortgage regulators are increasingly asking about cybersecurity. A public breach invites examination.

**Staff morale:** Who clicked the phishing link? Do they get fired? Do they quit from guilt? Wire fraud destroys teams.

**Business continuity:** A major loss can put a small mortgage company out of business permanently.

## Prevention: The Wire Verification Protocol

Here is the good news: wire fraud is almost 100% preventable with one simple protocol.

### The Golden Rule

**Verify every wire instruction change via phone call to a known, trusted number. Never via email. Never via text. Always via phone.**

### The Full Protocol

1. **At loan application:** Document the borrower's phone number in your LOS. Not the phone number they email from. The one you call and verify at application.

2. **At closing:** When wire instructions are sent, call the title company using the number on their website (not the email signature). Confirm the account details verbally.

3. **For changes:** If anyone sends "updated" wire instructions, stop. Call the title company directly using a number you independently verified. Ask: "Did you send new wire instructions? Can you confirm the account number verbally?"

4. **For large wires:** If the amount exceeds $100,000, require dual verification. Two people must make the confirmation call.

5. **Document everything:** Log the call, time, who confirmed, and the account number verbally stated. If fraud occurs, this documentation protects you legally.

**[IMAGE PLACEMENT 5: Wire Verification Flowchart]**
*Suggested image:* Decision tree/flowchart showing: Wire instructions received → Is this a change? → Call title company using known number → Confirm account verbally → Log the call → Proceed with wire. Use green checkmarks for each verification step.
*Alt text:* "Wire verification protocol flowchart for mortgage companies"

## Technical Defenses That Actually Work

The phone verification protocol is your primary defense. These technical measures are your backup:

### Email Security
- **DMARC enforcement:** Prevents spoofing of your domain
- **Advanced threat protection:** Scans links and attachments in real-time
- **Outbound filtering:** Flags emails containing wire instructions or account numbers

### Access Controls
- **Multi-factor authentication:** On all email, LOS, and financial systems. No exceptions.
- **Privileged access management:** Only designated employees can send wire instructions
- **Session timeouts:** Auto-logout after 15 minutes of inactivity

### Monitoring
- **Email rule alerts:** Notify security team when rules are created (attackers create forwarding rules)
- **Login alerts:** Flag logins from new locations or devices
- **Wire threshold alerts:** Require additional approval for wires over $100K

**[IMAGE PLACEMENT 6: Defense Layers Graphic]**
*Suggested image:* Castle/wall metaphor or onion layer showing multiple defenses: Phone verification (outer wall) → Email security (inner wall) → MFA (gate) → Monitoring (guards). Convey "defense in depth" visually.
*Alt text:* "Layered security defenses for mortgage wire fraud protection"

## What to Do If It Happens

Despite best efforts, breaches occur. Here is your incident response playbook:

**Within 1 hour:**
- Contact your bank's wire fraud hotline
- File report with FBI Internet Crime Complaint Center (IC3.gov)
- Notify your cyber insurance carrier

**Within 4 hours:**
- Engage a forensics firm to preserve evidence
- Notify the title company and borrower
- Document everything for law enforcement

**Within 24 hours:**
- Engage legal counsel
- Prepare regulatory notifications (state mortgage regulators)
- Prepare customer communications

**Reality check:** Recovery is rare. Prevention is everything.

## How Capital Cyber Helps Mortgage Companies

We work with mortgage lenders in Virginia and DC who process $50M+ in annual volume. We understand your workflows, your LOS systems, and your regulatory environment.

**Our mortgage-specific services:**
- **Wire fraud prevention assessment:** Review your current protocols and close gaps
- **Email security hardening:** DMARC, advanced threat protection, outbound filtering
- **Staff training:** Role-specific training for loan officers, processors, and closers
- **Incident response planning:** Documented playbooks for when fraud occurs
- **Ongoing monitoring:** 24/7 threat detection tailored to mortgage workflows

**[IMAGE PLACEMENT 7: CTA Banner]**
*Suggested image:* Professional banner showing secure wire transfer imagery with "Wire Fraud Prevention Assessment - Starting at $3,500" and phone number (571) 410-3066.
*Alt text:* "Contact Capital Cyber for mortgage wire fraud prevention assessment"

## The Bottom Line

Wire fraud against mortgage companies is not a sophisticated, hard-to-stop attack. It succeeds because firms skip basic verification steps under time pressure.

The solution is cultural, not just technical. Your team must prioritize verification over speed. Management must support this, even when borrowers complain about delays.

Every wire that goes out without phone verification is a $187,000 bet against cybercriminals. Stop gambling.

---

**Want to assess your wire fraud risk?** [Schedule a call with Rick](https://capital-cyber.com/rick) for a mortgage-specific security assessment.

---

*Capital Cyber provides cybersecurity services, wire fraud prevention, and compliance support to mortgage companies, accounting firms, and government contractors in Virginia, DC, and nationwide.*

---

**[IMAGE NOTES FOR WEB GUY:]**
- Hero image needs to convey both the positive (homebuying dream) and negative (fraud risk)
- Flowchart/infographic images should be simple enough to understand at a glance
- Use finance/real estate imagery: keys, contracts, wire transfers, homes
- All images should feel professional and serious (this is a business risk topic)
- Consider sourcing from Canva or hiring a Fiverr designer with financial services experience