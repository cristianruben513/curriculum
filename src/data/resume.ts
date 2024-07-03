import type { Resume } from "@/types/resume"

export const resume: Resume = {
  name: "Cristian Ruben Figueroa Espinoza",
  description: {
    es: "Ingeniero en Software con +3 años de experiencia en el desarrollo de aplicaciones web y servicios de backend.",
    en: "Software Engineer with +3 years of experience in the development of web applications and backend services."
  },
  aboutMe: {
    es: "Programo desde los 16 años, soy un ingeniero en software y me especializo en desarrollo web, con alta experiencia en UI/UX. Actualmente, estoy ampliando mis habilidades en infraestructura, DevOps y optimización.",
    en: "I have been programming since I was 16 years old, I am a software engineer and I specialize in web development, with extensive experience in UI/UX. Currently, I am expanding my skills in infrastructure, DevOps and optimization."
  },
  experience: [
    {
      company: "Dorichangos",
      start: "2022 - 2023",
      title: "Freelancer",
      description: {
        es: "Desarrollé una plataforma de ecommerce para Dorichangos, permitiendo comprar de manera sencilla. Implementé un dashboard para la administración eficiente de pedidos, mejorando la eficacia del negocio",
        en: "I developed an e-commerce platform for Dorichangos, enabling easily purchase products. Implemented a comprehensive dashboard for efficient product and order management, enhancing the operational effectiveness of the company."
      },
    },
  ],
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
  aptitudes: [
    "Trabajo en equipo",
    "Iniciativa",
    "Comunicacion efectiva",
    "Disciplina",
    "Autodidacta",
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