import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRIES, getIndustryBySlug } from "@/content/industries";
import { PageHero } from "@/components/sections/page-hero";
import { IndustryWorkflowNarrative } from "@/components/sections/industry-workflow-narrative";
import { CtaBand } from "@/components/sections/cta-band";

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} — Amazon Agency`,
    description: industry.solutionNarrative,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <main>
      <PageHero
        eyebrow={industry.eyebrow}
        title={`${industry.name} on Amazon`}
        description={`Full-service Amazon growth for ${industry.shortName} — from listings and advertising to logistics and brand defense, engineered for profit.`}
        primaryLabel="Get My Free Audit"
        secondaryLabel="Book a Strategy Call"
        secondaryHref="/contact"
      />
      <IndustryWorkflowNarrative industry={industry} />
      <CtaBand title={`Ready to grow your ${industry.shortName} on Amazon?`} description="Start with a free 30-point audit — no commitment." />
    </main>
  );
}
