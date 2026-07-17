"use client";

import { motion, useReducedMotion } from "motion/react";

/*
  Hand-drawn primitives for the sketchbook look.
  Squiggles and arrows "draw themselves" in on mount; sticky notes wiggle
  on hover. All respect reduced motion.

  Note: these used to draw on scroll via Motion's whileInView, but that
  never fires for elements already in the viewport at mount in this stack
  (confirmed in a production build, not just dev) — see
  motion-animatepresence-exit-hang project memory for the related bug.
  Animating on mount instead is what actually renders reliably.
*/

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeInOut" as const },
  },
};

/** Wavy hand-drawn underline that draws itself in on mount. */
export function Squiggle({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion() ?? false;
  return (
    <svg
      viewBox="0 0 200 10"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute -bottom-1.5 left-0 h-2.5 w-full ${className}`}
      aria-hidden
    >
      <motion.path
        d="M2,6 Q30,2 55,6 T110,5 T160,7 T198,4"
        fill="none"
        stroke="var(--accent)"
        strokeWidth={2.4}
        strokeLinecap="round"
        initial={reduce ? "visible" : "hidden"}
        animate="visible"
        variants={draw}
      />
    </svg>
  );
}

/** Dashed curved arrow doodle. Flip with `flip` to point the other way. */
export function DoodleArrow({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  const reduce = useReducedMotion() ?? false;
  return (
    <svg
      viewBox="0 0 90 60"
      className={`pointer-events-none ${className}`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden
    >
      <motion.path
        d="M8,10 C30,4 54,14 70,40"
        fill="none"
        stroke="var(--doodle)"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeDasharray="1 5"
        initial={reduce ? "visible" : "hidden"}
        animate="visible"
        variants={draw}
      />
      <motion.path
        d="M57,38 L70,40 L64,27"
        fill="none"
        stroke="var(--doodle)"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? "visible" : "hidden"}
        animate="visible"
        variants={draw}
      />
    </svg>
  );
}

/** Small rotated handwritten annotation. */
export function HandLabel({
  children,
  className = "",
  rotate = -2,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      className={`font-hand text-accent ${className}`}
      style={{ display: "inline-block", transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}

/** Yellow sticky note that wiggles on hover. */
export function StickyNote({
  children,
  className = "",
  rotate = 2,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  label?: string;
}) {
  const reduce = useReducedMotion() ?? false;
  return (
    <motion.aside
      initial={{ rotate }}
      whileHover={reduce ? undefined : { rotate: rotate - 3, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
      className={`bg-sticky px-4 py-3 text-sticky-ink shadow-sm ${className}`}
      style={{ borderRadius: 2 }}
    >
      {label && (
        <p className="font-hand mb-0.5 text-sm leading-none opacity-70">
          {label}
        </p>
      )}
      <p className="font-hand text-[17px] leading-snug">{children}</p>
    </motion.aside>
  );
}

/** Hand-drawn ellipse circling its content (e.g. a section number). */
export function CircledNumber({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion() ?? false;
  return (
    <span
      className={`relative inline-flex items-center justify-center px-2.5 py-0.5 ${className}`}
    >
      <svg
        viewBox="0 0 60 34"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      >
        <motion.path
          d="M30,3 C48,2 57,8 56,17 C55,27 44,32 29,31 C13,30 3,26 4,16 C5,7 16,4 32,3"
          fill="none"
          stroke="var(--accent)"
          strokeWidth={2}
          strokeLinecap="round"
          initial={reduce ? "visible" : "hidden"}
          animate="visible"
          variants={draw}
        />
      </svg>
      <span className="font-hand relative text-lg text-accent">{children}</span>
    </span>
  );
}

/** Highlighter swipe behind a phrase. */
export function Highlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline ${className}`}>
      <span
        className="absolute inset-x-[-2px] bottom-0 top-[35%] -rotate-1"
        style={{ background: "var(--accent-soft)", borderRadius: 3 }}
        aria-hidden
      />
      <span className="relative">{children}</span>
    </span>
  );
}

/** Handwritten section header: number in a circle + hand label + clean title. */
export function SectionHeader({
  number,
  handNote,
  title,
}: {
  number: string;
  handNote: string;
  title: string;
}) {
  return (
    <div className="mb-8 flex items-baseline gap-3">
      <CircledNumber>{number}</CircledNumber>
      <h2 className="text-xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      <HandLabel className="hidden text-lg sm:inline" rotate={-2}>
        {handNote}
      </HandLabel>
    </div>
  );
}
