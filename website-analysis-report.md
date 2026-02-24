# Capital-Cyber.com Website Analysis Report
## For Web Developer | February 2026

**Objective:** Transform capital-cyber.com into a clean, enterprise-grade website that drives conversions and establishes trust with corporate decision-makers (dental practices, CPA firms, government contractors).

---

## Executive Summary

The current website has **strong content and clear positioning** but **weak technical implementation and visual execution**. It reads like a mid-2000s template site, which undermines your "24 years IT experience" and "security obsessed" positioning.

**Priority Fixes (Do These First):**
1. Case Study pages are broken/minimal content
2. Typography and spacing need professional overhaul
3. Missing clear conversion paths on every page
4. No industry-specific landing pages beyond inline mentions
5. Missing technical elements (Schema, OG tags, proper meta)

---

## Part 1: Critical Issues (Fix Immediately)

### 1.1 Case Study Pages Are Incomplete or Broken

**Current State:**
- `/case-study/` - Shows only footer "Copyright ©2026 Capital Cyber"
- Individual case studies exist (`/case-study/iron-lift/`, `/case-study/limberakis-dental/`) but are not linked properly

**Impact:** Major trust issue. Prospects can't verify your work.

**Fix:**
```
1. Create a proper /case-studies/ index page
2. Each case study needs:
   - Hero image of client/business
   - Challenge statement
   - Solution implemented
   - Results/ROI metrics
   - Client testimonial
   - Before/After comparison (where applicable)
   - Call-to-action linking to similar service
```

**Template Structure for Each Case Study:**
```html
- Header: Client Name + Industry Tag (e.g., "Limberakis Dental | Healthcare")
- Stats Row: Years in business, # of locations, employees
- Challenge Section: What security/compliance problem they faced
- Solution Section: Services provided (bullet list)
- Results Section: Specific outcomes (blocked X attacks, achieved compliance, etc.)
- Quote: Full testimonial with photo
- Sidebar CTA: "Facing similar challenges? Schedule a consultation"
```

---

### 1.2 Missing Services Detail Pages

**Current State:**
- CMMC page has a pricing table but thin educational content
- NIST Gap Assessment is 3 paragraphs of generic content
- vCSO Services is 2 paragraphs

**Fix for Each Service Page (CMMC, NIST, vCSO):**

```
Required Sections (in order):
1. Hero: Problem statement + Solution headline
2. Who This Is For: Vertical-specific (dentists vs CPAs vs gov contractors)
3. What's Included: Detailed service breakdown
4. The Process: Step-by-step how it works
5. Deliverables: What they receive
6. Timeline: How long it takes
7. Investment: Clear pricing or "Contact for quote" with range
8. FAQs: 5-7 common questions
9. Case Study Teaser: Link to relevant case study
10. CTA Block: Schedule consultation
```

**Example for CMMC Page:**
- Current: Table with "Bid Ready, Audit Ready, CISO in a Box"
- Needed: Add sections explaining:
  - What is CMMC exactly (for non-technical people)
  - Who needs which level (Level 1 vs 2 vs 2+)
  - What happens if you don't comply (lost contracts)
  - How Capital Cyber differs from competitors
  - Testimonial from a government contractor client

---

### 1.3 Site Architecture Issues

**Current Navigation:**
- Home
- About Us
- Services (dropdown: CMMC, Managed IT, NIST, vCSO)
- Case Study (broken)

**Needed Navigation (Enterprise Grade):**
```
- Solutions (by industry):
  - Dental Practices & DSOs
  - CPA Firms & Accountants
  - Government Contractors
  - Private Schools
  - Non-Profits
- Services (by need):
  - CMMC Compliance
  - Managed IT Services
  - NIST Gap Assessment
  - vCISO Services
  - Cybersecurity Consulting
- Resources:
  - Case Studies
  - Blog/Insights
  - Guides & Whitepapers
  - FAQ
- About:
  - Our Story
  - Our Team
  - Careers
- Contact
```

---

## Part 2: Visual Design & UX Improvements

### 2.1 Typography Overhaul

