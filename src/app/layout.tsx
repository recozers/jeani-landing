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
  description: "The future of movement starts here.",
  icons: {
    icon: '/Jeani-Logo-08_04_25-2.png',
  },
  keywords: "wearable technology, movement monitoring, sports analytics, movement analysis, biomechanics, AI, athlete performance",
  authors: [{ name: "Jeani Team" }],
  robots: "index, follow",
  openGraph: {
    title: 'Jeani',
    description: 'The future of movement starts here.',
    url: '/',
    siteName: 'Jeani',
    images: [
      {
        url: '/jeanimockup.png',
        width: 1200,
        height: 630,
        alt: 'The Jeani movement monitoring device',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeani',
    description: 'The future of movement starts here.',
    images: ['/jeanimockup.png'],
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
      <body className="font-sans bg-slate-900 text-white">
        {children}
      </body>
    </html>
  );
}
