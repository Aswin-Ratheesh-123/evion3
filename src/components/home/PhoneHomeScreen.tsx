'use client';

import React from 'react';
import {
  Zap,
  BatteryCharging,
  Clock,
  Gauge,
  MapPin,
  Route,
  User,
  Sliders,
  ShieldCheck,
  Wifi,
  Signal,
  CheckCircle2,
} from 'lucide-react';
import { appShowcaseConfig } from '@/config/appShowcase';

export const PhoneHomeScreen: React.FC = () => {
  const data = appShowcaseConfig.phoneMockups.phone1;

  return (
    <div className="w-full h-full bg-[#05080A] text-[#FFFFFF] flex flex-col justify-between font-sans select-none overflow-hidden relative">
      {/* Subtle Electric Grid Accent in Phone Screen Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-[#40E0D0]/15 blur-2xl pointer-events-none" />

      {/* Top iOS Status Bar */}
      <div className="relative z-20 pt-3 px-6 flex items-center justify-between text-[11px] font-medium text-white/90">
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
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-between px-2.5 shadow-sm">
        <div className="w-2 h-2 rounded-full bg-[#40E0D0]/40 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-[#40E0D0] " />
        </div>
        <div className="w-2 h-2 rounded-full bg-[#111827]" />
      </div>

      {/* App Header */}
      <div className="relative z-10 px-5 pt-3 pb-2 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#40E0D0] flex items-center justify-center shadow-[0_0_12px_rgba(64,224,208,0.5)]">
            <Zap className="w-4 h-4 text-black fill-black" />
          </div>
          <div>
            <div className="text-[12px] font-mono font-bold tracking-widest text-[#FFFFFF] leading-none">
              EVION
            </div>
            <div className="text-[9px] font-mono text-[#40E0D0] tracking-wider leading-tight">
              CHARGING OS
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 border border-[#40E0D0]/30 text-[9px] font-mono text-[#40E0D0]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#40E0D0] " />
          <span>LIVE SESSION</span>
        </div>
      </div>

      {/* Main Screen Content */}
      <div className="relative z-10 px-4 py-2 flex-1 flex flex-col justify-between overflow-hidden">
        {/* Active Station Banner */}
        <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-2.5 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="text-[9px] font-mono text-white/50 uppercase tracking-wider">
              Connected Station
            </div>
            <div className="text-[11px] font-semibold text-white tracking-tight truncate max-w-[170px]">
              {data.stationName}
            </div>
            <div className="text-[9px] font-mono text-[#40E0D0] flex items-center gap-1">
              <span>Bay 02</span>
              <span>•</span>
              <span>{data.plugType}</span>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block px-1.5 py-0.5 rounded bg-[#40E0D0]/20 text-[#40E0D0] text-[9px] font-mono font-bold">
              800V
            </span>
          </div>
        </div>

        {/* Circular Charging Gauge */}
        <div className="relative flex items-center justify-center my-auto py-1">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-36 h-36 rounded-full bg-[#40E0D0]/20 blur-xl pointer-events-none" />

          {/* SVG Progress Ring */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
              {/* Background Track */}
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="#152125"
                strokeWidth="7"
                fill="none"
              />
              {/* Turquoise Active Track */}
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="url(#turquoiseGaugeGradient)"
                strokeWidth="7"
                strokeDasharray="264"
                strokeDashoffset={264 - (264 * data.batteryPercent) / 100}
                strokeLinecap="round"
                fill="none"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(64, 224, 208, 0.75))',
                }}
              />
              <defs>
                <linearGradient id="turquoiseGaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#40E0D0" />
                  <stop offset="100%" stopColor="#22B2A3" />
                </linearGradient>
              </defs>
            </svg>

            {/* Inner Gauge Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[9px] font-mono text-[#40E0D0] uppercase tracking-widest font-bold">
                CHARGING
              </span>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-extrabold tracking-tight font-mono text-white">
                  {data.batteryPercent}
                </span>
                <span className="text-lg font-mono text-[#40E0D0] font-bold ml-0.5">%</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-white/80">
                <Zap className="w-3 h-3 text-[#40E0D0] fill-[#40E0D0]" />
                <span className="font-semibold text-[#40E0D0]">{data.powerKw} kW</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Telemetry Metrics */}
        <div className="grid grid-cols-3 gap-1.5">
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
            <div className="text-[9px] font-mono text-white/50 uppercase">Remaining</div>
            <div className="text-[12px] font-mono font-bold text-white mt-0.5">
              {data.remainingMin} <span className="text-[9px] text-[#40E0D0]">MIN</span>
            </div>
          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
            <div className="text-[9px] font-mono text-white/50 uppercase">Delivered</div>
            <div className="text-[12px] font-mono font-bold text-white mt-0.5">
              {data.kwhDelivered} <span className="text-[9px] text-[#40E0D0]">kWh</span>
            </div>
          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
            <div className="text-[9px] font-mono text-white/50 uppercase">Added Range</div>
            <div className="text-[12px] font-mono font-bold text-white mt-0.5">
              +{data.rangeAddedKm} <span className="text-[9px] text-[#40E0D0]">km</span>
            </div>
          </div>
        </div>

        {/* Smart Session Controls Action Bar */}
        <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[9px] font-mono text-white/70">
            <ShieldCheck className="w-3 h-3 text-[#40E0D0]" />
            <span>Battery Thermal: Optimal</span>
          </div>
          <button
            type="button"
            className="px-2.5 py-1 rounded-lg bg-[#40E0D0]/10 border border-[#40E0D0] text-[#40E0D0] hover:bg-[#40E0D0] hover:text-black transition-colors text-[9px] font-mono font-bold uppercase tracking-wider"
          >
            Session Controls
          </button>
        </div>
      </div>

      {/* Bottom App Navigation Bar */}
      <div className="relative z-20 px-6 py-2.5 bg-black/90 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
        <div className="flex flex-col items-center gap-0.5 text-white/40">
          <MapPin className="w-4 h-4" />
          <span className="text-[8px] font-mono">Map</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-[#40E0D0]">
          <div className="w-7 h-5 rounded-full bg-[#40E0D0]/20 flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-[#40E0D0] fill-[#40E0D0]" />
          </div>
          <span className="text-[8px] font-mono font-bold">Charge</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-white/40">
          <Route className="w-4 h-4" />
          <span className="text-[8px] font-mono">Routes</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-white/40">
          <User className="w-4 h-4" />
          <span className="text-[8px] font-mono">Profile</span>
        </div>
      </div>

      {/* iOS Home Indicator Bar */}
      <div className="relative z-20 pb-1 flex justify-center bg-black/90">
        <div className="w-28 h-1 bg-white/40 rounded-full" />
      </div>
    </div>
  );
};
