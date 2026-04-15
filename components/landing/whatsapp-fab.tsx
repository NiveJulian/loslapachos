"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "543772632717" // Reemplazar con número real de Los Lapachos

export function WhatsAppFab() {
  const defaultMessage = encodeURIComponent(
    "Hola, me gustaría obtener información sobre Los Lapachos Crematorio y Jardín."
  )

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
      <span className="sr-only">Abrir chat de WhatsApp</span>
    </a>
  )
}
