'use client'

import React from 'react';
import { useDarkMode } from '@/contexts/DarkModeContext';

interface SectionDividerProps {
  color?: string;
  flip?: boolean;
}

export function SectionDivider({
  color = '#ffffff',
  flip = false
}: SectionDividerProps) {
  const { isDarkMode } = useDarkMode();
  
  // Map light mode colors to dark mode equivalents
  const getDarkModeColor = (lightColor: string) => {
    switch (lightColor) {
      case '#ffffff':
        return '#0f172a'; // slate-900 (white sections become slate-900)
      case '#f9fafb':
        return '#1e293b'; // slate-800 (gray-50 sections become slate-800)
      default:
        return lightColor; // Keep original color for other cases
    }
  };
  
  const fillColor = isDarkMode ? getDarkModeColor(color) : color;
  
  return <div className="w-full h-24 relative" style={{
    transform: flip ? 'scaleY(-1)' : 'none'
  }}>
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
        <path d="M0 0C240 40 480 60 720 60C960 60 1200 40 1440 0V120H0V0Z" fill={fillColor} />
      </svg>
    </div>;
}