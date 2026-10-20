'use client';

import React from 'react';
import { EVCarIllustration } from './NetworkIllustrations';

interface AnimatedEVCarProps {
  pathId: string;
  duration?: number;
  width?: number;
  height?: number;
  pauseAt?: number; // 0 to 1 point along the path where the car pauses to charge
  pauseDurationRatio?: number; // e.g. 0.15 (15% of total cycle)
}

/**
 * Animated Electric Vehicle that follows an SVG route path with native SVG animateMotion.
 * Accurately rotates around corners (rotate="auto"), pauses briefly at charging stations,
 * and maintains zero layout shift or React re-render overhead.
 */
export const AnimatedEVCar: React.FC<AnimatedEVCarProps> = ({
  pathId,
  duration = 24,
  width = 54,
  height = 24,
  pauseAt = 0.35,
  pauseDurationRatio = 0.14,
}) => {
  // Compute keyPoints and keyTimes for brief charging pause
  const p1 = Math.max(0.1, Math.min(0.8, pauseAt));
  const t1 = p1 * 0.85;
  const t2 = Math.min(0.95, t1 + pauseDurationRatio);

  const keyPoints = `0; ${p1}; ${p1}; 1`;
  const keyTimes = `0; ${t1.toFixed(2)}; ${t2.toFixed(2)}; 1`;

  return (
    <g className="pointer-events-none select-none">
      <animateMotion
        dur={`${duration}s`}
        repeatCount="indefinite"
        rotate="auto"
        keyPoints={keyPoints}
        keyTimes={keyTimes}
        calcMode="linear"
      >
        <mpath href={`#${pathId}`} />
      </animateMotion>

      {/* Car centered on route: x centered, wheels on path */}
      <g transform={`translate(-${Math.round(width / 2)}, -${height - 3})`}>
        {/* Subtle ground charging glow beneath car */}
        <ellipse
          cx={Math.round(width / 2)}
          cy={height - 2}
          rx={Math.round(width * 0.45)}
          ry={3}
          fill="#40E0D0"
          fillOpacity="0.35"
          filter="blur(2px)"
        />

        <EVCarIllustration
          width={width}
          height={height}
          charging={true}
        />
      </g>
    </g>
  );
};
