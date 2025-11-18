'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMenu } from '@/contexts/MenuContext';

export function MobileSidebar() {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  
  return (
    <>
      {/* Mobile Menu - Completely separate from Navigation */}
      <div className={`md:hidden fixed top-[6em] right-0 w-64 bg-white dark:bg-slate-900 shadow-xl transform transition-transform duration-300 ease-in-out rounded-l-2xl border-t-2 border-l-2 border-b-2 border-[#0A2342] dark:border-slate-500 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } z-[70]`}>
        <div className="px-6 py-6 space-y-6">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className={`block text-lg font-medium transition-colors py-3 ${
            isActive('/') ? 'text-[#F6BE00] dark:text-yellow-400' : 'text-[#0A2342] dark:text-gray-200'
          }`}>
            Home
          </Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className={`block text-lg font-medium transition-colors py-3 ${
            isActive('/contact') ? 'text-[#F6BE00] dark:text-yellow-400' : 'text-[#0A2342] dark:text-gray-200'
          }`}>
            Contact
          </Link>
        </div>
      </div>
      
      {/* Backdrop */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-[35]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}