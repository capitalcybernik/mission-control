import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Start Your CMMC Gap Assessment
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-200">
              Know where you stand in 10 minutes
            </p>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              CMMC Ready Now helps DoD contractors understand their cybersecurity maturity 
              and compliance status against NIST 800-171 requirements.
            </p>
            <p className="text-md text-blue-200 mb-10 max-w-xl mx-auto">
              If you have a grant code from Cyber Grants Alliance, please have it handy.
              If you don&apos;t have a code, visit{' '}
              <a href="https://cybergrantsalliance.org" target="_blank" rel="noopener noreferrer" className="text-white underline font-semibold hover:text-blue-100">
                cybergrantsalliance.org
              </a>{' '}
              to apply for the grant.
            </p>
            <Link
              href="/assessment"
              className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-lg text-lg hover:bg-blue-50 transition"
            >
              Start Assessment
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-900">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Complete the Form</h3>
              <p className="text-slate-600">
                Answer questions about your organization&apos;s cybersecurity practices across all CMMC control families.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-900">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Review</h3>
              <p className="text-slate-600">
                Our CMMC compliance team reviews your assessment and calculates your readiness score.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-900">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Schedule Consultation</h3>
              <p className="text-slate-600">
                Receive your detailed gap report and schedule a call to review your path to compliance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CMMC Levels */}
      <div className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
            CMMC Levels We Assess
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Level 1</h3>
              <p className="text-slate-600 mb-4">
                Foundational cybersecurity for contractors handling Federal Contract Information (FCI).
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>17 basic controls</li>
                <li>Annual self-assessment</li>
                <li>Entry-level compliance</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 border-2 border-blue-900">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Level 2</h3>
              <p className="text-slate-600 mb-4">
                Advanced cybersecurity for contractors handling Controlled Unclassified Information (CUI).
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>110 NIST 800-171 controls</li>
                <li>Self-assessment or C3PAO</li>
                <li>Most common requirement</li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 opacity-60">
              <h3 className="text-xl font-bold text-gray-700 mb-4">Level 3</h3>
              <p className="text-gray-600 mb-4">
                Expert-level protection for high-value assets and critical programs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>24 additional controls</li>
                <li>Not yet available</li>
                <li>Coming Q4 2027</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to understand your CMMC status?</h2>
          <p className="text-xl mb-6 text-blue-200">
            Take the assessment and find out exactly where your organization stands.
          </p>
          <p className="text-md text-blue-300 mb-10">
            You will need a grant code from{' '}
            <a href="https://cybergrantsalliance.org" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-blue-100">
              Cyber Grants Alliance
            </a>{' '}
            to get started.
          </p>
          <Link
            href="/assessment"
            className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-lg text-lg hover:bg-blue-50 transition"
          >
            Start Assessment
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">CMMC Ready Now</p>
          <p className="text-sm">Powered by Capital Cyber</p>
          <p className="text-sm mt-4">
            <Link href="/admin/login" className="text-slate-500 hover:text-slate-300">
              Admin Login
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
