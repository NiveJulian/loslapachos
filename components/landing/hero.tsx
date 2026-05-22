"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && videoRef.current) {
      videoRef.current.playbackRate = 2.0;

      // Detect if it's a mobile/responsive view (e.g., < 768px)
      const isMobile = window.innerWidth < 768;
      videoRef.current.currentTime = isMobile ? 47 : 18;
    }
  }, [mounted]);

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden"
      aria-label="Presentación principal"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        {mounted && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute min-w-full min-h-full object-cover object-center opacity-0 transition-opacity duration-1000"
            onCanPlay={() => {
              if (videoRef.current) videoRef.current.style.opacity = "1";
            }}
          >
            <source src="/Drone_5_2.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img
              src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920&q=80"
              alt="Paisaje sereno"
              className="w-full h-full object-cover"
            />
          </video>
        )}
      </div>

      {/* Overlay gradient - slightly darker for video contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-[100svh]">
        <div className="sr-only">
          Ofrecemos servicios funerarios integrales, cremación digna y un espacio de paz en nuestro Jardín Memorial. 
          Atención personalizada las 24 horas con el respeto y la calidez que nos caracteriza.
        </div>

        {/* Minimalist Center */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-white/90 text-xl sm:text-2xl lg:text-3xl font-serif italic animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
              <span className="sr-only">Los Lapachos — </span>
              "Memoria, respeto y calidez"
            </h1>
          </div>
        </div>

        {/* Bottom content with floating buttons */}
        <div className="pb-4 sm:pb-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                asChild
                size="sm"
                className="bg-white text-foreground hover:bg-white/90 px-6 py-2.5 text-xs sm:text-sm shadow-xl group w-full sm:w-auto rounded-full transition-transform hover:scale-105 active:scale-95"
              >
                <Link
                  href="#servicios"
                  className="flex items-center justify-center gap-2"
                >
                  Conocer Servicios
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-2.5 text-xs sm:text-sm w-full sm:w-auto rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg"
              >
                <Link href="#contacto">Contactar Ahora</Link>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center">
            <span className="text-white/60 text-xs sm:text-sm mb-3 tracking-[0.2em] uppercase font-semibold text-shadow-sm">
              Explorar
            </span>
            <Link
              href="#servicios"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all hover:border-white/40 backdrop-blur-sm"
              aria-label="Ir a servicios"
            >
              <ChevronDown className="h-6 w-6 text-white animate-bounce" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
