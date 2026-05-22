import {
  Brain,
  CalendarCheck,
  Code2,
  Cpu,
  Database,
  Github,
  GraduationCap,
  LayoutDashboard,
  Linkedin,
  Mail,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  Workflow
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  image?: string;
  images?: string[];
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  features: string[];
  links: LinkItem[];
  featured?: boolean;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const profile = {
  name: "Jesser Abbassi",
  role: "Full-stack engineer building secure platforms, AI-assisted products, and interactive systems.",
  location: "Tunisia",
  email: "jesserabbassi@gmail.com",
  phone: "+216 56 098 980",
  github: "https://github.com/jesserabbassi",
  linkedin: "https://www.linkedin.com/in/jesser-abbassi-753203389/",
  whatsapp: "https://wa.me/+21656098980",
  cv: "/Jesser_Abbassi_CV.pdf",
  portrait: "/images/jesser-abbassi.jpg"
};

export const navItems: LinkItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const heroMetrics = [
  { value: "10+", label: "shipped technical projects" },
  { value: "API", label: "secure auth, dashboards, data flows" },
  { value: "AI", label: "prediction systems and assistant workflows" }
];

export const capabilities = [
  {
    title: "Product-minded engineering",
    description:
      "I translate fuzzy requirements into scoped, shippable systems with clear data models, visible user value, and maintainable implementation paths.",
    icon: Workflow
  },
  {
    title: "Backend systems",
    description:
      "REST APIs, authentication, role-based access, relational databases, and Dockerized environments designed for real workflows.",
    icon: Server
  },
  {
    title: "AI-ready interfaces",
    description:
      "Practical AI and ML features wrapped in usable products: prediction dashboards, assistant flows, validation, and feedback states.",
    icon: Brain
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    icon: Server,
    items: ["ASP.NET Core", "REST APIs", "JWT", "EF Core", "PHP/PDO"]
  },
  {
    title: "Frontend",
    icon: LayoutDashboard,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"]
  },
  {
    title: "Data",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "SQL modeling", "Relational design"]
  },
  {
    title: "DevOps",
    icon: Terminal,
    items: ["Docker", "Docker Compose", "GitHub", "Linux", "Vercel"]
  },
  {
    title: "AI/ML",
    icon: Cpu,
    items: ["Python", "LightGBM", "XGBoost", "CatBoost", "Streamlit"]
  },
  {
    title: "Interactive Systems",
    icon: Sparkles,
    items: ["Unity", "C#", "REST API integration", "3D simulations"]
  }
];

