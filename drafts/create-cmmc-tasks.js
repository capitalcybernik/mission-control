const { createTask } = require('/root/.openclaw/workspace/skills/dart-ai/dart-ai.js');

async function main() {
  try {
    // Task 1: CMMC Readiness Guide (today's work)
    const t1 = await createTask('CMMC Readiness Guide Lead Magnet', {
      priority: 'high',
      status: 'Doing',
      description: `Create a spectacular CMMC 2.0 Readiness Guide for Capital Cyber to use as a downloadable lead magnet.

Includes: What is CMMC 2.0, three levels explained, four-phase rollout timeline, self-assessment checklist (14 NIST 800-171 control families), 10 most common compliance gaps, readiness roadmap (90-day/6-month/12-month), glossary, Capital Cyber CTA.

Draft file: /root/.openclaw/workspace/drafts/cmmc-readiness-guide.md
Emailed to: nikhil@capital-cyber.com, anup@capital-cyber.com

Target: Design-ready by 3PM EST Feb 23, 2026.`
    });
    console.log('Task 1 (CMMC Guide):', t1.result ? 'Created' : 'Failed');

    // Task 2: CGA Lead Magnet (tomorrow)
    const t2 = await createTask('CGA Small Business Cybersecurity Grant Guide Lead Magnet', {
      priority: 'high',
      status: 'To-do',
      description: `Create a CGA-focused lead magnet: "The Small Business Cybersecurity Grant Guide: How to Get a Free Penetration Test"

Purpose: Top-of-funnel for CGA grant applications. Educates small businesses on threat landscape, introduces CMMC requirements, funnels to CGA grant applications. Shorter and more accessible than the Capital Cyber CMMC guide.

Pipeline: CGA guide catches awareness → free pen test reveals gaps → Capital Cyber closes as compliance client (20% conversion rate).

Scheduled: Feb 24, 2026 (Nikhil wants to focus on this tomorrow).`
    });
    console.log('Task 2 (CGA Guide):', t2.result ? 'Created' : 'Failed');

    // Task 3: CMMC Blog Post (sent to Anup)
    const t3 = await createTask('CMMC Blog Post: Four-Phase Rollout (Published)', {
      priority: 'medium',
      status: 'Doing',
      description: `Blog post: "CMMC 2.0 Four-Phase Rollout: What DoD Contractors Need to Know (2025 to 2028)"

Draft file: /root/.openclaw/workspace/drafts/cmmc-four-phase-rollout-blog.md
Emailed to: anup@capital-cyber.com for publishing, nikhil@capital-cyber.com for review.

Waiting on Anup to publish to capital-cyber.com.`
    });
    console.log('Task 3 (Blog Post):', t3.result ? 'Created' : 'Failed');

    // Task 4: Rick Strategy Email (sent)
    const t4 = await createTask('CMMC 2026 Strategy Email to Rick (Sent)', {
      priority: 'medium',
      status: 'Done',
      description: `Sent strategic CMMC email to Rick with:
- 2026 goals and targets (10-15 CMMC clients, 50+ CGA grant apps)
- Quarterly milestones Q1-Q4
- Service packaging recommendations
- C3PAO partnership development
- Content/SEO dominance strategy

Also sent four-phase deployment timeline as separate email.
Both CC'd to Nikhil.`
    });
    console.log('Task 4 (Rick Email):', t4.result ? 'Created' : 'Failed');

  } catch (err) {
    console.error('Error:', err.message);
  }
}

main();
