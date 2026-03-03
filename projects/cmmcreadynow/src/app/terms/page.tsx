import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | CMMC Ready Now',
  description: 'CMMC Ready Now terms of service. Please read these terms carefully before using our website and services.',
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-8">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: March 2, 2026</p>

        <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
          <h2 className="text-xl font-bold text-navy-800">Acceptance of Terms</h2>
          <p>By accessing and using CMMC Ready Now (cmmcreadynow.com), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>

          <h2 className="text-xl font-bold text-navy-800">Services</h2>
          <p>CMMC Ready Now provides information, resources, and consulting services related to CMMC compliance, NIST 800 171, and cybersecurity for defense contractors. Our website content is for informational purposes and does not constitute legal or regulatory advice.</p>

          <h2 className="text-xl font-bold text-navy-800">Use of Website</h2>
          <p>You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of the website. You may not attempt to gain unauthorized access to any part of the website or its related systems.</p>

          <h2 className="text-xl font-bold text-navy-800">Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and software, is the property of CMMC Ready Now and Capital Cyber. You may not reproduce, distribute, or create derivative works from our content without written permission.</p>

          <h2 className="text-xl font-bold text-navy-800">Disclaimer</h2>
          <p>While we strive to provide accurate and up to date information about CMMC compliance, we make no warranties about the completeness, reliability, or accuracy of this information. CMMC requirements are subject to change by the Department of Defense, and you should always verify current requirements with official sources.</p>

          <h2 className="text-xl font-bold text-navy-800">Limitation of Liability</h2>
          <p>CMMC Ready Now and Capital Cyber shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the website or services. Our total liability shall not exceed the amount paid by you for services in the twelve months preceding the claim.</p>

          <h2 className="text-xl font-bold text-navy-800">Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Your continued use of the website after changes constitutes acceptance of the modified terms.</p>

          <h2 className="text-xl font-bold text-navy-800">Contact</h2>
          <p>CMMC Ready Now<br />1019B Edwards Ferry Rd. #1183<br />Leesburg, VA 20176<br />Email: info@cmmcreadynow.com<br />Phone: (571) 410 3066</p>
        </div>
      </div>
    </section>
  );
}
