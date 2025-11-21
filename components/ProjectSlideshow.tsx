'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  location: string;
  imageUrl: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Grand Ethiopian Renaissance Dam",
    location: "Ethiopia",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    description: "Africa's largest hydroelectric dam project"
  },
  {
    id: 2,
    name: "Standard Gauge Railway",
    location: "Kenya",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
    description: "Modern railway connecting Nairobi to Mombasa"
  },
  {
    id: 3,
    name: "Lekki Port",
    location: "Nigeria",
    imageUrl: "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?w=800&h=600&fit=crop",
    description: "Deep seaport transforming West African trade"
  },
  {
    id: 4,
    name: "Dangote Refinery",
    location: "Nigeria", 
    imageUrl: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=600&fit=crop",
    description: "World's largest single-train petroleum refinery"
  },
  {
    id: 5,
    name: "Mohammed VI Tangier Tech City",
    location: "Morocco",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    description: "Major technology and innovation hub"
  },
  {
    id: 6,
    name: "AFRICOM Fiber Network",
    location: "Pan-Africa",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    description: "Undersea fiber optic connectivity"
  }
];

export function ProjectSlideshow() {
  const [currentProject, setCurrentProject] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <div className="relative w-full h-full">
      {/* Main Image Container */}
      <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
        {/* Sliding Container */}
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentProject * 100}%)`
          }}
        >
          {projects.map((project, index) => (
            <div key={project.id} className="relative flex-shrink-0 w-full h-full">
              <Image
                src={project.imageUrl}
                alt={`${project.name} - ${project.location}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority={index === 0}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Project Information */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 leading-tight">
                  {project.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-200 mb-1">
                  {project.location}
                </p>
                <p className="text-xs sm:text-sm md:text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
        <button
          onClick={handlePrevious}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 opacity-0 sm:opacity-100"
          aria-label="Previous project"
        >
          <ChevronLeftIcon size={16} className="text-white sm:w-5 sm:h-5" />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 opacity-0 sm:opacity-100"
          aria-label="Next project"
        >
          <ChevronRightIcon size={16} className="text-white sm:w-5 sm:h-5" />
        </button>
      </div>
      
      {/* Dot Indicators - Always visible for touch navigation */}
      <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 hover:scale-125 ${
              currentProject === index 
                ? 'bg-[#D0312D] shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}