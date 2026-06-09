import { experience, skills, profile } from "@/lib/data";
import { ArrowIcon, FileIcon, GitHubIcon, LinkedInIcon } from "./Icons";
import { TechIcon } from "@/lib/techIcons";
import Reveal from "./Reveal";
import CopyEmailCard from "./CopyEmailCard";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs font-medium text-accent">
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-xs font-bold uppercase tracking-widest text-muted lg:sr-only">
      {children}
    </h2>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeading>About</SectionHeading>
      <div className="space-y-4 text-[15px] leading-relaxed text-muted">
        <p>{profile.intro}</p>
        <p>
          For the last three years, I have also been working as a junior
          software engineer at{" "}
          <span className="font-medium text-foreground">
            Denison Web Services
          </span>
          , where I upgrade and maintain the university&apos;s official website
          using Drupal, a web content management system.
        </p>
        <p>
          Additionally, I have worked on multiple projects with my colleagues
          and friends. Most recently, I worked on developing{" "}
          <span className="font-medium text-foreground">Blueberry Mart</span>, a
          full-stack grocery commerce app with role-based access, real-time
          inventory analytics, and integrated eSewa payments.
        </p>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mt-24 scroll-mt-24 lg:mt-36">
      <SectionHeading>Experience</SectionHeading>
      <ol className="group/list space-y-3">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.role + job.company} delay={i * 60}>
            <div className="group relative grid gap-3 rounded-lg p-4 transition-all hover:bg-card hover:shadow-sm sm:grid-cols-8 sm:gap-6 lg:-mx-4 lg:hover:border lg:hover:border-border">
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted sm:col-span-2">
                {job.period}
              </p>
              <div className="sm:col-span-6">
                <h3 className="font-semibold text-foreground">
                  {job.role}
                  <span className="text-muted"> · {job.company}</span>
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
      <div className="mt-8 px-4 lg:px-0">
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent"
        >
          View full résumé
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mt-24 scroll-mt-24 lg:mt-36">
      <SectionHeading>Skills</SectionHeading>
      <div className="space-y-8">
        {skills.map((s, gi) => (
          <Reveal key={s.group} delay={gi * 60}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
              {s.group}
            </h3>
            <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-sm"
                >
                  <span className="flex h-8 items-center justify-center text-muted transition-colors group-hover:text-foreground">
                    <TechIcon name={item} className="text-3xl" />
                  </span>
                  <span className="text-[11px] font-medium text-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const cards = [
    {
      label: "GitHub",
      value: "@ritsth",
      href: profile.socials.github,
      icon: <GitHubIcon className="h-5 w-5" />,
    },
    {
      label: "LinkedIn",
      value: "Ritika Shrestha",
      href: profile.socials.linkedin,
      icon: <LinkedInIcon className="h-5 w-5" />,
    },
    {
      label: "Résumé",
      value: "Download PDF",
      href: profile.resume,
      icon: <FileIcon className="h-5 w-5" />,
    },
  ];

  return (
    <section id="contact" className="mt-24 scroll-mt-24 lg:mt-36">
      <SectionHeading>Contact</SectionHeading>
      <Reveal>
        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="text-2xl font-bold tracking-tight">Let&apos;s connect</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
            Open to software engineering & AI roles. The fastest way to reach me
            is email — or grab my résumé below.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <CopyEmailCard email={profile.email} />
            {cards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") || c.href.endsWith(".pdf") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition-all hover:-translate-y-0.5 hover:border-accent"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  {c.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted">
                    {c.label}
                  </span>
                  <span className="block truncate text-sm font-medium text-foreground group-hover:text-accent">
                    {c.value}
                  </span>
                </span>
                <ArrowIcon className="ml-auto h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 pb-16 text-xs text-muted">
      <p>
        Designed & built by {profile.name} · Next.js & Tailwind · deployed on
        Vercel.
      </p>
    </footer>
  );
}
