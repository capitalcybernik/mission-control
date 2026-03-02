import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, TrendingUp, Building2, Clock, Users, Phone, ArrowRight, Factory, HardHat } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CMMC Compliance Success Stories | Case Studies | CMMC Ready Now',
  description:
    'See how defense contractors achieve CMMC compliance with CMMC Ready Now. Real results from manufacturing and construction companies navigating NIST 800 171 and CMMC Level 2 certification.',
  keywords: [
    'CMMC success stories',
    'CMMC case studies',
    'defense contractor cybersecurity',
    'NIST 800-171 implementation',
    'manufacturing CMMC compliance',
    'construction contractor cybersecurity',
    'CMMC Level 2 results',
    'defense contractor compliance',
  ],
  openGraph: {
    title: 'CMMC Compliance Case Studies | CMMC Ready Now',
    description: 'Real results from defense contractors achieving CMMC compliance.',
    type: 'website',
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold">Proven Results</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Real Results from<br />
            <span className="text-accent">Real Defense Contractors</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We have helped dozens of manufacturing, construction, and defense companies navigate CMMC compliance. Here is what our clients typically experience.
          </p>
        </div>
      </section>

      {/* Results Stats */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-4 text-center">
            What Our Clients Achieve
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-2xl mx-auto">
            These numbers represent real outcomes from organizations we have guided through the CMMC compliance journey.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: '40%', label: 'Average Reduction in Remediation Timeline', icon: Clock },
              { stat: '100%', label: 'Client Retention Rate', icon: Users },
              { stat: '110', label: 'NIST 800 171 Controls Assessed Per Engagement', icon: Shield },
              { stat: '36 mo', label: 'Average Client Partnership Length', icon: TrendingUp },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="w-10 h-10 text-navy-700 mx-auto mb-3" />
                <p className="text-4xl font-extrabold text-navy-800 mb-2">{item.stat}</p>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Clients Say */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-12 text-center">
            Common Outcomes We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Complete Gap Visibility',
                desc: 'Clients go from "we think we are compliant" to knowing exactly which of the 110 controls are implemented, partially implemented, or missing entirely. No guessing.',
                icon: Shield,
              },
              {
                title: 'Realistic Remediation Plans',
                desc: 'Instead of a 200 page report that collects dust, our clients receive prioritized action plans with clear timelines, resource estimates, and dependencies their teams can actually execute.',
                icon: CheckCircle2,
              },
              {
                title: 'Confident Certification',
                desc: 'When our clients walk into their C3PAO assessment, they know exactly what to expect. No surprises. No scrambling. Just confidence built on thorough preparation.',
                icon: TrendingUp,
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-8">
                <item.icon className="w-8 h-8 text-navy-700 mb-4" />
                <h3 className="text-xl font-bold text-navy-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Case Studies */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-4 text-center">
            Detailed Case Studies
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-2xl mx-auto">
            We are documenting the full compliance journeys of our manufacturing and construction clients. These detailed case studies are coming soon.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Iron Lift Manufacturing */}
            <div className="bg-navy-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full">
                Coming Soon
              </div>
              <Factory className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Iron Lift Manufacturing</h3>
              <p className="text-gray-400 text-sm mb-4">Manufacturing Company</p>
              <p className="text-gray-300 leading-relaxed">
                A midsized manufacturer navigating CMMC Level 2 certification to maintain their DoD supply chain contracts. Full case study documenting their gap assessment, remediation journey, and certification outcome.
              </p>
            </div>

            {/* Construction Company */}
            <div className="bg-navy-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full">
                Coming Soon
              </div>
              <HardHat className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Defense Construction Contractor</h3>
              <p className="text-gray-400 text-sm mb-4">Construction Company, Virginia</p>
              <p className="text-gray-300 leading-relaxed">
                A construction firm with multiple DoD subcontracts that needed to achieve CMMC compliance across distributed project sites. Full case study covering their unique operational challenges and compliance approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Want to Be Our Next Success Story?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Every compliance journey starts with a conversation. Book a call with Rick to discuss where you stand and what it takes to get CMMC certified.
          </p>
          <Link
            href="https://capital-cyber.com/rick"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-navy-950 font-bold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            Book a Call with Rick <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Partnership Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">
            CMMC Ready Now is proudly powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=locationpage" className="font-bold text-navy-800 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Capital Cyber</a>. A cybersecurity firm helping defense contractors navigate NIST 800-171 compliance and prepare for CMMC certification.
          </p>
        </div>
      </section>
    </>
  );
}
