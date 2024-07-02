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
  description: {
    en: string
    es: string
  }
}

export interface Resume {
  name: string
  description: {
    en: string
    es: string
  }
  aboutMe: {
    en: string
    es: string
  }
  education: Educacion[]
  experience: Experience[]
  stack: string[]
  aptitudes: string[]
}
