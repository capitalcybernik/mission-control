'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Shield, Clock, DollarSign, FileText, Users, AlertTriangle, Phone, Search, Book } from 'lucide-react';

const metadata: Metadata = {
  title: 'CMMC Help Center | Frequently Asked Questions | CMMC Ready Now',
  description:
    'Get answers to the most common CMMC questions. Everything defense contractors need to know about CMMC 2.0, certification requirements, timelines, costs, and compliance obligations.',
  keywords: [
    'CMMC FAQ',
    'CMMC questions',
    'CMMC 2.0 help',
    'CMMC certification questions',
    'NIST 800-171 FAQ',
    'defense contractor compliance',
    'CMMC Level 2 requirements',
    'C3PAO assessment',
    'CUI vs FCI',
    'CMMC timeline',
    'CMMC cost',
    'False Claims Act CMMC',
  ],
  openGraph: {
    title: 'CMMC Help Center | Frequently Asked Questions | CMMC Ready Now',
    description:
      'Find answers to your CMMC compliance questions. From basics to advanced topics, get the information defense contractors need.',
    type: 'website',
  },
};

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: any;
}

const faqs: FAQItem[] = [
  {
    id: 'what-is-cmmc-2',
    question: 'What is CMMC 2.0?',
    answer: 'CMMC 2.0 is the Cybersecurity Maturity Model Certification framework that establishes cybersecurity requirements for defense contractors. It replaces the original five-level CMMC with a streamlined three-level approach: Level 1 (Foundational), Level 2 (Advanced), and Level 3 (Expert). Most defense contractors will need Level 2 certification, which requires implementing all 110 NIST SP 800-171 security controls and undergoing third-party assessment by a certified C3PAO (CMMC Third-Party Assessment Organization).',
    category: 'Basics',
    icon: Shield
  },
  {
    id: 'what-level-do-i-need',
    question: 'What CMMC level do I need?',
    answer: 'Your required CMMC level depends on the type of federal information you handle. Level 1 (self-assessment) applies to contractors who only process Federal Contract Information (FCI). Level 2 (third-party assessment) is required for contractors who handle Controlled Unclassified Information (CUI). Level 3 (government-led assessment) applies to contractors protecting high-value assets. Most defense contractors working with technical data, specifications, or sensitive program information will need Level 2 certification.',
    category: 'Requirements',
    icon: FileText
  },
  {
    id: 'cmmc-compliance-cost',
    question: 'How much does CMMC compliance cost?',
    answer: 'CMMC compliance costs vary significantly based on your current security posture and organization size. Typical costs include: gap assessment ($15,000-50,000), remediation implementation ($50,000-500,000), C3PAO assessment fees ($25,000-150,000), and ongoing maintenance ($25,000-100,000 annually). Small contractors might spend $100,000-300,000 total, while larger organizations could invest $500,000-2,000,000. The key is starting early and focusing on the most critical gaps first to spread costs over time.',
    category: 'Costs',
    icon: DollarSign
  },
  {
    id: 'how-long-does-it-take',
    question: 'How long does CMMC implementation take?',
    answer: 'CMMC implementation typically takes 12-24 months depending on your starting point and organizational complexity. The process includes: gap assessment (4-8 weeks), remediation planning (2-4 weeks), implementation (6-18 months), and C3PAO assessment (2-6 weeks). Organizations with existing cybersecurity programs may move faster, while those starting from scratch need more time. The key is beginning early since C3PAO assessor availability is limited and will become more constrained as enforcement accelerates.',
    category: 'Timeline',
    icon: Clock
  },
  {
    id: 'cui-vs-fci',
    question: 'What is CUI vs FCI?',
    answer: 'Federal Contract Information (FCI) is information provided by or generated for the government under a contract, but not intended for public release. This includes contract terms, pricing, and performance data. Controlled Unclassified Information (CUI) is more sensitive information that requires safeguarding, including technical data, specifications, designs, and other information marked with CUI designations. CUI requires CMMC Level 2 certification, while FCI only requires Level 1. The distinction determines your compliance obligations.',
    category: 'Basics',
    icon: FileText
  },
  {
    id: 'subcontractors-need-cmmc',
    question: 'Do subcontractors need CMMC certification?',
    answer: 'Yes, subcontractors who handle CUI must meet the same CMMC requirements as prime contractors. The DFARS 252.204-7021 clause flows down to all subcontractors at any tier when CUI is involved. Subcontractors must achieve the CMMC level specified in their subcontract. Prime contractors are responsible for ensuring their subcontractors meet CMMC requirements and may need to verify certification status before award. This creates supply chain implications that affect the entire defense industrial base.',
    category: 'Requirements',
    icon: Users
  },
  {
    id: 'what-is-c3pao',
    question: 'What is a C3PAO?',
    answer: 'A C3PAO (CMMC Third-Party Assessment Organization) is an independent organization authorized to conduct CMMC Level 2 assessments. C3PAOs must be accredited by the CMMC Accreditation Body and employ certified CMMC assessors. They conduct on-site and remote assessments to verify that organizations have properly implemented required security controls. C3PAOs issue CMMC certificates that are valid for three years. The number of C3PAOs is intentionally limited to ensure quality, which may create scheduling challenges as demand increases.',
    category: 'Assessment',
    icon: Shield
  },
  {
    id: 'what-is-sprs',
    question: 'What is SPRS?',
    answer: 'SPRS (Supplier Performance Risk System) is the DoD database where contractors must report their NIST SP 800-171 assessment scores. Contractors submit self-assessments scoring their implementation of each security control. These scores affect past performance evaluations and source selection decisions. Under CMMC, contractors will eventually report their CMMC certification status in SPRS instead of self-assessment scores. Currently, contractors must update SPRS annually or when their security posture materially changes.',
    category: 'Requirements',
    icon: FileText
  },
  {
    id: 'cmmc-phase-2-start',
    question: 'When does CMMC Phase 2 start?',
    answer: 'CMMC Phase 2 (full enforcement) is expected to begin in 2025-2026, though exact timing depends on rulemaking completion. The DoD is currently conducting a phased rollout: Phase 1 involves limited pilot assessments, and Phase 2 will include full enforcement with CMMC requirements in all relevant solicitations. The DFARS 252.204-7021 clause requiring CMMC certification is already appearing in some contracts, signaling that enforcement is accelerating. Contractors should not wait for full enforcement to begin their compliance efforts.',
    category: 'Timeline',
    icon: Clock
  },
  {
    id: 'can-i-self-assess',
    question: 'Can I self assess for CMMC?',
    answer: 'Self-assessment is only permitted for CMMC Level 1, which applies to contractors handling only Federal Contract Information (FCI). CMMC Level 2 and Level 3 require third-party assessment by certified organizations. However, conducting internal self-assessments is a critical first step for Level 2 preparation. These internal assessments help identify gaps and prepare for the formal C3PAO assessment. Many organizations use NIST SP 800-171 assessment procedures to evaluate their readiness before engaging a C3PAO.',
    category: 'Assessment',
    icon: Search
  },
  {
    id: 'what-happens-if-i-fail',
    question: 'What happens if I fail my CMMC assessment?',
    answer: 'If you fail your CMMC assessment, you cannot receive the CMMC certificate required for contract award or performance. You must remediate the identified deficiencies and schedule a new assessment. Failed assessments may impact your ability to compete for new contracts and could affect existing contract performance if CMMC certification becomes required during the contract period. The costs include remediation efforts and additional C3PAO assessment fees. This is why thorough preparation and gap remediation before the formal assessment are critical.',
    category: 'Assessment',
    icon: AlertTriangle
  },
  {
    id: 'what-is-poam',
    question: 'What is a POA&M?',
    answer: 'A POA&M (Plan of Action & Milestones) is a document that identifies security control deficiencies and establishes a plan for correcting them. For CMMC, POA&Ms may be acceptable for minor deficiencies that do not represent significant security risks. However, POA&Ms cannot be used for all control failures, and some deficiencies must be fully remediated before certification. The C3PAO assessor determines whether POA&Ms are acceptable based on the nature and severity of the deficiency. POA&Ms must include specific timelines and resources for remediation.',
    category: 'Assessment',
    icon: FileText
  },
  {
    id: 'do-i-need-ssp',
    question: 'Do I need a System Security Plan?',
    answer: 'Yes, a System Security Plan (SSP) is required for CMMC Level 2 certification. The SSP documents how your organization implements each of the 110 NIST SP 800-171 security controls. It must include system boundaries, data flows, control implementations, and supporting documentation. The SSP serves as the primary reference document for C3PAO assessors to understand your security posture. A well-written SSP that accurately reflects your implementation significantly improves assessment efficiency and reduces the likelihood of findings.',
    category: 'Requirements',
    icon: Book
  },
  {
    id: 'how-often-recertify',
    question: 'How often do I need to recertify?',
    answer: 'CMMC certificates are valid for three years. Organizations must undergo reassessment by a C3PAO before their certificate expires to maintain their certification status. During the three-year period, organizations must maintain their security controls and may be subject to surveillance assessments or government oversight. Material changes to the system or security posture may trigger the need for updated assessment. Organizations should plan for recertification costs and scheduling well before their certificate expires.',
    category: 'Timeline',
    icon: Clock
  },
  {
    id: 'false-claims-act-risk',
    question: 'What is the False Claims Act risk with CMMC?',
    answer: 'The False Claims Act imposes severe penalties for knowingly submitting false claims to the government. If you certify CMMC compliance when you are not actually compliant, you could face False Claims Act liability with penalties of $5,500-11,000 per claim plus treble damages. This risk applies to both self-certification for Level 1 and maintaining compliance after Level 2 certification. Organizations must ensure they maintain compliance throughout the contract period, not just at the time of initial certification. Proper documentation and ongoing monitoring are essential to defend against False Claims Act allegations.',
    category: 'Legal',
    icon: AlertTriangle
  }
];

