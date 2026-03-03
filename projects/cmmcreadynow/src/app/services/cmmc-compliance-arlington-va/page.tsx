import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Building2, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

/* ───────────────── SEO Metadata ───────────────── */
export const metadata: Metadata = {
  title: 'CMMC Compliance Services in Arlington, Virginia | CMMC Ready Now',
  description:
    'Arlington defense contractors: Home to the Pentagon and DoD leadership. CMMC compliance is non-negotiable when you operate in the epicenter of U.S. defense. Expert CMMC consulting steps from Pentagon City. Get ready now.',
  keywords: [
    'CMMC compliance Arlington VA',
    'CMMC Pentagon contractors',
    'DFARS Arlington Virginia',
    'NIST 800-171 Arlington',
    'defense contractor cybersecurity Arlington',
    'CMMC certification Arlington',
    'Pentagon contractor compliance',
    'Arlington CMMC consultant',
    'Rosslyn defense contractors',
    'Crystal City CMMC services',
  ],
  openGraph: {
    title: 'CMMC Compliance in Arlington, VA | Pentagon Contractor Ready',
    description:
      'Arlington sits at the heart of U.S. defense. Pentagon proximity means maximum visibility. CMMC compliance is not optional for Arlington contractors.',
    type: 'website',
  },
};

