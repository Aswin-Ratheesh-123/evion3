'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks } from '@/data/navigation';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine transparency threshold
      setIsScrolled(currentScrollY > 60);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 150) {
        const diff = currentScrollY - lastScrollYRef.current;
        if (diff > 10) {
          // Scrolling down
          setIsVisible(false);
        } else if (diff < -10) {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Keyboard accessibility: Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[#000000]/85 backdrop-blur-md border-b border-[#40E0D0]/20 py-2.5 sm:py-3 shadow-2xl'
            : 'bg-transparent py-3 sm:py-5'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
          <div className="flex items-center justify-between w-full">
            {/* Left: EVION Brand Logo */}
            <div className="flex items-center justify-start shrink-0">
              <Link
                href="/"
                className="flex items-center transition-opacity hover:opacity-90 duration-300 focus:outline-none focus:ring-1 focus:ring-[#40E0D0] rounded-lg"
                aria-label="EVION Home"
              >
                <div className="relative h-7 w-24 xs:h-8 xs:w-28 sm:h-8.5 sm:w-32 xl:h-9 xl:w-36 flex items-center">
                  <Image
                    src="/logo1.jpeg"
                    alt="EVION"
                    width={600}
                    height={150}
                    priority
                    className="h-full w-auto object-contain brightness-110"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links (Visible only on desktop lg+) */}
            <nav
              className="hidden lg:flex items-center gap-3.5 lg:gap-4 xl:gap-6 2xl:gap-8 font-mono uppercase font-semibold text-[10px] lg:text-[10.5px] xl:text-[11px] tracking-[0.10em] lg:tracking-[0.12em] xl:tracking-[0.16em] 2xl:tracking-[0.2em] px-2 min-w-0"
              aria-label="Main Navigation"
            >
              {navLinks.map((item, idx) => {
                const isSpecial = item.label === 'FRANCHISE' || item.label === 'CHARGE CLUB';
                const isActive = Boolean(
                  item.href &&
                    (pathname === item.href ||
                      (item.href !== '/' && pathname.startsWith(item.href)))
                );

                return (
                  <Link
                    key={idx}
                    href={item.href || '#'}
                    className={`relative py-1 px-1 xl:px-1.5 group flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors duration-200 ${
                      isSpecial
                        ? 'text-[#40E0D0] hover:text-[#FFFFFF]'
                        : isActive
                        ? 'text-[#40E0D0]'
                        : 'text-[#FFFFFF]/80 hover:text-[#40E0D0]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {'badge' in item && item.badge && (
                      <span className="px-1.5 py-0.5 rounded-full text-[8.5px] xl:text-[9px] font-mono tracking-wider bg-[#40E0D0]/20 text-[#40E0D0] border border-[#40E0D0]/40 shadow-[0_0_8px_rgba(64,224,208,0.25)] shrink-0">
                        {item.badge}
                      </span>
                    )}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-300 ${
                        isActive
                          ? 'w-full bg-[#40E0D0]'
                          : 'w-0 group-hover:w-full bg-[#40E0D0]'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Actions: CONNECT & MENU trigger (Hidden on desktop lg+, visible on mobile/tablet) */}
            <div className="flex lg:hidden items-center justify-end gap-2.5 sm:gap-3 shrink-0">
              <Link
                href="/#contact"
                className="hidden sm:inline-flex lg:hidden items-center justify-center gap-1.5 px-3.5 sm:px-4 h-8.5 sm:h-9 rounded-full border border-[#40E0D0]/40 text-[#40E0D0] text-[11px] sm:text-xs font-mono font-medium tracking-wider hover:bg-[#40E0D0] hover:text-[#000000] hover:shadow-[0_0_20px_rgba(64,224,208,0.35)] transition-all duration-300 whitespace-nowrap"
              >
                <span>CONNECT</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </Link>

              {/* Mobile Menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 h-8.5 sm:h-9 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/20 text-[#FFFFFF] border border-[#FFFFFF]/20 transition-all focus:outline-none focus:ring-1 focus:ring-[#40E0D0] cursor-pointer whitespace-nowrap shrink-0"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                <span className="text-[10px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest uppercase">
                  {mobileMenuOpen ? 'CLOSE' : 'MENU'}
                </span>
                {mobileMenuOpen ? (
                  <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#40E0D0] shrink-0" />
                ) : (
                  <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#40E0D0] shrink-0" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Minimal Editorial Mobile/Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#000000]/95 backdrop-blur-xl flex flex-col justify-between pt-28 pb-12 px-8 sm:px-16"
          >
            <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center">
              <div className="text-xs font-mono tracking-[0.3em] text-[#40E0D0] uppercase mb-8">
                NAVIGATION / EVION
              </div>

              <div className="space-y-4 sm:space-y-6">
                {navLinks.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * idx, duration: 0.4 }}
                  >
                    {(() => {
                      const isSpecial = item.label === 'FRANCHISE' || item.label === 'CHARGE CLUB';
                      return (
                        <Link
                          href={item.href || '#'}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`group flex items-baseline justify-between text-2xl sm:text-4xl md:text-5xl font-light tracking-tight py-2 border-b border-[#FFFFFF]/10 transition-colors ${
                            isSpecial
                              ? 'text-[#40E0D0] hover:text-[#FFFFFF] hover:border-[#40E0D0]/50'
                              : 'text-[#FFFFFF] hover:text-[#40E0D0] hover:border-[#40E0D0]/40'
                          }`}
                        >
                          <span className="flex items-center gap-4">
                            <span
                              className="text-xs font-mono text-[#40E0D0]/60"
                            >
                              0{idx + 1}
                            </span>
                            <span>{item.label}</span>
                            {'badge' in item && item.badge && (
                              <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-[#40E0D0]/20 text-[#40E0D0] border border-[#40E0D0]/40">
                                {item.badge}
                              </span>
                            )}
                          </span>
                          <ArrowUpRight
                            className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#40E0D0]"
                          />
                        </Link>
                      );
                    })()}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="max-w-5xl mx-auto w-full pt-8 border-t border-[#FFFFFF]/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#FFFFFF]/50 gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[#FFFFFF]">EVION HIGH-POWER CHARGING INFRASTRUCTURE</span>
              </div>
              <p>© {new Date().getFullYear()} EVION TECHNOLOGIES. ALL RIGHTS RESERVED.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
