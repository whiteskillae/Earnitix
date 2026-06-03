import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/dashboard/', '/api/'],
      },
      {
        userAgent: ['GPTBot', 'CCBot'],
        disallow: ['/'],
      },
    ],
    sitemap: 'https://www.earnetix.com/sitemap.xml',
  };
}
