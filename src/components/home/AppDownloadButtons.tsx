'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, X } from 'lucide-react';
import { appShowcaseConfig, AppStoreButtonConfig } from '@/config/appShowcase';

interface AppDownloadButtonsProps {
  className?: string;
}

export const AppDownloadButtons: React.FC<AppDownloadButtonsProps> = ({
  className = '',
}) => {
  const { googlePlay, appStore } = appShowcaseConfig.stores;
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleStoreClick = (
    e: React.MouseEvent,
    store: AppStoreButtonConfig
  ) => {
    if (!store.isPublished || !store.url) {
      e.preventDefault();
      setToastMessage(
        `The EVION ${store.storeName} application is currently in final testing. Subscribe to our infrastructure newsletter to get early access.`
      );
      setTimeout(() => {
        setToastMessage(null);
      }, 5500);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Toast Notification when clicking Coming Soon */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute -top-16 left-0 right-0 sm:left-auto sm:right-0 sm:max-w-md bg-[#000000] text-[#FFFFFF] border border-[#40E0D0]/50 rounded-2xl p-3.5 shadow-2xl flex items-start gap-3 z-50"
            role="status"
          >
            <div className="w-6 h-6 rounded-full bg-[#40E0D0]/20 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-[#40E0D0]" />
            </div>
            <p className="text-xs font-sans text-white/90 leading-relaxed flex-1">
              {toastMessage}
            </p>
            <button
              type="button"
              onClick={() => setToastMessage(null)}
              className="text-white/60 hover:text-white shrink-0 p-0.5"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
        {/* Google Play Button */}
        <motion.a
          href={googlePlay.isPublished && googlePlay.url ? googlePlay.url : '#newsletter'}
          onClick={(e) => handleStoreClick(e, googlePlay)}
          target={googlePlay.isPublished && googlePlay.url ? '_blank' : '_self'}
          rel={googlePlay.isPublished && googlePlay.url ? 'noopener noreferrer' : undefined}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="group relative inline-flex items-center justify-between sm:justify-start gap-3.5 px-5 py-3 rounded-2xl bg-[#000000] text-[#FFFFFF] border border-black hover:border-[#40E0D0] transition-all duration-300 shadow-md hover:shadow-[0_8px_25px_-5px_rgba(64,224,208,0.35)]"
          aria-label={
            googlePlay.isPublished
              ? 'Get it on Google Play'
              : 'Google Play download coming soon'
          }
        >
          {/* Google Play Vector Icon */}
          <div className="w-7 h-7 flex items-center justify-center shrink-0">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.608 1.625A1.85 1.85 0 0 0 3 3.018v17.964c0 .54.225 1.03.608 1.393l.073.069 10.063-10.063v-.236L3.681 1.556l-.073.069Z"
                fill="#40E0D0"
              />
              <path
                d="m17.098 15.74-3.354-3.354v-.236l3.354-3.354.08.046 3.968 2.254c1.133.644 1.133 1.7 0 2.344l-3.968 2.254-.08.046Z"
                fill="#FFFFFF"
              />
              <path
                d="m13.744 12.15-10.136 10.136c.404.428 1.077.485 1.84.052l11.65-6.618-3.354-3.57Z"
                fill="#40E0D0"
                opacity="0.85"
              />
              <path
                d="m13.744 11.85 3.354-3.57L5.448 1.662C4.685 1.229 4.012 1.286 3.608 1.714L13.744 11.85Z"
                fill="#FFFFFF"
                opacity="0.9"
              />
            </svg>
          </div>

          {/* Button Text */}
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] font-mono tracking-wider text-white/60 uppercase">
              {googlePlay.badgeText}
            </span>
            <span className="text-sm font-bold tracking-wide text-white group-hover:text-[#40E0D0] transition-colors">
              {googlePlay.storeName}
            </span>
          </div>

          {/* Coming Soon Pill */}
          {!googlePlay.isPublished && (
            <span className="ml-auto sm:ml-2 text-[9px] font-mono uppercase tracking-widest font-bold px-2 py-0.5 rounded-full bg-[#40E0D0]/15 text-[#40E0D0] border border-[#40E0D0]/40">
              {googlePlay.comingSoonText}
            </span>
          )}
        </motion.a>

        {/* Apple App Store Button */}
        <motion.a
          href={appStore.isPublished && appStore.url ? appStore.url : '#newsletter'}
          onClick={(e) => handleStoreClick(e, appStore)}
          target={appStore.isPublished && appStore.url ? '_blank' : '_self'}
          rel={appStore.isPublished && appStore.url ? 'noopener noreferrer' : undefined}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="group relative inline-flex items-center justify-between sm:justify-start gap-3.5 px-5 py-3 rounded-2xl bg-[#000000] text-[#FFFFFF] border border-black hover:border-[#40E0D0] transition-all duration-300 shadow-md hover:shadow-[0_8px_25px_-5px_rgba(64,224,208,0.35)]"
          aria-label={
            appStore.isPublished
              ? 'Download on the App Store'
              : 'App Store download coming soon'
          }
        >
          {/* Apple Vector Icon */}
          <div className="w-7 h-7 flex items-center justify-center shrink-0">
            <svg
              className="w-6 h-6 fill-current text-[#FFFFFF] group-hover:text-[#40E0D0] transition-colors"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.73 1.4-.58.67-1.1 1.76-.96 2.82 1.04.08 2.1-.51 2.73-1.28Z" />
            </svg>
          </div>

          {/* Button Text */}
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] font-mono tracking-wider text-white/60">
              {appStore.badgeText}
            </span>
            <span className="text-sm font-bold tracking-wide text-white group-hover:text-[#40E0D0] transition-colors">
              {appStore.storeName}
            </span>
          </div>

          {/* Coming Soon Pill */}
          {!appStore.isPublished && (
            <span className="ml-auto sm:ml-2 text-[9px] font-mono uppercase tracking-widest font-bold px-2 py-0.5 rounded-full bg-[#40E0D0]/15 text-[#40E0D0] border border-[#40E0D0]/40">
              {appStore.comingSoonText}
            </span>
          )}
        </motion.a>
      </div>
    </div>
  );
};
