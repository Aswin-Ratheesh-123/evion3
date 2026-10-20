'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, ShieldCheck, Globe } from 'lucide-react';
import { images } from '@/config/images';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#FFFFFF] text-[#000000] py-32 sm:py-40 overflow-hidden border-b border-[#000000]/10"
    >
      {/* Decorative Outer Margin Electrical Corridor */}
      <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[1px] bg-gradient-to-b from-[#40E0D0]/40 via-[#40E0D0] to-transparent pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-2.5 h-2.5 rounded-full bg-[#40E0D0]" />
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#000000] uppercase">
            01 — ABOUT EVION
          </span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Editorial Typography */}
          <div className="lg:col-span-7 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-light tracking-tight text-[#000000] leading-[1.0] uppercase"
            >
              WE DON&apos;T JUST BUILD CHARGERS. <br />
              <span className="font-semibold text-[#40E0D0] drop-shadow-sm">
                WE CONNECT THE WAY
              </span> <br />
              <span className="font-black">THE WORLD MOVES.</span>
            </motion.h2>

            <div className="w-24 h-[2px] bg-[#40E0D0]" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#000000]/80 font-normal leading-relaxed max-w-xl"
            >
              EVION represents the intersection of high-power electrical engineering, minimalist industrial design, and intuitive digital control. We create charging environments that turn everyday power replenishment into an effortless, premium experience.
            </motion.p>

            {/* Three Foundational Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#000000]/10"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#40E0D0]/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-[#000000]" />
                </div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#000000]">
                  ARCHITECTURAL PURITY
                </div>
                <p className="text-xs text-[#000000]/70 leading-relaxed">
                  Sculptural hardware designed to enrich contemporary urban and residential landscapes.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#40E0D0]/20 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-[#000000]" />
                </div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#000000]">
                  99.9% RELIABILITY
                </div>
                <p className="text-xs text-[#000000]/70 leading-relaxed">
                  Continuous telemetry and predictive maintenance for uninterrupted power flow.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#40E0D0]/20 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#000000]" />
                </div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#000000]">
                  GRID HARMONY
                </div>
                <p className="text-xs text-[#000000]/70 leading-relaxed">
                  Intelligent load orchestration designed to protect and empower national energy grids.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Visual of EVION Station & Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#000000]/15 shadow-2xl bg-[#000000]"
            >
              <Image
                src={images.chargerPillar}
                alt="EVION Flagship Charging Station Hardware"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              {/* Inset Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#000000]/80 backdrop-blur-md border border-[#40E0D0]/40 text-[#FFFFFF] space-y-1">
                <div className="text-[10px] font-mono tracking-widest text-[#40E0D0] uppercase font-bold">
                  FLAGSHIP ARCHITECTURE
                </div>
                <div className="text-sm font-semibold tracking-wide">
                  EVION ONE — 350 kW DC Fast Charging Pedestal
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-mono text-[#000000]/60">DESIGNED FOR INFINITE JOURNEYS</span>
              <Link
                href="#technology"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#000000] hover:text-[#40E0D0] transition-colors"
              >
                <span>EXPLORE TECHNOLOGY</span>
                <ArrowUpRight className="w-4 h-4 text-[#40E0D0]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
