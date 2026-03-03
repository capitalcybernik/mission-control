import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CMMC Ready Now',
  description: 'CMMC Ready Now privacy policy. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-8">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: March 2, 2026</p>

        <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
          <h2 className="text-xl font-bold text-navy-800">Information We Collect</h2>
          <p>When you use CMMC Ready Now, we may collect information you provide directly, including your name, email address, phone number, company name, and any details you share through our contact forms or assessment tools.</p>

          <h2 className="text-xl font-bold text-navy-800">How We Use Your Information</h2>
          <p>We use the information we collect to respond to your inquiries, provide CMMC compliance services, send relevant communications about our services, and improve our website and offerings. We do not sell your personal information to third parties.</p>

          <h2 className="text-xl font-bold text-navy-800">Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. As a cybersecurity company, we take data protection seriously and apply the same standards we recommend to our clients.</p>

          <h2 className="text-xl font-bold text-navy-800">Third Party Services</h2>
          <p>Our website may use third party services for analytics, form processing, and communication. These services have their own privacy policies governing the use of your information.</p>

          <h2 className="text-xl font-bold text-navy-800">Cookies</h2>
          <p>We may use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.</p>

          <h2 className="text-xl font-bold text-navy-800">Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. To exercise these rights or if you have questions about our privacy practices, please contact us at info@cmmcreadynow.com.</p>

          <h2 className="text-xl font-bold text-navy-800">Contact</h2>
          <p>CMMC Ready Now<br />1019B Edwards Ferry Rd. #1183<br />Leesburg, VA 20176<br />Email: info@cmmcreadynow.com<br />Phone: (571) 410 3066</p>
        </div>
      </div>
    </section>
  );
}