export const projects: Project[] = [
  {
    slug: "kawi-niveau",
    title: "KawiNiveau",
    category: "Full-Stack SaaS Learning Platform",
    image: "/images/kawi-niveau.png",
    images: [
      "/images/kawi-niveau.png",
      "/images/kawi-niveau/screen-2.png",
      "/images/kawi-niveau/screen-3.png"
    ],
    problem:
      "Learning content was scattered across manual workflows, with no reliable way to manage courses, users, enrollments, and progress from one secure platform.",
    solution:
      "Designed a Dockerized React and ASP.NET Core platform with JWT authentication, role-based authorization, structured course entities, and admin visibility over learning activity.",
    impact:
      "Turned a course catalog into a product-shaped learning system with clearer ownership, stronger access control, and a foundation that can scale toward analytics and subscriptions.",
    stack: ["ASP.NET Core", "React", "PostgreSQL", "JWT", "Docker Compose", "REST API"],
    features: [
      "JWT authentication and role-based authorization",
      "Courses, lessons, enrollments, and progress tracking",
      "Admin management views for course and user operations",
      "Frontend, backend, and database orchestrated with Docker Compose"
    ],
    links: [
      { label: "Live demo", href: "https://kawi-niveau-1.onrender.com/login", external: true },
      { label: "GitHub", href: "https://github.com/jesserabbassi/Kawi-Niveau", external: true }
    ],
    featured: true
  },
  {
    slug: "stageconnect",
    title: "StageConnect",
    category: "Internship Management Platform",
    image: "/images/stageconnect.png",
    images: [
      "/images/stageconnect.png",
      "/images/stageconnect/screen-2.png",
      "/images/stageconnect/screen-3.png"
    ],
    problem:
      "Students needed a more guided way to discover internship offers, maintain a profile, upload CVs, apply, and track application status while admins needed a clean review workflow.",
    solution:
      "Built a PHP/MySQL application with protected sessions, normalized relational tables, filtered offers, portfolio profiles, application tracking, and a Groq-powered assistant.",
    impact:
      "Created a complete internship workflow that connects discovery, applications, admin review, CV access, and AI guidance in one platform.",
    stack: ["PHP", "MySQL", "PDO", "JavaScript", "Groq API", "Apache"],
    features: [
      "Student/admin authentication and protected dashboard flows",
      "Offer search, filters, sorting, and application status tracking",
      "CV upload with server-side validation and duplicate prevention",
      "Groq assistant endpoint with session history and protected API keys"
    ],
    links: [{ label: "GitHub", href: "https://github.com/jesserabbassi/StageConnect", external: true }],
    featured: true
  },
  {
    slug: "training-platform",
    title: "LearnHub Training Center MVP",
    category: "Training Center Platform",
    image: "/images/training-platform.png",
    images: ["/images/training-platform.png"],
    problem:
      "Training centers often need a fast operational MVP that can present their catalog, capture registrations, manage content, and support multilingual audiences without turning into a fragile admin workflow.",
    solution:
      "Built a PHP/MySQL MVP with reusable MVC-style structure, training catalog and detail pages, multilingual UI, validated registration and contact forms, a dynamic gallery, and an admin panel for trainings and registrations.",
    impact:
      "Turned a static marketing need into a manageable training-center product foundation with real persistence, admin ownership, SEO-friendly structure, and deployment paths for Docker or local PHP/MySQL.",
    stack: ["PHP", "MySQL", "MVC Architecture", "Docker Compose", "Multilingual UI", "SEO"],
    features: [
      "Training catalog, detail pages, testimonials, and featured trainings",
      "Validated registration flow with CSRF protection and MySQL persistence",
      "Admin panel to manage trainings and review registrations",
      "French, English, and Arabic interface support with reusable PHP views"
    ],
    links: [],
    featured: true
  },
  {
    slug: "flood-prediction",
    title: "Flood Prediction System",
    category: "Machine Learning Decision Support",
    image: "/images/flood-prediction.png",
    images: ["/images/flood-prediction.png", "/images/flood-prediction/screen-2.png"],
    problem:
      "Raw environmental data is difficult to act on without a repeatable modeling workflow and an interface that makes predictions easy to inspect.",
    solution:
      "Implemented preprocessing, feature preparation, ensemble model training, cross-validation, and a Streamlit prediction interface.",
    impact:
      "Produced a practical decision-support workflow that compares model performance and exposes predictions through a usable interface.",
    stack: ["Python", "Streamlit", "LightGBM", "CatBoost", "XGBoost"],
    features: [
      "Data preprocessing and feature preparation",
      "Model training with multiple gradient boosting approaches",
      "Cross-validation and performance comparison",
      "Streamlit prediction UI"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/jesserabbassi/Flood_Prediction_Model", external: true },
      { label: "Live demo", href: "https://floodpredictionmodel-cpvabyjlzgflamkhjxu2kj.streamlit.app/", external: true }
    ],
    featured: true
  },
  {
    slug: "human-body-system",
    title: "Educational 3D Interactive System",
    category: "Unity Education Platform",
    image: "/images/human-body.png",
    images: ["/images/human-body.png", "/images/human-body/screen-2.png"],
    problem:
      "Static science material can make anatomy difficult to understand and gives teachers limited visibility into student interaction.",
    solution:
      "Built a Unity 3D exploration system connected to backend-style student and teacher workflows for interactive organs and progress visibility.",
    impact:
      "Connected visual learning, interaction design, and API-driven education workflows into one demonstrable product experience.",
    stack: ["Unity", "C#", "Supabase", "PostgreSQL", "REST APIs"],
    features: [
      "3D human body exploration",
      "Interactive organs and learning states",
      "Student progress tracking",
      "Teacher dashboard connected through REST APIs"
    ],
    links: []
  },
  {
    slug: "aam-gaddour",
    title: "Aam Gaddour",
    category: "TomorrowLand 3.0 Hackathon Winner",
    image: "/images/aam-gaddour.png",
    images: ["/images/aam-gaddour.png", "/images/aam-gaddour/screen-2.png"],
    problem:
      "The hackathon challenge required a complete interactive prototype with a clear gameplay loop under a short production window.",
    solution:
      "Built a Unity repair-and-driving game with pickups, repair progress, vehicle entry, driving, fuel tracking, timers, and win/lose states.",
    impact:
      "Helped secure a hackathon win by shipping a playable system with mechanics, UI, mission flow, and a cohesive world under time pressure.",
    stack: ["Unity", "C#", "UI Toolkit", "Game Mechanics", "Vehicle Systems"],
    features: [
      "Third-person movement, pickup mechanics, and repair interactions",
      "Timed objectives with tool collection and mission completion",
      "Vehicle controller, fuel tracking, and driving loop",
      "Scene-based UI, help screens, and win/lose states"
    ],
    links: [{label: "GitHub", href: "https://github.com/jesserabbassi/Aam-Gaddour", external: true}]
  },
  {
    slug: "ai-simulation",
    title: "AI-Driven Interactive Simulation",
    category: "Unity Simulation",
    image: "/images/ai-simulation.png",
    images: ["/images/ai-simulation.png", "/images/ai-simulation/screen-2.png"],
    problem:
      "Interactive simulations need coordinated AI movement, object states, and environment feedback without becoming brittle.",
    solution:
      "Implemented a real-time Unity simulation with AI patrol logic, NavMesh movement, object interaction, and stateful environment behavior.",
    impact:
      "Shows ability to structure real-time systems where interaction, AI behavior, and performance constraints must work together.",
    stack: ["Unity", "C#", "NavMesh", "Simulation", "AI Systems"],
    features: [
      "AI patrol system and NavMesh-driven movement",
      "Object interaction and state logic",
      "Real-time behavior coordination",
      "Performance-minded simulation architecture"
    ],
    links: [{ label: "Watch demo", href: "https://youtu.be/CiFc1FQX_bs?si=HYwE-1Ldb0Zu3Q7Y", external: true }]
  },
  {
    slug: "unity-chatbot",
    title: "Unity Chatbot",
    category: "API-Integrated Conversation System",
    problem:
      "Interactive applications need conversational assistance that feels responsive while still being modular enough to swap backend providers and preserve session context.",
    solution:
      "Built a Unity chat interface connected to backend APIs for live responses, configurable prompts, and session-aware conversation flows.",
    impact:
      "Expanded my Unity work beyond gameplay into product-style integrations where frontend interaction depends on reliable API communication.",
    stack: ["Unity", "C#", "REST APIs", "Conversation UI"],
    features: [
      "REST API integration for live text responses",
      "Interactive chat UI with session history",
      "Configurable prompt and backend behavior",
      "Architecture prepared for OpenAI or local service backends"
    ],
    links: []
  },
  {
    slug: "smart-high-tech",
    title: "Smart High-Tech",
    category: "Electrical Infrastructure MVP",
    image: "/images/smart-high-tech.png",
    problem:
      "A technical services company needed a clearer digital presence to explain services, credibility, and contact paths.",
    solution:
      "Created a French-language MVP with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, structured content, and a simple contact API path.",
    impact:
      "Delivered a deployable corporate foundation that can later connect to CMS content, Supabase, or a richer lead management backend.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Multi-page corporate website structure",
      "Service, project, about, and contact sections",
      "Mock data architecture ready for CMS/API integration",
      "Vercel-ready deployment setup"
    ],
    links: [{ label: "View site", href: "https://electrical-infrastructure-demo.onrender.com/", external: true }]
  },
  {
    slug: "interior-portfolio",
    title: "Interior Designer Portfolio",
    category: "Client Portfolio Website",
    image: "/images/interior-portfolio.png",
    problem:
      "A design portfolio needs to communicate taste quickly while still making project browsing and contact conversion easy.",
    solution:
      "Built a polished editorial portfolio with clear visual hierarchy, project presentation, modal details, and structured contact flow.",
    impact:
      "Created a client-facing website that feels more like a brand experience than a generic template.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    features: [
      "Editorial landing experience",
      "Project grid and modal detail flow",
      "Responsive navigation and contact structure",
      "Visual system tuned for a design audience"
    ],
    links: [{ label: "View portfolio", href: "https://hmaied-mariem.vercel.app/", external: true }]
  },
  {
    slug: "reservation-system",
    title: "Intelligent Reservation & Scheduling System",
    category: "Systems Programming & Optimization",
    problem:
      "Reservation workflows require predictable scheduling rules, resource handling, and a clear way to visualize decisions.",
    solution:
      "Combined C scheduling logic, Unity visualization, and Python AI/optimization modules into a hybrid project architecture.",
    impact:
      "Demonstrates comfort moving between low-level logic, visualization, and intelligent decision-support modules.",
    stack: ["C", "Unity", "Python", "Scheduling", "AI Integration"],
    features: [
      "Reservation management logic",
      "Scheduling and resource handling",
      "Unity visualization layer",
      "Python AI and optimization support"
    ],
    links: [{ label: "GitHub", href: "https://github.com/jesserabbassi/ProjetGestionDeReservation", external: true }]
  },
  {
    slug: "penalty-kick",
    title: "Penalty Kick Predictor",
    category: "Sports Analytics",
    problem:
      "Sports prediction needs more than a trained model; it needs feature engineering, validation, and understandable output.",
    solution:
      "Built a predictive analytics workflow using engineered features and ensemble models to classify penalty kick outcomes.",
    impact:
      "Created a compact decision-support system that shows data preparation, model comparison, and result-oriented ML thinking.",
    stack: ["Python", "LightGBM", "XGBoost", "Data Science"],
    features: [
      "Feature engineering pipelines",
      "LightGBM and XGBoost model training",
      "Validation workflow and metrics",
      "Outcome classification pipeline"
    ],
    links: [{ label: "GitHub", href: "https://github.com/jesserabbassi/Penalty-Kick-Outcome-Prediction", external: true }]
  },
  {
    slug: "real-time-vfx",
    title: "Real-Time VFX System Demo",
    category: "Unity Visual Systems",
    problem:
      "Real-time visual effects need to stay expressive without pushing runtime performance into unstable territory.",
    solution:
      "Built a Unity visual effects prototype using Shader Graph, VFX Graph, particle optimization, and environment-integrated feedback systems.",
    impact:
      "Shows range in rendering-focused implementation and an ability to think about runtime visuals as engineered systems, not just decoration.",
    stack: ["Unity", "C#", "VFX Graph", "Shader Graph"],
    features: [
      "Shader Graph and VFX Graph workflows",
      "Optimized particle systems for real-time rendering",
      "Environmental effects integrated into scene behavior",
      "Performance-conscious visual system design"
    ],
    links: [{ label: "Watch demo", href: "https://www.youtube.com/@jessergamer2587", external: true }]
  },
  {
    slug: "state-machine",
    title: "State Machine Prototype",
    category: "Unity Interaction Prototype",
    image: "/images/state-machine.png",
    problem:
      "Rule-based interaction systems become hard to reason about when state, input, and feedback are tangled together.",
    solution:
      "Built a Unity prototype focused on explicit state transitions, input processing, rule execution, and UI feedback.",
    impact:
      "Shows disciplined interaction architecture and event handling inside a real-time prototype.",
    stack: ["Unity", "C#", "State Machine", "Prototype"],
    features: [
      "Real-time state machine architecture",
      "Input processing and rule enforcement",
      "UI feedback and event handling",
      "Unity/C# implementation"
    ],
    links: [{ label: "View prototype", href: "https://jessergamer.itch.io/squid-game-prototype", external: true }]
  },
  {
    slug: "local-multiplayer-board",
    title: "Local Multiplayer Board System",
    category: "Mobile Shared-Device Game System",
    problem:
      "Local multiplayer board games on mobile need clear turn logic, economy rules, and shared-device UI that stays readable across repeated play sessions.",
    solution:
      "Built a Unity pass-and-play system with touch-friendly interaction, turn management, property economy mechanics, and state-driven UI feedback.",
    impact:
      "Demonstrates product thinking for interactive systems where usability, turn flow, and state clarity matter as much as the underlying logic.",
    stack: ["Unity", "C#", "Mobile", "Turn Logic", "Local Multiplayer"],
    features: [
      "Local multiplayer pass-and-play architecture",
      "Touch-first controls and mobile-friendly layout",
      "Property economy and turn progression systems",
      "State-driven UI designed for shared-device play"
    ],
    links: [{ label: "View project", href: "https://jessergamer.itch.io", external: true }]
  }
];

export const experienceHighlights = [
  {
    title: "Architecture decisions",
    icon: ShieldCheck,
    text: "I favor explicit API contracts, relational data models, authentication boundaries, and deployment paths that can survive beyond a demo."
  },
  {
    title: "Execution range",
    icon: Code2,
    text: "My projects span SaaS dashboards, AI workflows, PHP/MySQL platforms, ASP.NET Core APIs, and Unity systems."
  },
  {
    title: "Learning velocity",
    icon: Trophy,
    text: "I move quickly from idea to shipped prototype, then clean the system so the next feature has a stable place to land."
  }
];

export const education = {
  title: "Engineering Degree",
  school: "Software Engineering Cycle at ENSI",
  coursework: [
    "Data Structures & Algorithms",
    "Database Systems",
    "Artificial Intelligence",
    "Software Engineering",
    "Systems Programming"
  ],
  icon: GraduationCap
};

export const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "Jesser Abbassi", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", value: "jesserabbassi", href: profile.github, icon: Github }
];
