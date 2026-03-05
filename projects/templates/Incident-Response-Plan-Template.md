# CYBERSECURITY INCIDENT RESPONSE PLAN

**Organization:** ___________________________  
**Plan ID:** IRP-001  
**Effective Date:** ___________________________  
**Last Reviewed:** ___________________________  
**Plan Owner:** ___________________________  


## 1. PURPOSE

This plan establishes the framework for detecting, responding to, and recovering from cybersecurity incidents. It defines roles, procedures, and communication protocols to minimize business impact and ensure systematic response to security events.

**Alignment:** NIST SP 800-61 Rev. 3, NIST Cybersecurity Framework 2.0 (RS Function)


## 2. DEFINITION OF INCIDENT

A cybersecurity incident is an event that:
- Violates or threatens to violate security policies
- Jeopardizes the confidentiality, integrity, or availability of information systems or data
- Constitutes a violation or imminent threat of violation of law, regulation, or policy

**Examples:** Ransomware infection, unauthorized data access, phishing compromise, business email compromise, malware outbreak, denial of service attack


## 3. INCIDENT RESPONSE TEAM (IRT)

### 3.1 Core Team

| Role | Responsibility | Primary | Backup |
|------|----------------|---------|--------|
| **Incident Commander** | Overall incident coordination, decision authority | _________ | _________ |
| **Technical Lead** | Technical investigation and containment | _________ | _________ |
| **Communications Lead** | Internal and external communications | _________ | _________ |
| **Legal/Compliance** | Regulatory requirements, legal advice | _________ | _________ |
| **HR Representative** | Employee-related incidents, disciplinary actions | _________ | _________ |

### 3.2 External Resources
- **Managed Security Provider (MSP):** ___________________________
- **Cyber Insurance Carrier:** ___________________________
- **Legal Counsel:** ___________________________
- **Forensics Firm (on retainer):** ___________________________
- **Law Enforcement Contact:** ___________________________


## 4. INCIDENT SEVERITY CLASSIFICATION

| Severity | Definition | Response Time | Examples |
|----------|------------|---------------|----------|
| **Critical (P1)** | Active threat to critical systems or widespread compromise | Immediate (< 1 hour) | Ransomware, active data breach, critical system outage |
| **High (P2)** | Confirmed security incident with limited scope | 4 hours | Phishing compromise, malware on single endpoint |
| **Medium (P3)** | Suspicious activity requiring investigation | 24 hours | Failed login attempts, policy violation |
| **Low (P4)** | Minor issue or informational alert | 72 hours | Spam, port scan detected |


## 5. INCIDENT RESPONSE PHASES

### PHASE 1: DETECTION AND ANALYSIS

**Objective:** Identify and validate security incidents promptly

**Actions:**
1. Monitor security alerts from [Action1/Cynet/Threatlocker/EDR tools]
2. Validate alerts through log analysis and system verification
3. Document initial findings in incident tracking system
4. Assign severity classification
5. Notify Incident Commander if severity is P1 or P2

**Key Questions:**
- What systems or data are affected?
- When was the incident first detected?
- What is the suspected attack vector?
- Is the threat ongoing or contained?


### PHASE 2: CONTAINMENT

**Objective:** Limit incident scope and prevent further damage

**Short-Term Containment (First 1-4 hours):**
- Isolate affected systems from network (disconnect network cable or disable switch port)
- Disable compromised user accounts
- Revoke active sessions
- Block malicious IPs/domains at firewall
- Preserve system state for forensic analysis

**Long-Term Containment (24-48 hours):**
- Implement network segmentation changes
- Deploy additional monitoring
- Apply emergency patches
- Establish clean backup systems for critical operations

**Documentation:**
- Maintain chain of custody for evidence
- Document all containment actions with timestamps
- Preserve logs before they rotate


### PHASE 3: ERADICATION

**Objective:** Remove threat actor presence and vulnerabilities

**Actions:**
1. Identify root cause of incident
2. Remove malware and backdoors
3. Patch exploited vulnerabilities
4. Reset all potentially compromised credentials
5. Verify threat elimination through scanning and monitoring
6. Rebuild systems from known good images if necessary


### PHASE 4: RECOVERY

