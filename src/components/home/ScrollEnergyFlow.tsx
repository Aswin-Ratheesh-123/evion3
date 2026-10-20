'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Sun, Cpu, Car, Compass } from 'lucide-react';
import { ConnectedLineSection } from '@/components/network/ConnectedLineSection';
import { ChargingStationIllustration, ApartmentIllustration } from '@/components/network/NetworkIllustrations';

interface StageNode {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  specs: string;
  icon: React.ReactNode;
}

const stages: StageNode[] = [
  {
    id: 'grid',
    step: '01',
    title: 'POWER GRID',
    subtitle: 'High-voltage renewable supply & smart substation',
    specs: '33 kV / 11 kV Step-down',
    icon: <Network className="w-5 h-5 text-[#000000]" />,
  },
  {
    id: 'energy',
    step: '02',
    title: 'CLEAN ENERGY',
    subtitle: 'Solar arrays + Battery Energy Storage (BESS)',
    specs: '100% Renewable Matching',
    icon: <Sun className="w-5 h-5 text-[#000000]" />,
  },
  {
    id: 'charger',
    step: '03',
    title: 'EVION CHARGER',
    subtitle: 'Ultra-fast liquid-cooled power converter matrix',
    specs: 'Up to 350 kW DC Peak',
    icon: <Cpu className="w-5 h-5 text-[#000000]" />,
  },
  {
    id: 'vehicle',
    step: '04',
    title: 'ELECTRIC VEHICLE',
    subtitle: 'Direct-to-battery ultra-fast energy transfer',
    specs: '800V Architecture Sync',
    icon: <Car className="w-5 h-5 text-[#000000]" />,
  },
  {
    id: 'journey',
    step: '05',
    title: 'SEAMLESS JOURNEY',
    subtitle: 'Unlimited range for city and trans-continental routes',
    specs: '+300 km in 15 mins',
    icon: <Compass className="w-5 h-5 text-[#000000]" />,
  },
];

export const ScrollEnergyFlow: React.FC = () => {
  return (
    <ConnectedLineSection
      id="energyflow"
      pattern="right-to-left"
      illustrationRight={<ChargingStationIllustration size={54} />}
      illustrationLeft={<ApartmentIllustration size={72} />}
      illustrationRightOffset={{ x: -28, y: -20 }}
      illustrationLeftOffset={{ x: 10, y: -20 }}
      className="bg-[#40E0D0]"
    >
      <section className="py-24 sm:py-32 relative overflow-hidden border-b-2 border-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#000000] text-xs font-mono text-[#000000] uppercase tracking-widest mb-4 font-bold shadow-sm">
              SIGNATURE ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#000000] uppercase leading-[1.05]">
              FROM GRID TO ROAD. <br />
              <span className="text-[#FFFFFF] drop-shadow-sm">
                UNBROKEN ENERGY FLOW.
              </span>
            </h2>
            <p className="mt-4 text-base text-[#000000] max-w-xl mx-auto font-medium">
              A continuous, highly efficient energy pipeline designed to convert raw utility and solar power into rapid propulsion.
            </p>
          </div>

          {/* Desktop Interactive Energy Flow Highway */}
          <div className="relative">
            {/* SVG Flow Line Behind Nodes */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 hidden lg:block pointer-events-none z-0">
              <svg className="w-full h-24" viewBox="0 0 1200 100" fill="none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                    <stop offset="30%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="70%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Base track */}
                <path
                  d="M 50,50 L 1150,50"
                  stroke="#000000"
                  strokeOpacity="0.3"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />

                {/* Animated pulsing electric beam */}
                <path
                  d="M 50,50 L 1150,50"
                  stroke="url(#streamGrad)"
                  strokeWidth="3.5"
                  className="animate-energy-line"
                />
              </svg>
            </div>

            {/* 5 Distinct Energy Stages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {stages.map((stage, idx) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="group relative rounded-3xl bg-[#FFFFFF] border-2 border-[#000000] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl"
                >
                  {/* Stage Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#40E0D0] border border-[#000000] flex items-center justify-center text-[#000000]">
                      {stage.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#000000] bg-[#40E0D0] px-2.5 py-1 rounded-full border border-[#000000]">
                      {stage.step}
                    </span>
                  </div>

                  {/* Main Node Content */}
                  <div className="space-y-2 mb-6">
                    <h3 className="text-lg font-bold text-[#000000] tracking-wide">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-[#000000] leading-relaxed">
                      {stage.subtitle}
                    </p>
                  </div>

                  {/* Specs Tag */}
                  <div className="pt-3 border-t border-[#000000]/20 text-[11px] font-mono text-[#000000] flex items-center justify-between font-bold">
                    <span>SPEC</span>
                    <span>{stage.specs}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ConnectedLineSection>
  );
};
