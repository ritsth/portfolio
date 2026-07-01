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
    role: "Handshake AI Fellow",
    company: "Handshake",
    period: "Apr 2026 — Present",
    bullets: [
      "Architect and execute vibe-coding software projects from scratch via natural language, exercising high agency over a 5-phase GitHub workflow to define tasks, engineer evaluation rubrics, and benchmark four distinct AI models",
    ],
    tags: ["AI", "LLMs", "Vibe Coding", "GitHub"],
  },
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
  | "cart"
  | "puzzle";

export type ProjectMedia = {
  src: string;
  alt: string;
  caption?: string;
  kind?: "screenshot" | "diagram" | "photo";
};

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
  // Rich case-study fields (all optional) — surfaced in the full-screen detail view.
  timeline?: string; // e.g. "2025 — Present"
  role?: string; // e.g. "Solo full-stack"
  problem?: string; // context / why it exists
  overview?: string; // what was built (longer than blurb)
  highlights?: string[]; // feature bullets
  stack?: string[]; // full tech list (superset of tags)
  impact?: { value: string; label: string }[]; // headline metrics
  gallery?: ProjectMedia[]; // multiple images; falls back to theme.image/collage when absent
};

export const projects: Project[] = [
  {
    name: "Blueberry Mart",
    blurb:
      "A full-stack grocery commerce app with role-based access, real-time inventory analytics, tiered memberships, and eSewa payments — backend on Google Cloud Run, admin portal on Firebase.",
    tags: [".NET 8", "React Native", "GCP", "BigQuery", "PostgreSQL", "Kafka"],
    links: [
      { label: "Repo", href: "https://github.com/ritsth/Blueberry-Mart-app" },
    ],
    featured: true,
    theme: {
      gradient: "from-emerald-500 via-green-700 to-slate-900",
      icon: "cart",
      collage: [
        "/projects/bbm-catalog.png",
        "/projects/bbm-analytics-revenue.png",
        "/projects/bbm-branches.png",
      ],
    },
    timeline: "2026 — Present",
    role: "Solo full-stack developer",
    problem:
      "Local grocery stores often lack an integrated system to manage inventory, memberships, and online orders — leaving owners juggling spreadsheets while customers miss out on a modern shopping experience.",
    overview:
      "A full-stack grocery commerce platform spanning a customer mobile app, an admin web portal, and a .NET 8 backend — with role-based access, automated database migrations, and a real-time analytics pipeline.",
    highlights: [
      "Role-based access across customer, staff, and shareholder roles with automated EF Core 8 migrations on PostgreSQL (Cloud SQL)",
      "Real-time inventory analytics pipeline built on Kafka and BigQuery",
      "eSewa payment integration, tiered memberships, and a self-service query builder for shareholders",
      "Backend deployed to Google Cloud Run and admin portal to Firebase Hosting via GitHub Actions",
    ],
    stack: [
      ".NET 8",
      "React Native",
      "Vite",
      "PostgreSQL",
      "Cloud SQL",
      "Kafka",
      "BigQuery",
      "GCP",
      "Cloud Run",
      "Firebase",
      "GitHub Actions",
    ],
    impact: [
      { value: "3-in-1", label: "app · portal · API" },
      { value: "Real-time", label: "inventory analytics" },
    ],
    gallery: [
      {
        src: "/projects/bbm-feature.png",
        alt: "Blueberry Mart — Shop groceries. Earn rewards. Pay with eSewa.",
        caption: "Blueberry Mart — a full-stack grocery commerce platform.",
        kind: "photo",
      },
      {
        src: "/projects/bbm-catalog.png",
        alt: "Blueberry Mart storefront with best sellers and produce",
        caption: "Customer storefront — browse a branch's catalog.",
        kind: "screenshot",
      },
      {
        src: "/projects/bbm-analytics-revenue.png",
        alt: "Analytics dashboard showing total revenue and a 14-day trend",
        caption: "Real-time revenue analytics dashboard.",
        kind: "screenshot",
      },
      {
        src: "/projects/bbm-analytics-items.png",
        alt: "Top-selling items and pickup-vs-delivery breakdown",
        caption: "Top sellers and pickup vs. delivery split.",
        kind: "screenshot",
      },
      {
        src: "/projects/bbm-branches.png",
        alt: "Shop-by-branch selection screen",
        caption: "Multi-branch shopping.",
        kind: "screenshot",
      },
      {
        src: "/projects/bbm-bulk.png",
        alt: "Bulk orders for Blueberry Plus members",
        caption: "Tiered membership unlocks bulk ordering.",
        kind: "screenshot",
      },
      {
        src: "/projects/bbm-assistant.png",
        alt: "In-app shopping assistant",
        caption: "AI shopping assistant.",
        kind: "screenshot",
      },
    ],
  },
  {
    name: "Little AI Helper",
    blurb:
      "Built an AI-powered Chrome extension that autofills job applications, generates tailored answers and cover letters from your resume, and flags visa-sponsorship requirements — backed by Gemini and a Cloud Run → Vertex AI proxy.",
    tags: ["TypeScript", "React", "Vite", "Manifest V3", "Gemini", "Cloud Run"],
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/Little%20AI%20Helper/iibpijacaghdcckphindbaijjgcbaoll",
      },
      { label: "Repo", href: "https://github.com/ritsth/job-autofill-extension" },
    ],
    featured: true,
    theme: {
      gradient: "from-violet-500 via-purple-700 to-slate-900",
      icon: "puzzle",
      image: "/projects/little-ai-helper.png",
    },
    timeline: "2025 — Present",
    role: "Solo developer · published extension",
    problem:
      "Job seekers re-enter the same information across dozens of applications and agonize over open-ended questions and cover letters — a slow, repetitive grind, made worse when a role turns out to require visa sponsorship you don't have.",
    overview:
      "A published Chrome extension (Manifest V3) that autofills applications on Greenhouse, Lever, and Workday, drafts tailored answers and cover letters from your resume, and flags visa-sponsorship / eligibility requirements at a glance.",
    highlights: [
      "Autofills standard fields and drafts AI answers to open-ended questions on Greenhouse, Lever, and Workday",
      "Generates downloadable cover letters from a template with company / role / date placeholders",
      "Scans every page for visa-sponsorship, citizenship, and clearance language and shows a YES / NO eligibility badge",
      "Pluggable AI layer: bring-your-own Gemini key, on-device model, or a managed Cloud Run → Vertex AI proxy with Google sign-in and per-user daily quotas",
    ],
    stack: [
      "TypeScript",
      "React",
      "Vite",
      "@crxjs/vite-plugin",
      "Manifest V3",
      "Gemini",
      "Vertex AI",
      "Cloud Run",
      "Firestore",
    ],
    impact: [
      { value: "Published", label: "on Chrome Web Store" },
      { value: "3 boards", label: "Greenhouse · Lever · Workday" },
    ],
    gallery: [
      {
        src: "/projects/lah-panel.png",
        alt: "Little AI Helper side panel open on a job posting",
        caption: "Side panel: fill page, generate cover letter, tailored resume.",
        kind: "screenshot",
      },
      {
        src: "/projects/lah-autofill.png",
        alt: "AI-drafted answers to open-ended application questions",
        caption: "AI drafts answers to open-ended questions from your resume.",
        kind: "screenshot",
      },
      {
        src: "/projects/lah-badge.png",
        alt: "Eligibility badge flagging visa-sponsorship on a job posting",
        caption: "YES / NO eligibility badge on every job page.",
        kind: "screenshot",
      },
      {
        src: "/projects/lah-settings.png",
        alt: "Little AI Helper settings and AI provider configuration",
        caption: "Settings — pick your AI provider; data stays on device.",
        kind: "screenshot",
      },
    ],
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
    timeline: "2024 — 2025",
    role: "Backend engineer",
    problem:
      "Students hunting for internships bounce between scattered job boards with no single place tailored to campus recruiting.",
    overview:
      "A job-posting platform for students, built as five C#/.NET 8 microservices that communicate over gRPC, HTTP, and Kafka — containerized with Docker and deployed on Azure Kubernetes Service.",
    highlights: [
      "Five backend services in C#/.NET 8 and Node.js communicating over gRPC, HTTP, and Kafka",
      "Containerized with Docker and orchestrated on Azure Kubernetes Service (AKS)",
      "CI/CD pipelines via GitHub Actions and Azure DevOps",
      "MySQL and SQL Server tuned for efficient storage and retrieval",
    ],
    stack: [
      "C#",
      ".NET 8",
      "Node.js",
      "gRPC",
      "Kafka",
      "Docker",
      "Kubernetes",
      "AKS",
      "Azure DevOps",
      "MySQL",
      "SQL Server",
    ],
    impact: [
      { value: "5", label: "microservices" },
      { value: "gRPC + Kafka", label: "service communication" },
    ],
    gallery: [
      {
        src: "/projects/jobbie.jpg",
        alt: "Jobbie job board",
        caption: "Architecture diagram coming soon.",
        kind: "photo",
      },
    ],
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
    timeline: "2025",
    role: "ML engineer · Nestlé project",
    problem:
      "Consumer-goods R&D teams need to spot emerging flavor trends early, but the signal is buried in millions of unstructured product reviews.",
    overview:
      "A sentiment-driven flavor-prediction system that mines 14M Amazon reviews to surface and rank emerging flavor trends, giving Nestlé a data-driven lens for R&D decisions.",
    highlights: [
      "Logistic Regression with TF-IDF plus RoBERTa to extract nuanced flavor sentiment from 14M reviews",
      "Scoring model combining popularity, growth velocity, and sentiment to rank emerging trends",
      "Outputs designed to guide data-driven R&D prioritization",
    ],
    stack: [
      "Python",
      "RoBERTa",
      "TF-IDF",
      "Logistic Regression",
      "NLP",
      "pandas",
      "scikit-learn",
    ],
    impact: [{ value: "14M", label: "reviews analyzed" }],
    gallery: [
      {
        src: "/projects/flavor.jpg",
        alt: "Flavor Radar trend analysis",
        caption: "Trend-ranking charts coming soon.",
        kind: "photo",
      },
    ],
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
    role: "Full-stack + ML developer",
    problem:
      "Plant owners forget watering schedules and struggle to identify species or diagnose an ailing plant.",
    overview:
      "A plant-focused social app with smart watering reminders — TensorFlow image classification identifies plants, while Arduino humidity sensors feed real-time soil data back to the app.",
    highlights: [
      "TensorFlow image classification for plant identification",
      "Arduino humidity sensors streaming real-time soil data",
      "Django backend with a React Native mobile client on AWS",
    ],
    stack: ["Django", "React Native", "TensorFlow", "AWS", "Arduino"],
    gallery: [
      {
        src: "/projects/branch.jpg",
        alt: "Branch plant app",
        kind: "photo",
      },
    ],
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
    role: "Full-stack developer",
    problem:
      "Outfit inspiration lives on social feeds, but finding and buying the exact items someone posted is a scavenger hunt.",
    overview:
      "A Next.js social shopping app to browse clothing, discover outfit inspiration, and shop the exact products people post.",
    highlights: [
      "Social feed for posting and discovering outfits",
      "Shoppable posts that link straight to the exact products",
      "Next.js + MongoDB with a Tailwind UI",
    ],
    stack: ["Next.js", "MongoDB", "Tailwind", "TypeScript"],
    gallery: [
      { src: "/projects/style3.jpg", alt: "Style Board outfit inspiration", kind: "photo" },
      { src: "/projects/style7.jpg", alt: "Style Board outfit inspiration", kind: "photo" },
      { src: "/projects/style4.jpg", alt: "Style Board outfit inspiration", kind: "photo" },
      { src: "/projects/style1.jpg", alt: "Style Board outfit inspiration", kind: "photo" },
      { src: "/projects/style8.jpg", alt: "Style Board outfit inspiration", kind: "photo" },
      { src: "/projects/style5.jpg", alt: "Style Board outfit inspiration", kind: "photo" },
    ],
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
    role: "Embedded developer",
    problem:
      "A hands-on embedded-control challenge: make a robot balance, walk, and dance by coordinating multiple actuators and sensors in real time.",
    overview:
      "An Arduino-powered robot that walks and dances, coordinating multiple sensors and servo motors with embedded C++.",
    highlights: [
      "Coordinated multiple servo motors for walking and dance routines",
      "Sensor fusion for balance and movement timing",
      "Written in embedded C++ on Arduino",
    ],
    stack: ["Arduino", "C++", "Servo Motors", "Sensors"],
    gallery: [
      {
        src: "/projects/robot.jpg",
        alt: "Dancing Robot Arduino build",
        kind: "photo",
      },
    ],
  },
];

