'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { SectionDivider } from '@/components/SectionDivider';
import { Footer } from '@/components/Footer';
import { YouTubeEmbed } from '@/components/YouTubeEmbed';
import { ProjectSlideshow } from '@/components/ProjectSlideshow';
import { DatabaseIcon, MapIcon, NetworkIcon } from 'lucide-react';

export default function Home() {
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
      <section className="min-h-[80vh] md:min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-[80px] xl:px-[120px] py-16 md:py-24 lg:py-[120px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1">
              <AnimatedSection>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-[#0A2342] dark:text-white transition-colors">
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold block mb-2">
                    We tell the story of
                  </span>
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-[#D0312D] dark:text-[#D0312D]">
                    Africa&apos;s infrastructure.
                  </span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl mb-4 leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors" style={{
                  lineHeight: '1.7'
                }}>
                  From design and conceptualization to financing, timelines, and the defining moments in between, we document the projects reshaping Africa and the networks around them.
                </p>
                <p className="text-sm md:text-base mb-8 md:mb-12 leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors opacity-80" style={{
                  lineHeight: '1.7'
                }}>
                  We believe Africa will lead, and that its roads, grids, ports, rails, data centers, and cities must be built.
                  <br />
                  <span className="text-lg md:text-xl font-semibold text-[#D0312D] dark:text-[#D0312D]">
                    BridgeAfrica is where that story is told.
                  </span>
                </p>
                <Button>Watch Project Stories</Button>
              </AnimatedSection>
            </div>
            
            {/* Right Column - Project Slideshow */}
            <div className="order-1 lg:order-2 relative">
              <AnimatedSection delay={200}>
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
                  <ProjectSlideshow />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div 
            className="absolute top-20 left-4 w-8 h-8 md:w-16 md:h-16 rounded-full bg-yellow-500/20 dark:bg-yellow-400/30 transition-transform duration-300 ease-out" 
            style={{
              transform: `translateX(${-scrollY * 0.1}px)`
            }} 
          />
          <div 
            className="absolute bottom-40 right-8 w-6 h-6 md:w-12 md:h-12 rounded-full bg-red-500/20 dark:bg-red-400/30 transition-transform duration-300 ease-out" 
            style={{
              transform: `translateX(${-scrollY * 0.15}px)`
            }} 
          />
        </div>
      </section>
      
      {/* YouTube Video Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-[80px] xl:px-[120px]">
          <AnimatedSection>
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                See Africa&apos;s Infrastructure Story
              </h2>
              <p className="text-base md:text-lg text-[#0A2342] dark:text-gray-300 transition-colors max-w-2xl mx-auto" style={{
                lineHeight: '1.7'
              }}>
                Watch how we document and analyze the projects that are reshaping the continent.
              </p>
            </div>
            <YouTubeEmbed 
              videoId="ODNXdRY84Ug"
              title="BridgeAfrica: Documenting Africa's Infrastructure Journey"
              className="max-w-4xl mx-auto"
            />
          </AnimatedSection>
        </div>
      </section>
      
      <SectionDivider color="#f9fafb" />
      {/* Value Props Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-[80px] xl:px-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <AnimatedSection delay={0} className="flex">
              <Card icon={<DatabaseIcon size={32} color="#0A2342" />} title="Tell Stories" description="We capture the full story of African projects—where the idea came from, who is involved, what's at stake, and how things change over time. Headlines but also the narrative that makes a project understandable and unforgettable." delay={0} />
            </AnimatedSection>
            <AnimatedSection delay={100} className="flex">
              <Card icon={<NetworkIcon size={32} color="#0A2342" />} title="Show Reality" description="We document projects as they really are: the design, conceptualization, financing, timelines, delays, breakthroughs, and tradeoffs. Beyond timelines and press releases, we show how infrastructure actually gets built (or stuck)." delay={100} />
            </AnimatedSection>
            <AnimatedSection delay={200} className="flex">
              <Card icon={<MapIcon size={32} color="#0A2342" />} title="Move Futures" description="We use these stories to shift what happens next. By making projects visible and clear, we inspire builders, inform decisions, and accelerate capital—so the next wave of African infrastructure can move faster and further." delay={200} />
            </AnimatedSection>
          </div>
        </div>
      </section>
      <SectionDivider color="#ffffff" flip />
      {/* Why BridgeAfrica Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-[80px] xl:px-[120px]">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-[#0A2342] dark:text-white transition-colors">
              See. Remember. Understand. Connect.
            </h2>
            <p className="text-lg md:text-xl mb-8 md:mb-16 text-center text-[#0A2342] dark:text-gray-300 transition-colors">
              Africa is transforming—but its infrastructure story risks being fragmented, forgotten, or misunderstood. That is why we exist to for:
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <AnimatedSection delay={0}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  Visibility
                </h3>
                <p className="leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  To surface the most important infrastructure projects—past, present, and planned—across sectors like transport, energy, housing, and telecoms. From obscure government tenders to megaprojects, we track what&apos;s being built and where.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  Memory
                </h3>
                <p className="leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  Africa&apos;s infrastructure era deserves to be remembered. BridgeAfrica creates a searchable record of milestones, policies, and outcomes—so we don&apos;t repeat mistakes and we build on what works.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  Insight
                </h3>
                <p className="leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  We go beyond tracking to explain. From financing and policy to procurement and politics, we unpack the systems shaping Africa&apos;s development so decisions are informed, not improvised.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  Engagement
                </h3>
                <p className="leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  This isn&apos;t just a database—it&apos;s a civic tool. BridgeAfrica fosters dialogue between builders, analysts, journalists, and the public to create more transparent, accountable, and inclusive infrastructure outcomes.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <SectionDivider color="#f9fafb" />
      {/* Our Aspiration Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-[80px] xl:px-[120px]">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16 text-center text-[#0A2342] dark:text-white transition-colors">
              Our Aspiration
            </h2>
          </AnimatedSection>
          
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 items-stretch">
            {[{
              number: '1',
              title: 'Shape Understanding',
              description: 'Become the most trusted source for accurate, nuanced, and accessible insight on Africa&apos;s infrastructure transformation.'
            }, {
              number: '2', 
              title: 'Inspire Accountability',
              description: 'Empower citizens, media, and policymakers with the clarity they need to track promises, follow the money, and demand progress.'
            }, {
              number: '3',
              title: 'Build Connection',
              description: 'Create a shared space where builders, thinkers, and communities can engage meaningfully around the future being constructed across the continent.'
            }].map((step, index) => (
              <React.Fragment key={index}>
                <AnimatedSection delay={index * 200} className="flex-1">
                  <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-gray-200 dark:border-slate-600 transition-colors h-full flex flex-col">
                    <div className="text-6xl md:text-7xl font-bold opacity-80 text-[#D0312D] dark:text-[#D0312D] mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                      lineHeight: '1.7'
                    }}>
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
                
                {index < 2 && (
                  <>
                    {/* Desktop horizontal arrow */}
                    <div className="hidden lg:flex items-center">
                      <Image 
                        src="/arrow%20right.svg" 
                        alt="Process flow arrow pointing to next step in BridgeAfrica&apos;s aspiration framework" 
                        width={80}
                        height={48}
                        className="w-[5em] h-[3em] animate-pulse"
                        style={{ 
                          filter: 'brightness(0) saturate(100%) invert(13%) sepia(69%) saturate(4154%) hue-rotate(347deg) brightness(92%) contrast(92%)',
                          animation: 'arrow-pulse 2s ease-in-out infinite'
                        }}
                      />
                    </div>
                    
                    {/* Mobile vertical arrow */}
                    <div className="lg:hidden flex justify-center py-4">
                      <Image 
                        src="/arrow%20right.svg" 
                        alt="Process flow arrow pointing to next step in BridgeAfrica&apos;s aspiration framework" 
                        width={32}
                        height={32}
                        className="w-8 h-8 rotate-90"
                        style={{ 
                          filter: 'brightness(0) saturate(100%) invert(13%) sepia(69%) saturate(4154%) hue-rotate(347deg) brightness(92%) contrast(92%)',
                          animation: 'arrow-pulse 2s ease-in-out infinite'
                        }}
                      />
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-[120px] relative overflow-hidden bg-[#0A2342] dark:bg-slate-800">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px] text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-white">
              Get Started
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-white leading-relaxed" style={{
              lineHeight: '1.7'
            }}>
              Explore the projects reshaping Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <Button>Watch Project Stories</Button>
              <Button variant="secondary" className='border-1 border border-[#D0321D]'>Contact Us</Button>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-20 left-20 w-40 h-40 rounded-full opacity-30 transition-transform duration-300 ease-out" 
            style={{
              backgroundColor: '#F6BE00',
              transform: `translateX(${-scrollY * 0.1}px)`
            }} 
          />
          <div 
            className="absolute bottom-20 right-20 w-32 h-32 rounded-full opacity-30 transition-transform duration-300 ease-out" 
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