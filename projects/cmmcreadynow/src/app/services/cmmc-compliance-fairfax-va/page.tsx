import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Building2, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

/* ───────────────── SEO Metadata ───────────────── */
export const metadata: Metadata = {
  title: 'CMMC Compliance Services in Fairfax, Virginia | CMMC Ready Now',
  description:
    'Fairfax County defense contractors: Home to the largest defense corridor in America. Over 15,000 firms compete for DoD contracts. CMMC compliance gives you the edge. Expert consulting in Fairfax VA.',
  keywords: [
    'CMMC compliance Fairfax VA',
    'Fairfax County CMMC services',
    'DFARS Fairfax Virginia',
    'NIST 800-171 Fairfax',
    'defense contractor cybersecurity Fairfax',
    'CMMC certification Fairfax County',
    'Fairfax CMMC consultant',
    'defense corridor compliance',
    'Northern Virginia CMMC',
    'Fairfax cybersecurity services',
  ],
  openGraph: {
    title: 'CMMC Compliance in Fairfax, VA | Defense Corridor Ready',
    description:
      'Fairfax County hosts the largest defense contractor ecosystem in America. CMMC compliance is your competitive advantage in this crowded market.',
    type: 'website',
  },
};

/* ───────────────── Page Component ───────────────── */
export default function CMMCComplianceFairfaxVA() {
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
            <span className="text-red-300 text-sm font-semibold">Fairfax Defense Contractors: Competition Is Fierce. Be Ready First.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Fairfax Defense Contractors:<br />
            <span className="text-accent">Stand Out in the Crowd</span>
          </h1>

          {/* Viral LinkedIn-style hook */}
          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>Fairfax County hosts 15,000+ defense contractors.</p>
            <p>Your competition is literally down the street.</p>
            <p>Everyone has clearances. Everyone has past performance.</p>
            <p className="text-white font-semibold pt-2">CMMC compliance is your differentiator. Be ready before they are.</p>
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
            Fairfax County: America's<br className="hidden sm:block" /> Defense Capital
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>Fairfax County is home to the largest concentration of defense contractors in the United States.</p>
            <p>Over <strong>15,000 defense firms</strong> operate from Route 50 to Route 28, from I-66 to I-495.</p>
            <p>The county generates more than <strong>$32 billion</strong> in annual federal contracts, representing nearly 20% of all DoD spending.</p>
            <p className="font-semibold text-navy-800">In this crowded market, CMMC compliance is not just required. It's competitive advantage.</p>
            <p>
              Fairfax contractors span every defense discipline: IT services, systems integration, cybersecurity, logistics, engineering, and professional services.
              When CMMC requirements hit, every firm will be scrambling for the same C3PAO assessors.
            </p>
            <p>
              DFARS clause 252.204-7021 is appearing in Fairfax contracts across all agencies. Army, Navy, Air Force, Space Force, and DOD agencies.
              The question isn't whether you need CMMC compliance. The question is whether you'll be ready before your competitors.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: '$32 Billion',
                desc: 'Annual federal contracts in Fairfax County. CMMC eligibility determines who gets to compete.',
              },
              {
                icon: AlertTriangle,
                title: '15,000 Firms',
                desc: 'Defense contractors in Fairfax County. All competing for limited assessor availability and contract opportunities.',
              },
              {
                icon: Building2,
                title: 'Route 50 to 28',
                desc: 'The defense corridor stretches across Fairfax. Every major prime contractor has operations here.',
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
              CMMC Compliance Services<br className="hidden sm:block" /> for Fairfax Defense Contractors
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              CMMC Ready Now, powered by Capital Cyber, delivers comprehensive CMMC compliance services designed for the competitive Fairfax market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'CMMC Level 2 Gap Assessment',
                desc: 'Comprehensive evaluation of all 110 NIST 800-171 controls. Technical infrastructure, administrative policies, and physical security requirements.',
              },
              {
                title: 'CUI Inventory & Data Mapping',
                desc: 'Complete inventory of Controlled Unclassified Information across your enterprise. Data flow mapping, storage analysis, and access control review.',
              },
              {
                title: 'Technical Implementation',
                desc: 'Network segmentation, endpoint protection, vulnerability management, incident response, and all technical controls required for CMMC Level 2.',
              },
              {
                title: 'Policy & Documentation',
                desc: 'System Security Plans, incident response procedures, access control policies, and all documentation required by C3PAO assessors.',
              },
              {
                title: 'Assessment Preparation',
                desc: 'Mock C3PAO assessments, documentation review, and readiness validation. Ensure you pass your official assessment on the first attempt.',
              },
              {
                title: 'Competitive Advantage Strategy',
                desc: 'Position CMMC compliance as a competitive differentiator in Fairfax proposals. Win more contracts by being ready first.',
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

      {/* ══════ WHY FAIRFAX DEFENSE ══════ */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Built for the Fairfax Defense Ecosystem
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            From Reston to Annandale, from Burke to Vienna, Fairfax County hosts every type of defense contractor. We understand this competitive landscape.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'IT Services & Cloud', icon: '☁️' },
              { label: 'Systems Integration', icon: '🔗' },
              { label: 'Cybersecurity Services', icon: '🛡️' },
              { label: 'Professional Services', icon: '💼' },
              { label: 'Engineering & R&D', icon: '⚙️' },
              { label: 'Logistics & Supply', icon: '📦' },
              { label: 'Training & Simulation', icon: '🎯' },
              { label: 'Program Management', icon: '📊' },
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
            Trusted by Fairfax Defense Contractors
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Real results from real companies competing in the Fairfax defense market.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {[
              { label: 'CMMC Registered Practitioner', icon: Shield },
              { label: 'NIST SP 800-171 Experts', icon: Award },
              { label: 'Fairfax Defense Trusted', icon: Award },
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
                  'Competing in Fairfax means competing with the best. Capital Cyber helped us achieve CMMC certification ahead of our competitors. It\'s been a game changer for new business wins.',
                author: 'Business Development Director',
                company: 'IT Services Contractor, Fairfax VA',
              },
              {
                quote:
                  'The Fairfax market is brutal. Everyone knows everyone. Capital Cyber\'s CMMC expertise gave us credibility with clients and a real competitive edge in proposals.',
                author: 'VP of Operations',
                company: 'Systems Integrator, Fairfax County',
              },
              {
                quote:
                  'Rick understands the Fairfax defense ecosystem better than anyone. His team delivered CMMC compliance that actually improved our security posture while meeting all requirements.',
                author: 'Chief Information Officer',
                company: 'Professional Services Firm, Fairfax VA',
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
            Competitive advantage through early compliance.
          </p>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Book a Call with Rick',
                desc: 'Free consultation to understand your Fairfax operations, competitive landscape, and CMMC timeline. Defense corridor expertise from day one.',
              },
              {
                step: '02',
                title: 'CMMC Gap Assessment',
                desc: 'Complete evaluation of all 110 NIST 800-171 controls. CUI scoping, technical review, and competitive positioning analysis for Fairfax contractors.',
              },
              {
                step: '03',
                title: 'Implementation & Remediation',
                desc: 'Technical controls deployment, policy development, and staff training. Everything needed to achieve CMMC Level 2 compliance ahead of competitors.',
              },
              {
                step: '04',
                title: 'C3PAO Assessment & Certification',
                desc: 'Mock assessment, final readiness validation, and support through your official C3PAO assessment. Achieve certification and competitive advantage.',
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
              Get Your Competitive Edge <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ LINKEDIN-STYLE EMOTIONAL CLOSE ══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-lg sm:text-xl text-gray-800 space-y-4 leading-relaxed">
            <p className="font-bold text-2xl text-navy-800">Fairfax County built the defense contracting industry.</p>
            <p>You compete with 15,000 other firms every single day.</p>
            <p>Your competition has the same clearances, the same past performance, the same capabilities.</p>
            <p>Everyone is smart. Everyone is qualified. Everyone wants the same contracts.</p>
            <p className="font-semibold text-navy-800 pt-2">CMMC compliance is your chance to break away from the pack.</p>
            <p>While others are still figuring out what CMMC means, you can already be certified and ready.</p>
            <p>While they scramble for assessor appointments, you can be winning new contracts.</p>
            <p className="pt-2">
              The first firms to achieve CMMC certification in Fairfax will set the standard.<br />
              They will be the ones primes call first for new opportunities.<br />
              They will be the benchmark that others try to reach.
            </p>
            <p className="font-bold text-navy-800 text-2xl pt-4">In a market this competitive, being ready first is everything.</p>
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
              Contact our team to discuss your CMMC compliance strategy and timeline. Fairfax defense corridor expertise available immediately.
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
              data-form-name="CMMC Fairfax Defense Contractor Form"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="CMMC Fairfax Defense Contractor Form"
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

      {/* ══════ FAIRFAX-SPECIFIC FOOTER SECTION ══════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving Fairfax County Defense Contractors</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fairfax City, Vienna, Reston, Burke, Annandale, Springfield, and the entire Fairfax County defense corridor. On site support for Route 50 to Route 28 contractors.
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
                CMMC Ready Now is proudly powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=locationpage" className="font-bold text-navy-800 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Capital Cyber</a>. A cybersecurity firm helping Fairfax County defense contractors navigate NIST 800-171 compliance and achieve CMMC certification.
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