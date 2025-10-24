import React, { useEffect, useState, useRef } from 'react';
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
export function AnimatedSection({
  children,
  className = '',
  delay = 0
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), delay);
      }
    }, {
      threshold: 0.1
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={`transition-all duration-[600ms] ease-out ${className}`} style={{
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
  }}>
      {children}
    </div>;
}