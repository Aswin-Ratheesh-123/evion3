import React from 'react';
import type { Metadata } from 'next';
import { ChargeClubHero3D } from '@/components/charge-club/ChargeClubHero3D';
import { ChargeClubPrestigePath } from '@/components/charge-club/ChargeClubPrestigePath';
import { ChargeClubPerks } from '@/components/charge-club/ChargeClubPerks';
import { ChargeClubCTA } from '@/components/charge-club/ChargeClubCTA';

export const metadata: Metadata = {
  title: 'EVION Franchise Opportunities | EV Charging Station Franchise & Partnership',
  description:
    'Partner with EVION to bring intelligent electric vehicle charging solutions to more locations. Join our growing network and explore franchise opportunities in the expanding electric mobility industry.',
  keywords: [
    'EVION Franchise',
    'EV charging franchise',
    'EV charging business opportunity',
    'EV charging station franchise',
    'commercial EV charging partner',
    '350kW DC fast charging investment',
  ],
  openGraph: {
    title: 'EVION Franchise Opportunities | EV Charging Station Franchise & Partnership',
    description:
      'Partner with EVION to bring intelligent electric vehicle charging solutions to more locations. Join our growing network and explore franchise opportunities in the expanding electric mobility industry.',
    type: 'website',
    url: 'https://evion.energy/franchise',
  },
};

export default function FranchisePage() {
  return (
    <div className="relative min-h-screen bg-[#0D0D11] text-[#FFFFFF] selection:bg-[#F5D061] selection:text-[#0D0D11]">
      {/* 3D Scroll-Driven Hero Section with GSAP ScrollTrigger Multi-Stage Timeline */}
      <ChargeClubHero3D />

      {/* Franchise Opportunities Models & Revenue Section */}
      <ChargeClubPrestigePath />

      {/* Six Pillars of Franchise Success */}
      <ChargeClubPerks />

      {/* Final Franchise Call to Action */}
      <ChargeClubCTA />
    </div>
  );
}
