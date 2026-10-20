'use client';

import React from 'react';

/**
 * Generate a mathematically smooth SVG path with rounded corners from a list of waypoints.
 */
export function generateRoundedPath(points: [number, number][], radius = 24): string {
  if (points.length < 2) return '';
  if (points.length === 2) {
    return `M ${points[0][0]} ${points[0][1]} L ${points[1][0]} ${points[1][1]}`;
  }

  let d = `M ${points[0][0]} ${points[0][1]}`;

  for (let i = 1; i < points.length - 1; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const next = points[i + 1];

    const d0x = prev[0] - curr[0];
    const d0y = prev[1] - curr[1];
    const d1x = next[0] - curr[0];
    const d1y = next[1] - curr[1];

    const len0 = Math.hypot(d0x, d0y);
    const len1 = Math.hypot(d1x, d1y);

    if (len0 === 0 || len1 === 0) continue;

    // Prevent radius from exceeding half the shortest segment
    const r = Math.min(radius, len0 / 2, len1 / 2);

    const startX = curr[0] + (d0x / len0) * r;
    const startY = curr[1] + (d0y / len0) * r;
    const endX = curr[0] + (d1x / len1) * r;
    const endY = curr[1] + (d1y / len1) * r;

    d += ` L ${startX.toFixed(1)} ${startY.toFixed(1)}`;
    d += ` Q ${curr[0].toFixed(1)} ${curr[1].toFixed(1)} ${endX.toFixed(1)} ${endY.toFixed(1)}`;
  }

  const last = points[points.length - 1];
  d += ` L ${last[0].toFixed(1)} ${last[1].toFixed(1)}`;
  return d;
}

interface ChargingRouteProps {
  id: string;
  pathD: string;
  strokeWidth?: number;
  showEnergyFlow?: boolean;
  terminals?: [number, number][];
  children?: React.ReactNode;
}

/**
 * High-performance SVG route segment with base #40E0D0 line,
 * animated flowing energy pulse, and connection terminal nodes.
 */
export const ChargingRoute: React.FC<ChargingRouteProps> = ({
  id,
  pathD,
  strokeWidth = 2.2,
  showEnergyFlow = true,
  terminals = [],
  children,
}) => {
  if (!pathD) return null;

  return (
    <g className="charging-route-group select-none">
      {/* Subtle outer glow track */}
      <path
        d={pathD}
        fill="none"
        stroke="#40E0D0"
        strokeWidth={strokeWidth + 3}
        strokeOpacity="0.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Base Solid Brand Line (Turquoise #40E0D0) */}
      <path
        id={id}
        d={pathD}
        fill="none"
        stroke="#40E0D0"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Animated Flowing Electrical Current Highlight */}
      {showEnergyFlow && (
        <path
          d={pathD}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth={strokeWidth + 0.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-energy-flow opacity-90"
        />
      )}

      {/* Connection Terminals / Terminal Nodes */}
      {terminals.map(([tx, ty], idx) => (
        <g key={idx} transform={`translate(${tx}, ${ty})`}>
          <circle cx="0" cy="0" r="4.5" fill="#FFFFFF" stroke="#40E0D0" strokeWidth="2" />
          <circle cx="0" cy="0" r="2" fill="#40E0D0" />
        </g>
      ))}

      {/* Embedded elements (such as animated cars or icons) */}
      {children}
    </g>
  );
};
