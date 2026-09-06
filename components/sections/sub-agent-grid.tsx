"use client";

import { ArrowUpRight, Bot } from "lucide-react";
import Link from "next/link";
import { Reveal, RevealGroup, REVEAL_STAGGER_ITEM, TiltCard } from "@/components/animation";
import { motion } from "motion/react";
import type { SubAgent } from "@/types/content";

export function SubAgentGrid({ title, subAgents }: { title?: string; subAgents: SubAgent[] }) {
  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-[72rem]">
        <Reveal>
          <span className="text-xs font-semibold tracking-widest text-green-600 uppercase">What&apos;s Included</span>
          <h2 className="mt-4 text-3xl font-semibold text-ink text-balance sm:text-4xl">{title ?? "Everything this service covers"}</h2>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subAgents.map((agent) => {
            const Card = (
              <motion.div variants={REVEAL_STAGGER_ITEM} className="h-full">
                <TiltCard className="flex h-full flex-col rounded-[var(--radius-lg)] border border-ink/8 bg-cream-100 p-6">
                  <span className="flex size-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <Bot className="size-5" />
                  </span>
                  <h3 className="mt-4 flex items-center gap-1.5 font-display text-base font-semibold text-ink">
                    {agent.name}
                    {agent.href && <ArrowUpRight className="size-3.5 text-green-600 opacity-0 transition-opacity group-hover:opacity-100" />}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{agent.description}</p>
                </TiltCard>
              </motion.div>
            );
            return agent.href ? (
              <Link key={agent.name} href={agent.href} className="block h-full">
                {Card}
              </Link>
            ) : (
              <div key={agent.name}>{Card}</div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
