import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://evion.energy';
  const currentDate = new Date().toISOString();

  const routes = [
    '',
    '/charging-network',
    '/solutions',
    '/solutions/home',
    '/solutions/business',
    '/solutions/commercial',
    '/solutions/fleet',
    '/technology',
    '/about',
    '/locations',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' || route === '/charging-network' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/solutions') || route === '/charging-network' ? 0.9 : 0.8,
  }));
}
