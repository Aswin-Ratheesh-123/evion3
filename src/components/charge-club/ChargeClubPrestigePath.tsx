'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Zap,
  ArrowRight,
  X,
  Building,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

export interface TierInfo {
  id: string;
  name: string;
  badge?: string;
  isRecommended?: boolean;
}

export interface ComparisonRow {
  id: string;
  label: string;
  bronze: string | boolean;
  silver: string | boolean;
  gold: string | boolean;
  platinum: string | boolean;
  enterprise: string | boolean;
}

// 5 Franchise Partnership Tiers
export const franchiseTiers: TierInfo[] = [
  { id: 'bronze', name: 'BRONZE' },
  { id: 'silver', name: 'SILVER' },
  { id: 'gold', name: 'GOLD', badge: 'RECOMMENDED', isRecommended: true },
  { id: 'platinum', name: 'PLATINUM' },
  { id: 'enterprise', name: 'ENTERPRISE' },
];

// 7 Comparison Rows
export const comparisonRows: ComparisonRow[] = [
  {
    id: 'row-1',
    label: 'PARTNERSHIP MODEL',
    bronze: 'Entry-level partnership',
    silver: 'Growing business partnership',
    gold: 'Established charging partner',
    platinum: 'Regional expansion partner',
    enterprise: 'Large-scale infrastructure partner',
  },
  {
    id: 'row-2',
    label: 'INVESTMENT REQUIREMENTS',
    bronze: 'Discuss with EVION',
    silver: 'Discuss with EVION',
    gold: 'Discuss with EVION',
    platinum: 'Discuss with EVION',
    enterprise: 'Custom proposal',
  },
  {
    id: 'row-3',
    label: 'LOCATION OPPORTUNITIES',
    bronze: 'Single location',
    silver: 'Multiple locations',
    gold: 'City-level opportunities',
    platinum: 'Regional opportunities',
    enterprise: 'Custom network opportunities',
  },
  {
    id: 'row-4',
    label: 'BUSINESS SUPPORT',
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    id: 'row-5',
    label: 'TECHNICAL GUIDANCE',
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    id: 'row-6',
    label: 'EXPANSION OPPORTUNITIES',
    bronze: false,
    silver: true,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    id: 'row-7',
    label: 'DEDICATED PARTNERSHIP SUPPORT',
    bronze: false,
    silver: false,
    gold: true,
    platinum: true,
    enterprise: true,
  },
];

