import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Building2, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

/* ───────────────── SEO Metadata ───────────────── */
export const metadata: Metadata = {
  title: 'CMMC Compliance Services in Tysons, Virginia | CMMC Ready Now',
  description:
    'Tysons defense contractors: Corporate headquarters of major defense primes. Where billion-dollar decisions are made. CMMC compliance protects enterprise operations. Expert consulting in Tysons VA.',
  keywords: [
    'CMMC compliance Tysons VA',
    'Tysons defense headquarters',
    'corporate defense CMMC',
    'DFARS Tysons Virginia',
    'NIST 800-171 Tysons',
    'defense prime contractor compliance',
    'CMMC certification Tysons',
    'Tysons CMMC consultant',
    'enterprise cybersecurity Tysons',
    'defense corporate HQ compliance',
  ],
  openGraph: {
    title: 'CMMC Compliance in Tysons, VA | Defense Corporate HQ Ready',
    description:
      'Tysons hosts the corporate headquarters of major defense contractors. Enterprise-scale CMMC compliance for billion-dollar defense operations.',
    type: 'website',
  },
};

/* ───────────────── Page Component ───────────────── */
export default function CMMCComplianceTysonsVA() {
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
            <span className="text-red-300 text-sm font-semibold">Tysons Corporate HQ: Enterprise Scale Requires Enterprise Security.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Tysons Defense Leaders:<br />
            <span className="text-accent">Set the Standard</span>
          </h1>

          {/* Viral LinkedIn-style hook */}
          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>Tysons is where defense industry leadership resides.</p>
            <p>Your headquarters tower over the Beltway and set policy for thousands of employees.</p>
            <p>Billion-dollar program decisions are made in your conference rooms.</p>
            <p className="text-white font-semibold pt-2">When you lead the industry, your CMMC compliance becomes the industry benchmark.</p>
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
              Lead the Industry
            </a>
          </div>
        </div>
      </section>

      {/* ══════ PROBLEM / PAIN SECTION ══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-8 text-center">
            Tysons: Corporate Command Center<br className="hidden sm:block" /> of Defense Industry
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>Tysons Corner hosts the corporate headquarters of the defense industry's biggest names: SAIC, Booz Allen Hamilton, General Dynamics IT, and dozens more.</p>
            <p>These <strong>Fortune 500 defense companies</strong> collectively employ over 100,000 people and generate more than $45 billion in annual defense revenue.</p>
            <p>Tysons represents the business nerve center of American defense contracting, where corporate strategy meets national security requirements.</p>
            <p className="font-semibold text-navy-800">As industry leaders, Tysons companies set the cybersecurity standard for the entire ecosystem.</p>
            <p>
              From Tysons Corner Center to the Silver Line corridor, corporate headquarters coordinate global operations across hundreds of contracts, thousands of employees, and millions of data points.
              Enterprise-scale operations require enterprise-scale security compliance.
            </p>
            <p>
              DFARS clause 252.204-7021 appears in major prime contracts that flow from Tysons headquarters to subcontractors nationwide.
              Your CMMC compliance posture directly influences supply chain requirements and industry standards.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: '$45 Billion',
                desc: 'Annual defense revenue generated by Tysons headquarters. Enterprise cybersecurity protects enterprise operations.',
              },
              {
                icon: AlertTriangle,
                title: 'Fortune 500',
                desc: 'Major defense contractors headquartered in Tysons. Corporate leaders in cybersecurity compliance set industry standards.',
              },
              {
                icon: Building2,
                title: '100,000+ Employees',
                desc: 'Defense workforce coordinated from Tysons. Enterprise security policies protect global operations and supply chains.',
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
              Enterprise CMMC Compliance<br className="hidden sm:block" /> for Tysons Corporate Leaders
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              CMMC Ready Now, powered by Capital Cyber, delivers enterprise-scale CMMC compliance services for corporate headquarters and global operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Enterprise CMMC Strategy',
                desc: 'Corporate-level CMMC compliance strategy for multi-billion dollar operations. Global implementation across business units, subsidiaries, and joint ventures.',
              },
              {
                title: 'Supply Chain CMMC Integration',
                desc: 'CMMC requirements flow-down to subcontractors and suppliers. Corporate policies that ensure supply chain cybersecurity compliance at scale.',
              },
              {
                title: 'Corporate Risk Management',
                desc: 'Board-level cybersecurity risk assessments for CMMC compliance. Executive reporting and governance frameworks for enterprise operations.',
              },
              {
                title: 'Multi-Contract CMMC Coordination',
                desc: 'CMMC compliance across hundreds of simultaneous contracts. Centralized cybersecurity management for diverse program requirements.',
              },
              {
                title: 'Global Implementation Program',
                desc: 'CMMC compliance rollout across domestic and international operations. Scalable implementation for Fortune 500 defense contractors.',
              },
              {
                title: 'Industry Leadership Positioning',
                desc: 'CMMC compliance that establishes your company as the cybersecurity leader in defense contracting. Competitive differentiation at enterprise scale.',
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

      {/* ══════ WHY TYSONS CORPORATE ══════ */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Built for Tysons Corporate Excellence
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            From Tysons Corner to the Silver Line, corporate headquarters coordinate the defense industry's most complex operations. We understand enterprise requirements.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Corporate Strategy', icon: '🏢' },
              { label: 'Program Management', icon: '📊' },
              { label: 'Supply Chain Operations', icon: '🔗' },
              { label: 'Business Development', icon: '📈' },
              { label: 'Risk Management', icon: '⚖️' },
              { label: 'Global Operations', icon: '🌍' },
              { label: 'Technology Leadership', icon: '💻' },
              { label: 'Merger & Acquisition', icon: '🤝' },
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
            Trusted by Tysons Corporate Leaders
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Real results from real industry leaders operating at enterprise scale.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {[
              { label: 'CMMC Registered Practitioner', icon: Shield },
              { label: 'Enterprise Security Expert', icon: Award },
              { label: 'Fortune 500 Trusted', icon: Award },
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
                  'As a Fortune 500 defense contractor, our CMMC compliance had to be flawless across 200+ contracts. Capital Cyber delivered enterprise-scale cybersecurity that actually improved our competitive position.',
                author: 'Chief Information Security Officer',
                company: 'Fortune 500 Defense Contractor, Tysons VA',
              },
              {
                quote:
                  'Managing CMMC compliance across global operations is complex. Capital Cyber understood our scale and delivered a framework that works from headquarters to field offices worldwide.',
                author: 'VP of Corporate Risk',
                company: 'Global Defense Company, Tysons VA',
              },
              {
                quote:
                  'Rick\'s team thinks at the corporate level. They understood our board requirements, our supply chain obligations, and our competitive positioning. Enterprise cybersecurity done right.',
                author: 'Senior Vice President',
                company: 'Defense Industry Leader, Tysons VA',
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
            How Our Enterprise CMMC Process Works
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Corporate-scale compliance for industry leadership.
          </p>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Executive Strategy Session',
                desc: 'C-suite consultation on enterprise CMMC strategy. Understand corporate objectives, risk tolerance, and competitive positioning for cybersecurity leadership.',
              },
              {
                step: '02',
                title: 'Enterprise Assessment',
                desc: 'Global CMMC gap analysis across all business units, subsidiaries, and operations. Corporate-level risk assessment and compliance roadmap development.',
              },
              {
                step: '03',
                title: 'Corporate Implementation',
                desc: 'Enterprise-scale CMMC implementation across global operations. Coordinated deployment, supply chain integration, and corporate governance frameworks.',
              },
              {
                step: '04',
                title: 'Industry Leadership Certification',
                desc: 'Corporate CMMC certification program that positions your company as the cybersecurity leader in defense contracting. Market differentiation at scale.',
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
              Lead the Industry <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ LINKEDIN-STYLE EMOTIONAL CLOSE ══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-lg sm:text-xl text-gray-800 space-y-4 leading-relaxed">
            <p className="font-bold text-2xl text-navy-800">Tysons corporate leaders built the modern defense industry.</p>
            <p>Your headquarters coordinate billion-dollar programs across the globe.</p>
            <p>Your decisions influence thousands of employees and hundreds of suppliers.</p>
            <p>When you speak, the entire industry listens.</p>
            <p className="font-semibold text-navy-800 pt-2">Your CMMC compliance strategy becomes the industry standard.</p>
            <p>While smaller contractors struggle to understand requirements, you have the opportunity to define them.</p>
            <p>While others follow compliance minimums, you can establish cybersecurity maximums.</p>
            <p className="pt-2">
              The corporate leaders who achieve CMMC certification first will shape the future of defense contracting.<br />
              They will set supply chain requirements for thousands of companies.<br />
              They will define what cybersecurity excellence means in our industry.
            </p>
            <p className="font-bold text-navy-800 text-2xl pt-4">You lead from Tysons. Make CMMC compliance your next leadership statement.</p>
          </div>
        </div>
      </section>

      {/* ══════ LEAD CAPTURE FORM ══════ */}
      <section id="free-assessment" className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your Enterprise CMMC Strategy Session
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Contact our team to discuss enterprise-scale CMMC compliance strategy. Tysons corporate headquarters expertise available immediately.
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
              data-form-name="CMMC Tysons Corporate HQ Form"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="CMMC Tysons Corporate HQ Form"
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

      {/* ══════ TYSONS-SPECIFIC FOOTER SECTION ══════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving Tysons Corporate Headquarters</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tysons Corner, Tysons Galleria, Silver Line corridor, and the broader corporate campus area. Specialized support for Fortune 500 defense contractors and global operations.
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
                CMMC Ready Now is proudly powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=locationpage" className="font-bold text-navy-800 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Capital Cyber</a>. A cybersecurity firm helping Tysons corporate leaders navigate NIST 800-171 compliance and achieve enterprise-scale CMMC certification.
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