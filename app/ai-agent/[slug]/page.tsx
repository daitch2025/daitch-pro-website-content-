import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTopLevelAgents, getAgentBySlug } from "@/content/agents";
import { PageHero } from "@/components/sections/page-hero";
import { SubAgentGrid } from "@/components/sections/sub-agent-grid";
import { BusinessOutcomes } from "@/components/sections/business-outcomes";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBand } from "@/components/sections/cta-band";

export function generateStaticParams() {
  return getTopLevelAgents().map((agent) => ({ slug: agent.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgentBySlug(slug, undefined);
  if (!agent) return {};
  return { title: agent.name, description: agent.heroDescription };
}

export default async function AgentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug, undefined);
  if (!agent) notFound();

  return (
    <main>
      <PageHero
        eyebrow="Amazon Service"
        title={agent.name}
        description={agent.heroDescription}
        primaryLabel={agent.ctaLabel}
        secondaryLabel="See Results"
        secondaryHref="/ai-agent/demo"
      />

      <BusinessOutcomes outcomes={agent.businessOutcomes} />

      <SubAgentGrid subAgents={agent.subAgents} />

      <TestimonialsSection />

      <CtaBand title={`Ready to add ${agent.name} to your brand?`} description="Start with a free 30-point Amazon audit — no commitment." />
    </main>
  );
}
