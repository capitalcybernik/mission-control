#!/usr/bin/env node
// Publishes a single state CMMC location page to Capital Cyber WordPress
// Usage: node publish-state.js <stateIndex>

const https = require('https');
const fs = require('fs');
const path = require('path');

const WP_HOST = 'capital-cyber.com';
const WP_USER = 'aresautomation';
const WP_PASS = 'Mzbl BRuh YqMT RsR2 Bi4a Lt8L';

const stateIndex = parseInt(process.argv[2]);
if (isNaN(stateIndex)) {
  console.error('Usage: node publish-state.js <stateIndex>');
  process.exit(1);
}

const states = JSON.parse(fs.readFileSync(path.join(__dirname, 'states-batch2.json'), 'utf8'));
const state = states[stateIndex];

if (!state) {
  console.error('Invalid state index:', stateIndex);
  process.exit(1);
}

const STYLE_BLOCK = '<style>.entry-content p,.elementor-widget-text-editor p{font-size:18px!important;line-height:1.6!important}.entry-content li{font-size:18px!important}h1{font-size:36px!important}h2{font-size:28px!important;margin-top:30px!important}h3{font-size:22px!important}</style>';

function generateContent(s) {
  const isState = s.state !== 'Washington DC';
  const stateLabel = isState ? 'state' : 'district';
  const inLabel = s.state === 'Washington DC' ? 'in Washington, DC' : `in ${s.state}`;
  const contractorsLabel = s.state === 'Washington DC' ? 'DC' : s.state;

  return `${STYLE_BLOCK}
<h1 style="display:block !important;visibility:visible !important;font-size:32px;margin:20px 0;">CMMC Compliance for ${s.state} Defense Contractors</h1>

<p>${s.state} ranks among the top defense spending states at <strong>${s.dodSpend} in annual DoD expenditures</strong>. If you are a defense contractor ${inLabel}, CMMC certification is not optional. It is the difference between winning contracts and watching them go to your competitors.</p>

<p>Capital Cyber helps ${contractorsLabel} defense contractors achieve CMMC Level 1 and Level 2 certification. We handle the gap assessment, remediation, documentation, and C3PAO preparation so you can focus on delivering for your customers.</p>

<h2>The ${s.state} Defense Landscape</h2>

<p><strong>Major Installations:</strong> ${s.bases}</p>

<p><strong>Key Defense Industries:</strong> ${s.industries}</p>

<p><strong>Defense Hubs:</strong> ${s.cities}</p>

<p><strong>Major Primes and Contractors:</strong> ${s.primes}</p>

<h2>Why ${contractorsLabel} Contractors Need CMMC Now</h2>

<p>${s.uniqueChallenge}</p>

<p>CMMC enforcement is live. As of late 2025, DoD contracting officers can include CMMC as a condition of contract award. Every new solicitation is a potential CMMC gate. If you are not certified, you cannot bid. If you cannot bid, you lose revenue to competitors who got certified first.</p>

<h2>CMMC Challenges Specific to ${s.state}</h2>

<ul>
<li><strong>Supply chain depth:</strong> Primes like ${s.primes.split(',')[0]} flow down CMMC requirements to hundreds of subcontractors. If you are anywhere in that supply chain, you need certification.</li>
<li><strong>Legacy infrastructure:</strong> Many ${contractorsLabel} contractors have operated for years without modern cybersecurity controls. Retrofitting compliance into existing systems requires expertise, not just a checklist.</li>
<li><strong>Workforce readiness:</strong> CMMC requires security awareness training, access controls, and incident response procedures. Your team needs to understand their role in protecting CUI.</li>
<li><strong>Scoping complexity:</strong> Determining which systems, people, and processes handle CUI is the most common failure point. Incorrect scoping leads to failed assessments and wasted money.</li>
</ul>

<h2>What Capital Cyber Delivers</h2>

<h3>Gap Assessment</h3>
<p>We assess your environment against all 110 NIST SP 800-171 Rev 2 controls. You get a clear picture of where you stand, what needs fixing, and how much it will cost. No surprises when the C3PAO arrives.</p>

<h3>System Security Plan (SSP)</h3>
<p>Your SSP is the foundation of your CMMC assessment. We build it from your actual environment, not a template. Assessors can follow it. You can defend it. It reflects reality.</p>

<h3>Remediation</h3>
<p>We do the work: network segmentation, MFA deployment, endpoint protection, logging infrastructure, policy development, and security awareness training. You do not need to hire a full-time cybersecurity team. You need us.</p>

<h3>C3PAO Preparation</h3>
<p>Before your assessment, we run a pre-assessment validation. We collect evidence, prepare your team for interviews, and verify every control. Our clients pass on the first attempt because we do not let them walk in unprepared.</p>

<h3>Continuous Compliance</h3>
<p>CMMC is not a one-time event. Annual assessments, continuous monitoring, policy updates, and ongoing training are required. We stay with you after certification to keep you compliant.</p>

<h2>Why ${contractorsLabel} Contractors Choose Capital Cyber</h2>

<p>${s.localAngle}</p>

<ul>
<li><strong>100% client retention rate:</strong> Every client who started with us is still with us.</li>
<li><strong>24 years of IT and cybersecurity experience:</strong> We have seen every environment, every challenge, and every excuse.</li>
<li><strong>Cybersecurity firm providing IT:</strong> Not the other way around. Security is our foundation, not an add-on.</li>
<li><strong>Fixed-scope pricing:</strong> You know the cost before we start. No hourly billing surprises.</li>
</ul>

<h2>CMMC Levels Explained</h2>

<h3>Level 1: Foundational</h3>
<p>17 practices based on FAR 52.204-21. Self-assessment. Required for contractors handling Federal Contract Information (FCI) only.</p>

<h3>Level 2: Advanced</h3>
<p>110 practices aligned to NIST SP 800-171. Third-party assessment by a C3PAO. Required for contractors handling Controlled Unclassified Information (CUI). This is where most ${contractorsLabel} defense contractors will need to certify.</p>

<h3>Level 3: Expert</h3>
<p>110+ practices with additional controls from NIST SP 800-172. Government-led assessment. Required for contractors supporting the most critical DoD programs.</p>

<h2>Get Started Today</h2>

<p>Every week you wait is another solicitation you cannot bid on. ${s.state} defense contractors are certifying now. Your competitors are certifying now.</p>

<p><strong>Contact Capital Cyber for a free CMMC readiness consultation:</strong></p>

<ul>
<li><strong>Email:</strong> <a href="mailto:info@capital-cyber.com">info@capital-cyber.com</a></li>
<li><strong>Phone:</strong> <a href="tel:+15714103066">(571) 410-3066</a></li>
<li><strong>Website:</strong> <a href="https://capital-cyber.com">capital-cyber.com</a></li>
</ul>

<p><em>Capital Cyber is a cybersecurity firm based in Leesburg, Virginia, serving defense contractors nationwide. We specialize in CMMC compliance, NIST 800-171 gap assessments, penetration testing, and managed security services.</em></p>

<h2>Book a Call</h2>
<p><strong>Ready to talk?</strong> <a href="https://capital-cyber.com/rick">Schedule a call with Rick</a>, our COO, and let's figure out where you stand.</p>

<h2>Or Send Us a Message</h2>
<iframe src="https://api.leadconnectorhq.com/widget/form/9qEaBzqiyyfA9Tq823ks" style="width:100%;height:755px;border:none;border-radius:0px" id="inline-9qEaBzqiyyfA9Tq823ks" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="Contact Form - Capital Cyber Website Contact Page" data-height="755" data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks" data-form-id="9qEaBzqiyyfA9Tq823ks" title="Contact Form - Capital Cyber Website Contact Page"></iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
`.trim();
}

