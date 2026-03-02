# CMMC Ready Now - Service & Location Page Generator

## Overview
This system generates 200+ SEO-optimized service and location pages for CMMC Ready Now.

## Schedule
- **First page:** Build now (sample: CMMC Compliance Services for Manufacturing in New Jersey)
- **Remaining 199 pages:** Start at 4AM EST tomorrow via cron job

## Page Structure (Every Page Must Include)

### Header
- CMMC Ready Now logo
- Navigation: Home, Services, About, Contact
- "Book a Call with Rick" CTA button

### Hero Section
- H1: [Service] for [Industry] in [Location]
- Subheadline: Targeted value proposition
- CTA: "Book Your Free CMMC Assessment" → Rick's calendar
- LeadConnector contact form

### Main Content
- Problem statement (CMMC compliance challenges)
- Solution overview
- 3-4 key benefits
- Why CMMC Ready Now
- Trust indicators (testimonials, stats)

### CTA Section
- "Ready to Get CMMC Compliant?"
- "Book a Call with Rick" button → https://capital-cyber.com/rick
- LeadConnector form embed

### Footer
- "In partnership with Capital Cyber" or "Powered by Capital Cyber"
- Address, Phone, Email (info@capital-cyber.com)
- Links to capital-cyber.com

## Target Markets

### Services (10)
1. CMMC Compliance Services
2. CMMC Gap Assessment
3. CMMC Level 1 Self Assessment
4. CMMC Level 2 Certification
5. NIST 800-171 Compliance
6. Penetration Testing
7. Cyber Risk Assessment
8. vCSO Services
9. Managed Security Services
10. Incident Response

### Industries (6)
1. Manufacturing
2. Construction
3. Defense Contractors
4. Government Contractors
5. Aerospace
6. Healthcare/Medical Device

### Locations (target markets)
- New Jersey (20 pages)
- New York City metro (20 pages)
- Philadelphia area (15 pages)
- Virginia (15 pages)
- Maryland/DC (15 pages)
- Florida (20 pages)
- Arizona (15 pages)
- Nevada (10 pages)
- Connecticut (10 pages)
- Delaware (10 pages)

## Rick's Calendar Integration
Link: https://capital-cyber.com/rick
Embed iframe available in MEMORY.md

## LeadConnector Form
```html
<iframe src="https://api.leadconnectorhq.com/widget/form/9qEaBzqiyyfA9Tq823ks" style="width:100%;height:755px;border:none;border-radius:0px" id="inline-9qEaBzqiyyfA9Tq823ks" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="Contact Form - Capital Cyber Website Contact Page" data-height="755" data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks" data-form-id="9qEaBzqiyyfA9Tq823ks" title="Contact Form - Capital Cyber Website Contact Page"></iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
```

## SEO Requirements
- Unique meta title and description
- H1 with service + location keywords
- Internal links to related pages
- Schema markup (LocalBusiness, Service)
- Fast loading (Next.js static export)
- Mobile responsive

## Color Palette
- Deep forest green: #1B4332
- Warm cream: #FAF3E0
- Burnt orange accent: #CC5500
- Charcoal text: #2D2D2D
- Navy background: #0a2540

## Partnership Badge (Add to all pages)
"In Partnership with Capital Cyber"
"Powered by Capital Cyber"
Link to: https://capital-cyber.com
