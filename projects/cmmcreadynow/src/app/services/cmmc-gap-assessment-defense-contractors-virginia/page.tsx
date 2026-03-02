import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Building2, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

/* ───────────────── SEO Metadata ───────────────── */
export const metadata: Metadata = {
  title: 'CMMC Gap Assessment for Defense Contractors in Virginia | CMMC Ready Now',
  description:
    'Virginia defense contractors: CMMC enforcement is accelerating. Get a comprehensive gap assessment before your competitors lock up every assessor slot. Expert CMMC gap analysis tailored for VA defense firms. Book a free consultation today.',
  keywords: [
    'CMMC gap assessment Virginia',
    'CMMC defense contractors VA',
    'CMMC Level 2 Virginia',
    'DFARS compliance Virginia',
    'NIST 800-171 gap assessment',
    'defense contractor cybersecurity Virginia',
    'CMMC certification Virginia',
    'CMMC consultant VA',
    'Pentagon contractor compliance',
    'cybersecurity defense Virginia',
  ],
  openGraph: {
    title: 'CMMC Gap Assessment for VA Defense Contractors | CMMC Ready Now',
    description:
      'Virginia sits at the epicenter of U.S. defense. If you hold DoD contracts in VA, a CMMC gap assessment is your first step to staying in the fight.',
    type: 'website',
  },
};

