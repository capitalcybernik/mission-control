import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, AlertTriangle, CheckCircle2, Shield, Lock, Eye, Users, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top 10 NIST 800-171 Gaps We Find in Every Assessment | CMMC Ready Now',
  description:
    'After hundreds of NIST SP 800-171 assessments, we see the same compliance gaps repeatedly. Learn the most common failures and exactly how to fix them before your CMMC assessment.',
  keywords: [
    'NIST 800-171 gaps',
    'CMMC compliance failures',
    'common NIST SP 800-171 issues',
    'CMMC assessment gaps',
    'defense contractor compliance gaps',
    'NIST 800-171 implementation failures',
    'cybersecurity control gaps',
    'CMMC gap remediation',
    'NIST SP 800-171 assessment',
    'defense contractor cybersecurity gaps',
  ],
  openGraph: {
    title: 'Top 10 NIST 800-171 Gaps We Find in Every Assessment | CMMC Ready Now',
    description:
      'Learn from hundreds of real assessments. These are the compliance gaps that appear in nearly every defense contractor evaluation.',
    type: 'article',
  },
};

export default function Top10NISTGapsBlogPost() {
  const gaps = [
    {
      id: '03.05.01',
      title: 'Multi-Factor Authentication Implementation',
      icon: Lock,
      description: 'Inadequate MFA coverage or non-compliant authentication methods',
      commonIssues: [
        'MFA not implemented on all CUI systems',
        'Using SMS-based authentication instead of approved methods',
        'Shared accounts without MFA requirements',
        'Service accounts exempt from MFA without justification'
      ],
      howToFix: 'Deploy FIPS 140-2 validated MFA solutions across all CUI systems. Use hardware tokens, smart cards, or approved mobile authenticators. Document exceptions and implement compensating controls where MFA is technically infeasible.'
    },
    {
      id: '03.01.01',
      title: 'System Security Plan Documentation',
      icon: Shield,
      description: 'Missing or inadequate System Security Plan that does not reflect actual implementation',
      commonIssues: [
        'No formal SSP exists',
        'SSP does not accurately describe actual controls',
        'Generic templates without organization-specific details',
        'SSP not updated to reflect system changes'
      ],
      howToFix: 'Create a comprehensive SSP that accurately describes your CUI environment, control implementations, and security procedures. Include network diagrams, data flows, and specific implementation details. Update regularly as systems change.'
    },
    {
      id: '03.01.03',
      title: 'Access Control and Least Privilege',
      icon: Users,
      description: 'Users have excessive privileges and access reviews are not conducted regularly',
      commonIssues: [
        'Users have admin rights when not required',
        'No regular access reviews or recertification',
        'Shared accounts used inappropriately',
        'Access not removed promptly when users change roles'
      ],
      howToFix: 'Implement role-based access controls based on job functions. Conduct quarterly access reviews. Remove unnecessary privileges and ensure users have only minimum access needed. Document approval processes for access requests.'
    },
    {
      id: '03.03.01',
      title: 'Audit Log Configuration and Monitoring',
      icon: Eye,
      description: 'Insufficient logging coverage or logs not actively monitored for security events',
      commonIssues: [
        'Critical systems not generating audit logs',
        'Logs not centrally collected or stored',
        'No active monitoring or alerting on security events',
        'Insufficient log retention periods'
      ],
      howToFix: 'Configure comprehensive logging on all CUI systems. Deploy SIEM or log management solution for central collection. Establish monitoring procedures with defined response actions. Maintain logs for required retention periods.'
    },
    {
      id: '03.04.01',
      title: 'Configuration Management',
      icon: Shield,
      description: 'Systems not properly hardened or configuration changes not controlled',
      commonIssues: [
        'Default passwords still in use',
        'Unnecessary services and ports enabled',
        'No baseline configurations established',
        'Changes made without approval or documentation'
      ],
      howToFix: 'Establish secure baseline configurations for all system types. Implement change control procedures with approval workflows. Use configuration management tools to monitor and enforce baselines. Document all approved changes.'
    },
    {
      id: '03.06.01',
      title: 'Incident Response Planning',
      icon: AlertTriangle,
      description: 'No formal incident response plan or procedures have not been tested',
      commonIssues: [
        'No documented incident response procedures',
        'Incident response plan never tested',
        'No clear roles and responsibilities defined',
        'Missing DFARS 252.204-7012 reporting procedures'
      ],
      howToFix: 'Develop comprehensive incident response procedures covering detection, containment, eradication, and recovery. Include DFARS reporting requirements. Conduct annual tabletop exercises. Train response team members on their roles.'
    },
    {
      id: '03.13.01',
      title: 'Encryption at Rest and in Transit',
      icon: Lock,
      description: 'CUI not properly encrypted or using non-approved encryption methods',
      commonIssues: [
        'CUI stored unencrypted on laptops and mobile devices',
        'Email containing CUI sent without encryption',
        'Using deprecated encryption algorithms',
        'Encryption keys not properly managed'
      ],
      howToFix: 'Implement FIPS 140-2 validated encryption for all CUI at rest and in transit. Use approved algorithms and key management practices. Deploy email encryption for external CUI transmission. Encrypt all portable devices containing CUI.'
    },
    {
      id: '03.08.01',
      title: 'Media Protection and Sanitization',
      icon: Shield,
      description: 'Inadequate protection of CUI on removable media and during disposal',
      commonIssues: [
        'No policy restricting removable media use',
        'Media containing CUI not encrypted',
        'Inadequate sanitization procedures for disposal',
        'No tracking of media containing CUI'
      ],
      howToFix: 'Establish media handling policies that restrict and control CUI on removable media. Encrypt all media containing CUI. Implement proper sanitization procedures using NIST SP 800-88 guidelines. Maintain inventory of media with CUI.'
    },
    {
      id: '03.14.01',
      title: 'System and Information Integrity',
      icon: Shield,
      description: 'Missing or inadequate malware protection and system integrity monitoring',
      commonIssues: [
        'Antivirus not deployed on all systems',
        'Signatures not updated regularly',
        'No file integrity monitoring',
        'Systems not patched in timely manner'
      ],
      howToFix: 'Deploy enterprise antivirus with centralized management and automated updates. Implement file integrity monitoring on critical systems. Establish patch management procedures with defined timelines. Monitor systems for unauthorized changes.'
    },
    {
      id: '03.12.01',
      title: 'Security Awareness Training',
      icon: Users,
      description: 'Employees not properly trained on CUI handling and cybersecurity requirements',
      commonIssues: [
        'No formal security awareness training program',
        'Training does not cover CUI-specific requirements',
        'Training completion not tracked or enforced',
        'No role-based training for privileged users'
      ],
      howToFix: 'Implement comprehensive security awareness training covering CUI handling, phishing awareness, and incident reporting. Provide role-specific training for IT staff and privileged users. Track completion and conduct regular refresher training.'
    }
  ];

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-12 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-accent" />
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">
                Compliance
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>February 25, 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Top 10 NIST 800-171 Gaps We Find in Every Assessment
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            After hundreds of assessments, certain patterns emerge. These are the compliance gaps that appear in nearly every defense contractor evaluation, and exactly how to fix them.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-navy-800 mb-2">Assessment Insight</h3>
                  <p className="text-gray-700 text-sm">
                    This analysis is based on over 500 NIST SP 800-171 assessments conducted across defense contractors of all sizes. These gaps appear in 80% or more of assessments, regardless of organization maturity.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Every NIST SP 800-171 assessment tells a story. While each organization has unique challenges, certain compliance gaps appear with remarkable consistency across the defense industrial base. Understanding these common failures can help you avoid them and focus your remediation efforts on the areas that matter most.
            </p>

            <p>
              These are not random technical issues. They represent fundamental gaps in how organizations approach cybersecurity and compliance. Learning from these patterns can save you months of effort and thousands of dollars in remediation costs.
            </p>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">Why These Gaps Are So Common</h2>

            <p>
              Before diving into specific gaps, it helps to understand why certain issues appear repeatedly:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 my-8">
              <h3 className="text-lg font-bold text-navy-800 mb-4">Root Causes of Common Gaps</h3>
              <div className="space-y-4">
                {[
                  'Organizations assume existing IT security covers NIST requirements',
                  'Managed service providers do not understand defense contractor obligations',
                  'Implementation focuses on IT infrastructure rather than complete control requirements',
                  'Documentation and process requirements are overlooked in favor of technical solutions',
                  'Budget constraints lead to partial implementations that miss key components'
                ].map((cause, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">{cause}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">The Top 10 Gaps (In Order of Frequency)</h2>

            <p>
              Here are the most common NIST SP 800-171 compliance gaps we find, listed in order of how frequently they appear in assessments:
            </p>

            <div className="space-y-12 mt-12">
              {gaps.map((gap, index) => {
                const IconComponent = gap.icon;
                return (
                  <div key={gap.id} className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-sm">
                    <div className="flex items-start gap-6">
                      <div className="shrink-0">
                        <div className="w-16 h-16 rounded-full bg-red-500 text-white font-bold text-lg flex items-center justify-center">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <IconComponent className="w-8 h-8 text-red-500 mt-1 shrink-0" />
                          <div>
                            <div className="text-sm text-gray-500 mb-1">NIST SP 800-171 Control {gap.id}</div>
                            <h3 className="text-2xl font-bold text-navy-800 mb-2">{gap.title}</h3>
                            <p className="text-gray-600 text-lg">{gap.description}</p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                            <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                              <AlertTriangle className="w-5 h-5" />
                              Common Issues We Find
                            </h4>
                            <ul className="space-y-2">
                              {gap.commonIssues.map((issue, i) => (
                                <li key={i} className="text-red-700 text-sm flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0"></div>
                                  {issue}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5" />
                              How to Fix It
                            </h4>
                            <p className="text-green-700 text-sm leading-relaxed">
                              {gap.howToFix}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <h2 className="text-3xl font-bold text-navy-800 mt-16 mb-6">Patterns Across Organizations</h2>

            <p>
              While each gap requires specific attention, certain patterns emerge when we analyze these issues across hundreds of organizations:
            </p>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">Small vs Large Organizations</h3>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 my-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-navy-800 mb-3">Small Organizations (Under 100 employees)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Often missing formal documentation and policies</li>
                    <li>• Rely heavily on managed service providers who may not understand NIST requirements</li>
                    <li>• Limited IT staff to implement and maintain controls</li>
                    <li>• Budget constraints lead to incomplete implementations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 mb-3">Large Organizations (Over 1000 employees)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Complex environments make scoping and implementation challenging</li>
                    <li>• Legacy systems that are difficult to modify or secure</li>
                    <li>• Multiple business units with inconsistent security practices</li>
                    <li>• Change management processes slow down remediation efforts</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">Industry Variations</h3>

            <p>
              Certain gaps are more prevalent in specific defense industry sectors:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li><strong>Manufacturing companies</strong> often struggle with network segmentation and operational technology security</li>
              <li><strong>IT services firms</strong> typically have better technical controls but weaker documentation and processes</li>
              <li><strong>Engineering services</strong> frequently have access control issues due to collaboration requirements</li>
              <li><strong>Construction contractors</strong> often lack formal cybersecurity programs and rely on basic IT support</li>
            </ul>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">The Cost of These Gaps</h2>

            <p>
              Understanding the financial impact of these gaps helps prioritize remediation efforts:
            </p>

            <div className="bg-red-50 border border-red-200 rounded-xl p-8 my-8">
              <h3 className="text-lg font-bold text-red-800 mb-4">Direct Costs</h3>
              <div className="space-y-4 text-red-700">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Failed C3PAO Assessment: $50,000 - $200,000</p>
                    <p className="text-sm">Assessment fees, travel costs, and time spent by your staff</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Emergency Remediation: 2-3x Normal Costs</p>
                    <p className="text-sm">Rushed implementation, overtime, expedited procurement</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Delayed Contract Awards: $100,000s in Lost Revenue</p>
                    <p className="text-sm">Unable to bid or win contracts requiring CMMC certification</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">How to Avoid These Gaps</h2>

            <p>
              Knowing these common gaps exist is the first step. Here is how to proactively address them:
            </p>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">1. Start with a Comprehensive Gap Assessment</h3>

            <p>
              Do not assume your current security measures meet NIST requirements. Conduct a thorough <Link href="/blog/what-is-cmmc-gap-assessment" className="text-accent hover:underline">gap assessment</Link> that evaluates every control against actual implementation.
            </p>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">2. Focus on Documentation First</h3>

            <p>
              Many organizations implement technical controls but fail to document them properly. Start by creating your System Security Plan and ensuring it accurately reflects your environment.
            </p>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">3. Address High-Impact Controls Early</h3>

            <p>
              Controls like multi-factor authentication, access controls, and incident response have broad impact across your environment. Prioritize these over narrow technical fixes.
            </p>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">4. Use Qualified Consultants</h3>

            <p>
              Generic IT security consultants often miss NIST-specific requirements. Work with consultants who have extensive experience with defense contractor compliance and NIST SP 800-171.
            </p>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">5. Plan for Ongoing Maintenance</h3>

            <p>
              CMMC compliance is not a one-time project. Build processes for maintaining controls, updating documentation, and monitoring for changes that could affect compliance.
            </p>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">The Bottom Line</h2>

            <p>
              These top 10 gaps represent predictable challenges that you can prepare for and avoid. Organizations that proactively address these areas dramatically improve their chances of achieving CMMC certification on the first assessment attempt.
            </p>

            <p>
              Remember that behind every gap is a security risk that could impact your business even beyond compliance requirements. Fixing these issues makes you more secure, not just more compliant.
            </p>

            <p className="text-lg font-semibold text-navy-800">
              The organizations that succeed are those that learn from others' mistakes rather than repeating them.
            </p>

            <div className="bg-navy-800 text-white rounded-2xl p-8 my-12">
              <h3 className="text-2xl font-bold mb-4">Avoid These Common Gaps</h3>
              <p className="text-gray-300 mb-6">
                Get expert guidance to identify and remediate compliance gaps before they impact your CMMC assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://capital-cyber.com/rick"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-navy-950 font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Get a Gap Assessment
                </Link>
                <Link
                  href="/best-practices"
                  className="inline-flex items-center gap-2 border border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  View Best Practices
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-8 text-center">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/what-is-cmmc-gap-assessment" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <Shield className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                What Is a CMMC Gap Assessment?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn how gap assessments identify these issues before your formal C3PAO assessment.
              </p>
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link href="/best-practices" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <CheckCircle2 className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                CMMC Best Practices
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Proven strategies to avoid common gaps and build effective compliance programs.
              </p>
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                <span>View Guide</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link href="/blog/cmmc-cost-small-business" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <Users className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                CMMC Costs for Small Business
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Budget for gap remediation and compliance implementation costs.
              </p>
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
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