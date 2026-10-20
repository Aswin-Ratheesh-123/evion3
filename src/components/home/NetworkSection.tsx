'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Zap, Layers, RefreshCw, Radio } from 'lucide-react';

interface NetworkNode {
  id: string;
  name: string;
  category: 'residential' | 'commercial' | 'public' | 'fleet' | 'workplace';
  x: number;
  y: number;
  status: string;
  power: string;
  ports: number;
}

const networkNodes: NetworkNode[] = [
  { id: 'n1', name: 'West Coast Transit Hub', category: 'public', x: 180, y: 140, status: 'Active', power: '350 kW', ports: 16 },
  { id: 'n2', name: 'Silicon Valley Innovation Depot', category: 'workplace', x: 260, y: 220, status: 'Active', power: '150 kW', ports: 24 },
  { id: 'n3', name: 'Metro Gateway Logistics Hub', category: 'fleet', x: 410, y: 190, status: 'Active', power: '400 kW', ports: 32 },
  { id: 'n4', name: 'Hilltop Residential Microgrid', category: 'residential', x: 320, y: 310, status: 'Optimal', power: '22 kW', ports: 8 },
  { id: 'n5', name: 'Great Lakes Arterial Hub', category: 'public', x: 620, y: 170, status: 'Active', power: '350 kW', ports: 12 },
  { id: 'n6', name: 'Downtown Commercial Plaza', category: 'commercial', x: 740, y: 250, status: 'Active', power: '180 kW', ports: 18 },
  { id: 'n7', name: 'Southern Distribution Depot', category: 'fleet', x: 580, y: 380, status: 'Active', power: '350 kW', ports: 40 },
  { id: 'n8', name: 'Northeast Express Corridor', category: 'public', x: 890, y: 130, status: 'Active', power: '350 kW', ports: 20 },
  { id: 'n9', name: 'Coastal Marina & Hospitality Hub', category: 'commercial', x: 860, y: 290, status: 'Active', power: '150 kW', ports: 14 },
  { id: 'n10', name: 'Suburban Community Cluster', category: 'residential', x: 720, y: 360, status: 'Optimal', power: '22 kW', ports: 10 },
];

const categoryTabs = [
  { id: 'all', label: 'ALL LOCATIONS' },
  { id: 'residential', label: 'RESIDENTIAL' },
  { id: 'commercial', label: 'COMMERCIAL' },
  { id: 'public', label: 'PUBLIC' },
  { id: 'fleet', label: 'FLEET' },
];

