'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, PlugZap, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ConnectedLineSection } from '@/components/network/ConnectedLineSection';
import { ChargingPlugIllustration, HouseIllustration } from '@/components/network/NetworkIllustrations';

const steps = [
  {
    num: '01',
    title: 'Find',
    subtitle: 'Locate an EVION charger nearby.',
    description: 'Use the EVION app or in-car navigation to find ultra-fast hubs with live bay availability, speed filters, and transparent real-time tariffs.',
    icon: <MapPin className="w-6 h-6 text-[#000000]" />,
    highlight: 'Real-time telemetry & bay status',
  },
  {
    num: '02',
    title: 'Connect',
    subtitle: 'Plug in and start charging.',
    description: 'Plug in the ultra-lightweight liquid-cooled cable. Authentication happens automatically with ISO 15118 Plug & Charge, RFID, or in-app scan.',
    icon: <PlugZap className="w-6 h-6 text-[#000000]" />,
    highlight: 'Zero-touch Plug & Charge compatible',
  },
  {
    num: '03',
    title: 'Drive',
    subtitle: 'Get back on the road.',
    description: 'Enjoy a short espresso or check emails. In as little as 12–15 minutes, your battery is replenished to 80% and ready for hundreds of kilometers.',
    icon: <Gauge className="w-6 h-6 text-[#000000]" />,
    highlight: '+300 km added in 15 minutes',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <ConnectedLineSection
      id="howitworks"
      pattern="left-to-right"
      illustrationLeft={<ChargingPlugIllustration size={44} />}
      illustrationRight={<HouseIllustration size={68} />}
      illustrationLeftOffset={{ x: 10, y: -20 }}
      illustrationRightOffset={{ x: -25, y: -20 }}
      className="bg-[#FFFFFF]"
    >
      <section className="py-24 sm:py-32 relative overflow-hidden border-b-2 border-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#40E0D0] border border-[#000000] text-xs font-mono text-[#000000] uppercase tracking-widest mb-3 font-bold">
                THE EXPERIENCE
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#000000] uppercase">
                CHARGING SHOULDN&apos;T BE <br />
                <span className="text-[#40E0D0]">
                  COMPLICATED.
                </span>
              </h2>
            </div>

            <Button variant="secondary" size="md" href="/charging-network" showArrow>
              Explore Interactive Map
            </Button>
          </div>

          {/* 3 Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#000000] hover:border-[#40E0D0] hover:shadow-[0_10px_30px_rgba(64,224,208,0.25)] transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#000000]/20">
                    <span className="text-5xl sm:text-6xl font-black font-mono tracking-tighter text-[#000000]">
                      {step.num}
                    </span>

                    <div className="w-14 h-14 rounded-2xl bg-[#40E0D0] border border-[#000000] flex items-center justify-center text-[#000000]">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Copy */}
                  <div className="space-y-3 mb-8">
                    <h3 className="text-2xl font-bold text-[#000000] tracking-tight">
                      {step.title}
                    </h3>
                    <div className="text-sm font-bold text-[#000000]">
                      {step.subtitle}
                    </div>
                    <p className="text-sm text-[#000000] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Footnote */}
                <div className="pt-4 border-t border-[#000000]/20 text-xs font-mono text-[#000000] flex items-center gap-2 font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#40E0D0] border border-[#000000]" />
                  <span>{step.highlight}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ConnectedLineSection>
  );
};
