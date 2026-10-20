import { Metadata } from 'next';
import Image from 'next/image';
import { images } from '@/config/images';
import { FinalCTA } from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'About EVION | Accelerating Electric Mobility',
  description:
    'Learn about EVION’s mission to build the world’s most reliable, ultra-fast electric vehicle charging network and smart energy ecosystem.',
};

export default function AboutPage() {
  const milestones = [
    { year: '2023', title: 'Foundation & Genesis', desc: 'EVION established with a mission to eliminate charging downtime and range anxiety through 350kW liquid-cooled hardware.' },
    { year: '2024', title: 'Expressway Superhub Pilot', desc: 'Deployed first 50 multi-megawatt corridor charging hubs across national highway expressways with 99.9% uptime SLA.' },
    { year: '2025', title: 'EVION OS & Enterprise Rollout', desc: 'Launched turnkey commercial zero-capex partnerships and Fleet Depot telemetry orchestration software.' },
    { year: '2026', title: '500+ Active Hubs', desc: 'Scaling nationwide with over 500 charging points, ISO 15118 Plug & Charge, and solar battery energy storage integration.' },
  ];

  return (
    <div className="pt-24 sm:pt-28 bg-[#FFFFFF]">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b-2 border-[#000000] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#40E0D0] border border-[#000000] text-xs font-mono text-[#000000] uppercase tracking-widest font-bold">
              OUR MISSION & PURPOSE
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#000000] tracking-tight uppercase leading-[0.95]">
              POWERING <br />
              <span className="text-[#40E0D0]">
                EVERY JOURNEY.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#000000] font-normal leading-relaxed">
              We believe electric mobility should be limitless. EVION is building the critical energy infrastructure that turns zero-emission transport into an effortless daily reality for millions.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Impact Metrics */}
      <section className="py-16 bg-[#FFFFFF] border-b-2 border-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border-2 border-[#000000] shadow-sm">
              <div className="text-xs font-mono text-[#000000] mb-1 font-bold">CLEAN ENERGY DISPENSED</div>
              <div className="text-3xl font-black font-mono text-[#40E0D0] mb-1">18.4 GWh</div>
              <div className="text-xs text-[#000000]">Zero-emission power delivered</div>
            </div>
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border-2 border-[#000000] shadow-sm">
              <div className="text-xs font-mono text-[#000000] mb-1 font-bold">CO₂ EMISSIONS OFFSET</div>
              <div className="text-3xl font-black font-mono text-[#000000] mb-1">15,200+ Tons</div>
              <div className="text-xs text-[#000000]">Equivalent to planting 680k trees</div>
            </div>
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border-2 border-[#000000] shadow-sm">
              <div className="text-xs font-mono text-[#000000] mb-1 font-bold">ACTIVE HUBS</div>
              <div className="text-3xl font-black font-mono text-[#000000] mb-1">500+</div>
              <div className="text-xs text-[#000000]">Metros & expressways</div>
            </div>
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border-2 border-[#000000] shadow-sm">
              <div className="text-xs font-mono text-[#000000] mb-1 font-bold">NETWORK RELIABILITY</div>
              <div className="text-3xl font-black font-mono text-[#40E0D0] mb-1">99.9%</div>
              <div className="text-xs text-[#000000]">Industry-leading uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Image Composition */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-[#000000] tracking-tight uppercase leading-tight">
                BUILT BY AUTOMOTIVE & ENERGY VETERANS.
              </h2>
              <p className="text-base text-[#000000] leading-relaxed font-normal">
                Founded with engineers and designers from premier automotive brands and renewable grid operators, EVION bridges the gap between vehicle engineering and electric utility infrastructure.
              </p>
              <p className="text-sm text-[#000000] leading-relaxed font-normal">
                We design hardware that lasts in harsh real-world conditions, write software that dynamically adapts to grid fluctuations, and craft intuitive driver interactions that make charging as simple as breathing.
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[450px] rounded-3xl overflow-hidden border-2 border-[#000000] bg-[#FFFFFF] shadow-lg">
                <Image
                  src={images.teamWorkspace}
                  alt="EVION Engineering Workspace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-xs font-mono text-[#000000] uppercase tracking-widest mb-2 font-bold">
                OUR JOURNEY
              </div>
              <h3 className="text-3xl font-black text-[#000000] uppercase">Scaling the Future of Fast Charging</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-[#FFFFFF] border-2 border-[#000000] space-y-3 shadow-sm">
                  <div className="text-2xl font-black font-mono text-[#40E0D0]">{m.year}</div>
                  <h4 className="text-lg font-bold text-[#000000]">{m.title}</h4>
                  <p className="text-xs text-[#000000] leading-relaxed font-normal">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
