'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, BatteryCharging, ShieldCheck, Cpu, Navigation, Sparkles, Play, RotateCcw } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Waypoint {
  id: number;
  stageNumber: string;
  label: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  specs: { label: string; value: string }[];
}

const waypoints: Waypoint[] = [
  {
    id: 1,
    stageNumber: '01',
    label: 'STAGE 01 / RESIDENCE',
    title: 'THE RESIDENTIAL MATRIX',
    category: 'Home Charging Architecture',
    description: 'Departing baseline. Smart overnight load balancing and 100% capacity managed prior to entering the transit corridor.',
    icon: <Cpu className="w-5 h-5 text-[#40E0D0]" />,
    specs: [
      { label: 'BATTERY STATE', value: '100% SOC' },
      { label: 'DEPARTURE RANGE', value: '540 KM' },
      { label: 'GRID EFFICIENCY', value: '98.4%' },
    ],
  },
  {
    id: 2,
    stageNumber: '02',
    label: 'STAGE 02 / CAMPUS',
    title: 'COMMERCIAL ENTERPRISE HUB',
    category: 'Workplace Electrification',
    description: 'Workplace node and corporate solar canopy balancing, verified with ISO 15118 bidirectional authentication.',
    icon: <ShieldCheck className="w-5 h-5 text-[#40E0D0]" />,
    specs: [
      { label: 'CAMPUS LOAD', value: '840 KW' },
      { label: 'SOLAR OFFSET', value: '62%' },
      { label: 'TELEMETRY SYNC', value: 'ACTIVE' },
    ],
  },
  {
    id: 3,
    stageNumber: '03',
    label: 'STAGE 03 / HIGHWAY',
    title: 'THE CONNECTED ARTERY',
    category: 'High-Speed Transit Corridor',
    description: 'Active departure point. Autonomous navigation along high-voltage electric corridors. Real-time battery telemetry flags upcoming rapid recharge.',
    icon: <Navigation className="w-5 h-5 text-[#40E0D0]" />,
    specs: [
      { label: 'CRUISE SPEED', value: '110 KM/H' },
      { label: 'CONNECTED NODES', value: '1,420 ACTIVE' },
      { label: 'ENERGY REGEN', value: '+14.2 KWH' },
    ],
  },
  {
    id: 4,
    stageNumber: '04',
    label: 'STAGE 04 / RAPID RECHARGE',
    title: 'EVION RAPID DC PAVILION',
    category: 'Ultra-Fast 350 kW DC Station',
    description: 'Liquid-cooled 350 kW connector docked into vehicle. Pulsing turquoise LEDs indicate ultra-fast 800V rapid replenishment.',
    icon: <BatteryCharging className="w-5 h-5 text-[#40E0D0]" />,
    specs: [
      { label: 'PEAK CHARGE RATE', value: '350 KW DC' },
      { label: 'TIME TO 80%', value: '14 MIN' },
      { label: 'VOLTAGE', value: '800V ARCHITECTURE' },
    ],
  },
  {
    id: 5,
    stageNumber: '05',
    label: 'STAGE 05 / DESTINATION',
    title: 'DRIVE FURTHER. LIVE ELECTRIC.',
    category: 'The Boundless Destination',
    description: 'Full range unlocked. Transitioning seamlessly into national backbone of over 5,000 architectural charging bays.',
    icon: <Sparkles className="w-5 h-5 text-[#40E0D0]" />,
    specs: [
      { label: 'SYSTEM VERIFICATION', value: 'COMPLETE' },
      { label: 'NEXT HORIZON', value: 'UNRESTRICTED' },
      { label: 'ENERGY SOURCE', value: '100% CLEAN' },
    ],
  },
];

