import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-transform duration-200 hover:-translate-y-1 active:translate-y-0 shadow-lg hover:shadow-xl text-sm md:text-base";
  
  const variants = {
    primary: "bg-brand-green text-white hover:bg-[#2b9347]",
    secondary: "bg-brand-brown text-brand-beige hover:bg-[#654d35]",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
      <ArrowRight className="w-5 h-5" />
    </button>
  );
};