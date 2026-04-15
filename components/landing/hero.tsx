"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const slides = [
  {
    src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920&q=80",
    alt: "Paisaje sereno con árboles en flor",
  },
  {
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&q=80",
    alt: "Luz del sol filtrándose entre árboles",
  },
  {
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1920&q=80",
    alt: "Amanecer en el campo",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden" aria-label="Presentación principal">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== currentSlide}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover scale-105"
          />
        </div>
      ))}
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-[100svh]">
        {/* Main content - centered */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Paso de los Libres, Corrientes</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-4 sm:mb-6 text-balance leading-tight">
              Donde la Memoria se Transforma en Homenaje
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto text-pretty leading-relaxed px-4">
              Un nuevo espacio nace en Paso de los Libres, donde la paz y el respeto 
              se transforman en un acto de amor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-lg group w-full sm:w-auto"
              >
                <Link href="#servicios" className="flex items-center justify-center gap-2">
                  Conocer Servicios
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
              >
                <Link href="#contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pb-6 sm:pb-8 px-4 sm:px-6">
          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mb-6 sm:mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-white w-8 sm:w-12" 
                    : "bg-white/40 w-4 sm:w-6 hover:bg-white/60"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Scroll indicator */}
          <div className="flex flex-col items-center">
            <span className="text-white/70 text-xs sm:text-sm mb-2">Descubre más</span>
            <Link 
              href="#servicios" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Ir a servicios"
            >
              <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-white animate-bounce" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
