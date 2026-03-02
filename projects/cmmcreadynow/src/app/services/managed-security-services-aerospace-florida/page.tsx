import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Rocket, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

/* ───────────────── SEO Metadata ───────────────── */
export const metadata: Metadata = {
  title: 'Managed Security Services for Aerospace Companies in Florida | CMMC Ready Now',
  description:
    'Florida aerospace and defense companies: managed security services built for CMMC compliance. 24/7 monitoring, incident response, and compliance management for Space Coast and statewide defense contractors.',
  keywords: [
    'managed security services aerospace Florida',
    'MSSP aerospace FL',
    'CMMC managed security Florida',
    'cybersecurity aerospace Florida',
    'Space Coast defense cybersecurity',
    'managed SOC aerospace',
    'CMMC compliance Florida',
    'defense contractor MSSP FL',
    'cybersecurity managed services Cape Canaveral',
    'aerospace security monitoring Florida',
  ],
  openGraph: {
    title: 'Managed Security for FL Aerospace Companies | CMMC Ready Now',
    description:
      'Florida aerospace companies need 24/7 security monitoring for CMMC compliance. Expert managed security from CMMC Ready Now + Capital Cyber.',
    type: 'website',
  },
};

/* ───────────────── Page Component ───────────────── */
export default function ManagedSecurityAerospaceFL() {
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
            <span className="text-red-300 text-sm font-semibold">CMMC Requires Continuous Monitoring — Not Just Annual Audits</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Florida Aerospace Companies:<br />
            <span className="text-accent">You Need Security That Never Sleeps.</span>
          </h1>

          {/* Viral LinkedIn-style hook */}
          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>You build the systems that launch rockets and defend the skies.</p>
            <p>Nation state adversaries are targeting your intellectual property around the clock.</p>
            <p>Your two person IT team cannot monitor threats at 3 AM on a Saturday.</p>
            <p className="text-white font-semibold pt-2">Managed security services can. And CMMC demands it.</p>
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
            Florida Is America's Launchpad.<br className="hidden sm:block" /> Adversaries Know It.
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>Florida is home to more than <strong>2,000 aerospace and defense companies</strong>, employing over 130,000 workers across the state.</p>
            <p>The Space Coast corridor from Cape Canaveral to Melbourne is one of the densest concentrations of aerospace activity on the planet. Add Tampa, Jacksonville, Orlando, and the Panhandle's military installations, and Florida becomes a primary target for cyber espionage.</p>
            <p>Companies like L3Harris, Northrop Grumman, Lockheed Martin, and hundreds of smaller suppliers operate here. Many handle CUI related to missile systems, satellite technology, avionics, and space launch operations.</p>
            <p className="font-semibold text-navy-800">CMMC Level 2 requires continuous monitoring of security controls. Not quarterly reviews. Not annual audits. Continuous.</p>
            <p>
              That means 24/7 log collection, real time alerting, incident response capability, and documented evidence that your security operations center is watching your environment every single day.
            </p>
            <p>
              Most mid-size aerospace companies do not have the budget or headcount for an in house SOC. Managed security services bridge that gap at a fraction of the cost.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: '24/7/365',
                desc: 'CMMC expects continuous monitoring. That means around the clock security operations, not business hours only.',
              },
              {
                icon: AlertTriangle,
                title: 'Nation State Threats',
                desc: 'Chinese, Russian, and Iranian APT groups actively target U.S. aerospace IP. Florida firms are in the crosshairs.',
              },
              {
                icon: Rocket,
                title: '2,000+ Companies',
                desc: 'Florida aerospace and defense firms. Many lack the security infrastructure CMMC demands.',
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
              Managed Security Built for<br className="hidden sm:block" /> Aerospace Compliance
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              CMMC Ready Now, powered by Capital Cyber, delivers managed security services engineered to meet CMMC and NIST 800-171 requirements for aerospace companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: '24/7 Security Operations Center',
                desc: 'Round the clock monitoring by trained security analysts. Every alert is triaged, investigated, and escalated based on severity. No automated noise. Human analysis.',
              },
              {
                title: 'SIEM & Log Management',
                desc: 'Centralized log collection from every endpoint, server, firewall, and cloud service. Full audit trail for CMMC assessors. Retention policies that meet NIST requirements.',
              },
              {
                title: 'Endpoint Detection & Response',
                desc: 'Advanced EDR deployed across your entire fleet. Real time threat detection, automated containment, and forensic investigation capability on every device.',
              },
              {
                title: 'Incident Response & Forensics',
                desc: 'When an incident occurs, our team responds immediately. Containment, eradication, recovery, and a full forensic report. We also help you meet the 72 hour DFARS reporting requirement.',
              },
              {
                title: 'Vulnerability Management',
                desc: 'Continuous scanning, patch management coordination, and vulnerability prioritization. We identify risks before attackers exploit them.',
              },
              {
                title: 'Compliance Reporting & Evidence',
                desc: 'Monthly compliance reports, audit ready evidence packages, and dashboards that show your security posture in real time. Built specifically for CMMC assessor expectations.',
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

      {/* ══════ WHY FL AEROSPACE ══════ */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Built for Florida's Aerospace Industry
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            From Space Coast launch operations to Panhandle defense installations, Florida aerospace companies work on programs that shape the future of national security. Our managed security services are built for this mission.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Space Launch Systems', icon: '🚀' },
              { label: 'Satellite & Communications', icon: '📡' },
              { label: 'Avionics & Flight Systems', icon: '✈️' },
              { label: 'Missile Defense', icon: '🛡️' },
              { label: 'Unmanned Systems (UAS)', icon: '🤖' },
              { label: 'Simulation & Training', icon: '🎯' },
              { label: 'Electronics & Sensors', icon: '🔌' },
              { label: 'Propulsion & Materials', icon: '⚙️' },
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
            Trusted by Aerospace Companies Across Florida
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Real managed security results from companies that build for the skies and beyond.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {[
              { label: 'CMMC Registered Practitioner', icon: Shield },
              { label: '24/7 SOC Operations', icon: Award },
              { label: 'Trusted Security Partner', icon: Award },
              { label: '99.9% Uptime SLA', icon: CheckCircle2 },
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
                  'Before Capital Cyber, we had no visibility into our network after hours. Within 30 days of onboarding, their SOC detected and contained a credential stuffing attack at 2 AM that we never would have caught.',
                author: 'Director of IT',
                company: 'Satellite Components Manufacturer, Melbourne FL',
              },
              {
                quote:
                  'Our C3PAO assessor specifically praised our continuous monitoring evidence. Capital Cyber\'s monthly compliance reports made the audit painless. We certified on the first attempt.',
                author: 'CISO',
                company: 'Avionics Supplier, Tampa FL',
              },
              {
                quote:
                  'We tried building an in house SOC. The cost was astronomical. Capital Cyber delivers better coverage at a third of the price with analysts who actually understand aerospace threat landscapes.',
                author: 'CEO',
                company: 'Defense Electronics Firm, Orlando FL',
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
            Getting Started with Managed Security
          </h2>
          <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
            Fast onboarding. Immediate protection. Built for compliance.
          </p>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Book a Call with Rick',
                desc: 'Free consultation to evaluate your environment, your compliance requirements, and the right level of managed security for your organization.',
              },
              {
                step: '02',
                title: 'Environment Assessment & Design',
                desc: 'We map your infrastructure, identify critical assets, and design a monitoring architecture that covers your entire CUI boundary.',
              },
              {
                step: '03',
                title: 'Deployment & Onboarding',
                desc: 'SIEM agents, EDR tools, and log collectors are deployed across your environment. Our SOC begins monitoring within days, not months.',
              },
              {
                step: '04',
                title: '24/7 Monitoring & Compliance',
                desc: 'Continuous threat monitoring, incident response, monthly compliance reports, and ongoing tuning. Your security posture improves every month.',
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
            <p className="font-bold text-2xl text-navy-800">Florida aerospace companies are under constant attack.</p>
            <p>Not hypothetically. Right now.</p>
            <p>APT groups from China, Russia, and Iran specifically target U.S. aerospace intellectual property.</p>
            <p>They operate 24/7. They are patient. They are sophisticated.</p>
            <p className="font-semibold text-navy-800 pt-2">Your defenses need to match that intensity.</p>
            <p>A managed security service gives you a full security operations center without the seven figure price tag of building one yourself.</p>
            <p>It gives your assessors exactly the evidence they need for CMMC certification.</p>
            <p className="pt-2">
              The aerospace companies that invest in real security will keep winning classified and CUI programs.<br />
              The ones running on hope and antivirus will be cut from the supply chain.
            </p>
            <p className="font-bold text-navy-800 text-2xl pt-4">You build systems that reach space. Your security should be just as advanced.</p>
          </div>
        </div>
      </section>

      {/* ══════ LEAD CAPTURE FORM ══════ */}
      <section id="free-assessment" className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your Free Managed Security Consultation
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Fill out the form below and our team will contact you within 24 hours to discuss managed security services for your aerospace operation.
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
              data-form-name="Managed Security FL Aerospace"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="Managed Security Florida Aerospace Form"
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

      {/* ══════ FL-SPECIFIC FOOTER SECTION ══════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving All of Florida</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Space Coast (Melbourne, Cape Canaveral, Titusville), Orlando, Tampa, Jacksonville, Miami, Fort Lauderdale, Pensacola, and the entire Panhandle defense corridor. Remote monitoring with on site support available.
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
