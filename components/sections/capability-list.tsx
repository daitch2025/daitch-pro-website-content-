"use client";

import { Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, RevealGroup, REVEAL_STAGGER_ITEM } from "@/components/animation";
import { cn } from "@/lib/utils";

export function CapabilityList({ title, items, className }: { title?: string; items: string[]; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-[var(--radius-xl)] border border-ink/8 bg-cream-100 p-8 sm:p-10", className)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ background: "radial-gradient(50% 60% at 100% 0%, var(--color-green-600) 0%, transparent 100%)" }}
        aria-hidden="true"
      />
      {title && (
        <Reveal className="relative flex items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
            <Sparkles className="size-4" />
          </span>
          <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
        </Reveal>
      )}
      <RevealGroup className={cn("relative grid gap-x-8 gap-y-4 sm:grid-cols-2", title && "mt-7")}>
        {items.map((item) => (
          <motion.div key={item} variants={REVEAL_STAGGER_ITEM} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-700">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-600" />
            {item}
          </motion.div>
        ))}
      </RevealGroup>
    </div>
  );
}
