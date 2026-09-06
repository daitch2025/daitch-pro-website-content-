"use client";

import Link from "next/link";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, REVEAL_STAGGER_ITEM } from "@/components/animation";
import { motion } from "motion/react";
import { AGENTS } from "@/content/agents";
import { WorkflowDiagram } from "@/components/sections/workflow-diagram";
import type { Industry } from "@/types/content";

const CONTACT_CHANNELS = [{ label: "Ad Spend" }, { label: "Search Traffic" }, { label: "Your Catalog" }];

function agentHref(slug: string) {
  const agent = AGENTS.find((a) => a.slug === slug);
  if (!agent) return null;
  return agent.parentSlug ? `/ai-agent/${agent.parentSlug}/${agent.slug}` : `/ai-agent/${agent.slug}`;
}

export function IndustryWorkflowNarrative({ industry }: { industry: Industry }) {
  const relatedAgents = industry.relatedAgentSlugs.map((slug) => AGENTS.find((a) => a.slug === slug)).filter(Boolean);
  const diagramOutputs = relatedAgents.map((agent) => ({ label: agent!.name.replace(/^AI\s+/, "") }));

  return (
    <>
      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[72rem] gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest text-ink-300 uppercase">What Problem {industry.shortName} Have</span>
            <p className="mt-4 text-xl leading-relaxed text-ink-700 text-balance">{industry.problemNarrative}</p>
          </Reveal>
          <Reveal from="right" delay={0.1}>
            <span className="text-xs font-semibold tracking-widest text-green-600 uppercase">The Knowledge Inn {industry.name} Solution</span>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">{industry.solutionNarrative}</p>
            {relatedAgents.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {relatedAgents.map((agent) => {
                  const href = agentHref(agent!.slug);
                  return href ? (
                    <Link
                      key={agent!.slug}
                      href={href}
                      className="group/chip inline-flex items-center gap-1 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-medium text-green-800 transition-colors hover:border-green-400"
                    >
                      {agent!.name}
                      <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover/chip:opacity-100" />
                    </Link>
                  ) : null;
                })}
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {diagramOutputs.length > 0 && (
        <section className="px-6 pb-16 lg:px-10">
          <div className="mx-auto max-w-[72rem] rounded-[var(--radius-xl)] border border-ink/8 bg-cream-100 p-4 sm:p-8">
            <Reveal from="none">
              <WorkflowDiagram centerLabel="Knowledge Inn Growth" inputs={CONTACT_CHANNELS} outputs={diagramOutputs} className="mx-auto w-full max-w-3xl" />
            </Reveal>
          </div>
        </section>
      )}

      <section className="bg-cream-200 px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-[72rem]">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest text-green-600 uppercase">Results</span>
            <h2 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">What changes once Knowledge Inn takes over</h2>
          </Reveal>
          <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-3">
            {industry.results.map((result) => (
              <motion.div
                key={result}
                variants={REVEAL_STAGGER_ITEM}
                className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-ink/8 bg-cream-100 p-5"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600" />
                <p className="text-sm leading-relaxed text-ink-700">{result}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-[72rem]">
          <Reveal className="max-w-xl">
            <span className="text-xs font-semibold tracking-widest text-green-600 uppercase">The Playbook</span>
            <h2 className="mt-4 text-2xl font-semibold text-ink text-balance sm:text-3xl">Our growth playbook for {industry.shortName}</h2>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {industry.journeySteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08} className="relative rounded-[var(--radius-lg)] border border-ink/8 bg-cream-100 p-7">
                <span className="font-mono text-xs font-semibold text-green-600">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-forest noise-overlay px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-[72rem]">
          <Reveal className="max-w-xl">
            <span className="text-xs font-semibold tracking-widest text-green-400 uppercase">How Knowledge Inn Is Best Here</span>
            <h2 className="mt-4 text-2xl font-semibold text-white text-balance sm:text-3xl">Built for {industry.shortName}, not adapted for them</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {industry.whyBestHere.map((item) => (
              <Reveal key={item.title} className="glass-panel-dark rounded-[var(--radius-lg)] p-7">
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-ink-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
