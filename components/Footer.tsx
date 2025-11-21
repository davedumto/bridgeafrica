'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LinkedinIcon, TwitterIcon, FacebookIcon, MailIcon } from 'lucide-react';
import { useDarkMode } from '@/contexts/DarkModeContext';
import { toast } from 'sonner';
export function Footer() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { isDarkMode } = useDarkMode();
  
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Show loading toast
    const loadingToast = toast.loading('Subscribing to newsletter...', {
      style: {
        background: '#ffffff',
        color: '#0A2342',
        border: '1px solid #e2e8f0',
      }
    });

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'footer'
        }),
      });

      const data = await response.json();

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (data.success) {
        toast.success('Successfully subscribed!', {
          description: 'Thank you for subscribing! Check your email for a welcome message.',
          style: {
            background: '#f0fdf4',
            color: '#166534',
            border: '1px solid #bbf7d0',
          },
          duration: 5000,
        });
        setEmail('');
      } else {
        toast.error('Subscription failed', {
          description: data.message || 'Something went wrong. Please try again.',
          style: {
            background: '#fef2f2',
            color: '#dc2626',
            border: '1px solid #fecaca',
          },
          duration: 5000,
        });
      }
    } catch (error) {
      // Dismiss loading toast
      toast.dismiss(loadingToast);
      
      // Handle network errors specifically
      if (error instanceof TypeError && error.message.includes('fetch')) {
        toast.error('Network Error', {
          description: 'Please check your internet connection and try again.',
          style: {
            background: '#fef2f2',
            color: '#dc2626',
            border: '1px solid #fecaca',
          },
          duration: 6000,
        });
      } else {
        toast.error('Something went wrong', {
          description: 'Please try again later.',
          style: {
            background: '#fef2f2',
            color: '#dc2626',
            border: '1px solid #fecaca',
          },
          duration: 5000,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return <footer className="w-full bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 transition-colors duration-300">
      {/* Newsletter Section */}
      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-[80px] xl:px-[120px] py-8 md:py-16 border-b border-gray-200 dark:border-slate-700">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
          <div className="w-full md:w-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#0A2342] dark:text-white transition-colors">
              Stay Connected
            </h3>
            <p className="text-sm md:text-base text-[#0A2342] dark:text-white transition-colors">
              Subscribe to our newsletter for the latest updates and insights
            </p>
          </div>
          <div className="w-full md:w-auto">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="Enter your email" 
                className="px-4 md:px-6 py-2 md:py-3 rounded-full border-2 border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-[#0A2342] dark:text-white outline-none focus:border-opacity-50 w-full sm:w-64 md:w-80 transition-colors" 
                style={{
                  borderColor: '#0A2342'
                }} 
                required 
                disabled={isLoading}
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100" 
                style={{
                  backgroundColor: '#D0312D'
                }}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Subscribing...
                  </div>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Links Section */}
      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-[80px] xl:px-[120px] py-6 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-2xl mx-auto">
          {/* Resources Column */}
          <div>
            <h4 className="text-sm md:text-lg font-bold mb-2 md:mb-6 text-[#0A2342] dark:text-white transition-colors">
              Resources
            </h4>
            <ul className="space-y-1 md:space-y-3">
              <li>
                <a href="#" className="text-sm md:text-base transition-colors hover:underline text-[#0A2342] dark:text-gray-300">
                  Write-Ups
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@bridgeafrica" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base transition-colors hover:underline text-[#0A2342] dark:text-gray-300">
                  Videos
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm md:text-base transition-colors hover:underline text-[#0A2342] dark:text-gray-300">
                  Contact Us
                </Link>
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
        <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-[80px] xl:px-[120px] py-4 md:py-8">
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
              <a href="https://www.youtube.com/@bridgeafrica" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{
              backgroundColor: '#F6BE00'
            }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A2342">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.5v-7l6.2 3.5-6.2 3.5z"/>
                </svg>
              </a>
              <a href="https://instagram.com/bridgeafrica" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{
              backgroundColor: '#F6BE00'
            }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A2342">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@bridgeafrica" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{
              backgroundColor: '#F6BE00'
            }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A2342">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}