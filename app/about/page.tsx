import type { Metadata } from "next";
import { Sparkles, Globe2, Workflow, Building2, Bot, Layers, Earth } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { ValuePropCards } from "@/components/sections/value-prop-cards";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/animation";
import { StatGrid } from "@/components/sections/about/stat-grid";

export const metadata: Metadata = {
  title: "About Us",
  description: "Knowledge Inn is a full-service Amazon agency helping brands launch, scale, and defend on Seller and Vendor Central — advertising, listings, logistics, and brand under one roof.",
};

const STATS = [
  { icon: <Bot className="size-5" />, label: "Amazon-Only Focus", description: "100% dedicated to Seller & Vendor Central" },
  { icon: <Globe2 className="size-5" />, label: "20+ Marketplaces", description: "US, EU, UK, and beyond" },
  { icon: <Workflow className="size-5" />, label: "Profit-First", description: "We optimize for net margin, not vanity ROAS" },
  { icon: <Building2 className="size-5" />, label: "Brands Scaled", description: "From product launch to category leader" },
];

const WHY_US = [
  { title: "Amazon Specialists, Not Generalists", description: "We live and breathe Amazon — PPC, DSP, listings, and logistics — not a side service bolted onto a general marketing shop." },
  { title: "Full-Service Under One Roof", description: "Advertising, creative, catalog, and operations handled by one integrated team, so nothing falls between the cracks." },
  { title: "Obsessed With Net Profit", description: "We manage ACoS, TACoS, and unit economics to grow the number that actually matters — your take-home profit." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Knowledge Inn"
        title="The full-service Amazon agency for ambitious brands"
        description="We help brands launch, scale, and defend on Amazon — advertising, listings, logistics, and brand — without juggling five vendors who never talk to each other."
        primaryLabel="Get My Free Audit"
        secondaryLabel="Book a Strategy Call"
        secondaryHref="/contact"
      />

      <section className="px-6 pb-8 lg:px-10">
        <div className="mx-auto max-w-[64rem]">
          <Reveal className="rounded-[var(--radius-xl)] border border-ink/8 bg-cream-100 p-8 sm:p-12">
            <span className="flex size-11 items-center justify-center rounded-full bg-green-50 text-green-600">
              <Sparkles className="size-5" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-semibold text-ink sm:text-3xl">Our Mission</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-500">
              To help brands launch, scale, and defend on Amazon. We believe every brand deserves an operator-grade team driving page-one rank,
              a healthy Buy Box, and profitable growth — not a patchwork of freelancers and generic ad tools.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-500">
              We combine Sponsored Products, Brands, Display, and DSP with A+ Content, Brand Store design, FBA and inventory planning, and account
              health — all managed by one team obsessed with TACoS and net profit across every marketplace you sell in.
            </p>
          </Reveal>

          <StatGrid stats={STATS} />
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-[72rem]">
          <Reveal className="mx-auto max-w-xl text-center">
            <span className="text-xs font-semibold tracking-widest text-green-600 uppercase">Why Choose Knowledge Inn?</span>
            <h2 className="mt-4 text-3xl font-semibold text-ink text-balance sm:text-4xl">Amazon specialists, not generalists</h2>
            <p className="mt-4 text-ink-500">Trusted by brands to grow page-one rank, protect the Buy Box, and scale profitably on Amazon.</p>
          </Reveal>
          <div className="mt-10">
            <ValuePropCards items={WHY_US} />
          </div>
        </div>
      </section>

      <section className="section-forest noise-overlay px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-[72rem] gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Layers className="size-8 text-green-400" />
            <h2 className="mt-4 text-2xl font-semibold text-white text-balance sm:text-3xl">Every Amazon discipline under one roof</h2>
            <p className="mt-4 text-forest-ink-muted">Advertising and growth, creative and brand, operations and logistics, listings and content — one coordinated team, not a stack of disconnected vendors.</p>
          </Reveal>
          <Reveal from="right" delay={0.1}>
            <Earth className="size-8 text-green-400" />
            <h2 className="mt-4 text-2xl font-semibold text-white text-balance sm:text-3xl">We win where it actually counts: your net profit</h2>
            <p className="mt-4 text-forest-ink-muted">We optimize ACoS and TACoS, defend the Buy Box, and recover FBA reimbursements — so growth shows up in real take-home margin, not just top-line ROAS.</p>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Ready to scale on Amazon?" description="Join hundreds of brands already growing profitably with Knowledge Inn." />
    </main>
  );
}
