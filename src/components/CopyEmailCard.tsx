"use client";

import { useState } from "react";
import { MailIcon, ArrowIcon } from "./Icons";

// Email card that copies the address to the clipboard (with feedback) and
// also opens the user's mail client via mailto — so it always does something,
// even when no default mail app is configured.
export default function CopyEmailCard({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — mailto still fires
    }
  }

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleCopy}
      className="group flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition-all hover:-translate-y-0.5 hover:border-accent"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <MailIcon className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-wide text-muted">
          Email
        </span>
        <span className="block truncate text-sm font-medium text-foreground group-hover:text-accent">
          {copied ? "Copied to clipboard!" : email}
        </span>
      </span>
      <ArrowIcon className="ml-auto h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
    </a>
  );
}
