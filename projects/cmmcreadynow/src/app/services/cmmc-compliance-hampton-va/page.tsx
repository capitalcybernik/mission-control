import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Building2, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

/* ───────────────── SEO Metadata ───────────────── */
export const metadata: Metadata = {
  title: 'CMMC Compliance Services in Hampton, Virginia | CMMC Ready Now',
  description:
    'Hampton defense contractors: Home to NASA Langley Research Center and Langley Air Force Base. Get CMMC Level 2 compliance for aerospace research, Air Force contractors, and NASA suppliers. Expert CMMC consulting for Hampton.',
  keywords: [
    'CMMC compliance Hampton',
    'CMMC NASA Langley',
    'CMMC Langley Air Force Base',
    'CMMC aerospace contractors Hampton',
    'CMMC Level 2 Hampton VA',
    'DFARS compliance Hampton',
    'NIST 800-171 NASA contractors',
    'defense contractor cybersecurity Hampton',
    'CMMC certification Hampton',
    'aerospace research CMMC',
    'Air Force contractor CMMC',
    'NASA supplier cybersecurity',
  ],
  openGraph: {
    title: 'CMMC Compliance Services in Hampton, VA | CMMC Ready Now',
    description:
      'Hampton hosts NASA Langley Research Center and Langley Air Force Base. Defense and aerospace contractors need CMMC Level 2 for advanced research programs.',
    type: 'website',
  },
};

