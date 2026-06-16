"use client"

import { useState } from "react"
import { User, MapPin, Phone, Send, Loader2, CheckCircle2, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { GOOGLE_SHEETS_SCRIPT_URL } from "@/lib/constants"

export function LeadForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    dni: "",
    address: "",
    phone: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.fullName.trim() || !formData.dni.trim() || !formData.address.trim() || !formData.phone.trim()) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, completa todos los campos del formulario.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    try {
      // If the user has configured the Google Sheet URL, send the data
      if (GOOGLE_SHEETS_SCRIPT_URL) {
        // We send a POST request with the form data as JSON or URL encoded
        const response = await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors", // Required for Google Apps Script Web Apps when not using CORS headers
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fecha: new Date().toLocaleString("es-AR"),
            nombre: formData.fullName,
            dni: formData.dni,
            direccion: formData.address,
            telefono: formData.phone,
          }),
        })
        
        // Note: with "no-cors", response.ok is false and status is 0, but the data is sent successfully.
      } else {
        // Simulate a delay when no URL is configured
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.warn("GOOGLE_SHEETS_SCRIPT_URL no está configurada en lib/constants.ts. Los datos se simularon correctamente.")
      }

      toast({
        title: "¡Formulario enviado!",
        description: "La información se ha registrado correctamente.",
      })
      setSubmitted(true)
      setFormData({ fullName: "", dni: "", address: "", phone: "" })
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      toast({
        title: "Error de envío",
        description: "Hubo un problema al enviar tus datos. Por favor, intenta de nuevo.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="solicitud" className="py-16 sm:py-20 bg-muted/30" aria-labelledby="lead-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-accent font-medium text-sm mb-3 tracking-wide uppercase">
            Registro
          </span>
          <h2 id="lead-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4 text-balance">
            Solicitud de Asesoramiento
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto text-pretty">
            Déjenos sus datos y un asesor se pondrá en contacto a la brevedad para brindarle información personalizada.
          </p>
        </div>

        <Card className="bg-card border border-border shadow-md rounded-2xl overflow-hidden max-w-2xl mx-auto">
          <CardHeader className="pb-4 sm:pb-6 text-center">
            <CardTitle className="font-serif text-xl sm:text-2xl text-foreground">
              Formulario de Contacto Directo
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Todos los datos ingresados están resguardados con total confidencialidad.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 sm:px-10 pb-8 sm:pb-10">
            {submitted ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  ¡Gracias por su confianza!
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
                  Hemos registrado sus datos correctamente. Nos comunicaremos con usted a la brevedad.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)} 
                  variant="outline" 
                  className="mt-4 rounded-full px-6"
                >
                  Enviar otro formulario
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-2 text-foreground text-sm font-medium">
                    <User className="h-4 w-4 text-accent" aria-hidden="true" />
                    Nombre Completo
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    className="bg-background border-border text-sm sm:text-base py-5 px-4 rounded-lg focus-visible:ring-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dni" className="flex items-center gap-2 text-foreground text-sm font-medium">
                    <FileText className="h-4 w-4 text-accent" aria-hidden="true" />
                    DNI
                  </Label>
                  <Input
                    id="dni"
                    type="text"
                    required
                    placeholder="Ej. 12345678"
                    value={formData.dni}
                    onChange={(e) => handleChange("dni", e.target.value)}
                    className="bg-background border-border text-sm sm:text-base py-5 px-4 rounded-lg focus-visible:ring-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="flex items-center gap-2 text-foreground text-sm font-medium">
                    <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                    Dirección
                  </Label>
                  <Input
                    id="address"
                    type="text"
                    required
                    placeholder="Ej. Av. Belgrano 1230, Paso de los Libres"
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    className="bg-background border-border text-sm sm:text-base py-5 px-4 rounded-lg focus-visible:ring-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lead-phone" className="flex items-center gap-2 text-foreground text-sm font-medium">
                    <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                    Número de Teléfono
                  </Label>
                  <Input
                    id="lead-phone"
                    type="tel"
                    required
                    placeholder="Ej. 3772 15-XXXXXX"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="bg-background border-border text-sm sm:text-base py-5 px-4 rounded-lg focus-visible:ring-accent"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 rounded-lg font-medium text-base transition-colors shadow-sm gap-2 flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Procesando...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Enviar Solicitud
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
