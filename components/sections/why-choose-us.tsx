"use client";

import { CheckCircle2 } from "lucide-react";
import { Reveal, RevealGroup, REVEAL_STAGGER_ITEM } from "@/components/animation";
import { motion } from "motion/react";
import { LinkButton } from "@/components/ui/link-button";

const GROUPS = [
  {
    title: "Advertising & Growth",
    items: ["Profit-tuned PPC & DSP", "Product launch playbooks", "Rank velocity engineering"],
  },
  {
    title: "Listings & Conversion",
    items: ["Amazon SEO & keyword ranking", "A+ & Brand Store design", "CRO & A/B testing"],
  },
  {
    title: "Operations & Recovery",
    items: ["Inventory & demand planning", "FBA reimbursement recovery", "Account health & reinstatement"],
  },
  {
    title: "Brand & Protection",
    items: ["Brand Registry enforcement", "Hijacker & counterfeit takedowns", "Reviews & reputation"],
  },
  {
    title: "Partnership & Reporting",
    items: ["A dedicated senior pod", "True profit-by-SKU reporting", "Global marketplace expansion"],
  },
];

export function WhyChooseUs() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-[76rem]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest text-green-600 uppercase">Why Choose Knowledge Inn?</span>
            <h2 className="mt-4 text-3xl font-semibold text-ink text-balance sm:text-4xl">One agency for everything it takes to win on Amazon</h2>
            <p className="mt-4 text-ink-500">Every discipline the marketplace demands — ads, listings, logistics, and brand — under one profit-focused roof, run by specialists.</p>
            <LinkButton href="/about" variant="outline" size="md" className="mt-7">
              Learn More
            </LinkButton>
          </Reveal>

          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {GROUPS.map((group) => (
              <motion.div key={group.title} variants={REVEAL_STAGGER_ITEM} className="rounded-[var(--radius-lg)] border border-ink/8 bg-cream-100 p-6">
                <h3 className="font-display text-sm font-semibold text-ink">{group.title}</h3>
                <ul className="mt-3.5 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-500">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
