# CGA Website Audit Report

**Date:** 2026-02-20  
**Auditor:** Subagent  
**Site:** cybergrantsalliance.org

---

## 1. SUMMARY OF FINDINGS

### Critical Issues Found:
1. **5 NEW VERTICAL GRANT PAGES ARE EMPTY** - Zero content, not published properly
2. **School Pages Have Broken CTA Links** - "Apply for Grants" buttons link to "#" instead of the application form
3. **Industries Page Missing Links** - Only 1 of 8 target vertical/school pages is correctly linked
4. **Missing Font CSS** - Pages need consistent font sizing

---

## 2. ALL PUBLISHED CONTENT

### Pages (40 total)
- **5 Industry/Vertical Grant Pages:** Dental, Nonprofit, GovCon, CPA, Manufacturing
- **3 School Pages:** Colleges, Private Schools, Catholic Schools  
- **1 Industries Page:** Main industries directory
- **1 Application Form:** Apply for Cybersecurity Grants
- **30 Other Pages:** Various grant programs, events, contact, etc.

### Posts (19 total)
- News articles, threat intelligence roundups, press releases

---

## 3. BROKEN LINKS ANALYSIS

### Industries Page (62 links checked)
- **Working:** 58 links return HTTP 200
- **Broken:** 0 links are broken
- **Note:** Links work but many point to wrong/different URLs than the actual vertical pages

### School Pages - CTA Links
| Page | CTA Button | Current Link | Should Link To |
|------|-----------|--------------|----------------|
| Colleges (53442) | Apply for Grants | # (broken) | /apply-for-cybersecurity-grants/ |
| Private Schools (53338) | Apply for Grants | # (broken) | /apply-for-cybersecurity-grants/ |
| Catholic Schools (53254) | Apply for Grants | # (broken) | /apply-for-cybersecurity-grants/ |

---

## 4. VERTICAL/INDUSTRY PAGE CONTENT STATUS

### NEW Vertical Pages (5) - ALL EMPTY!
| ID | Title | Content Status | URL |
|----|-------|----------------|-----|
| 56354 | Cybersecurity Grants for Dental Practices and DSOs | **EMPTY** | /cybersecurity-grants-for-dental-practices/ |
| 56353 | Cybersecurity Grants for Nonprofit Organizations | **EMPTY** | /cybersecurity-grants-for-nonprofits/ |
| 56352 | Cybersecurity Grants for Government Contractors | **EMPTY** | /cybersecurity-grants-for-government-contractors/ |
| 56351 | Cybersecurity Grants for CPA and Accounting Firms | **EMPTY** | /cybersecurity-grants-for-cpa-accounting-firms/ |
| 56350 | Cybersecurity Grants for Manufacturing Companies | **EMPTY** | /cybersecurity-grants-for-manufacturers/ |

**CRITICAL:** These pages were created but have NO content. They need:
- Full Elementor content similar to school pages
- Proper CTA buttons linking to application form
- Font CSS styling

### School Pages (3) - HAVE CONTENT
| ID | Title | Content Status | URL |
|----|-------|----------------|-----|
| 53442 | Cybersecurity Grants for Colleges | ~55K chars | /cybersecurity-grants-for-colleges/ |
| 53338 | Cybersecurity Grants for Private Schools | ~56K chars | /cybersecurity-grants-for-private-schools/ |
| 53254 | Cybersecurity Grants for Catholic Schools | ~57K chars | /cybersecurity-grants-for-catholic-schools/ |

---

## 5. INDUSTRIES PAGE LINK ANALYSIS

### Target Pages (8) - What SHOULD be linked:
1. ✅ **Dental** - /cybersecurity-grants-for-dental-practices/ (LINKED - but page is empty!)
2. ❌ **Nonprofit** - /cybersecurity-grants-for-nonprofits/ (NOT LINKED)
3. ❌ **GovCon** - /cybersecurity-grants-for-government-contractors/ (NOT LINKED)
4. ❌ **CPA** - /cybersecurity-grants-for-cpa-accounting-firms/ (NOT LINKED)
5. ❌ **Manufacturing** - /cybersecurity-grants-for-manufacturers/ (NOT LINKED)
6. ❌ **Colleges** - /cybersecurity-grants-for-colleges/ (NOT LINKED)
7. ❌ **Private Schools** - /cybersecurity-grants-for-private-schools/ (NOT LINKED)
8. ❌ **Catholic Schools** - /cybersecurity-grants-for-catholic-schools/ (NOT LINKED)

