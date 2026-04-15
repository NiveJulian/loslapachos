"use client"

import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const COORDINATES = {
  lat: -29.7030431,
  lng: -57.2108378,
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Paso de los Libres, Corrientes",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+54 3772 12-3456",
    link: "tel:+5437721234567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contacto@loslapachos.com.ar",
    link: "mailto:contacto@loslapachos.com.ar",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "24 horas, todos los días",
  },
]

export function LocationMap() {
  const mapsUrl = `https://www.google.com/maps?q=${COORDINATES.lat},${COORDINATES.lng}`
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${COORDINATES.lng}!3d${COORDINATES.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQyJzExLjAiUyA1N8KwMTInMzkuMCJX!5e0!3m2!1ses-419!2sar!4v1702000000000!5m2!1ses-419!2sar`

  return (
    <section id="ubicacion" className="py-16 sm:py-20 lg:py-28 bg-muted" aria-labelledby="location-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-accent font-medium text-sm mb-3 tracking-wide uppercase">
            Ubicación
          </span>
          <h2 id="location-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            Encuentre Nuestro Espacio
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto text-pretty">
            Ubicados en Paso de los Libres, un espacio de fácil acceso rodeado de la naturaleza correntina.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[400px] lg:h-[450px] order-2 lg:order-1">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación de Los Lapachos Crematorio y Jardín"
              className="w-full h-full"
            />
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card className="bg-card border-border h-full">
              <CardContent className="p-5 sm:p-6 lg:p-8 flex flex-col h-full">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-6">
                  Información de Contacto
                </h3>
                
                <div className="space-y-4 sm:space-y-5 flex-1">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm text-muted-foreground mb-0.5">{info.title}</p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-foreground font-medium hover:text-accent transition-colors text-sm sm:text-base break-words"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium text-sm sm:text-base">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 pt-6 border-t border-border">
                  <Button
                    asChild
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-5 sm:py-6"
                  >
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Navigation className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-sm sm:text-base">Cómo Llegar</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
