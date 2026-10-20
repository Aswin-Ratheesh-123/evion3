'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Cpu, Zap, Activity, Wifi, Shield, Server } from 'lucide-react';

interface TechItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  details: string[];
  icon: React.ReactNode;
}

const techItems: TechItem[] = [
  {
    id: 'smart-charging',
    number: '01',
    title: 'SMART CHARGING',
    summary: 'Adaptive current orchestration that continuously balances grid availability with vehicle demand.',
    details: [
      'Automated load balancing responsive to local sub-station conditions',
      'Solar synchronisation for minimal grid consumption',
      'Predictive departure optimization based on user routine',
    ],
    icon: <Cpu className="w-5 h-5 text-[#40E0D0]" />,
  },
  {
    id: 'rapid-dc',
    number: '02',
    title: 'RAPID DC CHARGING',
    summary: 'High-efficiency direct current architecture engineered for minimal thermal dissipation and rapid turnaround.',
    details: [
      'Liquid-cooled cabling for continuous peak throughput',
      'Multi-voltage support covering 400V and 800V modern EV platforms',
      'Low acoustic footprint with silenced cooling loops',
    ],
    icon: <Zap className="w-5 h-5 text-[#40E0D0]" />,
  },
  {
    id: 'energy-management',
    number: '03',
    title: 'INTELLIGENT ENERGY MANAGEMENT',
    summary: 'Facility-wide energy balancing designed to eliminate peak demand penalties and optimize consumption tariffs.',
    details: [
      'Dynamic power routing across dozens of simultaneous charging bays',
      'Integration with on-site battery storage and renewable inputs',
      'Configurable power caps to prevent transformer overloads',
    ],
    icon: <Activity className="w-5 h-5 text-[#40E0D0]" />,
  },
  {
    id: 'connected-charging',
    number: '04',
    title: 'CONNECTED CHARGING',
    summary: 'Secure wireless telemetry linking physical dispensers with cloud analytics and mobile drivers.',
    details: [
      'Encrypted cellular and ethernet redundancy for high availability',
      'Automated over-the-air firmware upgrades and self-healing diagnostics',
      'ISO 15118 Plug & Charge cryptographic handshake',
    ],
    icon: <Wifi className="w-5 h-5 text-[#40E0D0]" />,
  },
  {
    id: 'real-time-monitoring',
    number: '05',
    title: 'REAL-TIME MONITORING',
    summary: 'Millisecond-level diagnostic instrumentation tracking voltage curves, connector health, and thermals.',
    details: [
      'Centralised network operations center monitoring all live sessions',
      'Automated ticket creation and predictive maintenance triggers',
      'Granular carbon offset and kilowatt-hour reporting dashboards',
    ],
    icon: <Shield className="w-5 h-5 text-[#40E0D0]" />,
  },
  {
    id: 'scalable-infrastructure',
    number: '06',
    title: 'SCALABLE INFRASTRUCTURE',
    summary: 'Modular electrical architecture designed to expand gracefully as your electric fleet or visitor demand grows.',
    details: [
      'Standardized power cabinet footprint with daisy-chain capability',
      'Swappable power modules for zero-downtime maintenance',
      'Future-ready headroom accommodating next-generation vehicle platforms',
    ],
    icon: <Server className="w-5 h-5 text-[#40E0D0]" />,
  },
];

export const TechnologySection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('smart-charging');

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="technology"
      className="relative w-full bg-[#FFFFFF] text-[#000000] py-32 sm:py-44 overflow-hidden border-b border-[#000000]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-[#000000]/10 pb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#40E0D0]" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#000000] uppercase">
                03 — EVION TECHNOLOGY
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#000000] uppercase">
              ENGINEERED <br />
              <span className="font-semibold text-[#40E0D0]">FOR TOMORROW.</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#000000]/80 max-w-md font-normal leading-relaxed">
            Thoughtfully designed charging technology built for modern electric mobility.
          </p>
        </div>

        {/* Editorial Accordion List */}
        <div className="divide-y divide-[#000000]/10 border-y border-[#000000]/10">
          {techItems.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="group transition-colors duration-300 hover:bg-[#F8FAFC]"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-8 sm:py-10 flex items-start sm:items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-12 flex-1 pr-6">
                    <span className="text-xs font-mono font-bold text-[#40E0D0] tracking-widest">
                      {item.number}
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-[#000000] group-hover:text-[#40E0D0] transition-colors uppercase">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#000000]/70 max-w-2xl font-light leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#000000]/15 flex items-center justify-center group-hover:border-[#40E0D0] group-hover:bg-[#40E0D0]/10 transition-all">
                      {isExpanded ? (
                        <Minus className="w-4 h-4 text-[#000000]" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#000000]" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Details Panel */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-2 sm:pl-24 pr-4">
                        <div className="p-6 rounded-2xl bg-[#000000] text-[#FFFFFF] border border-[#40E0D0]/30 shadow-lg space-y-4">
                          <div className="flex items-center gap-3 text-xs font-mono text-[#40E0D0] uppercase tracking-widest font-bold">
                            {item.icon}
                            <span>TECHNICAL SPECIFICATIONS & ARCHITECTURE</span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                            {item.details.map((detail, dIdx) => (
                              <div
                                key={dIdx}
                                className="p-4 rounded-xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 space-y-2"
                              >
                                <div className="text-[10px] font-mono text-[#40E0D0]">FEATURE {dIdx + 1}</div>
                                <p className="text-xs text-[#FFFFFF]/80 leading-relaxed font-light">
                                  {detail}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
