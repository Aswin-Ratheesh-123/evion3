'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';
import { images } from '@/config/images';
import { Button } from '@/components/ui/Button';
import { ConnectedLineSection } from '@/components/network/ConnectedLineSection';
import { ChargingStationIllustration, ChargingPlugIllustration } from '@/components/network/NetworkIllustrations';

export const ChargerShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'performance' | 'cooling' | 'software'>('performance');

  const specsData = {
    performance: [
      { label: 'Maximum Power Output', value: '350 kW DC Continuous' },
      { label: 'Max Output Current', value: '500 A (Liquid-Cooled)' },
      { label: 'Voltage Range', value: '200 V – 1000 V DC' },
      { label: 'Peak Power Efficiency', value: '97.5% Ultra-High Efficiency' },
      { label: 'Simultaneous Dispensing', value: 'Dual 175 kW or Single 350 kW' },
    ],
    cooling: [
      { label: 'Cable Cooling Tech', value: 'Closed-loop Dielectric Liquid' },
      { label: 'Cable Diameter & Weight', value: 'Lightweight Ø 28mm / 1.8 kg/m' },
      { label: 'Ingress Protection', value: 'IP65 Weatherproof Sealed' },
      { label: 'Impact Resistance', value: 'IK10 Vandal-Proof Enclosure' },
      { label: 'Operating Temperature', value: '-30°C to +55°C Extreme Ambient' },
    ],
    software: [
      { label: 'Protocol Support', value: 'OCPP 2.0.1 & ISO 15118 (Plug & Charge)' },
      { label: 'Connectivity Modules', value: 'Dual 5G / 4G LTE + Industrial Ethernet' },
      { label: 'User Interface Screen', value: '15.6-inch Ultra-Bright Anti-Glare 4K' },
      { label: 'Payment Terminals', value: 'EMV Contactless, Apple/Google Pay, UPI' },
      { label: 'Cloud Telemetry', value: 'Sub-second real-time telemetry streaming' },
    ],
  };

  return (
    <ConnectedLineSection
      id="chargershowcase"
      pattern="left-to-right"
      illustrationLeft={<ChargingStationIllustration size={60} />}
      illustrationRight={<ChargingPlugIllustration size={44} />}
      illustrationLeftOffset={{ x: 10, y: -20 }}
      illustrationRightOffset={{ x: -28, y: -20 }}
      className="bg-[#FFFFFF]"
    >
      <section className="py-24 sm:py-32 relative overflow-hidden border-b-2 border-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Hardware Composition */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative h-[480px] sm:h-[580px] rounded-3xl overflow-hidden border-2 border-[#000000] bg-[#FFFFFF] shadow-xl group">
                <Image
                  src={images.chargerPillar}
                  alt="EVION 350 kW Ultra-Fast Charger Hardware Dispenser"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 via-transparent to-transparent" />

                {/* Floating Highlight Pill */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FFFFFF] border-2 border-[#000000] flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#40E0D0] border border-[#000000] flex items-center justify-center text-[#000000]">
                      <Zap className="w-5 h-5 fill-current text-[#000000]" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#000000] font-bold">FLAGSHIP HARDWARE</div>
                      <div className="text-sm font-bold text-[#000000]">EVION HYPERDISPENSER 350</div>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-[#000000] bg-[#40E0D0] px-3 py-1.5 rounded-full border border-[#000000]">
                    350 kW DC
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Copy & Interactive Technical Specifications */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#40E0D0] border border-[#000000] text-xs font-mono text-[#000000] uppercase tracking-widest font-bold">
                  FLAGSHIP DISPENSER
                </div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#000000] uppercase leading-[1.05]">
                  MORE POWER. <br />
                  <span className="text-[#40E0D0]">
                    LESS WAITING.
                  </span>
                </h2>
                <p className="text-base text-[#000000] leading-relaxed font-normal">
                  Engineered with ultra-light liquid-cooled connectors and Silicon Carbide (SiC) semiconductor power modules to maximize throughput and minimize dwell time.
                </p>
              </div>

              {/* Spec Categories Switcher */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#FFFFFF] border-2 border-[#000000] w-fit shadow-sm">
                <button
                  onClick={() => setActiveTab('performance')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                    activeTab === 'performance'
                      ? 'bg-[#40E0D0] text-[#000000] border border-[#000000] shadow-sm font-bold'
                      : 'text-[#000000] hover:bg-[#40E0D0]/20 font-semibold'
                  }`}
                >
                  Performance
                </button>
                <button
                  onClick={() => setActiveTab('cooling')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                    activeTab === 'cooling'
                      ? 'bg-[#40E0D0] text-[#000000] border border-[#000000] shadow-sm font-bold'
                      : 'text-[#000000] hover:bg-[#40E0D0]/20 font-semibold'
                  }`}
                >
                  Cooling & Safety
                </button>
                <button
                  onClick={() => setActiveTab('software')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                    activeTab === 'software'
                      ? 'bg-[#40E0D0] text-[#000000] border border-[#000000] shadow-sm font-bold'
                      : 'text-[#000000] hover:bg-[#40E0D0]/20 font-semibold'
                  }`}
                >
                  Software & Cloud
                </button>
              </div>

              {/* Dynamic Specs List */}
              <div className="space-y-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    {specsData[activeTab].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#000000] flex items-center justify-between text-xs font-mono shadow-sm"
                      >
                        <span className="text-[#000000] font-semibold">{item.label}</span>
                        <span className="text-[#000000] font-bold text-right">{item.value}</span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button variant="primary" size="lg" href="/contact" showArrow>
                  Download Specs PDF
                </Button>
                <Button variant="secondary" size="lg" href="/technology">
                  Explore Architecture
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ConnectedLineSection>
  );
};
