'use client';

import React from 'react';
import {
  Search,
  MapPin,
  Navigation,
  Compass,
  Layers,
  Zap,
  Star,
  SlidersHorizontal,
  Wifi,
  Signal,
  ArrowUpRight,
} from 'lucide-react';
import { appShowcaseConfig } from '@/config/appShowcase';

export const PhoneMapScreen: React.FC = () => {
  const station = appShowcaseConfig.phoneMockups.phone2;

  return (
    <div className="w-full h-full bg-[#0A1015] text-[#FFFFFF] flex flex-col justify-between font-sans select-none overflow-hidden relative">
      {/* Top iOS Status Bar */}
      <div className="relative z-30 pt-3 px-6 flex items-center justify-between text-[11px] font-medium text-white/90 bg-gradient-to-b from-[#0A1015]/90 to-transparent">
        <span className="font-semibold tracking-tight">9:41</span>
        <div className="flex items-center gap-1.5 text-white/90">
          <Signal className="w-3 h-3" />
          <Wifi className="w-3 h-3" />
          <div className="w-5 h-2.5 border border-white/80 rounded-sm p-[1px] flex items-center">
            <div className="h-full w-full bg-[#40E0D0] rounded-[1px]" />
          </div>
        </div>
      </div>

      {/* Dynamic Island Pill */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-40 flex items-center justify-between px-2.5 shadow-sm">
        <div className="w-2 h-2 rounded-full bg-[#40E0D0]/40 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-[#40E0D0] " />
        </div>
        <div className="w-2 h-2 rounded-full bg-[#111827]" />
      </div>

      {/* Top Search & Filter Bar */}
      <div className="relative z-20 px-4 pt-2 pb-2 space-y-2">
        <div className="relative flex items-center">
          <Search className="absolute left-3 w-3.5 h-3.5 text-white/50" />
          <input
            type="text"
            readOnly
            value="Search 1,200+ EVION stations..."
            className="w-full bg-[#131D24]/90 backdrop-blur-md border border-white/15 rounded-xl pl-9 pr-8 py-1.5 text-[11px] text-white/80 font-sans focus:outline-none shadow-lg cursor-default"
          />
          <div className="absolute right-2.5 p-1 rounded-md bg-white/5 text-[#40E0D0]">
            <SlidersHorizontal className="w-3 h-3" />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-hidden text-[9px] font-mono">
          <span className="px-2 py-0.5 rounded-full bg-[#40E0D0] text-black font-bold whitespace-nowrap shadow-[0_0_8px_rgba(64,224,208,0.4)]">
            350 kW Ultra
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/90 border border-white/10 whitespace-nowrap">
            Available (6)
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/90 border border-white/10 whitespace-nowrap">
            CCS2
          </span>
        </div>
      </div>

      {/* Map Graphic Canvas */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Vector Road and Map Grid SVG Background */}
        <svg
          className="w-full h-full object-cover opacity-90"
          viewBox="0 0 320 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="320" height="600" fill="#0C141B" />

          {/* District Landmass & Water Accents */}
          <path
            d="M-20 80 Q 60 120 110 240 T 180 390 T 340 450 L 340 600 L -20 600 Z"
            fill="#080E13"
          />
          <path
            d="M240 -10 Q 280 80 340 140 L 340 -10 Z"
            fill="#060B0F"
          />

          {/* Secondary Arterial Streets */}
          <path
            d="M-10 180 L330 140 M-10 320 L330 290 M-10 460 L330 430"
            stroke="#1B2834"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M60 -10 L110 610 M220 -10 L270 610"
            stroke="#1B2834"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Minor Cross Streets */}
          <path
            d="M-10 90 L330 80 M-10 240 L330 220 M-10 380 L330 360 M-10 510 L330 500"
            stroke="#141E27"
            strokeWidth="1.5"
          />
          <path
            d="M140 -10 L170 610 M-10 140 L160 300 M160 300 L330 260"
            stroke="#141E27"
            strokeWidth="1.5"
          />

          {/* Primary Highway Corridor */}
          <path
            d="M30 610 C 60 420 80 340 180 230 C 240 160 270 80 290 -10"
            stroke="#223342"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Active Navigation Route (Turquoise Glowing Line) */}
          <path
            d="M65 520 C 85 410 100 350 160 270 L 160 220"
            stroke="#40E0D0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="6 4"
            style={{
              filter: 'drop-shadow(0 0 6px #40E0D0)',
            }}
          />

          {/* User Starting Beacon (Vehicle Location) */}
          <circle cx="65" cy="520" r="6" fill="#FFFFFF" />
          <circle cx="65" cy="520" r="10" stroke="#40E0D0" strokeWidth="2" opacity="0.6" />
        </svg>

        {/* Station Markers Overlay */}
        {/* Nearby Station 1 (North) */}
        <div className="absolute top-[130px] right-[55px] z-10 flex flex-col items-center">
          <div className="w-6 h-6 rounded-full bg-black/80 border border-[#40E0D0]/50 flex items-center justify-center shadow-md">
            <Zap className="w-3 h-3 text-[#40E0D0]" />
          </div>
          <span className="text-[7px] font-mono text-white/70 bg-black/80 px-1 rounded mt-0.5">
            180 kW
          </span>
        </div>

        {/* Nearby Station 2 (West) */}
        <div className="absolute top-[340px] left-[35px] z-10 flex flex-col items-center">
          <div className="w-6 h-6 rounded-full bg-black/80 border border-[#40E0D0]/50 flex items-center justify-center shadow-md">
            <Zap className="w-3 h-3 text-[#40E0D0]" />
          </div>
          <span className="text-[7px] font-mono text-white/70 bg-black/80 px-1 rounded mt-0.5">
            350 kW
          </span>
        </div>

        {/* Selected Flagship Station Marker (Center-Destination) */}
        <div className="absolute top-[200px] left-[142px] z-20 flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
          {/* Pulsing Turquoise Waves */}
          <div className="absolute -inset-2 rounded-full border border-[#40E0D0] animate-ping opacity-75" />
          <div className="absolute -inset-4 rounded-full bg-[#40E0D0]/20 blur-md pointer-events-none" />

          {/* Floating Marker Badge */}
          <div className="px-2 py-0.5 rounded-full bg-black/90 border border-[#40E0D0] text-[#40E0D0] text-[8px] font-mono font-bold tracking-wider mb-1 shadow-lg whitespace-nowrap">
            350 kW • 6 PLUGS
          </div>

          {/* Marker Pin Core */}
          <div className="w-9 h-9 rounded-full bg-[#40E0D0] border-2 border-white flex items-center justify-center shadow-[0_4px_16px_rgba(64,224,208,0.7)] text-black">
            <Zap className="w-5 h-5 text-black fill-black" />
          </div>
        </div>

        {/* Map Utility Controls (Right Side Floating) */}
        <div className="absolute right-3.5 top-[135px] z-20 flex flex-col gap-2">
          <div className="w-7 h-7 rounded-full bg-[#131D24]/90 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 shadow-md">
            <Compass className="w-3.5 h-3.5 text-[#40E0D0]" />
          </div>
          <div className="w-7 h-7 rounded-full bg-[#131D24]/90 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 shadow-md">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <div className="w-7 h-7 rounded-full bg-[#131D24]/90 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 shadow-md">
            <Navigation className="w-3.5 h-3.5 text-[#40E0D0]" />
          </div>
        </div>
      </div>

      {/* Bottom Floating Station Info Card */}
      <div className="relative z-20 px-3.5 pb-2">
        <div className="bg-[#0C151C]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-3 shadow-2xl space-y-2">
          {/* Header Row */}
          <div className="flex items-start justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#40E0D0] " />
                <span className="text-[9px] font-mono font-bold text-[#40E0D0] uppercase tracking-wider">
                  EVION HYPERHUB
                </span>
              </div>
              <h4 className="text-[12px] font-bold text-white tracking-tight">
                {station.stationName}
              </h4>
              <p className="text-[9px] text-white/60 font-sans">
                {station.locationTag} • {station.distanceText}
              </p>
            </div>

            <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded-md">
              <Star className="w-2.5 h-2.5 text-[#40E0D0] fill-[#40E0D0]" />
              <span className="text-[9px] font-mono font-bold text-white">
                {station.rating}
              </span>
            </div>
          </div>

          {/* Badges Row */}
          <div className="flex items-center gap-1.5 pt-0.5 text-[8.5px] font-mono">
            <span className="px-2 py-0.5 rounded bg-[#40E0D0]/15 text-[#40E0D0] font-bold border border-[#40E0D0]/30">
              {station.availablePlugs}/{station.totalPlugs} Available
            </span>
            <span className="px-2 py-0.5 rounded bg-white/5 text-white/80 border border-white/10">
              {station.powerRating}
            </span>
          </div>

          {/* Action Button: Start Navigation */}
          <button
            type="button"
            className="w-full py-2 rounded-xl bg-[#40E0D0] hover:bg-[#FFFFFF] text-black font-mono font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-[0_0_14px_rgba(64,224,208,0.35)]"
          >
            <Navigation className="w-3 h-3 text-black fill-black" />
            <span>START NAVIGATION</span>
            <ArrowUpRight className="w-3 h-3 text-black" />
          </button>
        </div>
      </div>

      {/* iOS Home Indicator Bar */}
      <div className="relative z-30 pb-1 flex justify-center bg-[#0C151C]/95">
        <div className="w-28 h-1 bg-white/40 rounded-full" />
      </div>
    </div>
  );
};
