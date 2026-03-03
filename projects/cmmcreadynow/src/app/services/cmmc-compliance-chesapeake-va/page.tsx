import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Building2, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'CMMC Compliance Services in Chesapeake, Virginia | CMMC Ready Now',
  description:
    'Chesapeake defense contractors: Supporting defense logistics, supply chain operations, and military transportation. Get CMMC Level 2 compliance for logistics contractors and supply chain managers. Expert CMMC consulting for Chesapeake.',
  keywords: [
    'CMMC compliance Chesapeake',
    'CMMC defense logistics Chesapeake',
    'CMMC supply chain Virginia',
    'CMMC Level 2 Chesapeake VA',
    'DFARS compliance Chesapeake',
    'NIST 800-171 logistics',
    'defense contractor cybersecurity Chesapeake',
    'CMMC certification Chesapeake',
    'military logistics CMMC',
    'supply chain cybersecurity',
  ],
  openGraph: {
    title: 'CMMC Compliance Services in Chesapeake, VA | CMMC Ready Now',
    description:
      'Chesapeake supports critical defense logistics and supply chain operations. Defense logistics contractors need CMMC Level 2 for supply chain security.',
    type: 'website',
  },
};

export default function CMMCComplianceChesapeake() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-navy-700/60 border border-navy-600/40 rounded-full px-5 py-2 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-gray-300 text-sm font-medium">In Partnership with <span className="text-white font-bold">Capital Cyber</span></span>
          </div>

          <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-semibold">DFARS 252.204-7021 Is Now in Contracts. Are You Ready?</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Chesapeake Defense Contractors:<br />
            <span className="text-accent">Securing America's Defense Supply Chain</span>
          </h1>

          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>You manage defense logistics and supply chain operations across Hampton Roads.</p>
            <p>Your work keeps military bases supplied and operational readiness maintained.</p>
            <p>And the DoD is mandating CMMC Level 2 for all supply chain and logistics contractors.</p>
            <p className="text-white font-semibold pt-2">Chesapeake contractors are critical to military readiness and supply security.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="https://capital-cyber.com/rick"
              className="bg-accent hover:bg-accent-dark text-navy-950 font-bold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Book a Call with Rick <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#free-assessment"
              className="border border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
            >
              Get Your Free Assessment
            </a>
          </div>
        </div>
      </section>

      {/* ══════ PROBLEM / PAIN SECTION ══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-8 text-center">
            Chesapeake: The Logistics Hub<br className="hidden sm:block" /> of Hampton Roads Defense
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>Chesapeake serves as a critical logistics and supply chain hub supporting military operations across Hampton Roads and beyond.</p>
            <p>The region hosts <strong>defense logistics centers, transportation hubs, and supply chain management operations</strong> that keep America's military forces equipped and ready.</p>
            <p>Over <strong>600 defense contractors</strong> manage supply chains, transportation, warehousing, and logistics services for Navy, Army, and Air Force installations.</p>
            <p className="font-semibold text-navy-800">The DoD requires strict cybersecurity for all supply chain and logistics operations.</p>
            <p>
              From inventory management systems to transportation schedules, from supplier databases to logistics tracking, Chesapeake contractors handle sensitive operational data that could compromise military readiness if breached.
            </p>
            <p>
              DLA and other defense logistics agencies are mandating CMMC Level 2 for supply chain contractors. Secure logistics operations are essential to national security.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: 'Supply Chain Security',
                desc: 'Defense supply chains require end-to-end cybersecurity. CMMC Level 2 protects from supplier to end user.',
              },
              {
                icon: AlertTriangle,
                title: 'Logistics Data Protection',
                desc: 'Military logistics data reveals operational patterns. Cybersecurity breaches compromise readiness.',
              },
              {
                icon: Building2,
                title: 'Multi-Base Support',
                desc: 'Chesapeake contractors often support multiple military installations with complex requirements.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
                <item.icon className="w-10 h-10 text-navy-700 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-navy-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SOLUTION / WHAT WE DO ══════ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
              CMMC Level 2 Compliance Services<br className="hidden sm:block" /> for Chesapeake Logistics Contractors
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              CMMC Ready Now, powered by Capital Cyber, delivers complete CMMC Level 2 compliance for defense logistics and supply chain contractors in Chesapeake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Defense Logistics Security',
                desc: 'We implement NIST 800-171 controls protecting military supply chain data, inventory systems, transportation schedules, and logistics operations.',
              },
              {
                title: 'Supply Chain CUI Protection',
                desc: 'We secure Controlled Unclassified Information across complex supply chains, from supplier data to delivery schedules and inventory management.',
              },
              {
                title: 'Multi-Installation Support',
                desc: 'We understand logistics contractors supporting multiple military bases with different requirements, ensuring unified compliance.',
              },
              {
                title: 'Transportation Security',
                desc: 'We secure military transportation and logistics data, protecting routes, schedules, and cargo information from cyber threats.',
              },
              {
                title: 'Logistics-Focused Framework',
                desc: 'Your System Security Plan addresses unique challenges of defense logistics: supplier security, transportation data, and inventory protection.',
              },
              {
                title: 'DLA Coordination',
                desc: 'We coordinate with Defense Logistics Agency and other military logistics commands to ensure compliance with supply chain security requirements.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-accent mt-0.5 shrink-0" />
                  <h3 className="text-lg font-bold text-navy-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-9">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continue with rest of template structure... */}
      {/* ══════ LEAD CAPTURE FORM ══════ */}
      <section id="free-assessment" className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your Free CMMC Compliance Consultation
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Speak with our Chesapeake CMMC experts. We understand defense logistics and supply chain security requirements.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/9qEaBzqiyyfA9Tq823ks"
              style={{ width: '100%', border: 'none', overflow: 'hidden' }}
              scrolling="no"
              id="inline-9qEaBzqiyyfA9Tq823ks"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="CMMC Chesapeake Consultation"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="CMMC Chesapeake Consultation Form"
              className="w-full min-h-[600px]"
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm mb-4">Prefer to talk to someone right away?</p>
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

      {/* ══════ FOOTER SECTION ══════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving Chesapeake & Region</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Chesapeake logistics hubs, Great Bridge, Western Branch, and surrounding areas. We support defense logistics contractors and supply chain managers. On site and remote support available.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Contact Us</h3>
              <div className="space-y-2">
                <a href="mailto:info@cmmcreadynow.com" className="flex items-center gap-2 text-gray-600 text-sm hover:text-navy-800 transition-colors">
                  <Mail className="w-4 h-4" /> info@cmmcreadynow.com
                </a>
                <a href="tel:+15714103066" className="flex items-center gap-2 text-gray-600 text-sm hover:text-navy-800 transition-colors">
                  <Phone className="w-4 h-4" /> (571) 410-3066
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Partnership</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                CMMC Ready Now is proudly powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=locationpage" className="font-bold text-navy-800 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Capital Cyber</a>. A cybersecurity firm helping defense contractors navigate NIST 800-171 compliance and prepare for CMMC certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}