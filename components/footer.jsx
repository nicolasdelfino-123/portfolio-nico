"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

const translations = {
  es: {
    rights: "Todos los derechos reservados",
    made: "Hecho con",
    by: "por",
  },
  en: {
    rights: "All rights reservados",
    made: "Made with",
    by: "by",
  },
}

export default function Footer({ language }) {
  const t = translations[language]
  const currentYear = 2025  // 🔹 Año fijo

  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container mx-auto px-4">
        {/* 🔹 CENTRADO TOTAL */}
        <div className="flex flex-col items-center text-center gap-4">

          <p className="text-sm text-muted-foreground">
            © {currentYear} Nicolás Delfino. {t.rights}.
          </p>

          <p className="text-sm text-muted-foreground flex items-center gap-2">
            {t.made} <Heart className="h-4 w-4 text-primary fill-primary" /> {t.by} Nicolás Delfino
          </p>

          <div className="flex items-center gap-6 mt-2">
            <a
              href="https://github.com/nicolasdelfino-123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/nico-delfi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:nicolasdelfino585@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
