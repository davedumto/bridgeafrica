'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LinkedinIcon, TwitterIcon, FacebookIcon, MailIcon } from 'lucide-react';
import { useDarkMode } from '@/contexts/DarkModeContext';
export function Footer() {
  const [email, setEmail] = useState('');
  const { isDarkMode } = useDarkMode();
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };
  return <footer className="w-full bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 transition-colors duration-300">
      {/* Newsletter Section */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px] py-8 md:py-16 border-b border-gray-200 dark:border-slate-700">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
          <div className="w-full md:w-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#0A2342] dark:text-white transition-colors">
              Stay Connected
            </h3>
            <p className="text-sm md:text-base text-[#0A2342] dark:text-white transition-colors">
              Subscribe to our newsletter for the latest updates and insights
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="px-4 md:px-6 py-2 md:py-3 rounded-full border-2 border-gray-300 outline-none focus:border-opacity-50 w-full sm:w-64 md:w-80" style={{
            borderColor: '#0A2342'
          }} required />
            <button type="submit" className="px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 whitespace-nowrap" style={{
            backgroundColor: '#D0312D'
          }}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* Links Section */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px] py-6 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {/* Solutions Column */}
          <div>
            <h4 className="text-sm md:text-lg font-bold mb-2 md:mb-6 text-[#0A2342] dark:text-white transition-colors">
              Solutions
            </h4>
            <ul className="space-y-1 md:space-y-3">
              <li>
                <a href="#" className="text-sm md:text-base transition-colors hover:underline text-[#0A2342] dark:text-gray-300">
                  Software Talent
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base transition-colors hover:underline text-[#0A2342] dark:text-gray-300">
                  Admin Support
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base transition-colors hover:underline text-[#0A2342] dark:text-gray-300">
                  Creative Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base transition-colors hover:underline text-[#0A2342] dark:text-gray-300">
                  Team Building
                </a>
              </li>
            </ul>
          </div>
          {/* Company Column */}
          <div>
            <h4 className="text-sm md:text-lg font-bold mb-2 md:mb-6 text-[#0A2342] dark:text-white transition-colors">
              Company
            </h4>
            <ul className="space-y-1 md:space-y-3">
              <li>
                <Link href="/about" className="text-sm md:text-base transition-colors hover:underline text-[#0A2342] dark:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base transition-colors hover:underline text-[#0A2342] dark:text-gray-300">
                  Careers
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm md:text-base transition-colors hover:underline text-[#0A2342] dark:text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base transition-colors hover:underline text-[#0A2342] dark:text-gray-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* Resources Column */}
          <div>
            <h4 className="text-sm md:text-lg font-bold mb-2 md:mb-6 text-[#0A2342] dark:text-white transition-colors">
              Resources
            </h4>
            <ul className="space-y-1 md:space-y-3">
              <li>
                <a href="#" className="text-sm md:text-base transition-colors hover:underline text-[#0A2342] dark:text-gray-300">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base transition-colors hover:underline text-[#0A2342] dark:text-gray-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base transition-colors hover:underline text-[#0A2342] dark:text-gray-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base transition-colors hover:underline text-[#0A2342] dark:text-gray-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Column */}
          <div>
            <h4 className="text-sm md:text-lg font-bold mb-2 md:mb-6 text-[#0A2342] dark:text-white transition-colors">
              Get in Touch
            </h4>
            <ul className="space-y-1 md:space-y-3">
              <li className="flex items-start gap-2">
                <MailIcon size={20} className="mt-1 flex-shrink-0 text-[#0A2342] dark:text-white transition-colors" />
                <a href="mailto:hello@bridgeafrica.com" className="text-sm md:text-base transition-colors hover:underline break-all text-[#0A2342] dark:text-gray-300">
                  hello@bridgeafrica.com
                </a>
              </li>
              <li className="text-sm md:text-base text-[#0A2342] dark:text-gray-300 transition-colors">
                <div className="font-semibold mb-1">Headquarters</div>
                <div>San Francisco, CA</div>
                <div>United States</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-t border-gray-200 dark:border-slate-700">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px] py-4 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Logo and Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 text-center sm:text-left">
              <Link href="/" className="transition-opacity duration-300 hover:opacity-80">
                <Image
                  src={isDarkMode ? "/yellowlogo.svg" : "/bluelogo.svg"}
                  alt="BridgeAfrica"
                  width={160}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                />
              </Link>
              <p className="text-xs md:text-sm text-[#0A2342] dark:text-gray-300 transition-colors">
                © 2025 BridgeAfrica. All Rights Reserved
              </p>
            </div>
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{
              backgroundColor: '#F6BE00'
            }}>
                <LinkedinIcon size={20} color="#0A2342" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{
              backgroundColor: '#F6BE00'
            }}>
                <TwitterIcon size={20} color="#0A2342" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{
              backgroundColor: '#F6BE00'
            }}>
                <FacebookIcon size={20} color="#0A2342" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}