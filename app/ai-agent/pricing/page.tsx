import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { PricingTable } from "@/components/sections/pricing-table";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Service Pricing",
  description: "Transparent monthly retainers for Knowledge Inn's full-service Amazon management.",
};

export default function AiAgentPricingPage() {
  return (
    <main>
      <PageHero eyebrow="Our Services · Pricing" title="Simple pricing for a full Amazon team" description="The same transparent retainers that power the full Knowledge Inn service, starting with a free audit." primaryLabel="" />
      <PricingTable compact />
      <CtaBand title="Ready to get started?" description="Start with a free 30-point Amazon audit — no commitment." />
    </main>
  );
}