const categories = ['All', 'Basics', 'Requirements', 'Assessment', 'Timeline', 'Costs', 'Legal'];

export default function HelpCenterPage() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

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
            <HelpCircle className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold">Get Answers</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            CMMC Help Center<br />
            <span className="text-accent">Frequently Asked Questions</span>
          </h1>

          <p className="text-lg text-gray-300 mb-4">
            Get instant answers to the most common CMMC compliance questions.
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            From basic concepts to complex implementation details, find the information defense contractors need to navigate CMMC requirements successfully.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://capital-cyber.com/rick"
              className="bg-accent hover:bg-accent-dark text-navy-950 font-bold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Personal Help <Phone className="w-5 h-5" />
            </Link>
            <Link
              href="/cmmc-guide"
              className="border border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
            >
              Download Free Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-accent text-navy-950'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">
              {searchTerm || selectedCategory !== 'All' 
                ? `${filteredFAQs.length} Question${filteredFAQs.length !== 1 ? 's' : ''} Found`
                : 'Frequently Asked Questions'
              }
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {searchTerm || selectedCategory !== 'All'
                ? 'Here are the questions that match your search.'
                : 'Find answers to the most common questions about CMMC compliance, requirements, and implementation.'
              }
            </p>
          </div>

          <div className="space-y-4">
            {filteredFAQs.map((faq) => {
              const isOpen = openFAQ === faq.id;
              const IconComponent = faq.icon;

              return (
                <div key={faq.id} className="bg-white border border-gray-200 rounded-xl shadow-sm">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-navy-800">{faq.question}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="pl-14 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No questions found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or category filter, or contact us directly for help.
              </p>
              <Link
                href="https://capital-cyber.com/rick"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-navy-950 font-bold px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                Get Personal Help
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Our CMMC experts are here to help. Get personalized answers to your specific compliance challenges.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-navy-700/50 border border-navy-600/30 rounded-xl p-6">
              <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Expert Consultation</h3>
              <p className="text-gray-300 text-sm">Discuss your specific situation with CMMC professionals.</p>
            </div>
            <div className="bg-navy-700/50 border border-navy-600/30 rounded-xl p-6">
              <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Gap Assessment</h3>
              <p className="text-gray-300 text-sm">Identify your compliance gaps and remediation priorities.</p>
            </div>
            <div className="bg-navy-700/50 border border-navy-600/30 rounded-xl p-6">
              <FileText className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Implementation Plan</h3>
              <p className="text-gray-300 text-sm">Get a roadmap tailored to your organization and timeline.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Book a Call with Rick</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get immediate answers to your CMMC questions. No sales pressure, just practical guidance from cybersecurity professionals who understand defense contractor requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://capital-cyber.com/rick"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-navy-950 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Schedule Consultation
              </Link>
              <Link
                href="mailto:info@cmmcreadynow.com"
                className="inline-flex items-center gap-2 border border-gray-300 hover:border-accent text-gray-700 hover:text-accent font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                Send Us an Email
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Free consultation • No obligation • Immediate value
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-8 text-center">
            Additional Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/cmmc-guide" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <Book className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                Free CMMC Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Download the complete CMMC 2.0 Readiness Guide with checklists and roadmaps.
              </p>
            </Link>

            <Link href="/best-practices" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <Shield className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                Best Practices
              </h3>
              <p className="text-gray-600 text-sm">
                Learn the 10 essential practices for successful CMMC implementation.
              </p>
            </Link>

            <Link href="/blog" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <FileText className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                Blog
              </h3>
              <p className="text-gray-600 text-sm">
                Read the latest insights on CMMC compliance and cybersecurity trends.
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