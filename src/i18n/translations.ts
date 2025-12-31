export const translations = {
  en: {
    // Hero
    role1: "Product Engineer",
    role2: "Systems Engineering Student",
    role3: "Mobile & Backend",

    // About
    about_title: "PROFILE",
    bio: "I build robust digital products focusing on high performance and scalability. My background combines strong backend engineering with intuitive mobile experiences. Currently transforming complex problems into elegant code.",
    download_cv: "Download CV",

    // Projects
    projects_title: "SELECTED WORK",
    projects_heading: "Engineering & Design",
    view_case: "View Case →",

    // Skills
    skills_title: "MY TECH KIT",
    skills_subtitle: "That transforms ideas into reality",

    // Contact
    contact_subtitle: "GET IN TOUCH",
  },
  es: {
    // Hero
    role1: "Ingeniero de Producto",
    role2: "Estudiante de Ing. de Sistemas",
    role3: "Móvil y Backend",

    // About
    about_title: "PERFIL",
    bio: "Desarrollo productos digitales robustos enfocados en alto rendimiento y escalabilidad. Mi experiencia combina una sólida ingeniería backend con experiencias móviles intuitivas. Transformando problemas complejos en código elegante.",
    download_cv: "Descargar CV",

    // Projects
    projects_title: "TRABAJOS SELECCIONADOS",
    projects_heading: "Ingeniería y Diseño",
    view_case: "Ver Caso →",

    // Skills
    skills_title: "MI KIT TECNOLÓGICO",
    skills_subtitle: "Que transforma ideas en realidad",

    // Contact
    contact_subtitle: "HABLEMOS",
  },
} as const;

export type Lang = keyof typeof translations;

export function t(lang: Lang, key: keyof typeof translations.en): string {
  return translations[lang][key];
}
