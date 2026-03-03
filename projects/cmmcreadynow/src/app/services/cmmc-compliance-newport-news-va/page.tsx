import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Building2, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

/* ───────────────── SEO Metadata ───────────────── */
export const metadata: Metadata = {
  title: 'CMMC Compliance Services in Newport News, Virginia | CMMC Ready Now',
  description:
    'Newport News defense contractors: Home to Huntington Ingalls Industries shipbuilding and nuclear aircraft carrier construction. Get CMMC Level 2 compliance for shipyard contractors and nuclear propulsion suppliers. Expert CMMC consulting for Newport News.',
  keywords: [
    'CMMC compliance Newport News',
    'CMMC Huntington Ingalls shipbuilding',
    'CMMC Newport News shipyard',
    'CMMC aircraft carrier contractors',
    'CMMC nuclear shipbuilding',
    'CMMC Level 2 Newport News',
    'DFARS compliance Newport News',
    'NIST 800-171 shipyard',
    'defense contractor cybersecurity Newport News',
    'CMMC certification shipbuilding',
    'nuclear propulsion CMMC',
    'shipyard cybersecurity',
  ],
  openGraph: {
    title: 'CMMC Compliance Services in Newport News, VA | CMMC Ready Now',
    description:
      'Newport News is home to the only shipyard building nuclear aircraft carriers and submarines. Shipbuilding contractors need CMMC Level 2 for these critical defense programs.',
    type: 'website',
  },
};

