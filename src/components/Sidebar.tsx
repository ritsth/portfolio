"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("about");

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

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
        <h2 className="mt-3 text-lg font-medium text-accent sm:text-xl">
          {profile.title}
        </h2>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
          {profile.tagline}
        </p>

        {/* Desktop nav */}
        <nav className="mt-16 hidden lg:block" aria-label="In-page">
          <ul className="space-y-4">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-center gap-4 py-1"
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-16 bg-accent"
                          : "w-8 bg-muted/50 group-hover:w-12 group-hover:bg-foreground"
                      }`}
                    />
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                        isActive
                          ? "text-accent"
                          : "text-muted group-hover:text-foreground"
                      }`}
                    >
                      {s.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex items-center gap-5 lg:mt-0">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-muted transition-colors hover:text-accent"
        >
          <GitHubIcon className="h-5 w-5" />
        </a>
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-muted transition-colors hover:text-accent"
        >
          <LinkedInIcon className="h-5 w-5" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="text-muted transition-colors hover:text-accent"
        >
          <MailIcon className="h-5 w-5" />
        </a>
        <span className="ml-auto">
          <ThemeToggle />
        </span>
      </div>
    </header>
  );
}
