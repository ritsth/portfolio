// Single source of truth for portfolio content.
// Pulled from Ritika Shrestha's resumes + real GitHub repos (github.com/ritsth).

export const profile = {
  name: "Ritika Shrestha",
  title: "Software Engineer",
  tagline: "Building at the intersection of AI and full-stack engineering.",
  intro:
    "Software engineer and Denison University CS & Math graduate, building full-stack systems and AI products — from microservice backends to LLM-powered tools.",
  location: "Granville, OH",
  email: "shrest_r2@denison.edu",
  resume: "/Ritika-Shrestha-Resume.pdf",
  socials: {
    github: "https://github.com/ritsth",
    linkedin: "https://www.linkedin.com/in/ritika-shrestha-817555252/",
  },
};

export type Experience = {
  role: string;
  company: string;
  href?: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "AI Fellow",
    company: "Breakthrough Tech AI · Cornell Tech",
    period: "2025 — 2026",
    bullets: [
      "Fellow in competitive AI Program for 2025-26 to develop technical skills in AI that includes Machine Learning coursework with Cornell faculty, experiential learning experiences, and mentorship from industry professionals",
    ],
    tags: ["Machine Learning", "AI"],
  },
  {
    role: "Software Engineer Intern",
    company: "TransCore",
    period: "Summer 2025",
    bullets: [
      "Developed AI-powered Customer Service Representatives chatbot using Llama-3.2-vision + RAG and Ollama, hosted on cloud virtual machines to automate FAQ responses and toll-processing inquiries",
      "Explored prompt engineering techniques for tone-aware responses and fine-tuned Qwen model to improve performance",
    ],
    tags: ["RAG", "Ollama", "LLMs", "Prompt Engineering"],
  },
  {
    role: "Software Engineer Intern",
    company: "Real AI Dynamics (RAID)",
    period: "2024 — 2025",
    bullets: [
      "Design and implement a scalable AI-powered recommendation system for micro SaaS platforms",
      "Assist in hosting AI workshops as an educator, creating educational content, and delivering presentations",
    ],
    tags: ["AI", "Recommender Systems", "Python"],
  },
  {
    role: "Junior Software Engineer",
    company: "Denison IT Web Services",
    period: "2022 — 2026",
    bullets: [
      "Collaborate with a team to upgrade and maintain university's official website using Drupal, Vue.js, and Twig, and automate development workflow using CI/CD in GitLab",
      "Enhance website interface by implementing user-centric UX designs and developing custom modules to improve website search functionality, resulting in a 25% increase in user engagement",
    ],
    tags: ["Vue.js", "Drupal", "CI/CD", "GitLab"],
  },
  {
    role: "Teaching Assistant",
    company: "Denison Computer Science Dept.",
    period: "2024",
    bullets: [
      "Assisted Computer Science students in understanding class content and completing assignments, and collaborated with professor to develop comprehensive course structures which contributed to a 30% improvement in student grades",
    ],
    tags: ["Teaching", "Mentorship"],
  },
];

export type ProjectIcon =
  | "briefcase"
  | "flavor"
  | "leaf"
  | "fashion"
  | "robot"
  | "cart";

export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
  theme: {
    gradient: string;
    icon: ProjectIcon;
    image?: string; // single background photo
    collage?: string[]; // Pinterest-style masonry of photos
  };
};

