"use client"

import { Flame, Heart, Package, Clock, Trees, FileText } from "lucide-react"

const services = [
  {
    icon: Flame,
    title: "Cremación Individual",
    description: "Proceso con total respeto y dignidad, garantizando que los restos sean exclusivamente de su ser querido.",
  },
  {
    icon: Trees,
    title: "Jardín Memorial",
    description: "Un hermoso espacio verde donde depositar las cenizas o simplemente visitar y recordar.",
  },
  {
    icon: Heart,
    title: "Velatorio y Ceremonias",
    description: "Espacios acogedores para despedirse con tranquilidad. Ceremonias personalizadas.",
  },
  {
    icon: Package,
    title: "Urnas y Relicarios",
    description: "Amplia selección de urnas de diferentes materiales, desde clásicas hasta biodegradables.",
  },
  {
    icon: Clock,
    title: "Atención 24 Horas",
    description: "Disponibilidad total las 24 horas, los 365 días del año. Siempre presentes.",
  },
  {
    icon: FileText,
    title: "Trámites Legales",
    description: "Nos encargamos de toda la documentación y trámites necesarios.",
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
