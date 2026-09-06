"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { PRICING_TIERS } from "@/content/pricing";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal, RevealGroup, REVEAL_STAGGER_ITEM, TiltCard } from "@/components/animation";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function PricingTable({ compact = false }: { compact?: boolean }) {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-[76rem]">
        {!compact && (
          <Reveal className="mx-auto max-w-xl text-center">
            <span className="text-xs font-semibold tracking-widest text-green-600 uppercase">Pricing Plans</span>
            <h2 className="mt-4 text-3xl font-semibold text-ink text-balance sm:text-4xl">Plans that scale with your brand</h2>
            <p className="mt-4 text-ink-500">Transparent monthly retainers built for profitable growth — no hidden fees, no long lock-ins. Every plan starts with a free audit.</p>
          </Reveal>
        )}

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={cn("text-sm font-medium", !yearly ? "text-ink" : "text-ink-500")}>Monthly</span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            onClick={() => setYearly((v) => !v)}
            className={cn("relative h-7 w-13 shrink-0 rounded-full transition-colors", yearly ? "bg-green-600" : "bg-ink-200")}
          >
            <motion.span
              className="absolute top-1 left-1 size-5 rounded-full bg-white shadow"
              animate={{ x: yearly ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 32 }}
            />
          </button>
          <span className={cn("flex items-center gap-1.5 text-sm font-medium", yearly ? "text-ink" : "text-ink-500")}>
            Yearly
            <span className="rounded-full bg-gold-300/50 px-1.5 py-0.5 text-[0.65rem] font-semibold text-gold-600">Save ~17%</span>
          </span>
        </div>

        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_TIERS.map((tier) => {
            const price = yearly ? tier.yearlyPrice : tier.monthlyPrice;
            return (
              <motion.div key={tier.name} variants={REVEAL_STAGGER_ITEM} className="h-full">
              <TiltCard
                className={cn(
                  "flex h-full flex-col rounded-[var(--radius-lg)] p-6",
                  tier.featured
                    ? "section-forest shadow-[var(--shadow-elevated)]"
                    : "border border-ink/8 bg-cream-100 shadow-[var(--shadow-soft)]",
                )}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-3 py-1 text-[0.65rem] font-semibold text-ink">
                    Most Popular
                  </span>
                )}
                <h3 className={cn("font-display text-lg font-semibold", tier.featured ? "text-white" : "text-ink")}>{tier.name}</h3>
                <p className={cn("mt-1.5 text-xs leading-relaxed", tier.featured ? "text-forest-ink-muted" : "text-ink-500")}>{tier.description}</p>

                <div className="mt-5">
                  {price === "free" ? (
                    <span className={cn("text-3xl font-semibold", tier.featured ? "text-white" : "text-ink")}>Free</span>
                  ) : (
                    <>
                      <span className={cn("text-3xl font-semibold", tier.featured ? "text-white" : "text-ink")}>${price!.toLocaleString()}</span>
                      <span className={cn("text-sm", tier.featured ? "text-forest-ink-muted" : "text-ink-500")}>/mo</span>
                    </>
                  )}
                </div>

                <LinkButton href="/contact" variant={tier.featured ? "primary" : "outline"} size="md" className="mt-6 w-full">
                  {tier.monthlyPrice === "free" ? "Get Free Audit" : "Get Started"}
                </LinkButton>

                <ul className="mt-6 space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className={cn("flex items-start gap-2 text-sm", tier.featured ? "text-forest-ink-muted" : "text-ink-700")}>
                      <Check className={cn("mt-0.5 size-4 shrink-0", tier.featured ? "text-green-400" : "text-green-600")} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </TiltCard>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
