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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  
  // Handle scroll for geometric shapes animation
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center pt-20 md:pt-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px] py-16 md:py-24 lg:py-[120px] text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-[#0A2342] dark:text-white transition-colors">
              Ready to Diversify Smart?
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-[#0A2342] dark:text-gray-300 transition-colors" style={{
              lineHeight: '1.7'
            }}>
              Choose how you would like to get started with BridgeAfrica
            </p>
          </AnimatedSection>
        </div>
      </section>
      <SectionDivider color="#f9fafb" />
      {/* Three Options Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <AnimatedSection delay={0}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6" style={{
                  backgroundColor: '#F6BE00'
                }}>
                  <CalendarIcon size={32} color="#0A2342" className="md:w-10 md:h-10" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{
                  color: '#0A2342'
                }}>
                  Book 15-Min Call
                </h3>
                <p className="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors" style={{
                  lineHeight: '1.7'
                }}>
                  Quick conversation to discuss your needs and see if we are a
                  good fit.
                </p>
                <Button>Schedule Call</Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6" style={{
                  backgroundColor: '#F6BE00'
                }}>
                  <FileTextIcon size={32} color="#0A2342" className="md:w-10 md:h-10" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{
                  color: '#0A2342'
                }}>
                  See Sample Profiles
                </h3>
                <p className="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors" style={{
                  lineHeight: '1.7'
                }}>
                  Browse examples of the exceptional talent we place with our
                  clients.
                </p>
                <Button>View Profiles</Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6" style={{
                  backgroundColor: '#F6BE00'
                }}>
                  <ListIcon size={32} color="#0A2342" className="md:w-10 md:h-10" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{
                  color: '#0A2342'
                }}>
                  Request Shortlist
                </h3>
                <p className="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors" style={{
                  lineHeight: '1.7'
                }}>
                  Get a custom shortlist of pre-vetted candidates within 48-72
                  hours.
                </p>
                <Button>Get Shortlist</Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <SectionDivider color="#ffffff" flip />
      {/* Contact Form Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 lg:px-[100px]">
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
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg text-white transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: '#0A2342'
                    }}
                  >
                    Send Message
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
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px] text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
              BridgeAfrica
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto" style={{
              lineHeight: '1.7'
            }}>
              Connecting visionary companies with Africa&apos;s top 1% talent
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