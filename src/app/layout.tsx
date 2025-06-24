import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Jeani - The Future of Movement Starts Here",
  description: "Jeani helps athletes stay injury-free by understanding their joints in motion. Revolutionary wearable technology for movement monitoring and performance optimization.",
  keywords: "wearable technology, movement monitoring, sports analytics, movement analysis, biomechanics, AI, athlete performance",
  authors: [{ name: "Jeani Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Jeani - The Future of Movement Starts Here",
    description: "Revolutionary wearable technology that helps athletes stay injury-free through intelligent movement analysis.",
    type: "website",
    url: "https://jeani.ai",
    siteName: "Jeani",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jeani - Wearable AI for Athletes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeani - The Future of Movement Starts Here",
    description: "Revolutionary wearable technology that helps athletes stay injury-free through intelligent movement analysis.",
    images: ["/og-image.jpg"],
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
