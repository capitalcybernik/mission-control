import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Lock, Key, Eye, FileText, AlertTriangle, Users, Database, Network, Book, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: '10 CMMC Best Practices for Defense Contractors | CMMC Ready Now',
  description:
    'Master the essential CMMC compliance best practices every defense contractor needs. From proper scoping to continuous monitoring, get the practical guidance to ensure your CMMC certification success.',
  keywords: [
    'CMMC best practices',
    'CMMC compliance guide',
    'NIST 800-171 implementation',
    'defense contractor cybersecurity',
    'CMMC scoping best practices',
    'CUI protection strategies',
    'CMMC access controls',
    'cybersecurity policy templates',
    'CMMC incident response',
    'defense contractor training',
  ],
  openGraph: {
    title: '10 CMMC Best Practices for Defense Contractors | CMMC Ready Now',
    description:
      'Proven strategies from successful CMMC implementations. Learn the essential practices that separate certified contractors from those who fail assessments.',
    type: 'website',
  },
};

export default function BestPracticesPage() {
  const bestPractices = [
    {
      icon: Shield,
      title: 'Proper CUI Scoping',
      description: 'Define clear boundaries around your Controlled Unclassified Information environment.',
      details: 'Scoping errors cause more CMMC assessment failures than technical gaps. Start by identifying every system, network segment, and location where CUI is stored, processed, or transmitted. Create network diagrams that clearly show CUI boundaries. Document data flows to understand how information moves between systems. Remember that any system connected to your CUI environment becomes part of your CMMC scope unless properly segmented. Work with network engineers to implement secure enclaves that isolate CUI systems from your general business network. This foundational step determines the size and complexity of your entire compliance program.'
    },
    {
      icon: FileText,
      title: 'Complete CUI Identification',
      description: 'Establish systematic processes to identify and mark all Controlled Unclassified Information.',
      details: 'Create CUI identification procedures that work for your business processes. Train employees to recognize CUI markings like "CUI//SP-PROCURE" or legacy markings like "For Official Use Only." Implement automated tools where possible to scan for CUI indicators in emails and documents. Establish clear marking standards for CUI you create or modify. Document handling procedures for unmarked information that may contain CUI. Regular audits of file shares, email systems, and databases help identify unmarked CUI that employees may not recognize. The goal is ensuring every piece of CUI is properly identified, marked, and handled according to your security procedures.'
    },
    {
      icon: Book,
      title: 'System Security Plan Documentation',
      description: 'Develop a comprehensive System Security Plan that accurately reflects your implementation.',
      details: 'Your System Security Plan is the roadmap for your CMMC assessment. Document every control implementation with specific details about how your organization meets each requirement. Include network diagrams, data flow charts, and system inventories. Describe your security policies, procedures, and technical controls in enough detail that an assessor can understand your approach. Keep the SSP current by updating it whenever you make changes to systems or processes. Include references to supporting documentation like incident response plans and security awareness training materials. The SSP should tell the complete story of how you protect CUI in your environment.'
    },
    {
      icon: Key,
      title: 'Strong Access Controls',
      description: 'Implement role-based access controls with proper authentication and authorization.',
      details: 'Design access controls around the principle of least privilege. Create role-based permissions that give users only the minimum access needed for their job functions. Implement regular access reviews to remove unnecessary permissions. Use centralized identity management systems to control user accounts across all CUI systems. Document approval processes for granting, modifying, and removing access. Establish procedures for immediate access removal when employees leave or change roles. Consider implementing privileged access management solutions for administrative accounts. Audit access logs regularly to identify unusual access patterns that might indicate compromised accounts or insider threats.'
    },
    {
      icon: Lock,
      title: 'Multi-Factor Authentication',
      description: 'Deploy MFA across all systems that store, process, or transmit CUI.',
      details: 'Multi-factor authentication protects against compromised passwords and is required for CMMC Level 2. Implement MFA for all user accounts accessing CUI systems, including employees, contractors, and service accounts where technically feasible. Choose MFA solutions that meet federal standards like NIST SP 800-63B. Consider hardware tokens, smart cards, or mobile authenticator apps. Plan for backup authentication methods in case primary MFA devices fail. Train users on proper MFA procedures and troubleshooting common issues. Document MFA exceptions and compensating controls for systems that cannot support standard MFA. Regularly test MFA systems to ensure they work correctly and users can successfully authenticate.'
    },
    {
      icon: Database,
      title: 'Encryption Implementation',
      description: 'Protect CUI with encryption both in transit and at rest using approved algorithms.',
      details: 'Implement FIPS 140-2 validated encryption for all CUI at rest and in transit. Use TLS 1.2 or higher for data transmission. Encrypt storage devices including laptops, mobile devices, and removable media. Establish key management procedures that protect encryption keys from unauthorized access. Document approved encryption standards and prohibited algorithms. Consider using full disk encryption on all devices that may process CUI. Implement email encryption for CUI transmitted outside your organization. Test encryption implementations to ensure they work correctly and do not interfere with business processes. Train IT staff on proper encryption deployment and maintenance.'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response Planning',
      description: 'Develop and test comprehensive incident response procedures for cybersecurity events.',
      details: 'Create incident response procedures that cover detection, containment, eradication, and recovery. Establish clear roles and responsibilities for incident response team members. Document communication procedures for internal stakeholders and external parties like DFARS reporting requirements. Develop playbooks for common incident types like malware infections, data breaches, and insider threats. Conduct tabletop exercises to test response procedures and identify gaps. Establish relationships with external resources like forensic investigators and legal counsel. Implement logging and monitoring tools to support incident detection and investigation. Document lessons learned from incidents and exercises to improve response procedures over time.'
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: 'Establish ongoing monitoring of security controls and system performance.',
      details: 'Implement security monitoring tools that provide visibility into your CUI environment. Deploy security information and event management (SIEM) systems to aggregate and analyze security logs. Establish baseline configurations for all systems and monitor for unauthorized changes. Conduct regular vulnerability scans and penetration testing. Monitor network traffic for unusual patterns that might indicate security incidents. Implement file integrity monitoring for critical system files and configurations. Establish metrics to measure security control effectiveness. Create dashboards that provide realtime visibility into security posture for management. Document monitoring procedures and escalation criteria for security events.'
    },
    {
      icon: Users,
      title: 'Employee Training Programs',
      description: 'Provide regular cybersecurity awareness training tailored to CMMC requirements.',
      details: 'Develop security awareness training programs that cover CMMC-specific topics like CUI handling, password security, and incident reporting. Provide role-specific training for users who regularly work with CUI. Conduct phishing simulations to test employee awareness and identify training gaps. Document training completion and track compliance across your organization. Update training content regularly to address new threats and changing requirements. Include CMMC basics in new employee orientation programs. Provide specialized training for IT staff on security control implementation and maintenance. Test training effectiveness through quizzes and practical exercises. Establish consequences for employees who consistently fail to follow security procedures.'
    },
    {
      icon: Network,
      title: 'Vendor Management',
      description: 'Establish security requirements and oversight for all third-party vendors and suppliers.',
      details: 'Develop vendor risk assessment procedures that evaluate cybersecurity capabilities before contract award. Include cybersecurity requirements in all vendor contracts, especially those involving CUI access. Establish ongoing monitoring of vendor security posture through certifications, audits, and assessments. Implement procedures for managing vendor access to your systems and data. Document approved vendor lists and security requirements for different types of services. Establish incident response procedures that include vendor-related security events. Consider supply chain security risks when selecting vendors and suppliers. Review vendor security annually or when contracts are renewed. Maintain an inventory of all vendors with access to your CUI environment.'
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 mb-6">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold">Proven Strategies</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            10 CMMC Best Practices<br />
            <span className="text-accent">for Defense Contractors</span>
          </h1>

          <p className="text-lg text-gray-300 mb-4">
            Master the essential practices that separate successful CMMC implementations from failed assessments.
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            These proven strategies come from hundreds of real-world implementations. Follow them to build a compliance program that protects your contracts and your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://capital-cyber.com/rick"
              className="bg-accent hover:bg-accent-dark text-navy-950 font-bold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Expert Guidance <Phone className="w-5 h-5" />
            </Link>
            <Link
              href="/help-center"
              className="border border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-lg text-gray-700 space-y-4 leading-relaxed mb-12">
            <p>
              CMMC compliance is not about checking boxes. It is about building cybersecurity practices that actually protect your business while meeting Department of Defense requirements.
            </p>
            <p>
              These 10 best practices represent the foundation of every successful CMMC implementation. They are drawn from real assessments, successful certifications, and lessons learned from organizations that got it right the first time.
            </p>
            <p className="font-semibold text-navy-800">
              Follow these practices to build a compliance program that survives C3PAO assessments and protects your contracts for years to come.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-navy-800 mb-3">What You Will Learn</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'How to properly scope your CUI environment',
                'Essential documentation and policy requirements', 
                'Technical controls that actually work',
                'Training programs that change behavior',
                'Monitoring strategies that catch threats',
                'Vendor management best practices'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-4 text-center">
            The Essential CMMC Best Practices
          </h2>
          <p className="text-gray-600 text-lg text-center mb-16 max-w-3xl mx-auto">
            These practices form the backbone of effective CMMC compliance programs. Master them to build security that works.
          </p>

          <div className="space-y-12">
            {bestPractices.map((practice, index) => (
              <div key={practice.title} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-navy-800 text-accent font-bold text-lg flex items-center justify-center">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <practice.icon className="w-8 h-8 text-navy-700 mt-1 shrink-0" />
                      <div>
                        <h3 className="text-2xl font-bold text-navy-800 mb-2">{practice.title}</h3>
                        <p className="text-gray-600 text-lg font-medium">{practice.description}</p>
                      </div>
                    </div>
                    <div className="text-gray-700 leading-relaxed">
                      {practice.details}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Tips */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-8 text-center">
            Making These Practices Work in Your Organization
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-navy-800 mb-4">Start with the Fundamentals</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>Begin with proper CUI scoping and identification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>Document everything as you implement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>Focus on policies before technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>Test controls before your assessment</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-navy-800 mb-4">Common Implementation Mistakes</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <span>Over-scoping your CUI environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <span>Treating this as an IT-only project</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <span>Waiting until the last minute to start</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <span>Assuming existing controls are sufficient</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-navy-800 text-white rounded-xl p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help Implementing These Practices?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              These best practices work, but implementation can be complex. Get expert guidance to build a compliance program that protects your contracts.
            </p>
            <Link
              href="https://capital-cyber.com/rick"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-navy-950 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Book a Call with Rick
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-8 text-center">
            Continue Your CMMC Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/case-studies" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <Shield className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                Case Studies
              </h3>
              <p className="text-gray-600 text-sm">
                See how real organizations implemented these practices successfully.
              </p>
            </Link>

            <Link href="/help-center" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <Book className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                Help Center
              </h3>
              <p className="text-gray-600 text-sm">
                Get answers to frequently asked questions about CMMC compliance.
              </p>
            </Link>

            <Link href="/cmmc-guide" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <FileText className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                Free Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Download the complete CMMC 2.0 Readiness Guide.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">
            CMMC Ready Now is proudly powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=locationpage" className="font-bold text-navy-800 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Capital Cyber</a>. A cybersecurity firm helping defense contractors navigate NIST 800-171 compliance and prepare for CMMC certification.
          </p>
        </div>
      </section>
    </>
  );
}