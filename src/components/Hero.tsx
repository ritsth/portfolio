"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { profile } from "@/lib/data";
import { DoodleArrow, HandLabel, Squiggle } from "./Doodles";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import TicTacToe from "./TicTacToe";

function BouncyName({ name }: { name: string }) {
  const reduce = useReducedMotion() ?? false;
  return (
    <h1
      className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
      aria-label={name}
    >
      {Array.from(name).map((ch, i) =>
        ch === " " ? (
          <span key={i}> </span>
        ) : (
          <motion.span
            key={i}
            aria-hidden
            className="inline-block cursor-default"
            whileHover={
              reduce ? undefined : { y: -12, rotate: -6, color: "var(--accent)" }
            }
            transition={{ type: "spring", stiffness: 500, damping: 12 }}
          >
            {ch}
          </motion.span>
        )
      )}
    </h1>
  );
}

/** Tiny hand-drawn stars/squiggles that burst out when the egg hatches. */
function DoodleBurst() {
  const pieces = Array.from({ length: 14 }, (_, i) => ({
    angle: (i / 14) * Math.PI * 2,
    dist: 60 + (i % 4) * 26,
    char: ["✦", "✧", "∗", "~"][i % 4],
    delay: (i % 5) * 0.03,
  }));
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-10">
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className="font-hand absolute text-xl text-accent"
          initial={{ x: 0, y: 0, opacity: 1, scale: 0.4 }}
          animate={{
            x: Math.cos(p.angle) * p.dist,
            y: Math.sin(p.angle) * p.dist,
            opacity: 0,
            scale: 1.2,
            rotate: 120,
          }}
          transition={{ duration: 0.9, delay: p.delay, ease: "easeOut" }}
        >
          {p.char}
        </motion.span>
      ))}
    </div>
  );
}

export default function Hero() {
  const [pokes, setPokes] = useState(0);
  const [burst, setBurst] = useState(0);
  const messages = [
    "hi, that's me! ↓",
    "still me ↓",
    "yep, keep clicking…",
    "ok here you go →",
  ];

  function poke() {
    const next = pokes + 1;
    setPokes(next);
    if (next >= messages.length) {
      setBurst((b) => b + 1);
      setPokes(0);
    }
  }

  return (
    <section className="relative pb-20 pt-24 sm:pt-32 lg:flex lg:items-start lg:justify-between lg:gap-10">
      <div className="min-w-0">
      <div className="relative flex flex-wrap items-center gap-2">
        <button
          onClick={poke}
          className="font-hand relative inline-block text-lg text-accent"
          style={{ transform: "rotate(-2deg)" }}
          aria-label="A handwritten note that says: hi, that's me. Click it a few times for a surprise."
        >
          {messages[Math.min(pokes, messages.length - 1)]}
          <AnimatePresence>{burst > 0 && <DoodleBurst key={burst} />}</AnimatePresence>
        </button>

        <span className="pointer-events-none hidden items-center gap-1 lg:inline-flex">
          <DoodleArrow flip className="h-7 w-11" />
          <HandLabel rotate={2} className="whitespace-nowrap text-doodle">
            this site reacts, try poking things
          </HandLabel>
        </span>
      </div>
      <div className="relative inline-block">
        <BouncyName name={profile.name} />
      </div>

      <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground sm:text-xl">
        Software engineer building full-stack &amp; AI things that{" "}
        <span className="relative inline-block font-semibold">
          help people
          <Squiggle />
        </span>
        .
      </p>

      <p className="font-hand mt-6 text-lg text-doodle">
        Nepal → Denison University (CS + Math) → wherever the interesting
        problems are
      </p>

      <div className="mt-8 flex items-center gap-5">
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
        <motion.a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.06, rotate: -1 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="wobbly-sm border-2 border-ink px-4 py-1.5 text-sm font-semibold text-foreground hover:text-accent"
          style={{ borderColor: "var(--ink)" }}
        >
          résumé
        </motion.a>
      </div>
      </div>

      <div className="hidden shrink-0 lg:-mt-32 lg:block lg:-mr-12 xl:-mr-24">
        <TicTacToe />
      </div>
    </section>
  );
}