/* ───────────────── Page Component ───────────────── */
export default function CMMCComplianceHampton() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-800">
        {/* Background glow */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Partnership Badge */}
          <div className="inline-flex items-center gap-2 bg-navy-700/60 border border-navy-600/40 rounded-full px-5 py-2 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-gray-300 text-sm font-medium">In Partnership with <span className="text-white font-bold">Capital Cyber</span></span>
          </div>

          {/* Urgency Flag */}
          <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-semibold">DFARS 252.204-7021 Is Now in Contracts. Are You Ready?</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Hampton Defense Contractors:<br />
            <span className="text-accent">Where NASA Meets Air Force Innovation</span>
          </h1>

          {/* Viral LinkedIn-style hook */}
          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>You support NASA Langley Research Center and Langley Air Force Base.</p>
            <p>Your work advances aerospace research and Air Force capabilities from hypersonics to space systems.</p>
            <p>And both NASA and the Air Force are implementing strict cybersecurity requirements for all contractors.</p>
            <p className="text-white font-semibold pt-2">Hampton contractors handle breakthrough technologies that shape the future of flight and space.</p>
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
            Hampton: Where Aerospace Research<br className="hidden sm:block" /> Drives National Security
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>Hampton is home to NASA Langley Research Center, the birthplace of American aerospace research, and Langley Air Force Base, a premier Air Force installation.</p>
            <p><strong>NASA Langley</strong> leads research in aeronautics, space exploration, and atmospheric science, while <strong>Langley AFB</strong> hosts the 1st Fighter Wing and Air Combat Command headquarters.</p>
            <p>Over <strong>800 defense and aerospace contractors</strong> support these critical missions: advanced research, flight testing, simulation systems, and cutting-edge technology development.</p>
            <p className="font-semibold text-navy-800">NASA and the Air Force require maximum cybersecurity for contractors handling breakthrough research data.</p>
            <p>
              From hypersonic vehicle designs to space exploration technologies, from advanced fighter capabilities to atmospheric research data, Hampton contractors work with information critical to American technological supremacy.
            </p>
            <p>
              NASA research contracts and Air Force programs increasingly mandate CMMC Level 2 certification. The most advanced aerospace programs cannot tolerate cybersecurity vulnerabilities.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: 'Dual Requirements',
                desc: 'NASA and Air Force contracts both require CMMC compliance. Hampton contractors serve both agencies with different timelines.',
              },
              {
                icon: AlertTriangle,
                title: 'Research Protection',
                desc: 'Breakthrough aerospace research generates highly sensitive data requiring maximum protection from foreign adversaries.',
              },
              {
                icon: Building2,
                title: 'Complex Programs',
                desc: 'Hampton contractors often support multiple agencies and programs, each with unique cybersecurity requirements.',
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
              CMMC Level 2 Compliance Services<br className="hidden sm:block" /> for Hampton Aerospace Contractors
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              CMMC Ready Now, powered by Capital Cyber, delivers complete CMMC Level 2 compliance for contractors supporting NASA Langley and Langley Air Force Base operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Aerospace Research Security',
                desc: 'We implement NIST 800-171 controls protecting NASA research data, flight test results, atmospheric studies, and breakthrough aerospace technologies.',
              },
              {
                title: 'Air Force Contractor Compliance',
                desc: 'We secure contractors supporting Langley AFB operations, Air Combat Command programs, and 1st Fighter Wing requirements with comprehensive cybersecurity.',
              },
              {
                title: 'Multi-Agency CUI Protection',
                desc: 'We protect Controlled Unclassified Information across both NASA and DoD contracts, ensuring compliance with different agency security requirements.',
              },
              {
                title: 'Research Environment Security',
                desc: 'We understand aerospace research environments, securing laboratory systems, flight test data, simulation networks, and collaborative research platforms.',
              },
              {
                title: 'Advanced Technology Framework',
                desc: 'Your System Security Plan addresses both NASA research security requirements and DoD cybersecurity mandates for advanced aerospace programs.',
              },
              {
                title: 'Dual-Agency Coordination',
                desc: 'We coordinate with both NASA Langley security offices and Air Force cybersecurity personnel to ensure comprehensive compliance across all contracts.',
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

      {/* ══════ WHY HAMPTON ══════ */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Hampton Aerospace & Defense Programs We Secure
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            From NASA research to Air Force operations, we secure the contractors advancing aerospace technology and national defense.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'NASA Research', icon: '🚀' },
              { label: 'Air Force Operations', icon: '✈️' },
              { label: 'Flight Testing', icon: '🛩️' },
              { label: 'Hypersonics', icon: '⚡' },
              { label: 'Space Systems', icon: '🛰️' },
              { label: 'Atmospheric Research', icon: '🌍' },
              { label: 'Simulation Technology', icon: '💻' },
              { label: 'Advanced Materials', icon: '🔬' },
            ].map((item) => (
              <div key={item.label} className="bg-navy-700/50 border border-navy-600/30 rounded-xl p-5">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-white font-semibold text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TRUST / SOCIAL PROOF ══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4 text-center">
            Trusted by Hampton Aerospace Contractors
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Real results from contractors supporting NASA Langley research and Langley Air Force Base operations.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {[
              { label: 'CMMC Registered Practitioner', icon: Shield },
              { label: 'NASA Contractor Experience', icon: Award },
              { label: 'Air Force Program Approved', icon: Award },
              { label: 'Hampton Local Presence', icon: CheckCircle2 },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-5 py-2.5"
              >
                <badge.icon className="w-5 h-5 text-accent" />
                <span className="text-navy-800 font-semibold text-sm">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  'Our research supports NASA\'s next-generation space exploration missions. Capital Cyber implemented CMMC controls that protect breakthrough research while enabling collaboration with international partners.',
                author: 'Research Director',
                company: 'Aerospace Research Contractor, Hampton VA',
              },
              {
                quote:
                  'Supporting the 1st Fighter Wing requires maintaining operational readiness while securing sensitive data. Capital Cyber delivered a CMMC solution that never interrupts critical Air Force operations.',
                author: 'Program Manager',
                company: 'Air Force Contractor, Hampton VA',
              },
              {
                quote:
                  'We support both NASA Langley and Langley AFB with different contract requirements. Rick\'s team navigated the complexity and delivered unified CMMC compliance across all our programs.',
                author: 'VP Technology',
                company: 'Multi-Agency Contractor, Hampton VA',
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-8 flex flex-col shadow-sm">
                <p className="text-gray-700 leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-navy-800 font-semibold">{t.author}</p>
                  <p className="text-gray-500 text-sm">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PROCESS / HOW IT WORKS ══════ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4 text-center">
            Our CMMC Compliance Process for Hampton
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Specialized methodology for contractors supporting NASA research and Air Force operations.
          </p>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Aerospace Contractor Assessment',
                desc: 'Free consultation focused on your NASA and Air Force contracts, research security requirements, and multi-agency compliance obligations.',
              },
              {
                step: '02',
                title: 'Research Data Protection',
                desc: 'We identify and secure aerospace research data, flight test results, and breakthrough technologies across both NASA and DoD programs.',
              },
              {
                step: '03',
                title: 'Multi-Agency NIST Implementation',
                desc: 'Complete NIST 800-171 implementation addressing both NASA research security and Air Force cybersecurity requirements.',
              },
              {
                step: '04',
                title: 'Aerospace Program Certification',
                desc: 'We coordinate with NASA Langley and Air Force security offices plus qualified C3PAO assessors for comprehensive CMMC certification.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="shrink-0 w-14 h-14 rounded-full bg-navy-800 text-accent font-bold text-lg flex items-center justify-center">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="https://capital-cyber.com/rick"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-navy-950 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Start Your CMMC Journey <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ LINKEDIN-STYLE EMOTIONAL CLOSE ══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-lg sm:text-xl text-gray-800 space-y-4 leading-relaxed">
            <p className="font-bold text-2xl text-navy-800">Hampton is where the future takes flight.</p>
            <p>NASA Langley has driven aerospace breakthroughs for over a century.</p>
            <p>From the first lunar landing to tomorrow's hypersonic vehicles.</p>
            <p>Langley Air Force Base protects American airspace with the most advanced fighter aircraft on Earth.</p>
            <p className="font-semibold text-navy-800 pt-2">The technologies developed in Hampton shape the future of flight and space exploration.</p>
            <p>The contractors who secure these breakthroughs will be trusted with the next generation of aerospace programs.</p>
            <p>They will be the partners NASA and the Air Force turn to when innovation meets national security.</p>
            <p className="pt-2">
              Hampton contractors advance human knowledge.<br />
              Your work enables impossible missions.<br />
              Your cybersecurity must match that ambition.
            </p>
            <p className="font-bold text-navy-800 text-2xl pt-4">Secure the future. Achieve CMMC Level 2 today.</p>
          </div>
        </div>
      </section>

      {/* ══════ LEAD CAPTURE FORM ══════ */}
      <section id="free-assessment" className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your Free CMMC Compliance Consultation
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Speak with our Hampton CMMC experts. We understand NASA research security and Air Force cybersecurity requirements.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl">
            {/* LeadConnector Form Embed */}
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
              data-form-name="CMMC Hampton Consultation"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="CMMC Hampton Consultation Form"
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

      {/* ══════ HAMPTON FOOTER SECTION ══════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving Hampton & Peninsula</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                NASA Langley Research Center, Langley Air Force Base, downtown Hampton, and the Peninsula region. We support aerospace research contractors and Air Force suppliers. On site and remote support available.
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

      {/* LeadConnector Script */}
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}