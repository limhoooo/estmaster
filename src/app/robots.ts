import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/config/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/result'], // 결과 페이지는 동적 파라미터 → 색인 불필요
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
