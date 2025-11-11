'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/Button';
import { SectionDivider } from '@/components/SectionDivider';
import { Footer } from '@/components/Footer';
import { TargetIcon, HeartIcon, TrophyIcon } from 'lucide-react';


export default function About() {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll for geometric shapes animation
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center pt-20 md:pt-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px] py-16 md:py-24 lg:py-[120px]">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-[#0A2342] dark:text-white transition-colors">
              About Us
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl text-[#0A2342] dark:text-gray-300 transition-colors" style={{
              lineHeight: '1.7'
            }}>
              We started as an experiment by an MBA at UC Berkeley Haas who was building in public,
              sharing every win, setback, and lesson.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <SectionDivider color="#f9fafb" />
      {/* Origin Story Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="mb-4 md:mb-6 text-lg md:text-xl lg:text-2xl leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors" style={{
                lineHeight: '1.7'
              }}>
                The conversations that followed with founders revealed
                a clear truth: visionary teams do not have time to sift endlessly for A-players. They need
                exceptional software talent and operational firepower now.
              </p>
              <p className="mb-4 md:mb-6 text-lg md:text-xl lg:text-2xl leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors" style={{
                lineHeight: '1.7'
              }}>
                So we went all in. We connect bold companies with top-tier African engineers and operations
                talent who work like owners and scale with ambition.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="w-full h-64 md:h-80 lg:h-96 rounded-3xl flex items-center justify-center relative" style={{
                  backgroundColor: '#F6BE00'
                }}>
                  <div 
                    className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-48 h-48 md:w-64 md:h-64 rounded-full opacity-20 z-10 transition-transform duration-300 ease-out" 
                    style={{
                      backgroundColor: '#D0312D',
                      transform: `translateX(${-scrollY * 0.1}px)`
                    }} 
                  />
                  <Image
                    src="/icon.svg"
                    alt="BridgeAfrica company icon representing our mission to connect global companies with top African talent"
                    width={300}
                    height={300}
                    className="w-[18em] h-[18em] md:w-[20em] md:h-[18em] lg:w-[20em] lg:h-[23em] xl:w-[26em] object-contain relative z-20"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <SectionDivider color="#ffffff" flip />
      {/* Mission Section */}
      <section className="py-16 md:py-24 lg:py-[120px] relative overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px] text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-[#0A2342] dark:text-white transition-colors">
              Why Africa
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-[#0A2342] dark:text-gray-300 transition-colors" style={{
              lineHeight: '1.7'
            }}>
              Africa is rising. The region is dense with skilled builders who are hungry, resilient, and ready to
              compete globally. Diversifying your bench here is like a smart portfolio construction for talent:
              high caliber, cost-effective, and committed.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-40 h-40 rounded-full opacity-10" style={{
            backgroundColor: '#F6BE00'
          }} />
          <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full opacity-10" style={{
            backgroundColor: '#D0312D'
          }} />
        </div>
      </section>
      <SectionDivider color="#f9fafb" />
      {/* How We Work Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px]">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16 text-center text-[#0A2342] dark:text-white transition-colors">
              Why Us
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <AnimatedSection delay={0}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{
                  backgroundColor: '#F6BE00'
                }}>
                  <TargetIcon size={32} color="#0A2342" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  Operator DNA
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  We move like an extension of your internal team: fast, transparent,
                  and accountable.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{
                  backgroundColor: '#F6BE00'
                }}>
                  <HeartIcon size={32} color="#0A2342" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  No voodoo hiring
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  Rigorous pre-vetting for skill, speed, and cultural fit.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{
                  backgroundColor: '#F6BE00'
                }}>
                  <TrophyIcon size={32} color="#0A2342" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  Context first
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  We learn your pace, values, and roadmap, then curate matches that feel
                  custom-built.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <SectionDivider color="#ffffff" flip />
      {/* Promise Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px]">
          <AnimatedSection>
            <div className="bg-gray-50 dark:bg-slate-700 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-[#0A2342] dark:text-white transition-colors">
                Our Promise
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 leading-relaxed max-w-3xl mx-auto text-[#0A2342] dark:text-gray-300 transition-colors" style={{
                lineHeight: '1.7'
              }}>
                We are the hardest workers in the room because we have everything to prove. If a match isn`t
                perfect, we pivot (no ego, no excuses) until it is.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 leading-relaxed max-w-3xl mx-auto text-[#0A2342] dark:text-gray-300 transition-colors" style={{
                lineHeight: '1.7'
              }}>
                We`ve codified how to deliver A+ players from
                Africa, and we stake our reputation on your outcomes.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-[#0A2342] dark:text-gray-300 transition-colors" style={{
                lineHeight: '1.7'
              }}>
                At our core, we`re builders too. Join us if you`re ready to redefine what`s possible.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-[120px] relative overflow-hidden bg-[#0A2342] dark:bg-slate-800">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px] text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-white">
              Ready to Build Your Team?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-white leading-relaxed" style={{
              lineHeight: '1.7'
            }}>
              Let&apos;s discuss how BridgeAfrica can help you access Africa&apos;s top
              talent
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <Button>Request shortlist</Button>
              <Button variant="secondary" className='border border-1 border-[#D0312D]'>Book a call</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
}