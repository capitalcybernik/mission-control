#!/usr/bin/env python3
"""
Capital Cyber Service Pages Updater
Audit and tighten service pages with CSS, CTAs, and copy improvements.
"""

import requests
import json
import time
import re
from base64 import b64encode
from datetime import datetime

# API Configuration
BASE_URL = "https://capital-cyber.com/wp-json/wp/v2"
USER = "aresautomation"
PASS = "Mzbl BRuh YqMT RsR2 Bi4a Lt8L"

auth_header = "Basic " + b64encode(f"{USER}:{PASS}".encode()).decode()
headers = {
    "Authorization": auth_header,
    "Content-Type": "application/json"
}

# The CTA block to add
CTA_BLOCK = """<style>.entry-content p,.elementor-widget-text-editor p{font-size:18px!important;line-height:1.6!important}.entry-content li{font-size:18px!important}h1{font-size:36px!important}h2{font-size:28px!important}h3{font-size:22px!important}</style>

<h2>Book a Call</h2>
<p><strong>Ready to talk?</strong> <a href="https://capital-cyber.com/rick">Schedule a call with Rick</a>, our COO, and let's figure out where you stand.</p>
<h2>Or Send Us a Message</h2>
<iframe src="https://api.leadconnectorhq.com/widget/form/9qEaBzqiyyfA9Tq823ks" style="width:100%;height:755px;border:none;border-radius:0px" id="inline-9qEaBzqiyyfA9Tq823ks" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="Contact Form - Capital Cyber Website Contact Page" data-height="755" data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks" data-form-id="9qEaBzqiyyfA9Tq823ks" title="Contact Form - Capital Cyber Website Contact Page"></iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>"""

# Service pages to process (id, slug)
SERVICE_PAGES = [
    (53075, "cmmc-compliance-services"),
    (52499, "cybersecurity-guide"),
    (52455, "smb1001-cybersecurity-tier-5"),
    (52420, "smb1001-cybersecurity-tier-4"),
    (52407, "smb1001-cybersecurity-tier-3"),
    (52385, "smb1001-cybersecurity-tier-2"),
    (52277, "smb1001-cybersecurity-tier-1"),
    (52005, "gray-box-pen-testing"),
    (42547, "managed-cybersecurity-services"),
    (42739, "vcso-services"),
    (42726, "cyber-score"),
    (42595, "cyber-liability-insurance-assessments"),
    (42577, "managed-compliance-services"),
    (42500, "managed-it-services"),
    (42472, "managed-vulnerability-assessment"),
    (42442, "nist-gap-assessment"),
    (42808, "cybersecurity-for-accounting-professionals"),
    (42796, "cybersecurity-for-government-contractors"),
    (42780, "cybersecurity-for-dental-practices"),
]

FTP_URL = "ftp://aresautomation:Qy1T%20u0Eh%20gb6D%20JLjT%20jqH8%20W8hp@capital-cyber.com/public_html"
def get_page(page_id):
    """Fetch a page by ID"""
    url = f"{BASE_URL}/pages/{page_id}"
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error fetching page {page_id}: {response.status_code}")
        return None

def update_page(page_id, content):
    """Update a page with new content"""
    url = f"{BASE_URL}/pages/{page_id}"
    data = {"content": content}
    response = requests.post(url, headers=headers, json=data)
    return response.status_code == 200 or response.status_code == 201

def has_css_styling(content):
    """Check if the CSS styling is already present"""
    css_check = '.entry-content p,.elementor-widget-text-editor p{font-size:18px!important'
    return css_check in content or 'font-size:18px!important' in content

def has_cta_block(content):
    """Check if the CTA block is already present"""
    return 'inline-9qEaBzqiyyfA9Tq823ks' in content

def tighten_copy(content):
    """Tighten the copy - remove filler phrases and improve tone"""
    changes = []
    original = content
    
    # Remove common AI filler phrases
    fillers = [
        r'In today[\'\u2019\u02bc]s digital landscape',
        r'In today[\'\u2019\u02bc]s (?:increasingly )?digital world',
        r'In the modern (?:digital )?era',
        r'In an increasingly connected world',
        r'As technology (?:continues to|rapidly) evolve',
        r'In the age of',
        r'In today[\'\u2019\u02bc]s fast-paced environment',
    ]
    
    for filler in fillers:
        if re.search(filler, content, re.IGNORECASE):
            content = re.sub(filler, '', content, flags=re.IGNORECASE)
            changes.append(f"Removed filler phrase: {filler}")
    
    # Replace buzzwords with direct alternatives
    buzzwords = {
        r'\bcomprehensive\b': '',
        r'\bholistic\b': '',
        r'\bcutting-edge\b': 'proven',
        r'\bstate-of-the-art\b': 'proven',
        r'\bworld-class\b': '',
        r'\bleading-edge\b': '',
        r'\brobust\b': 'reliable',
        r'\bseamless\b': '',
        r'\bstreamlined\b': '',
        r'\bend-to-end\b': '',
        r'\bfully integrated\b': 'integrated',
    }
    
    for pattern, replacement in buzzwords.items():
        if re.search(pattern, content, re.IGNORECASE):
            content = re.sub(pattern, replacement, content, flags=re.IGNORECASE, count=5)
            changes.append(f"Replaced buzzword: {pattern}")
    
    # Replace dashes with colons in headers (h2, h3)
    def replace_dash_in_header(match):
        header = match.group()
        # Replace dash with colon if there's space around it
        if ' - ' in header or ' – ' in header or ' — ' in header:
            updated = header.replace(' - ', ': ').replace(' – ', ': ').replace(' — ', ': ')
            changes.append(f"Replaced dash with colon in header")
            return updated
        return header
    
    for tag in ['h2', 'h3']:
        pattern = f'<{tag}[^>]*>[^<]*</{tag}>'
        content = re.sub(pattern, replace_dash_in_header, content, flags=re.IGNORECASE)
    
    return content, changes

