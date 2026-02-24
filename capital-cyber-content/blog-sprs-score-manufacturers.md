# SPRS Score Explained: Why Most Manufacturers Are Failing and How to Fix It

*Published by Capital Cyber | Leesburg, VA | (571) 410 3066*

Your SPRS score is the single most visible indicator of your cybersecurity posture to the Department of Defense. Contracting officers check it before awarding contracts. DIBCAC auditors use it as a baseline for investigations. And under the False Claims Act, an inaccurate score can create legal liability that threatens your entire business.

Yet the majority of defense manufacturers have SPRS scores that do not reflect reality. Some submitted scores they knew were optimistic. Others genuinely did not understand the scoring methodology. And a troubling number submitted scores without performing any meaningful self assessment at all.

This article explains exactly what SPRS is, how the scoring works, why most manufacturers are failing, and what you can do to fix it.

## What Is SPRS?

The Supplier Performance Risk System is a Department of Defense platform that tracks supplier risk information across multiple categories. For cybersecurity purposes, SPRS stores the results of contractors' self assessments against NIST SP 800 171, which defines the 110 security controls required to protect Controlled Unclassified Information (CUI).

Under DFARS clause 252.204 7019, every defense contractor handling CUI must have a current NIST SP 800 171 self assessment score posted in SPRS. Under DFARS clause 252.204 7020, the DoD reserves the right to conduct higher level assessments to verify your self reported score.

Your SPRS score is not public, but it is visible to any DoD contracting officer, program manager, or authorized government official. Think of it as your cybersecurity credit score within the defense market.

## How SPRS Scoring Works

### The Basics

Your SPRS score is calculated based on your implementation of the 110 security controls in NIST SP 800 171 Revision 2. A perfect score is 110, meaning all controls are fully implemented. The minimum possible score is negative 203.

Each of the 110 controls is assigned a point value of 1, 3, or 5 based on its security significance. Controls that are not fully implemented reduce your score by their assigned point value.

### The Scoring Formula

Start with 110. For every control that is NOT fully implemented, subtract the control's assigned value.

For example, if you have not implemented a 5 point control and two 3 point controls, your score would be: 110 minus 5 minus 3 minus 3 equals 99.

### Point Values Matter

Not all controls are weighted equally. The controls that the DoD considers most critical carry 5 point values. These include multi factor authentication, encryption of CUI in transit, incident response capabilities, and system and communications protection controls. Missing several 5 point controls can drop your score dramatically.

The 1 point controls cover foundational practices like physical access restrictions, visitor escort requirements, and maintenance oversight. Missing these hurts your score less but still indicates gaps in your security program.

### POA&M Considerations

Controls that are not yet implemented but are documented in a Plan of Action and Milestones (POA&M) with realistic remediation timelines may still count against your score, but they demonstrate a path to compliance. Having a POA&M does not change your numeric score, but it provides context that assessors and contracting officers consider.

## Why Most Manufacturers Are Failing

### The Shocking Reality

Multiple studies and assessments have revealed a consistent and alarming finding: the vast majority of defense manufacturers fall far short of full NIST SP 800 171 implementation. Some industry surveys have found that effectively 0% of small and mid size manufacturers achieved a perfect 110 score. The average actual scores, when honestly assessed, tend to fall in the range of 30 to 70 points below where manufacturers reported them.

### Common Reasons for Inflated Scores

**Misunderstanding "Implemented"**

Many manufacturers interpreted "implemented" loosely. Having a policy written but not enforced. Having a technology purchased but not configured. Having a procedure documented but not followed. In CMMC assessments, "implemented" means the control is operational, consistently applied, and demonstrable. Partial implementation counts as not implemented.

**Optimistic Self Assessment**

When you assess yourself, there is an inherent bias toward favorable results. Manufacturers often gave themselves credit for controls they believed were "mostly" in place or "close enough." CMMC assessors will not share that generosity.

**Lack of Technical Understanding**

Many manufacturers delegated their self assessment to non technical personnel or general IT providers who lacked the expertise to accurately evaluate NIST SP 800 171 controls. Without deep cybersecurity knowledge, it is easy to misinterpret control requirements and overclaim implementation.

**Pressure to Submit Competitive Scores**

There is an undeniable market pressure to submit high SPRS scores. Manufacturers worried that a low score would cost them contracts, so they submitted scores that presented a better picture than reality warranted. This is precisely the dynamic that CMMC's third party assessment requirement is designed to eliminate.

### The Most Common Gaps

Based on our work with manufacturers across the mid Atlantic region, here are the controls that are most frequently NOT implemented despite being claimed:

**Multi Factor Authentication (MFA)**

NIST SP 800 171 requires multi factor authentication for network access to privileged and non privileged accounts. Many manufacturers still rely on passwords alone, especially for legacy systems and shop floor workstations. This is a 5 point control.

