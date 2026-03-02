import Link from 'next/link';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { ScrollFadeIn } from '@/components/ScrollFadeIn';
import { SectionHeading } from '@/components/SectionHeading';

const { home } = siteContent;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/logo-white.webp"
                alt="CMMC Ready Now"
                width={400}
                height={74}
                className="mb-8"
                priority
              />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
                {home.hero.headline}
              </h1>
              <p className="text-lg text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                {home.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link
                  href={home.hero.cta.href}
                  className="bg-accent hover:bg-accent-dark text-navy-950 font-bold px-8 py-3.5 rounded-lg text-lg transition-colors text-center"
                >
                  {home.hero.cta.label}
                </Link>
                <Link
                  href={home.hero.secondaryCta.href}
                  className="border border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors text-center"
                >
                  {home.hero.secondaryCta.label}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Image
                src="/images/hero.jpg"
                alt="CMMC Compliance Dashboard"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            headline={home.servicesOverview.headline}
            subtitle={home.servicesOverview.subtitle}
          />
          <div className="grid md:grid-cols-3 gap-8">
            {home.servicesOverview.items.map((item) => (
              <ScrollFadeIn key={item.title}>
                <Link
                  href={item.href}
                  className="block bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-navy-300 hover:shadow-lg transition-all group h-full"
                >
                  <h3 className="text-xl font-bold text-navy-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-device section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollFadeIn>
                <Image
                  src="/images/multi-device.png"
                  alt="Access compliance tools on any device"
                  width={1132}
                  height={496}
                  className="rounded-xl"
                />
              </ScrollFadeIn>
            </div>
            <div>
              <ScrollFadeIn>
                <h2 className="text-3xl font-bold text-navy-800 mb-6">Access Anywhere, Manage Everywhere</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our responsive platform works seamlessly across all devices. Monitor compliance, manage policies, and track progress whether you are at your desk or on the go.
                </p>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading headline={home.testimonials.headline} />
          <div className="grid md:grid-cols-3 gap-8">
            {home.testimonials.items.map((t, i) => (
              <ScrollFadeIn key={i}>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 h-full flex flex-col shadow-sm">
                  <Quote className="w-8 h-8 text-navy-300 mb-4" />
                  <p className="text-gray-700 leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-navy-800 font-semibold">{t.author}</p>
                    <p className="text-gray-500 text-sm">{t.company}</p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-navy-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <ScrollFadeIn>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{home.cta.headline}</h2>
                <p className="text-gray-300 text-lg mb-10">{home.cta.description}</p>
                <Link
                  href={home.cta.button.href}
                  className="inline-block bg-accent hover:bg-accent-dark text-navy-950 font-bold px-10 py-4 rounded-lg text-lg transition-colors"
                >
                  {home.cta.button.label}
                </Link>
              </ScrollFadeIn>
            </div>
            <div className="hidden lg:flex justify-center">
              <ScrollFadeIn>
                <Image
                  src="/images/cta.png"
                  alt="CMMC Compliance"
                  width={400}
                  height={400}
                  className="opacity-90"
                />
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
