import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.earnetix.com';
  const now = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/earning-methods`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tasks`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/benefits`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/help`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
