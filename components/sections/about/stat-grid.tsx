"use client";

import { motion } from "motion/react";
import { RevealGroup, REVEAL_STAGGER_ITEM } from "@/components/animation";
import type { ReactNode } from "react";

export type StatItem = { icon: ReactNode; label: string; description: string };

export function StatGrid({ stats }: { stats: StatItem[] }) {
  return (
    <RevealGroup className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <motion.div key={stat.label} variants={REVEAL_STAGGER_ITEM} className="rounded-[var(--radius-lg)] border border-ink/8 bg-cream-100 p-5 text-center">
          <div className="mx-auto flex size-5 items-center justify-center text-green-600">{stat.icon}</div>
          <p className="mt-2.5 font-display text-sm font-semibold text-ink">{stat.label}</p>
          <p className="mt-1 text-xs text-ink-500">{stat.description}</p>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
