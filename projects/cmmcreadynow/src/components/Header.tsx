'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '@/content/site-content';

export function Header() {
  const [open, setOpen] = useState(false);
  const { nav } = siteContent;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/favicon.png" alt="CMMC Ready Now" width={32} height={32} />
          <span className="text-lg font-bold text-navy-800">CMMC Ready Now</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-navy-800 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-navy-800 hover:bg-navy-700 text-white font-semibold text-sm px-5 py-2 rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </nav>

        <button className="md:hidden text-gray-600" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          {nav.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-gray-600 hover:text-navy-800 transition-colors py-2"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block bg-navy-800 text-white font-semibold text-center py-2 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
