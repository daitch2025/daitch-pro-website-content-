import type { PlatformPage } from "@/types/content";

export const PLATFORM_PAGES: PlatformPage[] = [
  {
    slug: "ai-workforce",
    name: "Your Dedicated Amazon Team",
    headline: "A senior Amazon team, not a dashboard you have to run",
    subhead: "Get a dedicated pod of Amazon specialists — ads, listings, operations, and brand — who run your account like it's their own, so you can run your business.",
    valueProps: [
      { title: "Specialist Pod", description: "PPC, SEO, creative, and ops experts assigned to your brand, not a rotating queue." },
      { title: "Done-For-You", description: "We operate the account end to end — you approve the strategy, we execute it." },
      { title: "Senior by Default", description: "Real Amazon operators lead your account, not junior generalists learning on your dime." },
    ],
    ctaLabel: "Meet Your Team",
    stats: [
      { value: 18, label: "Specialist services on tap for your brand" },
      { value: 1, label: "Dedicated account manager, one point of contact" },
      { value: 24, suffix: "/7", label: "Account monitoring across every metric" },
    ],
    capabilities: [
      "A dedicated pod of Amazon specialists across every discipline",
      "One account manager who knows your brand and your goals",
      "Strategy you approve, execution we own end to end",
      "Weekly communication and a shared roadmap you can see",
      "Escalation paths for account health and urgent issues",
      "Senior operators leading — no learning on your account",
    ],
  },
  {
    slug: "automations",
    name: "Data, Analytics & Profit Tracking",
    headline: "Dashboards that tie every ad dollar to net profit",
    subhead: "Stop guessing. We track ACoS, TACoS, margin, and true profitability by SKU — so every decision is made on real numbers, not gut feel.",
    valueProps: [
      { title: "Profit, Not Revenue", description: "We report net profit and TACoS by SKU, after fees, ads, and COGS." },
      { title: "Real-Time Dashboards", description: "One live view of ads, rank, inventory, and profitability." },
      { title: "AMC-Powered Insight", description: "Amazon Marketing Cloud reveals the paths that actually convert." },
    ],
    ctaLabel: "See the Dashboard",
    stats: [
      { value: 100, suffix: "%", label: "Of spend tied to net profit by SKU" },
      { value: 1, label: "Live dashboard for ads, rank, and inventory" },
      { value: 24, suffix: "/7", label: "Automated alerts on the metrics that matter" },
    ],
    capabilities: [
      "True profit by SKU — after fees, ads, and COGS",
      "Live tracking of ACoS, TACoS, rank, and Buy Box",
      "Automated alerts on stockouts, suppressions, and health",
      "AMC analysis of the conversion paths that drive sales",
      "Repricer and bid rules that react without a human in the loop",
      "Weekly reporting your whole team can actually read",
    ],
  },
  {
    slug: "project-management",
    name: "Account Management & Reporting",
    headline: "One account manager, and reporting you'll actually read",
    subhead: "A single point of contact who owns your account, a shared roadmap you can see, and clear weekly reporting — no black box, no chasing for updates.",
    valueProps: [
      { title: "One Point of Contact", description: "A dedicated manager who knows your brand, goals, and history." },
      { title: "A Shared Roadmap", description: "See what's planned, what's live, and what's next — always." },
      { title: "Clear Reporting", description: "Weekly reports focused on outcomes, not screenshots of ad spend." },
    ],
    ctaLabel: "See How We Report",
    stats: [
      { value: 1, label: "Dedicated account manager, every account" },
      { value: 1, label: "Shared roadmap, always current" },
      { value: 100, suffix: "%", label: "Transparency — no black-box reporting" },
    ],
    capabilities: [
      "A dedicated account manager as your single point of contact",
      "A shared roadmap of what's live, planned, and next",
      "Weekly reporting focused on profit and outcomes",
      "Scheduled strategy calls, not just monthly PDFs",
      "Fast response on urgent listing and account issues",
      "Quarterly business reviews that plan the next phase",
    ],
  },
  {
    slug: "payments",
    name: "Profit & Margin Engineering",
    headline: "We defend your bottom line, not just your top line",
    subhead: "Fees, COGS, pricing, and reimbursements all decide your real profit. We optimize every lever so growth actually reaches your bank account.",
    valueProps: [
      { title: "Fee Optimization", description: "Audit and reduce FBA, referral, and dimension-based fees." },
      { title: "Pricing Strategy", description: "Win the Buy Box and margin without a race to the bottom." },
      { title: "Reimbursement Recovery", description: "Claw back every dollar Amazon owes for lost and damaged units." },
    ],
    ctaLabel: "Protect My Margin",
    stats: [
      { value: 18, suffix: " mo", label: "Of transactions audited for money owed" },
      { value: 100, suffix: "%", label: "Fees reviewed for overcharges" },
      { value: 1, label: "Profit target every decision is measured against" },
    ],
    capabilities: [
      "FBA and referral fee audits that catch overcharges",
      "Dimension and weight corrections that lower per-unit fees",
      "Buy Box and pricing strategy that protects margin",
      "Reimbursement recovery on lost, damaged, and returned units",
      "Profitability modeling before you launch or discount",
      "Ongoing margin monitoring as fees and costs change",
    ],
  },
  {
    slug: "marketplace",
    name: "Global Marketplace Expansion",
    headline: "Take your bestsellers global",
    subhead: "Expand proven products into the US, UK, EU, Canada, Australia, and beyond — with localization, compliance, and inventory handled end to end.",
    valueProps: [
      { title: "Marketplace Selection", description: "We identify the regions where your winners will actually sell." },
      { title: "Localization Done Right", description: "Listings adapted for each market, not machine-translated." },
      { title: "Compliance & VAT", description: "The regulatory and tax lift handled so you don't stall." },
    ],
    ctaLabel: "Plan My Expansion",
    stats: [
      { value: 20, suffix: "+", label: "Amazon marketplaces we can launch you into" },
      { value: 100, suffix: "%", label: "Listings professionally localized" },
      { value: 1, label: "Coordinated plan across every region" },
    ],
    capabilities: [
      "Marketplace prioritization based on real demand for your products",
      "Professionally localized listings, A+, and creative per market",
      "Compliance, VAT, and regulatory setup handled for you",
      "Coordinated inventory and shipment planning across regions",
      "Region-specific PPC and SEO from day one",
      "One partner managing every marketplace you enter",
    ],
  },
];

export function getPlatformPageBySlug(slug: string) {
  return PLATFORM_PAGES.find((page) => page.slug === slug);
}
