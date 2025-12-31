import type { Lang } from "../i18n/translations";

export interface ProjectLink {
  type: "demo" | "repo" | "apk";
  url: string;
  label: { en: string; es: string };
}

export interface Project {
  id: string;
  year: string;
  featured?: boolean;
  category: { en: string; es: string };
  title: string;
  description: { en: string; es: string };
  images: string[];
  isMobileScreenshots?: boolean;
  logo?: string;
  tags: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "sneakershooes",
    year: "2024",
    featured: true,
    category: { en: "E-Commerce", es: "E-Commerce" },
    title: "SneakerShooes",
    description: {
      en: "High-performance e-commerce storefront for sneakers. Full-stack application with cart system, favorites, product filtering, and Vercel deployment.",
      es: "Tienda de zapatillas de alto rendimiento. Aplicación full-stack con sistema de carrito, favoritos, filtrado de productos y despliegue en Vercel.",
    },
    images: [
      "/projects/sneakershooesHome.webp",
      "/projects/sneakershooesDashboard.webp",
      "/projects/sneakershooesCarrito.webp",
      "/projects/sneakershooesFavorites.webp",
    ],
    tags: ["Next.js", "TypeScript", "React", "Vercel"],
    links: [
      {
        type: "demo",
        url: "https://sneaker-shooes.vercel.app/",
        label: { en: "Live Demo →", es: "Demo en Vivo →" },
      },
      {
        type: "repo",
        url: "https://github.com/imlosing07/SneakerShooes",
        label: { en: "GitHub", es: "GitHub" },
      },
    ],
  },
  {
    id: "aqp-explorer",
    year: "2024",
    category: { en: "Mobile App", es: "App Móvil" },
    title: "AQP Explorer",
    description: {
      en: "Native Android tourism app for Arequipa with offline-first architecture. Features Firebase sync, Room database, favorites, bookings and push notifications.",
      es: "App de turismo Android nativa para Arequipa con arquitectura offline-first. Firebase sync, base de datos Room, favoritos, reservas y notificaciones push.",
    },
    images: [
      "/projects/aqpExplorerHome.webp",
      "/projects/aqpExplorerDetailPlace.webp",
      "/projects/aqpExplorerSearch.webp",
      "/projects/aqpExplorerBookings.webp",
      "/projects/aqpExplorerSettings.webp",
    ],
    isMobileScreenshots: true,
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Room", "MVVM"],
    links: [
      {
        type: "apk",
        url: "https://raw.githubusercontent.com/BastleyNait/AQP-EXPLORER/refs/heads/main/apk/app-debug.apk",
        label: { en: "Download APK", es: "Descargar APK" },
      },
      {
        type: "repo",
        url: "https://github.com/BastleyNait/AQP-EXPLORER",
        label: { en: "GitHub", es: "GitHub" },
      },
    ],
  },
  {
    id: "lexia",
    year: "2025",
    category: { en: "EdTech / Hackathon", es: "EdTech / Hackathon" },
    title: "LEXIA",
    description: {
      en: "AI-powered platform generating inclusive pictographic stories for children with learning difficulties. Built for Hack4Edu 2025.",
      es: "Plataforma con IA que genera cuentos pictográficos inclusivos para niños con dificultades de aprendizaje. Creado para Hack4Edu 2025.",
    },
    images: ["/projects/lexia1.jpg", "/projects/lexia2.jpg"],
    logo: "/projects/lexiaLOGO.webp",
    tags: ["Next.js", "Python", "FastAPI", "AI"],
    links: [
      {
        type: "repo",
        url: "https://github.com/imlosing07/educuentos",
        label: { en: "GitHub", es: "GitHub" },
      },
    ],
  },
  {
    id: "glassfish-appshop",
    year: "2023",
    category: { en: "Enterprise Java", es: "Java Empresarial" },
    title: "GlassFish AppShop",
    description: {
      en: "Secure online product purchase system demonstrating enterprise-level Java EE development with session management and custom error handling.",
      es: "Sistema seguro de compra de productos online demostrando desarrollo Java EE empresarial con gestión de sesiones y manejo de errores personalizado.",
    },
    images: [
      "/projects/glassfishAppTableProducts.webp",
      "/projects/glassfishAppPurchase.webp",
      "/projects/glassfishAppError.webp",
    ],
    tags: ["Java", "Jakarta EE", "JSP", "Servlets", "GlassFish"],
    links: [
      {
        type: "repo",
        url: "https://github.com/imlosing07/GlassFish-AppShop",
        label: { en: "GitHub", es: "GitHub" },
      },
    ],
  },
];

// Helper function to get localized project data
export function getLocalizedProject(project: Project, lang: Lang) {
  return {
    ...project,
    category: project.category[lang],
    description: project.description[lang],
    links: project.links.map((link) => ({
      ...link,
      label: link.label[lang],
    })),
  };
}
