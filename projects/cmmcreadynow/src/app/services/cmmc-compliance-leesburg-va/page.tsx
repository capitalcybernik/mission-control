import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Building2, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'CMMC Compliance Services in Leesburg, Virginia | CMMC Ready Now',
  description:
    'Leesburg defense contractors: Home turf for CMMC Ready Now. Local expertise for Virginia defense firms. Professional services, engineering, and technology contractors. Expert CMMC consulting.',
  keywords: [
    'CMMC compliance Leesburg VA',
    'Loudoun County CMMC services',
    'DFARS Leesburg Virginia',
    'NIST 800-171 Leesburg',
    'defense contractor cybersecurity Leesburg',
    'CMMC certification Leesburg',
    'Leesburg CMMC consultant',
    'Virginia defense contractor compliance',
    'Loudoun defense contractor CMMC',
    'local CMMC services Virginia',
  ],
  openGraph: {
    title: 'CMMC Compliance in Leesburg, VA | Home Turf Excellence',
    description:
      'Leesburg is our home base. Local Virginia defense contractors deserve world-class cybersecurity compliance. CMMC expertise from your neighbors.',
    type: 'website',
  },
};

export default function CMMCComplianceLeesburgVA() {
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
            <span className="text-red-300 text-sm font-semibold">Leesburg Defense Contractors: Your Neighbors Are Ready. Are You?</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Leesburg Defense Contractors:<br />
            <span className="text-accent">Local Excellence, Global Impact</span>
          </h1>

          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <p>Leesburg is our home base and yours.</p>
            <p>You know the Loudoun County defense community. You understand Virginia values.</p>
            <p>Your work may be local, but your impact is global.</p>
            <p className="text-white font-semibold pt-2">CMMC compliance from neighbors who understand your business and your community.</p>
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
              Local Expertise, Global Standards
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-8 text-center">
            Leesburg: Our Home<br className="hidden sm:block" /> Your Success
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>Leesburg is home to hundreds of defense contractors serving everything from local government to the Pentagon.</p>
            <p>Over <strong>150 defense firms</strong> operate in Loudoun County, providing engineering, professional services, and technology solutions to DoD clients.</p>
            <p>These local contractors generate more than <strong>$800 million</strong> in annual defense revenue, proving that world-class work happens right here in Virginia.</p>
            <p className="font-semibold text-navy-800">As your neighbors, we understand both your business challenges and your community values.</p>
            <p>
              Leesburg defense contractors range from small engineering firms to mid-size technology companies, all competing for contracts that demand the highest cybersecurity standards.
              Your local success contributes to national security operations worldwide.
            </p>
            <p>
              DFARS clause 252.204-7021 affects Leesburg contractors just like major primes. Size doesn't matter when it comes to CMMC requirements.
              Your local expertise deserves world-class cybersecurity compliance.
            </p>
          </div>
        </div>
      </section>

      <section id="free-assessment" className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your Local CMMC Assessment
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Contact our team to discuss CMMC compliance with neighbors who understand Leesburg and Loudoun County defense contractors.
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
              data-form-name="CMMC Leesburg Home Base Form"
              data-height="600"
              data-layout-iframe-id="inline-9qEaBzqiyyfA9Tq823ks"
              data-form-id="9qEaBzqiyyfA9Tq823ks"
              title="CMMC Leesburg Home Base Form"
              className="w-full min-h-[600px]"
            />
          </div>

          <div className="text-center mt-8">
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
              <h3 className="font-bold text-navy-800 mb-3">Serving Leesburg & Loudoun County</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Downtown Leesburg, Lansdowne, Sterling, and all of Loudoun County. Local expertise with deep understanding of Virginia defense contractor community.
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
                CMMC Ready Now is proudly powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=locationpage" className="font-bold text-navy-800 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Capital Cyber</a>. A cybersecurity firm helping Leesburg and Loudoun County defense contractors navigate NIST 800-171 compliance and achieve CMMC certification.
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