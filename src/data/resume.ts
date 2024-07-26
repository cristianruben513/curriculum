import type { Resume } from "@/types/resume"

export const resume: Resume = {
  name: "Cristian Ruben Figueroa Espinoza",
  description: {
    es: "Ingeniero en Software",
    en: "Software Engineer"
  },
  aboutMe: {
    es: "Estudiante de Ingenieria en software con mas de 2 años de experiencia en desarrollo web frontend y backend como freelancer, destaco por mi sólida experiencia en diseño UI/UX. Actualmente, estoy ampliando mis competencias en infraestructura cloud, prácticas de DevOps y técnicas de optimización",
    en: "I have been programming since I was 16 years old, I am a software engineer and I specialize in web development, with extensive experience in UI/UX. Currently, I am expanding my skills in infrastructure, DevOps and optimization."
  },
  experience: [
    {
      company: "Dorichangos",
      start: "2022 - 2023",
      title: "Desarrollador Fullstack",
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
      country: "Guanajuato, Mexico",
    },
    {
      title: "Tecnico en programacion",
      start: "2019",
      end: "2021",
      place: "CBTIS 171 'Mariano Abasolo'",
      country: "Guanajuato, Mexico",
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
    "MongoDB"
  ],
}