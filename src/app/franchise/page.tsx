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
    'EVION Franchise Opportunities',
    'EV charging station franchise',
    'commercial EV charging business',
    'franchise enquiry',
    'electric vehicle charging partner',
    '350kW turnkey infrastructure',
  ],
  openGraph: {
    title: 'EVION Franchise Opportunities | EV Charging Station Franchise & Partnership',
    description:
      'Partner with EVION to bring intelligent electric vehicle charging solutions to more locations. Join our growing network and explore franchise opportunities in the expanding electric mobility industry.',
    type: 'website',
    url: 'https://evion.energy/franchise',
  },
};

export default function FranchiseRoutePage() {
  return (
    <div className="relative min-h-screen bg-[#0D0D11] text-[#FFFFFF] selection:bg-[#40E0D0] selection:text-[#000000]">
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
