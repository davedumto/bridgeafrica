import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}
export function Button({
  children,
  variant = 'primary',
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = 'px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base text-white transition-all duration-300 hover:scale-105';
  const variantStyles = variant === 'primary' 
    ? 'bg-secondary hover:bg-accent dark:bg-secondary-dark dark:hover:bg-accent-dark' 
    : 'bg-primary hover:bg-secondary dark:bg-primary-dark dark:hover:bg-secondary-dark';
  
  return <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </button>;
}