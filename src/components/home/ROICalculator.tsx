'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, DollarSign, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ConnectedLineSection } from '@/components/network/ConnectedLineSection';
import { ChargingStationIllustration } from '@/components/network/NetworkIllustrations';

export const ROICalculator: React.FC = () => {
  const [chargingPoints, setChargingPoints] = useState<number>(6);
  const [dailySessions, setDailySessions] = useState<number>(6);
  const [tariffPerKwh, setTariffPerKwh] = useState<number>(20);
  const [operatingDays, setOperatingDays] = useState<number>(30);
  const avgKwhPerSession = 35;

  const calculations = useMemo(() => {
    const monthlySessions = chargingPoints * dailySessions * operatingDays;
    const monthlyKwh = monthlySessions * avgKwhPerSession;
    const grossMonthlyRevenue = monthlyKwh * tariffPerKwh;
    
    // Estimated electricity & network management costs
    const powerCost = monthlyKwh * 9.5;
    const netMonthlyProfit = Math.max(0, grossMonthlyRevenue - powerCost);
    
    const annualRevenue = grossMonthlyRevenue * 12;
    const annualProfit = netMonthlyProfit * 12;
    
    const annualCo2Tons = (monthlyKwh * 12 * 0.82) / 1000;

    return {
      monthlySessions,
      monthlyKwh,
      grossMonthlyRevenue,
      netMonthlyProfit,
      annualRevenue,
      annualProfit,
      annualCo2Tons: Math.round(annualCo2Tons),
    };
  }, [chargingPoints, dailySessions, tariffPerKwh, operatingDays, avgKwhPerSession]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <ConnectedLineSection
      id="calculator"
      pattern="left-to-right"
      illustrationRight={<ChargingStationIllustration size={54} />}
      illustrationRightOffset={{ x: -28, y: -20 }}
      className="bg-[#FFFFFF]"
    >
      <section id="calculator" className="py-24 sm:py-32 relative overflow-hidden border-b-2 border-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#40E0D0] border border-[#000000] text-xs font-mono text-[#000000] uppercase tracking-widest mb-4 font-bold">
              REVENUE SIMULATOR
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#000000] uppercase leading-[1.05]">
              SEE WHAT EV CHARGING <br />
              <span className="text-[#40E0D0]">
                COULD MEAN FOR YOUR BUSINESS.
              </span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#000000] font-normal leading-relaxed">
              Estimate potential monthly and annual revenue generation based on your property size, charger count, and expected vehicle throughput.
            </p>
          </div>

          {/* Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Sliders Input Panel */}
            <div className="lg:col-span-6 rounded-3xl bg-[#FFFFFF] border-2 border-[#000000] p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#000000]/20">
                <div className="flex items-center gap-2 text-sm font-bold text-[#000000]">
                  <Calculator className="w-4 h-4 text-[#000000]" />
                  <span>Simulation Parameters</span>
                </div>
                <span className="text-xs font-mono text-[#000000] font-bold">Interactive Model</span>
              </div>

              {/* Slider 1: Number of Charging Points */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#000000] font-semibold">Charging Bays / Dispensers</span>
                  <span className="text-base font-black text-[#000000]">{chargingPoints} Bays</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="32"
                  step="2"
                  value={chargingPoints}
                  onChange={(e) => setChargingPoints(Number(e.target.value))}
                  className="w-full accent-[#40E0D0] bg-[#FFFFFF] border border-[#000000] h-3 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#000000] font-bold">
                  <span>2 Bays</span>
                  <span>16 Bays</span>
                  <span>32 Bays</span>
                </div>
              </div>

              {/* Slider 2: Daily Sessions per Point */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#000000] font-semibold">Avg. Daily Sessions / Bay</span>
                  <span className="text-base font-black text-[#000000]">{dailySessions} Sessions</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="14"
                  step="1"
                  value={dailySessions}
                  onChange={(e) => setDailySessions(Number(e.target.value))}
                  className="w-full accent-[#40E0D0] bg-[#FFFFFF] border border-[#000000] h-3 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#000000] font-bold">
                  <span>2 Sessions</span>
                  <span>8 Sessions</span>
                  <span>14 Sessions</span>
                </div>
              </div>

              {/* Slider 3: Charging Price Tariff */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#000000] font-semibold">Charging Tariff (per kWh)</span>
                  <span className="text-base font-black text-[#000000]">₹{tariffPerKwh}/kWh</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="28"
                  step="1"
                  value={tariffPerKwh}
                  onChange={(e) => setTariffPerKwh(Number(e.target.value))}
                  className="w-full accent-[#40E0D0] bg-[#FFFFFF] border border-[#000000] h-3 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#000000] font-bold">
                  <span>₹16 (Standard)</span>
                  <span>₹22 (Express)</span>
                  <span>₹28 (Premium Hub)</span>
                </div>
              </div>

              {/* Slider 4: Operating Days per Month */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#000000] font-semibold">Operating Days per Month</span>
                  <span className="text-base font-black text-[#000000]">{operatingDays} Days</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="30"
                  step="1"
                  value={operatingDays}
                  onChange={(e) => setOperatingDays(Number(e.target.value))}
                  className="w-full accent-[#40E0D0] bg-[#FFFFFF] border border-[#000000] h-3 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Results Output Card */}
            <div className="lg:col-span-6 rounded-3xl bg-[#FFFFFF] border-2 border-[#000000] p-6 sm:p-8 space-y-6 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-[#000000]/20">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#000000] font-black">
                  <TrendingUp className="w-4 h-4 text-[#000000]" />
                  <span>Estimated Financial Yield</span>
                </div>
                <span className="text-[10px] font-mono text-[#000000] bg-[#40E0D0] border border-[#000000] px-2.5 py-1 rounded-full font-bold">
                  ESTIMATES ONLY
                </span>
              </div>

              {/* Large Revenue Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#FFFFFF] border-2 border-[#000000]">
                  <div className="text-xs font-mono text-[#000000] mb-1 font-bold">EST. MONTHLY REVENUE</div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-[#000000] tracking-tight">
                    {formatCurrency(calculations.grossMonthlyRevenue)}
                  </div>
                  <div className="text-[11px] text-[#000000] mt-1 font-mono font-bold">
                    ~{calculations.monthlySessions} total sessions
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#40E0D0] border-2 border-[#000000] shadow-sm">
                  <div className="text-xs font-mono text-[#000000] font-black mb-1">EST. ANNUAL REVENUE</div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-[#000000] tracking-tight">
                    {formatCurrency(calculations.annualRevenue)}
                  </div>
                  <div className="text-[11px] text-[#000000] mt-1 font-mono font-bold">
                    Gross annualized volume
                  </div>
                </div>
              </div>

              {/* Secondary Yield & ESG Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#000000]">
                  <div className="flex items-center gap-1.5 text-xs text-[#000000] mb-1 font-semibold">
                    <DollarSign className="w-3.5 h-3.5 text-[#000000]" />
                    <span>Annual Net Margin</span>
                  </div>
                  <div className="text-lg font-bold font-mono text-[#000000]">
                    {formatCurrency(calculations.annualProfit)}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#000000]">
                  <div className="flex items-center gap-1.5 text-xs text-[#000000] mb-1 font-semibold">
                    <Leaf className="w-3.5 h-3.5 text-[#40E0D0]" />
                    <span>Annual CO₂ Offset</span>
                  </div>
                  <div className="text-lg font-bold font-mono text-[#000000]">
                    {calculations.annualCo2Tons} Tons CO₂e
                  </div>
                </div>
              </div>

              {/* Partner CTA */}
              <div className="pt-4 border-t border-[#000000]/20 space-y-4">
                <p className="text-[11px] text-[#000000] leading-relaxed font-normal">
                  * Note: Figures provided are simulated projections based on standard operating assumptions and do not constitute guaranteed returns.
                </p>

                <Button variant="primary" size="lg" href="/contact" showArrow className="w-full">
                  Request Custom Site Feasibility Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ConnectedLineSection>
  );
};
