'use client';

import React from 'react';

interface IllustrationProps {
  className?: string;
  size?: number;
  highlight?: boolean;
}

/**
 * Modern Residential House with Solar Roof & EV Wall Charger
 * Colors: Green (#40E0D0) strokes, White (#FFFFFF) fills, Black (#000000) accents.
 */
export const HouseIllustration: React.FC<IllustrationProps> = ({
  className = '',
  size = 72,
  highlight = true,
}) => {
  return (
    <svg
      width={size}
      height={Math.round((size * 70) / 80)}
      viewBox="0 0 80 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-sm select-none ${className}`}
    >
      {/* Ground connector base */}
      <line x1="2" y1="68" x2="78" y2="68" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round" />

      {/* House Body */}
      <rect x="18" y="28" width="40" height="40" rx="3" fill="#FFFFFF" stroke="#40E0D0" strokeWidth="2" />

      {/* Modern Gable Roof */}
      <path
        d="M 12 30 L 38 8 L 64 30 Z"
        fill="#FFFFFF"
        stroke="#40E0D0"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Rooftop Solar Panels */}
      <path
        d="M 23 25 L 38 13 L 53 25"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line x1="38" y1="13" x2="38" y2="25" stroke="#000000" strokeWidth="1.2" />
      <line x1="30" y1="19" x2="30" y2="25" stroke="#40E0D0" strokeWidth="1" />
      <line x1="46" y1="19" x2="46" y2="25" stroke="#40E0D0" strokeWidth="1" />

      {/* Main Door */}
      <rect x="33" y="44" width="10" height="24" rx="1.5" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
      <circle cx="40" cy="56" r="1" fill="#40E0D0" />

      {/* Picture Windows */}
      <rect x="22" y="34" width="10" height="12" rx="1" fill="#FFFFFF" stroke="#000000" strokeWidth="1.2" />
      <line x1="27" y1="34" x2="27" y2="46" stroke="#40E0D0" strokeWidth="1" />
      <line x1="22" y1="40" x2="32" y2="40" stroke="#40E0D0" strokeWidth="1" />

      <rect x="44" y="34" width="10" height="12" rx="1" fill="#FFFFFF" stroke="#000000" strokeWidth="1.2" />
      <line x1="49" y1="34" x2="49" y2="46" stroke="#40E0D0" strokeWidth="1" />
      <line x1="44" y1="40" x2="54" y2="40" stroke="#40E0D0" strokeWidth="1" />

      {/* Home EV Wallbox Charger Unit */}
      <rect x="60" y="46" width="7" height="11" rx="1.5" fill="#FFFFFF" stroke="#40E0D0" strokeWidth="1.5" />
      <circle cx="63.5" cy="50" r="1.2" fill="#40E0D0" className={highlight ? '' : ''} />
      {/* Wallbox Cable */}
      <path
        d="M 63.5 57 C 67 60, 68 64, 65 67"
        stroke="#000000"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Minimal Eco Tree */}
      <line x1="8" y1="68" x2="8" y2="52" stroke="#000000" strokeWidth="1.5" />
      <circle cx="8" cy="46" r="7" fill="#FFFFFF" stroke="#40E0D0" strokeWidth="1.8" />
      <circle cx="8" cy="46" r="3" fill="#40E0D0" />
    </svg>
  );
};

/**
 * Multi-Unit Apartment Building with EV Charging
 */
