import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, HardHat, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

/* ───────────────── SEO Metadata ───────────────── */
export const metadata: Metadata = {
  title: 'Penetration Testing for Construction Companies in New York | CMMC Ready Now',
  description:
    'New York construction companies with DoD subcontracts need penetration testing to meet CMMC and NIST 800-171 requirements. Find vulnerabilities before attackers do. Expert pen testing for NYC metro construction firms.',
  keywords: [
    'penetration testing construction New York',
    'pen test construction company NYC',
    'CMMC construction contractors NY',
    'cybersecurity construction New York',
    'DoD subcontractor pen test',
    'NIST 800-171 construction',
    'vulnerability assessment construction NYC',
    'CMMC Level 2 construction',
    'defense contractor pen testing NY',
    'construction cybersecurity compliance',
  ],
  openGraph: {
    title: 'Penetration Testing for NYC Construction Companies | CMMC Ready Now',
    description:
      'NYC construction firms with DoD work: penetration testing is not optional anymore. Find and fix vulnerabilities before they cost you contracts.',
    type: 'website',
  },
};

/* ───────────────── Page Component ───────────────── */
export default function PenTestConstructionNY() {
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
            <span className="text-red-300 text-sm font-semibold">Construction Is Now a Top Target for Cyberattacks</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            NYC Construction Companies:<br />
            <span className="text-accent">Your Networks Are Wide Open.</span>
          </h1>

          {/* Viral LinkedIn-style hook */}
          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>You build military installations. Federal buildings. Critical infrastructure.</p>
            <p>Your project plans, blueprints, and bid data sit on networks that have never been tested.</p>
            <p>Attackers know this. The DoD knows this too.</p>
            <p className="text-white font-semibold pt-2">Penetration testing finds the holes before someone else does.</p>
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
            Why Construction Companies<br className="hidden sm:block" /> Are Getting Hacked
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>Construction was the <strong>third most targeted industry</strong> for ransomware in 2024.</p>
            <p>Why? Because most construction firms have minimal cybersecurity. Flat networks. Shared passwords. No segmentation. No monitoring.</p>
            <p>New York's construction industry is massive. The NYC metro area alone has over <strong>45,000 construction firms</strong>. Hundreds of them hold DoD subcontracts for military construction (MILCON), base renovations, and federal infrastructure projects.</p>
            <p className="font-semibold text-navy-800">If you handle CUI or work under a DoD prime, you need CMMC compliance. And CMMC requires penetration testing.</p>
            <p>
              NIST 800-171 control CA-8 explicitly calls for penetration testing of organizational systems.
              Not a vulnerability scan. Not an automated report. A real, human driven penetration test.
            </p>
            <p>
              Most construction companies have never had one. That changes today.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: '#3 Most Targeted',
                desc: 'Construction ranked third for ransomware attacks in 2024. Attackers know defenses are weak.',
              },
              {
                icon: AlertTriangle,
                title: 'CUI Exposure',
                desc: 'Blueprints, facility layouts, and security plans for military sites are prime targets for adversaries.',
              },
              {
                icon: HardHat,
                title: '45,000+ Firms',
                desc: 'NYC metro construction companies. Many hold federal subcontracts without adequate security.',
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
              What Our Penetration Testing<br className="hidden sm:block" /> Covers for Construction Firms
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              CMMC Ready Now, powered by Capital Cyber, delivers penetration testing designed for construction companies. We test the systems you actually use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'External Network Penetration Test',
                desc: 'We attack your perimeter the same way a real threat actor would. Firewalls, VPNs, remote access portals, cloud services, and public facing systems.',
              },
              {
                title: 'Internal Network Penetration Test',
                desc: 'Simulating an attacker who has gained initial access or an insider threat. Lateral movement, privilege escalation, and access to CUI data stores.',
              },
              {
                title: 'Web Application Testing',
                desc: 'Project management portals, bid platforms, and client facing apps are tested for injection flaws, authentication bypasses, and data exposure.',
              },
              {
                title: 'Wireless Network Assessment',
                desc: 'Job site Wi-Fi, trailer offices, and field networks are often completely unsecured. We test them all.',
              },
              {
                title: 'Social Engineering & Phishing',
                desc: 'We test your people, not just your technology. Targeted phishing campaigns reveal which employees would fall for a real attack.',
              },
              {
                title: 'Detailed Findings Report',
                desc: 'Every vulnerability is documented with proof of concept, severity rating, and step by step remediation guidance your IT team can act on immediately.',
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

      {/* ══════ WHY NY CONSTRUCTION ══════ */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Built for New York Construction Companies
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            From MILCON projects at Fort Drum to federal building renovations in Manhattan, New York construction firms handle sensitive work every day. We understand the unique security challenges of this industry.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Military Construction', icon: '🏗️' },
              { label: 'Federal Buildings', icon: '🏛️' },
              { label: 'Base Infrastructure', icon: '🔒' },
              { label: 'Bridge & Tunnel Work', icon: '🌉' },
              { label: 'Electrical Contractors', icon: '⚡' },
              { label: 'HVAC & Mechanical', icon: '🌡️' },
              { label: 'General Contractors', icon: '📐' },
              { label: 'Environmental Remediation', icon: '♻️' },
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
            Trusted by Contractors Who Build for the Government
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Our clients trust us because we deliver results, not just reports.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {[
              { label: 'CMMC Registered Practitioner', icon: Shield },
              { label: 'OSCP Certified Testers', icon: Award },
              { label: 'Veteran-Owned Partner', icon: Award },
              { label: '100+ Pen Tests Delivered', icon: CheckCircle2 },
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
                  'We had no idea our project management system was exposing bid data to the internet. Capital Cyber found it in the first hour of testing. That alone was worth the entire engagement.',
                author: 'IT Director',
                company: 'General Contractor, Manhattan NY',
              },
              {
                quote:
                  'Our prime told us we needed a pen test for our CMMC assessment. Capital Cyber understood construction IT. They tested our job site networks, our trailer setups, everything. Thorough and professional.',
                author: 'Safety & Compliance Manager',
                company: 'MILCON Subcontractor, Long Island NY',
              },
              {
                quote:
                  'The phishing test was eye opening. 40% of our project managers clicked the test link. Now we have a real security awareness program and the numbers have dropped to under 5%.',
                author: 'Operations VP',
                company: 'Electrical Contractor, Brooklyn NY',
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
            How Our Pen Testing Process Works
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Designed for construction companies. Minimal disruption. Maximum findings.
          </p>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Book a Call with Rick',
                desc: 'We discuss your contracts, your network, and your compliance requirements. Free and zero obligation.',
              },
              {
                step: '02',
                title: 'Scoping & Rules of Engagement',
                desc: 'We define exactly what gets tested, when testing occurs, and what is off limits. No surprises for your team.',
              },
              {
                step: '03',
                title: 'Active Testing',
                desc: 'Our certified testers simulate real world attacks against your external, internal, wireless, and web assets. Testing runs on your schedule.',
              },
              {
                step: '04',
                title: 'Report & Remediation Support',
                desc: 'You receive a detailed findings report with severity ratings and fix guidance. We walk your team through every finding and help you remediate.',
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
            <p className="font-bold text-2xl text-navy-800">Construction companies don't think they're targets.</p>
            <p>That's exactly why they are.</p>
            <p>You build things that matter. Military bases. Government offices. Critical infrastructure.</p>
            <p>The blueprints on your file server? The access credentials in your email? The bid data in your project management tool?</p>
            <p className="font-semibold text-navy-800 pt-2">All of it is valuable to the wrong people.</p>
            <p>A penetration test isn't about checking a box. It's about finding out what an attacker would find if they targeted you tomorrow.</p>
            <p className="pt-2">
              The construction companies that take security seriously will keep winning federal work.<br />
              The ones that don't will get replaced by companies that do.
            </p>
            <p className="font-bold text-navy-800 text-2xl pt-4">Which one will you be?</p>
          </div>
        </div>
      </section>

      {/* ══════ LEAD CAPTURE FORM ══════ */}
      <section id="free-assessment" className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your Free Penetration Testing Consultation
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Fill out the form below and our team will contact you within 24 hours to scope your penetration test and discuss your compliance needs.
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
              data-form-name="Pen Test NY Construction Assessment"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="Penetration Testing NY Construction Form"
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

      {/* ══════ NY-SPECIFIC FOOTER SECTION ══════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving the NYC Metro Area</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Manhattan, Brooklyn, Queens, the Bronx, Staten Island, Long Island, Westchester, and Northern New Jersey. We test on site at your offices, job trailers, and project locations.
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
                CMMC Ready Now is proudly powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=locationpage" className="font-bold text-navy-800 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Capital Cyber</a> — a veteran owned cybersecurity firm specializing in CMMC, NIST 800-171, and defense contractor compliance.
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
