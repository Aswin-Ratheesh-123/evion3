export type StationStatus = 'Available' | 'Charging' | 'Busy' | 'Maintenance';
export type ConnectorType = 'CCS2' | 'Type 2' | 'GB/T' | 'CHAdeMO';
export type SpeedCategory = 'Ultra-Fast 350kW' | 'DC Fast 180kW' | 'Fast 60kW' | 'AC 22kW';

export interface Station {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  latitude?: number;
  longitude?: number;
  powerKw: number;
  speedCategory: SpeedCategory;
  chargingSpeed?: string;
  chargerType?: string;
  status: StationStatus;
  availability?: StationStatus;
  totalPlugs: number;
  availablePlugs: number;
  connectors: ConnectorType[];
  pricePerKwh: number;
  open247: boolean;
  amenities: string[];
  directionsUrl?: string;
  distanceKm?: number;
  isPopular?: boolean;
  isVerified?: boolean;
  isSample?: boolean;
}

export interface Solution {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  description: string;
  heroImage: string;
  accentColor?: string;
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  features: {
    title: string;
    description: string;
    iconName?: string;
  }[];
  specs: {
    label: string;
    value: string;
  }[];
  useCases: string[];
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Drivers & Charging' | 'Business & Property' | 'Technology & Hardware' | 'Billing & Fleets';
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  statHighlight?: string;
  rating: number;
}

export interface ROIInputs {
  chargingPoints: number;
  dailySessionsPerPoint: number;
  avgKwhPerSession: number;
  tariffPerKwh: number;
  electricityCostPerKwh: number;
  operatingDaysPerMonth: number;
}

export interface ROIOutputs {
  monthlySessions: number;
  monthlyKwhDelivered: number;
  grossMonthlyRevenue: number;
  netMonthlyProfit: number;
  annualRevenue: number;
  annualProfit: number;
  annualCo2OffsetTons: number;
}

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  location: string;
  interestedIn: 'Home Charging' | 'Business Charging' | 'Commercial & Retail' | 'Fleet Depot' | 'Highway Hub Partnership' | 'General Inquiry';
  message: string;
}
