# CMMC 2.0 Levels

## Level 1: Foundational

**Protects:** Federal Contract Information (FCI)
**Assessment:** Annual self-assessment + senior official affirmation in SPRS
**POA&M:** NOT permitted. All 17 requirements must be MET.
**Scoring:** Binary (Yes/No in SPRS)

### 15 FAR 52.204-21 Practices (mapping to 17 NIST 800-171 requirements)

FAR splits into 15 items; NIST maps one FAR item to 3 separate requirements, totaling 17.

**Access Control (AC) — 4 practices:**
1. **AC.L1-b.1.i** — Limit system access to authorized users, processes, or devices
2. **AC.L1-b.1.ii** — Limit system access to authorized transaction types and functions
3. **AC.L1-b.1.iii** — Verify and control connections to external information systems
4. **AC.L1-b.1.iv** — Control information posted on publicly accessible systems

**Identification & Authentication (IA) — 2 practices:**
5. **IA.L1-b.1.v** — Identify information system users, processes, or devices
6. **IA.L1-b.1.vi** — Authenticate (or verify) identities of users, processes, or devices

**Media Protection (MP) — 1 practice:**
7. **MP.L1-b.1.vii** — Sanitize or destroy media containing FCI before disposal or reuse

**Physical Protection (PE) — 2 practices:**
8. **PE.L1-b.1.viii** — Limit physical access to systems, equipment, and operating environments
9. **PE.L1-b.1.ix** — Escort visitors and monitor visitor activity; maintain audit logs of physical access; control physical access devices

**System & Communications Protection (SC) — 2 practices:**
10. **SC.L1-b.1.x** — Monitor, control, and protect communications at external boundaries and key internal boundaries
11. **SC.L1-b.1.xi** — Implement subnetworks for publicly accessible system components separated from internal networks

**System & Information Integrity (SI) — 4 practices:**
12. **SI.L1-b.1.xii** — Identify, report, and correct information and system flaws in a timely manner
13. **SI.L1-b.1.xiii** — Provide protection from malicious code at appropriate locations
14. **SI.L1-b.1.xiv** — Update malicious code protection mechanisms when new releases are available
15. **SI.L1-b.1.xv** — Perform periodic scans and real-time scans of files from external sources

### Scoping

- Scope = all systems processing, storing, or transmitting FCI
- Can scope to enterprise or enclave
- External Service Providers (ESPs) used to meet requirements are in scope
- Out-of-scope: assets not touching FCI
- Specialized assets (IoT, OT, test equipment) may be excluded if they cannot be secured

---

## Level 2: Advanced

**Protects:** Controlled Unclassified Information (CUI)
**Assessment:**
- Phase 1 (Nov 2025 to Nov 2026): Self-assessment acceptable
- Phase 2+ (Nov 2026 onward): C3PAO third-party assessment required for most CUI contracts
- Some non-critical CUI contracts may remain self-assessment
**POA&M:** Permitted, with constraints. Must close within 180 days.
**Scoring:** 110-point scale per NIST SP 800-171 Rev 2

### 110 Controls across 14 Families

| Family | ID Prefix | # Controls |
|--------|-----------|------------|
| Access Control | AC | 22 |
| Awareness & Training | AT | 3 |
| Audit & Accountability | AU | 9 |
| Configuration Management | CM | 9 |
| Identification & Authentication | IA | 11 |
| Incident Response | IR | 3 |
| Maintenance | MA | 6 |
| Media Protection | MP | 9 |
| Personnel Security | PS | 2 |
| Physical Protection | PE | 6 |
| Risk Assessment | RA | 3 |
| Security Assessment | CA | 4 |
| System & Communications Protection | SC | 16 |
| System & Information Integrity | SI | 7 |
| **Total** | | **110** |

### Key Requirements (commonly challenging for SMBs)

- **Multi-Factor Authentication (MFA)** for all remote and privileged access
- **Encryption** of CUI at rest and in transit (FIPS-validated)
- **Audit logging** with review, analysis, and reporting
- **Incident response** plan, testing, and reporting to DoD within 72 hours
- **Security awareness training** for all users
- **Configuration baselines** and change management
- **Vulnerability scanning** and remediation
- **System Security Plan (SSP)** documenting all 110 controls
- **POA&M** for any unmet controls (must close within 180 days)

### SPRS Scoring

- Each of the 110 controls starts at full value
- Points deducted for unmet controls (1, 3, or 5 points depending on severity)
- Perfect score: 110
- Minimum to submit: -203 (all controls unmet)
- Scores reported to SPRS; contracting officers check before award

---

## Level 3: Expert

**Protects:** Critical CUI associated with high-value assets and critical programs
**Assessment:** Government-led by DIBCAC (Defense Industrial Base Cybersecurity Assessment Center)
**Prerequisite:** Must first achieve Level 2 C3PAO certification
**POA&M:** Limited. Maximum 4 of the 24 controls can be on POA&M.

### 24 Enhanced Controls from NIST SP 800-172

Selected from 800-172's enhanced security requirements. These supplement (not replace) the 110 Level 2 controls.

**Three Protection Strategies:**
1. **Penetration-Resistant Architecture (PRA):** Design systems to limit adversary opportunities for compromise and persistence
2. **Damage-Limiting Operations (DLO):** Detect, isolate, and limit scope of successful compromises
3. **Cyber Resiliency & Survivability:** Anticipate, withstand, recover from, and adapt to attacks

**Five Desired Effects on Adversaries:**
- Redirect (deter, divert, deceive)
- Preclude (expunge, preempt, negate)
- Impede (contain, degrade, delay)
- Limit (shorten, reduce damage)
- Expose (detect, scrutinize, reveal)

**Control Notation:** Uses base NIST 800-171 control ID + ".e" suffix (e.g., AU.L2.3.3.1.e)

### Level 3 Scoping

- Strictest scoping requirements
- All CUI assets, security protection assets, and contractor risk managed assets in scope
- Specialized assets must have documented rationale for any exclusions
- Government assessors (DIBCAC) determine scope validity
