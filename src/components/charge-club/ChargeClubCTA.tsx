'use client';

import React from 'react';
import { ArrowRight, Building, Shield, Zap, Sparkles } from 'lucide-react';

export const ChargeClubCTA: React.FC = () => {
  return (
    <section className="relative z-30 w-full bg-[#0D0D11] text-[#FFFFFF] py-24 px-6 sm:px-12 lg:px-20 border-t border-[#40E0D0]/20 overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(64, 224, 208, 0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#12161A] via-[#121217] to-[#0A0A0E] border-2 border-[#40E0D0]/50 shadow-[0_20px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(64,224,208,0.2)] text-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#40E0D0]/10 border border-[#40E0D0]/30 text-[#40E0D0] text-xs font-mono tracking-widest uppercase mb-6">
          <Building className="w-3.5 h-3.5 text-[#40E0D0]" />
          <span>JOIN THE EVION FRANCHISE NETWORK</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#FFFFFF]">
          POWER YOUR FUTURE{' '}
          <span
            style={{
              background:
                'linear-gradient(135deg, #FFFFFF 0%, #40E0D0 50%, #20B2AA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            WITH EVION.
          </span>
        </h2>

        <p className="mt-6 text-sm sm:text-base text-[#FFFFFF]/70 max-w-2xl mx-auto font-sans leading-relaxed">
          Partner with EVION to bring intelligent electric vehicle charging solutions to more locations. Join our growing network and explore franchise opportunities in the expanding electric mobility industry.
        </p>

        {/* Franchise Partner Testimonial Snippet */}
        <div className="mt-8 pt-8 border-t border-[#FFFFFF]/10 max-w-xl mx-auto">
          <div className="italic text-xs sm:text-sm text-[#FFFFFF]/80 font-sans">
            "Partnering with EVION to install 350kW multi-bay hubs transformed our commercial portfolio. Utilization exceeded projections within 60 days, establishing our sites as premier charging destinations."
          </div>
          <div className="mt-3 font-mono text-[11px] text-[#40E0D0] uppercase tracking-wider">
            — DAVID K., COMMERCIAL PROPERTY DEVELOPER & EVION FRANCHISE PARTNER
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#franchise-opportunities"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#40E0D0] text-[#000000] text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(64,224,208,0.4)] hover:shadow-[0_0_45px_rgba(64,224,208,0.6)] hover:bg-[#FFFFFF] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>ENQUIRE ABOUT FRANCHISING</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#FFFFFF]/5 hover:bg-[#FFFFFF]/10 border border-[#FFFFFF]/15 text-[#FFFFFF] text-xs font-mono tracking-widest uppercase transition-all flex items-center justify-center gap-2"
          >
            <span>BECOME A FRANCHISE PARTNER</span>
          </a>
        </div>

        <div className="mt-6 text-[11px] font-mono text-[#FFFFFF]/40 tracking-wider">
          TURNKEY EPC • 800V SILICON CARBIDE INFRASTRUCTURE • 24/7 CLOUD OS DISPATCH
        </div>
      </div>
    </section>
  );
};
