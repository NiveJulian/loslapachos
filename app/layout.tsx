import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, CONTACT_PHONE_RAW, SITE_ADDRESS, SITE_COORDINATES } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const baseUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Crematorio y Servicios Funerarios`,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "crematorio Los Lapachos",
    "crematorio en Paso de los Libres",
    "servicio de cremación Corrientes",
    "cremación de personas Argentina",
    "servicio funerario cremación",
    "crematorio Ruta 14",
    "precio cremación Argentina",
    "cuánto cuesta una cremación",
    "cremación urgente",
    "despedida digna",
    "honrar una vida",
    "servicio de cremación rápido y respetuoso",
    "crematorio con atención inmediata",
    "dónde cremar un familiar en Paso de los Libres",
    "crematorio habilitado en Ruta 14"
  ],
  authors: [{ name: SITE_NAME }],
  formatDetection: {
    address: true,
    telephone: true,
  },
  openGraph: {
    title: `${SITE_NAME} | Crematorio y Jardín Memorial`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/loslapachos.jpeg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Crematorio y Velatorios`,
    description: SITE_DESCRIPTION,
    images: ["/images/loslapachos.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/images/rosa-lapacho.png",
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
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "FuneralService",
                "name": `${SITE_NAME} | Crematorio y Jardín Memorial`,
                "description": SITE_DESCRIPTION,
                "image": `${SITE_URL}/images/loslapachos.jpeg`,
                "@id": SITE_URL,
                "url": SITE_URL,
                "telephone": CONTACT_PHONE_RAW,
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": SITE_ADDRESS.street,
                  "addressLocality": SITE_ADDRESS.city,
                  "addressRegion": SITE_ADDRESS.region,
                  "postalCode": SITE_ADDRESS.postalCode,
                  "addressCountry": SITE_ADDRESS.country
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": SITE_COORDINATES.lat,
                  "longitude": SITE_COORDINATES.lng
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                  ],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": SITE_NAME,
                "image": `${SITE_URL}/images/loslapachos.jpeg`,
                "@id": `${SITE_URL}/#business`,
                "url": SITE_URL,
                "telephone": CONTACT_PHONE_RAW,
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": SITE_ADDRESS.street,
                  "addressLocality": SITE_ADDRESS.city,
                  "addressRegion": SITE_ADDRESS.region,
                  "postalCode": SITE_ADDRESS.postalCode,
                  "addressCountry": SITE_ADDRESS.country
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Inicio",
                    "item": SITE_URL
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Servicios",
                    "item": `${SITE_URL}/#servicios`
                  }
                ]
              }
            ])
          }}
        />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