export const ApartmentIllustration: React.FC<IllustrationProps> = ({
  className = '',
  size = 80,
  highlight = true,
}) => {
  return (
    <svg
      width={size}
      height={Math.round((size * 80) / 90)}
      viewBox="0 0 90 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-sm select-none ${className}`}
    >
      {/* Ground line */}
      <line x1="2" y1="78" x2="88" y2="78" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round" />

      {/* Main Apartment Block */}
      <rect x="18" y="16" width="48" height="62" rx="3" fill="#FFFFFF" stroke="#40E0D0" strokeWidth="2" />

      {/* Rooftop Solar Pergola */}
      <rect x="22" y="10" width="40" height="6" rx="1" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
      <line x1="30" y1="10" x2="30" y2="16" stroke="#40E0D0" strokeWidth="1.2" />
      <line x1="42" y1="10" x2="42" y2="16" stroke="#40E0D0" strokeWidth="1.2" />
      <line x1="54" y1="10" x2="54" y2="16" stroke="#40E0D0" strokeWidth="1.2" />

      {/* Window Rows (Floors 3, 2, 1) */}
      {[24, 40, 56].map((y, rowIdx) => (
        <g key={rowIdx}>
          <rect x="24" y={y} width="9" height="10" rx="1" fill="#FFFFFF" stroke="#000000" strokeWidth="1.2" />
          <line x1="24" y1={y + 5} x2="33" y2={y + 5} stroke="#40E0D0" strokeWidth="1" />
          <rect x="38" y={y} width="8" height="10" rx="1" fill="#FFFFFF" stroke="#000000" strokeWidth="1.2" />
          <line x1="38" y1={y + 5} x2="46" y2={y + 5} stroke="#40E0D0" strokeWidth="1" />
          <rect x="51" y={y} width="9" height="10" rx="1" fill="#FFFFFF" stroke="#000000" strokeWidth="1.2" />
          <line x1="51" y1={y + 5} x2="60" y2={y + 5} stroke="#40E0D0" strokeWidth="1" />
        </g>
      ))}

      {/* Double Glass Entrance */}
      <rect x="36" y="66" width="12" height="12" rx="1" fill="#FFFFFF" stroke="#40E0D0" strokeWidth="1.5" />
      <line x1="42" y1="66" x2="42" y2="78" stroke="#000000" strokeWidth="1.2" />

      {/* Charging Post in Parking Bay */}
      <rect x="70" y="56" width="6" height="22" rx="1.5" fill="#FFFFFF" stroke="#40E0D0" strokeWidth="1.5" />
      <circle cx="73" cy="62" r="1.5" fill="#40E0D0" className={highlight ? 'animate-ping' : ''} />
      <path d="M 76 66 C 81 70, 80 75, 76 77" stroke="#000000" strokeWidth="1.2" fill="none" />

      {/* Small tree left */}
      <line x1="9" y1="78" x2="9" y2="60" stroke="#000000" strokeWidth="1.5" />
      <circle cx="9" cy="54" r="6" fill="#FFFFFF" stroke="#40E0D0" strokeWidth="1.8" />
    </svg>
  );
};

/**
 * Commercial Office Skyscraper / Corporate Tower
 */
export const TowerIllustration: React.FC<IllustrationProps> = ({
  className = '',
  size = 76,
  highlight = true,
}) => {
  return (
    <svg
      width={size}
      height={Math.round((size * 100) / 80)}
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-sm select-none ${className}`}
    >
      {/* Ground line */}
      <line x1="2" y1="98" x2="78" y2="98" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round" />

      {/* Stepped Crown / Antenna */}
      <line x1="38" y1="2" x2="38" y2="14" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round" />
      <circle cx="38" cy="2" r="2" fill="#40E0D0" className={highlight ? 'animate-ping' : ''} />
      <rect x="30" y="14" width="16" height="6" rx="1" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />

      {/* Upper Tier */}
      <rect x="22" y="20" width="32" height="24" rx="2" fill="#FFFFFF" stroke="#40E0D0" strokeWidth="2" />
      <line x1="22" y1="28" x2="54" y2="28" stroke="#000000" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="22" y1="36" x2="54" y2="36" stroke="#000000" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="38" y1="20" x2="38" y2="44" stroke="#40E0D0" strokeWidth="1" />

      {/* Main Corporate Tower */}
      <rect x="14" y="44" width="48" height="54" rx="2" fill="#FFFFFF" stroke="#40E0D0" strokeWidth="2" />

      {/* Architectural Grid Windows */}
      {[52, 60, 68, 76, 84].map((y) => (
        <g key={y}>
          <line x1="18" y1={y} x2="58" y2={y} stroke="#000000" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="24" cy={y} r="1" fill="#40E0D0" />
          <circle cx="38" cy={y} r="1" fill="#40E0D0" />
          <circle cx="52" cy={y} r="1" fill="#40E0D0" />
        </g>
      ))}

      {/* Main Revolving Grand Entrance */}
      <rect x="30" y="86" width="16" height="12" rx="1.5" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
      <circle cx="38" cy="92" r="3" fill="#FFFFFF" stroke="#40E0D0" strokeWidth="1.2" />

      {/* Corporate Fleet Fast Charger at Side */}
      <rect x="64" y="74" width="7" height="24" rx="1.5" fill="#FFFFFF" stroke="#40E0D0" strokeWidth="1.5" />
      <circle cx="67.5" cy="80" r="1.5" fill="#40E0D0" />
      <rect x="66" y="85" width="3" height="5" fill="#000000" />
      <path d="M 71 88 C 75 92, 74 96, 71 97" stroke="#000000" strokeWidth="1.2" fill="none" />
    </svg>
  );
};

/**
 * City Skyline / Public Metro Charging Hub
 */
export const CityIllustration: React.FC<IllustrationProps> = ({
  className = '',
  size = 110,
  highlight = true,
}) => {
  return (
    <svg
      width={size}
      height={Math.round((size * 75) / 120)}
      viewBox="0 0 120 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-sm select-none ${className}`}
    >
      {/* Ground line connecting to circuit */}
      <line x1="2" y1="73" x2="118" y2="73" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round" />

      {/* Left Mid-rise Building */}
      <rect x="8" y="34" width="22" height="39" rx="2" fill="#FFFFFF" stroke="#40E0D0" strokeWidth="1.8" />
      <line x1="14" y1="42" x2="24" y2="42" stroke="#000000" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="14" y1="50" x2="24" y2="50" stroke="#000000" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="14" y1="58" x2="24" y2="58" stroke="#000000" strokeWidth="1" strokeDasharray="2 2" />

      {/* Central Spire Tower */}
      <line x1="46" y1="4" x2="46" y2="12" stroke="#40E0D0" strokeWidth="1.8" />
      <circle cx="46" cy="4" r="1.8" fill="#40E0D0" className={highlight ? 'animate-ping' : ''} />
      <path d="M 39 18 L 46 12 L 53 18 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
      <rect x="34" y="18" width="24" height="55" rx="2" fill="#FFFFFF" stroke="#40E0D0" strokeWidth="2" />
      {[26, 34, 42, 50, 58].map((y) => (
        <line key={y} x1="38" y1={y} x2="54" y2={y} stroke="#40E0D0" strokeWidth="1" strokeDasharray="3 2" />
      ))}

      {/* Diagonal Architecture Center-Right */}
      <path
        d="M 62 73 L 62 26 L 82 38 L 82 73 Z"
        fill="#FFFFFF"
        stroke="#40E0D0"
        strokeWidth="1.8"
      />
      <line x1="68" y1="42" x2="76" y2="42" stroke="#000000" strokeWidth="1.2" />
      <line x1="68" y1="52" x2="76" y2="52" stroke="#000000" strokeWidth="1.2" />
      <line x1="68" y1="62" x2="76" y2="62" stroke="#000000" strokeWidth="1.2" />

      {/* Right High-Rise */}
      <rect x="86" y="22" width="24" height="51" rx="2" fill="#FFFFFF" stroke="#40E0D0" strokeWidth="1.8" />
      {[30, 38, 46, 54, 62].map((y) => (
        <circle key={y} cx="98" cy={y} r="1.2" fill="#000000" />
      ))}

      {/* Metro EV Charging Hub Base */}
      <circle cx="20" cy="73" r="3" fill="#40E0D0" />
      <circle cx="100" cy="73" r="3" fill="#40E0D0" />
    </svg>
  );
};