export const SignatureCarJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathHighwayToChargerRef = useRef<SVGPathElement>(null);
  const pathChargerToDestRef = useRef<SVGPathElement>(null);
  const carGroupRef = useRef<SVGGElement>(null);
  const autoTimelineRef = useRef<gsap.core.Timeline | null>(null);

  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeScene, setActiveScene] = useState<number>(2); // Start at Stage 3: 03 HIGHWAY
  const [isChargingActive, setIsChargingActive] = useState<boolean>(false);
  const [isPlayingAuto, setIsPlayingAuto] = useState<boolean>(false);

  // Core movement calculation:
  // p = 0.00 to 0.46: Car travels from 03 HIGHWAY (750, 400) to EVION RAPID DC (950, 200)
  // p = 0.46 to 0.76: Car STOPS and HOLDS at EVION RAPID DC (950, 200) with active turquoise charging animation
  // p = 0.76 to 1.00: Car resumes travel from EVION RAPID DC (950, 200) to 05 DESTINATION (1120, 400)
  const updateCarPosition = useCallback((progress: number) => {
    const p = Math.max(0, Math.min(1, progress));
    setScrollProgress(p);

    const path1 = pathHighwayToChargerRef.current;
    const path2 = pathChargerToDestRef.current;
    const car = carGroupRef.current;
    if (!path1 || !path2 || !car) return;

    const len1 = path1.getTotalLength();
    const len2 = path2.getTotalLength();

    if (p <= 0.46) {
      // PHASE 1: Highway -> EVION Rapid DC
      const t1 = p / 0.46;
      const dist1 = t1 * len1;
      const pt = path1.getPointAtLength(dist1);

      const lookAhead = Math.min(len1, dist1 + 4);
      const lookBehind = Math.max(0, dist1 - 4);
      const pNext = path1.getPointAtLength(lookAhead);
      const pPrev = path1.getPointAtLength(lookBehind);
      const angleRad = Math.atan2(pNext.y - pPrev.y, pNext.x - pPrev.x);
      const angleDeg = (angleRad * 180) / Math.PI;

      gsap.set(car, {
        x: pt.x,
        y: pt.y,
        rotation: angleDeg,
        transformOrigin: 'center center',
      });

      // Draw turquoise active electric line behind the car
      gsap.set(path1, {
        strokeDashoffset: len1 * (1 - t1),
      });
      gsap.set(path2, {
        strokeDashoffset: len2,
      });

      setIsChargingActive(false);
      setActiveScene(2); // Stage 3 (03 HIGHWAY)
    } else if (p > 0.46 && p <= 0.76) {
      // PHASE 2: Parked, Stopped & Charging at EVION RAPID DC
      const pt = path1.getPointAtLength(len1);

      gsap.set(car, {
        x: pt.x,
        y: pt.y,
        rotation: 0, // Level with charger
        transformOrigin: 'center center',
      });

      // Path 1 fully drawn
      gsap.set(path1, {
        strokeDashoffset: 0,
      });
      // Path 2 not yet drawn
      gsap.set(path2, {
        strokeDashoffset: len2,
      });

      setIsChargingActive(true);
      setActiveScene(3); // Stage 4 (EVION RAPID DC)
    } else {
      // PHASE 3: Departure from EVION RAPID DC -> 05 DESTINATION
      const t2 = (p - 0.76) / 0.24;
      const dist2 = t2 * len2;
      const pt = path2.getPointAtLength(dist2);

      const lookAhead = Math.min(len2, dist2 + 4);
      const lookBehind = Math.max(0, dist2 - 4);
      const pNext = path2.getPointAtLength(lookAhead);
      const pPrev = path2.getPointAtLength(lookBehind);
      const angleRad = Math.atan2(pNext.y - pPrev.y, pNext.x - pPrev.x);
      const angleDeg = (angleRad * 180) / Math.PI;

      gsap.set(car, {
        x: pt.x,
        y: pt.y,
        rotation: angleDeg,
        transformOrigin: 'center center',
      });

      gsap.set(path1, {
        strokeDashoffset: 0,
      });
      gsap.set(path2, {
        strokeDashoffset: len2 * (1 - t2),
      });

      setIsChargingActive(false);
      setActiveScene(4); // Stage 5 (05 DESTINATION)
    }
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = containerRef.current;
    const path1 = pathHighwayToChargerRef.current;
    const path2 = pathChargerToDestRef.current;
    const car = carGroupRef.current;
    if (!el || !path1 || !path2 || !car) return;

    const len1 = path1.getTotalLength();
    const len2 = path2.getTotalLength();

    // Prepare paths dasharray & initial offset
    gsap.set(path1, {
      strokeDasharray: len1,
      strokeDashoffset: len1,
    });
    gsap.set(path2, {
      strokeDasharray: len2,
      strokeDashoffset: len2,
    });

    // Initialize car precisely at 03 HIGHWAY starting position
    updateCarPosition(0);

    if (prefersReducedMotion) return;

    // Scroll-based scrub animation
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: '+=400%',
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (!isPlayingAuto) {
            updateCarPosition(self.progress);
          }
        },
      });
    }, el);

    return () => {
      ctx.revert();
      if (autoTimelineRef.current) {
        autoTimelineRef.current.kill();
      }
    };
  }, [updateCarPosition, isPlayingAuto]);

  // Smooth automatic sequence execution for testing and preview
  const handleAutoRun = () => {
    if (autoTimelineRef.current) {
      autoTimelineRef.current.kill();
    }
    setIsPlayingAuto(true);

    const animObj = { progress: 0 };
    updateCarPosition(0);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsPlayingAuto(false);
      },
    });

    autoTimelineRef.current = tl;

    // 1. Highway -> EVION Rapid DC
    tl.to(animObj, {
      progress: 0.52,
      duration: 2.8,
      ease: 'power2.inOut',
      onUpdate: () => updateCarPosition(animObj.progress),
    });

    // 2. Stop & Hold at Charging Station with active charging pulse
    tl.to(animObj, {
      progress: 0.58,
      duration: 2.2,
      ease: 'none',
      onUpdate: () => updateCarPosition(animObj.progress),
    });

    // 3. Depart to 05 Destination
    tl.to(animObj, {
      progress: 1.0,
      duration: 2.6,
      ease: 'power2.inOut',
      onUpdate: () => updateCarPosition(animObj.progress),
    });
  };

  const handleResetToHighway = () => {
    if (autoTimelineRef.current) {
      autoTimelineRef.current.kill();
    }
    setIsPlayingAuto(false);
    updateCarPosition(0);
  };

  const jumpToStage = (idx: number) => {
    if (idx === 0 || idx === 1) {
      setActiveScene(idx);
      return;
    }
    if (idx === 2) {
      updateCarPosition(0.0);
    } else if (idx === 3) {
      updateCarPosition(0.58);
    } else if (idx === 4) {
      updateCarPosition(1.0);
    }
  };

  const currentWaypoint = waypoints[activeScene] || waypoints[2];

  return (
    <section
      id="car-journey"
      ref={containerRef}
      className="relative w-full h-screen bg-[#05080A] text-[#FFFFFF] overflow-hidden select-none border-y border-[#40E0D0]/20"
    >
      {/* Background Architectural Grid & Ambient Atmosphere */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#05080A]/60 to-[#000000] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#40E0D0]/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-between py-24">
        {/* Top Header: Section Label, Stage Progress Pills & Auto Run */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#FFFFFF]/10 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#40E0D0] uppercase font-semibold">
           
              <span>02 — SIGNATURE JOURNEY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-[#FFFFFF] uppercase mt-1">
              THE ELECTRIC CONTINUUM
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Interactive Stage Progress Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {waypoints.map((w, idx) => {
                const isActive = idx === activeScene;
                const isPast = idx < activeScene;
                return (
                  <button
                    key={w.id}
                    onClick={() => jumpToStage(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'w-9 bg-[#40E0D0] shadow-[0_0_12px_#40E0D0]'
                        : isPast
                        ? 'w-3.5 bg-[#40E0D0]/60 hover:bg-[#40E0D0]'
                        : 'w-3.5 bg-[#FFFFFF]/20 hover:bg-[#FFFFFF]/40'
                    }`}
                    title={`${w.stageNumber} — ${w.title}`}
                    aria-label={`Jump to ${w.label}`}
                  />
                );
              })}
            </div>

            {/* Auto Play / Reset Controls */}
            <div className="flex items-center gap-2 ml-2 pl-3 border-l border-[#FFFFFF]/15">
              <button
                onClick={handleAutoRun}
                disabled={isPlayingAuto}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider text-[#40E0D0] bg-[#40E0D0]/10 hover:bg-[#40E0D0]/20 border border-[#40E0D0]/30 transition-all cursor-pointer disabled:opacity-50"
                title="Play animation sequence from Highway to EVION Rapid DC"
              >
                <Play className="w-3 h-3 fill-current" />
                <span className="hidden sm:inline">AUTO RUN</span>
              </button>

              <button
                onClick={handleResetToHighway}
                className="p-1 rounded-full text-[#FFFFFF]/50 hover:text-[#40E0D0] hover:bg-[#FFFFFF]/5 transition-all cursor-pointer"
                title="Reset to 03 Highway"
                aria-label="Reset to Highway"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Center Stage: SVG Architectural Route & Animated Pearl-White EV */}
        <div className="relative flex-1 w-full flex items-center justify-center my-2">
          <svg
            viewBox="0 0 1200 600"
            className="w-full h-full max-h-[520px] overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Turquoise Electric Glow Filter */}
              <filter id="turquoiseGlow" x="-25%" y="-25%" width="150%" height="150%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Linear Gradients for Car Bodywork */}
              <linearGradient id="pearlWhiteCar" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="60%" stopColor="#E2E8F0" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>

              <linearGradient id="carGlass" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0B131B" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>
            </defs>

            {/* Architectural Stations / Buildings Silhouettes (Preserved in exact positions) */}
            {/* Landmark 1: Modern Villa Carport */}
            <g transform="translate(60, 240)" opacity="0.65" className="transition-opacity">
              <path d="M 0 60 L 60 10 L 120 60 L 120 120 L 0 120 Z" fill="#000000" stroke="#40E0D0" strokeWidth="1" strokeOpacity="0.4" />
              <rect x="25" y="70" width="35" height="50" fill="#40E0D0" fillOpacity="0.1" stroke="#40E0D0" strokeWidth="0.8" />
              <text x="60" y="145" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.6" fontSize="10" fontFamily="monospace">
                01 RESIDENCE
              </text>
            </g>

            {/* Landmark 2: Corporate Office Towers */}
            <g transform="translate(360, 80)" opacity="0.65" className="transition-opacity">
              <rect x="0" y="20" width="70" height="150" fill="#000000" stroke="#40E0D0" strokeWidth="1" strokeOpacity="0.4" />
              <rect x="65" y="50" width="60" height="120" fill="#000000" stroke="#40E0D0" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="20" y1="40" x2="50" y2="40" stroke="#40E0D0" strokeWidth="0.8" strokeOpacity="0.4" />
              <line x1="20" y1="70" x2="50" y2="70" stroke="#40E0D0" strokeWidth="0.8" strokeOpacity="0.4" />
              <line x1="20" y1="100" x2="50" y2="100" stroke="#40E0D0" strokeWidth="0.8" strokeOpacity="0.4" />
              <text x="65" y="190" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.6" fontSize="10" fontFamily="monospace">
                02 CAMPUS
              </text>
            </g>

            {/* Landmark 3: Highway Flyover / Transit Pylon (Start Point of Car Journey) */}
            <g transform="translate(680, 310)" opacity="0.85" className="transition-opacity">
              <path d="M 0 100 Q 50 20 100 100" stroke="#40E0D0" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
              <line x1="50" y1="40" x2="50" y2="100" stroke="#40E0D0" strokeWidth="1" strokeOpacity="0.4" />
              {/* Highway Departure Beacon Indicator */}
              <circle cx="50" cy="90" r="14" fill="#40E0D0" fillOpacity="0.08" className="" />
              <circle cx="50" cy="90" r="4" fill="#40E0D0" filter="url(#turquoiseGlow)" />
              <text x="50" y="125" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.9" fontSize="10" fontFamily="monospace" fontWeight="bold">
                03 HIGHWAY
              </text>
            </g>

            {/* Landmark 4: EVION Charging Pavilion with Interactive Illumination */}
            <g
              transform="translate(880, 110)"
              className="transition-all duration-500"
              opacity={isChargingActive ? 1 : 0.85}
            >
              {/* Canopy */}
              <path
                d="M 0 50 Q 70 20 140 50 L 130 65 Q 70 40 10 65 Z"
                fill={isChargingActive ? '#091E22' : '#111827'}
                stroke="#40E0D0"
                strokeWidth={isChargingActive ? 2.5 : 1.5}
                filter="url(#turquoiseGlow)"
              />

              {/* Canopy Under-Light glow when active */}
              {isChargingActive && (
                <ellipse
                  cx="70"
                  cy="65"
                  rx="60"
                  ry="9"
                  fill="#40E0D0"
                  fillOpacity="0.25"
                  filter="url(#turquoiseGlow)"
                />
              )}

              {/* Charging Pedestal Body */}
              <rect
                x="60"
                y="65"
                width="20"
                height="60"
                rx="3"
                fill={isChargingActive ? '#031718' : '#FFFFFF'}
                stroke={isChargingActive ? '#40E0D0' : '#000000'}
                strokeWidth={isChargingActive ? 1.5 : 1}
                filter={isChargingActive ? 'url(#turquoiseGlow)' : undefined}
              />

              {/* Charging Pedestal LED Status Strip */}
              <line
                x1="70"
                y1="75"
                x2="70"
                y2="115"
                stroke="#40E0D0"
                strokeWidth={isChargingActive ? 3.5 : 2.5}
                filter="url(#turquoiseGlow)"
                className={isChargingActive ? '' : undefined}
              />

              {/* Active Charging Pulse Rings & Floating Status Indicator */}
              {isChargingActive && (
                <>
                  {/* Expanding Ripple Rings around Charger */}
                  <circle
                    cx="70"
                    cy="95"
                    r="26"
                    fill="none"
                    stroke="#40E0D0"
                    strokeWidth="1.2"
                    strokeOpacity="0.6"
                    className="animate-ping"
                    style={{ animationDuration: '2.2s' }}
                  />
                  <circle
                    cx="70"
                    cy="95"
                    r="14"
                    fill="#40E0D0"
                    fillOpacity="0.2"
                    filter="url(#turquoiseGlow)"
                  />

                  {/* Pulsing Connector Cable to Vehicle Port */}
                  <path
                    d="M 60 85 C 50 85, 46 88, 54 88"
                    stroke="#40E0D0"
                    strokeWidth="2.5"
                    strokeDasharray="3 3"
                    className=""
                    filter="url(#turquoiseGlow)"
                  />
                  <circle cx="54" cy="88" r="3" fill="#40E0D0" filter="url(#turquoiseGlow)" className="" />

                  {/* Floating 350kW Status Pill Badge */}
                  <g className="animate-bounce" style={{ animationDuration: '2.5s' }}>
                    <rect
                      x="18"
                      y="14"
                      width="104"
                      height="22"
                      rx="11"
                      fill="#000000"
                      stroke="#40E0D0"
                      strokeWidth="1.2"
                      filter="url(#turquoiseGlow)"
                    />
                    <circle cx="30" cy="25" r="3" fill="#40E0D0" className="" />
                    <text
                      x="68"
                      y="28.5"
                      textAnchor="middle"
                      fill="#40E0D0"
                      fontSize="9"
                      fontFamily="monospace"
                      fontWeight="bold"
                      letterSpacing="0.05em"
                    >
                      350 kW FAST DC
                    </text>
                  </g>
                </>
              )}

              <text
                x="70"
                y="145"
                textAnchor="middle"
                fill="#40E0D0"
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
                filter={isChargingActive ? 'url(#turquoiseGlow)' : undefined}
              >
                EVION RAPID DC
              </text>
            </g>

            {/* Landmark 5: Final Destination Portal */}
            <g transform="translate(1080, 360)" opacity="0.85">
              <circle cx="40" cy="40" r="30" stroke="#40E0D0" strokeWidth="1.5" strokeDasharray="3 3" fill="#40E0D0" fillOpacity="0.05" />
              <circle cx="40" cy="40" r="12" fill="#40E0D0" filter="url(#turquoiseGlow)" />
              <text x="40" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">
                05 DESTINATION
              </text>
            </g>

            {/* The Full Architectural Roadmap Guide (Entire Network Track) */}
            <path
              d="M 100 320 C 250 320, 260 160, 420 160 C 560 160, 600 400, 750 400 C 880 400, 890 200, 950 200 C 1040 200, 1060 400, 1120 400"
              stroke="#FFFFFF"
              strokeOpacity="0.14"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
            />

            {/* Pre-Journey Network Guide (01 Residence to 03 Highway - Static Network Backdrop) */}
            <path
              d="M 100 320 C 250 320, 260 160, 420 160 C 560 160, 600 400, 750 400"
              stroke="#40E0D0"
              strokeOpacity="0.22"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />

            {/* Active Primary Segment: 03 HIGHWAY -> EVION RAPID DC */}
            <path
              ref={pathHighwayToChargerRef}
              d="M 750 400 C 880 400, 890 200, 950 200"
              stroke="#40E0D0"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              filter="url(#turquoiseGlow)"
            />

            {/* Continuation Segment: EVION RAPID DC -> 05 DESTINATION */}
            <path
              ref={pathChargerToDestRef}
              d="M 950 200 C 1040 200, 1060 400, 1120 400"
              stroke="#40E0D0"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              filter="url(#turquoiseGlow)"
            />

            {/* The Animated Pearl-White Electric Car (Starts at 03 Highway) */}
            <g ref={carGroupRef} className="cursor-pointer">
              {/* Turquoise Underglow */}
              <ellipse
                cx="0"
                cy="0"
                rx={isChargingActive ? 46 : 36}
                ry={isChargingActive ? 22 : 16}
                fill="#40E0D0"
                fillOpacity={isChargingActive ? 0.75 : 0.4}
                filter="url(#turquoiseGlow)"
                className={isChargingActive ? '' : undefined}
              />

              {/* Outer Shadow */}
              <rect x="-30" y="-14" width="60" height="28" rx="8" fill="#000000" fillOpacity="0.5" />

              {/* Main Pearl-White Bodywork */}
              <rect
                x="-28"
                y="-13"
                width="56"
                height="26"
                rx="7"
                fill="url(#pearlWhiteCar)"
                stroke="#40E0D0"
                strokeWidth={isChargingActive ? 1.5 : 0.8}
              />

              {/* Windshield & Panoramic Glass Canopy */}
              <path
                d="M -12 -9 L 10 -9 Q 18 -9 18 -3 L 18 3 Q 18 9 10 9 L -12 9 Q -18 9 -18 0 Q -18 -9 -12 -9 Z"
                fill="url(#carGlass)"
                stroke="#40E0D0"
                strokeWidth="0.5"
              />

              {/* Sleek Turquoise Headlight Beams */}
              <line x1="26" y1="-8" x2="30" y2="-8" stroke="#40E0D0" strokeWidth="2" filter="url(#turquoiseGlow)" />
              <line x1="26" y1="8" x2="30" y2="8" stroke="#40E0D0" strokeWidth="2" filter="url(#turquoiseGlow)" />

              {/* Subtle Turquoise Taillight Light Strip */}
              <line x1="-28" y1="-9" x2="-28" y2="9" stroke="#40E0D0" strokeWidth="1.5" />

              {/* EVION Monogram Badge */}
              <circle cx="0" cy="0" r="2.5" fill="#40E0D0" />
            </g>
          </svg>
        </div>

        {/* Bottom Interactive HUD: Live Telemetry & Architectural Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pt-4 border-t border-[#FFFFFF]/10">
          {/* Active Landmark Data */}
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#40E0D0]/10 border border-[#40E0D0]/30">
                {currentWaypoint.icon}
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#40E0D0] uppercase font-bold">
                  {currentWaypoint.label}
                </span>
                <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[#FFFFFF] uppercase">
                  {currentWaypoint.title}
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#FFFFFF]/70 max-w-lg font-light leading-relaxed">
              {currentWaypoint.description}
            </p>
          </div>

          {/* Real-Time Telemetry Counters */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-3">
            {currentWaypoint.specs.map((spec, sIdx) => (
              <div
                key={sIdx}
                className="p-3 rounded-xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 backdrop-blur-md"
              >
                <div className="text-[9px] font-mono text-[#FFFFFF]/50 uppercase tracking-widest">
                  {spec.label}
                </div>
                <div className="text-xs sm:text-sm font-mono font-bold text-[#40E0D0] mt-1 tracking-wider">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Scene Milestone: DRIVE FURTHER. LIVE ELECTRIC. */}
        {scrollProgress > 0.92 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-x-6 top-1/2 -translate-y-1/2 max-w-xl mx-auto p-8 rounded-3xl bg-[#000000]/95 border-2 border-[#40E0D0] shadow-[0_0_50px_rgba(64,224,208,0.4)] text-center space-y-3 z-30"
          >
            <div className="text-xs font-mono tracking-[0.3em] text-[#40E0D0] uppercase font-bold">
              JOURNEY MILESTONE REACHED
            </div>
            <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-[#FFFFFF] uppercase">
              DRIVE FURTHER. <br />
              <span className="text-[#40E0D0] font-semibold">LIVE ELECTRIC.</span>
            </h4>
            <p className="text-xs font-mono text-[#FFFFFF]/70">
              Continue scrolling to explore our charging infrastructure & enterprise solutions.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
