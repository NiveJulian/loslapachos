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
  title: "Los Lapachos | ¡Memoria, respeto y calidez!",
  description:
    "Los Lapachos en Paso de los Libres, Corrientes. ¡Memoria, respeto y calidez! ¡Nuestro compromiso! Servicios de cremación dignos y jardín memorial. Atención 24/7.",
  keywords:
    "crematorio Paso de los Libres, crematorio Corrientes, Los Lapachos crematorio, servicios funerarios Paso de los Libres, cremación Argentina, jardín memorial, servicios de cremación, crematorio cerca de mí",
  openGraph: {
    title: "Los Lapachos | Crematorio y Jardín",
    description:
      "¡Memoria, respeto y calidez! ¡Nuestro compromiso! Un nuevo espacio en Paso de los Libres donde el respeto se transforma en homenaje.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Los Lapachos - Crematorio y Jardín",
    description:
      "Crematorio y jardín memorial en Paso de los Libres, Corrientes. Servicios de cremación con dignidad y respeto.",
  },
  robots: {
    index: true,
    follow: true,
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
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
