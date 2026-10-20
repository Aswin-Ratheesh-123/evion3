'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const EVIONLoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  const startTimeRef = useRef<number | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const pageReadyRef = useRef<boolean>(false);

  // Smooth cinematic duration (~2.4s)
  const MIN_ANIMATION_DURATION = 2300;
  const MAX_SAFETY_TIMEOUT = 3200;

  useEffect(() => {
    // Clear any previous stale session blocks
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.removeItem('evion_intro_played');
        sessionStorage.removeItem('evion_loaded');
      } catch (e) {
        // ignore storage errors
      }
    }

    // Check page readiness
    const markPageReady = () => {
      pageReadyRef.current = true;
    };

    if (typeof document !== 'undefined') {
      if (document.readyState === 'complete') {
        pageReadyRef.current = true;
      } else {
        window.addEventListener('load', markPageReady);
        document.addEventListener('DOMContentLoaded', markPageReady);
      }
    }

    // High performance smooth count-up loop
    const step = (now: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = now;
      }

      const elapsed = now - startTimeRef.current;
      const progressFraction = Math.min(elapsed / MIN_ANIMATION_DURATION, 1);

      // Smooth custom automotive easing
      const eased = 1 - Math.pow(1 - progressFraction, 2.2);
      let targetNumber = Math.floor(eased * 100);

      // Hold at 90% briefly if page is taking long, unless safety timeout reached
      if (!pageReadyRef.current && elapsed < MAX_SAFETY_TIMEOUT && targetNumber > 90) {
        targetNumber = 90;
      }

      if (elapsed >= MAX_SAFETY_TIMEOUT) {
        targetNumber = 100;
      }

      setProgress(Math.min(targetNumber, 100));

      if (targetNumber < 100) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        // Reached 100%
        setProgress(100);
        setIsFadingOut(true);

        // Keep 100% visible briefly, then unmount overlay
        const exitTimer = setTimeout(() => {
          setIsDone(true);
        }, 450);

        return () => clearTimeout(exitTimer);
      }
    };

    animFrameRef.current = requestAnimationFrame(step);

    // Escape key allows instant skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFadingOut(true);
        setTimeout(() => setIsDone(true), 200);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      window.removeEventListener('load', markPageReady);
      document.removeEventListener('DOMContentLoaded', markPageReady);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (isDone) {
    return null;
  }

  // Letters of E V I O N
  const letters = ['E', 'V', 'I', 'O', 'N'];

  // Staggered letter fade-in from left to right as progress advances
  // 0% -> opacity 0
  // 10% - 40% -> E fades in
  // 20% - 50% -> V fades in
  // 30% - 60% -> I fades in
  // 40% - 70% -> O fades in
  // 50% - 80% -> N fades in
  // 80% - 100% -> all fully illuminated
  const getLetterOpacity = (index: number) => {
    const start = index * 10;
    if (progress < start) return 0;
    const fraction = (progress - start) / 25;
    return Math.min(Math.max(fraction, 0), 1);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="evion-cinematic-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: isFadingOut ? 0 : 1 }}
          exit={{
            opacity: 0,
            y: -12,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999999] bg-[#000000] text-[#FFFFFF] flex flex-col justify-between p-8 sm:p-14 lg:p-16 select-none overflow-hidden"
          role="status"
          aria-live="polite"
          aria-label="Loading EVION experience"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(64,224,208,0.06)_0%,transparent_60%)] pointer-events-none" />

          {/* TOP BAR: Top-Left Minimal Circular Indicator & Skip Button */}
          <div className="relative z-10 flex items-center justify-between w-full">
            {/* Top-Left Circular Indicator */}
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border border-[#40E0D0]/40 flex items-center justify-center">
           
              </div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#FFFFFF]/35 uppercase hidden sm:inline-block">
                SYS // ACTIVE
              </span>
            </div>

            {/* Skip Button */}
            <button
              onClick={() => {
                setIsFadingOut(true);
                setTimeout(() => setIsDone(true), 200);
              }}
              className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#FFFFFF]/35 hover:text-[#40E0D0] transition-colors cursor-pointer"
            >
              SKIP [ESC]
            </button>
          </div>

          {/* EXACT CENTER: E V I O N Brand Name Reveal */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto w-full">
            {/* Wordmark Container with generous letter spacing and optical center alignment */}
            <div className="flex items-center justify-center tracking-[0.45em] sm:tracking-[0.65em] md:tracking-[0.8em] font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#FFFFFF] select-none pl-[0.45em] sm:pl-[0.65em] md:pl-[0.8em]">
              {letters.map((char, index) => {
                const charOpacity = getLetterOpacity(index);
                const isV = char === 'V';

                return (
                  <span
                    key={index}
                    className="relative inline-block transition-opacity duration-300"
                    style={{ opacity: charOpacity }}
                  >
                    {char}
                    {/* Subtle turquoise lightning accent on the 'V' */}
                    {isV && (
                      <span
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#40E0D0] blur-[1px] transition-opacity duration-300"
                        style={{ opacity: charOpacity > 0.4 ? 0.9 : 0 }}
                      />
                    )}
                  </span>
                );
              })}
            </div>

            {/* Subtle Horizon Line expanding as progress advances */}
            <div
              className="w-40 sm:w-64 h-[1px] bg-gradient-to-r from-transparent via-[#40E0D0] to-transparent mt-6 sm:mt-8 transition-all duration-300"
              style={{
                opacity: progress > 20 ? (progress - 20) / 100 : 0,
                transform: `scaleX(${progress > 20 ? (progress - 20) / 80 : 0})`,
              }}
            />
          </div>

          {/* BOTTOM ROW: Bottom-Left Brand Label & Bottom-Right Percentage Counter */}
          <div className="relative z-10 flex items-end justify-between w-full border-t border-[#FFFFFF]/10 pt-6 sm:pt-8">
            {/* Bottom-Left Brand Label */}
            <div
              className="flex flex-col gap-1 transition-opacity duration-500"
              style={{ opacity: progress > 15 ? 0.55 : 0 }}
            >
              <div className="text-[10px] sm:text-xs font-mono tracking-[0.28em] text-[#FFFFFF] uppercase font-medium">
                ELECTRIC MOBILITY — EVION
              </div>
              <div className="text-[8px] sm:text-[9px] font-mono tracking-[0.2em] text-[#FFFFFF]/35 uppercase hidden sm:block">
                NEXT-GEN ARCHITECTURAL SUPERCHARGING
              </div>
            </div>

            {/* Bottom-Right Large Percentage Counter */}
           <div className="flex items-baseline font-mono select-none">
  <span className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[#FFFFFF] tabular-nums leading-none">
    {progress}
  </span>
  <span className="text-sm sm:text-base md:text-lg font-light text-[#40E0D0] ml-1 leading-none">
    %
  </span>
</div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
