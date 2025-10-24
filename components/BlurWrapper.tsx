'use client'

import React from 'react';
import { useMenu } from '@/contexts/MenuContext';

export function BlurWrapper({ children }: { children: React.ReactNode }) {
  const { isMenuOpen } = useMenu();
  
  return (
    <div className={`transition-all duration-300 ${isMenuOpen ? 'blur-sm' : 'blur-none'}`}>
      {children}
    </div>
  );
}