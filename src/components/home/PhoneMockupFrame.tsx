'use client';

import React from 'react';

interface PhoneMockupFrameProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const PhoneMockupFrame: React.FC<PhoneMockupFrameProps> = ({
  children,
  className = '',
  glow = false,
}) => {
  return (
    <div
      className={`relative select-none ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Subtle Ambient Turquoise Radial Backlight when enabled */}
      {glow && (
        <div className="absolute -inset-6 sm:-inset-10 bg-radial from-[#40E0D0]/20 via-[#40E0D0]/5 to-transparent blur-3xl pointer-events-none -z-10" />
      )}

      {/* External Frame: Space Titanium / Graphite Bevel */}
      <div className="relative p-[8px] sm:p-[10px] bg-gradient-to-b from-[#2A333C] via-[#12161A] to-[#0A0D10] rounded-[46px] sm:rounded-[52px] border border-[#3E4956]/60 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.45),0_0_40px_rgba(64,224,208,0.12)] transition-shadow duration-500">
        
        {/* Subtle Side Button Accents */}
        {/* Volume Up */}
        <div className="absolute -left-[3px] top-[105px] w-[3px] h-[32px] bg-[#3E4956] rounded-l-sm" />
        {/* Volume Down */}
        <div className="absolute -left-[3px] top-[148px] w-[3px] h-[32px] bg-[#3E4956] rounded-l-sm" />
        {/* Power / Lock Button */}
        <div className="absolute -right-[3px] top-[125px] w-[3px] h-[48px] bg-[#3E4956] rounded-r-sm" />

        {/* Micro Speaker Grill at Top Rim */}
        <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-12 h-[3px] bg-[#1E252D] rounded-full z-40 border border-white/5" />

        {/* Inner Glass Display Area */}
        <div className="relative w-full aspect-[9/19.2] bg-black rounded-[38px] sm:rounded-[44px] overflow-hidden border border-black/40">
          {children}

          {/* Diagonal Glass Sheen Reflection */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.12] z-30" />
          
          {/* Inner Rim Highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-[38px] sm:rounded-[44px] border border-white/10 z-30" />
        </div>
      </div>
    </div>
  );
};
