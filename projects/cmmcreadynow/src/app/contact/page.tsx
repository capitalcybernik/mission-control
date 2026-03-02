'use client';

import { useState, FormEvent } from 'react';
import { siteContent } from '@/content/site-content';
import { ScrollFadeIn } from '@/components/ScrollFadeIn';
import { Icon } from '@/components/IconMap';
import { Send, Loader2 } from 'lucide-react';

const { contact } = siteContent;

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{contact.hero.headline}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{contact.hero.subtitle}</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollFadeIn>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {contact.form.fields.filter((f) => f.type !== 'textarea').map((f) => (
                      <div key={f.name}>
                        <label htmlFor={f.name} className="block text-sm font-medium text-gray-700 mb-2">
                          {f.label} {f.required && <span className="text-red-500">*</span>}
                        </label>
                        <input
                          type={f.type}
                          id={f.name}
                          name={f.name}
                          required={f.required}
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-300 focus:border-navy-400 transition-colors"
                          placeholder={f.label}
                        />
                      </div>
                    ))}
                  </div>
                  {contact.form.fields.filter((f) => f.type === 'textarea').map((f) => (
                    <div key={f.name}>
                      <label htmlFor={f.name} className="block text-sm font-medium text-gray-700 mb-2">
                        {f.label} {f.required && <span className="text-red-500">*</span>}
                      </label>
                      <textarea
                        id={f.name}
                        name={f.name}
                        required={f.required}
                        rows={5}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-300 focus:border-navy-400 transition-colors resize-none"
                        placeholder={f.label}
                      />
                    </div>
                  ))}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="bg-navy-800 hover:bg-navy-700 text-white font-bold px-8 py-3.5 rounded-lg text-lg transition-colors flex items-center gap-2 disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-5 h-5" /> {contact.form.submitLabel}</>
                    )}
                  </button>

                  {status === 'success' && (
                    <p className="text-accent-dark font-medium">{contact.form.successMessage}</p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-500 font-medium">Something went wrong. Please email us directly at {contact.info.email}.</p>
                  )}
                </form>
              </ScrollFadeIn>
            </div>

            {/* Info sidebar */}
            <div>
              <ScrollFadeIn>
                <div className="space-y-6">
                  {contact.info.items.map((item) => (
                    <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name={item.icon} className="w-5 h-5 text-navy-700" />
                        <h3 className="font-semibold text-navy-800">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 pl-8">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
