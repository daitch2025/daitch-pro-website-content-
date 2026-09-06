import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBand } from "@/components/sections/cta-band";
import { FAQS } from "@/content/faqs";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Find answers to common questions about working with the Knowledge Inn Amazon agency.",
};

export default function FaqsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(FAQS)) }} />
      <PageHero eyebrow="FAQ" title="Frequently asked questions" description="Everything you need to know about working with the Knowledge Inn Amazon agency." primaryLabel="" />
      <FaqAccordion items={FAQS} compact />
      <CtaBand title="Ready to scale on Amazon?" description="Start with a free 30-point audit — no commitment." />
    </main>
  );
}
