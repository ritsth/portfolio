// Maps a tech name -> a Devicon class. `colored: false` makes the glyph
// inherit the current text color (used for logos that are dark-on-dark,
// e.g. Next.js, Kafka, Django). Tech with no brand logo (gRPC, RAG, RoBERTa,
// Ollama, LLMs...) gets a hand-drawn icon that reflects what it does.

type IconMeta = { cls: string; colored?: boolean };

const DEVICON: Record<string, IconMeta> = {
  "c#": { cls: "devicon-csharp-plain", colored: true },
  python: { cls: "devicon-python-plain", colored: true },
  typescript: { cls: "devicon-typescript-plain", colored: true },
  javascript: { cls: "devicon-javascript-plain", colored: true },
  "c++": { cls: "devicon-cplusplus-plain", colored: true },
  sql: { cls: "devicon-microsoftsqlserver-plain", colored: true },
  php: { cls: "devicon-php-plain", colored: true },
  r: { cls: "devicon-r-plain", colored: true },
  "react native": { cls: "devicon-react-original", colored: true },
  "next.js": { cls: "devicon-nextjs-plain" },
  "node.js": { cls: "devicon-nodejs-plain", colored: true },
  django: { cls: "devicon-django-plain" },
  ".net": { cls: "devicon-dotnetcore-plain", colored: true },
  "vue.js": { cls: "devicon-vuejs-plain", colored: true },
  docker: { cls: "devicon-docker-plain", colored: true },
  kubernetes: { cls: "devicon-kubernetes-plain", colored: true },
  azure: { cls: "devicon-azure-plain", colored: true },
  aws: { cls: "devicon-amazonwebservices-plain-wordmark", colored: true },
  "ci/cd": { cls: "devicon-githubactions-plain", colored: true },
  kafka: { cls: "devicon-apachekafka-original" },
  tensorflow: { cls: "devicon-tensorflow-original", colored: true },
  gitlab: { cls: "devicon-gitlab-plain", colored: true },
  drupal: { cls: "devicon-drupal-plain", colored: true },
  mongodb: { cls: "devicon-mongodb-plain", colored: true },
};

const svg = (className: string, children: React.ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    {children}
  </svg>
);

// Semantic icons for tech without an official brand logo.
const SEMANTIC: Record<string, (c: string) => React.ReactNode> = {
  // gRPC — remote calls between distributed services
  grpc: (c) =>
    svg(
      c,
      <>
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="M8.2 10.8 15.6 6.4M8.2 13.2 15.6 17.6" />
      </>
    ),
  // RAG — retrieval over documents
  rag: (c) =>
    svg(
      c,
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h5" />
        <path d="M14 2v5h5" />
        <circle cx="16.5" cy="16.5" r="3" />
        <path d="m21 21-1.6-1.6" />
      </>
    ),
  // RoBERTa / NLP — language understanding
  roberta: (c) =>
    svg(
      c,
      <>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M7 9h10M7 13h6" />
      </>
    ),
  nlp: (c) =>
    svg(
      c,
      <>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M7 9h10M7 13h6" />
      </>
    ),
  // LLMs / AI — a model / bot
  llms: (c) =>
    svg(
      c,
      <>
        <rect x="4" y="7" width="16" height="13" rx="2" />
        <path d="M12 7V4" />
        <circle cx="12" cy="3" r="1" />
        <path d="M9 13v1.5M15 13v1.5" />
        <path d="M9.5 17h5" />
        <path d="M2 13v2M22 13v2" />
      </>
    ),
  ai: (c) =>
    svg(
      c,
      <>
        <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
        <path d="M19 14l.7 1.8L21.5 16l-1.8.7L19 18.5l-.7-1.8L16.5 16l1.8-.7z" />
      </>
    ),
  // Ollama / Prompt Engineering — running models from a terminal
  ollama: (c) =>
    svg(
      c,
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="m7 9 3 3-3 3" />
        <path d="M13 15h4" />
      </>
    ),
  "prompt engineering": (c) =>
    svg(
      c,
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="m7 9 3 3-3 3" />
        <path d="M13 15h4" />
      </>
    ),
  // Machine Learning — a small neural net
  "machine learning": (c) =>
    svg(
      c,
      <>
        <circle cx="5" cy="6" r="1.6" />
        <circle cx="5" cy="18" r="1.6" />
        <circle cx="12" cy="12" r="1.6" />
        <circle cx="19" cy="6" r="1.6" />
        <circle cx="19" cy="18" r="1.6" />
        <path d="M6.5 6.7 10.6 11M6.5 17.3 10.6 13M13.4 11 17.5 6.7M13.4 13 17.5 17.3" />
      </>
    ),
  // Recommender Systems — ranked preferences
  "recommender systems": (c) =>
    svg(
      c,
      <>
        <path d="M4 21v-6M4 11V3M12 21v-9M12 8V3M20 21v-4M20 13V3" />
        <path d="M2 15h4M10 8h4M18 17h4" />
      </>
    ),
  // Logistic Regression — an S-curve fit
  "logistic regression": (c) =>
    svg(
      c,
      <>
        <path d="M4 4v16h16" />
        <path d="M6 17c3.5 0 3-9 6.5-9s4 6 7.5 6" />
      </>
    ),
};

function GenericIcon({ className }: { className: string }) {
  return svg(
    className,
    <>
      <path d="M8 6 3 12l5 6M16 6l5 6-5 6M13 4l-2 16" />
    </>
  );
}

export function TechIcon({
  name,
  className = "text-3xl",
}: {
  name: string;
  className?: string;
}) {
  const key = name.toLowerCase();
  const meta = DEVICON[key];
  if (meta) {
    return (
      <i
        className={`${meta.cls} ${meta.colored ? "colored" : ""} ${className}`}
        style={meta.colored ? undefined : { color: "currentColor" }}
        aria-hidden
      />
    );
  }
  const semantic = SEMANTIC[key];
  if (semantic) return <>{semantic("h-7 w-7")}</>;
  return <GenericIcon className="h-7 w-7" />;
}