def process_page(page_id, slug):
    """Process a single page"""
    print(f"\n{'='*60}")
    print(f"Processing: {slug} (ID: {page_id})")
    print(f"{'='*60}")
    
    page = get_page(page_id)
    if not page:
        return {"id": page_id, "slug": slug, "status": "ERROR", "error": "Could not fetch page"}
    
    content = page['content']['rendered']
    title = page['title']['rendered']
    changes_made = []
    
    # Check CSS
    if not has_css_styling(content):
        print("  → Adding CSS styling")
        content = CTA_BLOCK.split('</style>')[0] + '</style>' + content
        changes_made.append("Added font styling CSS")
    else:
        print("  → CSS styling already present")
    
    # Check CTA block
    if not has_cta_block(content):
        print("  → Adding CTA block")
        cta_html = CTA_BLOCK.split('</style>')[1]
        content = content + cta_html
        changes_made.append("Added Book a Call + LeadConnector CTA")
    else:
        print("  → CTA block already present")
    
    # Tighten copy
    print("  → Tightening copy...")
    new_content, copy_changes = tighten_copy(content)
    if copy_changes:
        content = new_content
        changes_made.extend(copy_changes)
        for ch in copy_changes[:3]:  # Show first 3
            print(f"    • {ch}")
        if len(copy_changes) > 3:
            print(f"    ... and {len(copy_changes) - 3} more changes")
    else:
        print("    • No filler phrases found")
    
    # Update if changes made
    if changes_made:
        print(f"  → POSTING updates...")
        success = update_page(page_id, content)
        status = "UPDATED" if success else "FAILED"
    else:
        print("  → No changes needed")
        status = "NO_CHANGE"
    
    return {
        "id": page_id,
        "slug": slug,
        "title": title,
        "status": status,
        "changes": changes_made
    }

def main():
    results = []
    log_entries = []
    
    print("=" * 70)
    print("CAPITAL CYBER SERVICE PAGES AUDIT & UPDATE")
    print("=" * 70)
    print(f"Started: {datetime.now().isoformat()}")
    print(f"Pages to process: {len(SERVICE_PAGES)}")
    print()
    
    for i, (page_id, slug) in enumerate(SERVICE_PAGES, 1):
        result = process_page(page_id, slug)
        results.append(result)
        
        # Log entry
        log_entry = f"\n### Page {i}: {slug} (ID: {page_id})\n"
        log_entry += f"**Title:** {result.get('title', 'N/A')}\n"
        log_entry += f"**Status:** {result['status']}\n"
        if result.get('changes'):
            log_entry += "**Changes:**\n"
            for ch in result['changes']:
                log_entry += f"- {ch}\n"
        log_entries.append(log_entry)
        
        # Wait 5 seconds between updates
        if i < len(SERVICE_PAGES):
            print(f"  → Waiting 5 seconds...")
            time.sleep(5)
    
    # Summary
    print("\n" + "=" * 70)
    print("PROCESSING COMPLETE")
    print("=" * 70)
    
    summary = {"UPDATED": 0, "NO_CHANGE": 0, "FAILED": 0, "ERROR": 0}
    for r in results:
        summary[r['status']] += 1
    
    for status, count in summary.items():
        print(f"  {status}: {count}")
    
    # Write log file
    with open('/root/.openclaw/workspace/service_pages_audit_report.md', 'w') as f:
        f.write("# Capital Cyber Service Pages - Audit Report\n\n")
        f.write(f"**Date:** {datetime.now().isoformat()}\n\n")
        f.write("## Summary\n\n")
        for status, count in summary.items():
            f.write(f"- {status}: {count}\n")
        f.write("\n## Details\n")
        f.write("\n".join(log_entries))
    
    print(f"\nReport saved to: /root/.openclaw/workspace/service_pages_audit_report.md")

if __name__ == "__main__":
    main()
