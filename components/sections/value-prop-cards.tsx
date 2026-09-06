"use client";

import { Sparkles } from "lucide-react";
import { RevealGroup, REVEAL_STAGGER_ITEM, TiltCard } from "@/components/animation";
import { motion } from "motion/react";
import type { ValueProp } from "@/types/content";

export function ValuePropCards({ items }: { items: ValueProp[] }) {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <motion.div key={item.title} variants={REVEAL_STAGGER_ITEM}>
          <TiltCard className="rounded-[var(--radius-lg)] border border-ink/8 bg-cream-100 p-7">
            <span className="flex size-11 items-center justify-center rounded-[var(--radius-md)] bg-green-50 text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
              <Sparkles className="size-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.description}</p>
          </TiltCard>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
