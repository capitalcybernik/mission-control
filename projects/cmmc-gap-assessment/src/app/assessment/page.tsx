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
  const [step, setStep] = useState(0); // 0 = grant code, 1 = company info, 2+ = control families
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    name: '', contact: '', email: '', phone: '', level: 'L1',
  });
  const [grantCode, setGrantCode] = useState('');
  const [grantCodeError, setGrantCodeError] = useState('');
  const [grantCodeValidating, setGrantCodeValidating] = useState(false);
  const [responses, setResponses] = useState<Record<string, ImplementationStatus>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.companyInfo) setCompanyInfo(data.companyInfo);
        if (data.grantCode) setGrantCode(data.grantCode);
        if (data.responses) setResponses(data.responses);
        if (data.notes) setNotes(data.notes);
        if (data.step !== undefined) setStep(data.step);
      } catch { /* ignore */ }
    }
  }, []);

  // Save to localStorage
  const save = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ companyInfo, grantCode, responses, notes, step }));
  }, [companyInfo, grantCode, responses, notes, step]);

  useEffect(() => { save(); }, [save]);

  const controls = getControlsForLevel(companyInfo.level);
  const grouped = getControlsByFamily(controls);
  const familyCodes = Object.keys(grouped).sort((a, b) => {
    const order = controlFamilies.map(f => f.code);
    return order.indexOf(a) - order.indexOf(b);
  });
  const totalSteps = familyCodes.length + 2; // +1 company info, +1 grant code

  const progress = Math.round((step / totalSteps) * 100);

  const handleResponse = (controlId: string, status: ImplementationStatus) => {
    setResponses(prev => ({ ...prev, [controlId]: status }));
  };

  const handleNotes = (controlId: string, value: string) => {
    setNotes(prev => ({ ...prev, [controlId]: value }));
  };

  const canProceedFromCompanyInfo = () => {
    return companyInfo.name && companyInfo.contact && companyInfo.email && companyInfo.phone;
  };

  const validateGrantCode = async () => {
    if (!grantCode.trim()) {
      setGrantCodeError('Please enter your grant code.');
      return;
    }
    setGrantCodeValidating(true);
    setGrantCodeError('');
    try {
      const res = await fetch('/api/validate-grant-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: grantCode.trim() }),
      });
      const data = await res.json();
      if (data.valid) {
        setStep(1);
      } else {
        setGrantCodeError('This grant code is not recognized. Please contact Cyber Grants Alliance to verify your code.');
      }
    } catch {
      setGrantCodeError('Unable to validate your code. Please try again.');
    } finally {
      setGrantCodeValidating(false);
    }
  };

  // Offset for control families: step 2 = familyCodes[0], step 3 = familyCodes[1], etc.
  const familyIndex = step - 2;
  const currentFamilyCode = step >= 2 ? familyCodes[familyIndex] : null;
  const currentControls = currentFamilyCode ? grouped[currentFamilyCode] : [];

  const allCurrentAnswered = currentControls.every(c => responses[c.id]);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/submit-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyInfo, grantCode: grantCode.trim(), responses, notes }),
      });
      if (res.ok) {
        localStorage.setItem('cmmc-assessment-result', JSON.stringify({ companyInfo, grantCode: grantCode.trim(), responses, notes, completedAt: new Date().toISOString() }));
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
        {/* Step 0: Grant Code Verification */}
        {step === 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Grant Code Verification</h2>
            <p className="text-gray-600 mb-6">
              Please enter the grant code provided to you by Cyber Grants Alliance to begin your assessment.
              If you don&apos;t have a code, visit{' '}
              <a href="https://cybergrantsalliance.org" target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] underline font-semibold hover:text-blue-700">
                cybergrantsalliance.org
              </a>{' '}
              to apply for the grant.
            </p>
            <div className="max-w-lg">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Enter your Grant Code *</label>
                <input
                  type="text"
                  value={grantCode}
                  onChange={e => { setGrantCode(e.target.value); setGrantCodeError(''); }}
                  onKeyDown={e => e.key === 'Enter' && validateGrantCode()}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent text-gray-900 text-lg tracking-wider uppercase"
                  placeholder="e.g. CMMC2026"
                />
              </div>
              {grantCodeError && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm">{grantCodeError}</p>
                </div>
              )}
              <div className="mt-6">
                <button
                  onClick={validateGrantCode}
                  disabled={grantCodeValidating || !grantCode.trim()}
                  className="bg-[#1e3a5f] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2a4f7f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {grantCodeValidating ? 'Validating...' : 'Continue →'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 1: Company Info */}
        {step === 1 && (
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
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => setStep(0)}
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(2)}
                disabled={!canProceedFromCompanyInfo()}
                className="bg-[#1e3a5f] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2a4f7f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Begin Assessment →
              </button>
            </div>
          </div>
        )}

        {/* Control Family Steps */}
        {step >= 2 && familyIndex < familyCodes.length && currentFamilyCode && (
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
                    <p className="text-gray-900 mt-2 text-base font-semibold">{control.plainDescription}</p>
                    <p className="text-gray-400 mt-1 text-xs italic">{control.name}</p>
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
                  <div className="mt-3">
                    <label className="block text-xs text-gray-500 mb-1">Notes (optional)</label>
                    <textarea
                      value={notes[control.id] || ''}
                      onChange={e => handleNotes(control.id, e.target.value)}
                      placeholder="Add any notes about this control..."
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent resize-none"
                    />
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
              {familyIndex < familyCodes.length - 1 ? (
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
