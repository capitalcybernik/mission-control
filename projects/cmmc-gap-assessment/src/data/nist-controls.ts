import { ControlFamily, AssessmentQuestion } from '@/types'

export const controlFamilies: ControlFamily[] = [
  { id: 'AC', name: 'Access Control', acronym: 'AC', description: 'Mechanisms to manage who can access information and under what circumstances.' },
  { id: 'AT', name: 'Awareness and Training', acronym: 'AT', description: 'Security awareness and training policies and procedures.' },
  { id: 'AU', name: 'Audit and Accountability', acronym: 'AU', description: 'Audit events and accountability for system users.' },
  { id: 'CM', name: 'Configuration Management', acronym: 'CM', description: 'Configuration management policies and procedures.' },
  { id: 'CP', name: 'Contingency Planning', acronym: 'CP', description: 'Contingency planning and disaster recovery procedures.' },
  { id: 'IA', name: 'Identification and Authentication', acronym: 'IA', description: 'Identification and authentication of system users and devices.' },
  { id: 'IR', name: 'Incident Response', acronym: 'IR', description: 'Incident response capabilities and procedures.' },
  { id: 'MA', name: 'Maintenance', acronym: 'MA', description: 'System maintenance policies and procedures.' },
  { id: 'MP', name: 'Media Protection', acronym: 'MP', description: 'Media protection policies and procedures.' },
  { id: 'PE', name: 'Physical Protection', acronym: 'PE', description: 'Physical and environmental protection controls.' },
  { id: 'PS', name: 'Personnel Security', acronym: 'PS', description: 'Personnel security policies and procedures.' },
  { id: 'RA', name: 'Risk Assessment', acronym: 'RA', description: 'Risk assessment policies and procedures.' },
  { id: 'SA', name: 'System and Services Acquisition', acronym: 'SA', description: 'System and services acquisition policies.' },
  { id: 'SC', name: 'System and Communications Protection', acronym: 'SC', description: 'System and communications protection mechanisms.' },
  { id: 'SI', name: 'System and Information Integrity', acronym: 'SI', description: 'System and information integrity policies and procedures.' },
]

