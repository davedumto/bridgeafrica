'use client'

import React from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/Button';
import { SectionDivider } from '@/components/SectionDivider';
import { Footer } from '@/components/Footer';
import { TargetIcon, HeartIcon, TrophyIcon } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center pt-20 md:pt-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px] py-16 md:py-24 lg:py-[120px]">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-[#0A2342] dark:text-white transition-colors">
              Our Story
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl text-[#0A2342] dark:text-gray-300 transition-colors" style={{
              lineHeight: '1.7'
            }}>
              BridgeAfrica was born from a simple observation: the world&apos;s most
              innovative companies were missing out on exceptional talent simply
              because they were looking in the same places.
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#0A2342] dark:text-white transition-colors">
                It Started at UC Berkeley
              </h2>
              <p className="mb-4 md:mb-6 text-base md:text-lg leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors" style={{
                lineHeight: '1.7'
              }}>
                During our MBA program, we discovered that founders were
                struggling with the same challenge: finding quality talent that
                could scale with their vision without breaking the bank.
              </p>
              <p className="mb-4 md:mb-6 text-base md:text-lg leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors" style={{
                lineHeight: '1.7'
              }}>
                Our first virtual assistant placement was a revelation. The
                talent was exceptional, the cultural fit was perfect, and the
                cost savings were substantial.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors" style={{
                lineHeight: '1.7'
              }}>
                That success story became the foundation for BridgeAfrica.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="w-full h-64 md:h-80 lg:h-96 rounded-3xl" style={{
                  backgroundColor: '#F6BE00'
                }} />
                <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-48 h-48 md:w-64 md:h-64 rounded-full opacity-20" style={{
                  backgroundColor: '#D0312D'
                }} />
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
              Africa is Rising
            </h2>
            <p className="text-2xl md:text-3xl mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto text-[#0A2342] dark:text-gray-300 transition-colors" style={{
              lineHeight: '1.7'
            }}>
              Diversify your bench here. We work hardest because we have
              everything to prove.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-[#0A2342] dark:text-gray-300 transition-colors" style={{
              lineHeight: '1.7'
            }}>
              Our mission is to connect visionary companies with top-tier
              African talent, creating opportunities that transform businesses
              and lives.
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
              How We Work
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
                  No Voodoo Hiring
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  We become an extension of your team, we understand your needs
                  deeply before making any recommendations.
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
                  Culture-First Vetting
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  We pre-vet every candidate for cultural fit, ensuring they
                  align with your company values and vision.
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
                  Deep Understanding
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  We take time to understand your values, goals, and team
                  dynamics before presenting candidates.
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
                Not for Everyone — By Design
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 leading-relaxed max-w-3xl mx-auto text-[#0A2342] dark:text-gray-300 transition-colors" style={{
                lineHeight: '1.7'
              }}>
                We work with forward-thinking companies ready to experiment and
                embrace new ways of building teams.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-[#0A2342] dark:text-gray-300 transition-colors" style={{
                lineHeight: '1.7'
              }}>
                Our commitment is relentless. We bring no egos, just results.
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
              <Button variant="secondary">Book a call</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
}