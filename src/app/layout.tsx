import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/layout/CustomCursor';

const plusJakartaSans = localFont({
  src: '../../public/fonts/PlusJakartaSans-VariableFont_wght.woff2',
  variable: '--font-sans',
  display: 'swap',
  weight: '400 800',
});

const jetbrainsMono = localFont({
  src: '../../public/fonts/JetBrainsMono-VariableFont_wght.woff2',
  variable: '--font-mono',
  display: 'swap',
  weight: '400 700',
});

export const viewport: Viewport = {
  themeColor: '#40E0D0',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://evion.energy'),
  title: {
    default: 'EVION | Smart EV Charging Solutions',
    template: '%s | EVION',
  },
  description:
    'EVION delivers reliable, fast and intelligent EV charging solutions for drivers, businesses and modern mobility with ultra-fast 350 kW infrastructure.',
  keywords: [
    'EV charging',
    'electric vehicle charging',
    'ultra fast EV charger',
    'DC fast charger 350kW',
    'commercial EV charging',
    'fleet depot electrification',
    'home EV charger',
    'EVION',
    'smart charging network',
  ],
  authors: [{ name: 'EVION Technologies' }],
  creator: 'EVION Technologies Inc.',
  publisher: 'EVION Technologies Inc.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://evion.energy',
    siteName: 'EVION',
    title: 'EVION | Smart EV Charging Solutions',
    description:
      'Powering Every Journey. Ultra-fast 350 kW charging network and intelligent enterprise energy management.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=85&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'EVION Ultra-Fast Electric Vehicle Charging Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EVION | Smart EV Charging Solutions',
    description:
      'Powering Every Journey. Ultra-fast 350 kW charging network and intelligent energy management.',
    creator: '@EVIONenergy',
    images: ['https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=85&w=1200&auto=format&fit=crop'],
  },
  alternates: {
    canonical: 'https://evion.energy',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EVION Technologies',
    url: 'https://evion.energy',
    logo: 'https://evion.energy/logo.png',
    description: 'High-speed electric vehicle charging network and smart energy infrastructure.',
    sameAs: ['https://twitter.com/EVIONenergy', 'https://linkedin.com/company/evion-energy'],
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans antialiased flex flex-col selection:bg-[#40E0D0] selection:text-[#000000]">
        <CustomCursor />
        <Navbar />
        <main className="flex-1 w-full bg-[#000000]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
