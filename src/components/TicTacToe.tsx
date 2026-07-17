"use client";

import { useEffect, useRef, useState } from "react";
import { HandLabel } from "./Doodles";

/*
  A game of tic-tac-toe doodled in the notebook margin.
  You're ✗ (ink); the site is ◯ (accent pen). The opponent plays a decent
  game but blunders now and then — beating it is supposed to be possible.

  Strokes draw themselves via the CSS .draw-stroke keyframe, not Motion:
  JS-driven pathLength animations freeze mid-draw for elements mounted
  after a state update in this stack (see project memory).
*/

type Cell = "x" | "o" | null;

const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
] as const;

function winnerOf(board: Cell[]): { mark: "x" | "o"; line: number[] } | null {
  for (const line of LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { mark: board[a], line: [...line] };
    }
  }
  return null;
}

function findWinningMove(board: Cell[], mark: "x" | "o"): number | null {
  for (let i = 0; i < 9; i++) {
    if (board[i]) continue;
    const copy = [...board];
    copy[i] = mark;
    if (winnerOf(copy)?.mark === mark) return i;
  }
  return null;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/** Decent-but-human opponent: win > block > (25% blunder) > center > corner > edge. */
function computerMove(board: Cell[]): number {
  const open = board.flatMap((c, i) => (c ? [] : [i]));
  const blunder = Math.random() < 0.25;
  if (!blunder) {
    const win = findWinningMove(board, "o");
    if (win !== null) return win;
    const block = findWinningMove(board, "x");
    if (block !== null) return block;
  } else {
    return pick(open);
  }
  if (board[4] === null) return 4;
  const corners = [0, 2, 6, 8].filter((i) => board[i] === null);
  if (corners.length) return pick(corners);
  return pick(open);
}

function XMark() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full p-[22%]" aria-hidden>
      <path
        d="M18,14 C42,42 62,68 84,88"
        pathLength={1}
        className="draw-stroke"
        fill="none"
        stroke="var(--ink)"
        strokeWidth={7}
        strokeLinecap="round"
      />
      <path
        d="M82,16 C60,40 38,66 16,86"
        pathLength={1}
        className="draw-stroke"
        style={{ animationDelay: "0.14s" }}
        fill="none"
        stroke="var(--ink)"
        strokeWidth={7}
        strokeLinecap="round"
      />
    </svg>
  );
}

function OMark() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full p-[20%]" aria-hidden>
      <path
        d="M50,10 C76,8 92,26 90,50 C88,78 68,92 48,90 C22,88 8,68 10,46 C12,22 32,12 54,11"
        pathLength={1}
        className="draw-stroke"
        style={{ animationDuration: "0.4s" }}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={7}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Slightly wobbly # grid that draws itself in on mount. */
