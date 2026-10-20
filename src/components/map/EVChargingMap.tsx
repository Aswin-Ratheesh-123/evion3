'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Supercluster from 'supercluster';
import {
  Search,
  Plus,
  Minus,
  RotateCcw,
  Zap,
  Navigation,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  X,
  Play,
  ArrowUpRight,
  SlidersHorizontal,
} from 'lucide-react';
import { Station } from '@/types';
import { CITY_CONFIGS, CityConfig } from '@/data/stations';

interface EVChargingMapProps {
  stations: Station[];
  initialCity?: string;
  onStationSelect?: (station: Station | null) => void;
  selectedStationId?: string | null;
  className?: string;
}

export const EVChargingMap: React.FC<EVChargingMapProps> = ({
  stations,
  initialCity = 'Bengaluru',
  onStationSelect,
  selectedStationId,
  className = '',
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const superclusterRef = useRef<Supercluster | null>(null);
  const hasAnimatedRef = useRef<boolean>(false);
  const userInteractedRef = useRef<boolean>(false);

  const [activeCity, setActiveCity] = useState<string>(initialCity);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isMapReady, setIsMapReady] = useState<boolean>(false);

  const cityConfig: CityConfig = CITY_CONFIGS[activeCity] || CITY_CONFIGS.Bengaluru;

  // Filter stations based on city, query, and filter tag
  const filteredStations = React.useMemo(() => {
    return stations.filter((station) => {
      // City match
      const matchesCity =
        activeCity === 'All' ||
        activeCity === 'All Cities' ||
        station.city.toLowerCase() === activeCity.toLowerCase();

      // Query match
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        station.name.toLowerCase().includes(q) ||
        station.address.toLowerCase().includes(q) ||
        station.city.toLowerCase().includes(q);

      // Filter tag match
      let matchesTag = true;
      if (activeFilter === 'Ultra-Fast 350kW') matchesTag = station.powerKw >= 350;
      else if (activeFilter === 'DC Fast 180kW') matchesTag = station.powerKw >= 180 && station.powerKw < 350;
      else if (activeFilter === 'Available Now') matchesTag = station.status === 'Available' && station.availablePlugs > 0;
      else if (activeFilter === 'CCS2') matchesTag = station.connectors.includes('CCS2');

      return matchesCity && matchesQuery && matchesTag;
    });
  }, [stations, activeCity, searchQuery, activeFilter]);

  // Sync selectedStation with parent if provided
  useEffect(() => {
    if (selectedStationId) {
      const match = stations.find((s) => s.id === selectedStationId);
      if (match) {
        setSelectedStation(match);
      }
    }
  }, [selectedStationId, stations]);

  // Initialize Supercluster
  useEffect(() => {
    const sc = new Supercluster({
      radius: 55,
      maxZoom: 16,
      minPoints: 2,
    });

    const points: Array<GeoJSON.Feature<GeoJSON.Point, { station: Station }>> = filteredStations.map((station) => ({
      type: 'Feature',
      properties: {
        station,
      },
      geometry: {
        type: 'Point',
        coordinates: [
          station.longitude ?? station.coordinates.lng,
          station.latitude ?? station.coordinates.lat,
        ],
      },
    }));

    sc.load(points);
    superclusterRef.current = sc;

    if (mapInstanceRef.current && isMapReady) {
      renderMarkers();
    }
  }, [filteredStations, isMapReady]);

  // Render clusters and markers
  const renderMarkers = useCallback(() => {
    const map = mapInstanceRef.current;
    const sc = superclusterRef.current;
    const layer = markersLayerRef.current;
    if (!map || !sc || !layer) return;

    layer.clearLayers();

    const bounds = map.getBounds();
    const bbox: [number, number, number, number] = [
      bounds.getWest(),
      bounds.getSouth(),
      bounds.getEast(),
      bounds.getNorth(),
    ];
    const zoom = Math.floor(map.getZoom());

    const clusters = sc.getClusters(bbox, zoom);

    clusters.forEach((cluster) => {
      const [lng, lat] = cluster.geometry.coordinates;
      const isCluster = cluster.properties && 'cluster' in cluster.properties && cluster.properties.cluster;

      if (isCluster) {
        const pointCount = cluster.properties.point_count;
        const clusterId = cluster.properties.cluster_id;

        // Custom Cluster Marker
        const clusterIcon = L.divIcon({
          className: 'evion-cluster-marker-wrap',
          html: `
            <div class="evion-cluster-marker" role="button" aria-label="Charging Station Cluster of ${pointCount} locations" tabindex="0">
              <span class="pulse-ring"></span>
              <div class="cluster-inner">
                <span class="cluster-count">${pointCount}</span>
                <span class="cluster-label">EV</span>
              </div>
            </div>
          `,
          iconSize: [46, 46],
          iconAnchor: [23, 23],
        });

        const marker = L.marker([lat, lng], { icon: clusterIcon });
        marker.on('click', () => {
          userInteractedRef.current = true;
          const expansionZoom = Math.min(sc.getClusterExpansionZoom(clusterId), 16);
          map.flyTo([lat, lng], expansionZoom, {
            duration: 0.9,
            easeLinearity: 0.3,
          });
        });

        layer.addLayer(marker);
      } else {
        // Individual Station Marker
        const station: Station = (cluster.properties as any).station;
        if (!station) return;

        const isSelected = selectedStation?.id === station.id;
        const isAvailable = station.status === 'Available';

        const stationIcon = L.divIcon({
          className: 'evion-station-marker-wrap',
          html: `
            <div class="evion-station-pin ${isSelected ? 'selected' : ''} ${isAvailable ? 'available' : 'busy'}" role="button" aria-label="${station.name}" tabindex="0">
              <div class="pin-ring ${isAvailable ? 'pulse' : ''}"></div>
              <div class="pin-core">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="pin-zap">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              ${station.powerKw >= 350 ? '<div class="ultra-badge">350kW</div>' : ''}
            </div>
          `,
          iconSize: [38, 38],
          iconAnchor: [19, 19],
        });

        const marker = L.marker([lat, lng], { icon: stationIcon });
        marker.on('click', () => {
          userInteractedRef.current = true;
          setSelectedStation(station);
          if (onStationSelect) onStationSelect(station);
          map.panTo([lat, lng], { animate: true, duration: 0.5 });
        });

        layer.addLayer(marker);
      }
    });
  }, [selectedStation, onStationSelect]);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const initialCenter = cityConfig.initialCenter || [13.08, 77.58];
    const initialZoom = cityConfig.initialZoom || 8.5;

    // Create Leaflet Map Instance
    const map = L.map(mapContainerRef.current, {
      center: initialCenter,
      zoom: initialZoom,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false, // Prevents hijacking page scroll
      touchZoom: true,
      fadeAnimation: true,
      zoomAnimation: true,
    });

    // Elegant Light Map Surface (CartoDB Positron: crisp light aesthetic with clear roads & labels)
    const cartoLayer = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        subdomains: 'abcd',
        maxZoom: 19,
        crossOrigin: true,
      }
    );

    // Fallback if tiles fail
    cartoLayer.on('tileerror', () => {
      console.warn('Carto tile error, fallback active');
    });

    cartoLayer.addTo(map);

    // Attribution
    L.control
      .attribution({
        position: 'bottomright',
        prefix: false,
      })
      .addAttribution('&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank" rel="noreferrer">CARTO</a>')
      .addTo(map);

    const markersLayer = L.layerGroup().addTo(map);
    markersLayerRef.current = markersLayer;
    mapInstanceRef.current = map;

    // Listen to user map interactions to avoid interrupting user gestures
    map.on('dragstart', () => {
      userInteractedRef.current = true;
    });

    map.on('zoomstart', () => {
      userInteractedRef.current = true;
    });

    map.on('moveend', () => {
      renderMarkers();
    });

    map.on('zoomend', () => {
      renderMarkers();
    });

    setIsMapReady(true);

    // Enable scrollWheelZoom on click/focus
    map.on('focus', () => {
      map.scrollWheelZoom.enable();
    });

    // Cleanup
    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // SCROLL-TRIGGERED CINEMATIC ZOOM ANIMATION (Section 4 - Most Important)
  useEffect(() => {
    if (!mapContainerRef.current || !mapInstanceRef.current || !isMapReady) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger when section reaches viewport threshold and hasn't animated yet
          if (entry.isIntersecting && !hasAnimatedRef.current && !userInteractedRef.current) {
            hasAnimatedRef.current = true;
            setIsAnimating(true);

            const map = mapInstanceRef.current;
            if (!map) return;

            // Check reduced motion preference
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            const targetCenter = cityConfig.center;
            const targetZoom = cityConfig.zoom;

            if (prefersReducedMotion) {
              map.setView(targetCenter, targetZoom);
              setIsAnimating(false);
              renderMarkers();
            } else {
              // Smooth hyperbolic flyTo camera transition
              map.flyTo(targetCenter, targetZoom, {
                duration: 2.8,
                easeLinearity: 0.22,
                noMoveStart: true,
              });

              map.once('moveend', () => {
                setIsAnimating(false);
                renderMarkers();
              });
            }
          }
        });
      },
      {
        threshold: 0.25, // Starts transition when 25% of map section enters viewport
      }
    );

    observer.observe(mapContainerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isMapReady, cityConfig, renderMarkers]);

  // Replay cinematic flight animation
  const handleReplayAnimation = useCallback(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    userInteractedRef.current = false;
    setIsAnimating(true);

    const initialCenter = cityConfig.initialCenter || [13.08, 77.58];
    const initialZoom = cityConfig.initialZoom || 8.5;

    // Reset to overview first
    map.setView(initialCenter, initialZoom, { animate: true });

    // Then fly into target city smoothly
    setTimeout(() => {
      map.flyTo(cityConfig.center, cityConfig.zoom, {
        duration: 3.0,
        easeLinearity: 0.22,
      });

      map.once('moveend', () => {
        setIsAnimating(false);
        renderMarkers();
      });
    }, 450);
  }, [cityConfig, renderMarkers]);

  // Handle City Change
  const handleSelectCity = useCallback(
    (cityName: string) => {
      setActiveCity(cityName);
      setIsSearchOpen(false);
      setSearchQuery('');
      setSelectedStation(null);
      userInteractedRef.current = true;

      const map = mapInstanceRef.current;
      const targetConfig = CITY_CONFIGS[cityName];
      if (map && targetConfig) {
        map.flyTo(targetConfig.center, targetConfig.zoom, {
          duration: 2.2,
          easeLinearity: 0.25,
        });
      }
    },
    []
  );

  // Reset to default city overview
  const handleResetView = useCallback(() => {
    const map = mapInstanceRef.current;
    if (!map) return;
    userInteractedRef.current = true;
    map.flyTo(cityConfig.center, cityConfig.zoom, {
      duration: 1.6,
      easeLinearity: 0.25,
    });
  }, [cityConfig]);

  // Zoom controls
  const handleZoomIn = useCallback(() => {
    const map = mapInstanceRef.current;
    if (!map) return;
    userInteractedRef.current = true;
    map.zoomIn();
  }, []);

  const handleZoomOut = useCallback(() => {
    const map = mapInstanceRef.current;
    if (!map) return;
    userInteractedRef.current = true;
    map.zoomOut();
  }, []);

  // Calculate live active station counts
  const activeStationsCount = React.useMemo(() => {
    return filteredStations.filter(
      (s) => s.status === 'Available' || s.availability === 'Available'
    ).length;
  }, [filteredStations]);

  return (
    <div className={`relative w-full overflow-hidden select-none ${className}`}>
      {/* Map Container */}
      <div
        ref={mapContainerRef}
        id="evion-charging-map-canvas"
        className="w-full h-[520px] sm:h-[620px] lg:h-[700px] rounded-3xl overflow-hidden bg-[#F3F4F6] relative z-10 border border-[#FFFFFF]/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      />

      {/* OVERLAY: Top Bar with City Search & Active Station Counter */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-[1000] flex items-start justify-between gap-3 pointer-events-none">
        {/* City Search Box (Top-Left) */}
        <div className="relative pointer-events-auto max-w-sm w-full">
          <div className="flex items-center gap-2 bg-[#000000]/80 backdrop-blur-xl border border-[#FFFFFF]/20 text-[#FFFFFF] rounded-2xl px-4 py-2.5 shadow-2xl transition-all duration-300 focus-within:border-[#40E0D0] focus-within:ring-2 focus-within:ring-[#40E0D0]/30">
            <Search className="w-4 h-4 text-[#40E0D0] shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              placeholder="Search city or location"
              aria-label="Search city or location"
              className="w-full bg-transparent text-xs sm:text-sm text-[#FFFFFF] placeholder-[#FFFFFF]/50 focus:outline-none font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#FFFFFF]/60 hover:text-[#FFFFFF] cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Autocomplete / City Quick Selector Dropdown */}
          {isSearchOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#050709]/95 backdrop-blur-2xl border border-[#FFFFFF]/15 rounded-2xl p-3 shadow-2xl z-50 text-[#FFFFFF] space-y-2">
              <div className="flex items-center justify-between px-2 pt-1 pb-1.5 border-b border-[#FFFFFF]/10 text-[10px] font-mono text-[#40E0D0] uppercase tracking-wider font-bold">
                <span>Select Configured City</span>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-[#FFFFFF]/50 hover:text-[#FFFFFF]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Configured City Buttons */}
              <div className="grid grid-cols-2 gap-1.5">
                {Object.keys(CITY_CONFIGS).map((cityName) => {
                  const cityStationCount = stations.filter(
                    (s) => s.city.toLowerCase() === cityName.toLowerCase()
                  ).length;

                  return (
                    <button
                      key={cityName}
                      onClick={() => handleSelectCity(cityName)}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        activeCity === cityName
                          ? 'bg-[#40E0D0] text-[#000000] font-bold shadow-md'
                          : 'bg-[#FFFFFF]/5 text-[#FFFFFF]/80 hover:bg-[#FFFFFF]/15 hover:text-[#FFFFFF]'
                      }`}
                    >
                      <span>{cityName}</span>
                      <span className="text-[10px] font-mono opacity-70">
                        {cityStationCount}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Station Matches when user types */}
              {searchQuery.trim().length > 0 && (
                <div className="pt-2 border-t border-[#FFFFFF]/10 max-h-48 overflow-y-auto space-y-1">
                  <div className="text-[10px] font-mono text-[#FFFFFF]/50 px-2 uppercase">
                    Matching Charging Stations ({filteredStations.length})
                  </div>
                  {filteredStations.length === 0 ? (
                    <div className="p-3 text-xs text-[#FFFFFF]/60 text-center font-sans">
                      No operational stations found in &quot;{searchQuery}&quot;. Select Bengaluru or another configured city.
                    </div>
                  ) : (
                    filteredStations.slice(0, 5).map((station) => (
                      <button
                        key={station.id}
                        onClick={() => {
                          setSelectedStation(station);
                          setIsSearchOpen(false);
                          if (mapInstanceRef.current) {
                            mapInstanceRef.current.flyTo(
                              [
                                station.latitude ?? station.coordinates.lat,
                                station.longitude ?? station.coordinates.lng,
                              ],
                              14,
                              { duration: 1.5 }
                            );
                          }
                        }}
                        className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-[#FFFFFF]/10 transition-colors flex items-center justify-between text-xs cursor-pointer"
                      >
                        <div className="truncate pr-2">
                          <div className="text-[#FFFFFF] font-medium truncate">{station.name}</div>
                          <div className="text-[10px] text-[#FFFFFF]/50 truncate">{station.address}</div>
                        </div>
                        <span className="text-[10px] font-mono text-[#40E0D0] shrink-0 font-bold">
                          {station.powerKw}kW
                        </span>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Active Station Counter Card (Top-Right) */}
        <div className="pointer-events-auto flex items-center gap-3 bg-[#000000]/80 backdrop-blur-xl border border-[#FFFFFF]/20 text-[#FFFFFF] rounded-2xl px-4 py-2.5 shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#40E0D0] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#40E0D0]" />
            </span>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm sm:text-base font-black font-mono text-[#FFFFFF]">
                  {activeStationsCount}
                </span>
                <span className="text-[10px] font-mono text-[#40E0D0] font-bold uppercase tracking-wider">
                  Active
                </span>
              </div>
              <span className="text-[10px] text-[#FFFFFF]/70 uppercase tracking-widest font-mono">
                {activeCity} Stations
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* OVERLAY: Right-Side Compact Map Controls */}
      <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-[1000] flex flex-col gap-2 pointer-events-auto">
        <div className="flex flex-col rounded-2xl bg-[#000000]/85 backdrop-blur-xl border border-[#FFFFFF]/20 p-1 shadow-2xl text-[#FFFFFF]">
          {/* Zoom In */}
          <button
            onClick={handleZoomIn}
            aria-label="Zoom in map"
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#40E0D0] hover:text-[#000000] transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
          </button>

          {/* Zoom Out */}
          <button
            onClick={handleZoomOut}
            aria-label="Zoom out map"
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#40E0D0] hover:text-[#000000] transition-colors cursor-pointer border-t border-[#FFFFFF]/10"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>

        {/* Reset / Center View Button */}
        <button
          onClick={handleResetView}
          aria-label="Reset map view to target city"
          title="Reset to City Center"
          className="w-10 h-10 flex items-center justify-center rounded-2xl bg-[#000000]/85 backdrop-blur-xl border border-[#FFFFFF]/20 text-[#FFFFFF] hover:bg-[#40E0D0] hover:text-[#000000] shadow-2xl transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Replay Cinematic Fly-in Animation */}
        <button
          onClick={handleReplayAnimation}
          aria-label="Replay cinematic zoom animation"
          title="Replay Cinematic Fly-in"
          className="w-10 h-10 flex items-center justify-center rounded-2xl bg-[#000000]/85 backdrop-blur-xl border border-[#40E0D0]/40 text-[#40E0D0] hover:bg-[#40E0D0] hover:text-[#000000] shadow-2xl transition-colors cursor-pointer group"
        >
          <Play className="w-4 h-4 group-hover:fill-current" />
        </button>
      </div>

      {/* OVERLAY: Selected Station Details Popup Card (Bottom-Left) */}
      {selectedStation && (
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-auto sm:max-w-md w-auto z-[1000] pointer-events-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#050709]/95 backdrop-blur-2xl border-2 border-[#40E0D0]/60 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-[#FFFFFF] space-y-4">
            {/* Header with Title & Close Button */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                 
                  <span className="text-[10px] font-mono tracking-widest text-[#40E0D0] font-bold uppercase">
                    {selectedStation.isVerified ? 'VERIFIED EVION SUPERHUB' : 'EVION NETWORK'}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#FFFFFF] leading-snug">
                  {selectedStation.name}
                </h4>
              </div>

              <button
                onClick={() => setSelectedStation(null)}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/25 text-[#FFFFFF] transition-colors cursor-pointer shrink-0"
                aria-label="Close station details"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 text-xs text-[#FFFFFF]/75 font-sans">
              <MapPin className="w-3.5 h-3.5 text-[#40E0D0] shrink-0 mt-0.5" />
              <span>{selectedStation.address}</span>
            </div>

            {/* Station Specs Grid */}
            <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-2xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 text-xs font-mono">
              <div>
                <div className="text-[10px] text-[#FFFFFF]/50 uppercase font-medium">Power</div>
                <div className="text-[#40E0D0] font-black text-sm">{selectedStation.powerKw} kW</div>
              </div>
              <div>
                <div className="text-[10px] text-[#FFFFFF]/50 uppercase font-medium">Available</div>
                <div className="text-[#FFFFFF] font-black text-sm">
                  {selectedStation.availablePlugs}/{selectedStation.totalPlugs} Bays
                </div>
              </div>
              <div>
                <div className="text-[10px] text-[#FFFFFF]/50 uppercase font-medium">Tariff</div>
                <div className="text-[#FFFFFF] font-black text-sm">₹{selectedStation.pricePerKwh}/kWh</div>
              </div>
            </div>

            {/* Connectors & Amenities */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {selectedStation.connectors.map((c) => (
                <span
                  key={c}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-[#40E0D0]/15 text-[#40E0D0] border border-[#40E0D0]/30"
                >
                  {c}
                </span>
              ))}
              {selectedStation.open247 && (
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-[#FFFFFF]/10 text-[#FFFFFF]/80">
                  24/7 OPEN
                </span>
              )}
            </div>

            {/* Directions Link Button */}
            <div className="pt-2">
              <a
                href={
                  selectedStation.directionsUrl ||
                  `https://www.google.com/maps/dir/?api=1&destination=${selectedStation.latitude ?? selectedStation.coordinates.lat},${selectedStation.longitude ?? selectedStation.coordinates.lng}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#40E0D0] text-[#000000] text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#FFFFFF] transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>GET DIRECTIONS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* OVERLAY: Cinematic Fly-in Indicator HUD */}
      {isAnimating && (
        <div className="absolute inset-0 pointer-events-none z-[990] flex items-center justify-center bg-[#000000]/25 backdrop-blur-[1px] transition-opacity duration-700">
          <div className="px-6 py-3 rounded-full bg-[#000000]/85 border border-[#40E0D0] text-[#FFFFFF] shadow-2xl flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#40E0D0] animate-ping" />
            <span className="text-xs font-mono tracking-widest text-[#FFFFFF] uppercase font-bold">
              CINEMATIC DESCENT INTO {activeCity.toUpperCase()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
