'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { faqsData } from '@/data/faqs';
import { ConnectedLineSection } from '@/components/network/ConnectedLineSection';
import { HouseIllustration, ChargingPlugIllustration } from '@/components/network/NetworkIllustrations';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Drivers & Charging', 'Business & Property', 'Technology & Hardware', 'Billing & Fleets'];

  const filteredFaqs = activeCategory === 'All' 
    ? faqsData.slice(0, 7)
    : faqsData.filter((f) => f.category === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <ConnectedLineSection
      id="faq"
      pattern="right-to-left"
      illustrationRight={<HouseIllustration size={64} />}
      illustrationLeft={<ChargingPlugIllustration size={44} />}
      illustrationRightOffset={{ x: -25, y: -20 }}
      illustrationLeftOffset={{ x: 10, y: -20 }}
      className="bg-[#40E0D0]"
    >
      <section id="faq" className="py-24 sm:py-32 relative overflow-hidden border-b-2 border-[#000000]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border-2 border-[#000000] text-xs font-mono text-[#000000] uppercase tracking-widest mb-4 font-bold shadow-sm">
              QUESTIONS & ANSWERS
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#000000] uppercase leading-[1.05]">
              FREQUENTLY ASKED <br />
              <span className="text-[#FFFFFF] drop-shadow-sm">
                QUESTIONS.
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#000000] font-medium leading-relaxed">
              Everything you need to know about charging speeds, vehicle compatibility, installation options, and commercial partnerships.
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#FFFFFF] text-[#000000] border-2 border-[#000000] shadow-sm'
                    : 'bg-[#40E0D0] text-[#000000] hover:bg-[#FFFFFF] border border-[#000000]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-[#FFFFFF] border-2 border-[#000000] transition-all shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#000000] tracking-tight">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-[#000000] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-[#40E0D0] text-[#000000]'
                          : 'bg-[#FFFFFF] text-[#000000]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#000000] leading-relaxed border-t border-[#000000]/15 font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* FAQ Knowledge Base Link */}
          <div className="mt-12 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#000000] hover:text-[#FFFFFF] transition-colors"
            >
              <span>View complete knowledge base & technical FAQ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </ConnectedLineSection>
  );
};
