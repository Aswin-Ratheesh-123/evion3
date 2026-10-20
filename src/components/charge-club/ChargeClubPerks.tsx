'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Building,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  ShieldCheck,
  ArrowUpRight,
  Handshake,
} from 'lucide-react';

const perks = [
  {
    icon: <Handshake className="w-6 h-6 text-[#40E0D0]" />,
    id: '01',
    title: 'BECOME AN EVION FRANCHISE PARTNER',
    desc: 'Join our expanding national charging footprint. Access proprietary 350kW liquid-cooled hardware, institutional brand recognition, and end-to-end site development.',
    tag: 'PARTNERSHIP MODEL',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#40E0D0]" />,
    id: '02',
    title: 'EXPLORE BUSINESS OPPORTUNITIES',
    desc: 'Monetize high-margin electricity throughput, capture dwell-time retail footfall, and generate multi-stream revenue through on-site amenities and digital media.',
    tag: 'REVENUE CHANNELS',
  },
  {
    icon: <Zap className="w-6 h-6 text-[#40E0D0]" />,
    id: '03',
    title: 'EXPAND CHARGING INFRASTRUCTURE',
    desc: 'Electrify strategic commercial corridors, retail destinations, and logistics depots with modular Silicon Carbide 350kW architecture built for 800V vehicles.',
    tag: 'GRID DEPLOYMENT',
  },
  {
    icon: <Building className="w-6 h-6 text-[#40E0D0]" />,
    id: '04',
    title: 'BUILD A SUSTAINABLE BUSINESS',
    desc: 'Capitalize on the generational shift toward zero-emission mobility. Long-term infrastructure asset value backed by federal electrification incentives and carbon offsets.',
    tag: 'SUSTAINABLE ASSETS',
  },
  {
    icon: <Layers className="w-6 h-6 text-[#40E0D0]" />,
    id: '05',
    title: 'GROW WITH THE EVION NETWORK',
    desc: 'Seamlessly tap into thousands of verified EVION app drivers, roaming network interconnections, and automated ISO 15118 Plug & Charge vehicle handshakes.',
    tag: 'NETWORK EFFECTS',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#40E0D0]" />,
    id: '06',
    title: 'TURNKEY EPC & CLOUD OS SUPPORT',
    desc: 'From initial civil engineering and utility transformer interconnection to real-time remote telemetry and 24/7 field service SLAs, EVION manages complexity.',
    tag: 'OPERATIONAL EXCELLENCE',
  },
];

export const ChargeClubPerks: React.FC = () => {
  return (
    <section className="relative z-30 w-full bg-[#0D0D11] text-[#FFFFFF] py-24 px-6 sm:px-12 lg:px-20 border-t border-[#FFFFFF]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#FFFFFF]/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#40E0D0]/10 border border-[#40E0D0]/30 text-[#40E0D0] text-xs font-mono tracking-widest uppercase mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#40E0D0]" />
              <span>THE FRANCHISE ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
              SIX PILLARS OF{' '}
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #FFFFFF 0%, #40E0D0 50%, #20B2AA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                FRANCHISE SUCCESS
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#FFFFFF]/70 leading-relaxed font-sans">
            Partner with EVION to bring intelligent electric vehicle charging solutions to more locations. Join our growing network and explore franchise opportunities in the expanding electric mobility industry.
          </p>
        </div>

        {/* 6 Perks Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl p-8 bg-gradient-to-br from-[#16151B] to-[#0E0E12] border border-[#FFFFFF]/10 hover:border-[#40E0D0]/50 transition-all duration-300 group flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Subtle turquoise hover glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-[#40E0D0]/10 blur-2xl group-hover:bg-[#40E0D0]/25 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#0D0D11] border border-[#40E0D0]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(64,224,208,0.15)]">
                    {perk.icon}
                  </div>
                  <span className="font-mono text-xs text-[#40E0D0]/60 tracking-widest">
                    {perk.id} // {perk.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold tracking-tight text-[#FFFFFF] group-hover:text-[#40E0D0] transition-colors uppercase">
                  {perk.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#FFFFFF]/70 leading-relaxed font-sans">
                  {perk.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#FFFFFF]/10 flex items-center justify-between text-[11px] font-mono text-[#FFFFFF]/50 group-hover:text-[#40E0D0] transition-colors">
                <span>STATUS: FRANCHISE PILLAR</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
