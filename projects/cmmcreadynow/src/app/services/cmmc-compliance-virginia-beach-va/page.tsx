import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Building2, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

/* ───────────────── SEO Metadata ───────────────── */
export const metadata: Metadata = {
  title: 'CMMC Compliance Services in Virginia Beach, Virginia | CMMC Ready Now',
  description:
    'Virginia Beach defense contractors: Home to Naval Air Station Oceana and SEAL Team training facilities. Get CMMC Level 2 compliance for naval aviation, special operations support, and defense contractors. Expert CMMC consulting for Virginia Beach.',
  keywords: [
    'CMMC compliance Virginia Beach',
    'CMMC NAS Oceana',
    'CMMC Virginia Beach VA',
    'CMMC naval aviation contractors',
    'CMMC SEAL Team support',
    'CMMC Level 2 Virginia Beach',
    'DFARS compliance Virginia Beach',
    'NIST 800-171 Virginia Beach',
    'defense contractor cybersecurity VB',
    'CMMC certification Virginia Beach',
    'CMMC consultant VB',
    'special operations CMMC',
  ],
  openGraph: {
    title: 'CMMC Compliance Services in Virginia Beach, VA | CMMC Ready Now',
    description:
      'Virginia Beach hosts NAS Oceana and elite SEAL training facilities. Defense contractors supporting naval aviation and special operations need CMMC Level 2 compliance.',
    type: 'website',
  },
};

