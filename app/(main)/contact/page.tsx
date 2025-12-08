'use client'

import { useState, useEffect } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Footer } from '@/components/Footer';
import { MailIcon, MapPinIcon, ArrowRightIcon } from 'lucide-react';


export default function Contact() {
  const [scrollY, setScrollY] = useState(0);
  
  // Handle scroll for geometric shapes animation
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEmailClick = () => {
    window.location.href = 'mailto:admin@bridgeafricahq.com?subject=Inquiry about BridgeAfrica&body=Hello BridgeAfrica team,%0D%0A%0D%0AI would like to learn more about your infrastructure intelligence platform.%0D%0A%0D%0ABest regards,';
  };
  
  return (
    <div className="w-full">
      {/* Main Contact Section */}
      <section className="pt-20 md:pt-24 pb-16 md:pb-24 lg:pb-[120px] bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 lg:px-[80px] xl:px-[120px]">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-[#0A2342] dark:text-white transition-colors">
                Get in Touch
              </h2>
              <p className="text-lg md:text-xl text-[#0A2342] dark:text-gray-300 transition-colors max-w-2xl mx-auto mb-8" style={{
                lineHeight: '1.7'
              }}>
                Ready to learn more about African infrastructure? We&apos;d love to hear from you.
              </p>
            </div>
            
            {/* Main Email CTA */}
            <div className="bg-gray-50 dark:bg-slate-700 rounded-3xl p-8 md:p-12 text-center mb-12">
              <div className="w-20 h-20 bg-[#D0312D] rounded-full flex items-center justify-center mx-auto mb-6">
                <MailIcon size={40} className="text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                Send Us an Email
              </h3>
              
              <p className="text-base md:text-lg text-[#0A2342] dark:text-gray-300 transition-colors mb-8 max-w-md mx-auto" style={{
                lineHeight: '1.6'
              }}>
                Click the button below to open your email client and send us a message directly.
              </p>
              
              <button
                onClick={handleEmailClick}
                className="inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 rounded-full font-semibold text-lg md:text-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 group"
                style={{
                  backgroundColor: '#D0312D'
                }}
              >
                <span>Email BridgeAfrica</span>
                <ArrowRightIcon size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <p className="mt-4 text-sm md:text-base text-[#0A2342] dark:text-gray-400 transition-colors">
                admin@bridgeafricahq.com
              </p>
            </div>
            
            {/* Additional Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Location */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-gray-100 dark:border-slate-600 text-center transition-colors">
                <div className="w-12 h-12 bg-[#F6BE00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon size={24} className="text-[#0A2342]" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-[#0A2342] dark:text-white transition-colors">
                  Our Location
                </h4>
                <p className="text-[#0A2342] dark:text-gray-300 transition-colors">
                  San Francisco, CA<br />
                  United States
                </p>
              </div>

              {/* Social */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-gray-100 dark:border-slate-600 text-center transition-colors">
                <div className="w-12 h-12 bg-[#0A2342] dark:bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.5v-7l6.2 3.5-6.2 3.5z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2 text-[#0A2342] dark:text-white transition-colors">
                  Follow Us
                </h4>
                <a 
                  href="https://www.youtube.com/@bridgeafrica-q4h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A2342] dark:text-gray-300 hover:text-[#D0312D] dark:hover:text-yellow-400 transition-colors font-medium"
                >
                  @bridgeafrica
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* Trust Signal Section */}
      <section className="py-16 md:py-24 lg:py-[120px] relative overflow-hidden bg-[#0A2342] dark:bg-slate-800">
        <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-[80px] xl:px-[120px] text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
              BridgeAfrica
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto" style={{
              lineHeight: '1.7'
            }}>
              Documenting Africa&apos;s infrastructure journey
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-20 left-1/2 transform -translate-x-1/2 md:left-20 md:transform-none w-24 h-24 md:w-40 md:h-40 rounded-full opacity-30 transition-transform duration-300 ease-out" 
            style={{
              backgroundColor: '#F6BE00',
              transform: `translateX(${-scrollY * 0.1}px)`
            }} 
          />
          <div 
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 md:right-20 md:left-auto md:transform-none w-20 h-20 md:w-32 md:h-32 rounded-full opacity-30 transition-transform duration-300 ease-out" 
            style={{
              backgroundColor: '#D0312D',
              transform: `translateX(${-scrollY * 0.15}px)`
            }} 
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}