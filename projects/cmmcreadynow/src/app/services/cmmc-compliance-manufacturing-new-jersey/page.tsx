import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Factory, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

/* ───────────────── SEO Metadata ───────────────── */
export const metadata: Metadata = {
  title: 'CMMC Compliance for Manufacturing Companies in New Jersey | CMMC Ready Now',
  description:
    'New Jersey manufacturing companies: CMMC Phase 2 enforcement starts soon. Get compliant before you lose DoD contracts. Expert CMMC compliance services tailored for NJ manufacturers. Book a free consultation today.',
  keywords: [
    'CMMC compliance New Jersey',
    'CMMC manufacturing NJ',
    'CMMC Level 2 New Jersey',
    'DoD contractor compliance NJ',
    'NIST 800-171 manufacturing',
    'defense contractor cybersecurity NJ',
    'CMMC certification New Jersey',
    'CMMC consultant NJ',
    'CMMC gap assessment manufacturing',
    'cybersecurity manufacturing New Jersey',
  ],
  openGraph: {
    title: 'CMMC Compliance for NJ Manufacturing | CMMC Ready Now',
    description:
      'CMMC Phase 2 is coming. NJ manufacturers need to act now or risk losing DoD contracts. Get expert help from CMMC Ready Now + Capital Cyber.',
    type: 'website',
  },
};

