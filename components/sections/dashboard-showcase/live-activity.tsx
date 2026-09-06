"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type ActivityRow = {
  agent: string;
  task: string;
  status: "running" | "queued" | "complete";
  progress: number;
};

const STATUS_STYLES: Record<ActivityRow["status"], string> = {
  running: "bg-green-100 text-green-700",
  queued: "bg-gold-300/40 text-gold-600",
  complete: "bg-ink-50 text-ink-500",
};

// Stable seed rows — identical on server and client, avoids hydration mismatch.
const SEED_ROWS: ActivityRow[] = [
  { agent: "PPC Management", task: "Cutting wasted spend — Supplement Co.", status: "running", progress: 62 },
  { agent: "Amazon SEO", task: "Indexing 40 new keywords", status: "running", progress: 41 },
  { agent: "FBA Reimbursements", task: "Filing lost-inventory claims", status: "queued", progress: 8 },
  { agent: "Product Launch", task: "Rank velocity plan — ASIN B0CX", status: "complete", progress: 100 },
];

function ProgressBar({ initial, status }: { initial: number; status: ActivityRow["status"] }) {
  const [pct, setPct] = useState(initial);
  const rafRef = useRef<number | undefined>(undefined);
  const pctRef = useRef(initial);

  useEffect(() => {
    if (status !== "running") return;
    const tick = () => {
      pctRef.current = Math.min(96, pctRef.current + 0.06);
      setPct(Math.round(pctRef.current));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [status]);

  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-ink/8">
      <div
        className={cn("h-full rounded-full transition-[width] duration-500 ease-out", status === "complete" ? "bg-ink-300" : "bg-green-500")}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function LiveActivity({ className }: { className?: string }) {
  return (
    <div className={cn("glass-panel rounded-[var(--radius-lg)] p-5", className)}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-ink-500">Service Activity</span>
        <span className="flex items-center gap-1.5 text-xs font-medium text-green-600">
          <motion.span
            className="size-1.5 rounded-full bg-green-500"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          Live
        </span>
      </div>
      <ul className="mt-4 space-y-3.5">
        {SEED_ROWS.map((row, i) => (
          <li key={i}>
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-ink">{row.agent}</p>
                <p className="truncate text-[0.7rem] text-ink-500">{row.task}</p>
              </div>
              <span className={cn("shrink-0 rounded-full px-2 py-0.5 text-[0.65rem] font-medium capitalize", STATUS_STYLES[row.status])}>{row.status}</span>
            </div>
            <div className="mt-1.5">
              <ProgressBar initial={row.progress} status={row.status} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
