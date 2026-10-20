'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  MapPin,
  Route,
  Zap,
  Activity,
  Smartphone,
  Navigation,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { appShowcaseConfig, AppFeatureItem } from '@/config/appShowcase';
import { PhoneMockupFrame } from '@/components/home/PhoneMockupFrame';
import { PhoneHomeScreen } from '@/components/home/PhoneHomeScreen';
import { PhoneMapScreen } from '@/components/home/PhoneMapScreen';
import { AppDownloadButtons } from '@/components/home/AppDownloadButtons';

import type { Variants } from 'framer-motion';

// Map icon string to Lucide component
const featureIconMap: Record<
  AppFeatureItem['iconName'],
  React.ComponentType<{ className?: string }>
> = {
  MapPin,
  Route,
  Zap,
  Activity,
  Smartphone,
  Navigation,
};

export const EVIONAppShowcase: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { eyebrow, heading, supportingText, features, sectionId } = appShowcaseConfig;

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id={sectionId}
      className="relative w-full bg-[#FFFFFF] text-[#000000] pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 overflow-hidden border-b border-[#000000]/10"
      aria-label="EVION Mobile Application Showcase"
    >
      {/* Decorative Outer Margin Electrical Line */}
      <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[1px] bg-gradient-to-b from-[#40E0D0]/30 via-[#40E0D0] to-transparent pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-6 sm:right-12 w-[1px] bg-gradient-to-b from-transparent via-[#40E0D0]/30 to-transparent pointer-events-none hidden md:block" />

      {/* Subtle Ambient Turquoise Radial Backlight */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#40E0D0]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* ========================================================= */}
        {/* SECTION HEADER: Centered Large Editorial Typography        */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-16 sm:mb-24 space-y-6"
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#000000]/5 border border-[#000000]/10">
            <span className="w-2 h-2 rounded-full bg-[#40E0D0]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#000000] uppercase">
              {eyebrow}
            </span>
          </div>

          {/* Main Large Centered Heading */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-light tracking-tight text-[#000000] leading-[1.0] uppercase">
            {heading.brand} <br />
            <span className="font-semibold text-[#40E0D0] relative inline-block">
              {heading.highlight}
              {/* Turquoise Underline Highlight Accent */}
              <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-[3px] sm:h-[4px] bg-[#40E0D0]/40 -z-10 rounded-full" />
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-[#000000]/80 font-normal leading-relaxed max-w-2xl mx-auto">
            {supportingText}
          </p>

          <div className="w-16 h-[2px] bg-[#40E0D0] mx-auto pt-0.5" />
        </motion.div>

        {/* ========================================================= */}
        {/* MAIN COMPOSITION: Left Mockups, Right Features & Buttons  */}
        {/* On Mobile: Mockups first, then Features, then Buttons     */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ------------------------------------------------------- */}
          {/* LEFT SIDE: Two Overlapping Smartphone Mockups           */}
          {/* ------------------------------------------------------- */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full max-w-[360px] sm:max-w-[480px] md:max-w-[520px] aspect-[1/1.1] sm:aspect-[1/1.15] flex items-center justify-center">
              
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute inset-0 bg-radial from-[#40E0D0]/20 via-[#40E0D0]/5 to-transparent blur-3xl pointer-events-none" />

              {/* REAR PHONE (Phone 2: Discovery & Map Interface) */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: shouldReduceMotion ? 0 : 5.5,
                }}
                viewport={{ once: true }}
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [0, -8, 0],
                        transition: {
                          duration: 7,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 1,
                        },
                      }
                }
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-10 w-[200px] sm:w-[260px] md:w-[290px] translate-x-12 sm:translate-x-16 md:translate-x-20 -translate-y-6 sm:-translate-y-8"
              >
                <PhoneMockupFrame glow={false} className="cursor-pointer hover:z-30 transition-all duration-300">
                  <PhoneMapScreen />
                </PhoneMockupFrame>
              </motion.div>

              {/* FRONT PHONE (Phone 1: Splash / Active Charging Session) */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: shouldReduceMotion ? 0 : -2.5,
                }}
                viewport={{ once: true }}
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [0, 8, 0],
                        transition: {
                          duration: 6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        },
                      }
                }
                transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20 w-[210px] sm:w-[275px] md:w-[305px] -translate-x-8 sm:-translate-x-12 md:-translate-x-14 translate-y-4 sm:translate-y-6 shadow-2xl"
              >
                <PhoneMockupFrame glow={true} className="cursor-pointer hover:scale-[1.01] transition-transform duration-300">
                  <PhoneHomeScreen />
                </PhoneMockupFrame>
              </motion.div>

            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* RIGHT SIDE: Key Features (6 items) & Download Buttons   */}
          {/* ------------------------------------------------------- */}
          <div className="lg:col-span-6 space-y-10 lg:pl-4">
            
            {/* Features Subheading & Context */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-2 border-b border-[#000000]/10 pb-6"
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#000000] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#40E0D0]" />
                <span>INTELLIGENT APPLICATION CAPABILITIES</span>
              </div>
              <p className="text-sm text-[#000000]/70 leading-relaxed font-normal">
                Seamless digital orchestration built to give electric mobility drivers full confidence and absolute control from anywhere.
              </p>
            </motion.div>

            {/* 6 App Feature Items Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7"
            >
              {features.map((feature) => {
                const IconComponent = featureIconMap[feature.iconName] || Zap;

                return (
                  <motion.div
                    key={feature.number}
                    variants={itemVariants}
                    className="group relative flex items-start gap-4 p-3 -m-3 rounded-2xl hover:bg-[#000000]/[0.025] transition-colors duration-300"
                  >
                    {/* Icon Container with Black Line & Subtle Turquoise Accent */}
                    <div className="w-10 h-10 rounded-xl bg-[#000000]/5 group-hover:bg-[#40E0D0]/15 border border-[#000000]/10 group-hover:border-[#40E0D0]/50 flex items-center justify-center shrink-0 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-[#000000] group-hover:text-[#000000] transition-colors" />
                    </div>

                    {/* Feature Details */}
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-bold text-[#40E0D0] tracking-wider">
                          {feature.number}
                        </span>
                        <span className="text-[11px] font-mono font-bold text-[#000000] uppercase tracking-wide">
                          {feature.title}
                        </span>
                      </div>
                      <p className="text-xs text-[#000000]/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* ----------------------------------------------------- */}
            {/* Download Buttons Row & Call To Action                 */}
            {/* ----------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-8 border-t border-[#000000]/10 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#000000]">
                  DOWNLOAD THE EVION APP
                </span>
                <span className="text-[11px] font-mono text-[#000000]/60">
                  AVAILABLE ACROSS IOS & ANDROID
                </span>
              </div>

              {/* Google Play and App Store Download Buttons */}
              <AppDownloadButtons />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
