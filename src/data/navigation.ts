export interface NavLink {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface NavDropdown {
  label: string;
  href?: string;
  items: NavLink[];
}

export const navLinks: (NavLink | NavDropdown)[] = [
  {
    label: 'OVERVIEW',
    href: '/#overview',
  },
  {
    label: 'CHARGING SOLUTIONS',
    href: '/#solutions',
    items: [
      {
        label: 'Solutions Overview',
        href: '/#solutions',
        description: 'Explore our complete enterprise & residential charging architecture',
      },
      {
        label: 'Home Charging',
        href: '/#solutions',
        description: 'EVION Home One architectural residential charging',
      },
      {
        label: 'Workplace Charging',
        href: '/#solutions',
        description: 'Commercial campus and office charging infrastructure',
      },
      {
        label: 'Public Charging',
        href: '/#solutions',
        description: 'High-power destination and highway charging hubs',
      },
      {
        label: 'Fleet Depots',
        href: '/#solutions',
        description: 'Electrification and power management for commercial fleets',
      },
    ],
  },
  {
    label: 'TECHNOLOGY',
    href: '/#technology',
  },
  {
    label: 'OUR NETWORK',
    href: '/#network',
  },
  {
    label: 'FRANCHISE',
    href: '/franchise',
    badge: 'PARTNER',
  },
  {
    label: 'ABOUT',
    href: '/#about',
  },
  {
    label: 'CONTACT',
    href: '/#contact',
  },
];

export const footerLinks = {
  charging: [
    { label: 'Franchise Opportunities', href: '/franchise' },
    { label: 'Find a Charger', href: '/charging-network' },
    { label: 'Charging Network', href: '/charging-network' },
    { label: 'EVION Mobile App', href: '/#app' },
    { label: 'Locations Directory', href: '/locations' },
    { label: 'EV Compatibility', href: '/faq#compatibility' },
    { label: 'Tariff & Speeds', href: '/charging-network' },
  ],
  solutions: [
    { label: 'Home Charging', href: '/solutions/home' },
    { label: 'Business & Workplace', href: '/solutions/business' },
    { label: 'Commercial Real Estate', href: '/solutions/commercial' },
    { label: 'Fleet Electrification', href: '/solutions/fleet' },
    { label: 'ROI Calculator', href: '/#calculator' },
  ],
  company: [
    { label: 'About EVION', href: '/about' },
    { label: 'Our Technology', href: '/technology' },
    { label: 'Partner With Us', href: '/contact' },
    { label: 'Contact Team', href: '/contact' },
    { label: 'News & Press', href: '/about#news' },
  ],
  resources: [
    { label: 'FAQ Knowledge Base', href: '/faq' },
    { label: 'System Status', href: '/locations' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};