function Grid() {
  const strokes = [
    "M34,4 C35,30 33,66 34,96", // vertical 1
    "M66,3 C65,34 67,68 66,97", // vertical 2
    "M4,34 C36,33 70,35 96,34", // horizontal 1
    "M3,66 C30,67 68,65 97,66", // horizontal 2
  ];
  return (
    <svg
      viewBox="0 0 100 100"
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      {strokes.map((d, i) => (
        <path
          key={d}
          d={d}
          pathLength={1}
          className="draw-stroke"
          style={{ animationDuration: "0.4s", animationDelay: `${0.15 * i}s` }}
          fill="none"
          stroke="var(--doodle)"
          strokeWidth={1.6}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

/** Hand-drawn strike through the winning line. */
function Strike({ line, mark }: { line: number[]; mark: "x" | "o" }) {
  const at = (i: number) => ({
    x: (i % 3) * 33 + 16.5,
    y: Math.floor(i / 3) * 33 + 16.5,
  });
  const a = at(line[0]);
  const c = at(line[2]);
  // Overshoot slightly past both ends, like a real pen swipe.
  const dx = c.x - a.x;
  const dy = c.y - a.y;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  const x1 = a.x - ux * 6;
  const y1 = a.y - uy * 6;
  const x2 = c.x + ux * 6;
  const y2 = c.y + uy * 6;
  const mx = (x1 + x2) / 2 - uy * 3;
  const my = (y1 + y2) / 2 + ux * 3;
  return (
    <svg
      viewBox="0 0 99 99"
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
        pathLength={1}
        className="draw-stroke"
        style={{ animationDuration: "0.4s", animationDelay: "0.15s" }}
        fill="none"
        stroke={mark === "x" ? "var(--ink)" : "var(--accent)"}
        strokeWidth={2.6}
        strokeLinecap="round"
      />
    </svg>
  );
}

const OPENING_LINES = ["your move — you're ✗", "you first. no pressure.", "loser buys coffee ☕"];
const THINKING_LINES = ["hmm…", "let me think…", "interesting…", "ok ok…"];
const PLAYER_TURN_LINES = ["your turn", "you again", "and… you"];
const I_WIN_LINES = ["ha! got you ✏️", "the site wins this one 😌", "gg. rematch?"];
const YOU_WIN_LINES = ["ok, you win that one 😤", "fine. you're good.", "beaten by a visitor…"];
const TIE_LINES = ["cat's game. again?", "a draw. how diplomatic.", "nobody wins. classic."];

export default function TicTacToe() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [thinking, setThinking] = useState(false);
  const [message, setMessage] = useState(OPENING_LINES[0]);
  const [score, setScore] = useState({ you: 0, me: 0, ties: 0 });
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const win = winnerOf(board);
  const full = board.every(Boolean);
  const over = !!win || full;

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function place(i: number) {
    if (board[i] || over || thinking) return;
    const next = [...board];
    next[i] = "x";
    setBoard(next);

    const afterPlayer = winnerOf(next);
    if (afterPlayer) {
      setScore((s) => ({ ...s, you: s.you + 1 }));
      setMessage(pick(YOU_WIN_LINES));
      return;
    }
    if (next.every(Boolean)) {
      setScore((s) => ({ ...s, ties: s.ties + 1 }));
      setMessage(pick(TIE_LINES));
      return;
    }

    setThinking(true);
    setMessage(pick(THINKING_LINES));
    timer.current = setTimeout(() => {
      const move = computerMove(next);
      const withO = [...next];
      withO[move] = "o";
      setBoard(withO);
      setThinking(false);

      const afterMe = winnerOf(withO);
      if (afterMe) {
        setScore((s) => ({ ...s, me: s.me + 1 }));
        setMessage(pick(I_WIN_LINES));
      } else if (withO.every(Boolean)) {
        setScore((s) => ({ ...s, ties: s.ties + 1 }));
        setMessage(pick(TIE_LINES));
      } else {
        setMessage(pick(PLAYER_TURN_LINES));
      }
    }, 350 + Math.random() * 250);
  }

  function rematch() {
    if (timer.current) clearTimeout(timer.current);
    setThinking(false);
    setBoard(Array(9).fill(null));
    setMessage(pick(OPENING_LINES));
  }

  return (
    <div className="w-[240px] select-none" aria-label="Tic-tac-toe against the site">
      <HandLabel rotate={-2} className="mb-2 block text-base text-doodle">
        bored? try to beat me ↓
      </HandLabel>

      <div className="relative aspect-square" style={{ transform: "rotate(-1.2deg)" }}>
        <Grid />
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
          {board.map((cell, i) => (
            <button
              key={i}
              onClick={() => place(i)}
              disabled={!!cell || over || thinking}
              aria-label={`row ${Math.floor(i / 3) + 1}, column ${(i % 3) + 1}${
                cell ? `, ${cell === "x" ? "your ✗" : "site's ◯"}` : ", empty"
              }`}
              className="relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent enabled:cursor-pointer enabled:hover:bg-accent-soft"
            >
              {cell === "x" && <XMark />}
              {cell === "o" && <OMark />}
            </button>
          ))}
        </div>
        {win && <Strike line={win.line} mark={win.mark} />}
      </div>

      <div className="mt-2 flex min-h-[2rem] items-center justify-between gap-2">
        <p aria-live="polite" className="font-hand text-lg leading-tight text-accent">
          {message}
        </p>
        {over && (
          <button
            onClick={rematch}
            className="wobbly-sm shrink-0 border px-2.5 py-0.5 font-hand text-base text-foreground transition-colors hover:text-accent"
            style={{ borderColor: "var(--ink)" }}
          >
            rematch?
          </button>
        )}
      </div>

      <p className="font-hand mt-0.5 text-sm text-doodle">
        you {score.you} · me {score.me} · ties {score.ties}
      </p>
    </div>
  );
}
