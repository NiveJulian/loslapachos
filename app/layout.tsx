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
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" }
    ],
    apple: "/favicon.png",
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
                "priceRange": "$$",
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
                "areaServed": [
                  {
                    "@type": "AdministrativeArea",
                    "name": "Paso de los Libres"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Corrientes"
                  }
                ],
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                  ],
                  "opens": "00:00",
                  "closes": "23:59"
                },
                "sameAs": [
                  "https://facebook.com",
                  "https://instagram.com"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Servicios Funerarios y de Cremación",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Atención las 24hs",
                        "description": "Guardia activa permanente todos los días del año con respuesta inmediata ante cualquier necesidad."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Asesoramiento y Trámites",
                        "description": "Gestión y tramitación administrativa completa ante los organismos correspondientes."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Servicio de Traslado",
                        "description": "Traslados con unidades propias equipadas para garantizar total seguridad y respeto."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Salas de Velatorio",
                        "description": "Salas modernas acondicionadas para brindar la mayor comodidad y privacidad."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Cremaciones Propias",
                        "description": "Cremación en nuestras instalaciones, donde contamos con equipos de última generación cuidando nuestro medio ambiente."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Jardín y Columbarios",
                        "description": "Espacios de sepultura y columbarios en un entorno natural y de paz."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Estacionamiento",
                        "description": "Sector exclusivo dentro de las instalaciones para comodidad de las familias."
                      }
                    }
                  ]
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
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": SITE_ADDRESS.street,
                  "addressLocality": SITE_ADDRESS.city,
                  "addressRegion": SITE_ADDRESS.region,
                  "postalCode": SITE_ADDRESS.postalCode,
                  "addressCountry": SITE_ADDRESS.country
                },
                "sameAs": [
                  "https://facebook.com",
                  "https://instagram.com"
                ]
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
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "¿En qué consiste el servicio de cremación individual?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Es un proceso exclusivo y garantizado para una sola persona, asegurando total transparencia y la entrega íntegra de las cenizas correspondientes."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Qué es un Jardín Memorial?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Es un cementerio parque natural diseñado como un espacio de paz y serenidad para el descanso y el homenaje a los seres queridos."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Ofrecen servicios de velatorio las 24 horas?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sí, disponemos de salas de velatorio y atención de guardia permanente las 24 horas, los 365 días del año."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Qué trámites legales debo realizar?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Nos encargamos de toda la gestión administrativa y los trámites legales necesarios ante el Registro Civil y las autoridades correspondientes."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Tienen opciones de urnas ecológicas?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sí, contamos con urnas biodegradables diseñadas para integrarse de forma natural en nuestro jardín memorial."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Cuál es el precio de una cremación y qué incluye?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "El costo varía según el servicio requerido. Incluye la cremación individual, la urna básica y el asesoramiento administrativo. Contáctenos para un presupuesto detallado."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Ofrecen servicio de cremación inmediato ante una urgencia?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sí, coordinamos el traslado y el servicio de cremación de forma inmediata en cualquier momento del día o la noche."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Dónde realizar una cremación segura en Paso de los Libres?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "En nuestras instalaciones propias y habilitadas ubicadas sobre la Ruta Nacional 14, Paso de los Libres, Corrientes."
                    }
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
