interface Educacion {
  title: string
  start: string
  end: string
  place: string
  country: string
}

export interface Experience {
  company: string
  start: string
  title: string
  description: ExperienceDescription
  achievements: AchievementItems
}

interface ExperienceDescription {
  en: string
  es: string
}

interface AchievementItems {
  es: string[]
  en: string[]
}

interface Resumen {
  education: Educacion[]
  experience: Experience[]
  stack: string[]
}

export const resume: Resumen = {
  education: [
    {
      title: "Ingenieria en software",
      start: "2021",
      end: "Ahora",
      place: "Universidad Politecnica de Pénjamo",
      country: "Gto, Mexico",
    },
    {
      title: "Tecnico en programacion",
      start: "2019",
      end: "2021",
      place: "Centro de bachillerato tecnologico industrial y de servicios 171",
      country: "Gto, Mexico",
    },
  ],
  experience: [
    {
      company: "Dorichangos",
      start: "2022 - 2023",
      title: "Freelancer",
      description: {
        es: "Desarrollé una plataforma de ecommerce para Dorichangos, permitiendo a los usuarios comprar de manera sencilla. Implementé un dashboard para la administración eficiente de pedidos, mejorando la eficacia del negocio",
        en: "I developed an e-commerce platform for Dorichangos, enabling users to easily purchase products. Implemented a comprehensive dashboard for efficient product and order management, enhancing the operational effectiveness of the company."
      },
      achievements: {
        es: [
          "Simplificación del proceso de compra para usuarios.",
          "Mejora significativa en la eficiencia operativa mediante el dashboard implementado."
        ],
        en: [
          "Streamlining the purchasing process for users.",
          "Significant improvement in operational efficiency through the implemented dashboard."
        ]
      }
    },
  ],
  stack: [
    "HTML",
    "CSS",
    "JS/TS",
    "React",
    "SQL",
    "Astro",
    "NodeJS",
    "Git/Github",
    "Tailwind",
  ],
}