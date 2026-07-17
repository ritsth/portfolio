"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";
import { Squiggle } from "./Doodles";

const sections = [
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
  { id: "involvement", label: "involvement" },
  { id: "now", label: "now" },
  { id: "contact", label: "contact" },
];

function Monogram() {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="font-hand relative shrink-0 text-2xl font-bold text-foreground"
    >
      <span className="relative px-2">
        <svg
          viewBox="0 0 60 34"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden
        >
          <path
            d="M30,3 C48,2 57,8 56,17 C55,27 44,32 29,31 C13,30 3,26 4,16 C5,7 16,4 32,3"
            fill="none"
            stroke="var(--accent)"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
        RS
      </span>
    </a>
  );
}

export default function TopNav() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[54rem] items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6">
        <Monogram />

        {/* Desktop: inline nav (fits without scrolling at md and up) */}
        <nav aria-label="In-page" className="hidden md:block">
          <ul className="flex items-center gap-2">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <motion.a
                    href={`#${s.id}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`font-hand block px-2.5 py-1 text-lg transition-colors ${
                      isActive
                        ? "text-accent"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    <span className="relative inline-block">
                      {s.label}
                      {isActive && <Squiggle />}
                    </span>
                  </motion.a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile: menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              className="h-4 w-4"
              aria-hidden
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3.5 7.5h17M3.5 12h17M3.5 16.5h17" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile: dropdown menu (rendered only when open — no scrolling strip) */}
      {open && (
        <motion.nav
          aria-label="In-page"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          className="border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden"
        >
          <ul className="mx-auto grid max-w-[54rem] grid-cols-2 gap-1 px-4 py-3">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className={`font-hand block rounded-lg px-3 py-2 text-xl transition-colors ${
                      isActive
                        ? "bg-accent-soft text-accent"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
