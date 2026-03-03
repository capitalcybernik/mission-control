#!/bin/bash

# Array of remaining locations with their descriptions
declare -A locations=(
    ["fredericksburg-va"]="Fredericksburg defense contractors: Near Marine Corps Base Quantico. Get CMMC Level 2 compliance for Marine Corps support contractors and Northern Virginia defense firms."
    ["woodbridge-va"]="Woodbridge defense contractors: Strategic location for Marine Corps and defense subcontractors. Get CMMC Level 2 compliance for defense suppliers and government contractors."
    ["stafford-va"]="Stafford defense contractors: Adjacent to Quantico and FBI Academy. Get CMMC Level 2 compliance for federal law enforcement and Marine Corps contractors."
    ["dulles-va"]="Dulles defense contractors: Heart of the Northern Virginia tech corridor. Get CMMC Level 2 compliance for government IT contractors and technology providers."
    ["winchester-va"]="Winchester defense contractors: Shenandoah Valley manufacturing and defense suppliers. Get CMMC Level 2 compliance for defense manufacturing and technology contractors."
    ["charlottesville-va"]="Charlottesville defense contractors: Home to NGIC and defense intelligence operations. Get CMMC Level 2 compliance for intelligence contractors and research firms."
    ["dahlgren-va"]="Dahlgren defense contractors: Naval Surface Warfare Center and naval weapons systems. Get CMMC Level 2 compliance for naval weapons contractors and research facilities."
    ["fort-belvoir-va"]="Fort Belvoir defense contractors: Army base and Defense Intelligence Agency operations. Get CMMC Level 2 compliance for Army contractors and intelligence suppliers."
    ["indian-head-md"]="Indian Head defense contractors: Naval Surface Warfare Center and explosive ordnance research. Get CMMC Level 2 compliance for naval weapons contractors."
    ["lexington-park-md"]="Lexington Park defense contractors: Patuxent River Naval Air Station and naval aviation testing. Get CMMC Level 2 compliance for naval aviation contractors."
    ["annapolis-md"]="Annapolis defense contractors: Naval Academy and maritime defense community. Get CMMC Level 2 compliance for naval education and maritime contractors."
    ["hunt-valley-md"]="Hunt Valley defense contractors: Baltimore area defense corridor and technology firms. Get CMMC Level 2 compliance for defense technology contractors."
    ["owings-mills-md"]="Owings Mills defense contractors: CMS and federal health IT operations. Get CMMC Level 2 compliance for federal IT contractors and health technology providers."
    ["college-park-md"]="College Park defense contractors: University of Maryland research and defense R&D. Get CMMC Level 2 compliance for defense research contractors."
    ["bowie-md"]="Bowie defense contractors: Fort Meade commuter community and defense contractors. Get CMMC Level 2 compliance for cyber contractors and intelligence suppliers."
    ["gaithersburg-md"]="Gaithersburg defense contractors: NIST headquarters and standards compliance. Get CMMC Level 2 compliance for technology standards contractors and federal suppliers."
)

# Create page templates for each location
for location in "${!locations[@]}"; do
    dir="cmmc-compliance-$location"
    page_file="$dir/page.tsx"
    
    if [[ ! -f "$page_file" ]]; then
        # Extract city and state from location
        city_state=$(echo "$location" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
        city=$(echo "$city_state" | cut -d' ' -f1)
        state=$(echo "$city_state" | cut -d' ' -f2)
        description="${locations[$location]}"
        
        cat > "$page_file" << PAGEEOF
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Clock, AlertTriangle, Building2, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'CMMC Compliance Services in $city, $state | CMMC Ready Now',
  description: '$description',
  keywords: ['CMMC compliance $city', 'CMMC $city $state', 'CMMC Level 2 $city', 'DFARS compliance $city', 'defense contractor cybersecurity $city'],
  openGraph: {
    title: 'CMMC Compliance Services in $city, $state | CMMC Ready Now',
    description: '$description',
    type: 'website',
  },
};

export default function CMMCCompliance$city() {
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            $city Defense Contractors:<br />
            <span className="text-accent">CMMC Level 2 Compliance Services</span>
          </h1>
          <div className="text-lg sm:text-xl text-gray-300 mb-10 space-y-3">
            <p>Get CMMC Level 2 compliance for $city defense contractors.</p>
            <p>Expert CMMC consulting and implementation services.</p>
            <p className="text-white font-semibold">Secure your defense contracts with CMMC certification.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://capital-cyber.com/rick" className="bg-accent hover:bg-accent-dark text-navy-950 font-bold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2">
              Book a Call with Rick <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="#free-assessment" className="border border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center">
              Get Your Free Assessment
            </a>
          </div>
        </div>
      </section>

      <section id="free-assessment" className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get Your Free CMMC Compliance Consultation</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Speak with our $city CMMC experts. We understand local defense industry requirements.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl">
            <iframe src="https://api.leadconnectorhq.com/widget/form/9qEaBzqiyyfA9Tq823ks" style={{ width: '100%', border: 'none', overflow: 'hidden' }} scrolling="no" id="inline-9qEaBzqiyyfA9Tq823ks" data-form-name="CMMC $city Consultation" className="w-full min-h-[600px]" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Serving $city & Region</h3>
              <p className="text-gray-600 text-sm leading-relaxed">$city area defense contractors and suppliers. We provide on site and remote CMMC compliance support.</p>
            </div>
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Contact Us</h3>
              <div className="space-y-2">
                <a href="mailto:info@cmmcreadynow.com" className="flex items-center gap-2 text-gray-600 text-sm hover:text-navy-800 transition-colors"><Mail className="w-4 h-4" /> info@cmmcreadynow.com</a>
                <a href="tel:+15714103066" className="flex items-center gap-2 text-gray-600 text-sm hover:text-navy-800 transition-colors"><Phone className="w-4 h-4" /> (571) 410-3066</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-navy-800 mb-3">Partnership</h3>
              <p className="text-gray-600 text-sm leading-relaxed">CMMC Ready Now is proudly powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=locationpage" className="font-bold text-navy-800 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Capital Cyber</a>.</p>
            </div>
          </div>
        </div>
      </section>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
PAGEEOF
        
        echo "Created $page_file"
    fi
done

echo "All remaining pages created!"
