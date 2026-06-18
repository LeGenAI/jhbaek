import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = 'https://jhbaek.deep-fountain.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Jae-Hyun Baek | Formalized Mathematical AI and Agentic Systems',
    template: '%s | Jae-Hyun Baek',
  },
  description:
    'Portfolio of Jae-Hyun Baek, a Sogang AI PhD student and maker of formal math libraries, auditable AI benchmarks, RAG products, forecasting pipelines, and agent-readable research memory.',
  keywords: [
    'Jae-Hyun Baek',
    '백재현',
    'Formalized Mathematical AI',
    'Lean',
    'CodingTheoryLib',
    'EntropyMath',
    'AI4Math',
    'RAG',
    'MCP',
    'AI evaluation',
    'Sogang University',
  ],
  authors: [{ name: 'Jae-Hyun Baek', url: 'https://github.com/LeGenAI' }],
  creator: 'Jae-Hyun Baek',
  publisher: 'Jae-Hyun Baek',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ko_KR',
    url: siteUrl,
    siteName: 'Jae-Hyun Baek Portfolio',
    title: 'Jae-Hyun Baek | Formalized Mathematical AI and Agentic Systems',
    description:
      'A research workshop for formalized mathematics, auditable benchmarks, agentic knowledge systems, and applied AI products.',
    images: [
      {
        url: '/background.jpg',
        width: 1200,
        height: 630,
        alt: 'Jae-Hyun Baek portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jae-Hyun Baek | Formalized Mathematical AI and Agentic Systems',
    description:
      'Formal math libraries, auditable AI benchmarks, RAG products, and agent-readable research memory.',
    images: ['/background.jpg'],
  },
  category: 'Research',
  classification: 'Academic portfolio and research workshop',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/jhbaek_profile.jpg',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const widgetKey = process.env.NEXT_PUBLIC_DEEPFOUNTAIN_WIDGET_KEY;

  return (
    <html suppressHydrationWarning>
      <head>
        {widgetKey ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const script = document.createElement('script');
                  script.src = 'https://saas.deep-fountain.com/widget/ai-agent-service/loader.js';
                  script.setAttribute('data-api-key', '${widgetKey}');
                  script.async = true;
                  script.defer = true;
                  document.head.appendChild(script);
                })();
              `,
            }}
          />
        ) : null}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
