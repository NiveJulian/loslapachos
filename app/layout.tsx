import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Los Lapachos | Crematorio, Velatorios y Jardín Memorial",
    template: "%s | Los Lapachos"
  },
  description:
    "Los Lapachos: El principal centro de servicios funerarios y crematorio en Paso de los Libres, Corrientes. Ofrecemos velatorios con dignidad, cremación individual y un jardín memorial único. Atención 24/7 con el respeto que su familia merece.",
  keywords: [
    "crematorio Paso de los Libres",
    "velatorios Paso de los Libres",
    "servicios funerarios Corrientes",
    "cremación Corrientes",
    "jardín memorial Argentina",
    "cochería Paso de los Libres",
    "tanatorio Corrientes",
    "pompas fúnebres",
    "servicios de cremación dignos",
    "atención funeraria 24 horas"
  ],
  authors: [{ name: "Los Lapachos" }],
  creator: "Los Lapachos",
  publisher: "Los Lapachos",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Los Lapachos | Crematorio, Velatorios y Jardín Memorial",
    description:
      "¡Memoria, respeto y calidez! El principal centro de servicios funerarios y cremación en Paso de los Libres, Corrientes.",
    url: "https://loslapachos.com.ar", // Reemplazar con la URL real si es diferente
    siteName: "Los Lapachos",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/loslapachos.jpeg",
        width: 1200,
        height: 630,
        alt: "Los Lapachos Crematorio y Jardín Memorial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Los Lapachos | Crematorio y Velatorios",
    description:
      "Servicios de cremación y jardín memorial con dignidad en Paso de los Libres, Corrientes. Atención 24/7.",
    images: ["/images/loslapachos.jpeg"],
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
  alternates: {
    canonical: "https://loslapachos.com.ar",
  },
  icons: {
    icon: [
      {
        url: "/images/rosa-lapacho.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/rosa-lapacho.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/rosa-lapacho.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/images/rosa-lapacho.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#d4a5a5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FuneralService",
              "name": "Los Lapachos | Crematorio y Jardín Memorial",
              "image": "https://loslapachos.com.ar/images/loslapachos.jpeg",
              "@id": "https://loslapachos.com.ar",
              "url": "https://loslapachos.com.ar",
              "telephone": "+543772632717",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Paso de los Libres",
                "addressLocality": "Paso de los Libres",
                "addressRegion": "Corrientes",
                "postalCode": "3230",
                "addressCountry": "AR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -29.7025157,
                "longitude": -57.2105625
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/loslapachos", // Ejemplo, ajustar si existen
                "https://www.instagram.com/loslapachos"
              ]
            })
          }}
        />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
