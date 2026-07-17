import {
  experience,
  skills,
  profile,
  involvement,
  honors,
  now,
  journey,
} from "@/lib/data";
import { ArrowIcon, FileIcon, GitHubIcon, LinkedInIcon } from "./Icons";
import { TechIcon } from "@/lib/techIcons";
import Reveal from "./Reveal";
import CopyEmailCard from "./CopyEmailCard";
import { HandLabel, Highlight, SectionHeader, StickyNote } from "./Doodles";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="wobbly-sm border border-border bg-card px-3 py-1 font-mono text-xs font-medium text-accent">
      {children}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 pt-8">
      <SectionHeader number="01" title="About" handNote="the human part" />
      <div className="flex flex-col gap-8 sm:flex-row">
        <div className="max-w-xl space-y-4 text-[15px] leading-relaxed text-muted">
          <p>
            I grew up in <Highlight>Nepal</Highlight>{" "}and came to Denison
            University to study Computer Science and Mathematics. Somewhere
            between my first robot (it danced, sort of) and my first production
            LLM system, building software went from a major to a habit I
            can&apos;t put down.
          </p>
          <p>
            Last summer I interned at{" "}
            <span className="font-medium text-foreground">TransCore</span>,
            where my team built an AI customer-service chatbot — open-source
            LLMs hosted locally for privacy, RAG to keep answers honest, and
            guardrails to keep prompt injections out. As a{" "}
            <span className="font-medium text-foreground">
              Breakthrough Tech AI fellow at Cornell Tech
            </span>
            , I worked with Nestlé on predicting flavor trends from 14 million
            Amazon reviews.
          </p>
          <p>
            When I&apos;m not coding, I&apos;m probably organizing a Nepali
            cultural event on campus — I chair cultural events for the
            Nepalese Student Association, which is my favorite way of bringing
            a piece of home to Ohio.
          </p>
        </div>

        <div className="shrink-0 sm:w-56">
          {journey.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={journey.photo}
              alt="Ritika Shrestha"
              className="wobbly w-full border-2 object-cover"
              style={{ borderColor: "var(--ink)" }}
            />
          ) : (
            <div
              className="wobbly flex aspect-[4/5] items-center justify-center border-2 border-dashed p-6 text-center"
              style={{ borderColor: "var(--doodle)" }}
            >
              <HandLabel rotate={-3} className="text-xl text-doodle">
                photo of me
                <br />
                (coming soon ✎)
              </HandLabel>
            </div>
          )}
          <dl className="mt-5 space-y-1.5">
            {journey.facts.map((f) => (
              <div key={f.label} className="flex gap-2 text-sm">
                <dt className="font-hand shrink-0 text-base text-accent">
                  {f.label}:
                </dt>
                <dd className="text-muted">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mt-28 scroll-mt-24">
      <SectionHeader
        number="03"
        title="Experience"
        handNote="where I've worked"
      />
      <ol className="space-y-3">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.role + job.company} delay={i * 60}>
            <div className="group relative grid gap-3 rounded-lg p-4 transition-all hover:bg-card hover:shadow-sm sm:grid-cols-8 sm:gap-6 lg:-mx-4">
              <p className="font-hand mt-0.5 text-base text-doodle sm:col-span-2">
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
                {job.company === "TransCore" && (
                  <HandLabel
                    rotate={-1.5}
                    className="mt-2 inline-block text-base"
                  >
                    ↑ full case study up in projects
                  </HandLabel>
                )}
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
      <div className="mt-8">
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
    <section id="skills" className="mt-28 scroll-mt-24">
      <SectionHeader number="04" title="Skills" handNote="the toolbox" />
      <div className="space-y-8">
        {skills.map((s, gi) => (
          <Reveal key={s.group} delay={gi * 60}>
            <h3 className="font-hand mb-4 text-xl text-accent">{s.group}</h3>
            <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {s.items.map((item, i) => (
                <li
                  key={item}
                  className={`group flex flex-col items-center gap-2 border border-border bg-card p-4 text-center transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-sm ${
                    i % 2 === 0 ? "wobbly-sm" : "wobbly-alt"
                  }`}
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

export function Involvement() {
  return (
    <section id="involvement" className="mt-28 scroll-mt-24">
      <SectionHeader
        number="05"
        title="Involvement"
        handNote="beyond the code"
      />
      <ol className="space-y-3">
        {involvement.map((item, i) => (
          <Reveal as="li" key={item.role + item.org} delay={i * 60}>
            <div className="group relative grid gap-3 rounded-lg p-4 transition-all hover:bg-card hover:shadow-sm sm:grid-cols-8 sm:gap-6 lg:-mx-4">
              <p className="font-hand mt-0.5 text-base text-doodle sm:col-span-2">
                {item.period}
              </p>
              <div className="sm:col-span-6">
                <h3 className="font-semibold text-foreground">
                  {item.role}
                  <span className="text-muted"> · {item.org}</span>
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={involvement.length * 60}>
        <h3 className="font-hand mb-4 mt-10 text-xl text-accent">
          honors &amp; awards
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {honors.map((h, i) => (
            <li
              key={h.name}
              className={`group flex flex-col gap-1 border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-sm ${
                i % 2 === 0 ? "wobbly" : "wobbly-alt"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-semibold text-foreground">{h.name}</span>
                <span className="font-hand shrink-0 text-sm text-doodle">
                  {h.since}
                </span>
              </div>
              <span className="text-xs text-accent">{h.issuer}</span>
              {h.description && (
                <span className="mt-0.5 text-xs leading-relaxed text-muted">
                  {h.description}
                </span>
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export function Now() {
  return (
    <section id="now" className="mt-28 scroll-mt-24">
      <SectionHeader
        number="06"
        title="Now"
        handNote={`updated ${now.updated}`}
      />
      <p className="mb-6 max-w-lg text-sm leading-relaxed text-muted">
        A living note of what I&apos;m actually up to right now — because a
        portfolio shouldn&apos;t be a museum.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {now.items.map((item, i) => (
          <Reveal key={item.label} delay={i * 80}>
            <StickyNote
              rotate={i % 2 === 0 ? 1.5 : -2}
              label={item.label}
              className="h-full"
            >
              {item.text}
            </StickyNote>
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
    <section id="contact" className="mt-28 scroll-mt-24">
      <SectionHeader number="07" title="Contact" handNote="say hi!" />
      <Reveal>
        <div
          className="wobbly border-2 bg-card p-8"
          style={{ borderColor: "var(--ink)" }}
        >
          <h3 className="text-2xl font-bold tracking-tight">
            Let&apos;s connect
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
            Open to software engineering &amp; AI roles. The fastest way to
            reach me is email — or grab my résumé below.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <CopyEmailCard email={profile.email} />
            {cards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={
                  c.href.startsWith("http") || c.href.endsWith(".pdf")
                    ? "_blank"
                    : undefined
                }
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
    <footer className="mt-20 pb-16">
      <p className="font-hand text-lg text-doodle">
        designed &amp; hand-doodled by {profile.name} · built with Next.js,
        Tailwind &amp; Motion · deployed on Vercel
      </p>
      <p className="mt-1 text-xs text-muted">
        No template was harmed (or used) in the making of this site.
      </p>
    </footer>
  );
}
