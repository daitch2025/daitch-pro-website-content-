import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PLATFORM_PAGES, getPlatformPageBySlug } from "@/content/platform";
import { PageHero } from "@/components/sections/page-hero";
import { ValuePropCards } from "@/components/sections/value-prop-cards";
import { StatsStrip } from "@/components/sections/stats-strip";
import { CapabilityList } from "@/components/sections/capability-list";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBand } from "@/components/sections/cta-band";
import { WorkflowDiagram } from "@/components/sections/workflow-diagram";
import { Reveal } from "@/components/animation";

const AUTOMATION_TRIGGERS = [{ label: "New Order" }, { label: "Ad Click" }, { label: "Buy Box Lost" }, { label: "Low Stock" }];
const AUTOMATION_ACTIONS = [{ label: "Bid Adjusted" }, { label: "Restock Alert" }, { label: "Report Updated" }, { label: "Repricer Fired" }];

export function generateStaticParams() {
  return PLATFORM_PAGES.filter((page) => page.slug !== "marketplace").map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPlatformPageBySlug(slug);
  if (!page) return {};
  return { title: page.name, description: page.subhead };
}

export default async function PlatformDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPlatformPageBySlug(slug);
  if (!page || page.slug === "marketplace") notFound();

  return (
    <main>
      <PageHero eyebrow={`Platform · ${page.name}`} title={page.headline} description={page.subhead} primaryLabel={page.ctaLabel} secondaryLabel="Get a Demo" secondaryHref="/contact" />
      <section className="px-6 lg:px-10">
        <div className="mx-auto max-w-[72rem]">
          <StatsStrip items={page.stats} />
        </div>
      </section>
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-[72rem]">
          <ValuePropCards items={page.valueProps} />
        </div>
      </section>
      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-[72rem]">
          <CapabilityList title="Everything included" items={page.capabilities} />
        </div>
      </section>
      {page.slug === "automations" && (
        <section className="px-6 pb-20 lg:px-10">
          <div className="mx-auto max-w-[72rem]">
            <Reveal className="mx-auto max-w-xl text-center">
              <span className="text-xs font-semibold tracking-widest text-green-600 uppercase">How It Works</span>
              <h2 className="mt-4 text-3xl font-semibold text-ink text-balance sm:text-4xl">Every signal, acted on automatically</h2>
              <p className="mt-4 text-ink-500">A lost Buy Box fires the repricer, a low-stock alert triggers a restock, an ad click feeds the bid model — your account reacts in real time, not next week.</p>
            </Reveal>
            <Reveal from="none" delay={0.15} className="mt-10 rounded-[var(--radius-xl)] border border-ink/8 bg-cream-100 p-4 sm:p-8">
              <WorkflowDiagram centerLabel="Growth Engine" inputs={AUTOMATION_TRIGGERS} outputs={AUTOMATION_ACTIONS} className="mx-auto w-full max-w-3xl" />
            </Reveal>
          </div>
        </section>
      )}
      <TestimonialsSection />
      <CtaBand title="Ready to put this to work for your brand?" description="Start with a free 30-point Amazon audit — no commitment." />
    </main>
  );
}
