"use client"

const translations = {
  es: {
    title: "Sobre Mí",
    subtitle: "Conoce más sobre mi trayectoria",
    description:
      "Soy desarrollador Full Stack y disfruto convertir necesidades reales en software funcional. Construyo aplicaciones completas: desde el frontend con React hasta APIs en Flask conectadas a bases de datos PostgreSQL, desplegadas en servidores Linux.",
    highlight1:
      "Desarrollé sistemas en producción que hoy usan negocios reales, como un ERP para una librería y plataformas de e-commerce con pagos, autenticación por roles y paneles de administración.",

    highlight2:
      "Mi enfoque combina las mejores prácticas de desarrollo con un diseño centrado en el usuario, asegurando que cada proyecto no solo funcione perfectamente, sino que también ofrezca una experiencia excepcional.",
    skills: "Habilidades Clave",
    skill1: "Frontend: React, Next.js, Tailwind CSS",
    skill2: "Backend: Flask, Python, SQLAlchemy, PostgreSQL",
    skill3: "Autenticación, JWT, roles de usuario y REST APIs",
    skill4: "Deploy en Linux, Nginx, VPS, Git y automatización",
    skill5: "Metodologías ágiles y trabajo en equipo",
  },
  en: {
    title: "About Me",
    subtitle: "Learn more about my journey",
    description:
      "I'm a Full Stack developer who enjoys turning real needs into functional software. I build complete applications—from React on the frontend to Flask APIs connected to PostgreSQL databases, deployed on Linux servers.",
    highlight1:
      "I’ve developed production systems currently used by real businesses, such as an ERP for a bookstore and e-commerce platforms with payments, role-based authentication and admin dashboards.",
    highlight2:
      "My approach combines clean development practices with a focus on usability, ensuring that every project not only works flawlessly but also provides a great user experience.",
    skills: "Key Skills",
    skill1: "Frontend: React, Next.js, Tailwind CSS",
    skill2: "Backend: Flask, Python, SQLAlchemy, PostgreSQL",
    skill3: "Authentication, JWT, user roles and REST APIs",
    skill4: "Deployment on Linux, Nginx, VPS, Git and automation",
    skill5: "Agile workflows and teamwork",
  }

}

export default function About({ language }) {
  const t = translations[language]

  return (
    <section id="about" className="py-24 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground/90">{t.description}</p>

            <p className="text-foreground/90">{t.highlight1}</p>

            <p className="text-foreground/90">{t.highlight2}</p>

            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-6">{t.skills}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-foreground/90">{t.skill1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-foreground/90">{t.skill2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-foreground/90">{t.skill3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-foreground/90">{t.skill4}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
