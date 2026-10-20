/**
 * Central Image Repository for EVION
 * High quality remote imagery from Unsplash and Pexels.
 * Curated for premium automotive, high-tech EV charging infrastructure, modern architecture, and energy grids.
 */

export const images = {
  // Hero section - Luxury EV approaching architectural EVION charging pavilion
  hero: "/images/evion_hero_clean_1792313327981.jpg",
  heroAlt: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=85&w=2072&auto=format&fit=crop",
  heroMobile: "/images/evion_hero_clean_1792313327981.jpg",
  heroCarFront: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=85&w=2070&auto=format&fit=crop",

  // Charging Hardware & Technology Showcase
  chargerPillar: "/images/evion_charger_hardware_1792313350773.jpg",
  chargerConnector: "https://images.unsplash.com/photo-1558441719-2347b737469a?q=85&w=2000&auto=format&fit=crop",
  chargerNight: "/images/evion_charger_hardware_1792313350773.jpg",

  // Solutions Hub & Subsections
  homeCharging: "/images/evion_home_solution_1792313369819.jpg",
  homeChargerDetail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=2070&auto=format&fit=crop",
  
  businessCharging: "/images/evion_workplace_solution_1792313391907.jpg",
  corporateHeadquarters: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=2070&auto=format&fit=crop",
  
  commercialRealEstate: "/images/evion_public_solution_1792313415740.jpg",
  destinationMall: "https://images.unsplash.com/photo-1567449303078-57ad995bd301?q=85&w=2070&auto=format&fit=crop",
  
  fleetDepot: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=85&w=2070&auto=format&fit=crop",
  fleetLogistics: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=85&w=2075&auto=format&fit=crop",

  // Energy & Grid Infrastructure
  energyGrid: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=85&w=2070&auto=format&fit=crop",
  solarCleanEnergy: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=85&w=2072&auto=format&fit=crop",

  // Locations & Highway Hubs
  highwayCorridor: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=85&w=2070&auto=format&fit=crop",
  urbanHub: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=85&w=2070&auto=format&fit=crop",

  // Final Call to Action
  ctaBackground: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=85&w=2070&auto=format&fit=crop",
  
  // About & Sustainability
  teamWorkspace: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=85&w=2069&auto=format&fit=crop",
  natureRenewable: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=85&w=2070&auto=format&fit=crop",
} as const;

export type ImageKey = keyof typeof images;
