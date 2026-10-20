'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Home, Building2, Zap, Truck } from 'lucide-react';
import { images } from '@/config/images';

interface SolutionItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  highlights: string[];
}

const solutionsList: SolutionItem[] = [
  {
    id: 'home',
    number: '01',
    title: 'HOME CHARGING',
    description: 'Designed for convenient charging at residential properties. Architectural home units seamlessly integrating with solar arrays and domestic energy storage.',
    image: images.homeCharging,
    icon: <Home className="w-5 h-5 text-[#40E0D0]" />,
    highlights: ['Solar Dynamic Balancing', '22 kW AC Fast Replenish', 'EVION Mobile Companion'],
  },
  {
    id: 'workplace',
    number: '02',
    title: 'WORKPLACE CHARGING',
    description: 'Charging solutions for offices, campuses, and commercial buildings. Elevate corporate sustainability while providing effortless employee charging amenities.',
    image: images.businessCharging,
    icon: <Building2 className="w-5 h-5 text-[#40E0D0]" />,
    highlights: ['Multi-Tenant Billing', 'Intelligent Peak Load Shaving', 'RFID & App Access'],
  },
  {
    id: 'public',
    number: '03',
    title: 'PUBLIC CHARGING',
    description: 'Charging infrastructure for public locations and destinations. Ultra-fast, liquid-cooled DC pedestals designed for retail centers, hotels, and highway corridors.',
    image: images.commercialRealEstate,
    icon: <Zap className="w-5 h-5 text-[#40E0D0]" />,
    highlights: ['Up to 350 kW Ultra-Fast DC', 'Plug & Charge Autostart', 'High-Visibility LED Guides'],
  },
  {
    id: 'fleet',
    number: '04',
    title: 'FLEET CHARGING',
    description: 'Charging solutions for electric vehicle fleets and operational facilities. Mission-critical power orchestration for logistics, buses, and corporate fleets.',
    image: images.fleetDepot,
    icon: <Truck className="w-5 h-5 text-[#40E0D0]" />,
    highlights: ['Depot Load Orchestration', 'Telematics Integration', 'Guaranteed 99.9% Uptime SLA'],
  },
];

export const ChargingSolutions: React.FC = () => {
  return (
    <section
      id="solutions"
      className="relative w-full bg-[#05080A] text-[#FFFFFF] py-32 sm:py-44 overflow-hidden border-b border-[#40E0D0]/20"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#40E0D0]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#40E0D0]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-[#FFFFFF]/10 pb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#40E0D0]" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#40E0D0] uppercase">
                02 — PORTFOLIO
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#FFFFFF] uppercase">
              OUR CHARGING <br />
              <span className="font-semibold text-[#40E0D0]">SOLUTIONS.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#FFFFFF]/70 max-w-md font-light leading-relaxed">
            Engineered for every environment. From private sanctuaries to mission-critical commercial hubs, EVION delivers tailored electric power infrastructure.
          </p>
        </div>

        {/* Studio Editorial Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {solutionsList.map((sol, index) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between rounded-3xl bg-[#000000] border border-[#FFFFFF]/10 hover:border-[#40E0D0]/50 transition-all duration-500 overflow-hidden shadow-2xl"
            >
              {/* Image Frame with Subtle Zoom */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111827]">
                <Image
                  src={sol.image}
                  alt={sol.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center filter brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                />
                
                {/* Gradient Shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80" />

                {/* Corner Category Number */}
                <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-[#000000]/70 backdrop-blur-md border border-[#40E0D0]/40 text-xs font-mono font-bold text-[#40E0D0]">
                  {sol.number}
                </div>

                {/* Floating Icon */}
                <div className="absolute top-6 right-6 p-2.5 rounded-full bg-[#000000]/70 backdrop-blur-md border border-[#FFFFFF]/20 group-hover:border-[#40E0D0] transition-colors">
                  {sol.icon}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-[#FFFFFF] group-hover:text-[#40E0D0] transition-colors uppercase">
                    {sol.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#FFFFFF]/70 font-light leading-relaxed">
                    {sol.description}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#FFFFFF]/10">
                  {sol.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      className="px-3 py-1 rounded-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 text-[11px] font-mono text-[#FFFFFF]/80"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Explore Link */}
                <div className="pt-4 flex items-center justify-between">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase text-[#40E0D0] hover:text-[#FFFFFF] transition-colors group-hover:translate-x-1 duration-300"
                  >
                    <span>EXPLORE SOLUTION</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <span className="w-12 h-[1px] bg-[#FFFFFF]/20 group-hover:w-20 group-hover:bg-[#40E0D0] transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