/**
 * EVION 350 kW Ultra-Fast DC Charging Station Dispenser
 */
export const ChargingStationIllustration: React.FC<IllustrationProps> = ({
  className = '',
  size = 56,
  highlight = true,
}) => {
  return (
    <svg
      width={size}
      height={Math.round((size * 78) / 54)}
      viewBox="0 0 54 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-sm select-none ${className}`}
    >
      {/* Base mounting pad */}
      <rect x="10" y="72" width="34" height="5" rx="1.5" fill="#000000" stroke="#40E0D0" strokeWidth="1.5" />

      {/* Dispenser Body */}
      <rect x="14" y="10" width="26" height="62" rx="4" fill="#FFFFFF" stroke="#40E0D0" strokeWidth="2" />

      {/* Beveled Top Hood */}
      <path d="M 12 12 L 27 6 L 42 12 Z" fill="#FFFFFF" stroke="#40E0D0" strokeWidth="1.5" />

      {/* Glowing Status Light Strip (Green) */}
      <rect x="18" y="15" width="18" height="4" rx="2" fill="#40E0D0" className={highlight ? '' : ''} />

      {/* High-Resolution Screen */}
      <rect x="18" y="23" width="18" height="15" rx="2" fill="#000000" stroke="#40E0D0" strokeWidth="1.2" />
      {/* Battery icon on screen */}
      <rect x="22" y="28" width="10" height="5" rx="1" stroke="#40E0D0" strokeWidth="1" fill="none" />
      <rect x="32" y="29.5" width="1.5" height="2" fill="#40E0D0" />
      <rect x="24" y="29.5" width="5" height="2" fill="#40E0D0" />

      {/* RFID / Contactless Pad */}
      <circle cx="27" cy="45" r="3.5" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
      <path d="M 25 45 C 25 43.5, 29 43.5, 29 45" stroke="#40E0D0" strokeWidth="1" fill="none" />

      {/* "350 kW" Badge */}
      <rect x="19" y="52" width="16" height="6" rx="1.5" fill="#40E0D0" />
      <text x="27" y="56.5" fontSize="4.5" fontWeight="bold" fontFamily="monospace" fill="#000000" textAnchor="middle">
        350kW
      </text>

      {/* Left Heavy-Duty Liquid Cooled Cable */}
      <path
        d="M 14 36 C 8 40, 7 56, 12 68"
        stroke="#000000"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left Holstered Nozzle */}
      <rect x="11" y="32" width="3" height="6" rx="1" fill="#40E0D0" />

      {/* Right Heavy-Duty Liquid Cooled Cable */}
      <path
        d="M 40 36 C 46 40, 47 56, 42 68"
        stroke="#000000"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right Holstered Nozzle */}
      <rect x="40" y="32" width="3" height="6" rx="1" fill="#40E0D0" />
    </svg>
  );
};

