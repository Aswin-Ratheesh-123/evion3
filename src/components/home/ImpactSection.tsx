'use client';

import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    number: '01',
    label: 'CHARGING SOLUTIONS',
    headline: 'High-Power DC & Intelligent AC Architecture',
    statement: 'Engineered for seamless compatibility across both 400V and 800V modern electric vehicle battery platforms.',
  },
  {
    number: '02',
    label: 'CONNECTED LOCATIONS',
    headline: 'Unified Telemetry & Operations Grid',
    statement: 'Comprehensive monitoring connecting private residential setups, commercial campus bays, and public highway plazas.',
  },
  {
    number: '03',
    label: 'ENERGY MANAGEMENT',
    headline: 'Dynamic Load Balancing & Solar Sync',
    statement: 'Algorithmic power routing that protects local substations, shaves peak tariff charges, and maximizes renewable utilization.',
  },
  {
    number: '04',
    label: 'MOBILITY PARTNERS',
    headline: 'Standardized Open Interoperability',
    statement: 'Built upon universal ISO 15118 and OCPP standards, delivering seamless Plug & Charge communication worldwide.',
  },
];

export const ImpactSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#000000] text-[#FFFFFF] py-28 sm:py-36 overflow-hidden border-b border-[#40E0D0]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="w-2.5 h-2.5 rounded-full bg-[#40E0D0]" />
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#40E0D0] uppercase">
            08 — CAPABILITY STATEMENTS
          </span>
        </div>

        {/* 4 Pillars with Fine Divider Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#FFFFFF]/15">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`pt-8 md:pt-0 ${idx > 0 ? 'md:pl-8 lg:pl-12' : ''} space-y-4`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#40E0D0] font-bold tracking-widest">
                  {cap.number}
                </span>
                <span className="w-6 h-[1px] bg-[#40E0D0]/40" />
              </div>

              <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#40E0D0] font-semibold">
                {cap.label}
              </div>

              <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[#FFFFFF] uppercase leading-snug">
                {cap.headline}
              </h3>

              <p className="text-xs sm:text-sm text-[#FFFFFF]/70 font-light leading-relaxed">
                {cap.statement}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
