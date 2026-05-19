"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿En qué consiste el servicio de cremación individual?",
    answer: "Es un proceso exclusivo y garantizado para una sola persona, asegurando total transparencia y la entrega íntegra de las cenizas correspondientes.",
  },
  {
    question: "¿Qué es un Jardín Memorial?",
    answer: "Es un cementerio parque natural diseñado como un espacio de paz y serenidad para el descanso y el homenaje a los seres queridos.",
  },
  {
    question: "¿Ofrecen servicios de velatorio las 24 horas?",
    answer: "Sí, disponemos de salas de velatorio y atención de guardia permanente las 24 horas, los 365 días del año.",
  },
  {
    question: "¿Qué trámites legales debo realizar?",
    answer: "Nos encargamos de toda la gestión administrativa y los trámites legales necesarios ante el Registro Civil y las autoridades correspondientes.",
  },
  {
    question: "¿Tienen opciones de urnas ecológicas?",
    answer: "Sí, contamos con urnas biodegradables diseñadas para integrarse de forma natural en nuestro jardín memorial.",
  },
  {
    question: "¿Cuál es el precio de una cremación y qué incluye?",
    answer: "El costo varía según el servicio requerido. Incluye la cremación individual, la urna básica y el asesoramiento administrativo. Contáctenos para un presupuesto detallado.",
  },
  {
    question: "¿Ofrecen servicio de cremación inmediato ante una urgencia?",
    answer: "Sí, coordinamos el traslado y el servicio de cremación de forma inmediata en cualquier momento del día o la noche.",
  },
  {
    question: "¿Dónde realizar una cremación segura en Paso de los Libres?",
    answer: "En nuestras instalaciones propias y habilitadas ubicadas sobre la Ruta Nacional 14, Paso de los Libres, Corrientes.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-28 bg-background" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-3 tracking-wide uppercase">
            Consultas Frecuentes
          </span>
          <h2 id="faq-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Preguntas Comunes
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Resolvemos sus dudas sobre nuestros servicios de cremación y jardín memorial.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent transition-colors py-4 sm:py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4 sm:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
