import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Shield, CheckCircle2, BookOpen, FileText, ListChecks, Clock, ArrowRight, Download, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free CMMC 2.0 Readiness Guide | CMMC Ready Now',
  description:
    'Download the free CMMC 2.0 Readiness Guide. A practical roadmap for DoD contractors covering the three levels, rollout timeline, self assessment checklist, top 10 compliance gaps, and your step by step roadmap to certification.',
  keywords: [
    'CMMC guide',
    'CMMC 2.0 guide',
    'CMMC readiness',
    'CMMC compliance guide',
    'NIST 800-171 guide',
    'defense contractor cybersecurity guide',
    'CMMC checklist',
    'CMMC roadmap',
    'free CMMC guide',
  ],
  openGraph: {
    title: 'Free CMMC 2.0 Readiness Guide | CMMC Ready Now',
    description:
      'Your step by step guide to understanding, preparing for, and achieving CMMC compliance. Download free.',
    type: 'website',
  },
};

export default function CMMCGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 mb-6">
                <Download className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-semibold">Free Download</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                The CMMC 2.0<br />
                <span className="text-accent">Readiness Guide</span>
              </h1>

              <p className="text-lg text-gray-300 mb-4">
                A practical roadmap for DoD contractors.
              </p>
              <p className="text-gray-400 mb-8">
                Everything you need to understand CMMC, assess where you stand, and build a clear path to certification. Written in plain English. No jargon. No fluff.
              </p>

              <a
                href="#download"
                className="bg-accent hover:bg-accent-dark text-navy-950 font-bold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center gap-2"
              >
                Get Your Free Copy <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="hidden lg:block">
              <div className="bg-navy-700/50 border border-navy-600/40 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-10 h-10 text-accent" />
                  <div>
                    <p className="text-white font-bold text-lg">CMMC 2.0 Readiness Guide</p>
                    <p className="text-gray-400 text-sm">By CMMC Ready Now</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    'What Is CMMC 2.0?',
                    'The Three Levels Explained',
                    'The Four Phase Rollout Timeline',
                    'CMMC Readiness Self Assessment Checklist',
                    'The 10 Most Common Compliance Gaps',
                    'Your CMMC Readiness Roadmap',
                    'Key Terms Glossary',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-4 text-center">
            What You Will Learn
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-2xl mx-auto">
            This guide covers everything a defense contractor needs to know about CMMC 2.0 compliance, from the basics to your action plan.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'The Three CMMC Levels',
                desc: 'Understand which level applies to your contracts, what controls are required, and how assessments work for Level 1, Level 2, and Level 3.',
              },
              {
                icon: Clock,
                title: 'The Rollout Timeline',
                desc: 'Know the four phase implementation schedule, key dates, and when your contracts will start requiring CMMC certification.',
              },
              {
                icon: ListChecks,
                title: 'Self Assessment Checklist',
                desc: 'Walk through a practical checklist covering all major CMMC domains so you can gauge your readiness before spending a dollar on consultants.',
              },
              {
                icon: FileText,
                title: 'Top 10 Compliance Gaps',
                desc: 'The most common gaps we see in defense contractors, and exactly how to close each one before your formal assessment.',
              },
              {
                icon: BookOpen,
                title: 'Your Readiness Roadmap',
                desc: 'A step by step plan for moving from "not started" to "assessment ready" with clear milestones, timelines, and priorities.',
              },
              {
                icon: CheckCircle2,
                title: 'Key Terms Glossary',
                desc: 'CUI, FCI, C3PAO, SPRS, SSP, POA&M. Every acronym and term explained in plain English so nothing catches you off guard.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <item.icon className="w-8 h-8 text-navy-700 mb-4" />
                <h3 className="text-lg font-bold text-navy-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-800 mb-8">
            Who This Guide Is For
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              'Defense contractors who need CMMC Level 2 certification',
              'Manufacturing companies in the DoD supply chain',
              'Construction firms with government contracts',
              'Subcontractors who handle Controlled Unclassified Information',
              'Business owners who want to understand compliance without the jargon',
              'IT managers preparing their organization for a C3PAO assessment',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Form */}
      <section id="download" className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Download Your Free CMMC Guide
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Enter your details below and we will send the complete CMMC 2.0 Readiness Guide straight to your inbox.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/9qEaBzqiyyfA9Tq823ks"
              style={{ width: '100%', border: 'none', overflow: 'hidden' }}
              scrolling="no"
              id="inline-9qEaBzqiyyfA9Tq823ks"
              data-layout="{&apos;id&apos;:&apos;INLINE&apos;}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="CMMC Guide Download"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="CMMC Guide Download Form"
              className="w-full min-h-[600px]"
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm mb-4">Want to discuss your CMMC compliance directly?</p>
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

      {/* Partnership Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">
            CMMC Ready Now is proudly powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=cmmcguide" className="font-bold text-navy-800 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Capital Cyber</a>. A cybersecurity firm helping defense contractors navigate NIST 800-171 compliance and prepare for CMMC certification.
          </p>
        </div>
      </section>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}
