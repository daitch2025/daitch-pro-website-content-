import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SOLUTIONS, getSolutionBySlug } from "@/content/solutions";
import { PageHero } from "@/components/sections/page-hero";
import { ValuePropCards } from "@/components/sections/value-prop-cards";
import { StatsStrip } from "@/components/sections/stats-strip";
import { CapabilityList } from "@/components/sections/capability-list";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBand } from "@/components/sections/cta-band";

export function generateStaticParams() {
  return SOLUTIONS.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return { title: `Solutions for ${solution.name}`, description: solution.subhead };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  return (
    <main>
      <PageHero eyebrow={`Who We Help · ${solution.name}`} title={solution.headline} description={solution.subhead} primaryLabel="Get My Free Audit" secondaryLabel="Book a Strategy Call" secondaryHref="/contact" />
      <section className="px-6 lg:px-10">
        <div className="mx-auto max-w-[72rem]">
          <StatsStrip items={solution.stats} />
        </div>
      </section>
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-[72rem]">
          <ValuePropCards items={solution.valueProps} />
        </div>
      </section>
      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-[72rem]">
          <CapabilityList title="Everything included" items={solution.capabilities} />
        </div>
      </section>
      <TestimonialsSection />
      <CtaBand title={`Ready to talk about ${solution.name.toLowerCase()}?`} description="Start with a free 30-point Amazon audit — no commitment." />
    </main>
  );
}
