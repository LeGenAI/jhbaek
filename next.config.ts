import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* Railway deployment optimizations */
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1 week
  },
  // Performance optimizations
  // experimental: {
  //   optimizeCss: true, // Disabled due to critters dependency issue
  // },
  // Domain redirects: Railway → Custom Domain
  async redirects() {
    return [
      // Railway 기본 도메인 → 커스텀 도메인
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'jhbaek.up.railway.app' }],
        destination: 'https://jhbaek.deep-fountain.com/:path*',
        permanent: true, // 301 영구 리다이렉트
      },
      // www 서브도메인 → 메인 도메인
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.jhbaek.deep-fountain.com' }],
        destination: 'https://jhbaek.deep-fountain.com/:path*',
        permanent: true,
      },
    ];
  },
  // Railway specific headers for better performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
