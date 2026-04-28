"use client"

import { Flame, Heart, Package, Clock, Trees, FileText } from "lucide-react"

const services = [
  {
    icon: Flame,
    title: "Cremación de Personas",
    description: "Servicio de cremación de personas con total transparencia y dignidad. Garantizamos un proceso individual y respetuoso en nuestras modernas instalaciones de Paso de los Libres.",
  },
  {
    icon: Trees,
    title: "Jardín Memorial Corrientes",
    description: "Un espacio de paz y naturaleza en el litoral para el descanso eterno. Nuestro jardín memorial permite un homenaje natural y sereno rodeado de vegetación cuidada.",
  },
  {
    icon: Heart,
    title: "Servicio Funerario Cremación",
    description: "Salas de velatorio diseñadas para brindar comodidad. Organizamos un servicio funerario de cremación completo que celebra la vida con respeto y calidez.",
  },
  {
    icon: Package,
    title: "Urnas y Relicarios",
    description: "Contamos con un amplio catálogo de urnas funerarias de diversos materiales y diseños, desde opciones clásicas hasta ecológicas y biodegradables para nuestro jardín memorial.",
  },
  {
    icon: Clock,
    title: "Atención Funeraria 24h",
    description: "Estamos a su disposición las 24 horas del día, todos los días del año. Nuestro equipo de guardia en Paso de los Libres ofrece respuesta inmediata ante cualquier necesidad o consulta urgente.",
  },
  {
    icon: FileText,
    title: "Asesoramiento en Trámites",
    description: "Simplificamos los momentos difíciles encargándonos de toda la gestión administrativa y trámites legales necesarios para los servicios de cremación y sepelio, brindando tranquilidad a la familia.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-16 sm:py-20 lg:py-28 bg-muted" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-3 tracking-wide uppercase">
            Servicios
          </span>
          <h2 id="services-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            Lo que Ofrecemos
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto text-pretty">
            Servicios integrales de cremación y jardín memorial con el máximo respeto, 
            adaptándonos a cada familia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-5 sm:p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
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
      </div>
    </section>
  )
}
