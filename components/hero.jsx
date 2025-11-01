"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

const translations = {
  es: {
    greeting: "Hola, soy",
    role: "Desarrollador Full Stack",
    description:
      "Creo software funcional en producción, con React en el cliente, Flask + PostgreSQL en el servidor y despliegue en Linux con Nginx.",
    cta: "Ver Proyectos",
    resume: "Descargar CV",
  },
  en: {
    greeting: "Hi, I'm",
    role: "Full Stack Developer",
    description:
      "I build production-ready software using React on the frontend, Flask + PostgreSQL on the backend, and deploy everything on Linux servers with Nginx.",
    cta: "View Projects",
    resume: "Download Resume",
  },
}

export default function Hero({ language = "es" }) {
  const t = translations[language]

  const handleDownloadResume = () => {
    window.open("/resume.pdf", "_blank")
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        {/* 📌 Contenedor para foto + texto */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">

          {/* ✅ Foto de perfil con borde redondeado y difuminado */}
          <div className="flex-shrink-0 -mt-8">
            <Image
              src="/per-1.png"
              alt="Foto de Nicolás Delfino"
              width={200}
              height={200}
              className="
      object-cover
      [mask-image:radial-gradient(circle,white_70%,transparent_100%)]
      rounded-full
    "
            />
          </div>




          {/* ✅ Texto del hero */}
          <div>
            <p className="text-primary text-sm font-mono mb-4">{t.greeting}</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Nicolás Delfino</h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">{t.role}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              {t.description}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-16">
              <Button size="lg" asChild>
                <a href="#projects">{t.cta}</a>
              </Button>

            </div>

            {/* ✅ Redes sociales */}
            <div className="flex items-center justify-center md:justify-start gap-6">
              <a href="https://github.com/nicolasdelfino-123" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/nico-delfi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:nicolasdelfino585@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Flecha hacia abajo */}
        <div className="mt-16 animate-bounce text-center">
          <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