/* ───────────────── Page Component ───────────────── */
export default function CMMCGapAssessmentVA() {
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
            <span className="text-red-300 text-sm font-semibold">DFARS 252.204-7021 Is Now in Contracts — Are You Ready?</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Virginia Defense Contractors:<br />
            <span className="text-accent">Do You Know Where Your Gaps Are?</span>
          </h1>

          {/* Viral LinkedIn-style hook */}
          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>You operate minutes from the Pentagon.</p>
            <p>Your work touches some of the most sensitive programs in the country.</p>
            <p>And the DoD is done accepting "we're working on it" as a compliance strategy.</p>
            <p className="text-white font-semibold pt-2">A CMMC gap assessment tells you exactly where you stand. No guessing.</p>
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
            Virginia Is Ground Zero<br className="hidden sm:block" /> for CMMC Enforcement
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>Virginia is home to the largest concentration of defense contractors in the United States.</p>
            <p>Over <strong>17,000 DoD contractors</strong> operate across the Commonwealth, from Arlington and Fairfax to Hampton Roads and Charlottesville.</p>
            <p>The Northern Virginia defense corridor alone generates more than <strong>$40 billion</strong> in federal contracts annually.</p>
            <p className="font-semibold text-navy-800">And the Department of Defense is watching this state more closely than any other.</p>
            <p>
              DFARS clause 252.204-7021 is already appearing in new contracts. That clause requires CMMC certification at the level specified.
              No certification, no contract. Period.
            </p>
            <p>
              A gap assessment is the first step. It shows you exactly which of the 110 NIST 800-171 controls you've implemented, which ones you haven't, and what it will take to close every gap before your C3PAO assessment.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: '6-18 Months',
                desc: 'The typical remediation timeline after a gap assessment. Starting late means missing contract deadlines.',
              },
              {
                icon: AlertTriangle,
                title: '110 Controls',
                desc: 'NIST 800-171 has 110 security requirements. Missing even one can derail your assessment.',
              },
              {
                icon: Building2,
                title: '17,000+ Contractors',
                desc: 'Virginia defense firms are all competing for limited C3PAO assessor availability.',
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
              What Our CMMC Gap Assessment<br className="hidden sm:block" /> Covers for Virginia Contractors
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              CMMC Ready Now, powered by Capital Cyber, delivers a gap assessment that goes far beyond a spreadsheet. We give you a battle plan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Full NIST 800-171 Control Review',
                desc: 'We evaluate every one of the 110 controls across your environment. Access controls, incident response, media protection, system integrity, and more.',
              },
              {
                title: 'CUI Scoping & Data Flow Mapping',
                desc: 'We identify where Controlled Unclassified Information lives, how it moves, and who touches it. Scoping errors are the number one reason assessments fail.',
              },
              {
                title: 'Technical Vulnerability Scan',
                desc: 'We scan your network, endpoints, and cloud infrastructure for misconfigurations and known vulnerabilities that violate NIST requirements.',
              },
              {
                title: 'Policy & Documentation Audit',
                desc: 'Your System Security Plan, POA&M, incident response plan, and supporting policies are reviewed against what C3PAO assessors expect to see.',
              },
              {
                title: 'Prioritized Remediation Roadmap',
                desc: 'You receive a detailed report ranking every gap by severity and effort. You will know exactly what to fix first and how long it will take.',
              },
              {
                title: 'Executive Briefing',
                desc: 'A clear, jargon free summary for leadership that explains risk, cost, and timeline. Built for decision makers, not just IT teams.',
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

      {/* ══════ WHY VA DEFENSE ══════ */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Built for the Virginia Defense Ecosystem
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            From the Pentagon to Quantico, from Langley to Naval Station Norfolk, Virginia contractors work on programs that define national security. We know this landscape because we operate in it.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Intelligence & Cyber', icon: '🛡️' },
              { label: 'Shipbuilding & Naval', icon: '🚢' },
              { label: 'IT Services & Cloud', icon: '☁️' },
              { label: 'Systems Integration', icon: '🔗' },
              { label: 'Logistics & Supply Chain', icon: '📦' },
              { label: 'Training & Simulation', icon: '🎯' },
              { label: 'Weapons Systems', icon: '⚙️' },
              { label: 'Research & Development', icon: '🔬' },
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
            Trusted by Defense Contractors Across Virginia
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Real results from real companies operating in the VA defense corridor.
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
                  'We assumed our managed IT provider had us covered. Capital Cyber\'s gap assessment revealed 62 unmet controls. Without that wake up call, we would have failed our C3PAO assessment and lost our prime contract.',
                author: 'VP of Operations',
                company: 'IT Services Contractor, Fairfax VA',
              },
              {
                quote:
                  'The gap assessment was thorough but never overwhelming. They explained every finding in plain language and gave us a realistic timeline. We closed all gaps in 10 months and certified on the first attempt.',
                author: 'CISO',
                company: 'Systems Integrator, Arlington VA',
              },
              {
                quote:
                  'Rick and his team know the Virginia defense market inside and out. They understood our DFARS obligations immediately and tailored the assessment to our specific contract requirements.',
                author: 'Program Manager',
                company: 'Defense Logistics Firm, Hampton Roads VA',
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
            How Our Gap Assessment Works
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Straightforward. Thorough. Built for speed.
          </p>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Book a Call with Rick',
                desc: 'Free consultation to understand your contracts, your environment, and your timeline. No sales pitch. Just answers.',
              },
              {
                step: '02',
                title: 'Scoping & Discovery',
                desc: 'We identify your CUI boundaries, map data flows, and define the assessment scope. This prevents wasted effort and ensures accuracy.',
              },
              {
                step: '03',
                title: 'Technical & Administrative Review',
                desc: 'Our team evaluates your technical infrastructure, policies, and documentation against all 110 NIST 800-171 controls.',
              },
              {
                step: '04',
                title: 'Report & Remediation Roadmap',
                desc: 'You receive a prioritized findings report, executive summary, and a clear remediation plan with timelines and cost estimates.',
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
            <p className="font-bold text-2xl text-navy-800">Here's the reality.</p>
            <p>Virginia defense contractors built this industry.</p>
            <p>You're the backbone of programs that keep this country safe.</p>
            <p>But the DoD has made something very clear: trust must be verified.</p>
            <p className="font-semibold text-navy-800 pt-2">CMMC is how they verify it.</p>
            <p>A gap assessment takes weeks, not months. It gives you clarity instead of anxiety.</p>
            <p>It shows you the exact distance between where you are and where you need to be.</p>
            <p className="pt-2">
              The contractors who start now will certify first.<br />
              They will win recompetes.<br />
              They will be the ones primes call when new work drops.
            </p>
            <p className="font-bold text-navy-800 text-2xl pt-4">Don't wait until you lose a contract to find out where your gaps are.</p>
          </div>
        </div>
      </section>

      {/* ══════ LEAD CAPTURE FORM ══════ */}
      <section id="free-assessment" className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your Free CMMC Gap Assessment Consultation
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Fill out the form below and our team will contact you within 24 hours to discuss your gap assessment scope and timeline.
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
              data-form-name="CMMC VA Defense Gap Assessment"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="CMMC VA Defense Gap Assessment Form"
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

      {/* ══════ VA-SPECIFIC FOOTER SECTION ══════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving All of Virginia</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Northern Virginia, Hampton Roads, Richmond, Charlottesville, and the entire defense corridor. Arlington, Fairfax, Reston, McLean, Tysons, Norfolk, Virginia Beach, and beyond. On site and remote support available.
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
                CMMC Ready Now is proudly powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=locationpage" className="font-bold text-navy-800 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Capital Cyber</a> — a cybersecurity firm specializing in CMMC, NIST 800-171, and defense contractor compliance.
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
