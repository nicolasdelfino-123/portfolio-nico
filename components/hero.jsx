"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

const translations = {
  es: {
    greeting: "Hola, soy",
    role: "Desarrollador Full Stack",
    description:
      "Creo experiencias web modernas y escalables con tecnologías de vanguardia. Especializado en React, Node.js y arquitecturas cloud.",
    cta: "Ver Proyectos",
    resume: "Descargar CV",
  },
  en: {
    greeting: "Hi, I'm",
    role: "Full Stack Developer",
    description:
      "I build modern and scalable web experiences with cutting-edge technologies. Specialized in React, Node.js and cloud architectures.",
    cta: "View Projects",
    resume: "Download Resume",
  },
}

export default function Hero({ language }) {
  const t = translations[language]

  const handleDownloadResume = () => {
    // Aquí puedes poner la URL de tu CV
    window.open("/resume.pdf", "_blank")
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-sm font-mono mb-4">{t.greeting}</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Tu Nombre</h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">{t.role}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">{t.description}</p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button size="lg" asChild>
              <a href="#projects">{t.cta}</a>
            </Button>
            <Button size="lg" variant="outline" onClick={handleDownloadResume}>
              {t.resume}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:tu@email.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
