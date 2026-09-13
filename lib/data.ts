export const PROFILE = {
  name: "Alexandre Dubois",
  role: "Développeur Web & Full-Stack",
  headline: "Je conçois et développe des expériences web modernes, performantes et pensées pour résoudre de vrais problèmes.",
  description: "Passionné par l'ingénierie logicielle et l'expérience utilisateur, j'accompagne les entreprises dans la création de produits numériques robustes et élégants.",
  email: "contact@alexandredubois.dev",
  phone: "+33 6 12 34 56 78",
  location: "Paris, France / Remote",
  availability: "Disponible pour de nouvelles opportunités",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  stats: [
    { label: "Années d'expérience", value: "5+" },
    { label: "Projets réalisés", value: "30+" },
    { label: "Technologies maîtrisées", value: "15+" },
    { label: "Clients accompagnés", value: "20+" },
  ]
};

export const PROJECTS = [
  {
    id: "nexus-dashboard",
    title: "Nexus Dashboard",
    description: "Tableau de bord B2B pour la gestion financière et l'analyse de données en temps réel avec des visualisations complexes.",
    image: "https://picsum.photos/seed/nexus/800/600",
    category: "SaaS / Full-Stack",
    year: "2023",
    role: "Lead Full-Stack Developer",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Recharts"],
    demoUrl: "#",
    githubUrl: "#",
    context: "Une startup fin-tech avait besoin d'un outil interne performant pour suivre les transactions de ses clients.",
    problem: "L'ancienne solution sur Excel ne pouvait plus gérer le volume de données et provoquait des ralentissements critiques.",
    solution: "Développement d'une SPA réactive connectée à une API Node.js robuste, optimisée pour le traitement de larges volumes de données.",
    features: [
      "Visualisation de données en temps réel via WebSockets",
      "Génération de rapports PDF et CSV",
      "Système de permissions complexes (RBAC)",
      "Mode sombre et thèmes personnalisables"
    ]
  },
  {
    id: "aero-ecommerce",
    title: "Aero E-Commerce",
    description: "Plateforme de vente en ligne premium pour des équipements de photographie haute définition.",
    image: "https://picsum.photos/seed/aero/800/600",
    category: "E-Commerce / Front-End",
    year: "2022",
    role: "Front-End Developer",
    technologies: ["React", "Gatsby", "Tailwind CSS", "Stripe API", "Contentful CMS"],
    demoUrl: "#",
    githubUrl: "#",
    context: "Une marque de photographie haut de gamme souhaitait moderniser sa boutique en ligne pour refléter la qualité de ses produits.",
    problem: "Le site précédent était lent, non responsive et offrait une expérience utilisateur médiocre, impactant les conversions.",
    solution: "Création d'une plateforme e-commerce headless ultra-rapide avec une expérience d'achat fluide et une gestion de contenu simplifiée.",
    features: [
      "Panier persistant et checkout optimisé",
      "Intégration d'un CMS Headless (Contentful)",
      "Recherche instantanée et filtrage avancé",
      "Animations fluides et transitions de pages"
    ]
  },
  {
    id: "pulse-tracker",
    title: "Pulse Habit Tracker",
    description: "Application web progressive (PWA) pour le suivi des habitudes quotidiennes avec gamification.",
    image: "https://picsum.photos/seed/pulse/800/600",
    category: "Application Web / Full-Stack",
    year: "2024",
    role: "Développeur Full-Stack (Projet Personnel)",
    technologies: ["Vue.js", "Tailwind CSS", "Firebase", "PWA", "Chart.js"],
    demoUrl: "#",
    githubUrl: "#",
    context: "Projet personnel visant à explorer les capacités des Progressive Web Apps et la gamification.",
    problem: "Il est difficile de maintenir de bonnes habitudes sur le long terme sans feedback positif immédiat.",
    solution: "Une application légère, fonctionnant hors-ligne, qui récompense la régularité par un système de points et de graphiques motivants.",
    features: [
      "Support hors-ligne complet via Service Workers",
      "Synchronisation multi-appareils (Firebase)",
      "Graphiques de progression détaillés",
      "Notifications push personnalisées"
    ]
  }
];

