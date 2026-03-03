import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Building2, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

/* ───────────────── SEO Metadata ───────────────── */
export const metadata: Metadata = {
  title: 'CMMC Compliance Services in Hampton Roads, Virginia | CMMC Ready Now',
  description:
    'Hampton Roads defense contractors: Home to Naval Station Norfolk and the largest naval shipbuilding industry in America. Get CMMC Level 2 compliance before your competitors secure every assessor. Expert CMMC consulting for Hampton Roads defense firms.',
  keywords: [
    'CMMC compliance Hampton Roads',
    'CMMC Norfolk Virginia Beach',
    'CMMC Naval Station Norfolk',
    'CMMC shipbuilding contractors',
    'CMMC Level 2 Hampton Roads',
    'DFARS compliance Virginia',
    'NIST 800-171 Hampton Roads',
    'defense contractor cybersecurity VA',
    'CMMC certification Norfolk',
    'CMMC consultant Hampton Roads',
    'Pentagon contractor compliance',
    'cybersecurity defense Virginia',
  ],
  openGraph: {
    title: 'CMMC Compliance Services in Hampton Roads, VA | CMMC Ready Now',
    description:
      'Hampton Roads houses the world\'s largest naval base and America\'s premier shipbuilding industry. If you hold DoD contracts in Hampton Roads, CMMC compliance is mission critical.',
    type: 'website',
  },
};

