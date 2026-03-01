'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { CompanyInfo, CMMCLevel, ImplementationStatus, Control } from '@/types';
import { getControlsForLevel, getControlsByFamily, getFamilyName, controlFamilies } from '@/data/assessment-controls';

const STATUS_OPTIONS: ImplementationStatus[] = [
  'Fully Implemented',
  'Partially Implemented',
  'Not Implemented',
  'Not Applicable',
];

const STATUS_COLORS: Record<ImplementationStatus, string> = {
  'Fully Implemented': 'bg-green-100 border-green-500 text-green-800',
  'Partially Implemented': 'bg-yellow-100 border-yellow-500 text-yellow-800',
  'Not Implemented': 'bg-red-100 border-red-500 text-red-800',
  'Not Applicable': 'bg-gray-100 border-gray-400 text-gray-600',
};

const STORAGE_KEY = 'cmmc-assessment-data';

export default function AssessmentPage() {
  const router = useRouter();
  const [step, setStep] = useState(0); // 0 = company info, 1+ = control families
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    name: '', contact: '', email: '', phone: '', level: 'L1',
  });
  const [responses, setResponses] = useState<Record<string, ImplementationStatus>>({});
  const [submitting, setSubmitting] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.companyInfo) setCompanyInfo(data.companyInfo);
        if (data.responses) setResponses(data.responses);
        if (data.step !== undefined) setStep(data.step);
      } catch { /* ignore */ }
    }
  }, []);

  // Save to localStorage
  const save = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ companyInfo, responses, step }));
  }, [companyInfo, responses, step]);

  useEffect(() => { save(); }, [save]);

  const controls = getControlsForLevel(companyInfo.level);
  const grouped = getControlsByFamily(controls);
  const familyCodes = Object.keys(grouped).sort((a, b) => {
    const order = controlFamilies.map(f => f.code);
    return order.indexOf(a) - order.indexOf(b);
  });
  const totalSteps = familyCodes.length + 1; // +1 for company info

  const progress = Math.round((step / totalSteps) * 100);

  const handleResponse = (controlId: string, status: ImplementationStatus) => {
    setResponses(prev => ({ ...prev, [controlId]: status }));
  };

  const canProceedFromCompanyInfo = () => {
    return companyInfo.name && companyInfo.contact && companyInfo.email && companyInfo.phone;
  };

  const currentFamilyCode = step > 0 ? familyCodes[step - 1] : null;
  const currentControls = currentFamilyCode ? grouped[currentFamilyCode] : [];

  const allCurrentAnswered = currentControls.every(c => responses[c.id]);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/submit-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyInfo, responses }),
      });
      if (res.ok) {
        localStorage.setItem('cmmc-assessment-result', JSON.stringify({ companyInfo, responses, completedAt: new Date().toISOString() }));
        localStorage.removeItem(STORAGE_KEY);
        router.push('/results');
      } else {
        alert('Failed to submit assessment. Please try again.');
      }
    } catch {
      alert('Failed to submit assessment. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1e3a5f] text-white py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">CMMC Gap Assessment</h1>
          <a href="/" className="text-sm text-blue-200 hover:text-white">← Back to Home</a>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">
            Step {step + 1} of {totalSteps}
          </span>
          <span className="text-sm text-gray-600">{progress}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-[#1e3a5f] h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Step 0: Company Info */}
        {step === 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Company Information</h2>
            <div className="space-y-4 max-w-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                <input
                  type="text"
                  value={companyInfo.name}
                  onChange={e => setCompanyInfo(p => ({ ...p, name: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent text-gray-900"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name *</label>
                <input
                  type="text"
                  value={companyInfo.contact}
                  onChange={e => setCompanyInfo(p => ({ ...p, contact: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent text-gray-900"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  value={companyInfo.email}
                  onChange={e => setCompanyInfo(p => ({ ...p, email: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent text-gray-900"
                  placeholder="john@acme.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input
                  type="tel"
                  value={companyInfo.phone}
                  onChange={e => setCompanyInfo(p => ({ ...p, phone: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent text-gray-900"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CMMC Level *</label>
                <div className="flex gap-4">
                  {(['L1', 'L2'] as CMMCLevel[]).map(level => (
                    <button
                      key={level}
                      onClick={() => setCompanyInfo(p => ({ ...p, level }))}
                      className={`flex-1 py-3 px-6 rounded-lg border-2 font-medium transition-all ${
                        companyInfo.level === level
                          ? 'border-[#1e3a5f] bg-[#1e3a5f] text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-[#1e3a5f]'
                      }`}
                    >
                      <div className="text-lg">{level === 'L1' ? 'Level 1' : 'Level 2'}</div>
                      <div className="text-xs mt-1 opacity-80">
                        {level === 'L1' ? '17 Controls (FCI)' : '110 Controls (CUI)'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                onClick={() => setStep(1)}
                disabled={!canProceedFromCompanyInfo()}
                className="bg-[#1e3a5f] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2a4f7f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Begin Assessment →
              </button>
            </div>
          </div>
        )}

        {/* Control Family Steps */}
        {step > 0 && step <= familyCodes.length && currentFamilyCode && (
          <div>
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">
              {getFamilyName(currentFamilyCode)} ({currentFamilyCode})
            </h2>
            <p className="text-gray-500 mb-6">
              {currentControls.length} control{currentControls.length !== 1 ? 's' : ''} in this family
            </p>

            <div className="space-y-4">
              {currentControls.map((control, idx) => (
                <div key={control.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="mb-3">
                    <span className="text-xs font-mono text-gray-400">{control.id}</span>
                    {control.isL1 && (
                      <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">L1</span>
                    )}
                    <p className="text-gray-800 mt-1 font-medium">{control.name}</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {STATUS_OPTIONS.map(status => (
                      <button
                        key={status}
                        onClick={() => handleResponse(control.id, status)}
                        className={`text-xs py-2 px-2 rounded border-2 transition-all font-medium ${
                          responses[control.id] === status
                            ? STATUS_COLORS[status]
                            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setStep(s => s - 1)}
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                ← Back
              </button>
              {step < familyCodes.length ? (
                <button
                  onClick={() => setStep(s => s + 1)}
                  className="bg-[#1e3a5f] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2a4f7f] transition-colors"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 transition-colors"
                >
                  {submitting ? 'Submitting...' : 'Submit Assessment ✓'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
