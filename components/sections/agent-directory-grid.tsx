"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Megaphone, TrendingUp, Package, Search } from "lucide-react";
import { AGENTS, getAgentsByCategory } from "@/content/agents";
import { Reveal } from "@/components/animation";
import { CategoryTabButton } from "@/components/sections/agent-console/category-tab-button";
import { RadialAgentMap } from "@/components/sections/agent-console/radial-agent-map";
import type { AgentCategory } from "@/types/content";

const CATEGORIES: { key: AgentCategory; label: string; description: string; icon: typeof Megaphone; accentFrom: string; accentTo: string }[] = [
  { key: "sales-voice", label: "Advertising & Growth", description: "PPC, DSP, product launches, and profitable rank.", icon: Megaphone, accentFrom: "#3C995B", accentTo: "#063A2F" },
  { key: "growth-marketing", label: "Creative & Brand", description: "A+, storefront, video, photography, and brand defense.", icon: TrendingUp, accentFrom: "#4AAE68", accentTo: "#2E7A48" },
  { key: "billing-scheduling", label: "Operations & Logistics", description: "Reimbursements, CRO, inventory, and account health.", icon: Package, accentFrom: "#D9A441", accentTo: "#C08A2E" },
  { key: "knowledge-content", label: "Listings & Content", description: "Amazon SEO, copywriting, catalog, and reviews.", icon: Search, accentFrom: "#4AAE68", accentTo: "#D9A441" },
];

function agentHref(agent: { slug: string; parentSlug?: string }) {
  return agent.parentSlug ? `/ai-agent/${agent.parentSlug}/${agent.slug}` : `/ai-agent/${agent.slug}`;
}

export function AgentDirectoryGrid() {
  const [activeKey, setActiveKey] = useState<AgentCategory>("sales-voice");
  const active = CATEGORIES.find((c) => c.key === activeKey)!;
  const agents = getAgentsByCategory(activeKey);

  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-[84rem]">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-widest text-green-600 uppercase">Amazon Services Suite</span>
            <h2 className="mt-4 text-3xl font-semibold text-ink text-balance sm:text-4xl">{AGENTS.length} Amazon services. One growth partner.</h2>
            <p className="mt-4 text-ink-500">Select a pillar to see how each service plugs into one profit-focused growth engine — nothing siloed, nothing outsourced.</p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid gap-4 lg:grid-cols-[21rem_1fr]">
          <div className="flex gap-2 overflow-x-auto no-scrollbar lg:flex-col lg:overflow-visible">
            {CATEGORIES.map((cat) => (
              <div key={cat.key} className="w-64 shrink-0 lg:w-auto">
                <CategoryTabButton
                  label={cat.label}
                  description={cat.description}
                  count={getAgentsByCategory(cat.key).length}
                  icon={cat.icon}
                  active={activeKey === cat.key}
                  accentFrom={cat.accentFrom}
                  onClick={() => setActiveKey(cat.key)}
                />
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-ink/8 bg-cream-100 p-6 sm:p-8">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{ background: `radial-gradient(60% 60% at 50% 0%, ${active.accentFrom} 0%, transparent 100%)` }}
              aria-hidden="true"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeKey}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink">{active.label}</h3>
                    <p className="mt-1 max-w-md text-sm text-ink-500">{active.description}</p>
                  </div>
                  <span className="rounded-full bg-ink/5 px-3 py-1 font-mono text-xs font-semibold text-ink-500">{agents.length} services</span>
                </div>

                <RadialAgentMap
                  nodes={agents.map((a) => ({ slug: a.slug, name: a.name, href: agentHref(a) }))}
                  icon={active.icon}
                  accentFrom={active.accentFrom}
                  accentTo={active.accentTo}
                  className="mx-auto mt-2 h-[13rem] w-full max-w-lg sm:h-[15rem]"
                />

                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  {agents.map((agent) => (
                    <Link
                      key={agent.slug}
                      href={agentHref(agent)}
                      className="group/pill inline-flex items-center gap-1 rounded-full border border-ink/10 bg-cream-200/60 px-3 py-1.5 text-xs font-medium text-ink-700 transition-colors hover:border-green-400 hover:bg-green-50 hover:text-green-800"
                    >
                      {agent.name}
                      <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover/pill:opacity-100" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <Link
              href="/ai-agent/product"
              className="group/more relative mt-6 flex items-center justify-center gap-1.5 border-t border-ink/8 pt-5 text-sm font-medium text-ink transition-colors hover:text-green-700"
            >
              Explore all Amazon services
              <ArrowRight className="size-3.5 transition-transform group-hover/more:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
