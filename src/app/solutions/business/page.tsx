import { Metadata } from 'next';
import Image from 'next/image';
import { solutionsData } from '@/data/solutions';
import { Button } from '@/components/ui/Button';
import { ROICalculator } from '@/components/home/ROICalculator';
import { FinalCTA } from '@/components/home/FinalCTA';
import { Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Workplace & Enterprise EV Charging Solutions | EVION',
  description:
    'Transform corporate office parking into an attractive employee amenity and revenue-generating asset with EVION Enterprise Charging.',
};

export default function BusinessChargingPage() {
  const data = solutionsData.business;

  return (
    <div className="pt-24 sm:pt-28 bg-[#FFFFFF]">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-[#40E0D0] border-b-2 border-[#000000] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#000000] text-xs font-mono text-[#000000] uppercase tracking-widest font-bold shadow-sm">
                {data.eyebrow}
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-[#000000] tracking-tight uppercase leading-[0.95]">
                {data.title} <br />
                <span className="text-[#FFFFFF] drop-shadow-[0_2px_0_#000000]">
                  WORKPLACE AMENITY.
                </span>
              </h1>

              <p className="text-lg text-[#000000] max-w-xl font-medium leading-relaxed">
                {data.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button variant="primary" size="lg" href="/contact" showArrow>
                  Request Enterprise Proposal
                </Button>
                <Button variant="secondary" size="lg" href="#calculator">
                  Simulate Property ROI
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border-2 border-[#000000] bg-[#FFFFFF] shadow-[6px_6px_0px_#000000]">
                <Image
                  src={data.heroImage}
                  alt={data.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-12 bg-[#FFFFFF] border-b-2 border-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {data.metrics.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FFFFFF] border-2 border-[#000000] shadow-[4px_4px_0px_#000000]">
                <div className="text-xs font-mono text-[#000000] font-bold uppercase mb-1">{m.label}</div>
                <div className="text-3xl font-black font-mono text-[#000000] mb-1">{m.value}</div>
                <div className="text-xs text-[#000000] font-medium">{m.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#40E0D0] border-b-2 border-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.features.map((feat, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#000000] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all space-y-4 shadow-[4px_4px_0px_#000000]">
                <div className="w-10 h-10 rounded-xl bg-[#40E0D0] border-2 border-[#000000] flex items-center justify-center text-[#000000]">
                  <Building2 className="w-5 h-5 text-[#000000]" />
                </div>
                <h3 className="text-xl font-black text-[#000000] uppercase">{feat.title}</h3>
                <p className="text-sm text-[#000000] font-medium leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded ROI Calculator */}
      <div id="calculator">
        <ROICalculator />
      </div>

      <FinalCTA />
    </div>
  );
}
