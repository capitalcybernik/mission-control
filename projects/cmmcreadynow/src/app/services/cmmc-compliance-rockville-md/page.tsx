import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, ArrowRight, Phone, Mail } from 'lucide-react';
import Script from 'next/script';

export const metadata: Metadata = { title: 'CMMC Compliance Services in Rockville, Maryland | CMMC Ready Now', description: 'Rockville defense contractors: Biodefense and technology hub. Research, development, and biotechnology contractors.', keywords: ['CMMC compliance Rockville MD', 'biodefense cybersecurity'], openGraph: { title: 'CMMC Compliance in Rockville, MD', type: 'website' } };

export default function CMMCComplianceRockvilleMD() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-800">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-navy-700/60 border border-navy-600/40 rounded-full px-5 py-2 mb-8">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-gray-300 text-sm font-medium">In Partnership with <span className="text-white font-bold">Capital Cyber</span></span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">Rockville Biodefense:<br /><span className="text-accent">Research Securely</span></h1>
          <Link href="https://capital-cyber.com/rick" className="bg-accent hover:bg-accent-dark text-navy-950 font-bold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2">Book a Call with Rick <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
      <section id="free-assessment" className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl">
            <iframe src="https://api.leadconnectorhq.com/widget/form/9qEaBzqiyyfA9Tq823ks" style={{ width: '100%', border: 'none' }} scrolling="no" className="w-full min-h-[600px]" />
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid md:grid-cols-3 gap-8"><div><h3 className="font-bold text-navy-800 mb-3">Serving Rockville Biodefense</h3></div><div><a href="mailto:info@cmmcreadynow.com" className="flex items-center gap-2 text-gray-600 text-sm"><Mail className="w-4 h-4" /> info@cmmcreadynow.com</a><a href="tel:+15714103066" className="flex items-center gap-2 text-gray-600 text-sm"><Phone className="w-4 h-4" /> (571) 410-3066</a></div><div><p className="text-gray-600 text-sm">CMMC Ready Now is powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=locationpage" className="font-bold text-navy-800">Capital Cyber</a>.</p></div></div></div>
      </section>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}