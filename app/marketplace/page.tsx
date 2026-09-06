import type { Metadata } from "next";
import { getPlatformPageBySlug } from "@/content/platform";
import { PageHero } from "@/components/sections/page-hero";
import { ValuePropCards } from "@/components/sections/value-prop-cards";
import { StatsStrip } from "@/components/sections/stats-strip";
import { CapabilityList } from "@/components/sections/capability-list";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBand } from "@/components/sections/cta-band";

const page = getPlatformPageBySlug("marketplace")!;

export const metadata: Metadata = {
  title: page.name,
  description: page.subhead,
};

export default function MarketplacePage() {
  return (
    <main>
      <PageHero eyebrow="How We Work · Global Expansion" title={page.headline} description={page.subhead} primaryLabel={page.ctaLabel} secondaryLabel="Book a Strategy Call" secondaryHref="/contact" />
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
      <TestimonialsSection />
      <CtaBand title="Ready to take your brand global?" description="Start with a free 30-point audit — no commitment." />
    </main>
  );
}
