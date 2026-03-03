import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Building2, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

/* ───────────────── SEO Metadata ───────────────── */
export const metadata: Metadata = {
  title: 'CMMC Compliance Services in Norfolk, Virginia | CMMC Ready Now',
  description:
    'Norfolk defense contractors: Home to the world\'s largest naval base. Get CMMC Level 2 compliance for naval operations contractors, fleet support services, and naval aviation suppliers. Expert CMMC consulting for Norfolk defense firms.',
  keywords: [
    'CMMC compliance Norfolk',
    'CMMC Naval Station Norfolk',
    'CMMC Norfolk Virginia',
    'CMMC naval base contractors',
    'CMMC Level 2 Norfolk',
    'DFARS compliance Norfolk',
    'NIST 800-171 Norfolk VA',
    'defense contractor cybersecurity Norfolk',
    'CMMC certification Norfolk',
    'CMMC consultant Norfolk',
    'naval operations security',
    'fleet support CMMC',
  ],
  openGraph: {
    title: 'CMMC Compliance Services in Norfolk, VA | CMMC Ready Now',
    description:
      'Norfolk is home to Naval Station Norfolk, the world\'s largest naval base. Defense contractors supporting naval operations need CMMC Level 2 compliance now.',
    type: 'website',
  },
};

/* ───────────────── Page Component ───────────────── */
export default function CMMCComplianceNorfolk() {
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
            Norfolk Defense Contractors:<br />
            <span className="text-accent">Supporting the World's Largest Naval Base</span>
          </h1>

          {/* Viral LinkedIn-style hook */}
          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>You support 75 ships and 134 aircraft at Naval Station Norfolk.</p>
            <p>Your work keeps the Atlantic Fleet mission ready and deployment capable.</p>
            <p>And the Navy is implementing CMMC across all contractor operations at the world's largest naval installation.</p>
            <p className="text-white font-semibold pt-2">Norfolk contractors must achieve CMMC Level 2 to continue naval base operations.</p>
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
            Naval Station Norfolk: The Epicenter<br className="hidden sm:block" /> of Navy CMMC Enforcement
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>Naval Station Norfolk is the world's largest naval base, home to 75 ships and 134 aircraft of the U.S. Atlantic Fleet.</p>
            <p>The base supports over <strong>50,000 military personnel</strong> and operates as the primary hub for naval operations in the Atlantic, Mediterranean, and beyond.</p>
            <p>More than <strong>1,800 defense contractors</strong> provide critical support services: fleet maintenance, logistics, IT services, facilities management, and specialized technical support.</p>
            <p className="font-semibold text-navy-800">The Navy is mandating CMMC for all base contractors handling sensitive naval data.</p>
            <p>
              From ship maintenance records to operational schedules, from personnel data to tactical systems information, Norfolk contractors handle massive volumes of Controlled Unclassified Information daily.
            </p>
            <p>
              NAVSEA and NAVFAC contracts at Norfolk increasingly require CMMC Level 2 certification. Base access and contract renewals depend on compliance.
              The Navy will not compromise on cybersecurity at its premier naval installation.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: '75 Ships',
                desc: 'Naval Station Norfolk homeports 75 ships requiring contractor support. Each ship generates sensitive operational data.',
              },
              {
                icon: AlertTriangle,
                title: 'Base Access Risk',
                desc: 'Non-compliant contractors face base access restrictions. CMMC is becoming mandatory for continued operations.',
              },
              {
                icon: Building2,
                title: '1,800+ Contractors',
                desc: 'Norfolk base contractors all competing for limited CMMC assessment slots. Delays mean lost contracts.',
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
              CMMC Level 2 Compliance Services<br className="hidden sm:block" /> for Norfolk Naval Base Contractors
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              CMMC Ready Now, powered by Capital Cyber, delivers complete CMMC Level 2 compliance for contractors supporting Naval Station Norfolk operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Naval Operations Security',
                desc: 'We implement NIST 800-171 controls tailored for naval base operations: fleet schedules, maintenance records, personnel systems, and operational communications.',
              },
              {
                title: 'Base Contractor CUI Protection',
                desc: 'We secure Controlled Unclassified Information specific to Norfolk operations: ship movement data, maintenance reports, training records, and logistics information.',
              },
              {
                title: 'Multi-Site Implementation',
                desc: 'We secure contractors with operations both on-base and off-base, ensuring compliance across all locations where naval CUI is processed or stored.',
              },
              {
                title: 'Fleet Support Compliance',
                desc: 'We understand the unique requirements for contractors supporting Atlantic Fleet operations, from routine maintenance to complex overhauls and modernizations.',
              },
              {
                title: 'Navy Cybersecurity Framework',
                desc: 'Your System Security Plan addresses specific Navy cybersecurity requirements beyond basic NIST 800-171, including naval tactical systems interfaces.',
              },
              {
                title: 'Base Access Coordination',
                desc: 'We coordinate with Naval Station Norfolk security offices to ensure your CMMC certification meets base access and contracting requirements.',
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

      {/* ══════ WHY NORFOLK ══════ */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Norfolk Naval Base Contractor Services We Secure
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            From fleet maintenance to base operations, we secure the contractors that keep the world's largest naval base mission ready.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Fleet Maintenance', icon: '🔧' },
              { label: 'Base Operations', icon: '🏢' },
              { label: 'IT Services', icon: '💻' },
              { label: 'Logistics Support', icon: '📦' },
              { label: 'Facilities Management', icon: '🏗️' },
              { label: 'Security Services', icon: '🛡️' },
              { label: 'Training Support', icon: '🎯' },
              { label: 'Medical Services', icon: '🏥' },
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
            Trusted by Norfolk Naval Base Contractors
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Real results from contractors providing critical support services to the world's largest naval base.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {[
              { label: 'CMMC Registered Practitioner', icon: Shield },
              { label: 'Naval Base Experience', icon: Award },
              { label: 'Fleet Support Specialists', icon: Award },
              { label: 'Norfolk Local Presence', icon: CheckCircle2 },
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
                  'Our company maintains IT systems for multiple commands at Naval Station Norfolk. Capital Cyber implemented CMMC controls without disrupting critical naval operations. We maintained 100% uptime throughout implementation.',
                author: 'CTO',
                company: 'Naval IT Support Contractor, Norfolk VA',
              },
              {
                quote:
                  'Fleet maintenance generates massive amounts of sensitive data. Capital Cyber helped us secure everything from ship repair records to parts inventory systems. CMMC compliance was achieved in 12 months.',
                author: 'Operations Manager',
                company: 'Fleet Maintenance Contractor, Norfolk VA',
              },
              {
                quote:
                  'Working on base requires understanding Navy procedures and security protocols. Rick\'s team knows Norfolk operations and delivered a CMMC solution that integrates perfectly with base requirements.',
                author: 'Program Director',
                company: 'Base Operations Contractor, Norfolk VA',
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
            Our CMMC Compliance Process for Norfolk
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Proven methodology designed for Naval Station Norfolk contractors and base support operations.
          </p>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Naval Base Assessment',
                desc: 'Free consultation focused on your Norfolk base contracts, operational requirements, and Navy cybersecurity mandates. We understand NAVSEA, NAVFAC, and other naval command requirements.',
              },
              {
                step: '02',
                title: 'Naval CUI Identification',
                desc: 'We identify and scope all Controlled Unclassified Information in your Norfolk operations, from fleet data to base operational information, ensuring comprehensive protection.',
              },
              {
                step: '03',
                title: 'NIST 800-171 Implementation',
                desc: 'Complete implementation of all 110 security controls, designed for naval base contractors with on-base and off-base operations, ensuring seamless fleet support.',
              },
              {
                step: '04',
                title: 'Navy CMMC Certification',
                desc: 'We coordinate with Navy contracting offices and C3PAO assessors familiar with Norfolk operations for your formal assessment and certification.',
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
            <p className="font-bold text-2xl text-navy-800">Naval Station Norfolk is more than a base.</p>
            <p>It is the heart of American naval power.</p>
            <p>75 ships call Norfolk home. 134 aircraft launch from its runways.</p>
            <p>The Atlantic Fleet depends on the contractors who keep this base running 24/7/365.</p>
            <p className="font-semibold text-navy-800 pt-2">CMMC is how the Navy ensures its most critical base stays secure.</p>
            <p>The contractors who achieve compliance first will be the ones the Navy trusts with its most sensitive operations.</p>
            <p>They will be the partners of choice when crisis response is needed.</p>
            <p className="pt-2">
              Norfolk contractors support global naval operations.<br />
              The stakes are too high for cybersecurity shortcuts.<br />
              CMMC Level 2 is the new baseline.
            </p>
            <p className="font-bold text-navy-800 text-2xl pt-4">Secure your future at the world's largest naval base.</p>
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
              Speak with our Norfolk CMMC experts. We understand Naval Station Norfolk requirements and fleet support operations.
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
              data-form-name="CMMC Norfolk Naval Base Consultation"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="CMMC Norfolk Naval Base Consultation Form"
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

      {/* ══════ NORFOLK FOOTER SECTION ══════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving Norfolk & Vicinity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Naval Station Norfolk, Norfolk International Terminals, downtown Norfolk, Ghent, and surrounding areas. We support contractors with base access requirements and fleet support operations. On site and remote support available.
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