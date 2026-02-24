# CGA Website Audit & Cleanup Report

**Date:** 2026-02-20  
**Site:** cybergrantsalliance.org  
**Pages Audited:** 43

---

## Summary

Successfully completed comprehensive audit and cleanup of the CGA WordPress website. Made **41 total changes** to fix identified issues.

---

## 1. Broken Links Found

**Total: 3 broken links**

| Page | Broken URL | Error |
|------|------------|-------|
| CyberCert Grant (ID: 56058) | /cybercertwebinar1/ | 404 |
| No More Ransom (ID: 52853) | /resources | 404 |
| About Us (ID: 305) | /sponsor-programs | 404 |

**Action Required:** These links need to be manually fixed or pages need to be created.

---

## 2. Industries Page Updates

**Issue:** Industries page was missing links to 3 vertical pages:
- CPA/Accounting Firms
- Private Schools
- Catholic Schools

**Action Taken:** Added all 3 missing links to the Industries page (ID: 53518) in their appropriate sections:
- CPA/Accounting → Financial Services section
- Private Schools → Education section  
- Catholic Schools → Education section

**Status:** ✓ Fixed

---

## 3. School Page Consistency Audit

**Compared:** 3 school pages vs 5 new vertical grant pages

| School Page | Status |
|-------------|--------|
| Cybersecurity Grants for Colleges | ✓ Consistent |
| Cybersecurity Grants for Private Schools | ✓ Consistent |
| Cybersecurity Grants for Catholic Schools | ✓ Consistent |

**Finding:** All school pages have consistent structure with vertical pages (grant value, eligibility, requirements sections present).

---

## 4. Application Form Links

**Issue:** All 8 vertical/grant pages were missing links to the main application form (/apply-for-cybersecurity-grants/)

**Action Taken:** Added application form link section to all 8 pages:
- Cybersecurity Grants for Dental Practices and DSOs (ID: 56354)
- Cybersecurity Grants for Nonprofit Organizations (ID: 56353)
- Cybersecurity Grants for Government Contractors (ID: 56352)
- Cybersecurity Grants for CPA and Accounting Firms (ID: 56351)
- Cybersecurity Grants for Manufacturing Companies (ID: 56350)
- Cybersecurity Grants for Colleges (ID: 53442)
- Cybersecurity Grants for Private Schools (ID: 53338)
- Cybersecurity Grants for Catholic Schools (ID: 53254)

**Status:** ✓ Fixed

---

## 5. Font Styling CSS

**Issue:** 40 pages were missing font styling CSS

**CSS Added:**
```html
<style>
.entry-content p,.elementor-widget-text-editor p{font-size:18px!important;line-height:1.6!important}
.entry-content li{font-size:18px!important}
h1{font-size:36px!important}
h2{font-size:28px!important}
h3{font-size:22px!important}
</style>
```

**Pages Updated with Font CSS:**
1. vCSO Magazine (ID: 56313)
2. Apply for CyberCert Grant (ID: 56104)
3. CyberCert Grant (ID: 56058)
4. CyberCert GoldCert (ID: 55918)
5. Certify → Insure (ID: 55889)
6. Events (ID: 55357)
7. Grant Programs (ID: 54791)
8. Employees Cyber Training Grant (ID: 54735)
9. CMMC Tracking Software Grant (ID: 54703)
10. Pen Testing Grant (ID: 54626)
11. Grants Template (ID: 54609)
12. Home Main (ID: 54340)
13. CyberCert Grant (Silver) (ID: 54063)
14. Book a Call with William Fortune (ID: 54016)
15. Book a Call with Rick Dassler (ID: 53883)
16. Cybersecurity Grants for mpg_industry (ID: 53549)
17. Industries (ID: 53518)
18. Megafluence (ID: 53151)
19. Self Assessment (ID: 53126)
20. Monday Threat Intelligence (ID: 52952)
21. Press Release (ID: 52816)
22. Contact Status (ID: 52708)
23. Frequently Asked Questions (ID: 52680)
24. Grant Terms (ID: 52370)
25. Apply for Cybersecurity Grants (ID: 52248)
26. Application Status (ID: 50619)
27. Closer Look (ID: 50493)
28. Terms and Conditions (ID: 42572)
29. Contact Us (ID: 7291)
30. Privacy Policy (ID: 7395)
31. Old-Home (ID: 7112)
32. About Us (ID: 305)
33. Cybersecurity Grants for Dental Practices (ID: 56354) - with app link
34. Cybersecurity Grants for Nonprofits (ID: 56353) - with app link
35. Cybersecurity Grants for Government Contractors (ID: 56352) - with app link
36. Cybersecurity Grants for CPA/Accounting (ID: 56351) - with app link
37. Cybersecurity Grants for Manufacturing (ID: 56350) - with app link
38. Cybersecurity Grants for Colleges (ID: 53442) - with app link
39. Cybersecurity Grants for Private Schools (ID: 53338) - with app link
40. Cybersecurity Grants for Catholic Schools (ID: 53254) - with app link

