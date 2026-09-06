import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { AgentDirectoryGrid } from "@/components/sections/agent-directory-grid";
import { StatsStrip } from "@/components/sections/stats-strip";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBand } from "@/components/sections/cta-band";
import { AGENTS } from "@/content/agents";

export const metadata: Metadata = {
  title: "All Amazon Services",
  description: "18 specialized Amazon services, coordinated as one profit-focused growth engine.",
};

const STATS = [
  { value: AGENTS.length, label: "Specialist services in-house" },
  { value: 4, label: "Pillars: advertising, creative, operations, listings" },
  { value: 20, suffix: "+", label: "Amazon marketplaces we operate in" },
  { value: 1, label: "Dedicated pod running your account" },
];

export default function AiAgentProductPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Services"
        title={`One agency, ${AGENTS.length} Amazon services`}
        description="PPC, DSP, listings, SEO, catalog, inventory, and brand protection — every discipline your Amazon account needs, deployed together, not stitched together."
        primaryLabel="Get My Free Audit"
        secondaryLabel="See Pricing"
        secondaryHref="/ai-agent/pricing"
      />
      <section className="px-6 lg:px-10">
        <div className="mx-auto max-w-[72rem]">
          <StatsStrip items={STATS} />
        </div>
      </section>
      <AgentDirectoryGrid />
      <TestimonialsSection />
      <CtaBand title="Ready to put a full Amazon team behind your brand?" description="Start with a free 30-point audit — no commitment." />
    </main>
  );
}
