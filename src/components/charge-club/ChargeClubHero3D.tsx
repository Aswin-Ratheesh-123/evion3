'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Shield, Award } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ChargeClubHero3D: React.FC = () => {
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const heroViewportRef = useRef<HTMLDivElement>(null);

  // DOM animation refs
  const brandLockupRef = useRef<HTMLDivElement>(null);
  const leftWordRef = useRef<HTMLSpanElement>(null);
  const rightWordRef = useRef<HTMLSpanElement>(null);
  const brandSublineRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // State 3 refs
  const headlineSectionRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLDivElement>(null);
  const headlineLine2Ref = useRef<HTMLDivElement>(null);
  const headlineLine3Ref = useRef<HTMLDivElement>(null);
  const headlineParagraphRef = useRef<HTMLParagraphElement>(null);
  const headlineBadgesRef = useRef<HTMLDivElement>(null);

  // Technical Specifications text layout refs (clean minimalist editorial text design)
  const specContainerRef = useRef<HTMLDivElement>(null);
  const specHeaderRef = useRef<HTMLDivElement>(null);
  const specDividerRef = useRef<HTMLDivElement>(null);
  const specRow1Ref = useRef<HTMLDivElement>(null);
  const specRow2Ref = useRef<HTMLDivElement>(null);
  const specRow3Ref = useRef<HTMLDivElement>(null);
  const specFooterRef = useRef<HTMLDivElement>(null);

  // Progress telemetry for the HUD
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  // Top telemetry HUD visibility state:
  // - Visible during Initial Hero (scrollProgress <= 12)
  // - Visible during Franchise Architecture section (scrollProgress >= 58 && scrollProgress <= 82)
  // - Smoothly hides on scroll up or when leaving the Franchise Architecture section (< 58)
  // - Hidden during transition stages (13% - 57%) to never overlap the large EXPAND CHARGING heading
  // - Hidden beyond hero (> 82) to avoid overlapping subsequent sections
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    setHasMounted(true);
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const diff = currentScrollY - lastScrollYRef.current;
          const threshold = 6;

          if (currentScrollY <= 60) {
            // Initial state at top of page
            setIsScrollingUp(false);
          } else if (diff < -threshold) {
            // Scrolling upward past threshold
            setIsScrollingUp(true);
          } else if (diff > threshold) {
            // Scrolling downward past threshold
            setIsScrollingUp(false);
          }

          lastScrollYRef.current = currentScrollY;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Section-based visibility:
  // Active only during Initial Hero Entry (<= 12%) OR Franchise Architecture (58% - 82%)
  const isSectionActive =
    scrollProgress <= 12 || (scrollProgress >= 58 && scrollProgress <= 82);

  // Bar is visible only when the section is active AND user is not scrolling upward away
  const isTelemetryBarShown = isSectionActive && !isScrollingUp;

  useEffect(() => {
    if (!heroViewportRef.current || !heroWrapperRef.current) return;

    // --- GSAP SCROLLTRIGGER MULTI-STAGE MASTER TIMELINE ---
    const isNarrow = window.innerWidth < 1024;
    const isMobile = window.innerWidth < 640;

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroWrapperRef.current,
          start: 'top top',
          end: '+=350%',
          pin: heroViewportRef.current,
          pinSpacing: true,
          invalidateOnRefresh: true,
          scrub: 1.2,
          anticipatePin: 1,
          onUpdate: (self) => {
            setScrollProgress(Math.round(self.progress * 100));
          },
        },
      });

      // Ensure State 3 elements are completely hidden during State 1 & 2
      masterTl.set(
        [
          headlineLine1Ref.current,
          headlineLine2Ref.current,
          headlineLine3Ref.current,
          headlineParagraphRef.current,
          headlineBadgesRef.current,
          specContainerRef.current,
        ],
        { opacity: 0 }
      );

      // Hold state 1 slightly (0 -> 12)
      masterTl.to(
        scrollIndicatorRef.current,
        {
          opacity: 0,
          y: 15,
          duration: 10,
          ease: 'power2.in',
        },
        5
      );

      // State 2: 15% - 45% (The Ejection / Split)
      // Center text splits horizontally and fades back smoothly
      masterTl.to(
        leftWordRef.current,
        {
          x: isMobile ? -50 : isNarrow ? -140 : -320,
          opacity: 0,
          scale: 0.88,
          filter: 'blur(8px)',
          duration: 25,
          ease: 'power2.inOut',
        },
        15
      );

      masterTl.to(
        rightWordRef.current,
        {
          x: isMobile ? 50 : isNarrow ? 140 : 320,
          opacity: 0,
          scale: 0.88,
          filter: 'blur(8px)',
          duration: 25,
          ease: 'power2.inOut',
        },
        15
      );

      masterTl.to(
        brandSublineRef.current,
        {
          opacity: 0,
          y: -20,
          filter: 'blur(4px)',
          duration: 15,
          ease: 'power2.inOut',
        },
        15
      );

      // State 3: 45% - 75% (Hero Message Reveal)
      // Bold stacked headline fades and slides into view on the left
      masterTl.set(headlineSectionRef.current, { opacity: 1, y: 0, filter: 'blur(0px)' }, 45);

      masterTl.fromTo(
        headlineLine1Ref.current,
        { opacity: 0, x: isMobile ? -30 : -70, filter: 'blur(8px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 14, ease: 'power2.out' },
        45
      );

      masterTl.fromTo(
        headlineLine2Ref.current,
        { opacity: 0, x: isMobile ? -30 : -70, filter: 'blur(8px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 14, ease: 'power2.out' },
        49
      );

      masterTl.fromTo(
        headlineLine3Ref.current,
        { opacity: 0, x: isMobile ? -30 : -70, filter: 'blur(8px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 14, ease: 'power2.out' },
        53
      );

      masterTl.fromTo(
        headlineBadgesRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 14, ease: 'power2.out' },
        58
      );

      masterTl.fromTo(
        headlineParagraphRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 12, ease: 'power2.out' },
        56
      );

      // Fade in spec container
      masterTl.to(
        specContainerRef.current,
        { opacity: 1, duration: 10, ease: 'power2.out' },
        47
      );

      // State 3: Technical Specifications text entrance
      // Animate text elements individually with subtle fade-in, small upward movement, and slight stagger
      masterTl.fromTo(
        specHeaderRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 12, ease: 'power2.out' },
        47
      );

      masterTl.fromTo(
        specDividerRef.current,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 12, ease: 'power2.out' },
        49
      );

      masterTl.fromTo(
        specRow1Ref.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 10, ease: 'power2.out' },
        51
      );

      masterTl.fromTo(
        specRow2Ref.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 10, ease: 'power2.out' },
        54
      );

      masterTl.fromTo(
        specRow3Ref.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 10, ease: 'power2.out' },
        57
      );

      masterTl.fromTo(
        specFooterRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 12, ease: 'power2.out' },
        60
      );

      // State 4: 75% - 100% (Transition to Content)
      // Stacked headline & golden lattice fade out and glide upward
      masterTl.to(
        headlineSectionRef.current,
        {
          opacity: 0,
          y: -60,
          filter: 'blur(8px)',
          duration: 20,
          ease: 'power2.in',
        },
        78
      );

      masterTl.to(
        specContainerRef.current,
        {
          opacity: 0,
          y: -30,
          duration: 18,
          ease: 'power2.in',
        },
        80
      );
    }, heroWrapperRef);

    // Refresh ScrollTrigger once web fonts are fully ready to prevent font-swap layout shifts
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    // --- CLEANUP ---
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={heroWrapperRef}
      className="relative w-full bg-[#0D0D11] text-[#FFFFFF] overflow-clip"
      style={{ minHeight: '350vh' }}
    >
      {/* Pinned Hero Viewport (100vh pinned stage) */}
      <div
        ref={heroViewportRef}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#0D0D11] flex flex-col justify-between"
      >
        {/* Subtle Turquoise Radial Ambient Glows in Corners */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 10% 15%, rgba(64, 224, 208, 0.10) 0%, transparent 45%),
              radial-gradient(circle at 90% 85%, rgba(64, 224, 208, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(13, 13, 17, 0.7) 0%, #0D0D11 100%)
            `,
          }}
        />

        {/* Subtle Luxury Film Grain & Scanline Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(64, 224, 208, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(64, 224, 208, 0.04) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Top Header Bar / Status HUD */}
        <div
          style={{
            transition: hasMounted
              ? 'opacity 300ms cubic-bezier(0.16, 1, 0.3, 1), transform 300ms cubic-bezier(0.16, 1, 0.3, 1), visibility 300ms cubic-bezier(0.16, 1, 0.3, 1)'
              : 'none',
          }}
          className={`relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 pt-16 sm:pt-22 md:pt-28 flex items-center justify-between text-[10px] sm:text-xs font-mono tracking-normal sm:tracking-widest uppercase will-change-transform ${
            isTelemetryBarShown
              ? 'opacity-100 translate-y-0 pointer-events-auto visible'
              : 'opacity-0 -translate-y-[110%] pointer-events-none invisible'
          }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#40E0D0] animate-pulse shadow-[0_0_10px_#40E0D0] shrink-0" />
            <span className="text-[#40E0D0] font-semibold text-[10px] sm:text-xs tracking-wider whitespace-nowrap">EVION FRANCHISE</span>
            <span className="text-[#FFFFFF]/30 hidden md:inline">|</span>
            <span className="text-[#FFFFFF]/60 hidden md:inline">COMMERCIAL EV PARTNERSHIP</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 text-[#FFFFFF]/50">
            <span className="hidden md:inline font-mono text-[10px] text-[#40E0D0]/80 border border-[#40E0D0]/30 px-2 py-0.5 rounded-full bg-[#40E0D0]/5">
              SCROLL TELEMETRY: {scrollProgress}%
            </span>
            <div className="flex items-center gap-1.5 text-[#40E0D0] shrink-0">
              <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#40E0D0] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider whitespace-nowrap">FRANCHISE ARCHITECTURE</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            STATE 1 & 2: CENTER BRAND LOCKUP (EVION FRANCHISE METALLIC SILVER CHROME)
            ========================================================================= */}
        <div
          ref={brandLockupRef}
          className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 pointer-events-none select-none my-auto"
        >
          <div className="relative flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 xs:gap-3 sm:gap-6 md:gap-8 max-w-full text-center">
            {/* Split Word Left: "EVION" */}
            <span
              ref={leftWordRef}
              className="inline-block text-[clamp(1.65rem,7.5vw,5.5rem)] md:text-8xl lg:text-9xl font-black tracking-tight uppercase leading-[1.05]"
              style={{
                background:
                  'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 35%, #94A3B8 70%, #CBD5E1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.85)) drop-shadow(0 0 40px rgba(255,255,255,0.15))',
              }}
            >
              EVION
            </span>

            {/* Split Word Right: "FRANCHISE" */}
            <span
              ref={rightWordRef}
              className="inline-block text-[clamp(1.65rem,7.5vw,5.5rem)] md:text-8xl lg:text-9xl font-black tracking-tight uppercase leading-[1.05]"
              style={{
                background:
                  'linear-gradient(180deg, #F8FAFC 0%, #D4D4D8 35%, #A1A1AA 70%, #E4E4E7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.85)) drop-shadow(0 0 40px rgba(255,255,255,0.15))',
              }}
            >
              FRANCHISE
            </span>
          </div>

          {/* Luxury Metallic Subline */}
          <div
            ref={brandSublineRef}
            className="mt-3 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-mono tracking-[0.12em] sm:tracking-[0.25em] uppercase text-[#40E0D0]/90 px-2 max-w-full"
          >
            <span className="flex items-center gap-2 text-center">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#40E0D0] shrink-0" />
              <span className="text-[11px] sm:text-xs md:text-sm font-medium">POWER YOUR FUTURE WITH EVION.</span>
            </span>
            <span className="hidden md:inline text-[#FFFFFF]/30 mx-2">•</span>
            <span className="hidden md:inline text-[#FFFFFF]/70 tracking-widest text-[11px]">
              SCROLL TO EXPLORE FRANCHISE OPPORTUNITIES
            </span>
          </div>
        </div>

        {/* =========================================================================
            STATE 3: HERO MESSAGE REVEAL (LEFT STACKED HEADLINE)
            ========================================================================= */}
        <div
          ref={headlineSectionRef}
          className="absolute inset-0 z-20 pointer-events-none flex items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-24 sm:pt-32 md:pt-36 pb-8 sm:pb-12"
        >
          <div className="w-full lg:w-1/2 flex flex-col justify-center pt-8 sm:pt-12 md:pt-14">
            {/* Stacked Bold Headline */}
            <div className="space-y-1 sm:space-y-2">
              <div
                ref={headlineLine1Ref}
                className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#FFFFFF] uppercase leading-none drop-shadow-xl opacity-0"
                style={{ opacity: 0 }}
              >
                EXPAND CHARGING.
              </div>
              <div
                ref={headlineLine2Ref}
                className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-none opacity-0"
                style={{
                  opacity: 0,
                  background:
                    'linear-gradient(135deg, #FFFFFF 0%, #40E0D0 50%, #20B2AA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 4px 20px rgba(64, 224, 208, 0.3))',
                }}
              >
                BUILD REVENUE.
              </div>
              <div
                ref={headlineLine3Ref}
                className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#FFFFFF] uppercase leading-none drop-shadow-xl opacity-0"
                style={{ opacity: 0 }}
              >
                GROW WITH EVION.
              </div>
            </div>

            {/* Value Proposition Micro Text & Badges */}
            <p
              ref={headlineParagraphRef}
              className="mt-4 sm:mt-6 text-xs sm:text-base text-[#FFFFFF]/70 max-w-md font-sans leading-relaxed opacity-0"
              style={{ opacity: 0 }}
            >
              Partner with EVION to bring intelligent electric vehicle charging solutions to more locations. Join our growing network and explore franchise opportunities in the expanding electric mobility industry.
            </p>

            <div
              ref={headlineBadgesRef}
              className="mt-5 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-4 pointer-events-auto opacity-0"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#FFFFFF]/5 backdrop-blur-md border border-[#40E0D0]/20 text-[11px] sm:text-xs font-mono text-[#40E0D0]">
                <Shield className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#40E0D0]" />
                <span>350 KW TURNKEY DEPLOYMENT</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#FFFFFF]/5 backdrop-blur-md border border-[#FFFFFF]/10 text-[11px] sm:text-xs font-mono text-[#FFFFFF]/80">
                <Award className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#40E0D0]" />
                <span>COMMERCIAL REVENUE SHARE</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            STATE 3: TECHNICAL SPECIFICATIONS (CLEAN MINIMALIST EDITORIAL TEXT LAYOUT)
            ========================================================================= */}
        <div
          ref={specContainerRef}
          className="absolute bottom-6 right-4 sm:bottom-10 sm:right-8 lg:bottom-12 lg:right-16 z-20 pointer-events-none select-none w-[270px] sm:w-84 lg:w-96 text-left opacity-0"
          style={{ opacity: 0 }}
        >
          {/* Top Row: AURUM ARCHITECTURE (left) + REV. 2026 (right) */}
          <div
            ref={specHeaderRef}
            className="flex items-center justify-between pb-2"
          >
            <div className="flex items-center gap-2.5">
              {/* Subtle turquoise indicator beside the heading */}
              <span className="w-1.5 h-1.5 rounded-full bg-[#40E0D0] shadow-[0_0_8px_#40E0D0] inline-block" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-[#FFFFFF] font-medium uppercase">
                AURUM ARCHITECTURE
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#94A3B8] uppercase">
              REV. 2026
            </span>
          </div>

          {/* Thin turquoise line separating specifications from heading with subtle animated accent */}
          <div
            ref={specDividerRef}
            className="origin-left h-[1px] w-full bg-gradient-to-r from-[#40E0D0] via-[#40E0D0]/40 to-transparent relative overflow-hidden mb-4"
          >
            <span className="absolute inset-y-0 left-0 w-1/4 bg-[#40E0D0]/80" />
          </div>

          {/* Main Specifications: Labels left, Values right, consistent vertical spacing */}
          <div className="space-y-3 font-mono">
            {/* Row 1: THROUGHPUT RATIO -> 800V DC / 480KW MAX */}
            <div
              ref={specRow1Ref}
              className="flex justify-between items-baseline gap-4 text-[11px] sm:text-xs"
            >
              <span className="text-[#94A3B8] tracking-wider uppercase font-normal">
                THROUGHPUT RATIO
              </span>
              <span className="text-[#40E0D0] tracking-wider uppercase font-semibold text-right">
                800V DC / 480KW MAX
              </span>
            </div>

            {/* Row 2: RESERVED ALLOCATION -> BAY 04 / BAY 08 */}
            <div
              ref={specRow2Ref}
              className="flex justify-between items-baseline gap-4 text-[11px] sm:text-xs"
            >
              <span className="text-[#94A3B8] tracking-wider uppercase font-normal">
                RESERVED ALLOCATION
              </span>
              <span className="text-[#FFFFFF] tracking-wider uppercase font-medium text-right">
                BAY 04 / BAY 08
              </span>
            </div>

            {/* Row 3: CELL TEMPERATURE -> 24.8°C / ISOLATED */}
            <div
              ref={specRow3Ref}
              className="flex justify-between items-baseline gap-4 text-[11px] sm:text-xs"
            >
              <span className="text-[#94A3B8] tracking-wider uppercase font-normal">
                CELL TEMPERATURE
              </span>
              <span className="text-[#40E0D0] tracking-wider uppercase font-semibold text-right">
                24.8°C / ISOLATED
              </span>
            </div>
          </div>

          {/* Thin separator line before bottom row */}
          <div className="h-[1px] w-full bg-[#FFFFFF]/10 my-3.5" />

          {/* Bottom Row: SECURITY HASH (left) + AUTHENTICATED with turquoise indicator (right) */}
          <div
            ref={specFooterRef}
            className="flex items-center justify-between text-[10px] font-mono tracking-wider"
          >
            <span className="text-[#64748B] uppercase">
              SECURITY HASH: 0X9B...7F
            </span>
            <div className="flex items-center gap-1.5 text-[#40E0D0] font-medium tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#40E0D0] inline-block shadow-[0_0_6px_#40E0D0]" />
              <span>AUTHENTICATED</span>
            </div>
          </div>
        </div>

        {/* Required Order 5 & 6: Scroll instruction & Mouse Indicator positioned close together */}
        <div
          ref={scrollIndicatorRef}
          className="relative z-20 pb-4 sm:pb-8 text-center flex flex-col items-center justify-center pointer-events-none px-4"
        >
          <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-[#FFFFFF]/70">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.12em] sm:tracking-[0.25em] uppercase text-[#40E0D0] max-w-xs text-center leading-tight">
              SCROLL TO EXPLORE FRANCHISE OPPORTUNITIES
            </span>
            <div className="w-6 h-9 sm:w-7 sm:h-11 rounded-full border border-[#40E0D0]/40 flex items-start justify-center p-1 sm:p-1.5 shadow-[0_0_15px_rgba(64,224,208,0.2)]">
              <div className="w-1.5 h-2 sm:h-2.5 rounded-full bg-[#40E0D0] animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
