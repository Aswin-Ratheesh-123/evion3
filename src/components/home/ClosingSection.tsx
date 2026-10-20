'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const ClosingSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] w-full bg-[#000000] text-[#FFFFFF] py-32 flex flex-col justify-center items-center text-center overflow-hidden border-b border-[#40E0D0]/20">
      {/* Restrained Turquoise Ambient Illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#40E0D0]/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Subtle Background Electric Route Animation Trace */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 300 C 300 250, 450 350, 600 300 C 750 250, 900 350, 1200 300"
          stroke="#40E0D0"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          className=""
        />
      </svg>

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
        {/* Subtle Brand Tag */}
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/5 border border-[#40E0D0]/30 backdrop-blur-md">
         
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#40E0D0] uppercase font-bold">
            09 — DESTINATION
          </span>
        </div>

        {/* Large Centered Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2"
        >
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter text-[#FFFFFF] leading-[0.9] uppercase">
            THE FUTURE <br />
            <span className="font-semibold text-[#40E0D0] drop-shadow-[0_0_35px_rgba(64,224,208,0.4)]">
              IS ELECTRIC.
            </span>
          </h2>
        </motion.div>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-2xl text-[#FFFFFF]/75 font-light tracking-wide max-w-xl mx-auto"
        >
          Move forward with EVION.
        </motion.p>

        {/* Button: START YOUR JOURNEY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="pt-4"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#40E0D0] text-[#000000] text-xs font-mono font-bold tracking-[0.25em] uppercase hover:bg-[#FFFFFF] hover:shadow-[0_0_40px_rgba(64,224,208,0.6)] transition-all duration-300"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
