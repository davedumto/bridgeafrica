import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

export function YouTubeEmbed({ 
  videoId, 
  title = "YouTube video player",
  className = ""
}: YouTubeEmbedProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}