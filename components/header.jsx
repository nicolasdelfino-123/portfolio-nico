"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

const translations = {
  es: {
    about: "Sobre Mí",
    projects: "Proyectos",
    tech: "Tecnologías",
    contact: "Contacto",
  },
  en: {
    about: "About",
    projects: "Projects",
    tech: "Tech Stack",
    contact: "Contact",
  },
}

export default function Header({ language, setLanguage }) {
  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            Portfolio
          </a>

          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.about}
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.projects}
            </a>
            <a href="#tech" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.tech}
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.contact}
            </a>

            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="gap-2">
              <Globe className="h-4 w-4" />
              {language === "es" ? "EN" : "ES"}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
