'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { images } from '@/config/images';

export const Hero: React.FC = () => {
  return (
    <section
      id="overview"
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#000000]"
    >
      {/* Cinematic Background Layer: Architectural Pavilion with Pearl-White EV */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero}
          alt="EVION Architectural EV Charging Pavilion"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-90 contrast-105"
        />
        
        {/* Subtle Vignette & Gradient Overlays for Readability and Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/30 to-[#000000]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/85 via-[#000000]/40 to-transparent" />
        
        {/* Subtle Turquoise Ambient Illumination */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#40E0D0]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto">
        <div className="max-w-3xl space-y-8">
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#000000]/60 backdrop-blur-md border border-[#40E0D0]/30"
          >
            
            <span className="text-[11px] font-mono font-semibold tracking-[0.25em] text-[#40E0D0] uppercase">
              THE FUTURE OF ELECTRIC MOBILITY
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter text-[#FFFFFF] leading-[0.92] uppercase">
              POWERING <br />
              <span className="font-semibold text-[#40E0D0] tracking-tight">
                WHAT&apos;S NEXT.
              </span>
            </h1>
          </motion.div>

          {/* Supporting Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1 text-base sm:text-xl text-[#FFFFFF]/80 max-w-xl font-light leading-relaxed tracking-wide"
          >
            <p>Intelligent charging. Seamless journeys.</p>
            <p className="text-[#FFFFFF]/60">A smarter way to move forward.</p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-5 pt-4"
          >
            <Link
              href="#solutions"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#40E0D0] text-[#000000] text-xs font-mono font-bold tracking-[0.2em] uppercase hover:bg-[#FFFFFF] hover:shadow-[0_0_30px_rgba(64,224,208,0.5)] transition-all duration-300"
            >
              <span>EXPLORE EVION</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="#network"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FFFFFF]/10 backdrop-blur-md border border-[#FFFFFF]/25 text-[#FFFFFF] text-xs font-mono font-medium tracking-[0.2em] uppercase hover:border-[#40E0D0] hover:text-[#40E0D0] transition-all duration-300"
            >
              <span>OUR CHARGING NETWORK</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Elements: Architectural Line Indicator & Scroll Prompt */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-8 flex items-end justify-between border-t border-[#FFFFFF]/10">
        <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-[#FFFFFF]/60">
          <span className="text-[#40E0D0] font-bold">01 / 06</span>
          <span className="w-12 h-[1px] bg-[#40E0D0]/40" />
          <span className="uppercase">ARCHITECTURAL MOBILITY NETWORK</span>
        </div>

        <Link
          href="#car-journey"
          className="group inline-flex items-center gap-3 text-[10px] font-mono tracking-[0.25em] text-[#FFFFFF]/60 hover:text-[#40E0D0] transition-colors"
          aria-label="Scroll to exploration journey"
        >
          <span className="uppercase">SCROLL TO DISCOVER</span>
          <div className="w-7 h-7 rounded-full border border-[#FFFFFF]/20 group-hover:border-[#40E0D0] flex items-center justify-center transition-colors">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#40E0D0]" />
          </div>
        </Link>
      </div>

      {/* Signature Initial Electric Route Segment starting at hero bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#40E0D0] to-transparent opacity-80" />
    </section>
  );
};
