import { Solution } from '@/types';
import { images } from '@/config/images';

export const solutionsData: Record<string, Solution> = {
  home: {
    id: 'home',
    slug: 'home',
    title: 'EVION Home One',
    eyebrow: 'RESIDENTIAL INTELLIGENCE',
    subtitle: 'Wake up to a full charge, powered by clean energy.',
    description: 'Designed for residential garages and private driveways, EVION Home One combines sleek architectural design, intelligent dynamic load balancing, and seamless solar integration to deliver effortless overnight charging.',
    heroImage: images.homeCharging,
    accentColor: '#40E0D0',
    metrics: [
      { label: 'Charging Speed', value: '22 kW', description: 'Up to 3x faster than standard wall outlets' },
      { label: 'Energy Savings', value: 'Up to 40%', description: 'Smart off-peak time-of-use scheduling' },
      { label: 'Solar Match', value: '100% Green', description: 'Surplus solar power routing capability' },
      { label: 'Warranty', value: '5 Years', description: 'Comprehensive hardware & replacement cover' },
    ],
    features: [
      {
        title: 'Dynamic Home Load Balancing',
        description: 'Constantly senses household electrical load in real-time, automatically throttling charge power during heavy appliance use to prevent breaker trips.',
      },
      {
        title: 'Solar Inverter Sync',
        description: 'Directly hooks into rooftop photovoltaic systems to channel only free, surplus solar energy directly into your vehicle battery.',
      },
      {
        title: 'EVION Mobile Companion',
        description: 'Schedule charging during lowest electricity tariff windows, monitor real-time kWh consumption, and receive instant push notifications.',
      },
      {
        title: 'Weatherproof IP65 Enclosure',
        description: 'Engineered with aircraft-grade anodized aluminum to withstand extreme monsoon rains, dust storms, and ambient temperatures up to 55°C.',
      },
    ],
    specs: [
      { label: 'Power Output', value: '7.4 kW (Single-phase) / 22 kW (3-Phase)' },
      { label: 'Connector', value: 'Type 2 Tethered (7.5m ultra-flexible cable)' },
      { label: 'Connectivity', value: 'Wi-Fi 6, Bluetooth 5.2, 4G LTE Backup' },
      { label: 'Protection', value: 'Integrated 6mA DC residual current detection, OVP, UVP' },
      { label: 'Mounting', value: 'Wall Mount or Stainless Architectural Pedestal' },
    ],
    useCases: ['Single-family homes', 'Luxury villas', 'Private multi-car garages', 'Gated farmhouses'],
  },

  business: {
    id: 'business',
    slug: 'business',
    title: 'EVION Workplace & Enterprise',
    eyebrow: 'COMMERCIAL REAL ESTATE',
    subtitle: 'Turn parking into a revenue-generating amenity.',
    description: 'Attract top-tier tenants, provide premium employee amenities, and monetize your corporate real estate with turnkey smart charging infrastructure managed entirely through EVION Cloud OS.',
    heroImage: images.businessCharging,
    accentColor: '#40E0D0',
    metrics: [
      { label: 'Tenant Retention', value: '+34%', description: 'High-value amenity for modern EV owners' },
      { label: 'Hardware Uptime', value: '99.9%', description: 'Guaranteed mission-critical SLA' },
      { label: 'Revenue Share', value: 'Up to 85%', description: 'Flexible tariff control & automatic payouts' },
      { label: 'Deployment Time', value: '14 Days', description: 'Turnkey site survey, permitting & install' },
    ],
    features: [
      {
        title: 'Multi-Tenant Tariff Orchestration',
        description: 'Set custom billing profiles: free charging for employees, discounted rates for tenants, and market-rate public access during weekend hours.',
      },
      {
        title: 'Automated Billing & Instant Payouts',
        description: 'Drivers pay effortlessly via Apple Pay, Google Pay, UPI, RFID cards, or EVION App. Funds settle directly into your corporate bank account weekly.',
      },
      {
        title: 'Cluster Load Optimization',
        description: 'Install 50+ charging bays on limited grid supply without costly transformer upgrades. Intelligent algorithms dynamically distribute power across active vehicles.',
      },
      {
        title: 'Corporate ESG & Carbon Reporting',
        description: 'Download audit-ready Scope 2 & Scope 3 carbon displacement reports directly from the EVION Enterprise portal.',
      },
    ],
    specs: [
      { label: 'Power Output', value: 'Dual-port 22 kW AC / 60 kW DC Fast' },
      { label: 'Protocol', value: 'OCPP 2.0.1 & ISO 15118 (Plug & Charge)' },
      { label: 'Access Control', value: 'RFID / NFC, QR Code, Automated Fleet Whitelist' },
      { label: 'Telemetry', value: 'Real-time cellular 4G/5G, Sub-second metering accuracy 0.5S' },
      { label: 'Display', value: '10.1-inch High-brightness anti-glare interactive touch HUD' },
    ],
    useCases: ['Corporate IT parks', 'Office towers', 'Law & financial firms', 'Hospitality headquarters'],
  },

  commercial: {
    id: 'commercial',
    slug: 'commercial',
    title: 'EVION Retail & Destination',
    eyebrow: 'PUBLIC INFRASTRUCTURE',
    subtitle: 'Capture high-spending EV drivers and increase dwell time.',
    description: 'Modern EV drivers plan their shopping, dining, and leisure trips around premium charging hubs. Position your commercial centers, malls, and highway corridors as high-volume EV destination superhubs.',
    heroImage: images.commercialRealEstate,
    accentColor: '#40E0D0',
    metrics: [
      { label: 'Average Dwell Time', value: '+52 Min', description: 'EV drivers spend more while recharging' },
      { label: 'Charging Speed', value: '350 kW', description: 'Adds 300+ km of range in under 15 minutes' },
      { label: 'App Footfall', value: '500k+ Users', description: 'Direct in-app discovery on EVION Map' },
      { label: 'Capex Options', value: 'Zero-Capex', description: 'Fully funded revenue-share partner models' },
    ],
    features: [
      {
        title: 'Ultra-Fast 350 kW Liquid-Cooled Dispensers',
        description: 'Designed for fast turnarounds, allowing drivers to recharge their batteries from 10% to 80% in the time it takes to grab a cup of coffee.',
      },
      {
        title: 'Digital Out-Of-Home (DOOH) Media Screen',
        description: 'Integrated 24-inch 4K outdoor displays provide high-impact branded advertising and targeted merchant promotion opportunities.',
      },
      {
        title: 'Smart Loyalty Program Integration',
        description: 'Reward mall shoppers with discounted charging credits when validating purchase receipts at retail stores.',
      },
      {
        title: '24/7 Remote Monitoring & Autonomous Diagnostics',
        description: 'Self-healing software detects connector cable anomalies, automated reset sequences, and 4-hour on-site dispatch guarantees.',
      },
    ],
    specs: [
      { label: 'Output Architecture', value: 'Modular 180 kW – 350 kW DC Ultra-Fast' },
      { label: 'Connectors', value: 'Dual CCS2 Liquid-Cooled 500A cables' },
      { label: 'Cooling System', value: 'Active dielectric fluid closed-loop chiller' },
      { label: 'Payment Gateway', value: 'Contactless EMV chip/PIN, UPI QR, Tap & Go' },
      { label: 'Dimensions', value: 'Slim 450mm footprint with integrated cable management' },
    ],
    useCases: ['Shopping malls', 'Highway rest stops', 'Luxury hotels & resorts', 'Airports & transit hubs'],
  },

  fleet: {
    id: 'fleet',
    slug: 'fleet',
    title: 'EVION Fleet Depot Solutions',
    eyebrow: 'COMMERCIAL FLEET ELECTRIFICATION',
    subtitle: 'Maximum vehicle uptime. Minimum peak energy costs.',
    description: 'Electrifying commercial delivery vans, corporate rideshare fleets, and municipal transit buses requires precision depot energy management. EVION Fleet OS keeps your vehicles rolling on schedule at the lowest per-kilometer electricity cost.',
    heroImage: images.fleetDepot,
    accentColor: '#40E0D0',
    metrics: [
      { label: 'TCO Reduction', value: '38%', description: 'Lower operational cost per kilometer' },
      { label: 'Depot Uptime', value: '99.99%', description: 'Failover grid and battery storage ready' },
      { label: 'Peak Shaving', value: '-45%', description: 'Reduces peak demand utility penalties' },
      { label: 'Telematics Sync', value: '100% Fleet', description: 'Integration with Samsara, Geotab & custom APIs' },
    ],
    features: [
      {
        title: 'Depot Schedule-Aware Smart Charging',
        description: 'Automatically synchronizes charging schedules with vehicle departure timetables and routes, ensuring every vehicle is pre-conditioned and fully charged on departure.',
      },
      {
        title: 'BESS (Battery Energy Storage) Integration',
        description: 'Pair high-power depot chargers with stationary battery storage to charge during low-cost night rates and discharge during peak daytime fleet turnarounds.',
      },
      {
        title: 'Automated Health & Battery SOH Telemetry',
        description: 'Monitors vehicle battery state-of-health, cell temperature, and degradation curves during fast DC charging cycles to extend battery pack longevity.',
      },
      {
        title: 'Single-Pane-Of-Glass Fleet Portal',
        description: 'Comprehensive dashboard showing fleet state-of-charge, active kilowatt draw, historical kWh consumption, cost analytics, and automated driver identification.',
      },
    ],
    specs: [
      { label: 'Depot Capacity', value: '10 to 500+ Simultaneous Charging Bays' },
      { label: 'Dispenser Types', value: 'Overhead Pantographs, Dual CCS2 Pedestals, Heavy Vehicle DC' },
      { label: 'Software API', value: 'RESTful Fleet Telematics & OCPP 2.0.1 Webhook Engine' },
      { label: 'Redundancy', value: 'N+1 Modular Power Converter Architecture' },
      { label: 'Certifications', value: 'CE, UL 2202, ISO 15118-20, IEC 61851' },
    ],
    useCases: ['E-commerce delivery fleets', 'Taxi & rideshare hubs', 'Municipal electric bus depots', 'Port & airport ground handling'],
  },
};
