'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Check } from 'lucide-react';
import { images } from '@/config/images';

export const ChargingStationShowcase: React.FC = () => {
  return (
    <section
      className="relative min-h-[90vh] w-full bg-[#000000] text-[#FFFFFF] py-32 flex flex-col justify-center overflow-hidden border-b border-[#40E0D0]/20"
    >
      {/* Large Architectural Background Scene */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/evion_hero_cinematic_1792313308822.jpg"
          alt="EVION Architectural Charging Pavilion"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-75 contrast-110"
        />

        {/* Graduated Dark Overlays to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full my-auto">
        <div className="max-w-2xl space-y-8">
          {/* Section Indicator */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#000000]/70 backdrop-blur-md border border-[#40E0D0]/30">
            
            <span className="text-[11px] font-mono font-semibold tracking-[0.25em] text-[#40E0D0] uppercase">
              05 — ARCHITECTURAL SHOWCASE
            </span>
          </div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2"
          >
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tighter text-[#FFFFFF] leading-[0.92] uppercase">
              CHARGING <br />
              <span className="font-semibold text-[#40E0D0]">REIMAGINED.</span>
            </h2>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-[#FFFFFF]/80 font-light leading-relaxed max-w-xl"
          >
            Thoughtful charging infrastructure for a more connected electric future.
          </motion.p>

          {/* Key Engineering Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4 py-2 border-y border-[#FFFFFF]/10 max-w-lg"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-[#FFFFFF]/80">
              <Check className="w-4 h-4 text-[#40E0D0]" />
              <span>Sleek Geometric Body</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FFFFFF]/80">
              <Check className="w-4 h-4 text-[#40E0D0]" />
              <span>Turquoise LED Status Strip</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FFFFFF]/80">
              <Check className="w-4 h-4 text-[#40E0D0]" />
              <span>Braided Ergonomic Cable</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FFFFFF]/80">
              <Check className="w-4 h-4 text-[#40E0D0]" />
              <span>Liquid-Cooled 800V DC</span>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-5 pt-2"
          >
            <Link
              href="#solutions"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#40E0D0] text-[#000000] text-xs font-mono font-bold tracking-[0.2em] uppercase hover:bg-[#FFFFFF] hover:shadow-[0_0_30px_rgba(64,224,208,0.4)] transition-all duration-300"
            >
              <span>EXPLORE CHARGING</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFFFFF]/10 backdrop-blur-md border border-[#FFFFFF]/20 text-[#FFFFFF] text-xs font-mono font-medium tracking-[0.2em] uppercase hover:border-[#40E0D0] hover:text-[#40E0D0] transition-all duration-300"
            >
              <span>CONTACT EVION</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
