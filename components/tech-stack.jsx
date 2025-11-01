"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const translations = {
  es: {
    title: "Stack Tecnológico",
    subtitle: "Tecnologías con las que trabajo",
  },
  en: {
    title: "Tech Stack",
    subtitle: "Technologies I work with",
  },
}

const technologies = [
  { name: "React", image: "/react-1.svg" },
  { name: "JavaScript", image: "/javascript-1.png" },
  { name: "HTML5", image: "/html-1.png" },
  { name: "CSS3", image: "/css-1.png" },
  { name: "Tailwind CSS", image: "/tailwind-1.png" },
  { name: "Python", image: "/python-1.png" },
  { name: "Flask", image: "/flask-1.png" },
  /*  { name: "JWT", image: "/jwt-1.png" }, */
  { name: "PostgreSQL", image: "/postgre-1.png" },
  { name: "SQLite", image: "/sqlite-1.png" },
  /*   { name: "SQLAlchemy", image: "/sqlalchemy-1.png" }, */
  { name: "Linux", image: "/linux-1.png" },
  /*   { name: "Nginx", image: "/nginx-1.svg" }, */
  /*   { name: "Gunicorn", image: "/gunicorn-1.png" }, */
  /* { name: "VPS", image: "/vps-1.png" }, */
  { name: "AWS", image: "/aws-1.png" },
  /*   { name: "Stripe", image: "/stripe-1.svg" }, */
  /* { name: "Mercado Pago", image: "/mercadopago-1.svg" }, */
  { name: "Git", image: "/git-1.png" },
]

export default function TechStack({ language = "es" }) {
  const t = translations[language]
  const scrollRefTop = useRef(null)
  const scrollRefBottom = useRef(null)

  // ✅ Primer carrusel → izquierda a derecha
  useEffect(() => {
    const scrollContainer = scrollRefTop.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const speed = 0.5

    const scroll = () => {
      scrollAmount += speed
      if (scrollAmount >= scrollContainer.scrollWidth / 2) scrollAmount = 0
      scrollContainer.scrollLeft = scrollAmount
    }

    const timer = setInterval(scroll, 20)
    return () => clearInterval(timer)
  }, [])

  // ✅ Segundo carrusel → derecha a izquierda
  useEffect(() => {
    const scrollContainer = scrollRefBottom.current
    if (!scrollContainer) return

    let scrollAmount = scrollContainer.scrollWidth / 2
    const speed = 0.5

    const scroll = () => {
      scrollAmount -= speed
      if (scrollAmount <= 0) scrollAmount = scrollContainer.scrollWidth / 2
      scrollContainer.scrollLeft = scrollAmount
    }

    const timer = setInterval(scroll, 20)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="tech" className="py-24 border-t border-border/40 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* ✅ Carrusel Superior */}
        <div className="relative mb-2">
          <div
            ref={scrollRefTop}
            className="flex gap-8 overflow-x-hidden mt-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...technologies, ...technologies].map((tech, idx) => (
              <div key={idx} className="group flex-shrink-0 w-40 h-40 bg-card border border-border rounded-lg flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg my-6
">
                <Image src={tech.image} alt={tech.name} width={64} height={64} className="object-contain group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Carrusel Inferior */}
        <div className="relative">
          <div
            ref={scrollRefBottom}
            className="flex gap-8 overflow-x-hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...technologies, ...technologies].map((tech, idx) => (
              <div key={idx} className="group flex-shrink-0 w-40 h-40 bg-card border border-border rounded-lg flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg my-6
">
                <Image src={tech.image} alt={tech.name} width={64} height={64} className="object-contain group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