function wpRequest(method, path, body) {
  return new Promise((resolve, reject) => {
    const opts = {
      hostname: WP_HOST,
      path: path,
      method: method,
      headers: {
        'Authorization': 'Basic ' + Buffer.from(WP_USER + ':' + WP_PASS).toString('base64'),
        'Content-Type': 'application/json'
      }
    };
    if (body) {
      const data = JSON.stringify(body);
      opts.headers['Content-Length'] = Buffer.byteLength(data);
      const req = https.request(opts, (res) => {
        let d = '';
        res.on('data', c => d += c);
        res.on('end', () => {
          try { resolve(JSON.parse(d)); } catch (e) { reject(new Error(d)); }
        });
      });
      req.on('error', reject);
      req.write(data);
      req.end();
    } else {
      const req = https.request(opts, (res) => {
        let d = '';
        res.on('data', c => d += c);
        res.on('end', () => {
          try { resolve(JSON.parse(d)); } catch (e) { reject(new Error(d)); }
        });
      });
      req.on('error', reject);
      req.end();
    }
  });
}

async function main() {
  console.log(`Publishing: ${state.state} (index ${stateIndex})`);
  console.log(`Slug: ${state.slug}`);
  
  const content = generateContent(state);
  
  // Check if page already exists
  const existing = await wpRequest('GET', `/wp-json/wp/v2/pages?slug=${state.slug}&_fields=id`);
  
  if (existing.length > 0) {
    console.log(`Page already exists (ID: ${existing[0].id}), updating...`);
    const updated = await wpRequest('POST', `/wp-json/wp/v2/pages/${existing[0].id}`, {
      content: content,
      status: 'publish'
    });
    console.log(`Updated: ${updated.link}`);
  } else {
    const created = await wpRequest('POST', '/wp-json/wp/v2/pages', {
      title: `CMMC Compliance for ${state.state} Defense Contractors`,
      content: content,
      status: 'publish',
      slug: state.slug
    });
    
    if (created.id) {
      console.log(`Published: ID ${created.id}`);
      console.log(`URL: ${created.link}`);
      
      // Log to results file
      const logLine = `${new Date().toISOString()} | ${state.state} | ID: ${created.id} | ${created.link}\n`;
      fs.appendFileSync(path.join(__dirname, 'publish-log.txt'), logLine);
      console.log('Logged to publish-log.txt');
    } else {
      console.error('FAILED:', created.message || JSON.stringify(created));
      process.exit(1);
    }
  }
}

main().catch(e => { console.error('Error:', e.message); process.exit(1); });