/**
 * High-Power DC Charging Plug & Connector
 */
export const ChargingPlugIllustration: React.FC<IllustrationProps> = ({
  className = '',
  size = 40,
  highlight = true,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-sm select-none ${className}`}
    >
      {/* Outer Glow Halo */}
      <circle cx="22" cy="22" r="20" fill="#40E0D0" fillOpacity="0.12" stroke="#40E0D0" strokeWidth="1.2" strokeDasharray="3 3" />

      {/* Plug Handle */}
      <path
        d="M 12 16 L 24 16 L 30 22 L 30 28 L 22 34 L 12 34 Z"
        fill="#FFFFFF"
        stroke="#40E0D0"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Grip Texture */}
      <line x1="16" y1="21" x2="16" y2="29" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="21" x2="19" y2="29" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />

      {/* Dual DC Pins */}
      <rect x="30" y="21" width="6" height="3" rx="1" fill="#000000" stroke="#40E0D0" strokeWidth="0.8" />
      <rect x="30" y="26" width="6" height="3" rx="1" fill="#000000" stroke="#40E0D0" strokeWidth="0.8" />

      {/* Electric Bolt Accent */}
      <path
        d="M 23 20 L 21 24 L 24 24 L 22 28"
        stroke="#40E0D0"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={highlight ? '' : ''}
      />
    </svg>
  );
};

/**
 * Minimalist Side-View Electric Car
 * Clean #FFFFFF body, #000000 windows & tires, #40E0D0 rim & charge highlights.
 */
export const EVCarIllustration: React.FC<{
  className?: string;
  width?: number;
  height?: number;
  charging?: boolean;
}> = ({ className = '', width = 56, height = 24, charging = false }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
    >
      {/* Shadow */}
      <ellipse cx="32" cy="26" rx="26" ry="1.5" fill="#000000" fillOpacity="0.25" />

      {/* Sleek Aerodynamic Car Body */}
      <path
        d="M 6 22 
           C 6 20, 8 18, 11 18 
           L 15 18 
           C 18 11, 24 6, 32 6 
           L 44 6 
           C 51 6, 56 10, 60 17 
           L 61 20 
           C 61 22, 59 23, 56 23 
           L 50 23 
           C 49 19, 44 19, 43 23 
           L 21 23 
           C 20 19, 15 19, 14 23 
           L 9 23 
           C 7 23, 6 23, 6 22 Z"
        fill="#FFFFFF"
        stroke="#40E0D0"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Aerodynamic Tinted Canopy Glass (Black) */}
      <path
        d="M 20 16 
           L 30 9 
           L 43 9 
           C 47 9, 50 12, 52 16 Z"
        fill="#000000"
        stroke="#40E0D0"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* B-Pillar divider */}
      <line x1="34" y1="9" x2="33" y2="16" stroke="#40E0D0" strokeWidth="1.2" />

      {/* Front & Rear Wheels (Black rubber, Green center hub) */}
      {/* Front Wheel */}
      <circle cx="47" cy="22" r="5" fill="#000000" stroke="#40E0D0" strokeWidth="1.2" />
      <circle cx="47" cy="22" r="2.2" fill="#40E0D0" />

      {/* Rear Wheel */}
      <circle cx="17" cy="22" r="5" fill="#000000" stroke="#40E0D0" strokeWidth="1.2" />
      <circle cx="17" cy="22" r="2.2" fill="#40E0D0" />

      {/* LED Headlight (Crisp Green beam) */}
      <polygon points="59,18 62,19 61,21 57,20" fill="#40E0D0" />

      {/* LED Taillight (Crisp Red/Green strip) */}
      <line x1="7" y1="19" x2="10" y2="19" stroke="#40E0D0" strokeWidth="1.5" strokeLinecap="round" />

      {/* Fender Charge Port Accent */}
      <circle
        cx="53"
        cy="18"
        r="1.2"
        fill="#40E0D0"
        className={charging ? 'animate-ping' : ''}
      />
    </svg>
  );
};
