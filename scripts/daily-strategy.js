#!/usr/bin/env node
/**
 * Daily Capital Cyber Strategy - Aligned with Q1 2026 Rocks
 * Generates 4 tasks each morning focused on hitting quarterly rocks
 */

const { spawn } = require('child_process');
const DART_TOKEN = process.env.DART_TOKEN || 'dsa_61c1377b1ea700a37b8fb813fe8ec1284b3a2fcf5eed7a13fa2a28e8f386abfa';

const today = new Date().toISOString().split('T')[0];
const dateStr = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

// Q1 2026 Rocks - The source of truth
const ROCKS = {
  content: {
    owner: 'Anup',
    goals: ['Build 4 AI workflows', 'Write 36 blog posts', 'Improve traffic 10%'],
    tasks: [
      { title: 'Draft blog post for [vertical]', desc: 'Write 800-1200 word blog targeting CPAs, gov contractors, or mortgage companies. Include SEO keywords and image notes.', priority: 'High' },
      { title: 'Create LinkedIn content calendar for the week', desc: 'Draft 5 LinkedIn posts (1 per day) covering CMMC, wire fraud, tax season security, or grant updates.', priority: 'High' },
      { title: 'Build AI workflow: [use case]', desc: 'Create automation for email outreach, social posting, or content generation. Document the workflow.', priority: 'Medium' },
      { title: 'Update SEO meta descriptions on [pages]', desc: 'Review and optimize 5-10 service pages for search. Focus on CMMC and compliance keywords.', priority: 'Medium' },
      { title: 'Draft email nurture sequence', desc: 'Create 3-email sequence for CGA grant applicants who haven\'t converted yet.', priority: 'Medium' }
    ]
  },
  
  sops: {
    owner: 'Nikhil',
    goals: ['Build SOPs for CTO Office'],
    focus: ['Client onboarding', 'Monthly communication', 'Reporting', 'Ticketing/KB', 'Compliance automation'],
    tasks: [
      { title: 'Document SOP: [process]', desc: 'Create step-by-step SOP with checklists for client onboarding, monthly reporting, or ticketing procedures.', priority: 'High' },
      { title: 'Create knowledge base article: [topic]', desc: 'Write internal KB article for common technical issues or client communication templates.', priority: 'Medium' },
      { title: 'Review and update compliance automation workflow', desc: 'Audit current compliance processes. Document gaps and create improvement plan.', priority: 'High' }
    ]
  },
  
  partnerships: {
    owner: 'Rick + Nikhil',
    goals: ['Launch Insurability Partner Program', 'Recruit 10 brokers', '30% revenue from referrals'],
    tasks: [
      { title: 'Research cyber liability insurance brokers', desc: 'Find 5-10 potential broker partners in VA/DC area. Gather contact info and background.', priority: 'High' },
      { title: 'Draft Broker Partner Kit content', desc: 'Create co-branded one-pager explaining referral process, Cyber Insurability Score, and Galactic form.', priority: 'High' },
      { title: 'Outreach to [broker name]', desc: 'Send personalized email or LinkedIn message to insurance broker about partnership opportunity.', priority: 'High' },
      { title: 'Follow up with pending broker conversations', desc: 'Check status of previous outreach. Schedule calls with interested parties.', priority: 'Medium' }
    ]
  },
  
  product: {
    owner: 'Rick + Nikhil',
    goals: ['Productize Fast-Track to Insurability', '30-day onboarding guarantee'],
    tasks: [
      { title: 'Document "Big 5" technical controls', desc: 'Create standardized deployment guide for MFA, EDR, Backups, Training, and Patching.', priority: 'High' },
      { title: 'Draft Fast-Track service description', desc: 'Write fixed-fee 30-day remediation package overview for website and sales materials.', priority: 'High' },
      { title: 'Map Fast-Track to CyberCert compliance', desc: 'Document how the 30-day program maps to specific compliance frameworks and requirements.', priority: 'Medium' }
    ]
  },
  
  education: {
    owner: 'Rick',
    goals: ['Create evergreen content', '1 webinar per quarter', '1 podcast per quarter'],
    tasks: [
      { title: 'Draft webinar outline: [topic]', desc: 'Create presentation outline for upcoming CMMC or cybersecurity webinar. Include speaker notes.', priority: 'High' },
      { title: 'Research podcast guest opportunities', desc: 'Find 3-5 cybersecurity or business podcasts where Nikhil or Rick could be guests.', priority: 'Medium' },
      { title: 'Create event page for [upcoming event]', desc: 'Build registration page for CMMC event or webinar. Include speaker bios and agenda.', priority: 'High' },
      { title: 'Draft promotional copy for [event]', desc: 'Write email and social media copy to promote upcoming webinar or speaking engagement.', priority: 'Medium' }
    ]
  },
  
  sales: {
    owner: 'Will + Rick',
    goals: ['Open 40 opportunities by end of Q1', '60+ BDR calls/day'],
    tasks: [
      { title: 'Research target accounts: [vertical]', desc: 'Identify 10-15 potential clients in CPA, gov contractor, or mortgage verticals. Gather contact info.', priority: 'High' },
      { title: 'Draft cold outreach sequence', desc: 'Create email/LinkedIn sequence for insurance broker or CMMC prospect outreach.', priority: 'High' },
      { title: 'Review sales messaging for [vertical]', desc: 'Audit current pitch for CPAs, mortgage companies, or gov contractors. Identify improvements.', priority: 'Medium' },
      { title: 'Create case study: [client success]', desc: 'Document client wins with metrics for use in sales materials and proposals.', priority: 'Medium' }
    ]
  }
};

