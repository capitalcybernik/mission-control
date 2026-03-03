import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Building2, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

/* ───────────────── SEO Metadata ───────────────── */
export const metadata: Metadata = {
  title: 'CMMC Compliance Services in McLean, Virginia | CMMC Ready Now',
  description:
    'McLean defense contractors: Heart of the intelligence community. CIA, ODNI, and intelligence contractors demand the highest security standards. CMMC compliance is table stakes. Expert consulting in McLean VA.',
  keywords: [
    'CMMC compliance McLean VA',
    'intelligence community CMMC',
    'CIA contractor cybersecurity',
    'DFARS McLean Virginia',
    'NIST 800-171 McLean',
    'intelligence contractor compliance',
    'CMMC certification McLean',
    'McLean CMMC consultant',
    'ODNI contractor security',
    'classified contractor CMMC',
  ],
  openGraph: {
    title: 'CMMC Compliance in McLean, VA | Intelligence Community Ready',
    description:
      'McLean hosts the intelligence community headquarters. Contractors here require the highest levels of cybersecurity compliance and operational security.',
    type: 'website',
  },
};

/* ───────────────── Page Component ───────────────── */
export default function CMMCComplianceMcLeanVA() {
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
            <span className="text-red-300 text-sm font-semibold">Intelligence Community: Security Is Not Optional. CMMC Is Required.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            McLean Intelligence Contractors:<br />
            <span className="text-accent">Excellence Is Expected</span>
          </h1>

          {/* Viral LinkedIn-style hook */}
          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>McLean is the intelligence capital of America.</p>
            <p>Your work protects sources, methods, and national security operations.</p>
            <p>The intelligence community demands perfection in cybersecurity.</p>
            <p className="text-white font-semibold pt-2">CMMC compliance is not a goal. It's a baseline requirement for intelligence contractors.</p>
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
              Meet IC Standards
            </a>
          </div>
        </div>
      </section>

      {/* ══════ PROBLEM / PAIN SECTION ══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-8 text-center">
            McLean: Intelligence Community<br className="hidden sm:block" /> Headquarters
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>McLean hosts the Central Intelligence Agency, the Office of the Director of National Intelligence, and hundreds of intelligence contractors.</p>
            <p>Over <strong>300 intelligence firms</strong> operate within a 5-mile radius of Langley, supporting the most sensitive national security missions.</p>
            <p>McLean contractors generate more than <strong>$12 billion</strong> in annual intelligence community contracts, from analysis to operations to technology support.</p>
            <p className="font-semibold text-navy-800">In the intelligence world, cybersecurity failures have consequences beyond contract loss.</p>
            <p>
              McLean contractors handle the most sensitive information in government: HUMINT sources, operational plans, foreign intelligence, and strategic assessments.
              Your cybersecurity posture directly impacts national security operations worldwide.
            </p>
            <p>
              DFARS clause 252.204-7021 is standard in intelligence contracts. But for McLean contractors, CMMC compliance represents far more than regulatory compliance.
              It demonstrates your commitment to operational security and mission protection.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: '$12 Billion',
                desc: 'Annual intelligence community contracts from McLean area. CMMC compliance protects access to the most sensitive work.',
              },
              {
                icon: AlertTriangle,
                title: '300+ IC Firms',
                desc: 'Intelligence contractors within 5 miles of Langley. All held to the highest cybersecurity standards in government.',
              },
              {
                icon: Building2,
                title: 'Mission Critical',
                desc: 'McLean contractors support operations that cannot afford cybersecurity failures. Excellence is the minimum standard.',
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
              CMMC Compliance for<br className="hidden sm:block" /> Intelligence Community Contractors
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              CMMC Ready Now, powered by Capital Cyber, delivers CMMC compliance services that meet the exacting standards of intelligence community operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Intelligence-Grade Security Controls',
                desc: 'CMMC assessments that exceed baseline requirements. Security implementations designed for the most sensitive intelligence operations and data handling.',
              },
              {
                title: 'Compartmented Information Handling',
                desc: 'CUI scoping and protection frameworks that align with intelligence community standards for information compartmentalization and access control.',
              },
              {
                title: 'Operational Security Integration',
                desc: 'CMMC compliance that enhances rather than conflicts with existing OPSEC requirements. Security by design for intelligence operations.',
              },
              {
                title: 'Classified Environment Preparation',
                desc: 'CMMC implementations that prepare your organization for classified contract opportunities. Scalable security architectures for mission growth.',
              },
              {
                title: 'Continuous Assessment Readiness',
                desc: 'Ongoing compliance monitoring and assessment preparation. Maintain CMMC certification under the highest levels of scrutiny and audit frequency.',
              },
              {
                title: 'Mission Assurance Framework',
                desc: 'CMMC compliance that directly supports mission assurance requirements. Security controls that protect both contracts and national security operations.',
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

      {/* ══════ WHY MCLEAN INTELLIGENCE ══════ */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Built for Intelligence Community Excellence
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            From Langley to the ODNI, McLean contractors operate at the highest levels of national security. We understand these unique requirements.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Intelligence Analysis', icon: '🔍' },
              { label: 'Operational Support', icon: '⚙️' },
              { label: 'Technology Solutions', icon: '💻' },
              { label: 'Strategic Planning', icon: '📊' },
              { label: 'Cybersecurity Services', icon: '🛡️' },
              { label: 'Mission Systems', icon: '🎯' },
              { label: 'Data Analytics', icon: '📈' },
              { label: 'Collection Support', icon: '📡' },
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
            Trusted by McLean Intelligence Contractors
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Real results from real companies supporting intelligence community missions.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {[
              { label: 'CMMC Registered Practitioner', icon: Shield },
              { label: 'Intelligence Community Trusted', icon: Award },
              { label: 'Operational Security Focused', icon: Award },
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
                  'Our intelligence community contracts demand perfection in cybersecurity. Capital Cyber delivered CMMC compliance that exceeded even IC standards. Outstanding operational security integration.',
                author: 'Chief Security Officer',
                company: 'Intelligence Contractor, McLean VA',
              },
              {
                quote:
                  'Working in McLean means working under the highest scrutiny. Capital Cyber understood our environment and delivered CMMC compliance that enhanced our mission assurance posture.',
                author: 'VP of Mission Systems',
                company: 'IC Support Contractor, McLean VA',
              },
              {
                quote:
                  'Rick\'s team knows the intelligence community inside and out. They understood our operational requirements and delivered cybersecurity that protects both our contracts and our missions.',
                author: 'Program Director',
                company: 'Intelligence Analysis Firm, McLean VA',
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
            How Our CMMC Process Serves IC Contractors
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Intelligence community standards demand excellence.
          </p>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Intelligence Community Consultation',
                desc: 'Confidential consultation focused on your IC contracts, security requirements, and mission objectives. Understanding clearance levels and operational constraints.',
              },
              {
                step: '02',
                title: 'Security Architecture Assessment',
                desc: 'Comprehensive CMMC gap analysis designed for intelligence operations. Evaluate controls within the context of operational security and mission assurance.',
              },
              {
                step: '03',
                title: 'Mission-Critical Implementation',
                desc: 'Deploy CMMC controls that enhance operational security. Implementation designed for the most sensitive intelligence community requirements.',
              },
              {
                step: '04',
                title: 'Operational Readiness Certification',
                desc: 'C3PAO assessment preparation that demonstrates intelligence community readiness. Achieve CMMC certification that supports mission expansion.',
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
              Meet IC Standards <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ LINKEDIN-STYLE EMOTIONAL CLOSE ══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-lg sm:text-xl text-gray-800 space-y-4 leading-relaxed">
            <p className="font-bold text-2xl text-navy-800">McLean contractors protect America's most vital secrets.</p>
            <p>You operate in the shadow of Langley.</p>
            <p>Your work directly impacts intelligence operations worldwide.</p>
            <p>Sources and methods depend on your operational security.</p>
            <p className="font-semibold text-navy-800 pt-2">In the intelligence community, cybersecurity is not a business requirement. It's a national security imperative.</p>
            <p>CMMC compliance demonstrates your commitment to protecting not just data, but operations, sources, and lives.</p>
            <p>While others see compliance as a checkbox, you understand it as mission assurance.</p>
            <p className="pt-2">
              The intelligence contractors who achieve CMMC certification first will lead the community.<br />
              They will be trusted with the most sensitive programs.<br />
              They will define what operational excellence looks like in cybersecurity.
            </p>
            <p className="font-bold text-navy-800 text-2xl pt-4">Excellence is not optional in McLean. Make CMMC compliance your next operational success.</p>
          </div>
        </div>
      </section>

      {/* ══════ LEAD CAPTURE FORM ══════ */}
      <section id="free-assessment" className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your Intelligence Community CMMC Assessment
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Contact our team to discuss CMMC compliance that meets intelligence community standards. McLean operational security expertise available immediately.
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
              data-form-name="CMMC McLean Intelligence Contractor Form"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="CMMC McLean Intelligence Contractor Form"
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

      {/* ══════ MCLEAN-SPECIFIC FOOTER SECTION ══════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving McLean Intelligence Community</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Langley, McLean, Great Falls, and the broader intelligence community corridor. Specialized support for IC contractors with the highest security requirements.
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
                CMMC Ready Now is proudly powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=locationpage" className="font-bold text-navy-800 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Capital Cyber</a>. A cybersecurity firm helping McLean intelligence contractors navigate NIST 800-171 compliance and achieve CMMC certification.
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