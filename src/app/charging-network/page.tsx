import { Metadata } from 'next';
import { InteractiveMapSection } from '@/components/home/InteractiveMapSection';
import { FAQSection } from '@/components/home/FAQSection';
import { FinalCTA } from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'Charging Network | Find Ultra-Fast EV Stations',
  description:
    'Locate live EVION ultra-fast charging stations across major highway corridors and metropolitan hubs. Real-time charger availability, speeds up to 350 kW, and transparent pricing.',
};

export default function ChargingNetworkPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-[#000000]">
      {/* Network Page Hero Banner */}
      <section className="py-16 sm:py-24 bg-[#000000] border-b border-[#FFFFFF]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/5 border border-[#40E0D0]/30 text-xs font-mono text-[#40E0D0] uppercase tracking-widest font-bold">
              EVION SUPERCHARGING CORRIDORS
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-[#FFFFFF] tracking-tight uppercase leading-[1.05]">
              NATIONWIDE <br />
              <span className="text-[#40E0D0]">
                HIGH-SPEED NETWORK.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#FFFFFF]/80 font-normal leading-relaxed">
              Explore 500+ ultra-fast charging bays across India&apos;s premier expressways, tech parks, and commercial lifestyle centers. Engineered for 99.9% hardware availability.
            </p>

            {/* Quick telemetry metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#FFFFFF]/10">
              <div className="p-4 rounded-2xl bg-[#0A0D10] border border-[#FFFFFF]/15 shadow-sm">
                <div className="text-xs font-mono text-[#FFFFFF]/50 mb-1 font-bold">LIVE HUBS</div>
                <div className="text-2xl font-black font-mono text-[#FFFFFF]">500+</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0A0D10] border border-[#FFFFFF]/15 shadow-sm">
                <div className="text-xs font-mono text-[#FFFFFF]/50 mb-1 font-bold">PEAK POWER</div>
                <div className="text-2xl font-black font-mono text-[#40E0D0]">350 kW</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0A0D10] border border-[#FFFFFF]/15 shadow-sm">
                <div className="text-xs font-mono text-[#FFFFFF]/50 mb-1 font-bold">UPTIME SLA</div>
                <div className="text-2xl font-black font-mono text-[#FFFFFF]">99.9%</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0A0D10] border border-[#FFFFFF]/15 shadow-sm">
                <div className="text-xs font-mono text-[#FFFFFF]/50 mb-1 font-bold">AVG TOP-UP</div>
                <div className="text-2xl font-black font-mono text-[#FFFFFF]">15 Min</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Map & Search Section */}
      <InteractiveMapSection />

      {/* FAQs & CTA */}
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
