'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useReducedMotion, animate } from 'framer-motion';
import { appShowcaseConfig, ImpactStatisticItem } from '@/config/appShowcase';

interface StatCounterProps {
  item: ImpactStatisticItem;
  duration?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ item, duration = 1.8 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const shouldReduceMotion = useReducedMotion();

  // Initial value: if reduced motion, show target value immediately, otherwise start at 0
  const [currentVal, setCurrentVal] = useState<number>(shouldReduceMotion ? item.rawValue : 0);
  const [hasCompleted, setHasCompleted] = useState<boolean>(shouldReduceMotion ?? false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setCurrentVal(item.rawValue);
      setHasCompleted(true);
      return;
    }

    if (isInView && !hasCompleted) {
      const controls = animate(0, item.rawValue, {
        duration,
        ease: [0.16, 1, 0.3, 1], // Smooth high-end easing
        onUpdate: (latest) => {
          setCurrentVal(Math.round(latest));
        },
        onComplete: () => {
          setCurrentVal(item.rawValue);
          setHasCompleted(true);
        },
      });

      return () => controls.stop();
    }
  }, [isInView, item.rawValue, duration, shouldReduceMotion, hasCompleted]);

  // Format number (e.g. 6100 -> "6,100")
  const formattedNumber = currentVal.toLocaleString('en-US');

  return (
    <div ref={ref} className="flex flex-col">
      {/* Large Numerical Display with Turquoise Suffix Accent */}
      <div className="flex items-baseline tracking-tight font-sans text-black leading-none select-none">
        <span className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-light text-[#000000]">
          {formattedNumber}
        </span>
        <span className="text-[#40E0D0] font-semibold text-3xl sm:text-4xl md:text-3xl lg:text-5xl ml-1">
          {item.suffix.trim()}
        </span>
      </div>

      {/* Statistic Label */}
      <div className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#000000] uppercase mt-3 sm:mt-4">
        {item.label}
      </div>

      {/* Supporting Narrative */}
      <p className="text-xs sm:text-sm text-[#000000]/70 font-normal leading-relaxed mt-1.5 sm:mt-2 max-w-xs">
        {item.supportingText}
      </p>
    </div>
  );
};

export const EVIONAppStats: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const stats = appShowcaseConfig.impactStatistics;

  return (
    <section
      id="app-impact-stats"
      className="relative w-full bg-[#FFFFFF] text-[#000000] py-16 sm:py-20 lg:py-24 border-b border-[#000000]/10 overflow-hidden"
      aria-label="EVION Network Impact Statistics"
    >
      {/* Outer Margin Electrical Guide Lines matching the showcase section */}
      <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[1px] bg-gradient-to-b from-[#40E0D0]/20 via-[#40E0D0]/40 to-transparent pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-6 sm:right-12 w-[1px] bg-gradient-to-b from-transparent via-[#40E0D0]/40 to-transparent pointer-events-none hidden md:block" />

      {/* Subtle Ambient Radial Highlight */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[300px] bg-[#40E0D0]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Subtle Section Label & Top Rule */}
        <div className="flex items-center justify-between pb-8 sm:pb-12 border-b border-[#000000]/10 mb-8 sm:mb-12">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#40E0D0]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#000000] uppercase">
              NETWORK SCALE & CAPABILITY
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#000000]/50 uppercase tracking-widest hidden sm:inline-block">
            REAL-TIME METRICS
          </span>
        </div>

        {/* 
          Responsive Grid:
          - Desktop (md+): 3 columns in a single horizontal row with clean vertical dividers
          - Mobile (<md): 2-column grid with the 3rd stat centered in the last row
          - Avoids excessive card borders, shadows, and containers
        */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-0 md:divide-x md:divide-[#000000]/10"
        >
          {stats.map((stat, index) => {
            // Apply special responsive classes for mobile layout
            // If it's the 3rd item (index === 2), span 2 cols on mobile and center content
            const isLastOnMobile = index === 2;

            return (
              <div
                key={stat.id}
                className={`
                  ${isLastOnMobile ? 'col-span-2 md:col-span-1 pt-6 md:pt-0 border-t border-[#000000]/10 md:border-t-0 flex flex-col items-center md:items-start text-center md:text-left' : 'flex flex-col items-start text-left'}
                  ${index > 0 ? 'md:pl-10 lg:pl-16' : ''}
                  ${index < stats.length - 1 ? 'md:pr-10 lg:pr-16' : ''}
                `}
              >
                <StatCounter item={stat} duration={1.8} />
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
