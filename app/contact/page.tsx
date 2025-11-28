'use client'

import React, { useState, useEffect } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/Button';
import { SectionDivider } from '@/components/SectionDivider';
import { Footer } from '@/components/Footer';
import { CalendarIcon, FileTextIcon, ListIcon } from 'lucide-react';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [scrollY, setScrollY] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message
        });
        // Clear form on success
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle scroll for geometric shapes animation
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="w-full">
      {/* Contact Form Section */}
      <section className="pt-20 md:pt-24 pb-16 md:pb-24 lg:pb-[120px] bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-[1000px] xl:max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[80px] xl:px-[120px]">
          <AnimatedSection>
            <div className="bg-gray-50 dark:bg-slate-700 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center text-[#0A2342] dark:text-white transition-colors">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-lg md:text-xl font-semibold mb-2 text-[#0A2342] dark:text-white transition-colors">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({
                      ...formData,
                      name: e.target.value
                    })}
                    className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-slate-600 dark:text-white focus:border-opacity-50 outline-none transition-all text-base md:text-lg"
                    style={{
                      borderColor: '#0A2342'
                    }}
                    required
                  />
                </div>
                <div>
                  <label className="block text-lg md:text-xl font-semibold mb-2 text-[#0A2342] dark:text-white transition-colors">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({
                      ...formData,
                      email: e.target.value
                    })}
                    className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-slate-600 dark:text-white focus:border-opacity-50 outline-none transition-all text-base md:text-lg"
                    style={{
                      borderColor: '#0A2342'
                    }}
                    required
                  />
                </div>
                <div>
                  <label className="block text-lg md:text-xl font-semibold mb-2 text-[#0A2342] dark:text-white transition-colors">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={e => setFormData({
                      ...formData,
                      message: e.target.value
                    })}
                    rows={6}
                    className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-slate-600 dark:text-white focus:border-opacity-50 outline-none transition-all resize-none text-base md:text-lg"
                    style={{
                      borderColor: '#0A2342'
                    }}
                    required
                  />
                </div>
                {/* Status Messages */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-xl ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300'
                      : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    style={{
                      backgroundColor: '#0A2342'
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  <p className="mt-3 md:mt-4 text-sm md:text-base text-[#0A2342] dark:text-gray-300 transition-colors">
                    We respond within 24 hours
                  </p>
                </div>
              </form>
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