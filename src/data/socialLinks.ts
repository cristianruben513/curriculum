import Github from "@/components/icons/Github.astro"
import Linkedin from "@/components/icons/Linkedin.astro"
import Mail from "@/components/icons/Mail.astro"
import Whatsapp from "@/components/icons/Whatsapp.astro"
import WorldMap from "@/components/icons/WorldMap.astro"
import type { SocialLink } from "@/types/socialLink"

export const socialLinks: SocialLink[] = [
  {
    name: "Github",
    url: "https://github.com/cristian51310",
    print: "cristian51310",
    icon: Github,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/cristianruben",
    print: "cristianruben",
    icon: Linkedin,
  },
  {
    name: "Whatsapp",
    url: "https://wa.me/+523339632525",
    print: "333-963-2525",
    icon: Whatsapp,
  },
  {
    name: "Email",
    url: "mailto:cristian.figueroa.crfe@gmail.com",
    print: "cristian.figueroa.crfe@gmail.com",
    icon: Mail,
  },
  {
    name: "Website",
    url: "https://cristian.digital",
    print: "cristian.digital",
    icon: WorldMap,
    visible: false,
  },
]