import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'online' | 'accent' | 'neutral' | 'outline' | 'speed';
  pulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  pulse = false,
  className = '',
}) => {
  const variantStyles = {
    online: 'bg-[#40E0D0] text-[#000000] border border-[#000000] font-bold',
    accent: 'bg-[#40E0D0] text-[#000000] border border-[#40E0D0] font-bold',
    neutral: 'bg-[#FFFFFF] text-[#000000] border border-[#000000] font-semibold',
    outline: 'bg-transparent text-[#000000] border border-[#40E0D0] font-semibold',
    speed: 'bg-[#40E0D0] text-[#000000] border border-[#000000] font-bold',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider select-none',
          variantStyles[variant],
          className
        )
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#40E0D0] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#40E0D0]"></span>
        </span>
      )}
      {children}
    </span>
  );
};
