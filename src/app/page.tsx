import React from 'react';
import { EVIONLoadingScreen } from '@/components/ui/EVIONLoadingScreen';
import { Hero } from '@/components/home/Hero';
import { SignatureCarJourney } from '@/components/home/SignatureCarJourney';
import { AboutSection } from '@/components/home/AboutSection';
import { ChargingSolutions } from '@/components/home/ChargingSolutions';
import { TechnologySection } from '@/components/home/TechnologySection';
import { ExperienceSteps } from '@/components/home/ExperienceSteps';
import { ChargingStationShowcase } from '@/components/home/ChargingStationShowcase';
import { InteractiveMapSection } from '@/components/home/InteractiveMapSection';
import { EVIONAppShowcase } from '@/components/home/EVIONAppShowcase';
import { EVIONAppStats } from '@/components/home/EVIONAppStats';
import { ImpactSection } from '@/components/home/ImpactSection';
import { ContactSection } from '@/components/home/ContactSection';
import { ClosingSection } from '@/components/home/ClosingSection';

export default function HomePage() {
  return (
    <>
      {/* 0. Cinematic Initial Brand Loading Screen */}
      <EVIONLoadingScreen />

      <div className="flex flex-col w-full overflow-hidden bg-[#000000]">
        {/* 1. Cinematic Hero Section */}
        <Hero />

      {/* 2. Signature Scroll-Driven Car & Route Journey */}
      <SignatureCarJourney />

      {/* 3. About EVION Section */}
      <AboutSection />

      {/* 4. Charging Solutions Hub */}
      <ChargingSolutions />

      {/* 5. Materials and Technology Showcase */}
      <TechnologySection />

      {/* 6. Six-Stage EVION Experience */}
      <ExperienceSteps />

      {/* 7. Charging Station Showcase */}
      <ChargingStationShowcase />

      {/* 8. Connected Network & Interactive Charging Station Locator Map */}
      <InteractiveMapSection />

      {/* 9. Premium Mobile Application Showcase: EVION Charging Companion */}
      <EVIONAppShowcase />

      {/* 10. EVION Impact Statistics: Clients, Cities, Charging Power */}
      <EVIONAppStats />

      {/* 11. Impact & Capability Statements */}
      <ImpactSection />

      {/* 10. Contact Section & Direct Enquiry Form */}
      <ContactSection />

      {/* 11. Final Closing Scene */}
      <ClosingSection />
    </div>
    </>
  );
}
