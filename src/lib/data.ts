// Single source of truth for portfolio content.
// Pulled from Ritika Shrestha's resumes + real GitHub repos (github.com/ritsth).

export const profile = {
  name: "Ritika Shrestha",
  title: "Software Engineer",
  tagline: "Building at the intersection of AI and full-stack engineering.",
  intro:
    "Software engineer and Denison University CS & Math graduate, building full-stack systems and AI products, from microservice backends to LLM-powered tools.",
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
    period: "Apr 2026 - Present",
    bullets: [
      "Ship agentic coding projects end-to-end from natural-language specs, owning a 5-phase GitHub workflow to scope tasks, write evaluation rubrics, and benchmark 4 frontier models against them",
    ],
    tags: ["AI", "LLMs", "Agentic Coding", "Evals", "GitHub"],
  },
  {
    role: "AI/ML Fellow",
    company: "Breakthrough Tech AI · Cornell Tech",
    period: "May 2025 - May 2026",
    bullets: [
      "Selected for a competitive AI fellowship combining machine learning coursework with Cornell faculty, an industry AI Studio project, and mentorship from working ML practitioners",
    ],
    tags: ["Machine Learning", "AI", "NLP"],
  },
  {
    role: "Software Engineering Intern",
    company: "TransCore",
    period: "Jun 2025 - Aug 2025",
    bullets: [
      "Shipped a RAG chatbot that automated FAQ and toll-processing inquiries for customer service reps, hosting quantized Llama 3.2 Vision, Mistral, and Qwen locally via Ollama to keep customer data in-house within GPU memory limits",
      "Applied LoRA fine-tuning for tone-aware, de-escalating responses and built security guardrails, including input sanitization and semantic routing to block prompt injection before it reached the model",
    ],
    tags: ["RAG", "Ollama", "LoRA", "LLMs", "Python"],
  },
  {
    role: "Software Engineering Intern",
    company: "Real AI Dynamics (RAID)",
    period: "Dec 2024 - May 2025",
    bullets: [
      "Built a collaborative-filtering recommendation service for micro-SaaS platforms, serving personalized recommendations across 10 products",
      "Co-hosted AI workshops as an educator, creating technical content and delivering presentations to non-specialist audiences",
    ],
    tags: ["AI", "Recommender Systems", "Python"],
  },
  {
    role: "Junior Software Engineer",
    company: "Denison IT Web Services",
    period: "Nov 2022 - May 2026",
    bullets: [
      "Built a customizable app dashboard for the university's internal portal using Vue.js inside Drupal Twig, with drag-and-drop layouts, filtering, and saved per-user preferences; Google Analytics showed a 25% increase in engagement",
      "Automated the build and deployment workflow in GitLab CI/CD and resolved production support tickets across 4 years on the team",
    ],
    tags: ["Vue.js", "Drupal", "PHP", "CI/CD", "GitLab"],
  },
  {
    role: "Teaching Assistant",
    company: "Denison Computer Science Dept.",
    period: "Jan 2024 - May 2024",
    bullets: [
      "Tutored CS students through class content and assignments, and co-designed course structures with faculty, contributing to a 10% improvement in student grades",
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
  | "puzzle"
  | "chat";

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
  // Rich case-study fields (all optional), surfaced in the full-screen detail view.
  timeline?: string; // e.g. "2025 - Present"
  role?: string; // e.g. "Solo full-stack"
  problem?: string; // context / why it exists
  overview?: string; // what was built (longer than blurb)
  highlights?: string[]; // feature bullets
  stack?: string[]; // full tech list (superset of tags)
  impact?: { value: string; label: string }[]; // headline metrics
  gallery?: ProjectMedia[]; // multiple images; falls back to theme.image/collage when absent
  originStory?: string; // handwritten "why I built it" sticky note
  lessons?: { mistake: string; fix: string }; // what went wrong + what I'd do differently
};

export const projects: Project[] = [
  {
    name: "TransCore AI Support Chatbot",
    blurb:
      "An AI customer-service chatbot for toll processing, built during my TransCore internship, running locally hosted open-source LLMs with LoRA fine-tuning, RAG over live company docs, and prompt-injection guardrails.",
    tags: ["LLMs", "RAG", "Ollama", "LoRA", "Python"],
    links: [],
    featured: true,
    theme: {
      gradient: "from-cyan-600 via-teal-700 to-slate-900",
      icon: "chat",
      image: "/projects/transcore-arch.svg",
    },
    timeline: "Summer 2025",
    role: "Software engineer intern · internship work",
    problem:
      "TransCore's customer service team fields a steady stream of FAQ and toll-processing inquiries. An off-the-shelf chatbot API wasn't an option: customer data couldn't leave the company, GPU memory was limited, and a support bot that hallucinates toll charges is worse than no bot at all.",
    overview:
      "An AI-powered customer-service chatbot built with my team during my TransCore internship. We hosted quantized open-source models (Qwen, Mistral, LLaMA) locally with Ollama to keep data private within company infrastructure, and grounded every answer in real-time company documents through a RAG pipeline.",
    highlights: [
      "Hosted quantized Llama 3.2 Vision, Mistral, and Qwen locally via Ollama, chosen so customer data never left company infrastructure and the models still fit inside available GPU memory",
      "Applied LoRA fine-tuning on custom support transcripts to produce a tone-aware, de-escalating conversational style, scored by an automated LLM judge on empathy and professionalism",
      "Built a RAG pipeline over real-time company documents so toll and billing answers cite live policy instead of hallucinating charges",
      "Added security guardrails with input sanitization and semantic routing that blocks prompt-injection attempts before they reach the model",
    ],
    stack: [
      "Python",
      "Ollama",
      "Qwen / Mistral / LLaMA",
      "LoRA",
      "RAG",
      "LLM-as-judge",
      "Cloud VMs",
    ],
    impact: [
      { value: "Local-only", label: "models, customer data never leaves" },
      { value: "LLM judge", label: "automated tone & safety evals" },
    ],
    gallery: [
      {
        src: "/projects/transcore-arch.svg",
        alt: "Hand-drawn architecture sketch: user messages flow through guardrails to a RAG pipeline and locally hosted LLMs",
        caption: "How a question becomes a safe, grounded answer.",
        kind: "diagram",
      },
    ],
    originStory:
      "my first industry AI project, and the moment I realized shipping an LLM safely is a much harder (and more fun) problem than calling an API.",
  },
  {
    name: "Blueberry Mart",
    blurb:
      "The digital infrastructure for a multi-branch grocery mart launching in Nepal: a React Native customer app, a React back-office portal, and an event-driven .NET 8 backend on Cloud Run with Kafka streaming into BigQuery.",
    tags: [".NET 8", "React Native", "Kafka", "BigQuery", "PostgreSQL", "GCP"],
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
    timeline: "Jan 2026 - Present (closed testing on Google Play)",
    role: "Solo full-stack developer",
    problem:
      "Local grocery stores often lack an integrated system to manage inventory, memberships, and online orders, leaving owners juggling spreadsheets while customers miss out on a modern shopping experience.",
    overview:
      "I split the ecosystem into two worlds: a React Native mobile app for customers and a React TypeScript back-office portal on Firebase for store operations, both served by an event-driven .NET 8 backend running in serverless containers on Google Cloud Run.",
    highlights: [
      "Pivoted from a standard HTTP REST setup to a fully event-driven architecture on a managed Kafka cluster (Confluent Cloud), so an inventory change publishes one event that fans out to restock notifications, analytics, and other consumers",
      "Kept Cloud SQL PostgreSQL for live transactions and streamed Kafka events into BigQuery, so shareholders can run heavy analytical reports without slowing down customer checkout",
      "Built role-based access across customer, staff, and shareholder roles with automated EF Core 8 migrations, and locked every API key inside Google Cloud Secret Manager",
      "Shipped the product surface myself: an AI shopping assistant, automated restock alerts, eSewa payments, tiered memberships that unlock bulk ordering, and a self-service query builder for stakeholders",
      "Wired up GitHub Actions CI/CD so every push runs automated tests and security audits before deploying the backend to Cloud Run and the portal to Firebase Hosting",
    ],
    stack: [
      ".NET 8",
      "React Native",
      "React",
      "TypeScript",
      "Kafka",
      "Confluent Cloud",
      "PostgreSQL",
      "Cloud SQL",
      "BigQuery",
      "Cloud Run",
      "Firebase",
      "Secret Manager",
      "GitHub Actions",
    ],
    impact: [
      { value: "3-in-1", label: "app · portal · API" },
      { value: "Real-time", label: "inventory analytics" },
    ],
    gallery: [
      {
        src: "/projects/bbm-feature.png",
        alt: "Blueberry Mart: Shop groceries. Earn rewards. Pay with eSewa.",
        caption: "Blueberry Mart, a full-stack grocery commerce platform.",
        kind: "photo",
      },
      {
        src: "/projects/bbm-catalog.png",
        alt: "Blueberry Mart storefront with best sellers and produce",
        caption: "Customer storefront: browse a branch's catalog.",
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
    originStory:
      "my dad is building a multi-branch grocery store in Nepal, so I took full ownership of building the infrastructure to support it.",
    lessons: {
      mistake:
        "The hardest part was not the code, it was the architecture calls with no obvious right answer. The simple path was to run analytics queries directly against PostgreSQL, but I worried heavy reports would compete with live shopping traffic and slow the app for customers.",
      fix: "I weighed that against the cost of standing up Kafka and BigQuery, did the pros and cons comparison, and decided the separation was worth it: transactional reads stay on Postgres, analytics runs on BigQuery fed by Kafka events. Making that complexity judgment alone is one reason I want senior engineers around to pressure-test decisions like it.",
    },
  },
  {
    name: "Little AI Helper",
    blurb:
      "A published Chrome extension that autofills job applications, generates tailored answers and cover letters from your resume, and flags visa-sponsorship requirements, powered by Gemini and a Cloud Run to Vertex AI proxy.",
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
    timeline: "Apr 2026 - Present (live on the Chrome Web Store)",
    role: "Solo developer · published extension",
    problem:
      "Job seekers re-enter the same information across dozens of applications and agonize over open-ended questions and cover letters. It is a slow, repetitive grind, made worse when a role turns out to require visa sponsorship you don't have.",
    overview:
      "A published Chrome extension (Manifest V3) that autofills applications on Greenhouse, Lever, and Workday, drafts tailored answers and cover letters from your resume, and flags visa-sponsorship and eligibility requirements at a glance.",
    highlights: [
      "Built as a Manifest V3 extension with three moving parts: a React side panel for the UI, content scripts that scan the page DOM to find and fill form fields on Greenhouse, Lever, and Workday, and a background service worker",
      "Routes every AI call through a Cloud Run proxy instead of calling Gemini from the client, so the API key never ships in extension code, and adds rate limiting and request validation on the way through",
      "Generates downloadable cover letters from a reusable template that fills in company, role, and date placeholders per application",
      "Scans every job page for visa-sponsorship, citizenship, and clearance language and surfaces a YES or NO eligibility badge before you spend time applying",
      "Ships a pluggable AI layer: bring your own Gemini key, run an on-device model, or use the managed Cloud Run to Vertex AI proxy with Google sign-in and per-user daily quotas",
      "Drafts tailored answers to open-ended questions by grounding Gemini in the resume you upload once, so responses match your actual experience",
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
        caption: "Settings: pick your AI provider; data stays on device.",
        kind: "screenshot",
      },
    ],
    originStory:
      "applying to jobs was eating my life. same fields, same questions, dozens of times a week. so I made the robot help me with it.",
  },
  {
    name: "Jobbie",
    blurb:
      "A job-posting platform helping students find internships. Five C#/.NET 8 microservices communicating over gRPC, HTTP, and Kafka, containerized with Docker and deployed on Azure Kubernetes.",
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
    timeline: "Dec 2024 - Dec 2025",
    role: "Backend lead · team of 5",
    problem:
      "Students hunting for internships bounce between scattered job boards with no single place tailored to campus recruiting.",
    overview:
      "A job-posting platform for students, built as five C#/.NET 8 microservices that communicate over gRPC, HTTP, and Kafka, containerized with Docker and deployed on Azure Kubernetes Service.",
    highlights: [
      "Led a team of 5 to build 5 backend services in C#/.NET 8 and Node.js, choosing gRPC for low-latency internal calls, HTTP at the edge, and Kafka for anything that could be async",
      "Replaced synchronous REST calls between services with Kafka events after request chains started blocking on slow downstreams",
      "Used the transactional outbox pattern to guarantee event delivery across MySQL and SQL Server, so an event and its data commit atomically or not at all",
      "Containerized every service with Docker, orchestrated on Azure Kubernetes Service, and automated releases through GitHub Actions and Azure DevOps",
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
    originStory:
      "microservices were everywhere and I wanted to know why. so five of us built one for real, and I led the backend.",
    lessons: {
      mistake:
        "We put JWT validation inside each of the five microservices. Rotating a key or changing auth logic meant updating and redeploying all five services, which was redundant and risky.",
      fix: "Today I'd put a centralized API gateway (Ocelot or YARP) at the front to handle SSL termination and JWT verification before requests ever reach internal services, keeping each microservice focused purely on business logic. We did get cross-database consistency right: Kafka with the transactional outbox pattern, so an event and its data commit atomically or not at all.",
    },
  },
  {
    name: "Flavor Radar (Nestlé)",
    blurb:
      "A sentiment-driven flavor trend predictor analyzing 14M Amazon reviews with RoBERTa and TF-IDF, ranking emerging trends to guide data-driven R&D.",
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
    timeline: "Aug 2025 - Dec 2025",
    role: "ML engineer · Breakthrough Tech AI Studio project with Nestlé",
    problem:
      "Nestlé's R&D teams need to spot emerging flavor trends before the market does, but the signal is buried in millions of unstructured product reviews, and raw star ratings can't tell genuine excitement from viral hype or negative complaints.",
    overview:
      "A data-driven \"Flavor Radar\" built with Nestlé through the Breakthrough Tech AI Studio: a 500M-review Amazon dataset narrowed to ~14 million Grocery & Gourmet Food reviews, mined with NLP to track how consumer excitement around flavors shifts over time and predict future market demand.",
    highlights: [
      "Ran exploratory analysis of quarterly flavor mentions to separate stable, mature flavors from fast-rising opportunities worth investigating",
      "Benchmarked three models, a VADER rule-based baseline, TF-IDF logistic regression, and a RoBERTa transformer with zero-shot classification, lifting macro-F1 from 0.54 to 0.74+ across all sentiment classes",
      "Handled severe class imbalance in raw star ratings so the model could distinguish genuine enthusiasm from viral hype and complaints",
      "Blended popularity, growth velocity, and context-aware sentiment into one composite Emerging Score that surfaced trends like Whole Bean Coffee, Cookies & Cream, and Caramel for R&D prioritization",
    ],
    stack: [
      "Python",
      "RoBERTa",
      "Zero-shot classification",
      "TF-IDF",
      "Logistic Regression",
      "VADER",
      "NLP",
      "pandas",
      "scikit-learn",
    ],
    impact: [
      { value: "14M", label: "Amazon reviews analyzed" },
      { value: "0.54 → 0.74", label: "macro-F1 across sentiment classes" },
    ],
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
      "A plant-focused social app with smart watering reminders, using TensorFlow image classification for plant ID and Arduino humidity sensors feeding real-time soil data.",
    tags: ["Django", "React Native", "TensorFlow", "AWS", "Arduino"],
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
      "A plant-focused social platform with smart watering reminders: a Django and React web app plus a React Native client for iOS and Android, where TensorFlow image classification identifies plants and Arduino humidity sensors feed real-time soil data back to the app.",
    highlights: [
      "Built the social layer with user profiles, photo uploads, comments, and likes so plant owners can share and diagnose plants together",
      "Trained a TensorFlow image classification model that identifies a plant from a photo and returns detailed care instructions",
      "Integrated an Arduino humidity sensor over Bluetooth to stream live soil data and trigger automated watering notifications",
      "Backed it with a Django REST API and AWS S3 for image storage, serving both the web app and the React Native mobile client",
    ],
    stack: [
      "Django",
      "Django REST Framework",
      "React",
      "React Native",
      "TensorFlow",
      "AWS S3",
      "Arduino",
    ],
    gallery: [
      {
        src: "/projects/branch.jpg",
        alt: "Branch plant app",
        kind: "photo",
      },
    ],
    originStory:
      "this one's for my mom. she's a huge plant enthusiast, so I built her an app that reminds you to water them and tells you what each plant needs.",
    lessons: {
      mistake:
        "Integrating the Arduino Bluetooth module and humidity sensor directly with the React front end failed. There were no usable libraries for it, and I had picked the stack before checking whether the pieces could actually talk to each other.",
      fix: "I broke the problem apart and got sensor data flowing reliably into the backend first, then let the app read from there instead of talking to hardware directly. The lesson stuck: research compatibility and plan the architecture, including each tool's strengths and weaknesses, before committing to it. I applied the same thinking later when the plant identification model was too large to ship, simplifying the architecture with lazy loading and a cache layer.",
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
    role: "Full-stack developer",
    problem:
      "Outfit inspiration lives on social feeds, but finding and buying the exact items someone posted is a scavenger hunt.",
    overview:
      "A Next.js social shopping app to browse clothing, discover outfit inspiration, and shop the exact products people post.",
    highlights: [
      "Social feed where users post outfits and browse clothing for inspiration",
      "Shoppable posts that link each item straight to the exact product, so a look you like is one click from purchase",
      "Built on Next.js and MongoDB with a Tailwind UI and TypeScript throughout",
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
      "An Arduino-powered robot that walks and dances, coordinating multiple sensors and servo motors with embedded C++.",
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
      "An Arduino-powered robot that walks and dances, coordinating multiple sensors and servo motors with embedded C++ running on constrained hardware.",
    highlights: [
      "Choreographed multiple servo motors into timed walking gaits and dance routines that stay in sync",
      "Combined sensor readings for balance and movement timing so the robot corrects itself instead of tipping",
      "Written in embedded C++ on Arduino, working within tight memory and timing constraints",
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
    period: "Oct 2025 - Present",
    bullets: [
      "Designed and promoted a multi-faceted program featuring traditional dance, music, and cuisine, increasing campus engagement with Nepalese culture by 40% compared to prior years",
    ],
  },
  {
    role: "Member",
    org: "Women in Math and Computer Science",
    period: "Oct 2022 - Present",
    bullets: [
      "Fostered inclusivity and diversity within the STEM community by actively participating in club initiatives, promoting equal representation and support for underrepresented groups in math and computer science",
    ],
  },
  {
    role: "Member",
    org: "Society of Women Engineers",
    period: "Apr 2025 - Present",
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
    since: "2022 - 2026",
    description: "Maintained GPA of 3.79 / 4.00 throughout degree",
  },
];

// The "Now" section: what I'm currently up to. Update occasionally.
export const now = {
  updated: "July 2026",
  items: [
    {
      label: "building",
      text: "iterating on Little AI Helper, with smarter autofill and better cover letters, based on real user feedback from the Chrome Web Store",
    },
    {
      label: "learning",
      text: "machine-learning coursework with Cornell faculty through the Breakthrough Tech AI fellowship",
    },
    {
      label: "working on",
      text: "benchmarking AI models against engineered evaluation rubrics as a Handshake AI Fellow",
    },
    {
      label: "looking for",
      text: "a full-time software engineering or AI role where I can ship things people actually use",
    },
  ],
};

// About-section journey: the person behind the code.
export const journey = {
  photo: "/ritika.jpg",
  paragraphs: [
    "I grew up in Nepal and came to Denison University to study Computer Science and Mathematics. Somewhere between my first robot (it danced, sort of) and my first production LLM system, building software went from a major to a habit I can't put down.",
    "Last summer I interned at TransCore, where my team built an AI customer-service chatbot built on open-source LLMs hosted locally for privacy, RAG to keep answers honest, and guardrails to keep prompt injections out. As a Breakthrough Tech AI fellow at Cornell Tech, I worked with Nestlé on predicting flavor trends from 14 million Amazon reviews.",
    "When I'm not coding, I'm probably organizing a Nepali cultural event on campus. I chair cultural events for the Nepalese Student Association, which is my favorite way of bringing a piece of home to Ohio.",
  ],
  facts: [
    { label: "from", value: "Kathmandu, Nepal" },
    { label: "studied", value: "CS + Math @ Denison" },
    { label: "gpa", value: "3.79, Dean's List every year" },
    { label: "favorite bug", value: "the Bluetooth one that took 3 weeks" },
  ],
};

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
