"use client"

import { Flame, Clock, Trees, FileText, Truck, Building2, SquareParking } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Clock,
    title: "Atención las 24hs",
    description: "Estamos a su disposición todos los días del año, brindando respuesta inmediata ante cualquier necesidad.",
  },
  {
    icon: FileText,
    title: "Asesoramiento y Trámites",
    description: "Gestión integral de trámites administrativos y legales, encargándonos de todo para su tranquilidad.",
  },
  {
    icon: Truck,
    title: "Servicio de Traslado",
    description: "Contamos con unidades propias para realizar traslados con total seguridad, profesionalismo y respeto.",
  },
  {
    icon: Building2,
    title: "Salas de Velatorio",
    description: "Exequias y honras fúnebres en modernas salas diseñadas para brindar la mayor comodidad y paz.",
  },
  {
    icon: Flame,
    title: "Cremaciones Propias",
    description: "Contamos con equipos de última generación con los mejores estándares en cuidado del medio ambiente y calidad.",
  },
  {
    icon: Trees,
    title: "Jardín y Columbarios",
    description: "Jardín columbario y parcelas particulares en un entorno de paz y serenidad para el descanso eterno.",
  },
  {
    icon: SquareParking,
    title: "Estacionamiento",
    description: "Disponemos de amplio estacionamiento en nuestras instalaciones para la comodidad de los familiares.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-16 sm:py-20 lg:py-28 bg-muted" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-3 tracking-wide uppercase">
            Memoria, respeto y calidez
          </span>
          <h2 id="services-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            ¡Nuestro Compromiso!
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto text-pretty">
            Contamos con servicios integrales diseñados para acompañar a las familias con la excelencia que nos caracteriza.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "group p-5 sm:p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300",
                index === 6 && "sm:col-span-2 lg:col-span-1 lg:col-start-2 sm:max-w-md lg:max-w-none sm:mx-auto lg:mx-0"
              )}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-accent/25 transition-colors">
                <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-foreground text-lg sm:text-xl font-medium leading-relaxed italic">
            "Todos y cada uno de estos servicios los brindamos con la empatía y responsabilidad que nos caracterizan. 
            Honrando y homenajeando a quien despedimos, y acompañando a sus seres queridos."
          </p>
        </div>
      </div>
    </section>
  )
}
