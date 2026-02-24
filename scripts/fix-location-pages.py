#!/usr/bin/env python3
"""Fix font styling and CTA on all CMMC location pages."""
import requests
import json
import time

API = "https://capital-cyber.com/wp-json/wp/v2"
AUTH = ("aresautomation", "Qy1T u0Eh gb6D JLjT jqH8 W8hp")

FONT_CSS = """<style>
.entry-content { font-size: 18px !important; line-height: 1.6 !important; }
.entry-content h1 { font-size: 36px !important; }
.entry-content h2 { font-size: 28px !important; }
.entry-content h3 { font-size: 22px !important; }
</style>"""

CTA_BLOCK = """<h2>Book a Call</h2>
<p><strong>Ready to talk?</strong> <a href="https://capital-cyber.com/rick">Schedule a call with Rick</a>, our COO, and let's figure out where you stand.</p>

<h2>Or Send Us a Message</h2>
<iframe src="https://api.leadconnectorhq.com/widget/form/9qEaBzqiyyfA9Tq823ks" style="width:100%;height:755px;border:none;border-radius:0px" id="inline-9qEaBzqiyyfA9Tq823ks" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="Contact Form - Capital Cyber Website Contact Page" data-height="755" data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks" data-form-id="9qEaBzqiyyfA9Tq823ks" title="Contact Form - Capital Cyber Website Contact Page"></iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>"""

def get_all_pages():
    pages = []
    page_num = 1
    while True:
        r = requests.get(f"{API}/pages", auth=AUTH, params={"per_page": 100, "status": "publish", "page": page_num})
        if r.status_code != 200:
            break
        data = r.json()
        if not data:
            break
        pages.extend(data)
        page_num += 1
    return pages

def is_location_page(slug):
    """Match CMMC location pages (state-based), not service/vertical pages."""
    excluded = ["manufacturing", "construction"]
    if not slug.startswith("cmmc-compliance-"):
        return False
    suffix = slug.replace("cmmc-compliance-", "")
    if suffix in excluded:
        return False
    if suffix == "services":
        return False
    return True

def needs_font_fix(content):
    return "font-size: 18px" not in content

def needs_cta(content):
    return "9qEaBzqiyyfA9Tq823ks" not in content

def fix_page(page_id, content, add_font, add_cta):
    new_content = content
    if add_font:
        new_content = FONT_CSS + "\n" + new_content
    if add_cta:
        new_content = new_content + "\n\n" + CTA_BLOCK
    
    r = requests.post(f"{API}/pages/{page_id}", auth=AUTH, json={"content": new_content})
    return r.status_code == 200

pages = get_all_pages()
location_pages = [p for p in pages if is_location_page(p["slug"])]

print(f"Found {len(location_pages)} location pages")

fixed_font = 0
fixed_cta = 0
skipped = 0

for p in location_pages:
    content = p["content"]["rendered"]
    raw_content_r = requests.get(f"{API}/pages/{p['id']}?context=edit", auth=AUTH)
    raw = raw_content_r.json()["content"]["raw"]
    
    af = needs_font_fix(raw)
    ac = needs_cta(raw)
    
    if not af and not ac:
        print(f"  SKIP: {p['slug']} (already has both)")
        skipped += 1
        continue
    
    if fix_page(p["id"], raw, af, ac):
        what = []
        if af: 
            what.append("font")
            fixed_font += 1
        if ac:
            what.append("CTA")
            fixed_cta += 1
        print(f"  FIXED: {p['slug']} ({', '.join(what)})")
    else:
        print(f"  ERROR: {p['slug']}")
    
    time.sleep(0.5)

print(f"\nDone: {fixed_font} font fixes, {fixed_cta} CTA additions, {skipped} skipped")
