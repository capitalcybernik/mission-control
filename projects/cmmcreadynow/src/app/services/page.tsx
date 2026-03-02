import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { ScrollFadeIn } from '@/components/ScrollFadeIn';
import { SectionHeading } from '@/components/SectionHeading';

const { services } = siteContent;

export const metadata = { title: 'Services | CMMC Ready Now' };

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{services.hero.headline}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{services.hero.subtitle}</p>
        </div>
      </section>

      {services.items.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 lg:py-28 ${idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollFadeIn>
              <div className="mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-800">{service.title}</h2>
              </div>
              <p className="text-gray-600 text-lg max-w-3xl mb-12 leading-relaxed">{service.summary}</p>
            </ScrollFadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((f) => (
                <ScrollFadeIn key={f.title}>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 h-full shadow-sm">
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <h3 className="text-lg font-semibold text-navy-800">{f.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-8">{f.description}</p>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Audiences */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading headline={services.audiences.headline} light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.audiences.items.map((a) => (
              <ScrollFadeIn key={a.title}>
                <div className="bg-navy-700/50 border border-navy-600/30 rounded-xl p-6 h-full text-center">
                  <h3 className="text-lg font-bold text-white mb-3">{a.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{a.description}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-accent hover:bg-accent-dark text-navy-950 font-bold px-8 py-3.5 rounded-lg text-lg transition-colors"
            >
              Start Your Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
