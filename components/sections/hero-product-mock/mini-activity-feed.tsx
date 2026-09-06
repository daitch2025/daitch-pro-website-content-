"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Row = { agent: string; status: "running" | "queued" | "complete"; progress: number };

const STATUS_DOT: Record<Row["status"], string> = {
  running: "bg-green-500",
  queued: "bg-gold-500",
  complete: "bg-ink-300",
};

const SEED_ROWS: Row[] = [
  { agent: "PPC Optimization", status: "running", progress: 58 },
  { agent: "Amazon SEO", status: "running", progress: 34 },
  { agent: "Reimbursements", status: "queued", progress: 6 },
];

function MiniProgressBar({ initial, status }: { initial: number; status: Row["status"] }) {
  const [pct, setPct] = useState(initial);
  const rafRef = useRef<number | undefined>(undefined);
  const pctRef = useRef(initial);

  useEffect(() => {
    if (status !== "running") return;
    const tick = () => {
      pctRef.current = Math.min(94, pctRef.current + 0.08);
      setPct(Math.round(pctRef.current));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [status]);

  return (
    <div className="h-0.5 w-full overflow-hidden rounded-full bg-ink/8">
      <div className={cn("h-full rounded-full", status === "complete" ? "bg-ink-300" : "bg-green-500")} style={{ width: `${pct}%` }} />
    </div>
  );
}

export function MiniActivityFeed({ className }: { className?: string }) {
  return (
    <div className={cn("glass-panel rounded-[var(--radius-md)] p-3", className)}>
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium text-ink-500">Service Activity</span>
        <motion.span
          className="size-1.5 rounded-full bg-green-500"
          animate={{ opacity: [1, 0.35, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <ul className="mt-2 space-y-2">
        {SEED_ROWS.map((row, i) => (
          <li key={i}>
            <div className="flex items-center gap-1.5">
              <span className={cn("size-1.5 shrink-0 rounded-full", STATUS_DOT[row.status])} />
              <span className="truncate text-[10px] font-medium text-ink">{row.agent}</span>
            </div>
            <div className="mt-1">
              <MiniProgressBar initial={row.progress} status={row.status} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