export const SKILLS = [
  {
    category: "Front-end",
    items: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "TypeScript", level: "Avancé" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Framer Motion", level: "Intermédiaire" },
      { name: "Vue.js", level: "Intermédiaire" }
    ]
  },
  {
    category: "Back-end",
    items: [
      { name: "Node.js", level: "Avancé" },
      { name: "Express", level: "Avancé" },
      { name: "NestJS", level: "Intermédiaire" },
      { name: "PostgreSQL", level: "Avancé" },
      { name: "MongoDB", level: "Avancé" },
      { name: "Prisma ORM", level: "Avancé" }
    ]
  },
  {
    category: "DevOps & Outils",
    items: [
      { name: "Git / GitHub", level: "Expert" },
      { name: "Docker", level: "Intermédiaire" },
      { name: "CI/CD (GitHub Actions)", level: "Intermédiaire" },
      { name: "Vercel / Netlify", level: "Expert" },
      { name: "AWS (S3, EC2)", level: "Bases" }
    ]
  }
];

export const EXPERIENCES = [
  {
    id: "exp-1",
    period: "2022 - Présent",
    role: "Développeur Full-Stack Senior",
    company: "TechNova",
    description: "Développement de solutions SaaS pour l'industrie de la logistique.",
    responsibilities: [
      "Conception de l'architecture d'une nouvelle plateforme logistique",
      "Migration d'une application Vue 2 vers Next.js et React",
      "Mise en place de tests E2E (Cypress) et unitaires (Jest)",
      "Mentorat de 2 développeurs juniors"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker"]
  },
  {
    id: "exp-2",
    period: "2019 - 2022",
    role: "Développeur Front-End",
    company: "Agence DigitalWave",
    description: "Création d'expériences web interactives pour des clients grand compte.",
    responsibilities: [
      "Intégration pixel-perfect de maquettes Figma",
      "Développement de composants UI réutilisables (Storybook)",
      "Optimisation des performances web (Core Web Vitals)",
      "Collaboration étroite avec les UX/UI designers"
    ],
    technologies: ["React", "Redux", "SCSS", "GSAP"]
  },
  {
    id: "exp-3",
    period: "2018 - 2019",
    role: "Développeur Web Junior",
    company: "Startup Innovate",
    description: "Développement du MVP d'une plateforme de mise en relation B2B.",
    responsibilities: [
      "Développement de fonctionnalités front-end (Vue.js)",
      "Création d'APIs RESTful (Node.js/Express)",
      "Maintenance de la base de données MongoDB"
    ],
    technologies: ["Vue.js", "Node.js", "MongoDB", "Express"]
  }
];

export const SERVICES = [
  {
    title: "Création d'Applications Web",
    description: "Développement d'interfaces métier complexes, SaaS et tableaux de bord performants.",
    icon: "code", // We'll map this to a Lucide icon component later
    features: ["Architecture scalable", "Hautes performances", "Sécurité renforcée"]
  },
  {
    title: "Développement Front-End",
    description: "Intégration d'interfaces modernes, réactives, accessibles et fidèles aux maquettes (Figma).",
    icon: "layout",
    features: ["Pixel-perfect", "Animations fluides", "Accessibilité WCAG"]
  },
  {
    title: "Refonte & Optimisation",
    description: "Audit et amélioration de bases de code existantes, optimisation des performances (Core Web Vitals).",
    icon: "zap",
    features: ["Code splitting", "SEO technique", "Amélioration UX"]
  },
  {
    title: "Développement d'API (Back-End)",
    description: "Conception et développement d'APIs robustes (REST ou GraphQL) pour alimenter vos applications.",
    icon: "server",
    features: ["Documentation claire", "Tests automatisés", "Intégration bases de données"]
  }
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Sophie Martin",
    role: "CTO",
    company: "TechNova",
    content: "Alexandre est un développeur exceptionnel. Sa capacité à comprendre les enjeux métier et à les traduire en code élégant et robuste est rare. Il a transformé notre approche du développement front-end."
  },
  {
    id: "t2",
    name: "Thomas Dubois",
    role: "Fondateur",
    company: "Startup Innovate",
    content: "Travailler avec Alexandre sur notre MVP a été la meilleure décision pour notre startup. Rapide, précis et toujours force de proposition sur l'architecture technique."
  }
];

export const ARTICLES = [
  {
    id: "architecture-nextjs-app-router",
    title: "Structurer une application Next.js 14 avec l'App Router",
    excerpt: "Retour d'expérience et bonnes pratiques pour organiser le code dans un projet Next.js moderne.",
    date: "15 Mars 2024",
    readingTime: "5 min",
    category: "Architecture",
    tags: ["Next.js", "React", "Architecture"]
  },
  {
    id: "optimisation-performances-react",
    title: "Optimiser les performances d'une application React complexe",
    excerpt: "Techniques avancées de memoization, code splitting et gestion d'état pour éviter les rendus inutiles.",
    date: "28 Janvier 2024",
    readingTime: "8 min",
    category: "Performance",
    tags: ["React", "Performance", "Web Vitals"]
  }
];
