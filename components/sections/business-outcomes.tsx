"use client";

import { motion } from "motion/react";
import { Reveal, RevealGroup, REVEAL_STAGGER_ITEM } from "@/components/animation";

export function BusinessOutcomes({ outcomes }: { outcomes: string[] }) {
  return (
    <section className="px-6 pb-16 lg:px-10">
      <div className="mx-auto max-w-[60rem]">
        <Reveal>
          <span className="block text-center text-xs font-semibold tracking-widest text-green-600 uppercase">Business Outcomes</span>
        </Reveal>
        <RevealGroup className="mt-5 flex flex-wrap justify-center gap-3">
          {outcomes.map((outcome) => (
            <motion.span
              key={outcome}
              variants={REVEAL_STAGGER_ITEM}
              className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-800"
            >
              {outcome}
            </motion.span>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
