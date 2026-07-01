"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { projects, type Project, type ProjectIcon } from "@/lib/data";
import { ArrowIcon, ChevronIcon } from "./Icons";
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
  }
}

export default function ProjectsRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Project | null>(null);
  const reduce = useReducedMotion() ?? false;

  function scroll(dir: 1 | -1) {
    railRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
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
    <section id="projects" className="mt-24 scroll-mt-24 lg:mt-36">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xs font-bold uppercase tracking-widest text-muted">
          Projects
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll projects left"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronIcon className="h-4 w-4 rotate-180" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll projects right"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        className="-mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            layoutId={reduce ? undefined : `project-${p.name}`}
            whileHover={reduce ? undefined : { scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
            onClick={() => setActive(p)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive(p);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`${p.name} — open case study`}
            className="group relative h-72 w-[270px] shrink-0 cursor-pointer snap-start overflow-hidden rounded-2xl border border-border shadow-sm transition-colors duration-300 hover:z-10 hover:border-accent hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {/* base themed gradient (shows behind/while photos load) */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${p.theme.gradient}`}
            />

            {/* background: Pinterest collage, single photo, or dot texture */}
            {p.theme.collage ? (
              <div className="absolute inset-0 columns-3 gap-1 [column-fill:balance]">
                {p.theme.collage.map((src) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt=""
                    loading="lazy"
                    className="mb-1 block w-full break-inside-avoid object-cover"
                  />
                ))}
              </div>
            ) : p.theme.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.theme.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
            )}

            {/* themed color wash so each card carries its theme color */}
            {(p.theme.image || p.theme.collage) && (
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.theme.gradient} opacity-35 mix-blend-soft-light`}
              />
            )}

            {/* readability tint — darkens on hover so details stay legible */}
            <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/60" />

            {/* domain watermark icon (only when there's no photo) */}
            {!p.theme.image && !p.theme.collage && (
              <PosterIcon
                icon={p.theme.icon}
                className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-white/20 transition-transform duration-500 group-hover:scale-110"
              />
            )}
            <span className="pointer-events-none absolute left-4 top-3 select-none font-mono text-2xl font-black text-white/60 drop-shadow">
              {String(i + 1).padStart(2, "0")}
            </span>
            {p.featured && (
              <span className="absolute right-3 top-3 rounded-full bg-black/30 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                ★ Featured
              </span>
            )}

            {/* info panel */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent p-5 pt-12">
              <h3 className="text-lg font-bold text-white">{p.name}</h3>

              <ul className="mt-2 flex flex-wrap gap-1.5">
                {p.tags.slice(0, 4).map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {/* revealed on hover */}
              <div className="grid grid-rows-[0fr] transition-all duration-300 group-hover:mt-3 group-hover:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="text-[13px] leading-relaxed text-white/85">
                    {p.blurb}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white">
                    View case study
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <p className="mt-2 px-2 font-mono text-[11px] text-muted">
        ← scroll · click a project for the full case study
      </p>

      <AnimatePresence>
        {active && (
          <ProjectDetail
            key={active.name}
            project={active}
            reduce={reduce}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
