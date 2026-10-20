'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Station } from '@/types';

// Dynamic import with ssr: false so Leaflet is only loaded in the browser
const DynamicEVChargingMap = dynamic(
  () => import('./EVChargingMap').then((mod) => mod.EVChargingMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[520px] sm:h-[620px] lg:h-[700px] rounded-3xl bg-[#080B0E] border border-[#FFFFFF]/15 flex flex-col items-center justify-center gap-4 text-[#FFFFFF]">
        <div className="relative flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border-2 border-[#40E0D0]/20 border-t-[#40E0D0] animate-spin" />
          <div className="absolute w-6 h-6 rounded-full bg-[#40E0D0]/20 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#40E0D0] animate-ping" />
          </div>
        </div>
        <div className="text-center space-y-1">
          <p className="text-xs font-mono tracking-widest text-[#40E0D0] uppercase font-bold">
            INITIALIZING EVION RADAR MATRIX
          </p>
          <p className="text-[11px] font-mono text-[#FFFFFF]/50">
            Connecting real-time geographic telemetry & tiles...
          </p>
        </div>
      </div>
    ),
  }
);

interface MapWrapperProps {
  stations: Station[];
  initialCity?: string;
  onStationSelect?: (station: Station | null) => void;
  selectedStationId?: string | null;
  className?: string;
}

export const MapWrapper: React.FC<MapWrapperProps> = (props) => {
  return <DynamicEVChargingMap {...props} />;
};