**Current Issues:**
- Font choices appear dated
- Poor line-height (text looks cramped)
- Inconsistent heading sizes
- Body text too large or too small depending on section

**Enterprise Standard:**
```css
Font Stack: 
- Headlines: "Inter" or "SF Pro Display" (clean, modern sans-serif)
- Body: "Inter" or "Open Sans" (readable, professional)

Hierarchy:
- H1: 48px, font-weight: 700, line-height: 1.2
- H2: 36px, font-weight: 600, line-height: 1.3  
- H3: 24px, font-weight: 600, line-height: 1.4
- Body: 16px, font-weight: 400, line-height: 1.7
- Small/Captions: 14px, font-weight: 400, line-height: 1.5

Maximum line length: 75 characters (prevents eye strain)
```

---

### 2.2 Color Palette Refinement

**Current:**
- Dark blue (#1a365d) - Good
- Various grays
- Yellow accents in some places

**Enterprise Refinement:**
```css
Primary:    #0F172A (Deep Navy - trust, stability)
Secondary:  #1E40AF (Royal Blue - CTAs, links)
Accent:     #F59E0B (Amber/Gold - highlights, warnings, trust signals)
Success:    #059669 (Green - compliance achieved, positive results)
Background: #F8FAFC (Cool Gray - clean, modern)
Text:       #1E293B (Near Black - readable, professional)
Muted:      #64748B (Medium Gray - captions, secondary text)
```

**Usage Rules:**
- Never use more than 3 colors on any section
- Blue = Trust/Action
- Amber = Important/Highlight
- Green = Compliance/Success
- Red = Only for threats/warnings (avoid in positive content)

---

### 2.3 Spacing & Layout

**Current Issues:**
- Inconsistent padding between sections
- Elements feel cramped
- No clear visual hierarchy between sections

**Fix:**
```css
Section Spacing:
- Desktop: padding: 96px 0 (large), 64px 0 (medium), 32px 0 (small)
- Mobile: padding: 64px 0 (large), 48px 0 (medium), 24px 0 (small)

Content Width:
- Max-width: 1280px (container)
- Text blocks: max-width: 680px (optimal readability)
- Cards/Grids: 3-column max on desktop, 2 on tablet, 1 on mobile

Whitespace:
- Double the current space between sections
- Use whitespace to separate ideas, not just lines
```

---

### 2.4 Imagery Standards

**Current:**
- Unclear if custom photography or stock imagery
- No consistent visual style

**Fix:**
```
Homepage Hero:
- Use abstract security/network visualization OR
- Team photo showing professional environment OR
- Clean office/workspace imagery showing enterprise credibility

Case Studies:
- Real photos from client sites (with permission)
- If not possible: professional industry-appropriate imagery
- Avoid obvious stock photos (no smiling people at computers)

Icons:
- Consistent icon set (Lucide, Heroicons, or Phosphor)
- Line style, 24px default size
- Same stroke width throughout
```

---

## Part 3: Conversion Optimization

### 3.1 Add Clear CTAs on Every Page

**Current:** Some pages end with just text, no clear next step.

**Required CTA Blocks:**

```html
<!-- At end of every service page -->
<section class="cta-block">
  <h2>Ready to secure your [industry/business]?</h2>
  <p>Schedule a free 15-minute consultation with our team.</p>
  <a href="/contact" class="btn-primary">Schedule Consultation</a>
  <p class="small">Or call us: (571) 410-3066</p>
</section>

<!-- On homepage after hero -->
<section class="trust-bar">
  <p>Trusted by dental practices, CPA firms, and government contractors across Virginia</p>
  <!-- 5-6 client logos -->
</section>
```

---

### 3.2 Forms Need Optimization

**Current:** Link to Calendly or simple contact form

**Better Approach:**
```
1. Add inline forms directly on key pages
2. Multi-step form for service inquiries:
   - Step 1: Industry (Dental/CPA/Gov/etc)
   - Step 2: Company size (# of employees)
   - Step 3: Primary concern (Compliance/Ransomware/Managed IT)
   - Step 4: Contact info

This pre-qualifies leads and lets you route them properly