### What Industries Page Currently Links To:
| Target | Current Industries Link | Status |
|--------|------------------------|--------|
| Dental | /cybersecurity-grants-for-dental-practices/ | ✅ Correct URL but page is EMPTY |
| Nonprofit | /cybersecurity-grants-for-charitable-organizations/ | ❌ Different page |
| GovCon | /cybersecurity-grants-for-municipalities-and-local-governments/ | ❌ Different page |
| CPA | /cybersecurity-grants-for-accounting-firms/ | ❌ Different page |
| Manufacturing | /cybersecurity-grants-for-small-to-mid-sized-manufacturing-companies/ | ❌ Different page |
| Colleges | /cybersecurity-grants-for-colleges-and-universities/ | ❌ Different page |
| Private Schools | /cybersecurity-grants-for-k-12-schools/ | ❌ Different page |
| Catholic Schools | /cybersecurity-grants-for-religious-institutions/ | ❌ Different page |

**Result:** Only 1 of 8 target pages has a link, and that page is empty!

---

## 6. CONSISTENCY ISSUES - School vs Vertical Pages

### Formatting Comparison:
| Element | School Pages (Colleges) | New Vertical Pages (Dental) |
|---------|------------------------|----------------------------|
| Content | ~55K chars full content | **EMPTY (0 chars)** |
| CTA Button | Present but links to "#" | **MISSING** |
| Font CSS | Missing | **N/A (no content)** |
| Structure | Elementor sections | **N/A** |
| Hero Section | Present | **MISSING** |
| Features List | Present | **MISSING** |

### Font Size Issues:
School pages and likely other pages are missing the standardized font CSS. Pages should include:
```html
<style>.entry-content p,.elementor-widget-text-editor p{font-size:18px!important;line-height:1.6!important}.entry-content li{font-size:18px!important}h1{font-size:36px!important}h2{font-size:28px!important}h3{font-size:22px!important}</style>
```

---

## 7. APPLICATION FORM LINK VERIFICATION

### Main Application Form:
- **URL:** /apply-for-cybersecurity-grants/
- **Status:** ✅ HTTP 200 (Working)
- **Page ID:** 52248

### Which Pages Link to Application Form:
| Page | Has Link to Application Form | Link Quality |
|------|------------------------------|--------------|
| School Pages (3) | ❌ NO - Link to "#" | Broken |
| New Vertical Pages (5) | ❌ NO - No content | N/A |
| Industries Page | ❌ NO | Missing |
| About Us | ✅ YES | Working |
| Home Page | ✅ YES | Working |

---

## 8. RECOMMENDED ACTIONS

### Priority 1 - Critical (Fix Immediately):
1. **Add content to 5 empty vertical grant pages**
   - Use school pages as templates
   - Include proper hero section
   - Add feature lists specific to each industry
   - Add "Apply for Grants" CTA button

2. **Fix CTA buttons on 3 school pages**
   - Change href="#" to href="/apply-for-cybersecurity-grants/"

### Priority 2 - High (Fix This Week):
3. **Update Industries page to link to correct URLs**
   - Add links to: /cybersecurity-grants-for-nonprofits/
   - Add links to: /cybersecurity-grants-for-government-contractors/
   - Add links to: /cybersecurity-grants-for-cpa-accounting-firms/
   - Add links to: /cybersecurity-grants-for-manufacturers/
   - Add links to: /cybersecurity-grants-for-colleges/
   - Add links to: /cybersecurity-grants-for-private-schools/
   - Add links to: /cybersecurity-grants-for-catholic-schools/
   - Update Dental link when page has content

4. **Add Font CSS to all pages**
   - School pages need font CSS added
   - New vertical pages will need it when created

### Priority 3 - Medium:
5. **Ensure all vertical pages link to application form**
6. **Review and fix any remaining broken internal links**

---

## 9. PAGES NEEDING FONT CSS

Add this CSS to pages missing it:
```html
<style>.entry-content p,.elementor-widget-text-editor p{font-size:18px!important;line-height:1.6!important}.entry-content li{font-size:18px!important}h1{font-size:36px!important}h2{font-size:28px!important}h3{font-size:22px!important}</style>
```

Pages confirmed needing this:
- Cybersecurity Grants for Colleges (53442)
- Cybersecurity Grants for Private Schools (53338)
- Cybersecurity Grants for Catholic Schools (53254)
- All 5 new vertical pages (when content is added)

---

## 10. API CREDENTIALS USED

- **API:** https://cybergrantsalliance.org/wp-json/wp/v2/
- **User:** aresautomation
- **App Password:** Qy1T u0Eh gb6D JLjT jqH8 W8hp

---

**END OF AUDIT REPORT**
