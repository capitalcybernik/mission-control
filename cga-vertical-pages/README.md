# CGA Vertical Grant Pages - Summary

## Pages Created

### 1. Manufacturing Grant
**File:** `manufacturing-grant.md`
**Slug:** `cybersecurity-grants-for-manufacturers`
**Focus:** OT security, supply chain compliance, production network protection
**Links to:** Capital Cyber CMMC for Manufacturing page

### 2. CPA/Accounting Grant
**File:** `cpa-accounting-grant.md`
**Slug:** `cybersecurity-grants-for-cpa-accounting-firms`
**Focus:** Tax season security, wire fraud prevention, client data protection
**Links to:** Capital Cyber professional services

### 3. Government Contractor Grant
**File:** `government-contractor-grant.md`
**Slug:** `cybersecurity-grants-for-government-contractors`
**Focus:** CMMC compliance, CUI scoping, DoD contract eligibility
**Links to:** Capital Cyber CMMC services

### 4. Nonprofit Grant
**File:** `nonprofit-grant.md`
**Slug:** `cybersecurity-grants-for-nonprofits`
**Focus:** Mission protection, donor data security, grant compliance
**Links to:** Capital Cyber nonprofit services

### 5. Dental/DSO Grant
**File:** `dental-dso-grant.md`
**Slug:** `cybersecurity-grants-for-dental-practices`
**Focus:** HIPAA compliance, ransomware protection, practice management security
**Links to:** Capital Cyber dental services

---

## Publishing Instructions

### Option 1: Manual Publishing (Recommended)

```bash
# 1. Convert markdown to HTML and publish via WordPress API
cd /root/.openclaw/workspace/cga-vertical-pages

# For each file:
node publish-cga-page.js manufacturing-grant.md
node publish-cga-page.js cpa-accounting-grant.md
# etc.
```

### Option 2: Batch Publishing

Schedule 1 page per hour to avoid rate limits:

```bash
# Create publishing script
node schedule-cga-pages.js
```

---

## Page Structure

Each page includes:

1. **Problem Statement:** Why this vertical is targeted
2. **Grant Programs:** What CGA offers (Pen Testing, Training, CyberCert)
3. **Vertical-Specific Challenges:** Tailored to the industry
4. **Qualification Criteria:** Who can apply
5. **How It Works:** 5-step process
6. **Cost of Inaction:** Real statistics
7. **Testimonials:** Placeholder for real quotes
8. **Apply CTA:** Clear call to action
9. **Capital Cyber Attribution:** Links to corresponding CC service page

---

## SEO Keywords Targeted

| Page | Primary Keywords |
|------|------------------|
| Manufacturing | "cybersecurity grants for manufacturers", "manufacturing cybersecurity grant", "free pen test manufacturing" |
| CPA/Accounting | "cybersecurity grants for CPAs", "accounting firm cybersecurity grant", "free security assessment CPA" |
| Government Contractors | "cybersecurity grants for government contractors", "CMMC grant", "free CMMC assessment" |
| Nonprofits | "cybersecurity grants for nonprofits", "nonprofit cybersecurity grant", "free security audit nonprofit" |
| Dental | "cybersecurity grants for dental practices", "dental practice cybersecurity grant", "free HIPAA security assessment" |

---

## Conversion Flow

```
CGA Grant Page (free assessment)
    ↓
Grant Application Submitted
    ↓
Assessment Conducted by Capital Cyber
    ↓
Gap Report Delivered
    ↓
Option to Engage Capital Cyber for Remediation (paid)
```

**Expected Conversion Rate:** 20% (based on current CGA → Capital Cyber performance)

---

## Next Steps

1. **Review and edit** each page for tone and accuracy
2. **Add real testimonials** from grant recipients
3. **Create publishing script** for CGA WordPress
4. **Schedule publication** (1 per hour to avoid rate limits)
5. **Update CGA Industries page** to link to new vertical pages
6. **Add links** from corresponding Capital Cyber service pages back to CGA grants
7. **Track applications** by vertical for conversion analysis

---

## Files Location

All files: `/root/.openclaw/workspace/cga-vertical-pages/`

- `manufacturing-grant.md`
- `cpa-accounting-grant.md`
- `government-contractor-grant.md`
- `nonprofit-grant.md`
- `dental-dso-grant.md`
- `README.md` (this file)

---

*Created: 2026-02-19*
*Purpose: Expand CGA grant reach through vertical-specific landing pages*
