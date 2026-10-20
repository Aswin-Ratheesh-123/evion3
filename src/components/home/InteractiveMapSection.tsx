'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Zap,
  Navigation,
  Clock,
  ArrowUpRight,
  SlidersHorizontal,
  Layers,
  Sparkles,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import { mockStations } from '@/data/stations';
import { Station } from '@/types';
import { MapWrapper } from '@/components/map/MapWrapper';

export const InteractiveMapSection: React.FC = () => {
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeCityFilter, setActiveCityFilter] = useState<string>('Bengaluru');

  const filterOptions = [
    'All',
    'Ultra-Fast 350kW',
    'DC Fast 180kW',
    'Available Now',
    'CCS2',
    'Type 2',
  ];

  const cityTabs = ['Bengaluru', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Pune', 'Chennai', 'Goa'];

  const filteredStations = useMemo(() => {
    return mockStations.filter((station) => {
      const matchesCity =
        activeCityFilter === 'All' ||
        station.city.toLowerCase() === activeCityFilter.toLowerCase();

      let matchesTag = true;
      if (activeFilter === 'Ultra-Fast 350kW') matchesTag = station.powerKw >= 350;
      else if (activeFilter === 'DC Fast 180kW') matchesTag = station.powerKw >= 180 && station.powerKw < 350;
      else if (activeFilter === 'Available Now') matchesTag = station.status === 'Available' && station.availablePlugs > 0;
      else if (activeFilter === 'CCS2') matchesTag = station.connectors.includes('CCS2');
      else if (activeFilter === 'Type 2') matchesTag = station.connectors.includes('Type 2');

      return matchesCity && matchesTag;
    });
  }, [activeCityFilter, activeFilter]);

  return (
    <section
      id="network"
      className="relative w-full bg-[#000000] text-[#FFFFFF] py-28 sm:py-36 overflow-hidden border-b border-[#FFFFFF]/10"
    >
      {/* Background Architectural Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#40E0D0]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Target Anchors for Navigation Links */}
      <div id="map" className="relative -top-24 pointer-events-none" />
      <div id="find-charger" className="relative -top-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Heading & Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#FFFFFF]/10 pb-10">
          <div className="space-y-4 max-w-2xl">
            {/* Section Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/5 backdrop-blur-md border border-[#40E0D0]/30 text-xs font-mono text-[#40E0D0] uppercase tracking-widest font-bold">
              <span className="w-2 h-2 rounded-full bg-[#40E0D0] " />
              <span>LIVE TELEMETRY & LOCATOR</span>
            </div>

            {/* Exact Required Heading: "Find Your Next Charge." */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#FFFFFF] uppercase leading-[0.95]">
              FIND YOUR <br />
              <span className="font-semibold text-[#40E0D0]">NEXT CHARGE.</span>
            </h2>

            {/* Exact Supporting Text: "Discover EVION charging locations and plan your journey." */}
            <p className="text-base sm:text-lg text-[#FFFFFF]/75 font-normal leading-relaxed max-w-xl">
              Discover EVION charging locations and plan your journey. Ultra-fast speeds up to 350 kW, real-time bay availability, and seamless charging across major metropolitan hubs.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <div className="px-4 py-3 rounded-2xl bg-[#0A0D10] border border-[#FFFFFF]/15 flex items-center gap-3 shadow-lg">
              <div className="w-8 h-8 rounded-xl bg-[#40E0D0]/15 border border-[#40E0D0]/40 flex items-center justify-center text-[#40E0D0]">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <div>
                <div className="text-[10px] text-[#FFFFFF]/50 uppercase font-bold">PEAK POWER</div>
                <div className="text-sm font-black text-[#FFFFFF]">350 kW DC</div>
              </div>
            </div>

            <div className="px-4 py-3 rounded-2xl bg-[#0A0D10] border border-[#FFFFFF]/15 flex items-center gap-3 shadow-lg">
              <div className="w-8 h-8 rounded-xl bg-[#40E0D0]/15 border border-[#40E0D0]/40 flex items-center justify-center text-[#40E0D0]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-[#FFFFFF]/50 uppercase font-bold">UPTIME SLA</div>
                <div className="text-sm font-black text-[#40E0D0]">99.9%</div>
              </div>
            </div>

            <div className="px-4 py-3 rounded-2xl bg-[#0A0D10] border border-[#FFFFFF]/15 flex items-center gap-3 shadow-lg">
              <div className="w-8 h-8 rounded-xl bg-[#40E0D0]/15 border border-[#40E0D0]/40 flex items-center justify-center text-[#40E0D0]">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-[#FFFFFF]/50 uppercase font-bold">SUPERHUBS</div>
                <div className="text-sm font-black text-[#FFFFFF]">20+ LIVE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* City Selection Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {cityTabs.map((city) => (
              <button
                key={city}
                onClick={() => {
                  setActiveCityFilter(city);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                  activeCityFilter === city
                    ? 'bg-[#40E0D0] text-[#000000] font-bold shadow-md shadow-[#40E0D0]/20'
                    : 'bg-[#FFFFFF]/5 text-[#FFFFFF]/70 hover:bg-[#FFFFFF]/15 hover:text-[#FFFFFF] border border-[#FFFFFF]/10'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Speed & Availability Filters */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-xs font-mono text-[#FFFFFF]/50 flex items-center gap-1 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Filters:
            </span>
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 cursor-pointer ${
                  activeFilter === opt
                    ? 'bg-[#FFFFFF] text-[#000000] font-bold'
                    : 'bg-[#FFFFFF]/5 text-[#FFFFFF]/70 hover:bg-[#FFFFFF]/15 border border-[#FFFFFF]/10'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* THE INTERACTIVE CHARGING STATION MAP */}
        <div className="relative w-full rounded-3xl overflow-hidden p-1 bg-gradient-to-b from-[#FFFFFF]/15 via-[#40E0D0]/20 to-[#FFFFFF]/10 shadow-2xl">
          <MapWrapper
            stations={filteredStations}
            initialCity={activeCityFilter}
            selectedStationId={selectedStation?.id}
            onStationSelect={(station) => setSelectedStation(station)}
          />
        </div>

        {/* Informative Footer & Directory Grid of Featured Stations */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#FFFFFF]/10 pb-4">
            <div>
              <h3 className="text-lg font-bold text-[#FFFFFF] uppercase tracking-wide">
                Featured {activeCityFilter} Charging Superhubs
              </h3>
              <p className="text-xs font-mono text-[#FFFFFF]/50">
                Displaying {filteredStations.length} verified charging locations in {activeCityFilter}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#40E0D0]">
              <span className="w-2 h-2 rounded-full bg-[#40E0D0] " />
              <span>CLICK ANY STATION PIN ON MAP TO INSPECT REAL-TIME BAYS & DIRECTIONS</span>
            </div>
          </div>

          {/* Grid of station cards for quick exploration */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredStations.slice(0, 6).map((station) => {
              const isSelected = selectedStation?.id === station.id;

              return (
                <div
                  key={station.id}
                  onClick={() => setSelectedStation(station)}
                  className={`p-5 rounded-2xl transition-all duration-300 cursor-pointer space-y-3 border ${
                    isSelected
                      ? 'bg-[#0E141B] border-[#40E0D0] shadow-lg shadow-[#40E0D0]/20 scale-[1.02]'
                      : 'bg-[#050709] border-[#FFFFFF]/10 hover:border-[#40E0D0]/60 hover:bg-[#080B0F]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#40E0D0] uppercase tracking-wider">
                        {station.speedCategory}
                      </span>
                      <h4 className="text-sm font-bold text-[#FFFFFF] mt-0.5">{station.name}</h4>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        station.status === 'Available'
                          ? 'bg-[#40E0D0]/10 text-[#40E0D0] border-[#40E0D0]/30'
                          : 'bg-[#FFFFFF]/10 text-[#FFFFFF]/70 border-[#FFFFFF]/20'
                      }`}
                    >
                      {station.status}
                    </span>
                  </div>

                  <div className="text-xs text-[#FFFFFF]/60 line-clamp-2 font-sans flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#40E0D0] shrink-0 mt-0.5" />
                    <span>{station.address}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#FFFFFF]/10 text-xs font-mono">
                    <div className="text-[#FFFFFF]/70">
                      <span className="text-[#40E0D0] font-bold">{station.availablePlugs}</span> / {station.totalPlugs} Bays Free
                    </div>

                    <a
                      href={station.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#40E0D0] hover:text-[#FFFFFF] flex items-center gap-1 font-bold transition-colors"
                    >
                      <span>Directions</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
