"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"

const navigation = {
  services: [
    { name: "Cremación Individual", href: "#servicios" },
    { name: "Jardín Memorial", href: "#servicios" },
    { name: "Velatorio y Ceremonias", href: "#servicios" },
    { name: "Urnas y Relicarios", href: "#servicios" },
  ],
  company: [
    { name: "Sobre Nosotros", href: "#nosotros" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Contacto", href: "#contacto" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Pie de página</h2>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="#inicio" className="inline-block mb-4 sm:mb-6">
              <Image
                src="/images/logo-loslapachos.png"
                alt="Los Lapachos - Crematorio y Jardín"
                width={160}
                height={55}
                className="h-12 sm:h-14 w-auto bg-white/95 rounded-lg p-2"
              />
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4 sm:mb-6 max-w-xs">
              ¡Memoria, respeto y calidez! <br />
              ¡Nuestro compromiso!
            </p>
            
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Visitar página de Facebook"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Visitar página de Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 sm:mb-6">Servicios</h3>
            <ul className="space-y-2 sm:space-y-3" role="list">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 sm:mb-6">Empresa</h3>
            <ul className="space-y-2 sm:space-y-3" role="list">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 sm:mb-6">Contacto</h3>
            <ul className="space-y-3 sm:space-y-4" role="list">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground/60 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-primary-foreground/80">
                  Paso de los Libres, Corrientes
                </span>
              </li>
              <li>
                <a
                  href="tel:+543772632717"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground/60 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm">+54 3772 63-2717</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@loslapachos.com.ar"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground/60 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm break-all">contacto@loslapachos.com.ar</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground/60 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-primary-foreground/80">
                  24 horas, todos los días
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-primary-foreground/10">
          <p className="text-xs sm:text-sm text-primary-foreground/60 text-center">
            © {new Date().getFullYear()} Los Lapachos - Crematorio y Jardín. Paso de los Libres, Corrientes.
          </p>
        </div>
      </div>
    </footer>
  )
}
