'use client'

import React, { useState } from 'react';
import { CalendarIcon } from 'lucide-react';

export function FloatingCTAButton() {
  const [isHovered, setIsHovered] = useState(false);

  // Handle opening Calendly link
  const handleScheduleCall = () => {
    window.open('https://calendly.com/bridgeafrica98/30min', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleScheduleCall}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="
          group relative flex items-center gap-3 px-6 py-3 rounded-full
          bg-[#D0312D] hover:bg-[#B02A26] 
          text-white font-semibold text-sm
          shadow-lg hover:shadow-xl
          transition-all duration-300 ease-out
          transform hover:scale-105
        "
        aria-label="Schedule a call"
      >
        {/* Icon */}
        <div className="flex-shrink-0">
          <CalendarIcon size={20} className="text-white" />
        </div>
        
        {/* Text - always visible */}
        <span className="whitespace-nowrap">
          Schedule a Call
        </span>

        {/* Hover effect background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D0312D] to-[#B02A26] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>

      {/* Tooltip for additional context */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Book a 15-minute call
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
}