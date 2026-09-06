"use client";

import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/content/testimonials";
import { Reveal, RevealGroup, REVEAL_STAGGER_ITEM, TiltCard } from "@/components/animation";
import { motion } from "motion/react";

export function TestimonialsSection() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-[72rem]">
        <Reveal className="max-w-xl">
          <span className="text-xs font-semibold tracking-widest text-green-600 uppercase">Trusted by brands on Amazon</span>
          <h2 className="mt-4 text-3xl font-semibold text-ink text-balance sm:text-4xl">See how brands cut ACoS, climb rank, and grow profit with Knowledge Inn.</h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <motion.figure key={t.name} variants={REVEAL_STAGGER_ITEM}>
              <TiltCard className="flex h-full flex-col justify-between rounded-[var(--radius-lg)] border border-ink/8 bg-cream-100 p-7 shadow-[var(--shadow-soft)]">
                <div>
                  <Quote className="size-6 text-green-300" />
                  <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-ink-700">&ldquo;{t.quote}&rdquo;</blockquote>
                </div>
                <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-ink/8 pt-4">
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-500">
                      {t.role} · {t.location}
                    </p>
                  </div>
                  {t.savedTime && (
                    <span className="shrink-0 rounded-full bg-green-50 px-2.5 py-1 text-[0.65rem] font-semibold text-green-700">{t.savedTime}</span>
                  )}
                </figcaption>
              </TiltCard>
            </motion.figure>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
