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

export const metadata: Metadata = {
  metadataBase: new URL('https://jhbaek.deep-fountain.com'),
  title: {
    default: 'Jae-Hyun Baek | AI Researcher & Mathematics Expert',
    template: '%s | Jae-Hyun Baek'
  },
  description: 'AI/ML researcher specializing in Mathematics, Computer Vision, and AI Security. CTO of DeepFountain Inc. Publications in IJFIS, JKIIS. Expert in VLM, Multimodal AI, and Alignment Research.',
  keywords: ['AI researcher', 'Machine Learning', 'Mathematics', 'Computer Vision', 'AI Security', 'VLM', 'Multimodal AI', 'Deep Learning', 'Research', 'EXAONE', 'Sogang University'],
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
    url: 'https://jhbaek.deep-fountain.com',
    siteName: 'Jae-Hyun Baek Portfolio',
    title: 'Jae-Hyun Baek | AI Researcher & Mathematics Expert',
    description: 'AI/ML researcher specializing in Mathematics, Computer Vision, and AI Security. Expert in VLM, Multimodal AI, and Alignment Research.',
    images: [
      {
        url: '/background.jpg',
        width: 1200,
        height: 630,
        alt: 'Jae-Hyun Baek - AI Researcher and Mathematics Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jae-Hyun Baek | AI Researcher & Mathematics Expert',
    description: 'AI/ML researcher specializing in Mathematics, Computer Vision, and AI Security. Expert in VLM, Multimodal AI, and Alignment Research.',
    images: ['/background.jpg'],
    creator: '@jhbaek',
  },
  verification: {
    google: 'verification-code-here', // Replace with actual Google Search Console verification code
  },
  category: 'Research',
  classification: 'Academic Portfolio',
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
  return (
    <html suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
