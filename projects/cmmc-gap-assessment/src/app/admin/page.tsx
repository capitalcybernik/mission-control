'use client';

import { useState, useEffect } from 'react';
import { Submission } from '@/types';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selected, setSelected] = useState<Submission | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/submissions', {
        headers: { 'x-admin-password': password },
      });
      if (res.ok) {
        const data = await res.json();
        setSubmissions(data);
        setAuthenticated(true);
        sessionStorage.setItem('admin-pw', password);
      } else {
        setError('Invalid password');
      }
    } catch {
      setError('Failed to connect');
    }
    setLoading(false);
  };

  useEffect(() => {
    const saved = sessionStorage.getItem('admin-pw');
    if (saved) {
      setPassword(saved);
      fetch('/api/admin/submissions', { headers: { 'x-admin-password': saved } })
        .then(r => r.ok ? r.json() : Promise.reject())
        .then(data => { setSubmissions(data); setAuthenticated(true); })
        .catch(() => sessionStorage.removeItem('admin-pw'));
    }
  }, []);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h1 className="text-2xl font-bold text-[#1e3a5f] mb-6 text-center">Admin Login</h1>
          {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && login()}
            placeholder="Admin Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-[#1e3a5f] text-gray-900"
          />
          <button
            onClick={login}
            disabled={loading}
            className="w-full bg-[#1e3a5f] text-white py-2 rounded-lg hover:bg-[#2a4f7f] disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </div>
      </div>
    );
  }

  if (selected) {
    const r = selected.result;
    const scorePercent = Math.round((r.totalScore / Math.max(r.maxScore, 1)) * 100);
    return (
      <div className="min-h-screen bg-white print:bg-white">
        <header className="bg-[#1e3a5f] text-white py-4 px-6 print:bg-white print:text-[#1e3a5f] print:border-b">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Submission Detail</h1>
            <div className="flex gap-3 print:hidden">
              <button onClick={() => window.print()} className="text-sm bg-white/20 px-4 py-2 rounded hover:bg-white/30">Print / PDF</button>
              <button onClick={() => setSelected(null)} className="text-sm text-blue-200 hover:text-white">← Back</button>
            </div>
          </div>
        </header>
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="border rounded-lg p-4">
              <p className="text-xs text-gray-500 uppercase">Company</p>
              <p className="font-bold text-gray-900">{r.companyInfo.name}</p>
              <p className="text-sm text-gray-600">{r.companyInfo.contact}</p>
              <p className="text-sm text-gray-600">{r.companyInfo.email}</p>
              <p className="text-sm text-gray-600">{r.companyInfo.phone}</p>
            </div>
            <div className="border rounded-lg p-4 text-center">
              <p className="text-xs text-gray-500 uppercase">Score</p>
              <p className="text-3xl font-bold text-[#1e3a5f]">{scorePercent}%</p>
              <p className="text-sm text-gray-500">SPRS: {r.sprsScore}</p>
            </div>
            <div className="border rounded-lg p-4 text-center">
              <p className="text-xs text-gray-500 uppercase">Details</p>
              <p className="text-sm text-gray-600">Level: {r.companyInfo.level === 'L1' ? 'Level 1' : 'Level 2'}</p>
              <p className="text-sm text-gray-600">Gaps: {r.gaps.length}</p>
              <p className="text-sm text-gray-600">Submitted: {new Date(selected.submittedAt).toLocaleDateString()}</p>
            </div>
          </div>

          <h2 className="text-lg font-bold text-[#1e3a5f] mb-3">Family Scores</h2>
          <div className="space-y-2 mb-8">
            {r.familyScores.map(fs => {
              const applicable = fs.total - fs.notApplicable;
              if (applicable === 0) return null;
              return (
                <div key={fs.familyCode} className="flex items-center gap-4">
                  <span className="w-40 text-sm font-medium text-gray-700">{fs.familyCode}: {fs.familyName}</span>
                  <div className="flex-1 flex h-3 rounded-full overflow-hidden bg-gray-200">
                    {fs.fullyImplemented > 0 && <div className="bg-green-500" style={{ width: `${(fs.fullyImplemented / applicable) * 100}%` }} />}
                    {fs.partiallyImplemented > 0 && <div className="bg-yellow-400" style={{ width: `${(fs.partiallyImplemented / applicable) * 100}%` }} />}
                    {fs.notImplemented > 0 && <div className="bg-red-500" style={{ width: `${(fs.notImplemented / applicable) * 100}%` }} />}
                  </div>
                  <span className="text-xs text-gray-500 w-16 text-right">{fs.fullyImplemented}/{applicable}</span>
                </div>
              );
            })}
          </div>

          {r.gaps.length > 0 && (
            <>
              <h2 className="text-lg font-bold text-[#1e3a5f] mb-3">Gaps ({r.gaps.length})</h2>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-3 py-2 border">Control</th>
                    <th className="text-left px-3 py-2 border">Description</th>
                    <th className="text-left px-3 py-2 border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {r.gaps.map((g, i) => (
                    <tr key={i}>
                      <td className="px-3 py-2 border font-mono text-xs">{g.controlId}</td>
                      <td className="px-3 py-2 border">{g.description}</td>
                      <td className="px-3 py-2 border">
                        <span className={`text-xs px-2 py-0.5 rounded ${g.status === 'Partially Implemented' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                          {g.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#1e3a5f] text-white py-4 px-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <button
            onClick={() => { sessionStorage.removeItem('admin-pw'); setAuthenticated(false); }}
            className="text-sm text-blue-200 hover:text-white"
          >
            Logout
          </button>
        </div>
      </header>
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Submissions ({submissions.length})
        </h2>
        {submissions.length === 0 ? (
          <p className="text-gray-500">No submissions yet.</p>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Date</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Company</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Level</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Score</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">SPRS</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {submissions.map(s => {
                  const pct = Math.round((s.result.totalScore / Math.max(s.result.maxScore, 1)) * 100);
                  return (
                    <tr key={s.id} className="border-t border-gray-100 hover:bg-gray-50 cursor-pointer" onClick={() => setSelected(s)}>
                      <td className="px-4 py-3 text-gray-600">{new Date(s.submittedAt).toLocaleDateString()}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">{s.companyInfo.name}</td>
                      <td className="px-4 py-3">{s.companyInfo.level === 'L1' ? 'Level 1' : 'Level 2'}</td>
                      <td className="px-4 py-3">
                        <span className={`font-bold ${pct >= 80 ? 'text-green-600' : pct >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>{pct}%</span>
                      </td>
                      <td className="px-4 py-3">{s.result.sprsScore}</td>
                      <td className="px-4 py-3 text-[#1e3a5f]">View →</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
