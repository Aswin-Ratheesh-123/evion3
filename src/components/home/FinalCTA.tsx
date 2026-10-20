'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { images } from '@/config/images';
import { Button } from '@/components/ui/Button';
import { ConnectedLineSection } from '@/components/network/ConnectedLineSection';
import { ChargingStationIllustration } from '@/components/network/NetworkIllustrations';

export const FinalCTA: React.FC = () => {
  return (
    <ConnectedLineSection
      id="cta"
      pattern="cta"
      illustrationCenter={<ChargingStationIllustration size={58} />}
      illustrationCenterOffset={{ x: -29, y: 15 }}
      className="bg-[#000000]"
    >
      <section className="relative py-28 sm:py-36 overflow-hidden border-t-2 border-[#40E0D0]">
        {/* Background Remote Image with Cinematic Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src={images.ctaBackground}
            alt="EVION Electric Mobility Open Road Journey at Dusk"
            fill
            sizes="100vw"
            className="object-cover object-center scale-105 opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-[#000000]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/60 to-transparent" />
        </div>

        {/* Signature Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#40E0D0]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#000000] border-2 border-[#40E0D0] shadow-lg"
          >
            <Zap className="w-4 h-4 text-[#40E0D0]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#FFFFFF] uppercase">
              ACCELERATE THE TRANSITION
            </span>
          </motion.div>

          {/* Big Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#FFFFFF] uppercase leading-[0.95]"
          >
            YOUR NEXT CHARGE <br />
            <span className="text-[#40E0D0]">
              STARTS HERE.
            </span>
          </motion.h2>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-[#FFFFFF] max-w-xl mx-auto font-normal leading-relaxed"
          >
            Discover smarter, faster, and more reliable EV charging for your vehicle, fleet, or commercial property.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Button
              variant="primary"
              size="lg"
              href="/charging-network"
              showArrow
              data-cursor="CHARGE"
            >
              Find a Charger
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="/contact"
              data-cursor="PARTNER"
            >
              Partner With EVION
            </Button>
          </motion.div>
        </div>
      </section>
    </ConnectedLineSection>
  );
};
