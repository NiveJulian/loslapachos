import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Los Lapachos | Crematorio y Jardín en Paso de los Libres',
  description: 'Crematorio Los Lapachos en Paso de los Libres, Corrientes. Un espacio donde la memoria, la paz y el respeto se transforman en homenaje. Servicios de cremación dignos y jardín memorial. Atención 24/7.',
  keywords: 'crematorio Paso de los Libres, crematorio Corrientes, Los Lapachos crematorio, servicios funerarios Paso de los Libres, cremación Argentina, jardín memorial, servicios de cremación, crematorio cerca de mí',
  openGraph: {
    title: 'Los Lapachos | Crematorio y Jardín',
    description: 'Un nuevo espacio en Paso de los Libres donde la memoria, la paz y el respeto se transforman en homenaje y un acto de amor.',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Los Lapachos - Crematorio y Jardín',
    description: 'Crematorio y jardín memorial en Paso de los Libres, Corrientes. Servicios de cremación con dignidad y respeto.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#d4a5a5',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
