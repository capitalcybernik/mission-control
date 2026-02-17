# Your SPRS Score Is Lying to You: Why Self-Assessment Isn't Enough

**Meta Description:** Most defense contractors' SPRS scores don't reflect reality. Here's why inflated self-assessments are a ticking time bomb under CMMC.

---

There's a number sitting in the Supplier Performance Risk System right now with your company's name on it. You submitted it yourself. And there's a decent chance it's wrong.

This isn't an accusation. It's a pattern. Across the defense industrial base, self-reported SPRS scores consistently overstate actual compliance with NIST 800-171. Not because contractors are dishonest, but because self-assessment without expertise produces optimistic results. Controls get marked "implemented" when they're partially configured. Policies get checked off because they exist on paper, even if nobody follows them. Risk assessments get scored favorably because the person scoring them doesn't fully understand the requirements.

Under the old model, this was a low-consequence problem. Under CMMC, it's a business-ending one.

## How SPRS Scores Get Inflated

The NIST 800-171 DoD Assessment Methodology scores contractors on a scale of -203 to 110. A perfect score means full implementation of all 110 controls. Each unimplemented control subtracts points, with weights varying from 1 to 5 depending on the control's significance.

Most contractors score themselves between 70 and 100. Industry assessments of those same contractors frequently reveal actual scores of 20 to 50. That's not a minor discrepancy. That's a gap that represents dozens of unimplemented or partially implemented controls.

The inflation happens at every level:

**Access control misunderstandings.** A contractor marks AC controls as implemented because they have Active Directory. But the actual requirement includes least-privilege enforcement, session controls, remote access restrictions, and wireless access management. Having AD isn't the same as having properly configured, audited, documented access controls.

**Audit and accountability shortcuts.** Logging exists, so AU controls get checked. But CMMC requires specific log content, retention periods, protection of audit information, and regular review of logs. Having logs that nobody reads doesn't meet the requirement.

**Configuration management gaps.** A contractor has a firewall, so CM controls look implemented. But configuration management under NIST 800-171 means documented baselines, change control processes, security impact analyses for changes, and restriction of unnecessary functions. That's a program, not a device.

**Incident response on paper only.** An IR plan exists in a shared drive somewhere. But when did you last test it? Who are the incident response team members? Have they been trained? Is there a communication plan? A document that's never been exercised doesn't meet the control.

## Why This Matters Now

[CMMC Phase 1 is live](https://capital-cyber.com/the-cmmc-express-is-leaving-the-station-are-you-on-it/). Contracts are beginning to include CMMC requirements. For Level 2, most contractors handling [CUI](https://capital-cyber.com/cui-the-hot-potato-of-government-data/) will need third-party assessment by a C3PAO.

That assessor doesn't care what number you submitted to SPRS. They care about what they find in your environment. If your submitted score says 95 and your assessed score comes back at 35, you have three problems:

**You fail the assessment.** You're not certified. You can't bid on or retain contracts requiring CMMC Level 2.

**You may face False Claims Act liability.** Submitting a materially inaccurate SPRS score as part of a government contract is a representation the government relied on. The Department of Justice has signaled interest in pursuing contractors who knowingly or recklessly inflated their scores.

**Your remediation timeline just compressed.** The gap between 35 and passing isn't a few weeks of work. It's months of remediation, potentially six figures in investment, and your contract timeline doesn't wait.

## The Self-Assessment Trap

Self-assessment fails for structural reasons, not just human ones:

**Lack of expertise.** The person doing the assessment often isn't a cybersecurity professional. They're an IT admin, a compliance officer, or sometimes the business owner. They don't have deep familiarity with what each NIST 800-171 control actually requires at the implementation level.

**Bias toward "yes."** When your contract depends on a passing score, there's inherent pressure to interpret requirements favorably. "We kind of do that" becomes "implemented."

**Point-in-time snapshot.** Self-assessments capture a moment. Security posture changes constantly. Systems get reconfigured, employees leave without access revocation, patches fall behind, policies go stale. A score from six months ago may not reflect today's reality.

**No evidence standard.** Self-assessment doesn't require you to produce evidence. C3PAO assessment does. Many contractors who believe they're compliant discover they can't actually prove it when asked to produce logs, records, and documentation for every control.

## What a Real Assessment Looks Like

An independent assessment against NIST 800-171 evaluates each control against three criteria:

**Documentation.** Does a policy or procedure exist that addresses the control requirement? Is it current, approved, and distributed to relevant personnel?

**Implementation.** Is the control actually operating in your environment? Can it be demonstrated? Does the configuration match what the documentation claims?

**Evidence.** Can you produce artifacts proving the control has been operating consistently? Logs, scan reports, training records, change management tickets, access review documentation?

Controls that pass on documentation but fail on implementation or evidence are scored as "not met." This is where most inflated SPRS scores collapse.

## Closing the Gap Before It Closes You

The path from an inflated score to a real one isn't comfortable, but it's necessary:

**Get an honest assessment.** Have someone who isn't emotionally or financially invested in a high score evaluate your actual posture. An independent [gap assessment](https://capital-cyber.com/guide-to-vulnerability-assessment-and-penetration-testing/) tells you the truth while there's still time to act on it.

**Build your evidence trail now.** Even if remediation takes months, you can start generating operational evidence today. Enable logging, start conducting access reviews, run vulnerability scans, document your configuration baselines. Every month of evidence strengthens your assessment posture.

**Prioritize by weight and risk.** Not all controls carry equal weight in the scoring model. Focus remediation on high-value controls first. Close the gaps that carry the most points and the most actual security risk.

**Update your SPRS score honestly.** If your real score is lower than what's submitted, update it. Yes, a lower score feels like a step backward. But an accurate score is defensible. A fraudulent one is not.

## Find Out What Your Score Really Is

We conduct independent NIST 800-171 assessments that give defense contractors an accurate picture of their compliance posture. No optimism, no sugar-coating. Just a clear score, a prioritized gap list, and a remediation roadmap that gets you to certification.

**Contact us at [info@capital-cyber.com](mailto:info@capital-cyber.com) or call [(571) 410-3066](tel:5714103066) to get your real SPRS score.**
