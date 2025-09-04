import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://jeanihealth.com'),
  title: "Jeani",
  description: "the future of movement health",
  icons: {
    icon: '/Jeani-Logo-08_04_25-2.png',
  },
  keywords: "wearable technology, movement monitoring, sports analytics, movement analysis, biomechanics, AI, athlete performance",
  authors: [{ name: "Jeani Team" }],
  robots: "index, follow",
  openGraph: {
    title: 'Jeani',
    description: 'the future of movement health',
    url: '/',
    siteName: 'Jeani',
    images: [
      {
        url: '/Jeani-Logo-08_04_25-2.png',
        width: 1200,
        height: 450,
        alt: 'Jeani Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeani',
    description: 'the future of movement health',
    images: ['/Jeani-Logo-08_04_25-2.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-100 text-slate-50`}>
        {children}
      </body>
    </html>
  );
}