export const NetworkSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeNode, setActiveNode] = useState<NetworkNode | null>(networkNodes[0]);

  const filteredNodes = selectedCategory === 'all'
    ? networkNodes
    : networkNodes.filter((n) => n.category === selectedCategory || (selectedCategory === 'commercial' && n.category === 'workplace'));

  return (
    <section
      id="network"
      className="relative w-full bg-[#FFFFFF] text-[#000000] py-32 sm:py-44 overflow-hidden border-b border-[#000000]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-[#000000]/10 pb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#40E0D0]" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#000000] uppercase">
                06 — INFRASTRUCTURE
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#000000] uppercase">
              ONE NETWORK. <br />
              <span className="font-semibold text-[#40E0D0]">MORE POSSIBILITIES.</span>
            </h2>
          </div>

          <div className="space-y-2 max-w-md">
            <p className="text-base sm:text-lg text-[#000000]/80 font-normal leading-relaxed">
              Conceptual network topology showcasing interconnected charging nodes across urban, transit, and residential zones.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#000000]/50">
              <Radio className="w-3.5 h-3.5 text-[#40E0D0] " />
              <span>ILLUSTRATIVE TOPOLOGY / TELEMETRY READY</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-[#000000] text-[#FFFFFF] shadow-md'
                  : 'bg-[#F1F5F9] text-[#000000]/70 hover:bg-[#E2E8F0]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Stylized Network Canvas */}
        <div className="relative w-full aspect-[16/9] max-h-[560px] rounded-3xl bg-[#000000] border border-[#000000]/20 overflow-hidden shadow-2xl flex items-center justify-center">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          {/* SVG Connecting Topology */}
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Connecting Electrical Lines */}
            <g stroke="#40E0D0" strokeWidth="1" strokeOpacity="0.4">
              <line x1="180" y1="140" x2="260" y2="220" strokeDasharray="4 4" />
              <line x1="260" y1="220" x2="320" y2="310" />
              <line x1="260" y1="220" x2="410" y2="190" strokeWidth="1.5" strokeOpacity="0.7" />
              <line x1="410" y1="190" x2="620" y2="170" strokeWidth="2" strokeOpacity="0.8" />
              <line x1="620" y1="170" x2="740" y2="250" />
              <line x1="620" y1="170" x2="890" y2="130" strokeWidth="2" strokeOpacity="0.8" />
              <line x1="740" y1="250" x2="860" y2="290" />
              <line x1="410" y1="190" x2="580" y2="380" strokeDasharray="4 4" />
              <line x1="580" y1="380" x2="720" y2="360" />
              <line x1="720" y1="360" x2="860" y2="290" />
            </g>

            {/* Glowing pulses on lines */}
            <circle cx="515" cy="180" r="3" fill="#40E0D0" className="animate-ping" />
            <circle cx="755" cy="150" r="3" fill="#40E0D0" className="animate-ping" />

            {/* Nodes */}
            {filteredNodes.map((node) => {
              const isSelected = activeNode?.id === node.id;

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  className="cursor-pointer group"
                  onClick={() => setActiveNode(node)}
                >
                  {/* Outer pulse */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isSelected ? 16 : 10}
                    fill="#40E0D0"
                    fillOpacity={isSelected ? 0.35 : 0.15}
                    className="transition-all duration-300"
                  />

                  {/* Core dot */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isSelected ? 6 : 4}
                    fill={isSelected ? '#40E0D0' : '#FFFFFF'}
                    stroke="#000000"
                    strokeWidth="1.5"
                    className="transition-all duration-300"
                  />

                  {/* Node Name Label */}
                  <text
                    x="0"
                    y="22"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fillOpacity={isSelected ? 1 : 0.6}
                    fontSize="9"
                    fontFamily="monospace"
                    fontWeight={isSelected ? 'bold' : 'normal'}
                  >
                    {node.name}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Active Node Detail HUD Card */}
          {activeNode && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              key={activeNode.id}
              className="absolute bottom-6 left-6 right-6 sm:right-auto sm:w-80 p-5 rounded-2xl bg-[#000000]/85 backdrop-blur-md border border-[#40E0D0]/40 text-[#FFFFFF] shadow-2xl space-y-3 z-20"
            >
              <div className="flex items-center justify-between border-b border-[#FFFFFF]/10 pb-2">
                <span className="text-[10px] font-mono tracking-widest text-[#40E0D0] uppercase font-bold">
                  NODE TELEMETRY
                </span>
                <span className="text-[10px] font-mono text-[#40E0D0] bg-[#40E0D0]/10 px-2 py-0.5 rounded-full border border-[#40E0D0]/30">
                  {activeNode.status}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-semibold tracking-wide uppercase">
                  {activeNode.name}
                </h4>
                <div className="text-xs text-[#FFFFFF]/60 font-mono mt-0.5">
                  Category: {activeNode.category.toUpperCase()}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#FFFFFF]/10 text-xs font-mono">
                <div>
                  <span className="text-[#FFFFFF]/50 text-[10px]">POWER RATING</span>
                  <div className="text-[#40E0D0] font-bold">{activeNode.power}</div>
                </div>
                <div>
                  <span className="text-[#FFFFFF]/50 text-[10px]">CHARGING BAYS</span>
                  <div className="text-[#FFFFFF] font-bold">{activeNode.ports} Available</div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* 4 Category Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#000000]/10 hover:border-[#40E0D0] transition-colors space-y-3">
            <div className="text-xs font-mono font-bold text-[#40E0D0]">01 — RESIDENTIAL</div>
            <h4 className="text-lg font-light text-[#000000] uppercase">RESIDENTIAL CHARGING</h4>
            <p className="text-xs text-[#000000]/70 font-light leading-relaxed">
              Private home systems with intelligent solar synchronisation and overnight grid load optimization.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#000000]/10 hover:border-[#40E0D0] transition-colors space-y-3">
            <div className="text-xs font-mono font-bold text-[#40E0D0]">02 — COMMERCIAL</div>
            <h4 className="text-lg font-light text-[#000000] uppercase">COMMERCIAL CHARGING</h4>
            <p className="text-xs text-[#000000]/70 font-light leading-relaxed">
              Workplaces, business campuses, and commercial properties with multi-tenant access and billing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#000000]/10 hover:border-[#40E0D0] transition-colors space-y-3">
            <div className="text-xs font-mono font-bold text-[#40E0D0]">03 — PUBLIC</div>
            <h4 className="text-lg font-light text-[#000000] uppercase">PUBLIC CHARGING</h4>
            <p className="text-xs text-[#000000]/70 font-light leading-relaxed">
              High-power transit arteries and destination charging plazas for rapid highway replenishment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#000000]/10 hover:border-[#40E0D0] transition-colors space-y-3">
            <div className="text-xs font-mono font-bold text-[#40E0D0]">04 — FLEET</div>
            <h4 className="text-lg font-light text-[#000000] uppercase">FLEET CHARGING</h4>
            <p className="text-xs text-[#000000]/70 font-light leading-relaxed">
              Mission-critical power orchestration for logistics, public transit, and commercial electric fleets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