export const projects: Project[] = [
  {
    name: "Blueberry Mart",
    blurb:
      "A full-stack grocery commerce app with role-based access, real-time inventory analytics, tiered memberships, and eSewa payments — backend on Google Cloud Run, admin portal on Firebase.",
    tags: [".NET 8", "React Native", "PostgreSQL", "Kafka", "BigQuery", "GCP"],
    links: [
      { label: "Repo", href: "https://github.com/ritsth/Blueberry-Mart-app" },
    ],
    featured: true,
    theme: {
      gradient: "from-emerald-500 via-green-700 to-slate-900",
      icon: "cart",
      collage: [
        "/projects/blueberry1.jpg",
        "/projects/blueberry2.jpg",
        "/projects/blueberry3.jpg",
      ],
    },
  },
  {
    name: "Jobbie",
    blurb:
      "A job-posting platform helping students find internships. Five C#/.NET 8 microservices communicating over gRPC, HTTP & Kafka, containerized with Docker and deployed on Azure Kubernetes.",
    tags: ["C#", ".NET 8", "gRPC", "Kafka", "Docker", "AKS"],
    links: [
      { label: "Backend", href: "https://github.com/ritsth/Jobbie_Backend" },
      { label: "Frontend", href: "https://github.com/AdvancedUno/Jobbie_Frontend" },
    ],
    featured: true,
    theme: {
      gradient: "from-blue-600 via-indigo-700 to-slate-900",
      icon: "briefcase",
      image: "/projects/jobbie.jpg",
    },
  },
  {
    name: "Flavor Radar — Nestlé",
    blurb:
      "A sentiment-driven flavor trend predictor analyzing 14M Amazon reviews with RoBERTa + TF-IDF, ranking emerging trends to guide data-driven R&D.",
    tags: ["Python", "RoBERTa", "NLP", "Logistic Regression"],
    links: [
      { label: "Repo", href: "https://github.com/ritsth/flavor-trend-prediction" },
    ],
    featured: true,
    theme: {
      gradient: "from-amber-500 via-orange-600 to-rose-800",
      icon: "flavor",
      image: "/projects/flavor.jpg",
    },
  },
  {
    name: "Branch",
    blurb:
      "A plant-focused social app with smart watering reminders — TensorFlow image classification for plant ID and Arduino humidity sensors feeding real-time data.",
    tags: ["Django", "React Native", "TensorFlow", "AWS"],
    links: [
      { label: "Backend", href: "https://github.com/ritsth/branchxpp" },
      { label: "Mobile", href: "https://github.com/ritsth/ReactNativeApp-Branch" },
    ],
    featured: true,
    theme: {
      gradient: "from-emerald-500 via-green-600 to-teal-900",
      icon: "leaf",
      image: "/projects/branch.jpg",
    },
  },
  {
    name: "Style Board",
    blurb:
      "A Next.js social shopping app to browse clothing, discover outfit inspiration, and shop the exact products people post.",
    tags: ["Next.js", "MongoDB", "Tailwind", "TypeScript"],
    links: [
      { label: "Repo", href: "https://github.com/ritsth/Style_Board_Dev" },
    ],
    theme: {
      gradient: "from-fuchsia-500 via-pink-600 to-violet-900",
      icon: "fashion",
      collage: [
        "/projects/style3.jpg",
        "/projects/style7.jpg",
        "/projects/style4.jpg",
        "/projects/style1.jpg",
        "/projects/style8.jpg",
        "/projects/style5.jpg",
      ],
    },
  },
  {
    name: "Dancing Robot",
    blurb:
      "An Arduino-powered robot that walks and dances — coordinating multiple sensors and servo motors with embedded C++.",
    tags: ["Arduino", "C++", "Robotics", "Sensors"],
    links: [{ label: "Repo", href: "https://github.com/ritsth/Dancing-Robo" }],
    theme: {
      gradient: "from-orange-500 via-red-700 to-zinc-900",
      icon: "robot",
      image: "/projects/robot.jpg",
    },
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["C#", "Python", "TypeScript", "JavaScript", "C++", "SQL", "PHP", "R"],
  },
  {
    group: "Frameworks",
    items: ["React Native", "Next.js", "Node.js", "Django", ".NET", "Vue.js"],
  },
  {
    group: "Infrastructure",
    items: ["Docker", "Kubernetes", "Azure", "AWS", "CI/CD", "gRPC", "Kafka"],
  },
  {
    group: "AI / ML",
    items: ["TensorFlow", "RAG", "RoBERTa", "Ollama", "LLMs"],
  },
];
