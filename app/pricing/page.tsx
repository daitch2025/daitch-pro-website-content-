import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { PricingTable } from "@/components/sections/pricing-table";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBand } from "@/components/sections/cta-band";
import { FAQS } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent monthly retainers for every brand stage. No hidden fees, no long lock-ins — every plan starts with a free audit.",
};

const PRICING_FAQS = FAQS.filter((f) => /cost|audit|retainer|included/i.test(f.question));

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Pricing that scales with your brand"
        description="From a new launch to an 8-figure portfolio — pick the retainer that matches where your brand is today. Every plan starts with a free audit."
        primaryLabel="Get My Free Audit"
        secondaryLabel="Talk to Sales"
        secondaryHref="/contact"
      />
      <PricingTable compact />
      <TestimonialsSection />
      <FaqAccordion items={PRICING_FAQS.length ? PRICING_FAQS : FAQS.slice(0, 4)} compact />
      <CtaBand title="Still deciding which plan fits?" description="Book a strategy call and we'll help you pick the right plan." />
    </main>
  );
}
