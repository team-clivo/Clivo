import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.clivo.tech'),
  title: "Clivo - Desarrollo Web y Móvil",
  description: "Transformamos ideas en aplicaciones web y móviles excepcionales",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', sizes: '256x256', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/clivolittle.png', // Using PNG for better quality on Apple devices
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
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Theme initialization script - prevents flash on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'system';
                  var isDark = theme === 'dark' || 
                    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  
                  document.documentElement.classList.toggle('light', !isDark);
                  document.documentElement.classList.toggle('dark', isDark);
                } catch (e) {}
              })();
            `
          }}
        />
        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2KTHNBNR4Z"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2KTHNBNR4Z');
            `
          }}
        />
        {/* End Google Analytics */}
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KQLJZCJC');`
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Clivo",
              "url": "https://www.clivo.tech",
              "logo": "https://www.clivo.tech/logo.png",
              "description": "Agencia de desarrollo web y aplicaciones móviles en República Dominicana. Transformamos ideas en productos digitales excepcionales.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "DO",
                "addressLocality": "Santo Domingo",
                "addressRegion": "Distrito Nacional"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "clivo.contacto@gmail.com",
                "contactType": "Customer Service",
                "availableLanguage": ["Spanish", "English", "French"]
              },
              "sameAs": [
                "https://www.instagram.com/teamclivo",
                "https://github.com/team-clivo"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "República Dominicana"
              },
              "serviceType": [
                "Desarrollo Web",
                "Desarrollo de Aplicaciones Móviles",
                "Diseño UX/UI",
                "Consultoría Tecnológica",
                "Cloud & DevOps"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQLJZCJC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LanguageProvider>
          <ThemeProvider>
            {children}
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
