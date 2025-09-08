import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const hostGrotesk = localFont({
  src: [
    { path: "../../public/fonts/Host_Grotesk/HostGrotesk-VariableFont_wght.ttf", style: "normal" },
    { path: "../../public/fonts/Host_Grotesk/HostGrotesk-Italic-VariableFont_wght.ttf", style: "italic" }
  ],
  display: "swap",
});

const crimsonPro = localFont({
  src: [
    { path: "../../public/fonts/Crimson_Pro/CrimsonPro-VariableFont_wght.ttf", style: "normal" },
    { path: "../../public/fonts/Crimson_Pro/CrimsonPro-Italic-VariableFont_wght.ttf", style: "italic" }
  ],
  variable: "--font-crimson",
  display: "swap",
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://jeanihealth.com'),
  title: "Jeani",
  description: "the future of movement health",
  icons: {
    icon: '/jeani_logo.png',
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
    <html lang="en" className={`scroll-smooth ${crimsonPro.variable}`}>
      <head></head>
      <body className={`${hostGrotesk.className} text-slate-50`}>
        {children}
      </body>
    </html>
  );
}