**Audit Logging and Review**

You must create, protect, and retain system audit logs, and you must review them regularly. Most small manufacturers have minimal logging and no formal review process. This spans multiple controls worth several points each.

**Encryption of CUI**

CUI must be encrypted in transit (email, file transfers) and at rest (stored data). Many manufacturers send CUI via unencrypted email and store it on unencrypted file servers. These are high value controls.

**Configuration Management**

You must establish and maintain baseline configurations for all systems, track configuration changes, and restrict unauthorized changes. Most manufacturers have no formal configuration management process.

**Incident Response**

You need a documented incident response plan, trained personnel, and the ability to detect, analyze, contain, and recover from cybersecurity incidents. Most small manufacturers have no incident response capability.

**Access Control**

CUI access must be limited to authorized users based on the principle of least privilege. Many manufacturers operate with shared accounts, administrator access for all users, and no formal access control policies.

**Security Awareness Training**

All personnel must receive cybersecurity awareness training and role based training for those with security responsibilities. Many manufacturers have never conducted formal security training.

## How to Fix Your SPRS Score: A Step by Step Guide

### Step 1: Conduct an Honest Reassessment

The first step is understanding your actual score, not the score you wish you had. Engage a qualified cybersecurity firm (not your general IT provider) to conduct an independent assessment of your NIST SP 800 171 implementation. Evaluate each of the 110 controls with strict pass/fail criteria. Document the results honestly.

This assessment will likely produce a score lower than what you originally submitted. That is normal and necessary.

### Step 2: Update Your SPRS Score

If your reassessment reveals that your actual score is lower than your submitted score, you must update it. Yes, a lower score feels risky. But an inaccurate score is far more dangerous. The False Claims Act imposes penalties for false representations to the government, and the Department of Justice has identified cybersecurity fraud as an enforcement priority.

Correcting your score demonstrates good faith and eliminates your most significant legal exposure.

### Step 3: Build Your Plan of Action and Milestones

For every control that is not fully implemented, document it in your POA&M with a realistic remediation timeline, the resources required, and the responsible party. A well structured POA&M shows the DoD that you have identified your gaps and have a credible plan to close them.

### Step 4: Prioritize High Value Controls

Not all gaps are equal. Focus first on the controls with the highest point values and the greatest security impact. Multi factor authentication, encryption, access controls, and incident response capabilities should be at the top of your remediation list.

### Step 5: Implement Quick Wins

Some controls can be implemented quickly and at low cost. Security awareness training. Password policy updates. Visitor logs. Physical access controls. Implementing these quick wins improves your score immediately while you work on more complex controls.

### Step 6: Address the Hard Problems

Legacy systems, network architecture changes, and technology deployments take longer but have the biggest impact on your security posture and your score. This is where working with a specialized cybersecurity firm pays dividends. Capital Cyber has the expertise to design and implement solutions for manufacturing environments that address the most challenging controls.

### Step 7: Document Everything

Every control implementation must be documented in your System Security Plan. Every gap must be documented in your POA&M. Every policy must be written, approved, and distributed. Assessors live and die by documentation, and your documentation must match your actual practices.

### Step 8: Reassess and Update Quarterly

Your SPRS score is not a one time submission. As you close gaps and implement controls, reassess your score and update SPRS. This creates a documented trajectory of improvement that contracting officers and assessors view favorably.

## The Path from Current Score to 110

Getting to a perfect 110 is the goal, but for most manufacturers, it is a journey measured in months, not days. Here is a realistic timeline:

**Month 1 to 2:** Honest reassessment and SPRS correction. Implement quick wins. Score improvement: 10 to 20 points.

**Month 3 to 6:** Deploy MFA, encryption, and endpoint protection. Establish logging and monitoring. Score improvement: 20 to 40 points.

**Month 7 to 12:** Address configuration management, access controls, and network architecture. Complete documentation. Score improvement: 20 to 30 points.

**Month 12 to 15:** Fine tune remaining controls, conduct mock assessments, prepare for C3PAO evaluation. Score improvement: final 10 to 20 points.

## Capital Cyber Can Help

Capital Cyber is a cybersecurity firm in Leesburg, VA that specializes in helping defense manufacturers achieve CMMC compliance. With 24 years of IT and cybersecurity experience and over 20,000 passwords cracked in penetration testing during 2024, we understand both the technical and practical realities of manufacturing cybersecurity.

Our Audit Ready package provides everything manufacturers need to go from their current SPRS score to a CMMC Level 2 certified 110. From gap assessment through C3PAO preparation, we guide you through every step.

**Stop guessing about your SPRS score.** Call (571) 410 3066 or visit [capital-cyber.com](https://capital-cyber.com) for a free CMMC readiness assessment.

Capital Cyber | 1019B Edwards Ferry Rd. #1183, Leesburg, VA 20176

*Security Obsessed. Service Driven.*
