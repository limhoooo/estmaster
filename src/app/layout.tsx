import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE } from '@/lib/config/site';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: `${SITE.name} — 무료 PC 업그레이드 진단`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,

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
    locale: 'ko_KR',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — 무료 PC 업그레이드 진단`,
    description: SITE.description,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} PC 업그레이드 진단`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — 무료 PC 업그레이드 진단`,
    description: SITE.description,
    images: [SITE.ogImage],
  },

  verification: {
    google: SITE.googleVerification || undefined,
    other: SITE.naverVerification
      ? { 'naver-site-verification': SITE.naverVerification }
      : undefined,
  },

  alternates: {
    canonical: SITE.url,
  },

  category: 'technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        {/* Google AdSense — adsenseId를 실제 값으로 교체 후 주석 해제 */}
        {/* <meta name="google-adsense-account" content={SITE.adsenseId} /> */}
      </head>
      <body className="flex min-h-full flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>

      {/* AdSense 스크립트 — adsenseId 교체 후 활성화 */}
      {/* <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE.adsenseId}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      /> */}
    </html>
  );
}
