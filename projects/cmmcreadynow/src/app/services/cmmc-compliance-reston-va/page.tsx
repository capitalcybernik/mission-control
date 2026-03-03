import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Building2, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

/* ───────────────── SEO Metadata ───────────────── */
export const metadata: Metadata = {
  title: 'CMMC Compliance Services in Reston, Virginia | CMMC Ready Now',
  description:
    'Reston defense contractors: Innovation hub meets defense technology. Home to cutting-edge tech firms serving DoD. CMMC compliance protects your competitive edge. Expert consulting in Reston VA.',
  keywords: [
    'CMMC compliance Reston VA',
    'Reston tech defense contractors',
    'DFARS Reston Virginia',
    'NIST 800-171 Reston',
    'defense technology cybersecurity Reston',
    'CMMC certification Reston',
    'Reston CMMC consultant',
    'tech hub defense compliance',
    'Dulles corridor CMMC',
    'Reston cybersecurity services',
  ],
  openGraph: {
    title: 'CMMC Compliance in Reston, VA | Tech Defense Hub Ready',
    description:
      'Reston combines Silicon Valley innovation with defense technology excellence. CMMC compliance preserves your competitive advantage in this tech hub.',
    type: 'website',
  },
};

/* ───────────────── Page Component ───────────────── */
export default function CMMCComplianceRestonVA() {
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
            <span className="text-red-300 text-sm font-semibold">Reston Tech Hub: Innovation Requires Protection. CMMC Is Here.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Reston Defense Technology:<br />
            <span className="text-accent">Innovate Securely</span>
          </h1>

          {/* Viral LinkedIn-style hook */}
          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>Reston is where innovation meets national security.</p>
            <p>Your tech solutions power the next generation of defense capabilities.</p>
            <p>From AI to cloud platforms, you build what others only dream about.</p>
            <p className="text-white font-semibold pt-2">CMMC compliance ensures your innovations stay protected and your contracts stay secure.</p>
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
              Secure Your Innovation
            </a>
          </div>
        </div>
      </section>

      {/* ══════ PROBLEM / PAIN SECTION ══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-8 text-center">
            Reston: Where Technology<br className="hidden sm:block" /> Meets Defense Innovation
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>Reston is Virginia's premier technology hub, hosting over 1,200 tech companies within the Dulles Technology Corridor.</p>
            <p>More than <strong>400 defense technology firms</strong> operate from Reston Town Center to Lake Anne, developing cutting-edge solutions for the Department of Defense.</p>
            <p>Reston companies generate over <strong>$8.5 billion</strong> in annual technology contracts, from cloud computing to artificial intelligence to cybersecurity platforms.</p>
            <p className="font-semibold text-navy-800">Your innovation advantage depends on maintaining the trust of your defense clients.</p>
            <p>
              Reston contractors lead in emerging technologies: machine learning, data analytics, cloud platforms, DevSecOps, and next-generation cybersecurity.
              These advanced capabilities require advanced security compliance.
            </p>
            <p>
              DFARS clause 252.204-7021 is appearing in technology contracts across the board. Cloud services, software development, data analytics, and AI solutions.
              Your technological edge means nothing if you cannot demonstrate cybersecurity compliance.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: '$8.5 Billion',
                desc: 'Annual defense technology contracts from Reston. CMMC compliance protects access to this innovation pipeline.',
              },
              {
                icon: AlertTriangle,
                title: '400+ Tech Firms',
                desc: 'Defense technology companies in the Dulles corridor. All competing for the same cutting-edge contracts.',
              },
              {
                icon: Building2,
                title: 'Innovation Hub',
                desc: 'Reston leads in AI, cloud, and emerging tech. Advanced solutions require advanced security compliance.',
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
              CMMC Compliance for<br className="hidden sm:block" /> Reston Technology Contractors
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              CMMC Ready Now, powered by Capital Cyber, delivers CMMC compliance services designed for technology innovators in the defense space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Cloud-Native CMMC Compliance',
                desc: 'CMMC assessments tailored for cloud-first architectures. AWS, Azure, and GCP environments with proper CUI handling and security controls.',
              },
              {
                title: 'DevSecOps Integration',
                desc: 'Embedding NIST 800-171 controls into development pipelines. Secure coding practices, automated compliance checks, and continuous monitoring.',
              },
              {
                title: 'AI/ML Security Framework',
                desc: 'CMMC compliance for artificial intelligence and machine learning platforms. Data protection, model security, and algorithmic accountability.',
              },
              {
                title: 'Software Supply Chain Security',
                desc: 'Third-party component analysis, open source security, and software bill of materials (SBOM) management for CMMC compliance.',
              },
              {
                title: 'Technology-Focused Gap Assessment',
                desc: 'CMMC readiness evaluation for technology platforms. API security, microservices architecture, and container security compliance.',
              },
              {
                title: 'Innovation-Friendly Implementation',
                desc: 'CMMC compliance that enhances rather than hinders innovation. Security by design principles that protect intellectual property.',
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

      {/* ══════ WHY RESTON TECH ══════ */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Built for Reston's Technology Ecosystem
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            From Reston Town Center to the Dulles Corridor, technology companies here develop solutions that define the future of defense. We protect that innovation.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Cloud Platforms', icon: '☁️' },
              { label: 'AI & Machine Learning', icon: '🤖' },
              { label: 'Cybersecurity Solutions', icon: '🛡️' },
              { label: 'Data Analytics', icon: '📊' },
              { label: 'Software Development', icon: '💻' },
              { label: 'DevSecOps Platforms', icon: '⚙️' },
              { label: 'Enterprise Solutions', icon: '🏢' },
              { label: 'Emerging Technologies', icon: '🚀' },
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
            Trusted by Reston Technology Companies
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Real results from real innovators in the Dulles Technology Corridor.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {[
              { label: 'CMMC Registered Practitioner', icon: Shield },
              { label: 'Cloud Security Certified', icon: Award },
              { label: 'Tech Innovation Focused', icon: Award },
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
                  'Our cloud platform serves sensitive defense data. Capital Cyber designed a CMMC compliance framework that actually enhanced our security architecture while meeting all requirements.',
                author: 'Chief Technology Officer',
                company: 'Cloud Platform Company, Reston VA',
              },
              {
                quote:
                  'Innovation moves fast in Reston. Capital Cyber understood that our CMMC compliance had to keep up with our development velocity. They delivered security that enables innovation.',
                author: 'VP of Engineering',
                company: 'AI/ML Firm, Reston VA',
              },
              {
                quote:
                  'Rick\'s team speaks both cybersecurity and technology fluently. They understood our architecture, our challenges, and our competitive advantage. CMMC compliance that actually works.',
                author: 'Founder & CEO',
                company: 'Defense Tech Startup, Reston VA',
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
            How Our CMMC Process Works for Tech Companies
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Technology-native compliance for innovation leaders.
          </p>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Technology Assessment Call',
                desc: 'Free consultation focused on your technology stack, architecture, and innovation goals. Understand CMMC requirements in the context of modern development.',
              },
              {
                step: '02',
                title: 'Cloud-Native Gap Analysis',
                desc: 'CMMC assessment designed for cloud platforms, microservices, and modern architectures. Evaluate security controls without disrupting innovation cycles.',
              },
              {
                step: '03',
                title: 'DevSecOps Integration',
                desc: 'Implement CMMC controls within your development pipeline. Automated compliance, continuous monitoring, and security by design principles.',
              },
              {
                step: '04',
                title: 'Innovation-Friendly Certification',
                desc: 'C3PAO assessment preparation that highlights your technology leadership. Achieve CMMC certification while maintaining competitive advantage.',
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
              Secure Your Innovation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ LINKEDIN-STYLE EMOTIONAL CLOSE ══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-lg sm:text-xl text-gray-800 space-y-4 leading-relaxed">
            <p className="font-bold text-2xl text-navy-800">Reston built the future of defense technology.</p>
            <p>Your innovations power the next generation of national security capabilities.</p>
            <p>From AI platforms to cloud solutions, you create what the Pentagon needs most.</p>
            <p>Your technology advantage is your competitive moat.</p>
            <p className="font-semibold text-navy-800 pt-2">CMMC compliance protects that moat and keeps you in the game.</p>
            <p>While others treat compliance as a checkbox, you can make it a competitive advantage.</p>
            <p>While they struggle to retrofit security into legacy systems, you can build it in from day one.</p>
            <p className="pt-2">
              The technology companies that achieve CMMC certification first will define the market.<br />
              They will be the platforms that others integrate with.<br />
              They will set the standard for secure innovation in defense.
            </p>
            <p className="font-bold text-navy-800 text-2xl pt-4">Don't let compliance slow down innovation. Make it accelerate your advantage.</p>
          </div>
        </div>
      </section>

      {/* ══════ LEAD CAPTURE FORM ══════ */}
      <section id="free-assessment" className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your Technology-Focused CMMC Assessment
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Contact our team to discuss CMMC compliance for your technology platform. Dulles Corridor innovation expertise available immediately.
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
              data-form-name="CMMC Reston Technology Contractor Form"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="CMMC Reston Technology Contractor Form"
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

      {/* ══════ RESTON-SPECIFIC FOOTER SECTION ══════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving Reston Technology Corridor</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reston Town Center, Lake Anne, North Point, and the entire Dulles Technology Corridor. Specialized support for cloud-native and modern technology platforms.
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
                CMMC Ready Now is proudly powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=locationpage" className="font-bold text-navy-800 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Capital Cyber</a>. A cybersecurity firm helping Reston technology companies navigate NIST 800-171 compliance and achieve CMMC certification.
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