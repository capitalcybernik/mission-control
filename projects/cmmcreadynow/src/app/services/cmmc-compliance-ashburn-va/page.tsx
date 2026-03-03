import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Building2, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'CMMC Compliance Services in Ashburn, Virginia | CMMC Ready Now',
  description:
    'Ashburn defense contractors: Data center capital of the world. Cloud infrastructure, data hosting, and digital platforms serving DoD require CMMC compliance. Expert consulting in Ashburn VA.',
  keywords: [
    'CMMC compliance Ashburn VA',
    'data center CMMC compliance',
    'cloud infrastructure cybersecurity',
    'DFARS Ashburn Virginia',
    'NIST 800-171 Ashburn',
    'defense cloud provider CMMC',
    'CMMC certification Ashburn',
    'Ashburn CMMC consultant',
    'data center cybersecurity',
    'cloud defense contractor CMMC',
  ],
  openGraph: {
    title: 'CMMC Compliance in Ashburn, VA | Data Center Capital Ready',
    description:
      'Ashburn is the data center capital of the world. Defense contractors here power cloud infrastructure for DoD operations worldwide.',
    type: 'website',
  },
};

export default function CMMCComplianceAshburnVA() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-navy-700/60 border border-navy-600/40 rounded-full px-5 py-2 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-gray-300 text-sm font-medium">In Partnership with <span className="text-white font-bold">Capital Cyber</span></span>
          </div>

          <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-semibold">Ashburn Data Centers: The Internet Runs Here. Secure It Now.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Ashburn Data Center Providers:<br />
            <span className="text-accent">Power the Digital Defense</span>
          </h1>

          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>Ashburn is the data center capital of the world.</p>
            <p>70% of the world's internet traffic flows through your facilities.</p>
            <p>Defense contractors depend on your infrastructure for mission-critical operations.</p>
            <p className="text-white font-semibold pt-2">CMMC compliance protects the digital backbone that powers national security.</p>
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
              Secure Digital Infrastructure
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-8 text-center">
            Ashburn: Data Center Capital<br className="hidden sm:block" /> of the World
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>Ashburn hosts the largest concentration of data centers on the planet, with over 300 facilities in Loudoun County alone.</p>
            <p>More than <strong>120 defense cloud providers</strong> operate from Ashburn, delivering infrastructure services that power DoD operations globally.</p>
            <p>These data centers handle over <strong>$4 billion</strong> in annual defense cloud contracts, from basic hosting to advanced AI platforms.</p>
            <p className="font-semibold text-navy-800">When Ashburn goes down, defense operations worldwide are affected.</p>
            <p>
              Defense contractors rely on Ashburn data centers for everything from email and file storage to classified processing and AI/ML workloads.
              Your infrastructure enables mission-critical operations across every combatant command.
            </p>
            <p>
              DFARS clause 252.204-7021 is now mandatory for defense cloud contracts. Data centers, colocation providers, and cloud platforms all require CMMC certification.
              Your compliance status determines access to the massive defense cloud market.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: '$4 Billion',
                desc: 'Annual defense cloud contracts from Ashburn. Data center CMMC compliance unlocks massive infrastructure opportunities.',
              },
              {
                icon: AlertTriangle,
                title: '300+ Data Centers',
                desc: 'Facilities in Loudoun County serving defense contractors. All requiring highest cybersecurity standards.',
              },
              {
                icon: Building2,
                title: '70% Internet Traffic',
                desc: 'Global internet traffic flows through Ashburn. Digital infrastructure requires enterprise-grade security.',
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

      <section id="free-assessment" className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your Data Center CMMC Assessment
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Contact our team to discuss CMMC compliance for data centers and cloud infrastructure. Ashburn expertise available immediately.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl">
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
              data-form-name="CMMC Ashburn Data Center Form"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="CMMC Ashburn Data Center Form"
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving Ashburn Data Center Corridor</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Data Center Alley, Loudoun County data centers, and the entire digital infrastructure hub. Specialized support for data center operators and cloud providers.
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
                CMMC Ready Now is proudly powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=locationpage" className="font-bold text-navy-800 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Capital Cyber</a>. A cybersecurity firm helping Ashburn data center providers navigate NIST 800-171 compliance and achieve CMMC certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}