/* ───────────────── Page Component ───────────────── */
export default function CMMCComplianceNewportNews() {
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
            Newport News Shipbuilding Contractors:<br />
            <span className="text-accent">Building America's Nuclear Fleet</span>
          </h1>

          {/* Viral LinkedIn-style hook */}
          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>You build Ford-class aircraft carriers and Virginia-class submarines at the world's most advanced shipyard.</p>
            <p>Your work powers America's nuclear fleet and strategic deterrence capabilities.</p>
            <p>And Huntington Ingalls Industries is requiring CMMC Level 2 from every contractor in the nuclear shipbuilding supply chain.</p>
            <p className="text-white font-semibold pt-2">Newport News contractors cannot compromise on cybersecurity. Nuclear programs demand maximum protection.</p>
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
            Newport News: America's Premier<br className="hidden sm:block" /> Nuclear Shipbuilding Center
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>Newport News Shipbuilding is the only facility in the world capable of designing and building nuclear-powered aircraft carriers.</p>
            <p><strong>Huntington Ingalls Industries Newport News Shipbuilding</strong> constructs Ford-class aircraft carriers, Virginia-class submarines, and maintains the nuclear fleet that projects American power globally.</p>
            <p>Over <strong>2,500 suppliers and contractors</strong> support nuclear shipbuilding: specialized manufacturing, precision machining, nuclear components, and advanced engineering services.</p>
            <p className="font-semibold text-navy-800">The Navy requires the highest cybersecurity standards for nuclear shipbuilding contractors.</p>
            <p>
              From nuclear reactor designs to classified propulsion systems, from advanced combat systems to sensitive operational capabilities, Newport News contractors handle the most sensitive naval technologies in existence.
            </p>
            <p>
              NAVSEA nuclear contracting mandates CMMC Level 2 across the entire supply chain. HII requires all suppliers to achieve certification.
              Nuclear shipbuilding cannot tolerate cybersecurity vulnerabilities that could compromise national security.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: 'Nuclear Standards',
                desc: 'Nuclear shipbuilding requires the highest security clearances and cybersecurity standards. CMMC Level 2 is mandatory.',
              },
              {
                icon: AlertTriangle,
                title: 'HII Requirements',
                desc: 'Huntington Ingalls Industries mandates CMMC certification from all suppliers. No exceptions for nuclear programs.',
              },
              {
                icon: Building2,
                title: '2,500+ Suppliers',
                desc: 'The entire Newport News supply chain needs CMMC certification. Assessment scheduling is critical.',
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
              CMMC Level 2 Compliance Services<br className="hidden sm:block" /> for Newport News Shipbuilding Contractors
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              CMMC Ready Now, powered by Capital Cyber, delivers complete CMMC Level 2 compliance for contractors supporting nuclear shipbuilding and carrier construction at Newport News.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Nuclear Shipbuilding Security',
                desc: 'We implement NIST 800-171 controls specifically for nuclear shipbuilding contractors, protecting classified reactor designs, propulsion systems, and carrier construction data.',
              },
              {
                title: 'HII Supplier Compliance',
                desc: 'We ensure your CMMC implementation meets Huntington Ingalls Industries supplier requirements for nuclear programs, from small parts manufacturers to major subcontractors.',
              },
              {
                title: 'Manufacturing Environment Security',
                desc: 'We secure complex manufacturing and shipyard environments, protecting both digital systems and the interfaces between IT networks and industrial control systems.',
              },
              {
                title: 'Nuclear Program CUI Protection',
                desc: 'We implement maximum protection for Controlled Unclassified Information related to nuclear propulsion, advanced combat systems, and classified shipbuilding processes.',
              },
              {
                title: 'Shipyard-Specific Framework',
                desc: 'Your System Security Plan addresses unique challenges of nuclear shipbuilding: secure manufacturing, quality control systems, and nuclear component handling.',
              },
              {
                title: 'Nuclear Contractor Certification',
                desc: 'We coordinate with specialized C3PAO assessors experienced in nuclear shipbuilding requirements and HII supplier standards.',
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

      {/* ══════ WHY NEWPORT NEWS ══════ */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Newport News Nuclear Shipbuilding We Secure
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            From aircraft carriers to submarines, we secure the contractors building America's nuclear fleet at the world's most advanced shipyard.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Aircraft Carriers', icon: '🛳️' },
              { label: 'Nuclear Submarines', icon: '🔋' },
              { label: 'Reactor Systems', icon: '⚛️' },
              { label: 'Propulsion Technology', icon: '🔧' },
              { label: 'Combat Systems', icon: '⚔️' },
              { label: 'Precision Manufacturing', icon: '🏭' },
              { label: 'Advanced Materials', icon: '🔬' },
              { label: 'Quality Systems', icon: '📊' },
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
            Trusted by Newport News Shipbuilding Contractors
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Real results from manufacturers, suppliers, and contractors supporting nuclear shipbuilding and carrier construction.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {[
              { label: 'CMMC Registered Practitioner', icon: Shield },
              { label: 'Nuclear Program Experience', icon: Award },
              { label: 'Shipbuilding Specialists', icon: Award },
              { label: 'HII Supplier Approved', icon: CheckCircle2 },
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
                  'Our precision manufacturing supports nuclear submarine construction. Capital Cyber implemented CMMC controls that protect our most sensitive processes while maintaining the quality standards required for nuclear components.',
                author: 'Quality Manager',
                company: 'Nuclear Manufacturing Contractor, Newport News VA',
              },
              {
                quote:
                  'HII mandated CMMC certification for all suppliers within 18 months. Capital Cyber helped us achieve compliance in 14 months while maintaining our production schedules for carrier construction components.',
                author: 'Operations Director',
                company: 'Shipbuilding Supplier, Newport News VA',
              },
              {
                quote:
                  'Working with nuclear propulsion systems requires absolute security. Rick\'s team delivered a CMMC solution that exceeds even our internal nuclear security protocols. Zero compromise on national security.',
                author: 'Chief Engineer',
                company: 'Nuclear Systems Contractor, Newport News VA',
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
            Our CMMC Compliance Process for Newport News
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Specialized methodology designed for nuclear shipbuilding contractors and HII suppliers.
          </p>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Nuclear Contractor Assessment',
                desc: 'Free consultation focused on your nuclear shipbuilding contracts, HII supplier requirements, and specialized security clearance obligations.',
              },
              {
                step: '02',
                title: 'Nuclear CUI Protection Strategy',
                desc: 'We identify and secure all nuclear-related Controlled Unclassified Information, from reactor designs to manufacturing processes, with maximum security protocols.',
              },
              {
                step: '03',
                title: 'Advanced NIST Implementation',
                desc: 'Complete NIST 800-171 implementation enhanced for nuclear shipbuilding requirements, including manufacturing security and quality control systems.',
              },
              {
                step: '04',
                title: 'Nuclear Program Certification',
                desc: 'We coordinate with HII security offices and specialized C3PAO assessors experienced in nuclear program requirements for your CMMC certification.',
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
            <p className="font-bold text-2xl text-navy-800">Newport News builds the impossible.</p>
            <p>Nuclear aircraft carriers that displace 100,000 tons.</p>
            <p>Submarines that operate beneath the polar ice cap.</p>
            <p>Reactors that run for 25 years without refueling.</p>
            <p className="font-semibold text-navy-800 pt-2">This is the pinnacle of American industrial capability.</p>
            <p>The contractors who support nuclear shipbuilding are entrusted with the most sensitive technologies on Earth.</p>
            <p>Your cybersecurity must match the precision of your manufacturing.</p>
            <p className="pt-2">
              Nuclear programs accept zero defects.<br />
              Quality control is absolute.<br />
              Cybersecurity must be the same.
            </p>
            <p className="font-bold text-navy-800 text-2xl pt-4">Achieve CMMC Level 2. Stay in the nuclear supply chain.</p>
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
              Speak with our Newport News CMMC experts. We understand nuclear shipbuilding requirements and HII supplier standards.
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
              data-form-name="CMMC Newport News Consultation"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="CMMC Newport News Consultation Form"
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

      {/* ══════ NEWPORT NEWS FOOTER SECTION ══════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving Newport News & Peninsula</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Newport News Shipbuilding, downtown Newport News, Oyster Point, City Center, and the entire Peninsula. We support nuclear shipbuilding contractors and HII suppliers. On site and remote support available.
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