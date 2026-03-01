# Weekend Build Report: CMMC Gap Assessment Portal
**Prepared by: Nikhil Bon | Date: March 1, 2026 | For: Rick Dassler**

---

## Executive Summary

Over the weekend, we built and deployed a fully functional CMMC Gap Assessment Portal at **assessment.cmmcreadynow.com**. This tool is designed to be the centerpiece of CGA's grant program, replacing the generic "CMMC Ready Now account" giveaway with a structured, lead-qualifying assessment that funnels directly into Capital Cyber's sales pipeline.

---

## What We Built

### The Gap Assessment Portal (Live Now)
**URL:** https://assessment.cmmcreadynow.com
**Repo:** github.com/capitalcybernik/gapassessmentportal (private)
**Hosted on:** Vercel (auto-deploys on every code push)

**How it works:**

1. **Grant Code Gate:** Visitors must enter a valid grant code to access the assessment. CGA controls who gets in by issuing codes to approved grant applicants. No code, no entry.

2. **Company Information:** Name, contact person, email, phone, and CMMC level selection (Level 1: 17 controls, Level 2: 110 controls).

3. **Step by Step Assessment:** Walks the user through every NIST 800-171 control, grouped by family (Access Control, Audit, Incident Response, etc.). Each control has:
   - A plain English description (written for non-technical business owners, not IT people)
   - The official NIST control reference (smaller, for compliance documentation)
   - Response options: Fully Implemented, Partially Implemented, Not Implemented, Not Applicable
   - A notes field for context ("We use Duo for MFA but only for admin accounts")

4. **Results Page:** After submission, users see a thank you message and are prompted to **book a call** with Rick to review their results. The booking calendar is embedded directly on the page. Users do NOT see their SPRS score or detailed gap analysis; that information is reserved for the consultation.

5. **Backend Notifications:** Every submission triggers:
   - Email to nikhil@capital-cyber.com and rick@capital-cyber.com with full SPRS score, gap count, top gap areas, and company details
   - Contact creation in GoHighLevel CRM, tagged "CMMC-Assessment" and "Gap-Assessment-Completed" with all assessment metadata

6. **Admin Dashboard:** Password-protected dashboard at /admin for reviewing all submissions, viewing full details, and tracking leads.

---

## Why This Is a Perfect Fit for CGA

### The Current Model
CGA awards grants (pen testing, CMMC Ready Now accounts) to qualifying businesses. The pen testing grants convert at ~20% to Capital Cyber clients. But the "CMMC Ready Now account" grant is passive; we give them a platform login and hope they engage.

### The New Model
Replace the passive account giveaway with an **active gap assessment grant**. Here is why this works better:

**Lower friction, higher engagement.** A questionnaire is less intimidating than a pen test or a platform login. Manufacturing and construction company owners can complete it in 10 to 15 minutes without involving their IT person.

**Self-qualifying leads.** Every person who completes the assessment has told us exactly what they need. We know their CMMC level, their gaps, their weak spots. The sales conversation starts from a position of knowledge, not discovery.

**Natural conversion point.** The assessment ends with "book a call to review your results." This is not a cold sales pitch; the prospect genuinely wants to understand their gaps. Rick walks them through their score, identifies critical issues, and positions Capital Cyber as the solution. The consultation IS the sales meeting.

**Data-driven pipeline.** Every submission lands in GHL with SPRS score, gap count, and contact info. We can segment, prioritize, and follow up based on actual compliance data rather than guessing.

**Scalable.** Unlike pen testing (which requires hands-on work per client), the gap assessment is self-service. CGA can issue 100 grants without increasing operational load. The bottleneck moves to consultations, which is exactly where we want it.

---

## Rollout Plan

### Phase 1: Immediate (This Week)

**1. CGA Website Update**
Build a dedicated page on cybergrantsalliance.org for the Gap Assessment Grant. Content should cover:
- What the grant includes (free CMMC gap assessment valued at $X)
- Who qualifies (manufacturing, construction, DoD supply chain)
- How to apply (application form that captures company info, then CGA issues a grant code)
- Link to assessment.cmmcreadynow.com

**2. Summit Page Update (summit.cybergrantsalliance.org)**
- Update Nikhil's session from "CMMC Ready Now: A Platform Demo" to "Live Gap Assessment Demo" or "See Your CMMC Gaps in Real Time"
- Change the giveaway from "20 CMMC Ready Now accounts" to "20 Free CMMC Gap Assessment Grants"
- Speaker update: Consider replacing Sam Durso with a representative from NIST MEP or SBA. Suggested alternatives:
  - **NIST Manufacturing Extension Partnership (MEP):** $175M in FY2026 funding, national network across all 50 states. They run cybersecurity programs for small manufacturers. A MEP representative would add federal credibility and can speak to grant funding at the state level.
  - **SBA Cybersecurity Grants Program:** Announced $3M in grants specifically for strengthening cybersecurity infrastructure for emerging small businesses (awards $1M+ per state agency, performance period through September 2026). An SBA representative adds government authority.
  - **GENEDGE (Virginia MEP):** Our home state MEP with defense/aerospace focus. Hyperlocal credibility.

**3. Cold Email Campaign**
We scraped the **DCAA FY2024 Active Contractor Listing** this weekend and extracted **210 manufacturing and construction contractors** in target states:
- Virginia: 72
- Florida: 32
- Maryland: 32
- New York: 18
- Pennsylvania: 17
- Arizona: 12
- New Jersey: 11
- Nevada, DC, Connecticut, Delaware: 16 combined

**Zero overlap with our existing GSA contractor list.** All net new leads.

Campaign flow:
- Email from CGA (not Capital Cyber) positioning the gap assessment as a grant
- "Your company has been identified as a DoD contractor that may qualify for a free CMMC compliance grant from Cyber Grants Alliance"
- CTA: Apply for the grant at cybergrantsalliance.org
- CGA reviews application, issues grant code
- Contractor completes assessment, books a call with Rick

### Phase 2: Next 2 Weeks

**4. Press Release**
Draft and distribute a press release: "Cyber Grants Alliance Launches Free CMMC Gap Assessment Program for DoD Contractors." Target defense industry publications, local Virginia business press, and manufacturing trade outlets.

**5. Branding Polish**
Align the assessment portal's design with the main cmmcreadynow.com site (logo, fonts, colors, footer). This is in progress.

**6. Summit Promotion**
Use the gap assessment as a hook to drive summit registrations. "Register for the Cyber Grant Summit and receive a free CMMC Gap Assessment grant code."

---

## Technical Details

| Item | Detail |
|------|--------|
| Frontend | Next.js 16 + React 19 + Tailwind CSS |
| Hosting | Vercel (auto-deploy from GitHub) |
| Domain | assessment.cmmcreadynow.com |
| CRM Integration | GoHighLevel (Capital Cyber account) |
| Email Notifications | SMTP2GO (info@capital-cyber.com) |
| Grant Codes | Environment variable, easily updated |
| Current Valid Code | CGA2026 |
| Admin Password | cmmc-admin-2024 |
| Admin URL | assessment.cmmcreadynow.com/admin |

---

## Next Steps (Prioritized)

1. ~~Build and deploy gap assessment portal~~ ✅
2. Finalize branding to match cmmcreadynow.com
3. Build CGA grant application page
4. Update summit page (speaker swap, giveaway update)
5. Draft cold email sequence for 210 DCAA contractors
6. Draft press release
7. Set up grant code issuance workflow (CGA application → review → code sent)

---

*All code is in the private repo capitalcybernik/gapassessmentportal. Assessment portal is live and accepting submissions now.*
