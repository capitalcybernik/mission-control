const https = require('https');
const fs = require('fs');
const path = require('path');

const WP_HOST = 'cybergrantsalliance.org';
const WP_USER = 'aresautomation';
const WP_PASS = 'Qy1T u0Eh gb6D JLjT jqH8 W8hp';

const APPLY_URL = 'https://cybergrantsalliance.org/apply-for-cybersecurity-grants/';

const CTA_BLOCK = `
<h2>Apply for Your Cybersecurity Grant</h2>
<p>Complete the application form to get started. Grants are awarded on a rolling basis and limited funding is available.</p>
<p><a href="${APPLY_URL}" style="display:inline-block;padding:12px 24px;background:#0066cc;color:#fff;text-decoration:none;border-radius:4px;font-weight:bold;">Apply Now →</a></p>

<h2>Contact Us</h2>
<p>Questions about grants or eligibility?</p>
<ul>
<li><strong>Email:</strong> <a href="mailto:info@cybergrantsalliance.org">info@cybergrantsalliance.org</a></li>
<li><strong>Phone:</strong> <a href="tel:+15714103066">(571) 410-3066</a></li>
</ul>
`;

const files = [
  { file: 'manufacturing-grant.md', slug: 'cybersecurity-grants-for-manufacturers', title: 'Cybersecurity Grants for Manufacturing Companies' },
  { file: 'cpa-accounting-grant.md', slug: 'cybersecurity-grants-for-cpa-accounting-firms', title: 'Cybersecurity Grants for CPA and Accounting Firms' },
  { file: 'government-contractor-grant.md', slug: 'cybersecurity-grants-for-government-contractors', title: 'Cybersecurity Grants for Government Contractors' },
  { file: 'nonprofit-grant.md', slug: 'cybersecurity-grants-for-nonprofits', title: 'Cybersecurity Grants for Nonprofit Organizations' },
  { file: 'dental-dso-grant.md', slug: 'cybersecurity-grants-for-dental-practices', title: 'Cybersecurity Grants for Dental Practices and DSOs' }
];

function mdToHtml(md) {
  let html = md
    .replace(/^#\s+(.+)$/m, '<h1 style="display:block !important;visibility:visible !important;font-size:32px;margin:20px 0;">$1</h1>')
    .replace(/^##\s+(.+)$/gm, '<h2>$1</h2>')
    .replace(/^###\s+(.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^\*\s+(.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.+<\/li>\n)+/g, '<ul>$&</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, '<p>$1</p>')
    .replace(/<p><h([12])>/g, '<h$1>')
    .replace(/<\/h([12])><\/p>/g, '</h$1>')
    .replace(/<p><ul>/g, '<ul>')
    .replace(/<\/ul><\/p>/g, '</ul>')
    .replace(/---/g, '<hr>');
  return html.replace(/<p><\/p>/g, '').replace(/\n/g, ' ');
}

function wpReq(method, path, body) {
  return new Promise((resolve, reject) => {
    const opts = {
      hostname: WP_HOST, path, method,
      headers: {
        'Authorization': 'Basic ' + Buffer.from(WP_USER + ':' + WP_PASS).toString('base64'),
        'Content-Type': 'application/json'
      }
    };
    const req = https.request(opts, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve(JSON.parse(d)); } catch (e) { reject(new Error(d)); }
      });
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function publishPage(fileInfo) {
  const mdPath = path.join(__dirname, fileInfo.file);
  const md = fs.readFileSync(mdPath, 'utf8');
  const content = mdToHtml(md) + CTA_BLOCK;
  
  // Check if exists
  const existing = await wpReq('GET', `/wp-json/wp/v2/pages?slug=${fileInfo.slug}&_fields=id`);
  
  if (existing.length > 0) {
    // Update
    const updated = await wpReq('POST', `/wp-json/wp/v2/pages/${existing[0].id}`, {
      content, status: 'publish'
    });
    return { action: 'updated', id: updated.id, url: updated.link };
  } else {
    // Create
    const created = await wpReq('POST', '/wp-json/wp/v2/pages', {
      title: fileInfo.title,
      content,
      status: 'publish',
      slug: fileInfo.slug
    });
    return { action: 'created', id: created.id, url: created.link };
  }
}

async function main() {
  console.log('Publishing CGA vertical grant pages...\n');
  
  for (const fileInfo of files) {
    process.stdout.write(`${fileInfo.title}... `);
    try {
      const result = await publishPage(fileInfo);
      console.log(`${result.action === 'created' ? '✓ CREATED' : '✓ UPDATED'} ID: ${result.id}`);
      console.log(`  URL: ${result.url}`);
    } catch (e) {
      console.log(`✗ FAILED: ${e.message}`);
    }
  }
  
  console.log('\nDone!');
}

main().catch(console.error);
