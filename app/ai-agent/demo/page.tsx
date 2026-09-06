import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { DashboardShowcase } from "@/components/sections/dashboard-showcase/dashboard-showcase";
import { Reveal } from "@/components/animation";

export const metadata: Metadata = {
  title: "See the Results",
  description: "See the profit, rank, and reimbursement results Knowledge Inn drives for brands on Amazon.",
};

export default function AiAgentDemoPage() {
  return (
    <main>
      <PageHero
        eyebrow="See the Results"
        title="Real numbers, not promises"
        description="Growing net sales while cutting ACoS, climbing page-one rank, and recovering reimbursements Amazon owes you — this is what a managed Amazon account looks like."
        primaryLabel="Get My Free Audit"
        primaryHref="/contact"
        secondaryLabel="Book a Strategy Call"
        secondaryHref="/contact"
      />
      <section className="px-6 pb-24 lg:px-10">
        <Reveal className="mx-auto flex max-w-[30rem] justify-center">
          <DashboardShowcase />
        </Reveal>
      </section>
      <CtaBand title="Want to see what this looks like for your brand?" description="Book a personalized strategy call with our team." />
    </main>
  );
}
