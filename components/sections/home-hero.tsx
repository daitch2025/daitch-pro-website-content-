"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal, MagneticButton, ExpandingCtaPanel, ShaderMeshBackground, TypewriterReveal } from "@/components/animation";
import { LinkButton } from "@/components/ui/link-button";
import { HeroProductMock } from "@/components/sections/hero-product-mock/hero-product-mock";
import { HomeHeroAgentBadges } from "@/components/sections/home-hero-agent-badges";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden px-4 pt-10 pb-6 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <ShaderMeshBackground className="absolute inset-0 opacity-40" variant="light" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-cream)_0%,transparent_25%,transparent_75%,var(--color-cream)_100%)]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-[26rem] overflow-hidden sm:h-[30rem]">
        <HomeHeroAgentBadges />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal from="none">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-cream-100 px-3 py-1 font-mono text-[11px] font-medium text-ink-700">
            <Sparkles className="size-3 text-green-600" />
            FREE 30-POINT AMAZON AUDIT — NO COMMITMENT
          </span>
        </Reveal>

        <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl lg:leading-[1.05]">
          <TypewriterReveal as="span" text="Scale your brand" className="block" speed={32} delay={150} />
          <TypewriterReveal as="span" text="on Amazon" className="block text-green-600" speed={32} delay={900} />
        </h1>

        <Reveal delay={1.4}>
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-ink-500 sm:text-lg">
            The full-service Amazon agency that launches, ranks, and defends your brand — PPC, DSP, SEO, listings, and logistics, all engineered for profit, not just spend.
          </p>
        </Reveal>

        <Reveal delay={1.5} className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <MagneticButton strength={0.3}>
            <LinkButton href="/contact" size="md" className="group/btn">
              Get My Free Audit
              <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
            </LinkButton>
          </MagneticButton>
          <ExpandingCtaPanel
            label="Book a Strategy Call"
            variant="outline"
            size="md"
            panelTitle="See what we'd do for your brand"
            panelDescription="Tell us your brand and category and we'll map the fastest path to profitable growth on Amazon."
          />
        </Reveal>
      </div>

      <Reveal from="none" delay={1.65} className="relative mx-auto mt-7 max-w-5xl sm:mt-9">
        <HeroProductMock />
      </Reveal>
    </section>
  );
}
