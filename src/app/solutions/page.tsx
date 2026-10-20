import { Metadata } from 'next';
import Image from 'next/image';
import { solutionsData } from '@/data/solutions';
import { Button } from '@/components/ui/Button';
import { FinalCTA } from '@/components/home/FinalCTA';
import { CheckCircle2, Zap, Home, Building2, ShoppingBag, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Charging Solutions | Home, Business, Commercial & Fleet',
  description:
    'Comprehensive EV charging solutions tailored for residential homes, corporate workplaces, commercial retail destinations, and large-scale fleet depots.',
};

export default function SolutionsOverviewPage() {
  const iconsMap: Record<string, React.ReactNode> = {
    home: <Home className="w-5 h-5 text-[#000000]" />,
    business: <Building2 className="w-5 h-5 text-[#000000]" />,
    commercial: <ShoppingBag className="w-5 h-5 text-[#000000]" />,
    fleet: <Truck className="w-5 h-5 text-[#000000]" />,
  };

  return (
    <div className="pt-24 sm:pt-28 bg-[#FFFFFF]">
      {/* Header Banner */}
      <section className="py-20 sm:py-28 bg-[#40E0D0] border-b-2 border-[#000000] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#000000] text-xs font-mono text-[#000000] uppercase tracking-widest font-bold shadow-sm">
              ENERGY INFRASTRUCTURE FOR EVERY SECTOR
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#000000] tracking-tight uppercase leading-[0.95]">
              EV CHARGING <br />
              <span className="text-[#FFFFFF] drop-shadow-[0_2px_0_#000000]">
                SOLUTIONS ECOSYSTEM.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#000000] font-medium leading-relaxed">
              Tailored charging architectures engineered for single-family residences, corporate workplaces, high-traffic commercial real estate, and 24/7 mission-critical commercial fleets.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Detailed Grid */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {Object.values(solutionsData).map((sol, idx) => (
            <div
              key={sol.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Visual Card */}
              <div className={`lg:col-span-6 relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden border-2 border-[#000000] bg-[#FFFFFF] shadow-[6px_6px_0px_#000000] group">
                  <Image
                    src={sol.heroImage}
                    alt={sol.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent" />

                  {/* Floating metric HUD */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FFFFFF] border-2 border-[#000000] grid grid-cols-2 gap-3 shadow-[4px_4px_0px_#000000]">
                    {sol.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-[10px] font-mono text-[#000000] uppercase font-bold">{m.label}</div>
                        <div className="text-xl font-black font-mono text-[#000000]">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Copy & Details */}
              <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#40E0D0] border-2 border-[#000000] flex items-center justify-center text-[#000000]">
                    {iconsMap[sol.id] || <Zap className="w-5 h-5 text-[#000000]" />}
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#000000]">
                    {sol.eyebrow}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-[#000000] tracking-tight uppercase leading-tight">
                  {sol.title}
                </h2>

                <p className="text-base text-[#000000] font-medium leading-relaxed">
                  {sol.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  {sol.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-sm text-[#000000]">
                      <CheckCircle2 className="w-4 h-4 text-[#40E0D0] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#000000]">{feat.title}:</span>{' '}
                        <span className="text-[#000000] font-medium">{feat.description}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 flex items-center gap-4">
                  <Button variant="primary" size="md" href={`/solutions/${sol.slug}`} showArrow>
                    Explore {sol.title}
                  </Button>
                  <Button variant="secondary" size="md" href="/contact">
                    Inquire Pricing
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
