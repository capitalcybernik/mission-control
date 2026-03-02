import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Factory, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

/* ───────────────── SEO Metadata ───────────────── */
export const metadata: Metadata = {
  title: 'NIST 800-171 Compliance for Manufacturing in Philadelphia | CMMC Ready Now',
  description:
    'Philadelphia manufacturers in the DoD supply chain: NIST 800-171 compliance is mandatory. Get expert help implementing all 110 security controls for your manufacturing operation. Book a free consultation today.',
  keywords: [
    'NIST 800-171 compliance Philadelphia',
    'NIST 800-171 manufacturing PA',
    'CMMC manufacturing Philadelphia',
    'DoD supply chain compliance Philly',
    'DFARS compliance manufacturing PA',
    'cybersecurity manufacturing Philadelphia',
    'CUI protection manufacturing',
    'defense contractor compliance PA',
    'NIST 800-171 consultant Philadelphia',
    'manufacturing cybersecurity Pennsylvania',
  ],
  openGraph: {
    title: 'NIST 800-171 for Philly Manufacturing | CMMC Ready Now',
    description:
      'Philadelphia manufacturers need NIST 800-171 compliance to keep DoD supply chain contracts. Expert implementation from CMMC Ready Now + Capital Cyber.',
    type: 'website',
  },
};

