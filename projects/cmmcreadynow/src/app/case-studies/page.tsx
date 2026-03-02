import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, TrendingUp, Building2, Clock, Users, Phone, ArrowRight, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CMMC Compliance Success Stories | Case Studies | CMMC Ready Now',
  description:
    'Real CMMC compliance success stories from defense contractors. Learn how organizations like Radiant Dental built comprehensive cybersecurity programs and achieved compliance with expert guidance.',
  keywords: [
    'CMMC success stories',
    'CMMC case studies',
    'defense contractor cybersecurity',
    'NIST 800-171 implementation',
    'cybersecurity transformation',
    'ransomware protection',
    'compliance success',
    'defense contractor security',
    'CMMC consultation results',
    'cybersecurity assessment case study',
  ],
  openGraph: {
    title: 'CMMC Compliance Success Stories | Case Studies | CMMC Ready Now',
    description:
      'See how defense contractors transformed their cybersecurity posture and achieved CMMC compliance with expert guidance.',
    type: 'website',
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold">Success Stories</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            CMMC Compliance<br />
            <span className="text-accent">Success Stories</span>
          </h1>

          <p className="text-lg text-gray-300 mb-4">
            Real organizations, real challenges, real results.
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            See how defense contractors transformed their cybersecurity posture from vulnerable to compliant with strategic planning and expert guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://capital-cyber.com/rick"
              className="bg-accent hover:bg-accent-dark text-navy-950 font-bold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Results Like These <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/best-practices"
              className="border border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
            >
              View Best Practices
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-800 mb-6">
            Transforming Cybersecurity for Defense Contractors
          </h2>
          <div className="text-lg text-gray-700 space-y-4 leading-relaxed max-w-3xl mx-auto">
            <p>
              Every organization starts their CMMC journey with unique challenges. Some face budget constraints, others struggle with technical complexity, and many simply do not know where to begin.
            </p>
            <p>
              These case studies show how real companies overcame those obstacles to build comprehensive cybersecurity programs that protect their contracts and their business.
            </p>
            <p className="font-semibold text-navy-800">
              The common thread? Strategic planning, expert guidance, and commitment to doing it right.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study 1: Radiant Dental */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-navy-800 text-white p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-navy-950" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Radiant Dental</h3>
                  <p className="text-gray-300">Healthcare Practice, Bedford PA</p>
                  <p className="text-gray-400 text-sm">Dr. Kyle Dumpert, Practice Owner</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="bg-navy-700/50 rounded-lg px-3 py-1 text-sm">Healthcare</div>
                <div className="bg-navy-700/50 rounded-lg px-3 py-1 text-sm">Small Business</div>
                <div className="bg-navy-700/50 rounded-lg px-3 py-1 text-sm">Pennsylvania</div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-navy-800 mb-2">The Challenge</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Radiant Dental needed a comprehensive cybersecurity assessment to protect patient data and business operations. Initial penetration testing revealed significant vulnerabilities that put the practice at risk for ransomware attacks and data breaches.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 mb-2">The Solution</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    CMMC Ready Now implemented a multi-layered security program including advanced ransomware protection, application whitelisting technology, comprehensive staff training, and annual third-party risk assessments.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 mb-2">The Result</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A comprehensive security program that protects against modern threats while ensuring business continuity. The practice now takes a proactive approach to cybersecurity with ongoing monitoring and regular security updates.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h4 className="text-xl font-bold text-navy-800 mb-6">Implementation Details</h4>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-bold text-navy-800 mb-4">Security Controls Implemented</h5>
                    <div className="space-y-3">
                      {[
                        'Advanced endpoint detection and response',
                        'Application whitelisting and behavioral analysis',
                        'Email security and phishing protection',
                        'Network segmentation and monitoring',
                        'Backup and disaster recovery procedures',
                        'Secure remote access solutions'
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-navy-800 mb-4">Training and Processes</h5>
                    <div className="space-y-3">
                      {[
                        'Comprehensive staff cybersecurity training',
                        'Phishing simulation and awareness programs',
                        'Incident response procedure development',
                        'Annual third-party risk assessments',
                        'Ongoing security awareness campaigns',
                        'Regular security policy updates'
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mt-8">
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">100%</div>
                    <div className="text-gray-600 text-sm">Vulnerability Remediation</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                    <div className="text-gray-600 text-sm">Security Monitoring</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">Zero</div>
                    <div className="text-gray-600 text-sm">Security Incidents</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-navy-800 mb-2">Client Testimonial</h5>
                    <p className="text-gray-700 italic leading-relaxed">
                      "The team provided exactly what we needed - comprehensive protection without disrupting our daily operations. We now have confidence that our practice is protected against the cybersecurity threats targeting healthcare organizations today."
                    </p>
                    <p className="text-navy-800 font-semibold text-sm mt-3">
                      - Dr. Kyle Dumpert, Radiant Dental
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2: Coming Soon */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gray-600 text-white p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-500 rounded-xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Iron Lift Manufacturing</h3>
                  <p className="text-gray-300">Defense Manufacturing, Coming Soon</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-700/50 rounded-lg px-3 py-1 text-sm">Manufacturing</div>
                <div className="bg-gray-700/50 rounded-lg px-3 py-1 text-sm">Defense Contractor</div>
                <div className="bg-gray-700/50 rounded-lg px-3 py-1 text-sm">CMMC Level 2</div>
              </div>
            </div>

            <div className="p-8 text-center">
              <Clock className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Case Study Coming Soon</h4>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                We are currently working with Iron Lift Manufacturing on their comprehensive CMMC Level 2 implementation. This case study will showcase how a mid-size defense manufacturer transformed their cybersecurity posture to meet DoD requirements.
              </p>
              <div className="bg-white border border-gray-200 rounded-xl p-6 inline-block">
                <p className="text-gray-500 text-sm mb-2">Topics will include:</p>
                <div className="grid sm:grid-cols-2 gap-2 text-left">
                  {[
                    'NIST 800-171 gap remediation',
                    'CUI environment scoping',
                    'Industrial control system security',
                    'Supply chain risk management'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Want Results Like These?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Every successful CMMC implementation starts with understanding where you are and building a roadmap to where you need to be.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-navy-700/50 border border-navy-600/30 rounded-xl p-6">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Expert Guidance</h3>
              <p className="text-gray-300 text-sm">Work with cybersecurity professionals who understand defense contractor requirements.</p>
            </div>
            <div className="bg-navy-700/50 border border-navy-600/30 rounded-xl p-6">
              <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Proven Process</h3>
              <p className="text-gray-300 text-sm">Follow a methodology that has helped hundreds of organizations achieve compliance.</p>
            </div>
            <div className="bg-navy-700/50 border border-navy-600/30 rounded-xl p-6">
              <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Measurable Results</h3>
              <p className="text-gray-300 text-sm">Get clear timelines, priorities, and measurable outcomes from your compliance program.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Book a Call with Rick</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Discuss your cybersecurity challenges and learn how we can help you build a compliance program that protects your contracts and your business.
            </p>
            <Link
              href="https://capital-cyber.com/rick"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-navy-950 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Schedule Your Consultation
            </Link>
            <p className="text-gray-500 text-sm mt-4">Free consultation • No obligation • Immediate value</p>
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
            <Link href="/best-practices" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <Shield className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                Best Practices
              </h3>
              <p className="text-gray-600 text-sm">
                Learn the 10 essential practices for CMMC compliance success.
              </p>
            </Link>

            <Link href="/help-center" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <Users className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                Help Center
              </h3>
              <p className="text-gray-600 text-sm">
                Get answers to frequently asked questions about CMMC.
              </p>
            </Link>

            <Link href="/blog" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <TrendingUp className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                Blog
              </h3>
              <p className="text-gray-600 text-sm">
                Read the latest insights on CMMC compliance and cybersecurity.
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