export const ChargeClubPrestigePath: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('GOLD');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    siteType: 'Commercial Retail Plaza',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    try {
      const res = await fetch('/api/franchise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          model: selectedTier,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitSuccess(false);
          setFormData({ name: '', email: '', phone: '', city: '', siteType: 'Commercial Retail Plaza' });
        }, 2200);
      } else {
        setErrorMessage(data.message || 'Submission error. Please check your fields.');
      }
    } catch {
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCellContent = (value: string | boolean, isHighlighted = false) => {
    if (typeof value === 'boolean') {
      if (value) {
        return (
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-[#40E0D0]/10 border border-[#40E0D0]/40 flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-[#40E0D0] stroke-[3]" />
            </div>
          </div>
        );
      }
      return (
        <div className="flex items-center justify-center">
          <span className="text-[#64748B] font-mono text-base select-none">—</span>
        </div>
      );
    }

    return (
      <span
        className={`text-xs sm:text-[13px] leading-relaxed block text-center ${
          isHighlighted ? 'text-[#FFFFFF] font-medium' : 'text-[#FFFFFF]/80'
        }`}
      >
        {value}
      </span>
    );
  };

  return (
    <section
      id="franchise-opportunities"
      className="relative z-30 w-full bg-[#0D0D11] text-[#FFFFFF] py-28 px-4 sm:px-8 lg:px-12 border-t border-[#FFFFFF]/10"
    >
      {/* Background Subtle Ambient Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 0%, rgba(64, 224, 208, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 10% 40%, rgba(64, 224, 208, 0.04) 0%, transparent 40%),
            radial-gradient(circle at 90% 70%, rgba(64, 224, 208, 0.03) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* =========================================================================
            SECTION HEADING
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#40E0D0]/10 border border-[#40E0D0]/30 text-[#40E0D0] text-xs font-mono tracking-widest uppercase mb-5">
            <Building className="w-3.5 h-3.5 text-[#40E0D0]" />
            <span>EVION PARTNERSHIP // FRANCHISE NETWORK</span>
          </div>

          <h2 className="text-[clamp(1.5rem,6.5vw,3.75rem)] font-black tracking-tight text-[#FFFFFF] uppercase leading-tight">
            EVION FRANCHISE{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, #FFFFFF 0%, #40E0D0 60%, #20B2AA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              OPPORTUNITIES
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#FFFFFF]/70 font-sans leading-relaxed">
            Choose your partnership level and explore opportunities to grow with EVION&apos;s electric mobility network.
          </p>
        </div>

        {/* Mobile Horizontal Scroll Indicator Prompt */}
        <div className="lg:hidden text-center text-[11px] font-mono text-[#40E0D0] mb-3 flex items-center justify-center gap-2">
          <span>SCROLL HORIZONTALLY TO VIEW ALL 5 TIERS</span>
          <ChevronRight className="w-3.5 h-3.5 animate-pulse" />
        </div>

        {/* =========================================================================
            WIDE FRANCHISE COMPARISON TABLE
            ========================================================================= */}
        <div className="w-full rounded-2xl sm:rounded-3xl border border-[#FFFFFF]/15 bg-[#11161D]/80 backdrop-blur-md overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[860px]">
              {/* Table Header with 6 Columns */}
              <thead>
                <tr className="border-b border-[#FFFFFF]/15 bg-[#0A0E13]">
                  {/* Column 1: Benefits & Requirements */}
                  <th className="py-7 px-6 w-[26%] sticky left-0 bg-[#0A0E13] z-20 border-r border-[#FFFFFF]/10 shadow-[2px_0_8px_rgba(0,0,0,0.5)]">
                    <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#40E0D0] font-bold block">
                      BENEFITS & REQUIREMENTS
                    </span>
                    <span className="text-[11px] font-mono text-[#FFFFFF]/40 tracking-wider block mt-1">
                      PARTNERSHIP CRITERIA
                    </span>
                  </th>

                  {/* 5 Tier Header Columns */}
                  {franchiseTiers.map((tier) => (
                    <th
                      key={tier.id}
                      className={`py-7 px-4 w-[14.8%] text-center border-r border-[#FFFFFF]/10 last:border-r-0 transition-colors ${
                        tier.isRecommended
                          ? 'bg-[#40E0D0]/[0.06] relative'
                          : 'bg-transparent'
                      }`}
                    >
                      {/* Recommended Restrained Highlight Badge */}
                      {tier.isRecommended && (
                        <div className="inline-block mb-1.5 px-2.5 py-0.5 rounded-full bg-[#40E0D0]/20 border border-[#40E0D0]/50 text-[#40E0D0] text-[9px] font-mono font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(64,224,208,0.25)]">
                          {tier.badge}
                        </div>
                      )}

                      {/* Small Minimal Circular Icon with Turquoise Lightning Symbol */}
                      <div
                        className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center mb-2 transition-transform ${
                          tier.isRecommended
                            ? 'bg-[#40E0D0]/20 border border-[#40E0D0] shadow-[0_0_12px_rgba(64,224,208,0.3)]'
                            : 'bg-[#FFFFFF]/5 border border-[#FFFFFF]/20'
                        }`}
                      >
                        <Zap
                          className={`w-4 h-4 ${
                            tier.isRecommended ? 'text-[#40E0D0]' : 'text-[#FFFFFF]/80'
                          }`}
                        />
                      </div>

                      {/* Tier Name */}
                      <span
                        className={`text-xs sm:text-sm font-mono font-bold tracking-widest uppercase block ${
                          tier.isRecommended ? 'text-[#40E0D0]' : 'text-[#FFFFFF]'
                        }`}
                      >
                        {tier.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body with 7 Comparison Rows */}
              <tbody className="divide-y divide-[#FFFFFF]/10 text-xs sm:text-sm">
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.id}
                    className="hover:bg-[#FFFFFF]/[0.02] transition-colors group"
                  >
                    {/* Row Label (Column 1 - Sticky on horizontal scroll) */}
                    <td className="py-5 px-6 font-mono font-bold uppercase text-[#FFFFFF] text-xs sm:text-[13px] tracking-wider sticky left-0 bg-[#0E131A] group-hover:bg-[#121820] z-10 border-r border-[#FFFFFF]/10 shadow-[2px_0_8px_rgba(0,0,0,0.5)] transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#40E0D0]/70 inline-block" />
                        <span>{row.label}</span>
                      </div>
                    </td>

                    {/* Bronze */}
                    <td className="py-5 px-4 text-center border-r border-[#FFFFFF]/10 align-middle">
                      {renderCellContent(row.bronze)}
                    </td>

                    {/* Silver */}
                    <td className="py-5 px-4 text-center border-r border-[#FFFFFF]/10 align-middle">
                      {renderCellContent(row.silver)}
                    </td>

                    {/* Gold (Recommended) */}
                    <td className="py-5 px-4 text-center border-r border-[#FFFFFF]/10 align-middle bg-[#40E0D0]/[0.04]">
                      {renderCellContent(row.gold, true)}
                    </td>

                    {/* Platinum */}
                    <td className="py-5 px-4 text-center border-r border-[#FFFFFF]/10 align-middle">
                      {renderCellContent(row.platinum)}
                    </td>

                    {/* Enterprise */}
                    <td className="py-5 px-4 text-center align-middle">
                      {renderCellContent(row.enterprise)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* =========================================================================
            DISCLAIMER
            ========================================================================= */}
        <p className="mt-6 text-xs font-mono text-[#94A3B8]/80 text-center max-w-3xl mx-auto leading-relaxed">
          Partnership models, eligibility, investment requirements, and benefits are subject to discussion and approval by EVION. Final terms will be provided in the official franchise proposal.
        </p>

        {/* =========================================================================
            FRANCHISE ENQUIRY CALL TO ACTION
            ========================================================================= */}
        <div className="mt-16 sm:mt-20 text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight">
            READY TO PARTNER WITH EVION?
          </h3>
          <p className="text-sm text-[#FFFFFF]/70 font-sans leading-relaxed">
            Tell us about your business and location to explore the right franchise opportunity.
          </p>

          <div className="pt-3">
            <button
              onClick={() => {
                setSelectedTier('GOLD');
                setIsModalOpen(true);
              }}
              className="px-8 py-4 rounded-full bg-[#40E0D0] text-[#000000] text-xs font-mono font-bold tracking-widest uppercase hover:bg-[#FFFFFF] hover:shadow-[0_0_30px_rgba(64,224,208,0.4)] transition-all duration-300 inline-flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>ENQUIRE ABOUT FRANCHISING</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            WORKING FRANCHISE ENQUIRY MODAL (PRESERVING FULL BEHAVIOR & API)
            ========================================================================= */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000000]/80 backdrop-blur-xl"
            >
              <motion.div
                initial={{ scale: 0.94, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.94, y: 15 }}
                className="relative w-full max-w-lg rounded-3xl bg-[#0D1117] border border-[#40E0D0]/40 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(64,224,208,0.2)]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/20 text-[#FFFFFF] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-[#40E0D0]/10 border border-[#40E0D0]/30 flex items-center justify-center">
                    <Building className="w-4 h-4 text-[#40E0D0]" />
                  </div>
                  <span className="text-[11px] font-mono tracking-widest text-[#40E0D0] uppercase font-bold">
                    EVION // FRANCHISE ENQUIRY
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#FFFFFF] uppercase tracking-tight">
                  FRANCHISE ENQUIRY
                </h3>
                <p className="text-xs text-[#FFFFFF]/70 font-sans mt-1 leading-relaxed">
                  Interested in partnering with EVION? Share your details and our team can connect with you about franchise opportunities.
                </p>

                {/* Form Fields */}
                <form onSubmit={handleFormSubmit} className="space-y-3.5 mt-6">
                  <div>
                    <label className="block text-[10px] font-mono text-[#FFFFFF]/60 uppercase mb-1">
                      Preferred Franchise Tier
                    </label>
                    <select
                      value={selectedTier}
                      onChange={(e) => setSelectedTier(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#151B22] border border-[#FFFFFF]/15 text-xs text-[#FFFFFF] focus:border-[#40E0D0] focus:outline-none font-sans"
                    >
                      {franchiseTiers.map((t) => (
                        <option key={t.id} value={t.name}>
                          {t.name} {t.isRecommended ? '— Recommended Partner Level' : ''}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-[#FFFFFF]/60 uppercase mb-1">
                      Full Name / Principal
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David Harrison"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 text-xs text-[#FFFFFF] placeholder-[#FFFFFF]/30 focus:border-[#40E0D0] focus:outline-none font-sans"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono text-[#FFFFFF]/60 uppercase mb-1">
                        Business Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 text-xs text-[#FFFFFF] placeholder-[#FFFFFF]/30 focus:border-[#40E0D0] focus:outline-none font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-[#FFFFFF]/60 uppercase mb-1">
                        Phone / City
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 text-xs text-[#FFFFFF] placeholder-[#FFFFFF]/30 focus:border-[#40E0D0] focus:outline-none font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-[#FFFFFF]/60 uppercase mb-1">
                      Proposed Site / Property Type
                    </label>
                    <select
                      value={formData.siteType}
                      onChange={(e) => setFormData({ ...formData, siteType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#151B22] border border-[#FFFFFF]/15 text-xs text-[#FFFFFF] focus:border-[#40E0D0] focus:outline-none font-sans"
                    >
                      <option>Commercial Retail Plaza / Mall</option>
                      <option>Highway Corridor Land</option>
                      <option>Corporate Office / Campus</option>
                      <option>Fleet Logistics Yard</option>
                      <option>Hospitality & Hotel Chain</option>
                      <option>Existing Gas / Petrol Station Retrofit</option>
                    </select>
                  </div>

                  {submitSuccess && (
                    <div className="p-3.5 rounded-xl bg-[#40E0D0]/10 border border-[#40E0D0]/30 text-xs font-mono text-[#40E0D0] text-center">
                      Thank you for your franchise enquiry. Our enterprise team will connect with you about franchise opportunities.
                    </div>
                  )}

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400 text-center">
                      {errorMessage}
                    </div>
                  )}

                  {!submitSuccess && (
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-2xl bg-[#40E0D0] text-[#000000] text-xs font-mono font-bold tracking-widest uppercase hover:bg-[#FFFFFF] shadow-[0_0_25px_rgba(64,224,208,0.35)] transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Building className="w-4 h-4" />
                        <span>{isSubmitting ? 'TRANSMITTING ENQUIRY...' : 'ENQUIRE ABOUT FRANCHISING'}</span>
                      </button>
                    </div>
                  )}

                  <p className="text-[10px] font-mono text-center text-[#FFFFFF]/40 pt-1">
                    ENCRYPTED 256-BIT SSL • EVION ENTERPRISE DEVELOPMENT TEAM
                  </p>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
