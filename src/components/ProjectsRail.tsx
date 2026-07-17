"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { projects, type Project, type ProjectIcon } from "@/lib/data";
import { ChevronIcon } from "./Icons";
import { HandLabel, SectionHeader } from "./Doodles";
import ProjectDetail from "./ProjectDetail";

// A large, subtle watermark icon that reflects each project's domain.
function PosterIcon({ icon, className }: { icon: ProjectIcon; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
  switch (icon) {
    case "briefcase": // Jobbie — careers / job board
      return (
        <svg {...common}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M2 13h20M12 12v2" />
        </svg>
      );
    case "flavor": // Flavor Radar — flavor R&D
      return (
        <svg {...common}>
          <path d="M9 3h6" />
          <path d="M10 3v6l-5.2 9.3A2 2 0 0 0 6.6 21h10.8a2 2 0 0 0 1.8-2.7L14 9V3" />
          <path d="M6.5 16h11" />
        </svg>
      );
    case "leaf": // Branch — plants
      return (
        <svg {...common}>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6" />
        </svg>
      );
    case "fashion": // Style Board — clothing / shopping
      return (
        <svg {...common}>
          <path d="M20.4 3.5 16 2a4 4 0 0 1-8 0L3.6 3.5a2 2 0 0 0-1.3 2.2l.6 3.5a1 1 0 0 0 1 .8H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.1a1 1 0 0 0 1-.8l.6-3.5a2 2 0 0 0-1.3-2.2Z" />
        </svg>
      );
    case "robot": // Dancing Robot — Arduino
      return (
        <svg {...common}>
          <rect x="4" y="8" width="16" height="12" rx="2" />
          <path d="M12 8V4M12 4h-1.5a1.5 1.5 0 1 1 1.5-1.5" />
          <path d="M9 13v1.5M15 13v1.5M9.5 17h5M2 13v3M22 13v3" />
        </svg>
      );
    case "cart": // Blueberry Mart — grocery commerce
      return (
        <svg {...common}>
          <circle cx="9" cy="20" r="1.5" />
          <circle cx="18" cy="20" r="1.5" />
          <path d="M2 3h2.2l2.4 12.4a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.2L21 7H5" />
        </svg>
      );
    case "puzzle": // Little AI Helper — Chrome extension
      return (
        <svg {...common}>
          <path d="M9 3a2 2 0 0 1 4 0c0 .5-.2 1-.5 1.4.3.3.5.7.5 1.1h3.5a1 1 0 0 1 1 1V10c.4 0 .8-.2 1.1-.5.4-.3.9-.5 1.4-.5a2 2 0 0 1 0 4c-.5 0-1-.2-1.4-.5-.3-.3-.7-.5-1.1-.5v3.5a1 1 0 0 1-1 1H13c0 .4.2.8.5 1.1.3.4.5.9.5 1.4a2 2 0 0 1-4 0c0-.5.2-1 .5-1.4.3-.3.5-.7.5-1.1H7.5a1 1 0 0 1-1-1V13c-.4 0-.8.2-1.1.5-.4.3-.9.5-1.4.5a2 2 0 0 1 0-4c.5 0 1 .2 1.4.5.3.3.7.5 1.1.5V7.5a1 1 0 0 1 1-1H9c0-.4-.2-.8-.5-1.1C8.2 5 8 4.5 8 4" />
        </svg>
      );
    case "chat": // TransCore chatbot — support conversations
      return (
        <svg {...common}>
          <path d="M21 12a8 8 0 0 1-8 8H4l2.4-2.9A8 8 0 1 1 21 12Z" />
          <path d="M8.5 10.5h7M8.5 13.5h4.5" />
        </svg>
      );
  }
}

/** Bits of "tape" holding a clipping onto the page. */
function Tape({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-10 h-5 w-14 opacity-70 ${className}`}
      style={{
        background: "var(--accent-soft)",
        border: "1px solid var(--border)",
        transform: "rotate(-4deg)",
      }}
    />
  );
}

function ProjectCard({
  project: p,
  index,
  reduce,
  onOpen,
}: {
  project: Project;
  index: number;
  reduce: boolean;
  onOpen: () => void;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const cardImage = p.theme.image ?? p.theme.collage?.[0];
  const wobble = index % 2 === 0 ? "wobbly" : "wobbly-alt";

  function onMove(e: React.MouseEvent) {
    if (reduce) return;
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * -7,
      y: ((e.clientX - r.left) / r.width - 0.5) * 7,
    });
  }

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      whileHover={reduce ? undefined : { scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{ borderColor: "var(--ink)" }}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${p.name} — open case study`}
      className={`group relative w-[280px] shrink-0 cursor-pointer snap-start border-2 bg-card p-3 pb-4 shadow-sm transition-shadow hover:z-10 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${wobble}`}
    >
      <span className="font-hand pointer-events-none absolute -top-3 left-4 z-10 bg-background px-2 text-base text-accent">
        no. {String(index + 1).padStart(2, "0")}
        {p.featured && " ★"}
      </span>

      {/* the "clipping": screenshot taped onto the card — tilts toward the cursor */}
      <motion.div
        className="relative"
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        style={{ transformPerspective: 600 }}
      >
        <Tape className="-left-3 -top-2" />
        <Tape className="-right-3 -top-2 rotate-6" />
        <div
          className="relative h-40 overflow-hidden rounded-sm border border-border"
          style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1.2}deg)` }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${p.theme.gradient} opacity-20`} />
          {cardImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cardImage}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <PosterIcon
              icon={p.theme.icon}
              className="absolute right-2 top-2 h-28 w-28 text-doodle opacity-40"
            />
          )}
        </div>
      </motion.div>

      <h3 className="mt-4 text-base font-bold leading-snug text-foreground">
        {p.name}
      </h3>
      <p className="mt-1.5 line-clamp-3 text-[13px] leading-relaxed text-muted">
        {p.blurb}
      </p>

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {p.tags.slice(0, 4).map((t) => (
          <li
            key={t}
            className="wobbly-sm border border-border px-2 py-0.5 font-mono text-[10.5px] font-medium text-muted"
          >
            {t}
          </li>
        ))}
      </ul>

      <span className="font-hand mt-3 block text-base text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        open the case study →
      </span>
    </motion.article>
  );
}

export default function ProjectsRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Project | null>(null);
  const reduce = useReducedMotion() ?? false;

  function scroll(dir: 1 | -1) {
    railRef.current?.scrollBy({ left: dir * 310, behavior: "smooth" });
  }

  // Esc to close + lock body scroll while a case study is open.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  return (
    <section id="projects" className="mt-28 scroll-mt-24">
      <div className="flex items-start justify-between">
        <SectionHeader
          number="02"
          title="Projects"
          handNote="things I've built"
        />
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll projects left"
            className="wobbly-sm inline-flex h-9 w-9 items-center justify-center border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronIcon className="h-4 w-4 rotate-180" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll projects right"
            className="wobbly-sm inline-flex h-9 w-9 items-center justify-center border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        className="-mx-2 flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 py-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p, i) => (
          <ProjectCard
            key={p.name}
            project={p}
            index={i}
            reduce={reduce}
            onOpen={() => setActive(p)}
          />
        ))}
      </div>
      <HandLabel rotate={-1} className="mt-1 block px-2 text-base text-doodle">
        ← scroll sideways · click any card for the full story
      </HandLabel>

      {/* No AnimatePresence: exit-completion never fires in this
          Motion/React combo and the dialog hangs open. Enter animations
          still run; close is instant. */}
      {active && (
        <ProjectDetail
          key={active.name}
          project={active}
          reduce={reduce}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}
