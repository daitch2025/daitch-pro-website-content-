import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AGENTS, getAgentBySlug } from "@/content/agents";
import { PageHero } from "@/components/sections/page-hero";
import { SubAgentGrid } from "@/components/sections/sub-agent-grid";
import { BusinessOutcomes } from "@/components/sections/business-outcomes";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBand } from "@/components/sections/cta-band";

const PARENT_SLUG = "ai-growth-and-marketing-voice-agent";

export function generateStaticParams() {
  return AGENTS.filter((agent) => agent.parentSlug === PARENT_SLUG).map((agent) => ({ slug: agent.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgentBySlug(slug, PARENT_SLUG);
  if (!agent) return {};
  return { title: agent.name, description: agent.heroDescription };
}

export default async function GrowthSubAgentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug, PARENT_SLUG);
  if (!agent) notFound();

  return (
    <main>
      <PageHero
        eyebrow="Creative & Brand Service"
        title={agent.name}
        description={agent.heroDescription}
        backHref={`/ai-agent/${PARENT_SLUG}`}
        backLabel="Back to the Full-Funnel Advertising Engine"
        primaryLabel={agent.ctaLabel}
        secondaryLabel="See Results"
        secondaryHref="/ai-agent/demo"
      />

      <BusinessOutcomes outcomes={agent.businessOutcomes} />

      {agent.subAgents.length > 0 && <SubAgentGrid title="What it handles" subAgents={agent.subAgents} />}

      <TestimonialsSection />

      <CtaBand title={`Ready to add ${agent.name} to your brand?`} description="Start with a free 30-point Amazon audit — no commitment." />
    </main>
  );
}
