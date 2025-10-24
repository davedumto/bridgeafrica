import React from 'react';
interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}
export function Card({
  icon,
  title,
  description,
  delay = 0
}: CardProps) {
  return <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{
    animationDelay: `${delay}ms`
  }}>
      {icon && <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 bg-yellow-400 dark:bg-yellow-500">
          {icon}
        </div>}
      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#0A2342] dark:text-white transition-colors">
        {title}
      </h3>
      <p className="text-sm md:text-base leading-relaxed text-[#0A2342] dark:text-gray-300 transition-colors" style={{
      lineHeight: '1.7'
    }}>
        {description}
      </p>
    </div>;
}