**Status:** ✓ Fixed

---

## Changes Log

```
Industries page: Added links to CPA/Accounting, Private Schools, Catholic Schools
Cybersecurity Grants for Dental Practices and DSOs: Added application form link and font CSS
Cybersecurity Grants for Nonprofit Organizations: Added application form link and font CSS
Cybersecurity Grants for Government Contractors: Added application form link and font CSS
Cybersecurity Grants for CPA and Accounting Firms: Added application form link and font CSS
Cybersecurity Grants for Manufacturing Companies: Added application form link and font CSS
Cybersecurity Grants for Colleges: Added application form link and font CSS
Cybersecurity Grants for Private Schools: Added application form link and font CSS
Cybersecurity Grants for Catholic Schools: Added application form link and font CSS
Added font CSS to: vCSO Magazine (ID: 56313)
Added font CSS to: Apply for CyberCert Grant (ID: 56104)
Added font CSS to: CyberCert Grant (ID: 56058)
Added font CSS to: CyberCert GoldCert (ID: 55918)
Added font CSS to: Certify → Insure (ID: 55889)
Added font CSS to: Events (ID: 55357)
Added font CSS to: Grant Programs (ID: 54791)
Added font CSS to: Employees Cyber Training Grant (ID: 54735)
Added font CSS to: CMMC Tracking Software Grant (ID: 54703)
Added font CSS to: Pen Testing Grant (ID: 54626)
Added font CSS to: Grants Template (ID: 54609)
Added font CSS to: Home Main (ID: 54340)
Added font CSS to: CyberCert Grant (Silver) (ID: 54063)
Added font CSS to: Book a Call with William Fortune (ID: 54016)
Added font CSS to: Book a Call with Rick Dassler (ID: 53883)
Added font CSS to: Cybersecurity Grants for mpg_industry (ID: 53549)
Added font CSS to: Industries (ID: 53518)
Added font CSS to: Megafluence (ID: 53151)
Added font CSS to: Self Assessment (ID: 53126)
Added font CSS to: Monday Threat Intelligence (ID: 52952)
Added font CSS to: Press Release (ID: 52816)
Added font CSS to: Contact Status (ID: 52708)
Added font CSS to: Frequently Asked Questions (ID: 52680)
Added font CSS to: Grant Terms (ID: 52370)
Added font CSS to: Apply for Cybersecurity Grants (ID: 52248)
Added font CSS to: Application Status (ID: 50619)
Added font CSS to: Closer Look (ID: 50493)
Added font CSS to: Terms and Conditions (ID: 42572)
Added font CSS to: Contact Us (ID: 7291)
Added font CSS to: Privacy Policy (ID: 7395)
Added font CSS to: Old-Home (ID: 7112)
Added font CSS to: About Us (ID: 305)
```

---

## Outstanding Issues (Requires Manual Action)

1. **Broken Links** - 3 links returning 404:
   - Create `/cybercertwebinar1/` page OR remove link from CyberCert Grant page
   - Create `/resources` page OR remove link from No More Ransom page
   - Create `/sponsor-programs` page OR remove link from About Us page

---

## Audit Methodology

1. Fetched all 43 published pages via WordPress REST API
2. Extracted all links from each page content
3. Verified internal links returned HTTP 200
4. Checked for presence of font styling CSS
5. Verified Industries page links to all 8 vertical/grant pages
6. Verified all vertical pages link to application form
7. Compared school page structure with newer vertical pages

---

## API Rate Limiting

All API calls respected 3-second delay between requests as specified.
