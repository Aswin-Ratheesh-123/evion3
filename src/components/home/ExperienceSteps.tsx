'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, CheckCircle, Compass, Wrench, Radio, Zap } from 'lucide-react';

interface Stage {
  number: string;
  label: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const stages: Stage[] = [
  {
    number: '01',
    label: 'DISCOVER',
    title: 'EXPLORE REQUIREMENTS',
    description: 'Explore charging solutions for your requirements across residential, workplace, commercial, or fleet environments.',
    icon: <Search className="w-5 h-5 text-[#40E0D0]" />,
  },
  {
    number: '02',
    label: 'CHOOSE',
    title: 'SUITABLE SETUP',
    description: 'Find a suitable charging setup tailored to your energy capacity, expected vehicle volume, and spatial architecture.',
    icon: <CheckCircle className="w-5 h-5 text-[#40E0D0]" />,
  },
  {
    number: '03',
    label: 'PLAN',
    title: 'SITE & POWER AUDIT',
    description: 'Identify the appropriate installation requirements, electrical sub-panel specifications, and civil infrastructure needs.',
    icon: <Compass className="w-5 h-5 text-[#40E0D0]" />,
  },
  {
    number: '04',
    label: 'INSTALL',
    title: 'PRECISION DEPLOYMENT',
    description: 'Get the charging equipment installed by certified technicians adhering to international high-voltage safety standards.',
    icon: <Wrench className="w-5 h-5 text-[#40E0D0]" />,
  },
  {
    number: '05',
    label: 'CONNECT',
    title: 'DIGITAL ECOSYSTEM',
    description: 'Connect to the available EVION digital experience for real-time telemetry, automated billing, and user access authorization.',
    icon: <Radio className="w-5 h-5 text-[#40E0D0]" />,
  },
  {
    number: '06',
    label: 'CHARGE',
    title: 'EFFORTLESS POWER',
    description: 'Enjoy a convenient charging experience with continuous high-throughput power and seamless vehicle communication.',
    icon: <Zap className="w-5 h-5 text-[#40E0D0]" />,
  },
];

export const ExperienceSteps: React.FC = () => {
  return (
    <section
      className="relative w-full bg-[#05080A] text-[#FFFFFF] py-32 sm:py-44 overflow-hidden border-b border-[#40E0D0]/20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-[#FFFFFF]/10 pb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#40E0D0]" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#40E0D0] uppercase">
                04 — THE PROCESS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#FFFFFF] uppercase">
              SIX STEPS. <br />
              <span className="font-semibold text-[#40E0D0]">ONE SEAMLESS JOURNEY.</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#FFFFFF]/70 max-w-md font-light leading-relaxed">
            From discovering a charging solution to getting connected, EVION makes the charging experience simple and intuitive.
          </p>
        </div>

        {/* 2 Rows of 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stages.map((stage, idx) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 sm:p-10 rounded-3xl bg-[#000000] border border-[#FFFFFF]/10 hover:border-[#40E0D0]/60 transition-all duration-500 flex flex-col justify-between space-y-8 shadow-xl hover:shadow-[0_0_30px_rgba(64,224,208,0.15)]"
            >
              {/* Header: Stage Number & Icon */}
              <div className="flex items-start justify-between">
                <span className="text-4xl sm:text-5xl font-light font-mono text-[#FFFFFF]/30 group-hover:text-[#40E0D0] transition-colors">
                  {stage.number}
                </span>

                <div className="p-3 rounded-2xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 group-hover:border-[#40E0D0]/50 group-hover:bg-[#40E0D0]/10 transition-all">
                  {stage.icon}
                </div>
              </div>

              {/* Text content */}
              <div className="space-y-3">
                <div className="text-[11px] font-mono font-bold text-[#40E0D0] tracking-[0.2em] uppercase">
                  {stage.label}
                </div>
                <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[#FFFFFF] uppercase group-hover:text-[#FFFFFF]">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#FFFFFF]/70 font-light leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Bottom Subtle Turquoise Indicator line */}
              <div className="pt-4 border-t border-[#FFFFFF]/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#FFFFFF]/40 uppercase tracking-widest">
                  STAGE {stage.number} / 06
                </span>
                <span className="w-0 h-[2px] bg-[#40E0D0] group-hover:w-16 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