/* ───────────────── Page Component ───────────────── */
export default function CMMCComplianceHamptonRoads() {
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
            Hampton Roads Defense Contractors:<br />
            <span className="text-accent">Is Your Shipyard CMMC Ready?</span>
          </h1>

          {/* Viral LinkedIn-style hook */}
          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>You build the Navy's most advanced vessels at Naval Station Norfolk.</p>
            <p>Your work powers America's maritime supremacy worldwide.</p>
            <p>And the DoD is mandating that every contractor in the supply chain meets CMMC Level 2.</p>
            <p className="text-white font-semibold pt-2">Hampton Roads contractors cannot afford to fall behind. Get CMMC compliant now.</p>
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
            Hampton Roads: America's Naval Shipbuilding Capital<br className="hidden sm:block" /> Faces CMMC Mandate
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>Hampton Roads is the epicenter of U.S. naval power, home to Naval Station Norfolk, the world's largest naval base.</p>
            <p>The region hosts <strong>Huntington Ingalls Industries Newport News Shipbuilding</strong>, the sole designer and builder of Ford-class aircraft carriers and Virginia-class submarines.</p>
            <p>Over <strong>3,000 defense contractors</strong> operate across Norfolk, Virginia Beach, Newport News, Hampton, and Chesapeake, supporting naval operations that project American power globally.</p>
            <p className="font-semibold text-navy-800">The Navy is leading CMMC enforcement in the shipbuilding sector.</p>
            <p>
              NAVSEA contracts increasingly include DFARS clause 252.204-7021, requiring CMMC certification at specified levels.
              From prime contractors like HII to the smallest machine shops supplying components, everyone needs compliance.
            </p>
            <p>
              Hampton Roads contractors handle some of the most sensitive naval technologies: nuclear propulsion systems, advanced sonar, weapons integration, and classified shipbuilding designs.
              CMMC Level 2 is the baseline for this work.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: '8-16 Months',
                desc: 'Typical CMMC remediation timeline for shipbuilders. Complex industrial environments take longer to secure.',
              },
              {
                icon: AlertTriangle,
                title: 'Supply Chain Risk',
                desc: 'HII and other primes are requiring CMMC from all subcontractors. No certification means no work.',
              },
              {
                icon: Building2,
                title: 'Limited C3PAOs',
                desc: 'Hampton Roads has thousands of contractors but limited certified assessors. Book early or wait months.',
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
              CMMC Level 2 Compliance Services<br className="hidden sm:block" /> for Hampton Roads Defense Contractors
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              CMMC Ready Now, powered by Capital Cyber, delivers complete CMMC Level 2 compliance for Hampton Roads shipbuilders, naval contractors, and defense suppliers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Complete NIST 800-171 Implementation',
                desc: 'We implement all 110 security controls across your shipyard, office, and remote environments. Access controls, encryption, incident response, and industrial cybersecurity.',
              },
              {
                title: 'Naval CUI Protection Strategy',
                desc: 'We secure Controlled Unclassified Information specific to naval programs: ship designs, technical data packages, test results, and operational capabilities.',
              },
              {
                title: 'Industrial Environment Security',
                desc: 'We understand shipbuilding environments. Our solutions work with legacy systems, industrial networks, CAD workstations, and manufacturing systems.',
              },
              {
                title: 'Supply Chain Compliance',
                desc: 'We help you meet prime contractor requirements from HII, General Dynamics, and other major shipbuilders requiring CMMC from their supply base.',
              },
              {
                title: 'System Security Plan Development',
                desc: 'Your SSP is crafted specifically for naval contracting requirements, addressing unique security challenges in maritime defense manufacturing.',
              },
              {
                title: 'C3PAO Assessment Preparation',
                desc: 'We prepare you for formal CMMC assessment, including mock assessments, evidence collection, and assessor coordination in the Hampton Roads area.',
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

      {/* ══════ WHY HAMPTON ROADS ══════ */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Hampton Roads Naval Defense Sectors We Serve
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            From aircraft carriers to submarines, from Norfolk to Newport News, we secure the contractors that build America's naval fleet.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Naval Shipbuilding', icon: '🚢' },
              { label: 'Nuclear Propulsion', icon: '⚛️' },
              { label: 'Submarine Systems', icon: '🔧' },
              { label: 'Aircraft Carriers', icon: '✈️' },
              { label: 'Combat Systems', icon: '⚔️' },
              { label: 'Marine Engineering', icon: '🔩' },
              { label: 'Naval Aviation Support', icon: '🚁' },
              { label: 'Port Operations', icon: '⚓' },
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
            Trusted by Hampton Roads Defense Contractors
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Real results from shipbuilders, naval contractors, and defense suppliers across the Hampton Roads region.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {[
              { label: 'CMMC Registered Practitioner', icon: Shield },
              { label: 'Naval Contractor Experience', icon: Award },
              { label: 'Industrial Security Experts', icon: Award },
              { label: 'Hampton Roads Local Partner', icon: CheckCircle2 },
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
                  'Our shipyard has legacy systems dating back decades. Capital Cyber found a way to secure our industrial networks without disrupting production. We achieved CMMC Level 2 while keeping our Navy contracts on schedule.',
                author: 'Plant Manager',
                company: 'Shipbuilding Contractor, Newport News VA',
              },
              {
                quote:
                  'HII required all their suppliers to get CMMC certified within 18 months. Capital Cyber helped us beat the deadline by 6 months. Their team understands the unique challenges of naval manufacturing.',
                author: 'Quality Director',
                company: 'Naval Systems Supplier, Norfolk VA',
              },
              {
                quote:
                  'Working with classified naval designs means our cybersecurity has to be bulletproof. Rick and his team delivered a solution that satisfies both CMMC requirements and our internal security standards.',
                author: 'Chief Engineer',
                company: 'Naval Architecture Firm, Virginia Beach VA',
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
            Our CMMC Compliance Process for Hampton Roads
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Proven methodology designed for shipbuilders and naval contractors.
          </p>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Naval Contractor Assessment',
                desc: 'Free consultation focused on your naval contracts, shipbuilding environment, and prime contractor requirements. We understand HII, GDEB, and other major naval prime mandates.',
              },
              {
                step: '02',
                title: 'CUI Scoping & Industrial Security',
                desc: 'We identify Controlled Unclassified Information in your shipyard environment, from CAD designs to test data, ensuring proper protection without disrupting operations.',
              },
              {
                step: '03',
                title: 'NIST 800-171 Implementation',
                desc: 'Complete implementation of all 110 security controls, adapted for industrial environments, legacy systems, and the unique requirements of naval manufacturing.',
              },
              {
                step: '04',
                title: 'CMMC Certification & Ongoing Support',
                desc: 'We coordinate with Hampton Roads C3PAO assessors for your formal assessment and provide ongoing support to maintain certification as contracts evolve.',
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
            <p className="font-bold text-2xl text-navy-800">Hampton Roads built America's naval supremacy.</p>
            <p>For over a century, the shipyards of Newport News have launched the vessels that project American power across the globe.</p>
            <p>Your welders, engineers, and designers create the most advanced naval platforms on Earth.</p>
            <p>But the threat landscape has changed. Cyber warfare is naval warfare.</p>
            <p className="font-semibold text-navy-800 pt-2">CMMC is how the Navy protects its technological edge.</p>
            <p>The contractors who achieve CMMC Level 2 first will secure the next generation of naval contracts.</p>
            <p>They will be the trusted partners when breakthrough technologies need protection.</p>
            <p className="pt-2">
              Hampton Roads contractors cannot wait.<br />
              The Navy is watching.<br />
              Your competitors are moving.
            </p>
            <p className="font-bold text-navy-800 text-2xl pt-4">Get CMMC compliant before the next contract award cycle.</p>
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
              Speak with our Hampton Roads CMMC experts. We understand naval contracting requirements and shipbuilding environments.
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
              data-form-name="CMMC Hampton Roads Consultation"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="CMMC Hampton Roads Consultation Form"
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

      {/* ══════ HAMPTON ROADS FOOTER SECTION ══════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving Hampton Roads</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Norfolk, Virginia Beach, Newport News, Hampton, Chesapeake, Portsmouth, and Suffolk. From Naval Station Norfolk to HII shipbuilding, we support the entire Hampton Roads defense ecosystem. On site and remote support available.
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