"use client";

import { motion } from "motion/react";
import { CountUp, RevealGroup, REVEAL_STAGGER_ITEM } from "@/components/animation";

export type StatItem = { value: number; prefix?: string; suffix?: string; label: string };

export function StatsStrip({ items }: { items: StatItem[] }) {
  return (
    <RevealGroup className="grid grid-cols-2 divide-ink/8 rounded-[var(--radius-xl)] border border-ink/8 bg-cream-100 sm:grid-cols-4 sm:divide-x">
      {items.map((stat, i) => (
        <motion.div
          key={stat.label}
          variants={REVEAL_STAGGER_ITEM}
          className={`border-ink/8 px-6 py-8 text-center sm:text-left ${i < 2 ? "border-b sm:border-b-0" : ""}`}
        >
          <p className="text-gradient-green font-display text-4xl font-bold sm:text-5xl">
            <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          </p>
          <p className="mt-2 text-sm leading-snug text-ink-500">{stat.label}</p>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
