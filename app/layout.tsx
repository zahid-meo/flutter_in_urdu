import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SITE_CONFIG } from '@/lib/site-config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Flutter tutorials in Roman Urdu',
    'Flutter Roman Urdu',
    'Firebase Flutter Urdu',
    'Kotlin Android Pakistan',
    'AI tools for developers',
    'Muhammad Zahid Flutter',
    'Mobile app development Roman Urdu',
  ],
  authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.author.name,
  openGraph: {
    type: 'website',
    locale: 'ur_PK',
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    creator: '@muhammadzahid',
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ur" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-sky-500 selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Suspense fallback={<div className="h-16 w-full border-b border-slate-200 dark:border-slate-800" />}>
            <Navbar />
          </Suspense>
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
