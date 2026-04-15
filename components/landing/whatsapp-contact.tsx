"use client"

import { useState } from "react"
import { MessageCircle, Send, User, Phone, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const serviceOptions = [
  { value: "cremacion", label: "Cremación" },
  { value: "jardin", label: "Jardín Memorial" },
  { value: "velatorio", label: "Velatorio y Ceremonias" },
  { value: "urnas", label: "Urnas y Relicarios" },
  { value: "informacion", label: "Información General" },
  { value: "otro", label: "Otro" },
]

const WHATSAPP_NUMBER = "5437721234567" // Reemplazar con número real

export function WhatsAppContact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const generateWhatsAppMessage = () => {
    const serviceLabel = serviceOptions.find((s) => s.value === formData.service)?.label || formData.service
    
    let message = `Hola, me comunico desde la página web de *Los Lapachos Crematorio y Jardín*.\n\n`
    
    if (formData.name) {
      message += `*Nombre:* ${formData.name}\n`
    }
    if (formData.phone) {
      message += `*Teléfono:* ${formData.phone}\n`
    }
    if (formData.service) {
      message += `*Servicio de interés:* ${serviceLabel}\n`
    }
    if (formData.message) {
      message += `\n*Mensaje:*\n${formData.message}`
    }
    
    return encodeURIComponent(message)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  const isFormValid = formData.name.trim() !== "" || formData.message.trim() !== ""

  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-28 bg-background" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-accent font-medium text-sm mb-3 tracking-wide uppercase">
            Contacto
          </span>
          <h2 id="contact-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            Estamos para Acompañarlo
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto text-pretty">
            Personalice su mensaje y contáctenos directamente por WhatsApp. Respondemos a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
          {/* Info */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-muted rounded-2xl p-5 sm:p-6 lg:p-8 h-full">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                ¿Por qué elegirnos?
              </h3>
              
              <ul className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                {[
                  "Respuesta inmediata por WhatsApp",
                  "Asesoramiento personalizado sin compromiso",
                  "Disponibilidad las 24 horas",
                  "El único crematorio y jardín en Paso de los Libres",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, necesito información sobre los servicios de Los Lapachos Crematorio y Jardín.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  <span className="text-sm sm:text-base">Contacto Rápido</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Form */}
          <Card className="lg:col-span-3 bg-card border-border order-1 lg:order-2">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="font-serif text-xl sm:text-2xl text-foreground">
                Personalice su Mensaje
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Complete los campos para enviar un mensaje personalizado por WhatsApp.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-foreground text-sm">
                      <User className="h-4 w-4" aria-hidden="true" />
                      Nombre
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Su nombre"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="bg-background text-sm sm:text-base py-5"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-foreground text-sm">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+54 3772 12-3456"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="bg-background text-sm sm:text-base py-5"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="flex items-center gap-2 text-foreground text-sm">
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    Servicio de interés
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                    <SelectTrigger id="service" className="bg-background text-sm sm:text-base py-5">
                      <SelectValue placeholder="Seleccione un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2 text-foreground text-sm">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Escriba su consulta o información adicional..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={3}
                    className="bg-background resize-none text-sm sm:text-base"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={!isFormValid}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 disabled:opacity-50 py-5 sm:py-6"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  <span className="text-sm sm:text-base">Enviar por WhatsApp</span>
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Se abrirá WhatsApp con su mensaje listo para enviarse.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
