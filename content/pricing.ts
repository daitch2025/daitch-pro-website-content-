import type { PricingTier } from "@/types/content";

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Free Audit",
    description: "A no-cost, 30-point teardown of your Amazon account — no commitment.",
    monthlyPrice: "free",
    yearlyPrice: "free",
    features: [
      "Full account & listing audit",
      "ACoS, TACoS & profit teardown",
      "Competitor benchmark report",
      "30-minute strategy call",
      "A custom growth roadmap to keep",
    ],
  },
  {
    name: "Launch",
    description: "For new brands launching or relaunching on Amazon.",
    monthlyPrice: 1500,
    yearlyPrice: 1250,
    features: [
      "Up to 25 SKUs managed",
      "PPC setup & daily management",
      "Listing optimization (5 listings)",
      "Amazon SEO & keyword ranking",
      "Weekly reporting & email support",
    ],
  },
  {
    name: "Growth",
    description: "For established brands ready to scale profitably.",
    monthlyPrice: 3500,
    yearlyPrice: 2900,
    featured: true,
    features: [
      "Unlimited SKUs managed",
      "Full PPC + DSP management",
      "A+ Content & Brand Store design",
      "Inventory planning & CRO",
      "Dedicated account manager",
      "Bi-weekly strategy calls",
    ],
  },
  {
    name: "Scale",
    description: "For 8-figure brands and portfolios operating at scale.",
    monthlyPrice: 7500,
    yearlyPrice: 6250,
    features: [
      "Everything in Growth",
      "AMC & advanced profit analytics",
      "Global marketplace expansion",
      "Brand protection & reinstatement",
      "Priority senior pod",
      "Custom SLAs & quarterly reviews",
    ],
  },
];
