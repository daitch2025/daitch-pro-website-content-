import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ValuePropCards } from "@/components/sections/value-prop-cards";
import { StatsStrip } from "@/components/sections/stats-strip";
import { CapabilityList } from "@/components/sections/capability-list";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "FBA Reimbursements & Recovery",
  description: "A forensic audit of your Amazon account that recovers every dollar owed for lost, damaged, and overcharged inventory.",
};

const VALUE_PROPS = [
  { title: "18-Month Forensic Audit", description: "We reconcile up to 18 months of transactions against your actual inventory and fees." },
  { title: "Every Claim Filed & Chased", description: "Compliant cases filed and escalated until Amazon actually pays out." },
  { title: "Reimbursement Reporting", description: "See exactly what was recovered, claim by claim, in plain numbers." },
];

const STATS = [
  { value: 18, suffix: " mo", label: "Of transactions audited for money owed" },
  { value: 0, label: "Cost to you unless we recover something" },
  { value: 100, suffix: "%", label: "Of eligible claims filed and tracked" },
];

const CAPABILITIES = [
  "Lost and damaged FBA inventory reconciled unit by unit",
  "Fee, dimension, and weight overcharges caught and disputed",
  "Return discrepancies recovered when items were never restocked",
  "Removal and disposal order audits for owed credits",
  "Cases filed and escalated until they're actually paid",
  "Clear reimbursement reporting you can hand to your accountant",
];

export default function FbaReimbursementsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Benefits · FBA Reimbursements"
        title="Recover every dollar Amazon owes you"
        description="Amazon loses, damages, and overcharges — and rarely pays you back automatically. We audit, file, and chase the claims until the money lands back in your account."
        primaryLabel="Get My Free Audit"
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
      <CtaBand title="Ready to see what Amazon owes you?" description="Start with a free 30-point audit — no commitment." />
    </main>
  );
}