**Objective:** Restore normal operations safely

**Actions:**
1. Restore systems from clean backups (verify backup integrity first)
2. Implement enhanced monitoring on recovered systems
3. Validate system functionality before reconnection to production
4. Monitor for signs of re-infection (30-day watch period)
5. Conduct lessons learned session

**Go-Live Criteria:**
- [ ] All malware removed and verified
- [ ] Vulnerabilities patched
- [ ] Systems hardened with additional controls
- [ ] Monitoring confirmed operational
- [ ] Management approval obtained


### PHASE 5: POST-INCIDENT ACTIVITY

**Within 72 Hours:**
- Complete incident documentation
- Draft preliminary incident report
- Notify cyber insurance carrier if applicable

**Within 1 Week:**
- Conduct post-incident review (lessons learned)
- Update security controls based on findings
- Brief executive leadership

**Within 30 Days:**
- Complete final incident report
- Update incident response plan with improvements
- Conduct additional user awareness training if needed
- Review and update disaster recovery procedures


## 6. COMMUNICATION PROTOCOLS

### 6.1 Internal Notifications

| Audience | When to Notify | Method | Message Owner |
|----------|---------------|--------|---------------|
| IT Team | All incidents | Ticket/Slack/Teams | Incident Commander |
| Management | P2 and above | Phone/Email | Incident Commander |
| Executive Team | P1 only | Phone call | Incident Commander |
| All Employees | When operationally necessary | Email/All-hands | Communications Lead |

### 6.2 External Notifications

**Regulatory Requirements:**
- **Data Breach:** Notify affected individuals within [state requirement, typically 30-60 days]
- **Regulatory Bodies:** As required by applicable regulations (HIPAA, GDPR, state laws)
- **Law Enforcement:** For criminal activity, contact [local FBI field office / Secret Service]

**Customer Notifications:**
- If customer data potentially compromised, notify affected customers within regulatory timeframe
- Provide credit monitoring if required

**Media Inquiries:**
- All media contact routed to Communications Lead
- No employee should speak to media without authorization
- Prepare holding statement template


## 7. EVIDENCE PRESERVATION

### 7.1 Forensic Collection
- Create forensic images of affected systems before remediation
- Preserve firewall, server, and application logs
- Capture memory dumps from running compromised systems
- Document network topology at time of incident

### 7.2 Chain of Custody
- Use write-blockers for disk imaging
- Generate and record hash values for all evidence
- Maintain evidence log with transfer documentation
- Store evidence securely for minimum 90 days (or per legal requirement)


## 8. INCIDENT TYPES AND SPECIFIC PROCEDURES

### 8.1 Ransomware
**Immediate Actions:**
1. Isolate affected systems immediately
2. Do NOT pay ransom without executive and legal approval
3. Contact cyber insurance carrier
4. Identify last known good backup
5. Preserve ransom note and wallet addresses for law enforcement

### 8.2 Business Email Compromise (BEC)
**Immediate Actions:**
1. Reset compromised email account
2. Review mail rules for forwarding/deletion
3. Check for unauthorized wire transfers
4. Notify financial institutions
5. Preserve email headers for investigation

### 8.3 Insider Threat
**Immediate Actions:**
1. Coordinate with HR and Legal
2. Preserve evidence covertly
3. Limit access without alerting subject (if investigation ongoing)
4. Document timeline of suspicious activity


## 9. PLAN MAINTENANCE

- **Tabletop Exercise:** Conduct quarterly
- **Plan Review:** Update annually or after significant incidents
- **Contact List:** Verify quarterly
- **Training:** Annual incident response training for IRT members


## 10. APPENDICES

### Appendix A: Contact List
[Include phone numbers for all IRT members, MSP, insurance, legal, etc.]

### Appendix B: System Inventory
[List critical systems, their owners, and priority for recovery]

### Appendix C: Communication Templates
- Initial incident notification
- Executive briefing
- Customer breach notification
- Employee awareness notice
- Media holding statement

### Appendix D: Forensic Tools and Procedures
[Document imaging tools, log locations, and collection procedures]


---

*This document is a template. Customize for organizational needs.*  
*Managed by: ___________________________ | Contact: ___________________________*
