import type { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { LeadForm } from "@/components/landing/lead-form"
import { WhatsAppFab } from "@/components/landing/whatsapp-fab"
import { SITE_NAME, SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Afiliación | ${SITE_NAME}`,
  description: "Completá tus datos para solicitar asesoramiento personalizado de Los Lapachos Crematorio. Un asesor se comunicará con vos a la brevedad.",
  alternates: {
    canonical: `${SITE_URL}/afiliacion`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AfiliacionPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-20">
        <LeadForm />
      </div>
      <Footer />
      <WhatsAppFab />
    </main>
  )
}
