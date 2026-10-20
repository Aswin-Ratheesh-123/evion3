'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Activity, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { ConnectedLineSection } from '@/components/network/ConnectedLineSection';
import { TowerIllustration, ChargingStationIllustration } from '@/components/network/NetworkIllustrations';

interface TechFeature {
  id: string;
  tag: string;
  title: string;
  power: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

const techList: TechFeature[] = [
  {
    id: 'dc-fast',
    tag: 'ULTRA-FAST PROPULSION',
    title: 'DC Ultra-Fast Charging',
    power: 'Up to 350 kW',
    description: 'Direct current liquid-cooled architecture capable of delivering continuous 500A charging currents to 800V vehicles without thermal throttling.',
    details: [
      'Active dielectric closed-loop cooling',
      'Dual CCS2 simultaneous dispensing',
      'Compatible with 400V and 800V architectures',
    ],
    icon: <Zap className="w-5 h-5 text-[#000000]" />,
  },
  {
    id: 'smart-os',
    tag: 'INTELLIGENT LOAD MANAGEMENT',
    title: 'EVION Smart Energy OS',
    power: 'Sub-second Throttling',
    description: 'Dynamic load balancing constantly harmonizes charging demand with grid capacity, avoiding expensive utility peak charges and transformer overloads.',
    details: [
      'Automated peak-shaving algorithms',
      'Solar array and battery storage synchronization',
      'Dynamic multi-vehicle prioritization',
    ],
    icon: <Cpu className="w-5 h-5 text-[#000000]" />,
  },
  {
    id: 'telemetry',
    tag: 'PREDICTIVE DIAGNOSTICS',
    title: 'Real-Time Telemetry & Health',
    power: '99.9% Uptime',
    description: 'Sub-second hardware health telemetry monitors cable temperatures, insulation resistance, and connector wear, running autonomous self-healing routines.',
    details: [
      '24/7 cloud diagnostics & alert webhooks',
      'Remote firmware updates over-the-air (OTA)',
      'Automated connector locking failure recovery',
    ],
    icon: <Activity className="w-5 h-5 text-[#000000]" />,
  },
  {
    id: 'plug-charge',
    tag: 'FRICTIONLESS AUTHENTICATION',
    title: 'ISO 15118 Plug & Charge',
    power: 'Zero-Click Auth',
    description: 'Encrypted public key infrastructure enables seamless authentication. Just plug the cable into your car and charging initiates and bills automatically.',
    details: [
      'End-to-end TLS 1.3 encryption certificates',
      'Automated corporate fleet identification',
      'Unified cross-network roaming support',
    ],
    icon: <ShieldCheck className="w-5 h-5 text-[#000000]" />,
  },
];

export const TechCards: React.FC = () => {
  return (
    <ConnectedLineSection
      id="techcards"
      pattern="right-to-left"
      illustrationRight={<TowerIllustration size={76} />}
      illustrationLeft={<ChargingStationIllustration size={54} />}
      illustrationRightOffset={{ x: -28, y: -20 }}
      illustrationLeftOffset={{ x: 10, y: -20 }}
      className="bg-[#40E0D0]"
    >
      <section className="py-24 sm:py-32 relative overflow-hidden border-b-2 border-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#000000] text-xs font-mono text-[#000000] uppercase tracking-widest mb-4 font-bold shadow-sm">
              ADVANCED ENGINEERING
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#000000] uppercase leading-[1.05]">
              BUILT FOR THE SPEED OF <br />
              <span className="text-[#FFFFFF] drop-shadow-sm">
                ELECTRIC MOBILITY.
              </span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#000000] font-medium leading-relaxed">
              Proprietary hardware architecture, liquid-cooled dispensers, and intelligent cloud software operating harmoniously to eliminate charging anxiety.
            </p>
          </div>

          {/* 4 Tech Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techList.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#000000] transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#40E0D0] border border-[#000000] flex items-center justify-center text-[#000000]">
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#000000] bg-[#40E0D0] px-3 py-1 rounded-full border border-[#000000]">
                      {item.power}
                    </span>
                  </div>

                  <div className="text-xs font-mono uppercase tracking-widest text-[#000000] mb-2 font-bold">
                    {item.tag}
                  </div>

                  <h3 className="text-2xl font-bold text-[#000000] tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#000000] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Details List */}
                  <div className="space-y-2.5 pt-4 border-t border-[#000000]/20">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#000000] font-medium">
                        <Check className="w-4 h-4 text-[#000000] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#000000]/20 flex items-center justify-between text-xs font-mono text-[#000000] font-bold">
                  <span>EXPLORE TECHNICAL SPECIFICATION</span>
                  <ArrowRight className="w-4 h-4 text-[#000000] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ConnectedLineSection>
  );
};
