'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  showArrow?: boolean;
  arrowDirection?: 'right' | 'up-right';
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  showArrow = false,
  className = '',
  children,
  icon,
  onClick,
  disabled,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-full select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#40E0D0] disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5 min-h-[36px]',
    md: 'text-sm px-6 py-2.5 gap-2 min-h-[44px]',
    lg: 'text-base px-8 py-3.5 gap-2.5 min-h-[52px]',
  };

  const variantStyles = {
    primary: 'bg-[#40E0D0] text-[#000000] font-bold border-2 border-[#40E0D0] hover:bg-[#FFFFFF] hover:text-[#000000] hover:border-[#40E0D0] active:scale-[0.98] shadow-sm',
    secondary: 'bg-[#FFFFFF] text-[#000000] border-2 border-[#40E0D0] font-semibold hover:bg-[#40E0D0] hover:border-[#40E0D0] hover:text-[#000000] active:scale-[0.98] shadow-sm',
    outline: 'bg-transparent text-[#000000] border-2 border-[#40E0D0] hover:bg-[#40E0D0] hover:text-[#000000] font-semibold active:scale-[0.98]',
    ghost: 'bg-transparent text-[#000000] hover:text-[#000000] hover:bg-[#FFFFFF]',
    white: 'bg-[#FFFFFF] text-[#000000] font-bold border-2 border-[#40E0D0] hover:bg-[#40E0D0] hover:border-[#40E0D0] active:scale-[0.98] shadow-sm',
  };

  const combinedClasses = twMerge(
    clsx(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    )
  );

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {content}
    </motion.button>
  );
};
