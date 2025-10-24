'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from 'lucide-react';
import { useDarkMode } from '@/contexts/DarkModeContext';
import { useMenu } from '@/contexts/MenuContext';

export function Navigation() {
  const pathname = usePathname();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const isActive = (path: string) => pathname === path;
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px] py-4 md:py-6 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold text-[#0A2342] dark:text-yellow-400 transition-colors">
          BridgeAfrica
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 lg:gap-12 items-center">
          <Link href="/" className={`text-base font-medium transition-colors ${
            isActive('/') ? 'text-[#D0312D] dark:text-yellow-400' : 'text-[#0A2342] dark:text-gray-200'
          }`}>
            Home
          </Link>
          <Link href="/about" className={`text-base font-medium transition-colors ${
            isActive('/about') ? 'text-[#D0312D] dark:text-yellow-400' : 'text-[#0A2342] dark:text-gray-200'
          }`}>
            About Us
          </Link>
          <Link href="/contact" className={`text-base font-medium transition-colors ${
            isActive('/contact') ? 'text-[#D0312D] dark:text-yellow-400' : 'text-[#0A2342] dark:text-gray-200'
          }`}>
            Contact
          </Link>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-[#0A2342] dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            <div className="relative w-5 h-5">
              <div className={`absolute inset-0 transition-all duration-300 ${isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`}>
                <SunIcon size={20} />
              </div>
              <div className={`absolute inset-0 transition-all duration-300 ${isDarkMode ? 'opacity-0 -rotate-180' : 'opacity-100 rotate-0'}`}>
                <MoonIcon size={20} />
              </div>
            </div>
          </button>
        </div>
        {/* Mobile Menu and Dark Mode Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-[#0A2342] dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            <div className="relative w-5 h-5">
              <div className={`absolute inset-0 transition-all duration-300 ${isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`}>
                <SunIcon size={20} />
              </div>
              <div className={`absolute inset-0 transition-all duration-300 ${isDarkMode ? 'opacity-0 -rotate-180' : 'opacity-100 rotate-0'}`}>
                <MoonIcon size={20} />
              </div>
            </div>
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-[#0A2342] dark:text-gray-200 transition-colors">
            <div className="relative w-6 h-6">
              <div className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`}>
                <MenuIcon size={24} />
              </div>
              <div className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`}>
                <XIcon size={24} />
              </div>
            </div>
          </button>
        </div>
      </div>
      </nav>
    </>
  );
}