/* ───────────────── Page Component ───────────────── */
export default function NIST171ManufacturingPhilly() {
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
            <span className="text-red-300 text-sm font-semibold">NIST 800-171 Is the Foundation of CMMC — Compliance Is Mandatory</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Philadelphia Manufacturers:<br />
            <span className="text-accent">NIST 800-171 Compliance Starts Here.</span>
          </h1>

          {/* Viral LinkedIn-style hook */}
          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>You're part of the defense supply chain.</p>
            <p>Your components end up in systems that protect American lives.</p>
            <p>The DoD requires every company in that chain to protect Controlled Unclassified Information.</p>
            <p className="text-white font-semibold pt-2">NIST 800-171 is how you prove you can.</p>
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
            Philadelphia Manufacturing<br className="hidden sm:block" /> Runs on Defense Contracts
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>The Greater Philadelphia region is one of the oldest and most productive manufacturing corridors in the United States.</p>
            <p>From the Navy Yard to the industrial zones along I-95, <strong>over 4,500 manufacturing firms</strong> operate in the Philadelphia metro area. Many feed directly into the defense supply chain.</p>
            <p>The Philadelphia Defense Industrial Base includes companies producing everything from ship components for the Philadelphia Naval Shipyard to electronics, chemicals, and precision machined parts for DoD prime contractors.</p>
            <p className="font-semibold text-navy-800">Every one of these companies handling CUI must comply with NIST 800-171.</p>
            <p>
              NIST Special Publication 800-171 contains 110 security requirements across 14 control families.
              It covers everything from access control and audit logging to incident response and physical protection.
            </p>
            <p>
              If your prime contractor asks for your NIST 800-171 score and you don't have one, you're already behind.
              If the DoD audits your compliance and finds gaps, you face false claims liability and contract termination.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: '14 Control Families',
                desc: 'NIST 800-171 spans access control, awareness training, audit, configuration, identification, incident response, and more.',
              },
              {
                icon: AlertTriangle,
                title: 'False Claims Risk',
                desc: 'Misrepresenting your NIST 800-171 compliance in SPRS submissions can trigger Department of Justice action.',
              },
              {
                icon: Factory,
                title: '4,500+ Manufacturers',
                desc: 'Philly area manufacturing firms. Those in the DoD supply chain must demonstrate compliance now.',
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
              Full NIST 800-171 Implementation<br className="hidden sm:block" /> for Philly Manufacturers
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              CMMC Ready Now, powered by Capital Cyber, takes you from wherever you are to full NIST 800-171 compliance. No shortcuts. No empty promises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'NIST 800-171 Gap Assessment',
                desc: 'We evaluate your current posture against all 110 requirements and deliver a detailed findings report with your SPRS score.',
              },
              {
                title: 'CUI Identification & Scoping',
                desc: 'We map where CUI enters your organization, how it flows through your systems, and who has access. Proper scoping reduces cost and complexity.',
              },
              {
                title: 'Technical Control Implementation',
                desc: 'From multi factor authentication and encryption to network segmentation and endpoint protection, we deploy the technical controls you need.',
              },
              {
                title: 'Policy & Procedure Development',
                desc: 'Custom security policies, incident response plans, configuration management procedures, and awareness training programs built for manufacturing.',
              },
              {
                title: 'SPRS Score Submission Support',
                desc: 'We help you calculate your accurate SPRS score and submit it to the Supplier Performance Risk System. No inflated numbers. No guesswork.',
              },
              {
                title: 'Continuous Compliance Monitoring',
                desc: 'Compliance is not a one time project. We set up monitoring, logging, and regular reviews to keep you compliant as your business evolves.',
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

      {/* ══════ WHY PHILLY MANUFACTURING ══════ */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Built for Philadelphia's Manufacturing Sector
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            We know Philly manufacturing. Legacy equipment on the shop floor. ERP systems that predate smartphones. Tight margins and no tolerance for downtime. Our approach works within your operational reality.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Shipbuilding Components', icon: '🚢' },
              { label: 'Precision Machining', icon: '⚙️' },
              { label: 'Electronics Assembly', icon: '🔌' },
              { label: 'Chemical Processing', icon: '🧪' },
              { label: 'Metal Fabrication', icon: '🔩' },
              { label: 'Pharmaceutical Mfg', icon: '💊' },
              { label: 'Plastics & Polymers', icon: '🏭' },
              { label: 'Food & Beverage (DoD)', icon: '📦' },
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
            Trusted by Manufacturers Across Pennsylvania
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            From the Navy Yard to the Lehigh Valley, manufacturers trust us to get compliance right.
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
                  'Our prime contractor gave us 90 days to demonstrate NIST 800-171 compliance or lose our subcontract. Capital Cyber got us to a defensible SPRS score in 60 days. They saved our largest contract.',
                author: 'Plant Manager',
                company: 'Precision Parts Manufacturer, South Philly',
              },
              {
                quote:
                  'We had a self assessed SPRS score of 87. Capital Cyber showed us our real score was negative 12. They helped us understand the actual requirements and build a legitimate compliance program.',
                author: 'Quality Director',
                company: 'Electronics Manufacturer, Bucks County PA',
              },
              {
                quote:
                  'The team understood our shop floor challenges. They knew we couldn\'t just shut down production to install security controls. They worked around our schedule and got it done without a single hour of downtime.',
                author: 'Owner',
                company: 'Metal Fabrication Shop, Northeast Philadelphia',
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
            Your Path to NIST 800-171 Compliance
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Clear steps. Real timelines. No surprises.
          </p>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Book a Call with Rick',
                desc: 'Free consultation to understand your supply chain position, your contracts, and your current security posture.',
              },
              {
                step: '02',
                title: 'Gap Assessment & SPRS Scoring',
                desc: 'We assess every control, calculate your real SPRS score, and deliver a prioritized remediation roadmap.',
              },
              {
                step: '03',
                title: 'Implementation & Remediation',
                desc: 'Technical controls, policies, training, and documentation. We work alongside your team to close every gap without disrupting production.',
              },
              {
                step: '04',
                title: 'Validation & Ongoing Compliance',
                desc: 'Final validation, SPRS submission support, and continuous monitoring to maintain compliance as requirements evolve.',
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
            <p className="font-bold text-2xl text-navy-800">Philadelphia built American manufacturing.</p>
            <p>Your factories have been running for generations.</p>
            <p>You've survived recessions, offshoring, and global competition.</p>
            <p>You're still here because you deliver quality. On time. Every time.</p>
            <p className="font-semibold text-navy-800 pt-2">But the DoD is adding a new requirement to that list: cybersecurity.</p>
            <p>NIST 800-171 compliance isn't optional for companies in the defense supply chain. It's the baseline.</p>
            <p>And soon, CMMC certification will make it enforceable.</p>
            <p className="pt-2">
              The manufacturers who invest in compliance now will be the ones primes trust with new work.<br />
              The ones who wait will watch contracts go to competitors who took action.
            </p>
            <p className="font-bold text-navy-800 text-2xl pt-4">Your shop has survived everything. Don't let a compliance gap be the thing that stops you.</p>
          </div>
        </div>
      </section>

      {/* ══════ LEAD CAPTURE FORM ══════ */}
      <section id="free-assessment" className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your Free NIST 800-171 Compliance Assessment
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Fill out the form below and our team will contact you within 24 hours to discuss your NIST 800-171 compliance roadmap.
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
              data-form-name="NIST 800-171 Philly Manufacturing"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="NIST 800-171 Philadelphia Manufacturing Form"
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

      {/* ══════ PHILLY-SPECIFIC FOOTER SECTION ══════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving Greater Philadelphia</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Center City, South Philadelphia, Northeast Philly, Bucks County, Montgomery County, Delaware County, Chester County, and the Lehigh Valley. On site and remote support available.
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