/* ───────────────── Page Component ───────────────── */
export default function CMMCComplianceArlingtonVA() {
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
            <span className="text-red-300 text-sm font-semibold">Pentagon Contractors: CMMC Is Here. Are You Ready?</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Arlington Defense Contractors:<br />
            <span className="text-accent">The Pentagon Is Watching</span>
          </h1>

          {/* Viral LinkedIn-style hook */}
          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>You work minutes from the Pentagon.</p>
            <p>Your offices line the Rosslyn and Crystal City corridors.</p>
            <p>DoD leadership drives past your building every day.</p>
            <p className="text-white font-semibold pt-2">When CMMC enforcement arrives, Arlington will be ground zero. No exceptions, no delays.</p>
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
              Get Your CMMC Assessment
            </a>
          </div>
        </div>
      </section>

      {/* ══════ PROBLEM / PAIN SECTION ══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-8 text-center">
            Arlington: Where Defense Policy<br className="hidden sm:block" /> Becomes Reality
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>Arlington County hosts the Pentagon, the Defense Intelligence Agency, and hundreds of defense contractors within a 10-mile radius.</p>
            <p>Over <strong>2,400 defense firms</strong> operate in Arlington alone, generating more than $18 billion in annual DoD contracts.</p>
            <p>From Rosslyn to Crystal City, from Pentagon City to Ballston, Arlington is the epicenter of defense decision making.</p>
            <p className="font-semibold text-navy-800">And proximity to the Pentagon means maximum visibility when CMMC audits begin.</p>
            <p>
              Arlington contractors work on the most sensitive programs in the defense portfolio. Intelligence systems, command and control, strategic planning.
              The DoD expects Arlington firms to lead by example in cybersecurity compliance.
            </p>
            <p>
              DFARS clause 252.204-7021 is already appearing in new Arlington contracts. No CMMC certification means no contract renewals.
              The question isn't if compliance is required. The question is whether you're ready.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: '$18 Billion',
                desc: 'Annual DoD contract value in Arlington. Losing CMMC eligibility means losing access to this pipeline.',
              },
              {
                icon: AlertTriangle,
                title: '2,400 Firms',
                desc: 'Defense contractors in Arlington County competing for limited C3PAO assessor slots.',
              },
              {
                icon: Building2,
                title: 'Pentagon Adjacent',
                desc: 'Maximum visibility means maximum expectations. Arlington contractors cannot afford compliance failures.',
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
              CMMC Compliance Services<br className="hidden sm:block" /> for Arlington Defense Contractors
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              CMMC Ready Now, powered by Capital Cyber, delivers comprehensive CMMC compliance services tailored for Pentagon corridor contractors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'CMMC Level 2 Gap Assessment',
                desc: 'Complete evaluation of all 110 NIST 800-171 controls across your environment. Network security, access controls, incident response, and system integrity.',
              },
              {
                title: 'CUI Data Flow Mapping',
                desc: 'Identify where Controlled Unclassified Information resides, how it moves, and who accesses it. Essential for scoping your CMMC assessment correctly.',
              },
              {
                title: 'Technical Remediation',
                desc: 'Implementation of technical controls including network segmentation, endpoint protection, vulnerability management, and security monitoring.',
              },
              {
                title: 'Policy Development & SSP Creation',
                desc: 'System Security Plans, incident response procedures, and administrative controls that meet C3PAO expectations and DoD requirements.',
              },
              {
                title: 'C3PAO Assessment Preparation',
                desc: 'Mock assessments, documentation review, and readiness validation to ensure you pass your official CMMC assessment on the first attempt.',
              },
              {
                title: 'Ongoing Compliance Management',
                desc: 'Continuous monitoring, annual reviews, and compliance maintenance to keep your CMMC certification current and contract-ready.',
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

      {/* ══════ WHY ARLINGTON DEFENSE ══════ */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Built for the Arlington Defense Ecosystem
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            From the Pentagon to DIA headquarters, from Rosslyn defense firms to Crystal City contractors, Arlington is where defense strategy becomes reality. We understand this unique environment.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Intelligence & Analytics', icon: '🔍' },
              { label: 'Command & Control', icon: '🎯' },
              { label: 'Defense IT Services', icon: '💻' },
              { label: 'Strategic Consulting', icon: '📊' },
              { label: 'Systems Engineering', icon: '⚙️' },
              { label: 'Program Management', icon: '📋' },
              { label: 'Cyber Operations', icon: '🛡️' },
              { label: 'Mission Support', icon: '🚀' },
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
            Trusted by Arlington Defense Contractors
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Real results from real companies operating in the Pentagon corridor.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {[
              { label: 'CMMC Registered Practitioner', icon: Shield },
              { label: 'NIST SP 800-171 Experts', icon: Award },
              { label: 'Pentagon Contractor Trusted', icon: Award },
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
                  'Operating this close to the Pentagon, we knew CMMC compliance had to be perfect. Capital Cyber\'s team understood the stakes and delivered a flawless assessment process. We certified on schedule.',
                author: 'Chief Technology Officer',
                company: 'Intelligence Contractor, Rosslyn VA',
              },
              {
                quote:
                  'The proximity pressure is real in Arlington. Every defense contractor is watching what others do. Capital Cyber helped us lead by example with our CMMC certification.',
                author: 'VP of Security',
                company: 'IT Services Firm, Crystal City VA',
              },
              {
                quote:
                  'Rick and his team know the Arlington defense ecosystem better than anyone. They understand our client base, our contracts, and what the Pentagon expects from contractors like us.',
                author: 'Program Director',
                company: 'Defense Consulting, Pentagon City VA',
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
            How Our CMMC Compliance Process Works
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Proven methodology. Pentagon-ready results.
          </p>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Book a Call with Rick',
                desc: 'Free consultation to understand your Arlington operations, contract requirements, and compliance timeline. Pentagon corridor expertise from day one.',
              },
              {
                step: '02',
                title: 'CMMC Gap Assessment',
                desc: 'Complete evaluation of all 110 NIST 800-171 controls. CUI scoping, technical architecture review, and policy assessment tailored for Arlington defense contractors.',
              },
              {
                step: '03',
                title: 'Remediation & Implementation',
                desc: 'Technical controls implementation, policy development, and staff training. Everything needed to achieve CMMC Level 2 compliance.',
              },
              {
                step: '04',
                title: 'C3PAO Assessment & Certification',
                desc: 'Mock assessment, final readiness review, and support through your official C3PAO assessment. Achieve CMMC certification on the first attempt.',
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
            <p className="font-bold text-2xl text-navy-800">Arlington contractors built the modern defense industry.</p>
            <p>You sit in the shadow of the Pentagon.</p>
            <p>Your work shapes national security policy.</p>
            <p>DoD leadership knows your companies by name.</p>
            <p className="font-semibold text-navy-800 pt-2">When CMMC enforcement begins, Arlington will be the first stop.</p>
            <p>Every eye will be on Pentagon corridor contractors. How you handle compliance will set the standard for the entire industry.</p>
            <p>You can lead the way, or you can scramble to catch up.</p>
            <p className="pt-2">
              The contractors who start CMMC compliance now will be the ones winning new contracts.<br />
              They will be the prime contractors that others want to partner with.<br />
              They will define what Pentagon-ready cybersecurity looks like.
            </p>
            <p className="font-bold text-navy-800 text-2xl pt-4">Don't let proximity to power become a liability. Make it your advantage.</p>
          </div>
        </div>
      </section>

      {/* ══════ LEAD CAPTURE FORM ══════ */}
      <section id="free-assessment" className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your CMMC Compliance Assessment
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Contact our team to discuss your CMMC compliance needs and timeline. Pentagon corridor expertise available immediately.
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
              data-form-name="CMMC Arlington Defense Contractor Form"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="CMMC Arlington Defense Contractor Form"
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

      {/* ══════ ARLINGTON-SPECIFIC FOOTER SECTION ══════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving Arlington Defense Contractors</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pentagon City, Crystal City, Rosslyn, Ballston, Court House, and the entire Arlington defense corridor. On site support available for Pentagon contractor facilities.
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
                CMMC Ready Now is proudly powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=locationpage" className="font-bold text-navy-800 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Capital Cyber</a>. A cybersecurity firm helping Arlington defense contractors navigate NIST 800-171 compliance and achieve CMMC certification.
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