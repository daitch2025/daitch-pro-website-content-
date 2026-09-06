import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home-hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { StatsStrip } from "@/components/sections/stats-strip";
import { AgentDirectoryGrid } from "@/components/sections/agent-directory-grid";
import { OnboardingSteps } from "@/components/sections/onboarding-steps";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingTable } from "@/components/sections/pricing-table";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBand } from "@/components/sections/cta-band";
import { INDUSTRIES } from "@/content/industries";
import { FAQS } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Full-Service Amazon Agency for Ambitious Brands",
  description:
    "Knowledge Inn is the full-service Amazon agency that launches, scales, and defends brands on the world's largest marketplace — PPC & DSP, listing optimization, Amazon SEO, catalog & inventory, and brand protection, engineered for profit.",
};

const MARKETPLACES = [
  "Amazon.com · US",
  "Amazon.co.uk · UK",
  "Amazon.de · Germany",
  "Amazon.ca · Canada",
  "Amazon.com.au · Australia",
  "Amazon.co.jp · Japan",
  "Amazon.fr · France",
  "Amazon.it · Italy",
  "Amazon.es · Spain",
  "Amazon.com.mx · Mexico",
  "Amazon.ae · UAE",
  "Amazon.in · India",
];

const SOCIAL_PROOF = [
  { value: 500, suffix: "+", label: "Brands scaled on Amazon" },
  { value: 2, prefix: "$", suffix: "B+", label: "In marketplace sales managed" },
  { value: 32, suffix: "%", label: "Average ACoS reduction" },
  { value: 18, label: "Specialist services in-house" },
];

export default function Home() {
  return (
    <main>
      <HomeHero />

      <div className="space-y-3 border-y border-ink/8 bg-cream-100 py-6">
        <LogoMarquee items={INDUSTRIES.map((i) => i.name)} />
        <LogoMarquee items={MARKETPLACES} reverse />
      </div>

      <section className="px-6 pt-16 lg:px-10">
        <div className="mx-auto max-w-[72rem]">
          <StatsStrip items={SOCIAL_PROOF} />
        </div>
      </section>

      <AgentDirectoryGrid />
      <OnboardingSteps />
      <WhyChooseUs />
      <TestimonialsSection />
      <PricingTable />
      <FaqAccordion items={FAQS.slice(0, 6)} />
      <CtaBand title="Ready to dominate your category on Amazon?" description="Join 500+ brands scaling profitably with Knowledge Inn. Start with a free 30-point audit." />
    </main>
  );
}
