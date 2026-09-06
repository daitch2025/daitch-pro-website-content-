import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ValuePropCards } from "@/components/sections/value-prop-cards";
import { StatsStrip } from "@/components/sections/stats-strip";
import { CapabilityList } from "@/components/sections/capability-list";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Profit & ACoS Dashboard",
  description: "See true net profit by SKU, after fees, ads, and COGS — updated automatically as your Amazon account changes.",
};

const VALUE_PROPS = [
  { title: "Profit, Not Just Revenue", description: "True net profit by SKU after Amazon fees, ad spend, and COGS — not top-line sales." },
  { title: "ACoS & TACoS Tracked Live", description: "See exactly how advertising efficiency is trending, updated daily." },
  { title: "One View, No Spreadsheets", description: "Ads, rank, inventory, and profit in one dashboard — no manual exports." },
];

const STATS = [
  { value: 0, label: "Spreadsheets required to see your numbers" },
  { value: 1, label: "Dashboard for ads, rank, and profit" },
  { value: 24, suffix: "/7", label: "Automated alerts on the metrics that matter" },
];

const CAPABILITIES = [
  "Net profit by SKU calculated after fees, ads, and COGS automatically",
  "Live ACoS and TACoS tracked across every campaign",
  "Buy Box, rank, and inventory status in the same view",
  "Automated alerts on stockouts, suppressions, and margin drops",
  "Custom reporting views built around how you run your brand",
  "Weekly summaries that turn data into a clear next move",
];

export default function ProfitDashboardPage() {
  return (
    <main>
      <PageHero
        eyebrow="Free Tools · Profit Dashboard"
        title="See your real profit, not just your sales"
        description="One dashboard showing true net profit by SKU, ACoS, TACoS, rank, and inventory — updated automatically as your account changes."
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
      <CtaBand title="Ready to see your real numbers?" description="Start with a free 30-point audit — no commitment." />
    </main>
  );
}
