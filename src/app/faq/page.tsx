'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';
import { faqsData } from '@/data/faqs';

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const categories = ['All', 'Drivers & Charging', 'Business & Property', 'Technology & Hardware', 'Billing & Fleets'];

  const filteredFaqs = useMemo(() => {
    return faqsData.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(search.toLowerCase()) ||
        faq.answer.toLowerCase().includes(search.toLowerCase());

      const matchesCat = activeCategory === 'All' || faq.category === activeCategory;

      return matchesSearch && matchesCat;
    });
  }, [search, activeCategory]);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="pt-24 sm:pt-28 bg-[#FFFFFF]">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b-2 border-[#000000] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#40E0D0] border border-[#000000] text-xs font-mono text-[#000000] uppercase tracking-widest font-bold">
              KNOWLEDGE BASE & SUPPORT
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-[#000000] tracking-tight uppercase leading-[0.95]">
              FREQUENTLY <br />
              <span className="text-[#40E0D0]">
                ASKED QUESTIONS.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#000000] font-normal leading-relaxed">
              Find answers regarding EVION 350kW charging speeds, vehicle connector compatibility, billing, business partnership models, and dynamic grid technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Search & Accordions */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#000000]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search across questions, speeds, connectors, tariffs..."
              className="w-full bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl pl-12 pr-4 py-4 text-sm text-[#000000] placeholder-[#000000]/50 focus:outline-none focus:border-[#40E0D0] focus:ring-4 focus:ring-[#40E0D0]/20 shadow-sm transition-all font-medium"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#40E0D0] text-[#000000] border-2 border-[#000000] shadow-sm'
                    : 'bg-[#FFFFFF] text-[#000000] hover:bg-[#40E0D0]/20 border border-[#000000]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordions */}
          <div className="space-y-4 pt-4">
            {filteredFaqs.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-[#FFFFFF] border-2 border-[#000000] text-[#000000]">
                <HelpCircle className="w-8 h-8 mx-auto mb-2 text-[#000000]" />
                <div className="text-[#000000] font-bold mb-1">No matching questions found</div>
                <p className="text-xs text-[#000000]">Try a different search keyword or switch categories.</p>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl bg-[#FFFFFF] border-2 border-[#000000] hover:border-[#40E0D0] transition-all overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => toggle(faq.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-[#000000] uppercase tracking-wider block font-bold">
                          {faq.category}
                        </span>
                        <span className="text-base sm:text-lg font-bold text-[#000000] tracking-tight">
                          {faq.question}
                        </span>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full border border-[#000000] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 bg-[#40E0D0] text-[#000000]' : 'bg-[#FFFFFF] text-[#000000]'
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
                          <div className="px-6 pb-6 pt-2 text-sm text-[#000000] leading-relaxed border-t border-[#000000]/15 font-normal">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
