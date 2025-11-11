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
              Africa&apos;s top 1% talent.
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-4 leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors" style={{
              lineHeight: '1.7'
            }}>
              Software & Admin — we place the best. No one comes close.
            </p>
            <p className="text-sm md:text-base mb-8 md:mb-12 leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors opacity-80" style={{
              lineHeight: '1.7'
            }}>
              Managed service, flat monthly pricing, Fill in 72 hrs
            </p>
            <Button>Book a Call</Button>
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
            <AnimatedSection delay={0} className="flex">
              <Card icon={<CheckCircleIcon size={32} color="#0A2342" />} title="Quality: Best Software and Admin Talent" description="Quality, without compromise. We surface the top 1% software engineers, operators, and creatives—pre‑vetted for skill, speed, and communication." delay={0} />
            </AnimatedSection>
            <AnimatedSection delay={100} className="flex">
              <Card icon={<UsersIcon size={32} color="#0A2342" />} title="Diversify your outsourcing Option" description="Resilience by design. Build a second home base in Africa to de‑risk geography and unlock round‑the‑clock velocity." delay={100} />
            </AnimatedSection>
            <AnimatedSection delay={200} className="flex">
              <Card icon={<ShieldCheckIcon size={32} color="#0A2342" />} title="Trust: Managed service so you can win" description="Managed for outcomes. We handle payroll, contracts, compliance, devices/security, and ongoing performance. You focus on product and growth." delay={200} />
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
              When you choose Africa—choose the best
            </h2>
            <p className="text-lg md:text-xl mb-8 md:mb-16 text-center text-[#0A2342] dark:text-gray-300 transition-colors">
              BridgeAfrica is the best outsourcing shop for African talent, full stop.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <AnimatedSection delay={0}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  Operator DNA
                </h3>
                <p className="leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  We move like an extension of your internal team—fast, transparent,
                  accountable.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  No voodoo hiring
                </h3>
                <p className="leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  Rigorous pre-vetting for skill, speed, and cultural fit.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  Context first
                </h3>
                <p className="leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  We learn your pace, values, and roadmap, then curate matches that feel
                  custom-built.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border-2 border-[#0A2342] dark:border-slate-500 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2342] dark:text-white transition-colors">
                  From day one impact
                </h3>
                <p className="leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors flex-grow" style={{
                  lineHeight: '1.7'
                }}>
                  Our very first placement—a VA for a legal practitioner—became
                  a growth unlock. We`ve been igniting wins ever since.
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
              Our 72‑Hour Flow
            </h2>
          </AnimatedSection>
          
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 items-stretch">
            {[{
              number: '1',
              title: 'Precision Intake',
              description: 'Deep‑dive on role outcomes, sprints, comms cadence, time zones, tool stack, and culture markers. Define acceptance criteria and 30‑60‑90 day milestones.'
            }, {
              number: '2', 
              title: 'Curate & Calibrate',
              description: 'Source from always‑warm pipeline; skills & comms re‑verification. Send 3–5 shortlists with reference summaries. You give rapid feedback.'
            }, {
              number: '3',
              title: 'Working Session & Offer',
              description: 'Live technical or work‑sample session. Final mutual fit check (culture & pace). Offer + managed onboarding.'
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
                  Fill in 72 hours
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