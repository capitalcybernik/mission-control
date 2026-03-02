import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a2540] border-t border-[#1a3a5c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-4">
            <Image 
              src="/images/logo-white.webp" 
              alt="CMMC Ready Now" 
              width={200} 
              height={37} 
              className="mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Enterprise-grade CMMC compliance management platform designed to streamline your certification journey and maintain continuous compliance with confidence.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/cmmcreadynow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1a3a5c] flex items-center justify-center text-white hover:bg-[#2563eb] transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://twitter.com/cmmcreadynow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1a3a5c] flex items-center justify-center text-white hover:bg-[#1da1f2] transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="https://youtube.com/cmmcreadynow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1a3a5c] flex items-center justify-center text-white hover:bg-[#ff0000] transition-colors"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div className="md:col-span-4 md:pl-8">
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="https://capital-cyber.com/rick" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Book a Call with Rick
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/cmmc-guide" className="text-gray-400 hover:text-white text-sm transition-colors">
                  CMMC Guide
                </Link>
              </li>
              <li>
                <Link href="/best-practices" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Best Practices
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/help-center" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1a3a5c] my-8"></div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={18} />
            <div>
              <h5 className="font-semibold text-white mb-1 text-sm">Address</h5>
              <p className="text-gray-400 text-sm">
                1019B Edwards Ferry Rd. #1183<br />
                Leesburg, VA 20176
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <Phone className="text-gray-400 mt-1 flex-shrink-0" size={18} />
            <div>
              <h5 className="font-semibold text-white mb-1 text-sm">Phone</h5>
              <a 
                href="tel:+15714103066" 
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                +1 (571) 410-3066
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <Mail className="text-gray-400 mt-1 flex-shrink-0" size={18} />
            <div>
              <h5 className="font-semibold text-white mb-1 text-sm">Email</h5>
              <a 
                href="mailto:info@capital-cyber.com" 
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                info@capital-cyber.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1a3a5c] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} CMMC Ready Now. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
