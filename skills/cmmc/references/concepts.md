# CMMC Key Concepts & Definitions

## Information Types

**FCI (Federal Contract Information):** Information not intended for public release, provided by or generated for the Government under a contract to develop or deliver a product or service. Does NOT include publicly available info or simple transactional payment data. Defined in FAR 4.1901.

**CUI (Controlled Unclassified Information):** Information the Government creates or possesses (or an entity creates/possesses for the Government) that requires safeguarding or dissemination controls per law, regulation, or Government-wide policy. Broader and more sensitive than FCI. Marked per 32 CFR Part 2002.

**How to determine which you handle:**
- FCI only → Level 1
- CUI → Level 2 (most contractors) or Level 3 (DoD designates)
- COTS (Commercial Off-The-Shelf) products only → CMMC not required

## Key Organizations & Systems

**C3PAO (Certified Third-Party Assessment Organization):** Organizations accredited by the Cyber AB to conduct Level 2 certification assessments. List at cyberab.org.

**DIBCAC (Defense Industrial Base Cybersecurity Assessment Center):** Part of DCMA. Conducts Level 3 government-led assessments.

**Cyber AB (formerly CMMC-AB):** The accreditation body for the CMMC ecosystem. Accredits C3PAOs and certifies assessors.

**SPRS (Supplier Performance Risk System):** DoD system where contractors report assessment scores and affirmations. Contracting officers check SPRS before contract award. Accessible at sprs.csd.disa.mil.

**eMASS:** Enterprise Mission Assurance Support Service. Used for Level 3 assessment documentation.

## Compliance Documents

**SSP (System Security Plan):** Documents how each of the 110 NIST 800-171 controls is implemented. Required for Level 2+. Must describe the system boundary, architecture, and control implementations.

**POA&M (Plan of Action & Milestones):** Documents unmet controls with specific corrective actions, deadlines, and responsible parties.
- Level 1: POA&Ms NOT permitted (all requirements must be MET)
- Level 2: POA&Ms allowed, must close within 180 days of assessment
- Level 3: Maximum 4 of 24 enhanced controls can be on POA&M

**BCA (Body of Cyber-Relevant Assets):** All assets that process, store, or transmit CUI, plus security protection assets.

## Scoping

**Enterprise scope:** Entire organization assessed
**Enclave scope:** Defined subset of the organization (network segment, facility, etc.)

**Asset categories:**
- **CUI Assets:** Process, store, or transmit CUI (always in scope)
- **Security Protection Assets:** Provide security functions for CUI assets (in scope)
- **Contractor Risk Managed Assets:** Can but don't process CUI; contractor determines risk (in scope for Level 2+)
- **Specialized Assets:** IoT, IIoT, OT, restricted systems, test equipment (documented and assessed)
- **Out-of-Scope Assets:** No connection to CUI processing

## Flowdown (Supply Chain)

CMMC requirements flow down to subcontractors:
- Subcontractor handles FCI only → Level 1 (Self)
- Subcontractor handles CUI, prime has Level 2 (Self) → Level 2 (Self)
- Subcontractor handles CUI, prime has Level 2 (C3PAO) → Level 2 (C3PAO)
- Subcontractor handles CUI, prime has Level 3 → Level 2 (C3PAO) (Level 3 does NOT flow down unless DoD directs)

Subcontractors submit their own SPRS scores. Primes do NOT have access to sub scores in SPRS; must communicate directly.

## Cloud & GCC High

DoD contractors handling CUI in cloud environments typically need:
- **Microsoft GCC High** or equivalent FedRAMP High authorized environment
- Standard commercial cloud (M365 Business, etc.) generally insufficient for CUI
- Cloud Service Providers must meet FedRAMP Moderate (minimum) or FedRAMP High requirements
- ESPs (External Service Providers) are part of the assessment scope

## DFARS Clauses

- **DFARS 252.204-7012:** Safeguarding Covered Defense Information. Requires NIST 800-171 implementation and 72-hour incident reporting to DoD.
- **DFARS 252.204-7019:** Notice of NIST 800-171 Assessment Requirements
- **DFARS 252.204-7020:** NIST 800-171 DoD Assessment Requirements
- **DFARS 252.204-7021:** CMMC Requirements (the CMMC clause itself)

## Costs (Industry Estimates)

| Level | Estimated 3-Year Cost |
|-------|-----------------------|
| Level 1 | $3,000 - $35,000 |
| Level 2 (Self) | $50,000 - $150,000 |
| Level 2 (C3PAO) | $150,000 - $400,000 |
| Level 3 | $500,000+ |

Costs include: technology upgrades, consulting, documentation, assessment fees, ongoing monitoring, training, and GCC High licensing if applicable.

## Common Failure Points for SMBs

1. No MFA on all remote/privileged access
2. No encryption of CUI at rest
3. Missing or incomplete SSP
4. No audit log review process
5. No incident response plan or testing
6. Using commercial M365 instead of GCC High for CUI
7. No security awareness training program
8. Inadequate physical security controls
9. No vulnerability scanning/remediation process
10. Subcontractor flowdown not addressed
