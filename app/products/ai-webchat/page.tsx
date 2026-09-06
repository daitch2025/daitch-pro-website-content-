import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ValuePropCards } from "@/components/sections/value-prop-cards";
import { StatsStrip } from "@/components/sections/stats-strip";
import { CapabilityList } from "@/components/sections/capability-list";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Free Listing Grader",
  description: "Grade your Amazon listing free and see exactly what's costing you clicks, rank, and sales.",
};

const VALUE_PROPS = [
  { title: "Instant Listing Score", description: "See how your title, images, bullets, and A+ stack up against page-one competitors." },
  { title: "Keyword & Indexing Gaps", description: "Find the high-intent keywords you're not ranking for — and why." },
  { title: "Actionable Fixes", description: "A prioritized list of changes ranked by expected impact on conversion." },
];

const STATS = [
  { value: 30, label: "Listing checkpoints scored in the grade" },
  { value: 0, label: "Cost to run your free listing grade" },
  { value: 1, label: "Prioritized action plan you keep either way" },
];

const CAPABILITIES = [
  "Title, bullet, and description scored against Amazon's ranking factors",
  "Keyword indexing gaps found by comparing you to page-one competitors",
  "Main image and A+ Content checked against conversion best practices",
  "Backend search terms audited for wasted or missing keyword space",
  "A prioritized fix list ranked by expected impact",
  "A follow-up strategy call to walk through the results",
];

export default function ListingGraderPage() {
  return (
    <main>
      <PageHero
        eyebrow="Free Tools · Listing Grader"
        title="Grade your Amazon listing, free"
        description="Find out in minutes what's costing your listing clicks, rank, and sales — then get a prioritized plan to fix it."
        primaryLabel="Grade My Listing"
        secondaryLabel="Book a Strategy Call"
        secondaryHref="/contact"
      />
      <section className="px-6 lg:px-10">
        <div className="mx-auto max-w-[72rem]">
          <StatsStrip items={STATS} />
        </div>
      </section>
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-[72rem]">
          <ValuePropCards items={VALUE_PROPS} />
        </div>
      </section>
      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-[72rem]">
          <CapabilityList title="Everything included" items={CAPABILITIES} />
        </div>
      </section>
      <TestimonialsSection />
      <CtaBand title="Ready to see your listing's real score?" description="Start with a free 30-point audit — no commitment." />
    </main>
  );
}
