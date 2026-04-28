"use client"

import { CheckCircle } from "lucide-react"

const features = [
  "Instalaciones nuevas y modernas",
  "Personal capacitado y empático",
  "Jardín memorial natural",
  "Precios transparentes",
  "Atención personalizada 24/7",
  "Ubicación accesible",
]

export function About() {
  return (
    <section id="nosotros" className="py-16 sm:py-20 lg:py-28 bg-background" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/loslapachos.jpeg"
                alt="Jardín memorial con flores"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-accent text-accent-foreground p-4 sm:p-6 rounded-xl shadow-lg">
              <p className="text-2xl sm:text-3xl font-serif font-bold">Nuevo</p>
              <p className="text-xs sm:text-sm opacity-90">Espacio en Corrientes</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-accent font-medium text-sm mb-3 tracking-wide uppercase">
              Sobre Nosotros
            </span>
            <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
              Crematorio y Servicios Funerarios en Paso de los Libres
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              En <strong className="text-foreground">Los Lapachos</strong>, nos dedicamos a brindar un servicio integral de <strong className="text-foreground">crematorio y velatorios</strong> con la mayor dignidad en la ciudad de <strong className="text-foreground">Paso de los Libres, Corrientes</strong>.
              Ubicados estratégicamente sobre la <strong className="text-foreground">Ruta 14</strong>, a la <strong className="text-foreground">salida de Paso de los Libres</strong>, ofrecemos una <strong className="text-foreground">despedida digna</strong> y un <strong className="text-foreground">servicio respetuoso</strong> para honrar una vida con el amor que se merece.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Contamos con instalaciones de última generación para <strong className="text-foreground">servicios de cremación rápida e inmediata</strong>, siendo un <strong className="text-foreground">crematorio habilitado en Ruta 14</strong> que cumple con las más estrictas normativas. Nuestro compromiso es brindar una <strong className="text-foreground">despedida con respeto</strong> y calidez humana en cada paso del proceso.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" role="list">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-foreground text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
