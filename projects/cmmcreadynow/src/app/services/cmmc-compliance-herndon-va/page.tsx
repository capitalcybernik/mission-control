import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Building2, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

/* ───────────────── SEO Metadata ───────────────── */
export const metadata: Metadata = {
  title: 'CMMC Compliance Services in Herndon, Virginia | CMMC Ready Now',
  description:
    'Herndon defense contractors: Government IT corridor serving federal agencies. Cloud platforms, managed services, and enterprise IT solutions require CMMC compliance. Expert consulting in Herndon VA.',
  keywords: [
    'CMMC compliance Herndon VA',
    'government IT corridor CMMC',
    'federal IT contractor cybersecurity',
    'DFARS Herndon Virginia',
    'NIST 800-171 Herndon',
    'cloud platform CMMC compliance',
    'CMMC certification Herndon',
    'Herndon CMMC consultant',
    'Dulles corridor cybersecurity',
    'government cloud CMMC services',
  ],
  openGraph: {
    title: 'CMMC Compliance in Herndon, VA | Government IT Corridor Ready',
    description:
      'Herndon hosts the government IT corridor. Federal agencies depend on your platforms and services. CMMC compliance protects critical infrastructure.',
    type: 'website',
  },
};

/* ───────────────── Page Component ───────────────── */
export default function CMMCComplianceHerndonVA() {
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
            <span className="text-red-300 text-sm font-semibold">Government IT Corridor: Federal Agencies Depend on You. Be Ready.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Herndon Government IT Providers:<br />
            <span className="text-accent">Power Federal Operations</span>
          </h1>

          {/* Viral LinkedIn-style hook */}
          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>Herndon is the government IT nerve center.</p>
            <p>Your platforms run federal agencies. Your clouds store critical data.</p>
            <p>When government needs technology, they turn to Herndon.</p>
            <p className="text-white font-semibold pt-2">CMMC compliance protects the infrastructure that powers the federal government.</p>
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
              Secure Government IT
            </a>
          </div>
        </div>
      </section>

      {/* ══════ PROBLEM / PAIN SECTION ══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-8 text-center">
            Herndon: Government IT<br className="hidden sm:block" /> Infrastructure Hub
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>Herndon hosts the largest concentration of government IT contractors in the Washington metro area.</p>
            <p>Over <strong>800 federal IT providers</strong> operate from the Dulles Toll Road to Route 28, serving every cabinet-level agency.</p>
            <p>Herndon companies generate more than <strong>$15 billion</strong> in annual federal IT contracts, providing cloud platforms, managed services, and critical infrastructure.</p>
            <p className="font-semibold text-navy-800">Your technology platforms are mission critical infrastructure for federal operations.</p>
            <p>
              From the Department of Homeland Security to the Treasury Department, federal agencies depend on Herndon IT providers for email, data storage, enterprise applications, and cloud infrastructure.
              When your systems go down, government operations are affected.
            </p>
            <p>
              DFARS clause 252.204-7021 is now standard in federal IT contracts. Cloud services, managed security, enterprise software, and infrastructure hosting all require CMMC compliance.
              Your certification status determines your eligibility for the most lucrative government IT opportunities.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: '$15 Billion',
                desc: 'Annual federal IT contracts from Herndon. CMMC compliance unlocks access to government infrastructure opportunities.',
              },
              {
                icon: AlertTriangle,
                title: '800+ IT Providers',
                desc: 'Government IT contractors in the Dulles corridor. All competing for federal cloud and infrastructure contracts.',
              },
              {
                icon: Building2,
                title: 'Mission Critical',
                desc: 'Herndon platforms power federal operations. Agency dependence requires the highest cybersecurity standards.',
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
              CMMC Compliance for<br className="hidden sm:block" /> Herndon Government IT Providers
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              CMMC Ready Now, powered by Capital Cyber, delivers CMMC compliance services designed for government IT infrastructure and platform providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Government Cloud CMMC Compliance',
                desc: 'CMMC assessments for federal cloud platforms. AWS, Azure Government, and private cloud infrastructures with proper CUI handling and security controls.',
              },
              {
                title: 'Managed Services Security Framework',
                desc: 'CMMC compliance for IT service providers. Endpoint management, help desk operations, and infrastructure monitoring that meets federal requirements.',
              },
              {
                title: 'Federal Platform Certification',
                desc: 'CMMC compliance for enterprise platforms serving federal agencies. Email systems, collaboration tools, and business applications with proper security controls.',
              },
              {
                title: 'Multi-Tenant Security Architecture',
                desc: 'CMMC compliance for shared infrastructure platforms. Tenant isolation, data segregation, and access controls that protect multiple federal clients.',
              },
              {
                title: 'Government IT Supply Chain Security',
                desc: 'CMMC compliance across complex IT supply chains. Hardware vendors, software providers, and service integrators working together securely.',
              },
              {
                title: 'Federal Contract Readiness',
                desc: 'CMMC certification that positions your company for the largest federal IT opportunities. Contract-ready cybersecurity for government platforms.',
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

      {/* ══════ WHY HERNDON IT ══════ */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Built for the Government IT Ecosystem
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            From the Dulles Toll Road to Route 28, Herndon powers federal agency operations through technology platforms and managed services. We understand these critical requirements.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Cloud Platforms', icon: '☁️' },
              { label: 'Managed Services', icon: '🖥️' },
              { label: 'Enterprise Software', icon: '💼' },
              { label: 'Infrastructure Hosting', icon: '🏢' },
              { label: 'Cybersecurity Services', icon: '🛡️' },
              { label: 'Data Center Operations', icon: '💾' },
              { label: 'Network Services', icon: '🌐' },
              { label: 'Federal Platforms', icon: '🏛️' },
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
            Trusted by Herndon Government IT Providers
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Real results from real companies powering federal government operations.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {[
              { label: 'CMMC Registered Practitioner', icon: Shield },
              { label: 'FedRAMP Experience', icon: Award },
              { label: 'Government Cloud Certified', icon: Award },
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
                  'Our cloud platform serves 15 federal agencies. Capital Cyber designed CMMC compliance that actually enhanced our security posture while streamlining our certification process.',
                author: 'Chief Technology Officer',
                company: 'Government Cloud Provider, Herndon VA',
              },
              {
                quote:
                  'As a managed service provider for federal clients, CMMC compliance had to be seamless. Capital Cyber understood our multi-tenant architecture and delivered exactly what we needed.',
                author: 'VP of Federal Operations',
                company: 'IT Services Company, Herndon VA',
              },
              {
                quote:
                  'Rick\'s team knows the government IT market inside and out. They understood our federal contracts, our compliance obligations, and our growth plans. Outstanding execution.',
                author: 'Director of Compliance',
                company: 'Federal IT Contractor, Herndon VA',
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
            How Our CMMC Process Works for Government IT
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Federal-ready compliance for mission-critical platforms.
          </p>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Government IT Assessment',
                desc: 'Free consultation focused on your federal contracts, platform architecture, and agency requirements. Understanding government compliance within IT operations.',
              },
              {
                step: '02',
                title: 'Platform Security Analysis',
                desc: 'CMMC gap assessment designed for government IT platforms. Multi-tenant security, federal data handling, and infrastructure compliance evaluation.',
              },
              {
                step: '03',
                title: 'Government-Ready Implementation',
                desc: 'Deploy CMMC controls that enhance platform security and federal compliance. Implementation designed for government IT service providers.',
              },
              {
                step: '04',
                title: 'Federal Contract Certification',
                desc: 'C3PAO assessment preparation that demonstrates federal readiness. Achieve CMMC certification for government IT contract opportunities.',
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
              Secure Government IT <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ LINKEDIN-STYLE EMOTIONAL CLOSE ══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-lg sm:text-xl text-gray-800 space-y-4 leading-relaxed">
            <p className="font-bold text-2xl text-navy-800">Herndon powers the federal government through technology.</p>
            <p>Your platforms run cabinet agencies.</p>
            <p>Your clouds store the nation's most important data.</p>
            <p>When federal employees log in each morning, they depend on your infrastructure.</p>
            <p className="font-semibold text-navy-800 pt-2">CMMC compliance protects the technology backbone of government operations.</p>
            <p>While others build technology for profit, you build platforms for public service.</p>
            <p>Your security posture directly impacts national security operations and citizen services.</p>
            <p className="pt-2">
              The government IT providers who achieve CMMC certification first will dominate federal contracting.<br />
              They will be the platforms that agencies trust with their most sensitive operations.<br />
              They will define what secure government technology looks like.
            </p>
            <p className="font-bold text-navy-800 text-2xl pt-4">Government depends on Herndon. Make sure Herndon is ready.</p>
          </div>
        </div>
      </section>

      {/* ══════ LEAD CAPTURE FORM ══════ */}
      <section id="free-assessment" className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your Government IT CMMC Assessment
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Contact our team to discuss CMMC compliance for federal IT platforms and services. Government IT corridor expertise available immediately.
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
              data-form-name="CMMC Herndon Government IT Form"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="CMMC Herndon Government IT Form"
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

      {/* ══════ HERNDON-SPECIFIC FOOTER SECTION ══════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving Herndon Government IT Corridor</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Herndon, Oak Hill, Dulles Toll Road corridor, and Route 28 technology hub. Specialized support for federal IT contractors, cloud providers, and managed service companies.
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
                CMMC Ready Now is proudly powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=locationpage" className="font-bold text-navy-800 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Capital Cyber</a>. A cybersecurity firm helping Herndon government IT providers navigate NIST 800-171 compliance and achieve CMMC certification.
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