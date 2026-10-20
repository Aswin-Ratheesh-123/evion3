'use client';

import React, { useRef, useState, useEffect } from 'react';
import { generateRoundedPath, ChargingRoute } from './ChargingRoute';
import { AnimatedEVCar } from './AnimatedEVCar';

export type RoutePattern =
  | 'hero'
  | 'left-to-right'
  | 'right-to-left'
  | 'left-straight'
  | 'right-straight'
  | 'cta'
  | 'none';

interface ConnectedLineSectionProps {
  id: string;
  pattern?: RoutePattern;
  illustrationLeft?: React.ReactNode;
  illustrationRight?: React.ReactNode;
  illustrationCenter?: React.ReactNode;
  illustrationLeftOffset?: { x?: number; y?: number };
  illustrationRightOffset?: { x?: number; y?: number };
  illustrationCenterOffset?: { x?: number; y?: number };
  hasCar?: boolean;
  carDuration?: number;
  pauseCarAt?: number;
  showFlow?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * ConnectedLineSection wraps website sections to provide a structured,
 * continuous electrical route running along the section outer margins and whitespace.
 *
 * Ensures lines never cross text or interactive elements, provides responsive
 * boundary alignment, and renders architectural SVG illustrations and animated EV car.
 */
export const ConnectedLineSection: React.FC<ConnectedLineSectionProps> = ({
  id,
  pattern = 'none',
  illustrationLeft,
  illustrationRight,
  illustrationCenter,
  illustrationLeftOffset,
  illustrationRightOffset,
  illustrationCenterOffset,
  hasCar = false,
  carDuration = 26,
  pauseCarAt = 0.35,
  showFlow = true,
  className = '',
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      setDimensions({
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      });
    };

    measure();

    const ro = new ResizeObserver(() => {
      measure();
    });
    ro.observe(el);

    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const { width, height } = dimensions;

  // Responsive outer margin channels
  const isDesktop = width >= 1024;
  const isTablet = width >= 640 && width < 1024;

  const maxContentWidth = 1280;
  const sideMargin = Math.max(16, (width - maxContentWidth) / 2);

  // Keep route running along outer whitespace framing content
  const routeLeft = Math.round(isDesktop ? Math.max(20, sideMargin - 32) : 14);
  const routeRight = Math.round(isDesktop ? Math.min(width - 20, width - sideMargin + 32) : width - 14);

  // Turn coordinate inside dedicated section bottom whitespace
  const bottomTurnY = Math.round(Math.max(height - 42, height * 0.92));

  // Generate waypoints based on pattern
  let points: [number, number][] = [];
  let terminals: [number, number][] = [];

  if (mounted && width > 0 && height > 0) {
    if (pattern === 'hero') {
      const heroStartY = isDesktop ? 100 : 70;
      points = [
        [routeRight, heroStartY],
        [routeRight, bottomTurnY],
        [routeLeft, bottomTurnY],
        [routeLeft, height],
      ];
      terminals = [
        [routeRight, heroStartY],
        [routeLeft, height],
      ];
    } else if (pattern === 'left-to-right') {
      points = [
        [routeLeft, 0],
        [routeLeft, bottomTurnY],
        [routeRight, bottomTurnY],
        [routeRight, height],
      ];
      terminals = [
        [routeLeft, 0],
        [routeRight, height],
      ];
    } else if (pattern === 'right-to-left') {
      points = [
        [routeRight, 0],
        [routeRight, bottomTurnY],
        [routeLeft, bottomTurnY],
        [routeLeft, height],
      ];
      terminals = [
        [routeRight, 0],
        [routeLeft, height],
      ];
    } else if (pattern === 'left-straight') {
      points = [
        [routeLeft, 0],
        [routeLeft, height],
      ];
      terminals = [
        [routeLeft, 0],
        [routeLeft, height],
      ];
    } else if (pattern === 'right-straight') {
      points = [
        [routeRight, 0],
        [routeRight, height],
      ];
      terminals = [
        [routeRight, 0],
        [routeRight, height],
      ];
    } else if (pattern === 'cta') {
      const ctaMidY = Math.round(height * 0.44);
      const ctaCenterX = Math.round(width / 2);
      const ctaTargetY = Math.round(height * 0.72);
      points = [
        [routeLeft, 0],
        [routeLeft, ctaMidY],
        [ctaCenterX, ctaMidY],
        [ctaCenterX, ctaTargetY],
      ];
      terminals = [
        [routeLeft, 0],
        [ctaCenterX, ctaTargetY],
      ];
    }
  }

  const pathD = points.length >= 2 ? generateRoundedPath(points, isDesktop ? 28 : 18) : '';
  const pathId = `route-${id}`;

  // Illustration anchor points
  const leftIllX = routeLeft + (illustrationLeftOffset?.x ?? (isDesktop ? -20 : -10));
  const leftIllY = (pattern === 'right-to-left' || pattern === 'hero' ? bottomTurnY - 60 : 60) + (illustrationLeftOffset?.y ?? 0);

  const rightIllX = routeRight + (illustrationRightOffset?.x ?? (isDesktop ? -45 : -35));
  const rightIllY = (pattern === 'left-to-right' ? bottomTurnY - 60 : 60) + (illustrationRightOffset?.y ?? 0);

  const centerIllX = Math.round(width / 2) + (illustrationCenterOffset?.x ?? -28);
  const centerIllY = (pattern === 'cta' ? Math.round(height * 0.72) - 40 : bottomTurnY - 40) + (illustrationCenterOffset?.y ?? 0);

  return (
    <div ref={containerRef} className={`relative w-full overflow-hidden ${className}`}>
      {/* Decorative Network Layer: Non-blocking pointer events */}
      {mounted && width > 0 && height > 0 && pattern !== 'none' && (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <svg
            className="w-full h-full"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ChargingRoute
              id={pathId}
              pathD={pathD}
              strokeWidth={isDesktop ? 2.4 : 1.8}
              showEnergyFlow={showFlow}
              terminals={terminals}
            >
              {hasCar && (
                <AnimatedEVCar
                  pathId={pathId}
                  duration={carDuration}
                  width={isDesktop ? 54 : 44}
                  height={isDesktop ? 24 : 19}
                  pauseAt={pauseCarAt}
                />
              )}
            </ChargingRoute>
          </svg>

          {/* Architectural SVG Illustrations positioned along route whitespace */}
          {illustrationLeft && (
            <div
              className="absolute pointer-events-none transition-opacity duration-300 hidden sm:block"
              style={{
                left: `${leftIllX}px`,
                top: `${leftIllY}px`,
              }}
            >
              {illustrationLeft}
            </div>
          )}

          {illustrationRight && (
            <div
              className="absolute pointer-events-none transition-opacity duration-300 hidden sm:block"
              style={{
                left: `${rightIllX}px`,
                top: `${rightIllY}px`,
              }}
            >
              {illustrationRight}
            </div>
          )}

          {illustrationCenter && (
            <div
              className="absolute pointer-events-none transition-opacity duration-300"
              style={{
                left: `${centerIllX}px`,
                top: `${centerIllY}px`,
              }}
            >
              {illustrationCenter}
            </div>
          )}
        </div>
      )}

      {/* Actual Section Content */}
      <div className="relative z-20 w-full">{children}</div>
    </div>
  );
};
