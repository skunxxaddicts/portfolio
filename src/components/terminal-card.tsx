"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const SCRIPT = [
  { cmd: "whoami", out: "mörkié — frontend developer" },
  {
    cmd: "cat ./stack.txt",
    out: "next.js · react · typescript · tailwind · motion",
  },
  { cmd: "ls ./infra", out: "vps · nginx · caddy · cloudflare · pm2" },
  { cmd: "git status -sb", out: "## main...origin/main  ✓ shipping" },
];

const TYPE_MS = 34;
const HOLD_MS = 1400;

function useTypewriter(): { done: typeof SCRIPT; current: string } {
  const reduce = useReducedMotion();
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (reduce) return;

    if (line >= SCRIPT.length) {
      const restart = setTimeout(() => {
        setLine(0);
        setChars(0);
      }, HOLD_MS * 4);
      return () => clearTimeout(restart);
    }

    const cmd = SCRIPT[line].cmd;
    if (chars < cmd.length) {
      const t = setTimeout(() => setChars((c) => c + 1), TYPE_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLine((l) => l + 1);
      setChars(0);
    }, HOLD_MS);
    return () => clearTimeout(t);
  }, [line, chars, reduce]);

  if (reduce) return { done: SCRIPT, current: "" };
  return {
    done: SCRIPT.slice(0, line),
    current: line < SCRIPT.length ? SCRIPT[line].cmd.slice(0, chars) : "",
  };
}

export function TerminalCard() {
  const { done, current } = useTypewriter();
  const showLiveCursor = current !== "" || done.length < SCRIPT.length;

  return (
    <div className="panel grain w-full max-w-md overflow-hidden rounded-xl shadow-2xl shadow-black/60">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line-bright" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-bright" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-2 font-mono text-[0.65rem] tracking-widest text-faint">
          morkie@void:~
        </span>
      </div>

      <div className="min-h-44 space-y-2.5 px-4 py-4 font-mono text-[0.78rem] leading-relaxed">
        {done.map((l) => (
          <div key={l.cmd}>
            <p className="text-muted">
              <span className="text-accent">$</span> {l.cmd}
            </p>
            <p className="pl-4 text-ok">{l.out}</p>
          </div>
        ))}

        {showLiveCursor && done.length < SCRIPT.length && (
          <p className="text-muted">
            <span className="text-accent">$</span> {current}
            <span className="animate-blink text-accent">▌</span>
          </p>
        )}
      </div>
    </div>
  );
}
