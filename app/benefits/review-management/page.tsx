import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ValuePropCards } from "@/components/sections/value-prop-cards";
import { StatsStrip } from "@/components/sections/stats-strip";
import { CapabilityList } from "@/components/sections/capability-list";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Reviews & Reputation Management",
  description: "Grow verified Amazon reviews the compliant way, defend your star rating, and keep buyer messages answered fast.",
};

const VALUE_PROPS = [
  { title: "Compliant Review Growth", description: "Grow verified reviews through Amazon Vine and TOS-safe post-purchase follow-up — never fake or incentivized." },
  { title: "Rating Protection", description: "Monitor your star rating daily and request removal of reviews that violate Amazon policy." },
  { title: "Fast Buyer Response", description: "Q&A and buyer-seller messages answered quickly to protect your order defect rate." },
];

const STATS = [
  { value: 100, suffix: "%", label: "Compliant with Amazon's review policies" },
  { value: 3, label: "Channels covered: Vine, Q&A, and messaging" },
  { value: 24, suffix: "h", label: "Target response time on buyer messages" },
];

const CAPABILITIES = [
  "Compliant review generation through Amazon Vine and follow-up sequences",
  "Removal requests filed for reviews that break Amazon's policies",
  "Product Q&A answered before it costs you a sale",
  "Buyer-seller messages handled fast to protect your ODR",
  "Star-rating monitoring that flags drops the moment they start",
  "Seller feedback removal requests for product-related complaints",
];

export default function ReviewManagementPage() {
  return (
    <main>
      <PageHero
        eyebrow="Benefits · Reviews & Reputation"
        title="Turn great products into great reviews"
        description="Grow verified reviews, defend your star rating, and keep buyer messages answered — the compliant way, every time."
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
      <CtaBand title="Ready to grow your reputation on Amazon?" description="Start with a free 30-point audit — no commitment." />
    </main>
  );
}
