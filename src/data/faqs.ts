import { FAQItem } from '@/types';

export const faqsData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Drivers & Charging',
    question: 'Where can I find EVION charging stations?',
    answer: 'You can locate all live EVION stations in real-time using the interactive map on our website or through the EVION mobile app (available on iOS and Android). The map displays real-time charger availability, charging speeds (up to 350 kW), connector compatibility, live tariffs, and nearby amenities.',
  },
  {
    id: 'faq-2',
    category: 'Drivers & Charging',
    question: 'What electric vehicles are compatible with EVION chargers?',
    answer: 'EVION chargers are engineered to be 100% universal. Our ultra-fast DC stations support standard CCS2, Type 2, GB/T, and CHAdeMO connectors with adapters. Whether you drive a luxury EV (Porsche Taycan, Audi e-tron, BMW i7, Mercedes EQS), a Tesla (with CCS adapter), a Hyundai Ioniq 5 / Kia EV6, or domestic market electric vehicles like Tata Nexon EV, Mahindra XUV400, MG ZS EV, and BYD Seal, EVION is fully compatible.',
  },
  {
    id: 'faq-3',
    category: 'Drivers & Charging',
    question: 'How fast do EVION Ultra-Fast chargers charge?',
    answer: 'Our 350 kW DC Ultra-Fast liquid-cooled chargers can add up to 300 km of driving range in approximately 12–15 minutes on 800V-architecture vehicles. Standard 180 kW DC chargers deliver an 80% charge in about 20–30 minutes, while our 22 kW AC Home and Destination chargers provide an overnight or work-day top up.',
  },
  {
    id: 'faq-4',
    category: 'Drivers & Charging',
    question: 'How much does EVION charging cost and how do I pay?',
    answer: 'Charging tariffs vary slightly based on charger speed tier and location, typically ranging between ₹16 to ₹21 per kWh. EVION supports seamless digital payments including UPI, Credit/Debit cards, Apple Pay, Google Pay, RFID card tap-and-charge, and automated ISO 15118 Plug & Charge for compatible vehicles.',
  },
  {
    id: 'faq-5',
    category: 'Drivers & Charging',
    question: 'How do I start a charging session at an EVION station?',
    answer: 'Starting a session is frictionless: (1) Park at an available bay, (2) Plug the connector into your vehicle, (3) Scan the QR code on the charger screen via the EVION app or tap your RFID card, and (4) Charging begins instantly. The station screen and app display real-time kW speed, energy delivered, and current cost.',
  },
  {
    id: 'faq-6',
    category: 'Business & Property',
    question: 'Can commercial businesses and property owners install EVION chargers?',
    answer: 'Yes! EVION partners with corporate offices, IT parks, retail malls, hotels, hospitals, and residential residential communities. We offer multiple turnkey deployment models ranging from Zero-Capex revenue-sharing agreements to full enterprise hardware purchases managed via EVION Cloud OS.',
  },
  {
    id: 'faq-7',
    category: 'Business & Property',
    question: 'How does revenue sharing work for property partners?',
    answer: 'Under our partnership models, EVION handles site assessment, electrical engineering, hardware installation, grid approvals, software, and 24/7 maintenance. You receive a monthly revenue share based on every kWh dispensed and session fee collected at your site.',
  },
  {
    id: 'faq-8',
    category: 'Business & Property',
    question: 'How does EVION prevent electrical overload at my building?',
    answer: 'Our proprietary Dynamic Load Balancing (DLB) software continuously monitors your building transformer capacity in real-time. If elevator or air-conditioning loads spike, EVION automatically modulates charger output to eliminate the risk of breaker trips or peak-demand penalty surcharges.',
  },
  {
    id: 'faq-9',
    category: 'Technology & Hardware',
    question: 'What is Plug & Charge technology (ISO 15118)?',
    answer: 'Plug & Charge is the ultimate charging convenience. When you plug an ISO 15118-compliant electric vehicle into an EVION charger, the vehicle and station communicate securely via encrypted certificates. Authentication, charging, and billing happen autonomously without touching an app, card, or phone.',
  },
  {
    id: 'faq-10',
    category: 'Technology & Hardware',
    question: 'How are EVION chargers cooled during high-power 350 kW charging?',
    answer: 'Our ultra-fast dispensers utilize active closed-loop liquid cooling with a dielectric fluid circulating through the charging cable right to the connector pins. This allows cables to remain thin, lightweight, and easy to handle while safely handling continuous 500-amp currents.',
  },
  {
    id: 'faq-11',
    category: 'Billing & Fleets',
    question: 'Do you offer specialized solutions for commercial fleets and logistics?',
    answer: 'Yes. EVION Fleet OS is built specifically for commercial delivery fleets, taxis, and electric bus operators. Features include depot smart overnight charging, schedule-aware vehicle pre-conditioning, automated telematics integration, centralized monthly invoicing, and priority charging access across our public superhub network.',
  },
  {
    id: 'faq-12',
    category: 'Billing & Fleets',
    question: 'What is EVION’s network reliability and uptime commitment?',
    answer: 'EVION guarantees a 99.9% hardware availability SLA across our public and enterprise charging network. Our automated diagnostics platform performs continuous sub-second health checks, automated self-reset sequences, and 24/7 monitoring backed by rapid on-site technician dispatch.',
  },
];