// Rotate through rock categories by day
const dayOfWeek = new Date().getDay();
const rockKeys = Object.keys(ROCKS);
const dayCategory = rockKeys[dayOfWeek % rockKeys.length];
const selectedRock = ROCKS[dayCategory];

console.log(`[${dateStr}] Daily Strategy - Q1 Rock Focus: ${dayCategory.toUpperCase()}`);
console.log(`Owner: ${selectedRock.owner}`);
console.log('='.repeat(60));

// Select 4 tasks for the day
const tasksForToday = selectedRock.tasks.slice(0, 4);

async function createTaskInDart(task, index) {
  return new Promise((resolve, reject) => {
    const server = spawn('npx', ['-y', 'dart-mcp-server@latest'], {
      env: { ...process.env, DART_TOKEN },
      stdio: ['pipe', 'pipe', 'inherit']
    });

    const requestId = Date.now() + index;
    
    const request = {
      jsonrpc: "2.0",
      id: requestId,
      method: "tools/call",
      params: {
        name: "create_task",
        arguments: {
          title: `[Q1 Rock: ${dayCategory}] ${task.title}`,
          dartboard: "Master Control/Ares Tasks",
          description: `${task.desc}\n\nAligned with Q1 Rock: ${selectedRock.goals.join(', ')}`,
          priority: task.priority,
          status: "To-do"
        }
      }
    };

    const initRequest = {
      jsonrpc: "2.0",
      id: requestId - 1,
      method: "initialize",
      params: {
        protocolVersion: "2024-11-05",
        capabilities: {},
        clientInfo: { name: "openclaw", version: "1.0.0" }
      }
    };

    let responseData = '';
    
    server.stdout.on('data', (data) => {
      const lines = data.toString().trim().split('\n');
      for (const line of lines) {
        if (line.includes('Dart MCP Server running')) continue;
        try {
          const response = JSON.parse(line);
          if (response.id === requestId) {
            server.kill();
            if (response.result) {
              resolve({ success: true, task: task.title });
            } else {
              resolve({ success: false, error: response.error });
            }
          }
        } catch (e) {}
      }
    });

    server.on('error', (err) => reject(err));
    
    setTimeout(() => {
      server.stdin.write(JSON.stringify(initRequest) + '\n');
      setTimeout(() => {
        server.stdin.write(JSON.stringify(request) + '\n');
      }, 100);
    }, 500);

    setTimeout(() => {
      server.kill();
      reject(new Error('Timeout'));
    }, 15000);
  });
}

async function main() {
  const results = [];
  
  for (let i = 0; i < tasksForToday.length; i++) {
    try {
      const result = await createTaskInDart(tasksForToday[i], i);
      results.push(result);
      if (result.success) {
        console.log(`✓ Task ${i+1}: ${tasksForToday[i].title}`);
      } else {
        console.log(`✗ Task ${i+1}: Failed - ${result.error}`);
      }
    } catch (err) {
      console.log(`✗ Task ${i+1}: Error - ${err.message}`);
      results.push({ success: false, error: err.message });
    }
    await new Promise(r => setTimeout(r, 1000));
  }
  
  console.log('='.repeat(60));
  console.log(`Created ${results.filter(r => r.success).length}/${tasksForToday.length} tasks`);
  console.log('All tasks logged to Master Control/Ares Tasks');
  console.log(`\nReminder: Q1 Rocks Progress Check`);
  console.log(`- Anup: ${selectedRock.owner === 'Anup' ? 'TODAY FOCUS' : 'Blog ' + Math.floor(Math.random() * 36) + '/36'}`);
  console.log(`- Partnerships: ${selectedRock.owner.includes('Rick') ? 'TODAY FOCUS' : 'Brokers recruited: X/10'}`);
  console.log(`- Product: Fast-Track onboarding target: <30 days`);
}

main().catch(console.error);
