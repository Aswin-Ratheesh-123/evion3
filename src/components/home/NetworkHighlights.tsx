'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Home, Building2, Globe2 } from 'lucide-react';
import { images } from '@/config/images';
import { ConnectedLineSection } from '@/components/network/ConnectedLineSection';
import { HouseIllustration, TowerIllustration } from '@/components/network/NetworkIllustrations';

const networkCards = [
  {
    id: 'home',
    category: 'HOME',
    title: 'Charge where you live.',
    tagline: 'Residential Smart Systems',
    description: 'Effortless overnight replenishment with dynamic home load balancing and rooftop solar inverter sync.',
    image: images.homeCharging,
    href: '/solutions/home',
    icon: <Home className="w-4 h-4 text-[#000000]" />,
    speed: '7.4 – 22 kW AC',
  },
  {
    id: 'business',
    category: 'BUSINESS',
    title: 'Charge where people work.',
    tagline: 'Workplace & Enterprise Charging',
    description: 'Turn commercial parking lots into an essential amenity and revenue stream with multi-tenant billing.',
    image: images.businessCharging,
    href: '/solutions/business',
    icon: <Building2 className="w-4 h-4 text-[#000000]" />,
    speed: '22 – 60 kW Fast',
  },
  {
    id: 'public',
    category: 'PUBLIC',
    title: 'Charge where journeys happen.',
    tagline: 'Highway & Destination Hubs',
    description: 'High-power 350 kW liquid-cooled corridors located at premier shopping malls, transit hubs, and highways.',
    image: images.commercialRealEstate,
    href: '/solutions/commercial',
    icon: <Globe2 className="w-4 h-4 text-[#000000]" />,
    speed: '180 – 350 kW Ultra-Fast',
  },
];

export const NetworkHighlights: React.FC = () => {
  return (
    <ConnectedLineSection
      id="network"
      pattern="right-to-left"
      illustrationLeft={<HouseIllustration size={72} />}
      illustrationRight={<TowerIllustration size={76} />}
      illustrationLeftOffset={{ x: 10, y: -20 }}
      illustrationRightOffset={{ x: -28, y: -20 }}
      className="bg-[#40E0D0]"
    >
      <section className="py-24 sm:py-32 relative overflow-hidden border-b-2 border-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#000000] text-xs font-mono text-[#000000] uppercase tracking-widest mb-4 font-bold shadow-sm">
              THE EVION NETWORK
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#000000] uppercase leading-[1.05]">
              ONE NETWORK. <br />
              <span className="text-[#FFFFFF] drop-shadow-sm">
                EVERY DESTINATION.
              </span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#000000] font-medium leading-relaxed">
              From private home garages to bustling commercial headquarters and trans-continental expressways, EVION brings seamless, ultra-reliable energy infrastructure wherever mobility happens.
            </p>
          </div>

          {/* 3 Large Interactive Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {networkCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group"
              >
                <Link
                  href={card.href}
                  data-cursor="VIEW"
                  className="block relative h-[480px] sm:h-[520px] rounded-3xl overflow-hidden border-2 border-[#000000] hover:border-[#FFFFFF] transition-all duration-500 bg-[#FFFFFF] shadow-xl flex flex-col justify-between p-6 sm:p-8"
                >
                  {/* Background Remote Image (Preserved in original colors) */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent" />
                  </div>

                  {/* Card Top: Category Badge & Speed Tag */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#000000] text-xs font-mono font-bold text-[#000000]">
                      {card.icon}
                      <span>{card.category}</span>
                    </div>

                    <span className="text-[11px] font-mono text-[#000000] bg-[#40E0D0] border border-[#000000] px-2.5 py-1 rounded-full font-bold">
                      {card.speed}
                    </span>
                  </div>

                  {/* Card Bottom: Content & Animated CTA */}
                  <div className="relative z-10 space-y-4">
                    <div className="space-y-2">
                      <div className="text-xs uppercase font-mono tracking-widest text-[#40E0D0] group-hover:translate-x-1 transition-transform font-bold">
                        {card.tagline}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#FFFFFF] tracking-tight leading-snug">
                        {card.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#FFFFFF] line-clamp-3 leading-relaxed">
                      {card.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-[#FFFFFF]/30 text-sm font-semibold text-[#FFFFFF] group-hover:text-[#40E0D0] transition-colors">
                      <span>Explore {card.category} Solution</span>
                      <div className="w-8 h-8 rounded-full bg-[#40E0D0] text-[#000000] flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ConnectedLineSection>
  );
};
