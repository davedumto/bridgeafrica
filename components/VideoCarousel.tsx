'use client'

import React, { useState, useEffect } from 'react';
import { YouTubeEmbed } from './YouTubeEmbed';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { extractYouTubeVideoId } from '@/lib/youtube';

interface Video {
  _id: string;
  url: string;
  title?: string;
  order: number;
}

export function VideoCarousel() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch videos on component mount
  useEffect(() => {
    fetchVideos();
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (videos.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
      }, 8000); // Change every 8 seconds
      return () => clearInterval(interval);
    }
  }, [videos.length]);

  const fetchVideos = async () => {
    try {
      const response = await fetch('/api/videos');
      const data = await response.json();

      if (data.success && data.videos.length > 0) {
        setVideos(data.videos);
      } else {
        // Fallback to default video if no videos in database
        setVideos([{
          _id: 'default',
          url: 'https://www.youtube.com/embed/ODNXdRY84Ug',
          title: 'BridgeAfrica: Documenting Africa\'s Infrastructure Journey',
          order: 1
        }]);
      }
    } catch (error) {
      // Fallback to default video on error
      setVideos([{
        _id: 'default',
        url: 'https://www.youtube.com/embed/ODNXdRY84Ug',
        title: 'BridgeAfrica: Documenting Africa\'s Infrastructure Journey',
        order: 1
      }]);
      setError('Failed to load videos');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="aspect-video bg-gray-200 dark:bg-slate-700 rounded-2xl flex items-center justify-center animate-pulse">
          <div className="text-[#0A2342] dark:text-gray-300">Loading video...</div>
        </div>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="aspect-video bg-gray-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-[#0A2342] dark:text-gray-300 font-medium">No videos available</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Check back later for updates</div>
          </div>
        </div>
      </div>
    );
  }

  const currentVideo = videos[currentIndex];
  const videoId = extractYouTubeVideoId(currentVideo.url);

  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Main Video Container with Sliding Animation */}
      <div className="relative overflow-hidden rounded-2xl">
        {/* Sliding Container */}
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {videos.map((video, index) => {
            const videoId = extractYouTubeVideoId(video.url);
            return (
              <div key={video._id} className="relative flex-shrink-0 w-full">
                <YouTubeEmbed 
                  videoId={videoId || 'ODNXdRY84Ug'} // Fallback video ID
                  title={video.title || 'BridgeAfrica Video'}
                  className="w-full"
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows - Only show if multiple videos */}
        {videos.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 opacity-0 sm:opacity-100 z-10"
              aria-label="Previous video"
            >
              <ChevronLeftIcon size={20} className="text-white" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 opacity-0 sm:opacity-100 z-10"
              aria-label="Next video"
            >
              <ChevronRightIcon size={20} className="text-white" />
            </button>
          </>
        )}
      </div>
      
      {/* Video Title - Show current video title if available */}
      {videos[currentIndex]?.title && (
        <div className="text-center mt-4">
          <h3 className="text-lg font-medium text-[#0A2342] dark:text-white">
            {videos[currentIndex].title}
          </h3>
        </div>
      )}

      {/* Dot Indicators - Only show if multiple videos */}
      {videos.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-125 ${
                currentIndex === index 
                  ? 'bg-[#D0312D] shadow-lg' 
                  : 'bg-gray-300 dark:bg-slate-600 hover:bg-gray-400 dark:hover:bg-slate-500'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      )}


      {/* Error Message */}
      {error && (
        <div className="text-center mt-2">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}
    </div>
  );
}