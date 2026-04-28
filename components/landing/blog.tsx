"use client"

import * as React from "react"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "Nuestra Gran Inauguración",
    excerpt: "Celebramos oficialmente la apertura de Los Lapachos, un espacio diseñado para honrar la vida con la mayor dignidad y respeto en Paso de los Libres.",
    date: "25 de Abril, 2026",
    image: "/images/innauguracion-loslapachos-1.jpeg",
    category: "Evento",
  },
  {
    title: "Un Espacio de Paz",
    excerpt: "Nuestras instalaciones han sido inauguradas para ofrecer a la comunidad un entorno sereno y profesional en los momentos más difíciles.",
    date: "26 de Abril, 2026",
    image: "/images/innauguracion-loslapachos-2.jpeg",
    category: "Instalaciones",
  },
  {
    title: "Compromiso con la Excelencia",
    excerpt: "Cada detalle de nuestro nuevo centro ha sido pensado para brindar la contención que las familias correntinas merecen.",
    date: "27 de Abril, 2026",
    image: "/images/innauguracion-loslapachos-5.jpeg",
    category: "Servicios",
  },
  {
    title: "Visión y Futuro",
    excerpt: "Los Lapachos representa un nuevo estándar en servicios funerarios y cremación para todo el litoral argentino.",
    date: "28 de Abril, 2026",
    image: "/images/innauguracion-loslapachos-6.jpeg",
    category: "Institucional",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-20 lg:py-28 bg-muted/50" aria-labelledby="blog-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="inline-block text-accent font-medium text-sm mb-3 tracking-wide uppercase">
              Actualidad
            </span>
            <h2 id="blog-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Novedades y Eventos
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg text-pretty">
              Siga de cerca nuestras actividades y conozca más sobre nuestro compromiso con la comunidad.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="sm" className="rounded-full">Ver todo el blog</Button>
          </div>
        </div>

        <div className="relative px-12 sm:px-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 sm:-ml-6">
              {blogPosts.map((post, index) => (
                <CarouselItem key={index} className="pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-none bg-transparent group cursor-pointer overflow-hidden rounded-2xl h-full">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-5">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur-sm text-accent text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto flex items-center gap-2 text-accent font-semibold text-sm group-hover:translate-x-1 transition-transform">
                          <span>Leer más</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-8 sm:hidden">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
            <div className="hidden sm:block">
              <CarouselPrevious className="-left-12 lg:-left-16" />
              <CarouselNext className="-right-12 lg:-right-16" />
            </div>
          </Carousel>
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button variant="outline" className="w-full rounded-full">Ver todo el blog</Button>
        </div>
      </div>
    </section>
  )
}
