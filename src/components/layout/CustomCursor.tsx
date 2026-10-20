'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect touch device or reduced motion
    if (typeof window === 'undefined') return;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReduced) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else {
        const clickable = target.closest('button, a, input, select, [role="button"]');
        if (clickable) {
          setIsHovered(true);
          setCursorText('');
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovered ? (cursorText ? 2.2 : 1.4) : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 450,
        damping: 28,
        mass: 0.5,
      }}
    >
      <div
        className={`rounded-full flex items-center justify-center transition-colors duration-200 ${
          cursorText
            ? 'w-12 h-12 bg-[#40E0D0] text-[#000000] shadow-[0_0_20px_rgba(64,224,208,0.6)] font-bold text-[8px] tracking-wider uppercase'
            : isHovered
            ? 'w-8 h-8 bg-[#40E0D0]/20 border border-[#40E0D0]'
            : 'w-4 h-4 bg-[#40E0D0] opacity-80 shadow-[0_0_10px_rgba(64,224,208,0.6)]'
        }`}
      >
        {cursorText && <span className="scale-75 leading-none">{cursorText}</span>}
      </div>
    </motion.div>
  );
};
