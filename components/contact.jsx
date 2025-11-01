"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

const translations = {
  es: {
    title: "Contacto",
    subtitle: "Hablemos sobre tu próximo proyecto",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    send: "Enviar Mensaje",
    sending: "Enviando...",
    success: "✅ Tu mensaje ha sido enviado. Te responderé a la brevedad.",
    location: "Ubicación",
    locationValue: "Las Varillas, Argentina",
    phone: "Teléfono",
    phoneValue: "+54 9 353 479 3366",
    emailValue: "nicolasdelfino585@gmail.com",
  },
  en: {
    title: "Contact",
    subtitle: "Let's talk about your next project",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    sending: "Sending...",
    success: "✅ Your message has been sent. I’ll get back to you soon.",
    location: "Location",
    locationValue: "Las Varillas, Argentina",
    phone: "Phone",
    phoneValue: "+54 9 353 479 3366",
    emailValue: "nicolasdelfino585@gmail.com",
  },
}

export default function Contact({ language }) {
  const t = translations[language]
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Enviar con FormSubmit desde fetch (sin redirigir)
    await fetch("https://formsubmit.co/ajax/nicolasdelfino585@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
    setSubmitted(true)

    // Ocultar mensaje después de 3s
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>

          {/* 📌 Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-border">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{t.email}</h3>
                <p className="text-sm text-muted-foreground">{t.emailValue}</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{t.phone}</h3>
                <p className="text-sm text-muted-foreground">{t.phoneValue}</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{t.location}</h3>
                <p className="text-sm text-muted-foreground">{t.locationValue}</p>
              </CardContent>
            </Card>
          </div>

          {/* 📩 Formulario */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.name}</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.email}</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.message}</Label>
                  <Textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} required />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t.sending}
                    </span>
                  ) : (
                    t.send
                  )}
                </Button>

                {submitted && (
                  <p className="text-green-500 text-sm mt-4">{t.success}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
