"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedLogo } from "./animated-logo"

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nuestros Servicios", href: "#servicios" },
  { name: "Sobre Nosotros", href: "#nosotros" },
  { name: "Blog", href: "#blog" },
  { name: "Dónde Estamos", href: "#ubicacion" },
  { name: "Contactar Ahora", href: "#contacto" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/98 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <nav 
        className="mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8 max-w-7xl" 
        aria-label="Navegacion principal"
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="#inicio" className="block" aria-label="Ir al inicio">
            <AnimatedLogo isScrolled={isScrolled} />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(true)}
            className={`h-10 w-10 ${isScrolled ? "" : "text-white hover:bg-white/20"}`}
            aria-label="Abrir menu"
            aria-expanded={isOpen}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-6 xl:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors py-2 ${
                isScrolled 
                  ? "text-foreground hover:text-accent" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <a
            href="tel:+543772632717"
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              isScrolled 
                ? "text-accent hover:text-accent/80" 
                : "text-white hover:text-white/80"
            }`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden xl:inline">+54 3772 63-2717</span>
            <span className="xl:hidden">Llamar</span>
          </a>
          <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#contacto">Contactar</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-foreground/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-background z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegacion"
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Image
            src="/images/rosa-lapacho.png"
            alt="Los Lapachos"
            width={80}
            height={32}
            className="h-8 w-auto"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar menu"
            className="h-10 w-10"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="p-4 sm:p-6 flex flex-col h-[calc(100%-65px)]">
          <nav className="flex flex-col gap-1 flex-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base sm:text-lg font-medium text-foreground hover:text-accent hover:bg-muted transition-colors py-3 px-4 rounded-lg active:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-border mt-auto">
            <a
              href="tel:+543772632717"
              className="flex items-center gap-3 text-accent font-semibold py-3 px-4"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span>+54 3772 63-2717</span>
            </a>
            
            <Button 
              asChild 
              className="w-full mt-3 bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base"
              onClick={() => setIsOpen(false)}
            >
              <Link href="#contacto">Contactar Ahora</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
