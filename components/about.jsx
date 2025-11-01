"use client"

const translations = {
  es: {
    title: "Sobre Mí",
    subtitle: "Conoce más sobre mi trayectoria",
    description:
      "Soy un desarrollador full stack apasionado por crear soluciones web innovadoras y eficientes. Con experiencia en el desarrollo de aplicaciones escalables, me especializo en transformar ideas complejas en productos digitales intuitivos y de alto rendimiento.",
    highlight1:
      "Con más de X años de experiencia en desarrollo web, he trabajado en proyectos que van desde startups hasta empresas consolidadas, siempre enfocándome en la calidad del código y la experiencia del usuario.",
    highlight2:
      "Mi enfoque combina las mejores prácticas de desarrollo con un diseño centrado en el usuario, asegurando que cada proyecto no solo funcione perfectamente, sino que también ofrezca una experiencia excepcional.",
    skills: "Habilidades Clave",
    skill1: "Desarrollo Frontend con React, Next.js y TypeScript",
    skill2: "Backend con Node.js, Express y bases de datos SQL/NoSQL",
    skill3: "Arquitectura cloud y despliegue con AWS, Vercel y Docker",
    skill4: "Metodologías ágiles y trabajo en equipo",
  },
  en: {
    title: "About Me",
    subtitle: "Learn more about my journey",
    description:
      "I'm a full stack developer passionate about creating innovative and efficient web solutions. With experience in developing scalable applications, I specialize in transforming complex ideas into intuitive, high-performance digital products.",
    highlight1:
      "With over X years of experience in web development, I have worked on projects ranging from startups to established companies, always focusing on code quality and user experience.",
    highlight2:
      "My approach combines development best practices with user-centered design, ensuring that each project not only works perfectly but also delivers an exceptional experience.",
    skills: "Key Skills",
    skill1: "Frontend Development with React, Next.js and TypeScript",
    skill2: "Backend with Node.js, Express and SQL/NoSQL databases",
    skill3: "Cloud architecture and deployment with AWS, Vercel and Docker",
    skill4: "Agile methodologies and teamwork",
  },
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
