import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { About } from "@/components/landing/about"
import { LocationMap } from "@/components/landing/location-map"
import { WhatsAppContact } from "@/components/landing/whatsapp-contact"
import { Footer } from "@/components/landing/footer"
import { WhatsAppFab } from "@/components/landing/whatsapp-fab"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <LocationMap />
      <WhatsAppContact />
      <Footer />
      <WhatsAppFab />
    </main>
  )
}
