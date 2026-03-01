'use client';

import { useEffect, useState } from 'react';
import { AssessmentResult, CompanyInfo, ImplementationStatus } from '@/types';
import { calculateResults } from '@/lib/scoring';

export default function ResultsPage() {
  const [result, setResult] = useState<AssessmentResult | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('cmmc-assessment-result');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        const computed = calculateResults(data.companyInfo, data.responses);
        setResult(computed);
      } catch { /* ignore */ }
    }
  }, []);

  if (!result) {
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

  const maxSprs = result.companyInfo.level === 'L1' ? 17 : 110;
  const scorePercent = Math.round((result.totalScore / Math.max(result.maxScore, 1)) * 100);
  const scoreColor = scorePercent >= 80 ? 'text-green-600' : scorePercent >= 50 ? 'text-yellow-600' : 'text-red-600';

  return (
    <div className="min-h-screen bg-white print:bg-white">
      {/* Header */}
      <header className="bg-[#1e3a5f] text-white py-4 px-6 print:bg-white print:text-[#1e3a5f] print:border-b-2 print:border-[#1e3a5f]">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">CMMC Gap Assessment Results</h1>
          <div className="flex gap-3 print:hidden">
            <button onClick={() => window.print()} className="text-sm bg-white/20 px-4 py-2 rounded hover:bg-white/30">
              Print / PDF
            </button>
            <a href="/" className="text-sm text-blue-200 hover:text-white">← Home</a>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Company & Score Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-2">Company</h3>
            <p className="text-lg font-bold text-gray-900">{result.companyInfo.name}</p>
            <p className="text-sm text-gray-600">{result.companyInfo.contact}</p>
            <p className="text-sm text-gray-600">{result.companyInfo.email}</p>
            <p className="text-xs text-gray-400 mt-2">
              CMMC {result.companyInfo.level === 'L1' ? 'Level 1' : 'Level 2'}
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-2">Compliance Score</h3>
            <p className={`text-4xl font-bold ${scoreColor}`}>{scorePercent}%</p>
            <p className="text-sm text-gray-500 mt-1">
              {result.totalScore.toFixed(1)} / {result.maxScore} applicable controls
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-2">SPRS Score</h3>
            <p className={`text-4xl font-bold ${result.sprsScore >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {result.sprsScore}
            </p>
            <p className="text-sm text-gray-500 mt-1">Max: {maxSprs}</p>
          </div>
        </div>

        {/* Family Breakdown */}
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Breakdown by Control Family</h2>
        <div className="space-y-3 mb-8">
          {result.familyScores.map(fs => {
            const applicable = fs.total - fs.notApplicable;
            if (applicable === 0) return null;
            const fullPct = (fs.fullyImplemented / applicable) * 100;
            const partialPct = (fs.partiallyImplemented / applicable) * 100;
            const notPct = (fs.notImplemented / applicable) * 100;
            return (
              <div key={fs.familyCode} className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">
                    {fs.familyCode}: {fs.familyName}
                  </span>
                  <span className="text-sm text-gray-500">
                    {fs.fullyImplemented}/{applicable} fully implemented
                  </span>
                </div>
                <div className="flex h-4 rounded-full overflow-hidden bg-gray-200">
                  {fullPct > 0 && <div className="bg-green-500" style={{ width: `${fullPct}%` }} />}
                  {partialPct > 0 && <div className="bg-yellow-400" style={{ width: `${partialPct}%` }} />}
                  {notPct > 0 && <div className="bg-red-500" style={{ width: `${notPct}%` }} />}
                </div>
                <div className="flex gap-4 mt-1 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full inline-block" /> Full: {fs.fullyImplemented}</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-yellow-400 rounded-full inline-block" /> Partial: {fs.partiallyImplemented}</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-red-500 rounded-full inline-block" /> Not Impl: {fs.notImplemented}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gaps */}
        {result.gaps.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Identified Gaps ({result.gaps.length})</h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium text-gray-600">Control</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-600">Description</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {result.gaps.map((gap, i) => (
                    <tr key={i} className="border-t border-gray-100">
                      <td className="px-4 py-3 font-mono text-xs text-gray-500 whitespace-nowrap">{gap.controlId}</td>
                      <td className="px-4 py-3 text-gray-800">{gap.description}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-1 rounded ${
                          gap.status === 'Partially Implemented' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {gap.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-[#1e3a5f] text-white rounded-lg p-8 text-center mb-8 print:hidden">
          <h2 className="text-2xl font-bold mb-3">Need Help Closing These Gaps?</h2>
          <p className="text-blue-200 mb-6 max-w-xl mx-auto">
            Our CMMC experts can help you build a remediation plan and get audit ready.
          </p>
          <a
            href="https://capital-cyber.com/rick"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#1e3a5f] font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>

        {/* Contact Form */}
        <div className="mb-8 print:hidden">
          <h2 className="text-xl font-bold text-[#1e3a5f] mb-4 text-center">Or Contact Us Directly</h2>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/9qEaBzqiyyfA9Tq823ks"
            style={{ width: '100%', height: 755, border: 'none' }}
            id="inline-9qEaBzqiyyfA9Tq823ks"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-activation-type="alwaysActivated"
            data-deactivation-type="neverDeactivate"
            data-form-name="Contact Form"
            data-height="755"
            title="Contact Form"
          />
        </div>
      </div>
    </div>
  );
}
