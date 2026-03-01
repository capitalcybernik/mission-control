'use client';

import { useEffect, useState } from 'react';

export default function ResultsPage() {
  const [hasResult, setHasResult] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('cmmc-assessment-result');
    if (saved) {
      setHasResult(true);
    }
  }, []);

  if (!hasResult) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">No Assessment Found</h2>
          <p className="text-gray-600 mb-6">Please complete an assessment first.</p>
          <a href="/assessment" className="bg-[#1e3a5f] text-white px-6 py-3 rounded-lg hover:bg-[#2a4f7f]">
            Start Assessment
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1e3a5f] text-white py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">CMMC Gap Assessment</h1>
          <a href="/" className="text-sm text-blue-200 hover:text-white">← Home</a>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Thank You */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
            Thank you for completing your CMMC Gap Assessment
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Your results have been submitted to our compliance team for review.
          </p>
        </div>

        {/* Book a Call */}
        <div className="bg-[#f8fafc] rounded-xl p-8 mb-10">
          <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4 text-center">Review Your Gap Assessment</h3>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto text-center leading-relaxed">
            Book a slot with our compliance team to walk through your assessment results,
            identify your compliance gaps, and outline a clear path to CMMC certification.
          </p>
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/qDBYapk5LTQz3cdbtrFP"
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: 700 }}
            scrolling="no"
            id="qDBYapk5LTQz3cdbtrFP_booking"
            title="Book a Consultation"
          />
          <script src="https://link.msgsndr.com/js/form_embed.js" />
        </div>

        {/* Booking is the only CTA */}
      </div>
    </div>
  );
}