/* ───────────────── Page Component ───────────────── */
export default function CMMCComplianceVirginiaBeach() {
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
            Virginia Beach Defense Contractors:<br />
            <span className="text-accent">Elite Operations Require Elite Security</span>
          </h1>

          {/* Viral LinkedIn-style hook */}
          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>You support NAS Oceana, the Master Jet Base of the East Coast.</p>
            <p>Your work enables SEAL Team training and special operations readiness.</p>
            <p>And the Navy is implementing the highest cybersecurity standards for contractors supporting elite operations.</p>
            <p className="text-white font-semibold pt-2">Virginia Beach contractors protect the most sensitive naval aviation and special operations programs.</p>
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
            Virginia Beach: Where Naval Aviation<br className="hidden sm:block" /> and Special Operations Converge
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>Virginia Beach is home to Naval Air Station Oceana, the Master Jet Base supporting F/A-18 Super Hornet operations across the Atlantic Fleet.</p>
            <p>The region hosts <strong>SEAL Team training facilities</strong>, Explosive Ordnance Disposal schools, and advanced naval aviation programs critical to U.S. maritime security.</p>
            <p>Over <strong>1,200 defense contractors</strong> support these elite operations: aircraft maintenance, training systems, simulation technologies, and specialized logistics.</p>
            <p className="font-semibold text-navy-800">The Navy demands the highest security standards for contractors supporting special operations and naval aviation.</p>
            <p>
              From classified aircraft modifications to SEAL training scenarios, from advanced avionics to special operations equipment, Virginia Beach contractors handle some of the Navy's most sensitive programs.
            </p>
            <p>
              NAVAIR and USSOCOM contracts increasingly require CMMC Level 2 certification. These elite programs cannot tolerate cybersecurity vulnerabilities.
              The Navy is prioritizing CMMC enforcement for Virginia Beach contractors.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: 'Elite Programs',
                desc: 'NAS Oceana and SEAL training programs have the highest security requirements. CMMC Level 2 is mandatory.',
              },
              {
                icon: AlertTriangle,
                title: 'Classified Systems',
                desc: 'Naval aviation and special operations contractors handle highly classified data requiring maximum protection.',
              },
              {
                icon: Building2,
                title: 'Limited Assessors',
                desc: 'Virginia Beach needs specialized C3PAOs familiar with naval aviation and special operations requirements.',
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
              CMMC Level 2 Compliance Services<br className="hidden sm:block" /> for Virginia Beach Defense Contractors
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              CMMC Ready Now, powered by Capital Cyber, delivers complete CMMC Level 2 compliance for contractors supporting naval aviation and special operations in Virginia Beach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Naval Aviation Security',
                desc: 'We implement NIST 800-171 controls for contractors supporting F/A-18 operations, aviation training systems, and aircraft maintenance at NAS Oceana.',
              },
              {
                title: 'Special Operations CUI Protection',
                desc: 'We secure Controlled Unclassified Information for SEAL Team support, EOD training, and special operations logistics with maximum security protocols.',
              },
              {
                title: 'Training System Security',
                desc: 'We protect advanced simulation and training technologies, ensuring compliance for contractors developing and maintaining naval aviation training systems.',
              },
              {
                title: 'Aviation Contractor Compliance',
                desc: 'We understand the unique requirements for aircraft maintenance, avionics upgrades, and naval aviation support operations requiring CMMC certification.',
              },
              {
                title: 'High-Security Framework',
                desc: 'Your System Security Plan addresses both standard NIST 800-171 requirements and enhanced security measures for special operations and naval aviation.',
              },
              {
                title: 'Elite Program Coordination',
                desc: 'We coordinate with NAVAIR and USSOCOM security offices to ensure your CMMC certification meets the highest standards for elite naval programs.',
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

      {/* ══════ WHY VIRGINIA BEACH ══════ */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Virginia Beach Elite Defense Programs We Secure
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            From the Master Jet Base to SEAL Team training, we secure the contractors supporting America's most elite naval operations.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Naval Aviation', icon: '✈️' },
              { label: 'SEAL Team Support', icon: '🔱' },
              { label: 'Training Systems', icon: '🎯' },
              { label: 'Aircraft Maintenance', icon: '🔧' },
              { label: 'Special Operations', icon: '⚔️' },
              { label: 'Simulation Technology', icon: '💻' },
              { label: 'EOD Training', icon: '💥' },
              { label: 'Aviation Logistics', icon: '📦' },
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
            Trusted by Virginia Beach Defense Contractors
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Real results from contractors supporting naval aviation, special operations, and elite training programs.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {[
              { label: 'CMMC Registered Practitioner', icon: Shield },
              { label: 'Naval Aviation Experience', icon: Award },
              { label: 'Special Operations Cleared', icon: Award },
              { label: 'Virginia Beach Local', icon: CheckCircle2 },
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
                  'Our company maintains advanced flight simulators for NAS Oceana. Capital Cyber implemented CMMC controls that protect classified training scenarios while keeping our systems operational for continuous pilot training.',
                author: 'Systems Engineer',
                company: 'Training Systems Contractor, Virginia Beach VA',
              },
              {
                quote:
                  'Supporting SEAL Team operations requires the highest security standards. Capital Cyber delivered a CMMC solution that exceeds even our internal security requirements. Zero compromise on mission readiness.',
                author: 'Program Manager',
                company: 'Special Operations Support, Virginia Beach VA',
              },
              {
                quote:
                  'Aircraft maintenance at Oceana involves highly sensitive technical data. Rick\'s team understands naval aviation requirements and delivered CMMC compliance without disrupting our 24/7 operations schedule.',
                author: 'Maintenance Director',
                company: 'Aviation Contractor, Virginia Beach VA',
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
            Our CMMC Compliance Process for Virginia Beach
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Specialized methodology for contractors supporting naval aviation and special operations.
          </p>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Elite Operations Assessment',
                desc: 'Free consultation focused on your naval aviation or special operations contracts, security clearance requirements, and high-security operational mandates.',
              },
              {
                step: '02',
                title: 'Classified Data Protection',
                desc: 'We identify and secure all Controlled Unclassified Information related to naval aviation, special operations, and training systems with enhanced protection measures.',
              },
              {
                step: '03',
                title: 'Enhanced NIST Implementation',
                desc: 'Complete NIST 800-171 implementation with additional security measures required for naval aviation and special operations contractors.',
              },
              {
                step: '04',
                title: 'Elite Program Certification',
                desc: 'We coordinate with NAVAIR and USSOCOM security offices plus specialized C3PAO assessors for your high-security CMMC certification.',
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
            <p className="font-bold text-2xl text-navy-800">Virginia Beach trains America's elite warriors.</p>
            <p>NAS Oceana launches the most advanced fighter aircraft on the planet.</p>
            <p>SEAL Teams train here for missions that shape global security.</p>
            <p>Your work enables the most elite operations in the U.S. military.</p>
            <p className="font-semibold text-navy-800 pt-2">These programs demand the highest cybersecurity standards.</p>
            <p>The contractors who achieve CMMC Level 2 will be trusted with the Navy's most sensitive operations.</p>
            <p>They will be the partners of choice when national security is on the line.</p>
            <p className="pt-2">
              Virginia Beach contractors support elite operations.<br />
              The Navy accepts nothing less than perfection.<br />
              Your cybersecurity must match that standard.
            </p>
            <p className="font-bold text-navy-800 text-2xl pt-4">Achieve CMMC Level 2. Stay in the elite tier.</p>
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
              Speak with our Virginia Beach CMMC experts. We understand naval aviation and special operations security requirements.
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
              data-form-name="CMMC Virginia Beach Consultation"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="CMMC Virginia Beach Consultation Form"
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

      {/* ══════ VIRGINIA BEACH FOOTER SECTION ══════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving Virginia Beach & Region</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                NAS Oceana, Little Creek, Sandbridge, Town Center, and surrounding areas. We support contractors with naval aviation, special operations, and elite training requirements. On site and remote support available.
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