/* ───────────────── Page Component ───────────────── */
export default function CMMCManufacturingNJ() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-800">
        {/* Background glow */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
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
            <span className="text-red-300 text-sm font-semibold">CMMC Phase 2 Enforcement Is Coming — Act Now</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            New Jersey Manufacturers:<br />
            <span className="text-accent">Your DoD Contracts Are at Risk.</span>
          </h1>

          {/* Viral LinkedIn-style hook */}
          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>You build parts that protect America.</p>
            <p>You employ thousands across New Jersey.</p>
            <p>And CMMC Phase 2 could shut you out of every DoD contract overnight.</p>
            <p className="text-white font-semibold pt-2">Unless you get compliant. Now.</p>
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
            Here's What Nobody's Telling<br className="hidden sm:block" /> NJ Manufacturers
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>Most manufacturers think CMMC is "just another checkbox."</p>
            <p>They're wrong.</p>
            <p className="font-semibold text-navy-800">CMMC Level 2 requires full implementation of 110 NIST 800-171 controls.</p>
            <p>Not a plan. Not a promise. <span className="font-bold">Proof.</span></p>
            <p>And the Department of Defense isn&apos;t waiting around.</p>
            <p className="text-lg mt-6">
              Right now, <strong>New Jersey has over 2,800 defense contractors</strong> — many in manufacturing.
              The vast majority are nowhere near ready.
            </p>
            <p>
              When Phase 2 enforcement kicks in, non-compliant companies will be <strong>locked out of new contracts</strong> and could lose existing ones.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: '12-18 Months',
                desc: 'Average time to achieve CMMC Level 2. The clock is already ticking.',
              },
              {
                icon: AlertTriangle,
                title: '110 Controls',
                desc: 'Every single NIST 800-171 control must be fully implemented and documented.',
              },
              {
                icon: Factory,
                title: '2,800+ Contractors',
                desc: 'NJ defense contractors competing for assessor slots. First-movers win.',
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
              We Get NJ Manufacturers CMMC-Ready.<br className="hidden sm:block" /> Without the Headaches.
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              CMMC Ready Now, powered by Capital Cyber, is the compliance partner built for manufacturers who can&apos;t afford to guess.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'CMMC Gap Assessment',
                desc: 'We analyze your current security posture against all 110 NIST 800-171 controls and give you a clear, prioritized roadmap.',
              },
              {
                title: 'Remediation & Implementation',
                desc: "From policies to technical controls — we don't just tell you what's broken, we fix it. Hands-on engineering, not slide decks.",
              },
              {
                title: 'System Security Plan (SSP)',
                desc: 'Full SSP development and documentation that assessors actually accept. No templates. Custom to your environment.',
              },
              {
                title: 'Plan of Action & Milestones',
                desc: 'Strategic POA&M that shows assessors you have a real plan — not wishful thinking.',
              },
              {
                title: 'Continuous Monitoring',
                desc: "24/7 monitoring tools and dashboards so you stay compliant after certification. Compliance isn't a one-time event.",
              },
              {
                title: 'Assessment Prep & Mock Audits',
                desc: 'Full dress rehearsal before your C3PAO assessment. We simulate the real thing so there are zero surprises on game day.',
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

      {/* ══════ WHY NJ MANUFACTURING ══════ */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Built for New Jersey Manufacturers
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            We understand the unique challenges NJ manufacturers face — legacy OT systems, shop floor networks, multi-site operations, and tight margins. Our approach is tailored to your reality.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Aerospace & Defense Parts', icon: '✈️' },
              { label: 'Precision Machining', icon: '⚙️' },
              { label: 'Electronics Manufacturing', icon: '🔌' },
              { label: 'Metal Fabrication', icon: '🔩' },
              { label: 'Chemical & Materials', icon: '🧪' },
              { label: 'Plastics & Composites', icon: '🏭' },
              { label: 'Tooling & Die Making', icon: '🔧' },
              { label: 'Contract Manufacturing', icon: '📋' },
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
            Trusted by Defense Contractors Across the East Coast
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Real results from real companies. Here's what our clients say.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {[
              { label: 'CMMC Registered Practitioner', icon: Shield },
              { label: 'NIST SP 800-171 Experts', icon: Award },
              { label: 'Veteran-Owned Partner', icon: Award },
              { label: '100+ Assessments Completed', icon: CheckCircle2 },
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
                  'We thought we were compliant. Capital Cyber showed us we had 47 gaps. They helped us close every single one in 8 months. We passed our C3PAO assessment on the first try.',
                author: 'Operations Director',
                company: 'Precision Aerospace Manufacturing, NJ',
              },
              {
                quote:
                  'As a small machine shop with DoD contracts, CMMC felt impossible. The team at CMMC Ready Now broke it down into manageable steps. We never felt lost.',
                author: 'Owner',
                company: 'CNC Machining Company, Central NJ',
              },
              {
                quote:
                  'Rick and his team understand manufacturing. They didn\'t just hand us a checklist — they came to our facility, understood our operations, and built a plan that actually works.',
                author: 'IT Manager',
                company: 'Defense Electronics Manufacturer, North NJ',
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
            Your Path to CMMC Certification
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Simple. Structured. No surprises.
          </p>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Book a Call with Rick',
                desc: 'Free, no-obligation consultation. We\'ll assess where you stand and whether CMMC Ready Now is the right fit.',
              },
              {
                step: '02',
                title: 'Comprehensive Gap Assessment',
                desc: 'Our team performs a full analysis of your IT environment, policies, and controls against NIST 800-171. You get a detailed report and roadmap.',
              },
              {
                step: '03',
                title: 'Remediation & Implementation',
                desc: 'We work alongside your team to close every gap — technical controls, policies, training, and documentation.',
              },
              {
                step: '04',
                title: 'Assessment Prep & Certification',
                desc: 'Mock audits, SSP review, evidence collection. When you walk into your C3PAO assessment, you\'re ready.',
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
              Start with Step 1 — Book a Call <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ LINKEDIN-STYLE EMOTIONAL CLOSE ══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-lg sm:text-xl text-gray-800 space-y-4 leading-relaxed">
            <p className="font-bold text-2xl text-navy-800">Let me be real with you.</p>
            <p>Your shop has been building for the DoD for years.</p>
            <p>Maybe decades.</p>
            <p>You've survived supply chain chaos. COVID. Material shortages.</p>
            <p>You've earned every single contract.</p>
            <p className="font-semibold text-navy-800 pt-2">But CMMC doesn&apos;t care about your track record.</p>
            <p>It cares about your cybersecurity posture. Today.</p>
            <p>Not next quarter. Not next year. <strong>Now.</strong></p>
            <p className="pt-2">
              The manufacturers who move first will lock in assessor slots.<br />
              They'll win the contracts.<br />
              They'll be the ones still standing.
            </p>
            <p className="font-bold text-navy-800 text-2xl pt-4">Will that be you?</p>
          </div>
        </div>
      </section>

      {/* ══════ LEAD CAPTURE FORM ══════ */}
      <section id="free-assessment" className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your Free CMMC Readiness Assessment
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Fill out the form below and our team will contact you within 24 hours with a personalized compliance roadmap for your manufacturing operation.
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
              data-form-name="CMMC NJ Manufacturing Assessment"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="CMMC NJ Manufacturing Assessment Form"
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

      {/* ══════ NJ-SPECIFIC FOOTER SECTION ══════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving All of New Jersey</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                North Jersey, Central Jersey, South Jersey — Newark, Edison, Camden, Trenton, Paterson, and everywhere in between. On-site and remote support available.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Contact Us</h3>
              <div className="space-y-2">
                <a href="mailto:info@capital-cyber.com" className="flex items-center gap-2 text-gray-600 text-sm hover:text-navy-800 transition-colors">
                  <Mail className="w-4 h-4" /> info@capital-cyber.com
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
