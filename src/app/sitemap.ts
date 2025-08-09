import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://erenworks.vercel.app';
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/#about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/#reports`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/#experience`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/#projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/#contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];
}


