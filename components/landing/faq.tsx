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
    answer: "La cremación individual es un proceso digno y transparente donde garantizamos que el procedimiento se realice de manera exclusiva para su ser querido. En nuestras instalaciones de Paso de los Libres, Corrientes, cumplimos con los más altos estándares de calidad y ética, asegurando que las cenizas entregadas correspondan íntegramente a la persona homenajeada.",
  },
  {
    question: "¿Qué es un Jardín Memorial?",
    answer: "Un Jardín Memorial es un espacio sagrado y natural diseñado para el descanso eterno y el recuerdo. A diferencia de un cementerio tradicional, nuestro jardín en Los Lapachos ofrece un entorno sereno rodeado de naturaleza, donde las familias pueden visitar a sus seres queridos en un ambiente de paz y armonía, simbolizado por la belleza de los árboles lapachos.",
  },
  {
    question: "¿Ofrecen servicios de velatorio las 24 horas?",
    answer: "Sí, en Los Lapachos entendemos que la necesidad de apoyo puede surgir en cualquier momento. Por eso, ofrecemos atención funeraria y salas de velatorio las 24 horas, los 365 días del año. Nuestro equipo está siempre preparado para brindar contención y profesionalismo en Paso de los Libres.",
  },
  {
    question: "¿Qué trámites legales debo realizar?",
    answer: "Ante el fallecimiento de un ser querido, existen diversos trámites administrativos y legales que deben cumplirse. En Los Lapachos, ofrecemos asesoramiento integral y nos encargamos de gestionar la documentación necesaria ante el registro civil y otras autoridades, permitiendo que la familia pueda enfocarse en su proceso de duelo.",
  },
  {
    question: "¿Tienen opciones de urnas ecológicas?",
    answer: "Sí, estamos comprometidos con el cuidado del medio ambiente. Disponemos de una línea de urnas biodegradables diseñadas específicamente para ser integradas en nuestro jardín memorial, permitiendo que el ciclo de la vida continúe de manera natural y respetuosa.",
  },
  {
    question: "¿Cuál es el precio de una cremación en Argentina y qué incluye?",
    answer: "Si desea saber cuánto cuesta una cremación, en Los Lapachos ofrecemos precios transparentes y competitivos. El servicio incluye la cremación individual, urna básica y el asesoramiento necesario. Para obtener un presupuesto detallado según sus necesidades, puede ponerse en contacto con nuestro equipo de atención 24 horas.",
  },
  {
    question: "¿Ofrecen servicio de cremación inmediato ante una urgencia?",
    answer: "Sí, brindamos un servicio de cremación rápido y respetuoso para casos de necesidad inmediata. Como crematorio habilitado en Ruta 14 con atención 24 horas, estamos preparados para actuar con la mayor celeridad, asegurando una despedida digna y el acompañamiento familiar necesario en todo momento.",
  },
  {
    question: "¿Dónde cremar un familiar en Paso de los Libres de manera segura?",
    answer: "Los Lapachos es el centro de referencia en el litoral para servicios funerarios. Ubicados a la salida de Paso de los Libres, nuestro crematorio ofrece instalaciones modernas y habilitadas que garantizan un proceso seguro, transparente y con total contención a las familias.",
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
