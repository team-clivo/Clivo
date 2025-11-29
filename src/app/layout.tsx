import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clivo - Desarrollo Web y Móvil",
  description: "Transformamos ideas en aplicaciones web y móviles excepcionales",
  icons: {
    icon: '/logo.ico',
    shortcut: '/logo.ico',
    apple: '/logo.ico',
  },
  openGraph: {
    title: "Clivo - Desarrollo Web y Móvil",
    description: "Transformamos ideas en aplicaciones web y móviles excepcionales",
    url: 'https://www.clivo.tech',
    siteName: 'Clivo',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'Clivo Preview',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Clivo - Desarrollo Web y Móvil",
    description: "Transformamos ideas en aplicaciones web y móviles excepcionales",
    images: ['/preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </LanguageProvider>
      </body>
    </html>
  );
}