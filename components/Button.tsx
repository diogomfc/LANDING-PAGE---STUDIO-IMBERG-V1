import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  fullWidth?: boolean;
  className?: string;
  showIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  showIcon = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wider uppercase transition-all duration-300 rounded-sm";
  
  const variants = {
    primary: "bg-gold-400 text-dark-950 hover:bg-gold-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]",
    outline: "border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-dark-950",
    text: "text-gold-400 hover:text-gold-300 underline-offset-4 hover:underline px-0"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <a 
      href={WHATSAPP_LINK} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      {children}
      {showIcon && <ArrowRight className="ml-2 w-4 h-4" />}
    </a>
  );
};

export default Button;