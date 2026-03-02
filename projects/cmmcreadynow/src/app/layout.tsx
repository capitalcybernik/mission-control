import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteContent } from '@/content/site-content';

export const metadata: Metadata = {
  title: `${siteContent.brand.name} | CMMC Compliance Made Simple`,
  description: siteContent.home.hero.subheadline,
  keywords: ['CMMC', 'compliance', 'cybersecurity', 'NIST 800-171', 'defense contractor', 'gap assessment'],
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
