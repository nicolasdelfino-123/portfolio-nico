"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"

const translations = {
  es: {
    title: "Proyectos Destacados",
    subtitle: "Algunos de mis trabajos recientes",
    viewCode: "Ver Código",
    viewLive: "Ver Demo",
    project1: {
      title: "E-Commerce Platform",
      description:
        "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    project2: {
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y análisis de productividad.",
      tech: ["Next.js", "PostgreSQL", "Socket.io", "Tailwind"],
    },
    project3: {
      title: "Social Media Dashboard",
      description:
        "Dashboard analítico para redes sociales con visualización de datos, reportes automáticos y gestión de contenido.",
      tech: ["React", "Express", "Redis", "Chart.js"],
    },
  },
  en: {
    title: "Featured Projects",
    subtitle: "Some of my recent work",
    viewCode: "View Code",
    viewLive: "Live Demo",
    project1: {
      title: "E-Commerce Platform",
      description: "Complete e-commerce platform with shopping cart, payment gateway and admin panel.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    project2: {
      title: "Task Management App",
      description:
        "Task management application with real-time collaboration, notifications and productivity analytics.",
      tech: ["Next.js", "PostgreSQL", "Socket.io", "Tailwind"],
    },
    project3: {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media with data visualization, automated reports and content management.",
      tech: ["React", "Express", "Redis", "Chart.js"],
    },
  },
}

const projectImages = [
  ["/ecommerce-platform-screenshot.jpg", "/ecommerce-product-page.png", "/ecommerce-checkout.png"],
  ["/task-management-dashboard.png", "/task-board-kanban-view.jpg", "/task-analytics-charts.jpg"],
  ["/social-media-analytics-dashboard.png", "/social-media-content-calendar.jpg", "/social-media-reports.jpg"],
]

function ProjectCard({ project, images, language }) {
  const [currentImage, setCurrentImage] = useState(0)
  const t = translations[language]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
      <div className="relative group">
        <img
          src={images[currentImage] || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-64 object-cover"
        />

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <Button size="icon" variant="secondary" onClick={prevImage} className="rounded-full">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="secondary" onClick={nextImage} className="rounded-full">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentImage ? "bg-primary w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Github className="h-4 w-4" />
            {t.viewCode}
          </Button>
          <Button size="sm" className="gap-2">
            <ExternalLink className="h-4 w-4" />
            {t.viewLive}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Projects({ language }) {
  const t = translations[language]
  const projects = [t.project1, t.project2, t.project3]

  return (
    <section id="projects" className="py-24 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} images={projectImages[idx]} language={language} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
