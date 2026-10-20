/**
 * EVION Mobile Application Showcase Configuration
 * 
 * Central configuration for app store badges, feature items,
 * and mobile application presentation settings.
 */

export interface AppStoreButtonConfig {
  storeName: string;
  badgeText: string;
  url: string;
  isPublished: boolean;
  comingSoonText: string;
}

export interface AppFeatureItem {
  number: string;
  title: string;
  description: string;
  iconName: 'MapPin' | 'Route' | 'Zap' | 'Activity' | 'Smartphone' | 'Navigation';
}

export interface ImpactStatisticItem {
  id: string;
  rawValue: number;
  suffix: string;
  label: string;
  supportingText: string;
}

export interface AppShowcaseConfig {
  sectionId: string;
  eyebrow: string;
  heading: {
    brand: string;
    tagline: string;
    highlight: string;
  };
  supportingText: string;
  stores: {
    googlePlay: AppStoreButtonConfig;
    appStore: AppStoreButtonConfig;
  };
  features: AppFeatureItem[];
  impactStatistics: ImpactStatisticItem[];
  phoneMockups: {
    phone1: {
      title: string;
      subtitle: string;
      batteryPercent: number;
      powerKw: number;
      remainingMin: number;
      kwhDelivered: number;
      rangeAddedKm: number;
      vehicleModel: string;
      stationName: string;
      plugType: string;
    };
    phone2: {
      title: string;
      stationName: string;
      locationTag: string;
      distanceText: string;
      availablePlugs: number;
      totalPlugs: number;
      powerRating: string;
      connectorTypes: string[];
      rating: number;
      reviewCount: number;
    };
  };
}

export const appShowcaseConfig: AppShowcaseConfig = {
  sectionId: 'app',
  eyebrow: '07 — EVION MOBILE APPLICATION',
  heading: {
    brand: 'EVION.',
    tagline: 'YOUR CHARGING COMPANION.',
    highlight: 'CHARGING COMPANION',
  },
  supportingText:
    'Discover charging locations, plan your journeys, and stay connected to a smarter electric mobility experience with the EVION app.',
  
  stores: {
    googlePlay: {
      storeName: 'Google Play',
      badgeText: 'GET IT ON',
      // Real listing URL when published, leave empty if under development
      url: '',
      isPublished: false,
      comingSoonText: 'Coming Soon',
    },
    appStore: {
      storeName: 'App Store',
      badgeText: 'Download on the',
      // Real listing URL when published, leave empty if under development
      url: '',
      isPublished: false,
      comingSoonText: 'Coming Soon',
    },
  },

  features: [
    {
      number: '01',
      title: 'FIND CHARGING STATIONS',
      description: 'Discover charging locations through the EVION interface.',
      iconName: 'MapPin',
    },
    {
      number: '02',
      title: 'PLAN YOUR JOURNEY',
      description: 'Explore charging locations along your intended journey.',
      iconName: 'Route',
    },
    {
      number: '03',
      title: 'CHARGING INFORMATION',
      description: 'View available information about supported charging stations.',
      iconName: 'Zap',
    },
    {
      number: '04',
      title: 'REAL-TIME STATUS',
      description: 'See station availability when reliable live data is available.',
      iconName: 'Activity',
    },
    {
      number: '05',
      title: 'CONNECTED EXPERIENCE',
      description: 'Access supported EVION app features in one place.',
      iconName: 'Smartphone',
    },
    {
      number: '06',
      title: 'SIMPLE USER EXPERIENCE',
      description: 'Enjoy an intuitive and easy-to-navigate mobile interface.',
      iconName: 'Navigation',
    },
  ],

  impactStatistics: [
    {
      id: 'clients',
      rawValue: 6100,
      suffix: '+',
      label: 'HAPPY CLIENTS',
      supportingText: 'Building a better electric mobility experience.',
    },
    {
      id: 'cities',
      rawValue: 379,
      suffix: '+',
      label: 'CITIES',
      supportingText: 'Expanding access to electric vehicle charging.',
    },
    {
      id: 'power',
      rawValue: 120,
      suffix: ' kW',
      label: 'CHARGING POWER',
      supportingText: 'High-power charging capability.',
    },
  ],

  phoneMockups: {
    phone1: {
      title: 'Active Session',
      subtitle: 'Connected to Hyperhub 04',
      batteryPercent: 78,
      powerKw: 284,
      remainingMin: 14,
      kwhDelivered: 48.6,
      rangeAddedKm: 312,
      vehicleModel: 'Porsche Taycan 4S • 800V',
      stationName: 'EVION Flagship Indiranagar',
      plugType: 'CCS2 Ultra-Fast 350kW',
    },
    phone2: {
      title: 'Explore Network',
      stationName: 'EVION Hyperhub — Central Boulevard',
      locationTag: 'Indiranagar 100ft Rd',
      distanceText: '1.4 km • 4 min away',
      availablePlugs: 6,
      totalPlugs: 8,
      powerRating: '350 kW Ultra-Fast',
      connectorTypes: ['CCS2', 'Type 2'],
      rating: 4.9,
      reviewCount: 342,
    },
  },
};
