'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { navLinks } from '@/data/navigation';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#000000] border-t border-[#40E0D0]/20 overflow-hidden text-[#FFFFFF]">
      {/* Signature Electric Top Line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#40E0D0] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#FFFFFF]/10">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center transition-opacity hover:opacity-90 duration-300"
              aria-label="EVION Home"
            >
              <div className="relative h-8 w-32 sm:h-9 sm:w-36 flex items-center">
                <Image
                  src="/logo1.jpeg"
                  alt="EVION"
                  width={600}
                  height={150}
                  className="h-full w-auto object-contain brightness-110"
                />
              </div>
            </Link>

            <p className="text-sm text-[#FFFFFF]/70 max-w-sm leading-relaxed font-light">
              Architectural electric mobility infrastructure. Seamless energy delivery engineered for drivers, forward-thinking enterprises, and modern metropolitan networks.
            </p>

            {/* Newsletter */}
            <div className="space-y-3 pt-2">
              <div className="text-[11px] font-mono tracking-widest text-[#40E0D0] uppercase font-bold">
                SUBSCRIBE TO INFRASTRUCTURE BRIEFINGS
              </div>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#000000] bg-[#40E0D0] p-3 rounded-full font-mono font-bold max-w-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#000000]" />
                  <span>TRANSMISSION CONFIRMED</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter business email"
                    required
                    className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 rounded-full px-5 py-2.5 text-xs text-[#FFFFFF] placeholder-[#FFFFFF]/40 focus:outline-none focus:border-[#40E0D0] flex-1 font-mono transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-[#40E0D0] text-[#000000] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#FFFFFF] transition-colors cursor-pointer"
                  >
                    JOIN
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#40E0D0]">
              EXPLORE EVION
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href || '#'}
                    className="text-[#FFFFFF]/70 hover:text-[#40E0D0] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#40E0D0]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specs & Compliance */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#40E0D0]">
              SYSTEM SPECIFICATIONS
            </h4>
            <div className="p-5 rounded-2xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between text-[#FFFFFF]/70">
                <span>PEAK DC CAPACITY</span>
                <span className="text-[#40E0D0] font-bold">350 kW LIQUID-COOLED</span>
              </div>
              <div className="flex items-center justify-between text-[#FFFFFF]/70">
                <span>VOLTAGE SPECTRUM</span>
                <span className="text-[#FFFFFF] font-bold">400V - 1000V DC</span>
              </div>
              <div className="flex items-center justify-between text-[#FFFFFF]/70">
                <span>SECURITY ARCHITECTURE</span>
                <span className="text-[#FFFFFF] font-bold">TLS 1.3 / ISO 15118</span>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-[#FFFFFF]/10 text-[#40E0D0]">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px]">ISO 15118 & OCPP 2.0.1 COMPLIANT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#FFFFFF]/50">
          <div>
            © {new Date().getFullYear()} EVION TECHNOLOGIES INC. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#40E0D0] transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="/terms" className="hover:text-[#40E0D0] transition-colors">
              TERMS OF SERVICE
            </Link>
            <span className="text-[#40E0D0]">STATUS: NOMINAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
