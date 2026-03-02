import { siteContent } from '@/content/site-content';
import { ScrollFadeIn } from '@/components/ScrollFadeIn';
import { SectionHeading } from '@/components/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';

const { about } = siteContent;

export const metadata = { title: 'About | CMMC Ready Now' };

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{about.hero.headline}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{about.hero.subtitle}</p>
        </div>
      </section>

      {/* Origin */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <h2 className="text-3xl font-bold text-navy-800 mb-8">{about.origin.headline}</h2>
            {about.origin.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 text-lg leading-relaxed mb-6">{p}</p>
            ))}
          </ScrollFadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn>
              <h2 className="text-3xl font-bold text-navy-800 mb-6">{about.mission.headline}</h2>
              <p className="text-xl text-navy-700 leading-relaxed font-medium">{about.mission.statement}</p>
            </ScrollFadeIn>
            <ScrollFadeIn>
              <Image
                src="/images/security.png"
                alt="Cybersecurity protection"
                width={500}
                height={500}
                className="mx-auto"
              />
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading headline="Our Values" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.values.map((v) => (
              <ScrollFadeIn key={v.title}>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-navy-800 mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Work With Us</h2>
          <p className="text-gray-300 text-lg mb-8">
            Ready to partner with a team that understands both the technology and the mission?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-dark text-navy-950 font-bold px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
