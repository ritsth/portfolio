"use client";

import { motion } from "motion/react";
import type { Project } from "@/lib/data";
import { ArrowIcon } from "./Icons";

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export default function ProjectDetail({
  project: p,
  onClose,
  reduce,
}: {
  project: Project;
  onClose: () => void;
  reduce: boolean;
}) {
  const gallery = p.gallery ?? [];
  const hero = gallery[0]?.src ?? p.theme.image ?? p.theme.collage?.[0];
  // Images beyond the hero (hero already shows at the top of the panel).
  const extraGallery = gallery.slice(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* panel — shares layoutId with the rail card so it morphs open/closed */}
      <motion.div
        layoutId={reduce ? undefined : `project-${p.name}`}
        initial={reduce ? { opacity: 0 } : false}
        animate={reduce ? { opacity: 1 } : undefined}
        exit={reduce ? { opacity: 0 } : undefined}
        role="dialog"
        aria-modal="true"
        aria-label={`${p.name} — case study`}
        className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
      >
        {/* hero */}
        <div className="relative h-48 shrink-0 sm:h-60">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${p.theme.gradient}`}
          />
          {hero && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={hero}
              alt={gallery[0]?.alt ?? p.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${p.theme.gradient} opacity-30 mix-blend-soft-light`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
          >
            <CloseIcon className="h-4 w-4" />
          </button>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-2xl font-bold text-white drop-shadow">
                {p.name}
              </h2>
              {p.featured && (
                <span className="rounded-full bg-white/20 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                  ★ Featured
                </span>
              )}
            </div>
            {(p.timeline || p.role) && (
              <p className="mt-1 font-mono text-xs text-white/80">
                {[p.timeline, p.role].filter(Boolean).join("  ·  ")}
              </p>
            )}
          </div>
        </div>

        {/* scrollable content — fades in after the morph */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 0.15, duration: 0.3 }}
          className="min-h-0 flex-1 space-y-7 overflow-y-auto p-6 sm:p-7"
        >
          {p.problem && (
            <section>
              <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
                The problem
              </h3>
              <p className="text-sm leading-relaxed text-muted">{p.problem}</p>
            </section>
          )}

          <section>
            <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
              What I built
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              {p.overview ?? p.blurb}
            </p>
          </section>

          {extraGallery.length > 0 && (
            <section>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                Gallery
              </h3>
              <div className="-mx-1 flex snap-x gap-3 overflow-x-auto px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {extraGallery.map((m) => (
                  <figure
                    key={m.src}
                    className="w-56 shrink-0 snap-start overflow-hidden rounded-xl border border-border"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.src}
                      alt={m.alt}
                      loading="lazy"
                      className="h-36 w-full object-cover"
                    />
                    {m.caption && (
                      <figcaption className="px-3 py-2 text-[11px] leading-snug text-muted">
                        {m.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {p.highlights && p.highlights.length > 0 && (
            <section>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                Highlights
              </h3>
              <ul className="space-y-2">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {p.impact && p.impact.length > 0 && (
            <section>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                Impact
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {p.impact.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-border bg-background p-3"
                  >
                    <div className="text-lg font-bold text-foreground">
                      {s.value}
                    </div>
                    <div className="text-[11px] leading-snug text-muted">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
              Stack
            </h3>
            <ul className="flex flex-wrap gap-2">
              {(p.stack ?? p.tags).map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs font-medium text-accent"
                >
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <section className="flex flex-wrap gap-3 pt-1">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {l.label}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </section>
        </motion.div>
      </motion.div>
    </div>
  );
}
