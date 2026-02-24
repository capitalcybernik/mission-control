#!/usr/bin/env node

const https = require('https');

// Configuration
const API_BASE = 'https://capital-cyber.com/wp-json/wp/v2';
const AUTH = Buffer.from('aresautomation:Qy1T u0Eh gb6D JLjT jqH8 W8hp').toString('base64');

// Font CSS to prepend
const FONT_CSS = `<style>.entry-content p,.elementor-widget-text-editor p{font-size:18px!important;line-height:1.6!important}.entry-content li{font-size:18px!important}h1{font-size:36px!important}h2{font-size:28px!important}h3{font-size:22px!important}</style>`;

// CTA block to append
const CTA_BLOCK = `<h2>Book a Call</h2>
<p><strong>Ready to talk?</strong> <a href="https://capital-cyber.com/rick">Schedule a call with Rick</a>, our COO, and let's figure out where you stand.</p>
<h2>Or Send Us a Message</h2>
<iframe src="https://api.leadconnectorhq.com/widget/form/9qEaBzqiyyfA9Tq823ks" style="width:100%;height:755px;border:none;border-radius:0px" id="inline-9qEaBzqiyyfA9Tq823ks" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="Contact Form - Capital Cyber Website Contact Page" data-height="755" data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks" data-form-id="9qEaBzqiyyfA9Tq823ks" title="Contact Form - Capital Cyber Website Contact Page"></iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>`;

// Pages configuration
const PAGES_CONFIG = {
  // Font CSS page
  53368: { type: 'font', description: 'New Mexico - Font CSS' },
  // CTA pages
  53304: { type: 'cta', description: 'CTA Page' },
  53303: { type: 'cta', description: 'CTA Page' },
  53302: { type: 'cta', description: 'CTA Page' },
  53301: { type: 'cta', description: 'CTA Page' },
  53300: { type: 'cta', description: 'CTA Page' },
  53299: { type: 'cta', description: 'CTA Page' },
  53298: { type: 'cta', description: 'CTA Page' },
  53297: { type: 'cta', description: 'CTA Page' },
  53296: { type: 'cta', description: 'CTA Page' },
  53295: { type: 'cta', description: 'CTA Page' },
  53294: { type: 'cta', description: 'CTA Page' },
  53293: { type: 'cta', description: 'CTA Page' },
  53292: { type: 'cta', description: 'CTA Page' },
  53291: { type: 'cta', description: 'CTA Page' },
  53290: { type: 'cta', description: 'CTA Page' }
};

function makeRequest(url, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      method,
      headers: {
        'Authorization': `Basic ${AUTH}`,
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(url, options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });

    req.on('error', reject);
    
    if (data) {
      req.write(JSON.stringify(data));
    }
    
    req.end();
  });
}

async function processPage(pageId) {
  const config = PAGES_CONFIG[pageId];
  console.log(`\n=== Processing Page ${pageId} (${config.description}) ===`);
  
  try {
    // Get current page content
    console.log(`Fetching page ${pageId}...`);
    const getResponse = await makeRequest(`${API_BASE}/pages/${pageId}`);
    
    if (getResponse.status !== 200) {
      console.log(`❌ Failed to fetch page ${pageId}: ${getResponse.status}`);
      return { success: false, error: `HTTP ${getResponse.status}` };
    }
    
    const page = getResponse.data;
    const currentContent = page.content.rendered;
    const slug = page.slug;
    
    console.log(`✓ Fetched page: ${slug}`);
    
    let updatedContent = currentContent;
    let changesMade = false;
    let skipReason = null;
    
    if (config.type === 'font') {
      // Check if font CSS already exists
      if (currentContent.includes('entry-content p,.elementor-widget-text-editor p{font-size:18px!important')) {
        skipReason = 'Font CSS already exists';
      } else {
        // Prepend font CSS
        updatedContent = FONT_CSS + currentContent;
        changesMade = true;
        console.log('✓ Prepended font CSS');
      }
    } else if (config.type === 'cta') {
      // Check if CTA already exists
      if (currentContent.includes('Book a Call') && currentContent.includes('Schedule a call with Rick')) {
        skipReason = 'CTA block already exists';
      } else {
        // Append CTA
        updatedContent = currentContent + CTA_BLOCK;
        changesMade = true;
        console.log('✓ Appended CTA block');
      }
    }
    
    if (skipReason) {
      console.log(`⚠️  Skipped: ${skipReason}`);
      return { success: true, skipped: true, reason: skipReason, slug };
    }
    
    if (changesMade) {
      // Update the page
      console.log('Updating page...');
      const updateResponse = await makeRequest(
        `${API_BASE}/pages/${pageId}`, 
        'POST', 
        { content: updatedContent }
      );
      
      if (updateResponse.status === 200) {
        console.log(`✅ Successfully updated page ${pageId} (${slug})`);
        return { success: true, updated: true, slug, type: config.type };
      } else {
        console.log(`❌ Failed to update page ${pageId}: ${updateResponse.status}`);
        return { success: false, error: `Update failed: HTTP ${updateResponse.status}`, slug };
      }
    }
    
    return { success: true, updated: false, slug };
    
  } catch (error) {
    console.log(`❌ Error processing page ${pageId}: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('🚀 Starting Capital Cyber Location Pages Fix');
  console.log(`Processing ${Object.keys(PAGES_CONFIG).length} pages...\n`);
  
  const results = [];
  const pageIds = Object.keys(PAGES_CONFIG).map(Number);
  
  for (let i = 0; i < pageIds.length; i++) {
    const pageId = pageIds[i];
    const result = await processPage(pageId);
    result.pageId = pageId;
    results.push(result);
    
    // Wait 3 seconds between updates (except for last page)
    if (i < pageIds.length - 1) {
      console.log('⏳ Waiting 3 seconds...');
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }
  
  // Final summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 FINAL SUMMARY');
  console.log('='.repeat(60));
  
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  const updated = results.filter(r => r.updated);
  const skipped = results.filter(r => r.skipped);
  
  console.log(`Total pages processed: ${results.length}`);
  console.log(`✅ Successful: ${successful.length}`);
  console.log(`✏️  Updated: ${updated.length}`);
  console.log(`⚠️  Skipped: ${skipped.length}`);
  console.log(`❌ Failed: ${failed.length}\n`);
  
  if (updated.length > 0) {
    console.log('Pages Updated:');
    updated.forEach(r => {
      const action = r.type === 'font' ? 'Font CSS prepended' : 'CTA appended';
      console.log(`  - ${r.pageId} (${r.slug}): ${action}`);
    });
    console.log('');
  }
  
  if (skipped.length > 0) {
    console.log('Pages Skipped:');
    skipped.forEach(r => {
      console.log(`  - ${r.pageId} (${r.slug}): ${r.reason}`);
    });
    console.log('');
  }
  
  if (failed.length > 0) {
    console.log('Pages Failed:');
    failed.forEach(r => {
      console.log(`  - ${r.pageId}: ${r.error}`);
    });
  }
  
  console.log('🎉 Task completed!');
}

main().catch(console.error);