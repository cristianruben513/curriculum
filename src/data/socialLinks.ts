import Github from "@/components/icons/Github.astro"
import Linkedin from "@/components/icons/Linkedin.astro"
import Mail from "@/components/icons/Mail.astro"
import Whatsapp from "@/components/icons/Whatsapp.astro"
import WorldMap from "@/components/icons/WorldMap.astro"
import X from "@/components/icons/X.astro"

export interface SocialLinkProp {
  name: string
  url: string
  print: string
  icon: any
  printable?: boolean
  visible?: boolean
}

export const socialLinks: SocialLinkProp[] = [
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
    print: "+52 333-963-2525",
    icon: Whatsapp,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/CristianRubnFi1",
    print: "CristianRubnFi1",
    icon: X,
    printable: false,
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
    print: "www.cristian.digital",
    icon: WorldMap,
    visible: false,
  },
]