export const assessmentQuestions: AssessmentQuestion[] = [
  // Access Control
  { id: '3.1.1', controlFamily: 'AC', controlId: '3.1.1', question: 'Limit information system access to authorized users.', description: 'Limit system access to authorized users, processes, and devices.', responseType: 'maturity' },
  { id: '3.1.2', controlFamily: 'AC', controlId: '3.1.2', question: 'Limit information system access to permitted transactions and functions.', description: 'Restrict access to authorized transactions and functions only.', responseType: 'maturity' },
  { id: '3.1.3', controlFamily: 'AC', controlId: '3.1.3', question: 'Control the flow of CUI in information systems.', description: 'Enforce approved authorizations for CUI flow control.', responseType: 'maturity' },
  { id: '3.1.4', controlFamily: 'AC', controlId: '3.1.4', question: 'Separate duties to prevent collusion.', description: 'Implement separation of duties to prevent unauthorized activity.', responseType: 'maturity' },
  { id: '3.1.5', controlFamily: 'AC', controlId: '3.1.5', question: 'Employ least privilege principles.', description: 'Grant only necessary access for assigned tasks.', responseType: 'maturity' },
  { id: '3.1.6', controlFamily: 'AC', controlId: '3.1.6', question: 'Use non-privileged accounts for routine functions.', description: 'Require non-privileged accounts/roles for non-security functions.', responseType: 'maturity' },
  { id: '3.1.7', controlFamily: 'AC', controlId: '3.1.7', question: 'Prevent non-privileged users from executing privileged functions.', description: 'Block non-privileged users from privileged operations and log attempts.', responseType: 'maturity' },
  { id: '3.1.8', controlFamily: 'AC', controlId: '3.1.8', question: 'Limit unsuccessful logon attempts.', description: 'Implement account lockout after failed login attempts.', responseType: 'maturity' },
  { id: '3.1.9', controlFamily: 'AC', controlId: '3.1.9', question: 'Provide privacy and security notices.', description: 'Display required notices consistent with CUI rules.', responseType: 'maturity' },
  { id: '3.1.10', controlFamily: 'AC', controlId: '3.1.10', question: 'Use session lock with pattern-hiding displays.', description: 'Lock sessions after inactivity with privacy screens.', responseType: 'maturity' },
  { id: '3.1.11', controlFamily: 'AC', controlId: '3.1.11', question: 'Terminate sessions automatically after timeout.', description: 'Auto-logout users after defined period of inactivity.', responseType: 'maturity' },
  { id: '3.1.12', controlFamily: 'AC', controlId: '3.1.12', question: 'Monitor and control remote access sessions.', description: 'Track and manage all remote access activity.', responseType: 'maturity' },
  { id: '3.1.13', controlFamily: 'AC', controlId: '3.1.13', question: 'Employ cryptography for remote access confidentiality.', description: 'Use encryption (VPN/SSL) for all remote sessions.', responseType: 'maturity' },
  { id: '3.1.14', controlFamily: 'AC', controlId: '3.1.14', question: 'Route remote access through managed access points.', description: 'Channel all remote access through managed gateways.', responseType: 'maturity' },
  { id: '3.1.15', controlFamily: 'AC', controlId: '3.1.15', question: 'Authorize remote privileged access.', description: 'Approve remote privileged commands and security information access.', responseType: 'maturity' },
  { id: '3.1.16', controlFamily: 'AC', controlId: '3.1.16', question: 'Authorize wireless access.', description: 'Require approval before allowing wireless connections.', responseType: 'maturity' },
  { id: '3.1.17', controlFamily: 'AC', controlId: '3.1.17', question: 'Protect wireless with authentication and encryption.', description: 'Secure wireless networks with WPA2/WPA3 and authentication.', responseType: 'maturity' },
  { id: '3.1.18', controlFamily: 'AC', controlId: '3.1.18', question: 'Control mobile device connections.', description: 'Manage and authorize mobile device access to systems.', responseType: 'maturity' },
  { id: '3.1.19', controlFamily: 'AC', controlId: '3.1.19', question: 'Encrypt CUI on mobile devices.', description: 'Implement full-disk encryption on mobile devices containing CUI.', responseType: 'maturity' },
  { id: '3.1.20', controlFamily: 'AC', controlId: '3.1.20', question: 'Verify and control/limit connections to external systems.', description: 'Manage and validate connections to external systems.', responseType: 'maturity' },
  { id: '3.1.21', controlFamily: 'AC', controlId: '3.1.21', question: 'Limit use of portable storage devices.', description: 'Restrict portable storage use on external systems.', responseType: 'maturity' },
  { id: '3.1.22', controlFamily: 'AC', controlId: '3.1.22', question: 'Control CUI posted on publicly accessible systems.', description: 'Manage and control CUI on public-facing systems.', responseType: 'maturity' },

  // Awareness and Training
  { id: '3.2.1', controlFamily: 'AT', controlId: '3.2.1', question: 'Ensure managers are trained on security risks.', description: 'Train managers to understand information security risks.', responseType: 'maturity' },
  { id: '3.2.2', controlFamily: 'AT', controlId: '3.2.2', question: 'Ensure personnel are trained on security risks.', description: 'Train personnel to carry out assigned security responsibilities.', responseType: 'maturity' },
  { id: '3.2.3', controlFamily: 'AT', controlId: '3.2.3', question: 'Provide training to facilitate reporting of incidents.', description: 'Train users to recognize and report security incidents.', responseType: 'maturity' },

  // Audit and Accountability
  { id: '3.3.1', controlFamily: 'AU', controlId: '3.3.1', question: 'Create and retain audit logs.', description: 'Create, protect, and retain audit records per policy.', responseType: 'maturity' },
  { id: '3.3.2', controlFamily: 'AU', controlId: '3.3.2', question: