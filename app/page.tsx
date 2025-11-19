'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { SectionDivider } from '@/components/SectionDivider';
import { Footer } from '@/components/Footer';
import { YouTubeEmbed } from '@/components/YouTubeEmbed';
import { DatabaseIcon, MapIcon, NetworkIcon } from 'lucide-react';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const testimonials = [{
    quote: 'For anyone serious about understanding Africa\'s infrastructure, BridgeAfrica is essential.',
    company: 'Infrastructure investor'
  }, {
    quote: 'The most reliable source for African infrastructure data and analysis.',
    company: 'Development finance professional'
  }, {
    quote: 'Essential platform for tracking Africa\'s transformative projects and understanding the networks building the continent.',
    company: 'Infrastructure analyst'
  }];
  
  // Handle scroll for geometric shapes animation
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const handleTestimonialChange = (index: number) => {
    if (index !== currentTestimonial) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentTestimonial(index);
        setIsTransitioning(false);
      }, 300);
    }
  };
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[80vh] md:min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px] py-16 md:py-24 lg:py-[120px] relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-[#0A2342] dark:text-white transition-colors">
              We tell the story of
              <br />
              Africa&apos;s infrastructure.
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
              BridgeAfrica is where that story is told.
            </p>
            <Button>Explore Projects</Button>
          </AnimatedSection>
        </div>
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-20 right-4 md:right-20 w-16 h-16 md:w-32 md:h-32 rounded-full bg-red-500/20 dark:bg-red-400/30 transition-transform duration-300 ease-out" 
            style={{
              transform: `translateX(${-scrollY * 0.1}px)`
            }} 
          />
          <div 
            className="absolute bottom-40 left-4 md:left-40 w-12 h-12 md:w-24 md:h-24 rounded-full bg-yellow-500/20 dark:bg-yellow-400/30 transition-transform duration-300 ease-out" 
            style={{
              transform: `translateX(${-scrollY * 0.15}px)`
            }} 
          />
          <div 
            className="absolute top-1/2 right-8 md:right-1/3 w-20 h-20 md:w-40 md:h-40 rounded-full bg-blue-900/10 dark:bg-blue-400/20 transition-transform duration-300 ease-out" 
            style={{
              transform: `translateX(${-scrollY * 0.05}px)`
            }} 
          />
        </div>
      </section>
      
      {/* YouTube Video Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 lg:px-[100px]">
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
              videoId="dQw4w9WgXcQ"
              title="BridgeAfrica: Documenting Africa's Infrastructure Journey"
              className="max-w-4xl mx-auto"
            />
          </AnimatedSection>
        </div>
      </section>
      
      <SectionDivider color="#f9fafb" />
      {/* Value Props Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <AnimatedSection delay={0} className="flex">
              <Card icon={<DatabaseIcon size={32} color="#0A2342" />} title="Document the projects" description="The Grand Ethiopian Renaissance Dam. The Standard Gauge Railway. Lekki Port. The Trans-African Highway network. We track every major infrastructure project reshaping Africa from first concept to ribbon cutting." delay={0} />
            </AnimatedSection>
            <AnimatedSection delay={100} className="flex">
              <Card icon={<NetworkIcon size={32} color="#0A2342" />} title="Follow the money" description="Infrastructure is financed, procured, and delivered through complex networks. We map who builds, who funds, and how deals get done across the continent." delay={100} />
            </AnimatedSection>
            <AnimatedSection delay={200} className="flex">
              <Card icon={<MapIcon size={32} color="#0A2342" />} title="Tell the story" description="Beyond steel and concrete are the decisions, delays, breakthroughs, and people that determine whether infrastructure gets built. We document it all." delay={200} />
            </AnimatedSection>
          </div>
        </div>
      </section>
      <SectionDivider color="#ffffff" flip />
      {/* Why BridgeAfrica Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px]">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-[#0A2342] dark:text-white transition-colors">
              For Nigeria, For Africa
            </h2>
            <p className="text-lg md:text-xl mb-8 md:mb-16 text-center text-[#0A2342] dark:text-gray-300 transition-colors">
              BridgeAfrica is the essential platform for understanding Africa's infrastructure story with deep expertise in the Nigerian market.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <AnimatedSection delay={0}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  Unmatched Project Intelligence
                </h3>
                <p className="leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  Real-time tracking of major infrastructure projects across transportation, energy, telecommunications, and urban development. No project database comes close to our depth and accuracy.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  Market-Leading Analysis
                </h3>
                <p className="leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  We don&apos;t just report what&apos;s being built. We explain the financing models, regulatory frameworks, procurement processes, and geopolitical dynamics shaping Africa&apos;s infrastructure landscape.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  Documenting History
                </h3>
                <p className="leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  These projects deserve to be documented, understood, and remembered. BridgeAfrica is that record.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  Africa&apos;s Future
                </h3>
                <p className="leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  From the Grand Ethiopian Renaissance Dam to the Standard Gauge Railway, from Dangote Refinery to the Trans-African Highway network. Africa is building the infrastructure that will power the next century.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <SectionDivider color="#f9fafb" />
      {/* Process Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px]">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16 text-center text-[#0A2342] dark:text-white transition-colors">
              How We Work
            </h2>
          </AnimatedSection>
          
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 items-stretch">
            {[{
              number: '1',
              title: 'Research',
              description: 'On-ground reporting, government documents, contractor records, stakeholder interviews. Every data point verified and sourced.'
            }, {
              number: '2', 
              title: 'Map the networks',
              description: 'Track financing, identify stakeholders, document relationships. Understand not just *what* is being built, but *who* is building it and *how*.'
            }, {
              number: '3',
              title: 'Keep it current',
              description: 'Infrastructure projects evolve. We update progress, timelines, costs, and milestones as they happen.'
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
                        alt="Process flow arrow pointing to next step in BridgeAfrica's 72-hour talent placement process" 
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
                        alt="Process flow arrow pointing to next step in BridgeAfrica's 72-hour talent placement process" 
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

          <AnimatedSection delay={600}>
            <div className="mt-16 md:mt-24 text-center">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-700 rounded-full px-6 py-3 shadow-md">
                <div className="w-2 h-2 bg-[#D0312D] rounded-full"></div>
                <span className="text-sm font-medium text-[#0A2342] dark:text-gray-300">
                  Real-time infrastructure intelligence
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <SectionDivider color="#ffffff" flip />
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px]">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-[#0A2342] dark:text-white transition-colors">
              Essential Infrastructure Intelligence
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-white dark:bg-slate-700 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="relative z-10 transition-opacity duration-300" style={{
                opacity: isTransitioning ? 0 : 1
              }}>
                <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 md:mb-8 leading-relaxed text-[#0A2342] dark:text-gray-100 transition-colors" style={{
                  lineHeight: '1.7'
                }}>
                  &quot;{testimonials[currentTestimonial].quote}&quot;
                </p>
                <p className="text-lg md:text-xl font-bold" style={{
                  color: '#D0312D'
                }}>
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
              <div className="flex justify-center gap-3 mt-8 md:mt-12">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleTestimonialChange(index)}
                    className="w-3 h-3 rounded-full transition-all duration-300 hover:scale-125"
                    style={{
                      backgroundColor: currentTestimonial === index ? '#D0312D' : '#E5E7EB'
                    }}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
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
              <Button>Explore Projects</Button>
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