export type Involvement = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const involvement: Involvement[] = [
  {
    role: "Chair of Cultural Events",
    org: "Nepalese Student Association",
    period: "Oct 2025 — Present",
    bullets: [
      "Designed and promoted a multi-faceted program featuring traditional dance, music, and cuisine, increasing campus engagement with Nepalese culture by 40% compared to prior years",
    ],
  },
  {
    role: "Member",
    org: "Women in Math and Computer Science",
    period: "Oct 2022 — Present",
    bullets: [
      "Fostered inclusivity and diversity within the STEM community by actively participating in club initiatives, promoting equal representation and support for underrepresented groups in math and computer science",
    ],
  },
  {
    role: "Member",
    org: "Society of Women Engineers",
    period: "Apr 2025 — Present",
    bullets: [
      "Participated in annual Society of Women Engineers conference, connecting with global engineering professionals, engaging in technical workshops, and exploring innovations across disciplines",
    ],
  },
];

export type Honor = {
  name: string;
  issuer: string;
  since: string;
  description?: string;
};

export const honors: Honor[] = [
  {
    name: "Pi Mu Epsilon",
    issuer: "Denison University",
    since: "Mar 2025",
    description: "International Honor Society for Mathematics",
  },
  {
    name: "Upsilon Pi Epsilon",
    issuer: "Denison University",
    since: "Feb 2025",
    description: "Honorary Society for Computing & Information Disciplines",
  },
  {
    name: "Forbes B. Wiley Award",
    issuer: "Denison Mathematics Dept.",
    since: "2025",
    description: "Awarded for outstanding achievement in mathematics",
  },
  {
    name: "Dean's List",
    issuer: "Denison University",
    since: "2022 — 2026",
    description: "Maintained GPA of 3.79 / 4.00 throughout degree",
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
