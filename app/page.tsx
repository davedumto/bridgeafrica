'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { SectionDivider } from '@/components/SectionDivider';
import { Footer } from '@/components/Footer';
import { CheckCircleIcon, ShieldCheckIcon, ClockIcon, DollarSignIcon, UsersIcon } from 'lucide-react';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const testimonials = [{
    quote: 'BridgeAfrica transformed our hiring process. We found exceptional talent that seamlessly integrated with our team culture.',
    company: 'TechCorp Inc.'
  }, {
    quote: 'The quality of candidates and the speed of delivery exceeded all our expectations. Truly a game-changer for our operations.',
    company: 'Global Solutions Ltd.'
  }, {
    quote: 'Working with BridgeAfrica has been one of the best decisions we have made. Their team understands our needs perfectly.',
    company: 'Innovation Partners'
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
              Diversify your team with
              <br />
              Africa&apos;s top 1% talent
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-12 leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors" style={{
              lineHeight: '1.7'
            }}>
              Software · Admin · Creative — we place the best
            </p>
            <Button>Get Started Today</Button>
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
      <SectionDivider color="#f9fafb" />
      {/* Value Props Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <AnimatedSection delay={0}>
              <Card icon={<CheckCircleIcon size={32} color="#0A2342" />} title="Best Software and Admin Talent" description="We rigorously vet every candidate to ensure only the top 1% of African professionals." delay={0} />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Card icon={<UsersIcon size={32} color="#0A2342" />} title="Team Diversification" description="Build resilience with a distributed team across Africa, reducing risk and expanding capabilities." delay={100} />
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card icon={<ShieldCheckIcon size={32} color="#0A2342" />} title="Fully Managed Service" description="We handle everything from payroll to contracts, so you can focus on growing your business." delay={200} />
            </AnimatedSection>
          </div>
        </div>
      </section>
      <SectionDivider color="#ffffff" flip />
      {/* Why BridgeAfrica Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-[100px]">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16 text-center text-[#0A2342] dark:text-white transition-colors">
              Why BridgeAfrica
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <AnimatedSection delay={0}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  Battle-Tested Pipeline
                </h3>
                <p className="leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  Our rigorous vetting process ensures only exceptional talent
                  makes it through. We have refined our methods over years of
                  placements.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  Zero Headaches
                </h3>
                <p className="leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  We handle all payroll, contracts, and administrative tasks.
                  You get the talent without the operational burden.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  7-Day Replacement Guarantee
                </h3>
                <p className="leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  If a placement does not work out, we will find a replacement
                  within 7 days at no additional cost.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  Transparent Flat Pricing
                </h3>
                <p className="leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  No hidden fees or surprises. Our pricing is straightforward
                  , giving you exceptional value.
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
              How it works
            </h2>
          </AnimatedSection>
          
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 items-stretch">
            {[{
              number: '1',
              title: 'Tell us what you need',
              description: 'Share your requirements, team culture, and project details with us'
            }, {
              number: '2', 
              title: 'We find the perfect match',
              description: 'Our team curates candidates from our vetted talent pool within 48-72 hours'
            }, {
              number: '3',
              title: 'Start building',
              description: 'Your new team integrates seamlessly and starts contributing immediately'
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
                        alt="Next step" 
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
                        alt="Next step" 
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
                  Average time to deployment: 48-72 hours
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
              Hear what our clients have to say
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
                  — {testimonials[currentTestimonial].company}
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
              Ready to diversify smart?
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-white leading-relaxed" style={{
              lineHeight: '1.7'
            }}>
              Join forward-thinking companies building resilient teams with
              Africa&apos;s best talent
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <Button>Book 15 min call</Button>
              <Button variant="secondary" className='border-1 border border-[#D0321D]'>See sample profiles</Button>
              <Button>Request shortlist</Button>
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