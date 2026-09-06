import type { SolutionPage } from "@/types/content";

export const SOLUTIONS: SolutionPage[] = [
  {
    slug: "web-agency",
    name: "Private Label Brands",
    headline: "Launch a private-label brand that owns its niche",
    subhead:
      "From first ASIN to category leader — we engineer the launch, manufacture the rank velocity, and build the review moat that keeps you on page one.",
    valueProps: [
      { title: "Engineered Launches", description: "A coordinated 90-day push that drives rank velocity from day one." },
      { title: "Page-One Ranking", description: "PPC and Amazon SEO working together to reach the keywords that pay." },
      { title: "A Review Moat", description: "Compliant review generation that builds defensible social proof." },
    ],
    stats: [
      { value: 90, suffix: "-day", label: "Launch playbook from listing to page one" },
      { value: 4, suffix: "x", label: "Faster rank velocity than a solo launch" },
      { value: 18, label: "Specialist services behind every brand" },
    ],
    capabilities: [
      "A sequenced launch plan built around the honeymoon window",
      "Keyword-rich listings and A+ that rank and convert from day one",
      "Profit-tuned PPC that buys rank without burning margin",
      "Amazon SEO that turns paid rank into free organic sales",
      "A compliant review engine that builds a defensible moat",
      "Inventory planning so a stockout never resets your rank",
    ],
  },
  {
    slug: "digital-agency",
    name: "Scaling 7 & 8-Figure Brands",
    headline: "The growth partner for brands breaking the next revenue ceiling",
    subhead: "You've proven the product. Now scale profitably with a senior pod running ads, creative, operations, and brand defense as one coordinated engine.",
    valueProps: [
      { title: "Profit-First Scaling", description: "Growth measured against net profit and TACoS, not vanity revenue." },
      { title: "One Coordinated Pod", description: "Ads, creative, SEO, and ops working from a single strategy." },
      { title: "Data That Decides", description: "Real dashboards tying every ad dollar back to your bottom line." },
    ],
    stats: [
      { value: 30, suffix: "+", label: "Growth levers managed under one roof" },
      { value: 100, suffix: "%", label: "Of spend tied back to net profit" },
      { value: 8, suffix: "-fig", label: "Brands operated at scale on the platform" },
    ],
    capabilities: [
      "A senior account pod, not a rotating junior team",
      "Full-funnel PPC and DSP managed to a profit target",
      "Premium A+, Brand Store, and creative that scale conversion",
      "Inventory and CRO tuned to protect margin as you grow",
      "AMC and profit analytics that inform every decision",
      "Brand protection so growth doesn't invite hijackers",
    ],
  },
  {
    slug: "social-media-agency",
    name: "DTC Brands on Amazon",
    headline: "Bring your DTC brand to Amazon — without cannibalizing it",
    subhead: "Reclaim control from resellers, translate your brand for the marketplace, and grow Amazon as a complementary channel that protects your owned store.",
    valueProps: [
      { title: "Reseller Control", description: "Brand Registry and enforcement take your listings back from resellers." },
      { title: "Marketplace-Native Creative", description: "Content that converts on Amazon, not just on your own site." },
      { title: "No Channel Conflict", description: "Pricing and positioning that grow Amazon without hurting DTC." },
    ],
    stats: [
      { value: 100, suffix: "%", label: "Brand control reclaimed from resellers" },
      { value: 0, label: "Cannibalization of your owned DTC store" },
      { value: 24, suffix: "/7", label: "Marketplace presence, fully managed" },
    ],
    capabilities: [
      "Brand Registry enrollment and reseller enforcement",
      "A shoppable Brand Store that mirrors your brand world",
      "Marketplace-native photography, A+, and video",
      "Pricing and positioning that protect your DTC margins",
      "DSP retargeting that recaptures your existing audience",
      "One team owning Amazon so your DTC team stays focused",
    ],
  },
  {
    slug: "marketing",
    name: "Managed Amazon Advertising",
    headline: "Done-for-you PPC & DSP engineered for profit, not just spend",
    subhead: "Hand your advertising to specialists who manage every bid, keyword, and placement against your real profit target — and prove the return.",
    valueProps: [
      { title: "Profit-Tuned PPC", description: "Sponsored Products, Brands, and Display managed to your ACoS target." },
      { title: "Full-Funnel DSP", description: "Retargeting and prospecting that create demand, not just capture it." },
      { title: "Transparent Reporting", description: "Every dollar of spend tied to net sales you can actually see." },
    ],
    stats: [
      { value: 24, suffix: "/7", label: "Bid and budget optimization, daily" },
      { value: 3, label: "Ad types managed: Products, Brands, Display" },
      { value: 100, suffix: "%", label: "Spend reported against net profit" },
    ],
    capabilities: [
      "Daily bid, budget, and placement optimization to a profit target",
      "Aggressive negative targeting to cut wasted spend",
      "Sponsored Brands video and DSP to own the full funnel",
      "Competitor conquesting and defensive brand campaigns",
      "AMC insights that reveal the paths that actually convert",
      "Reporting that ties ad spend to net sales, not vanity clicks",
    ],
  },
  {
    slug: "creative-agencies",
    name: "Aggregators & Portfolios",
    headline: "Operate a portfolio of brands from one command center",
    subhead: "Standardize playbooks, benchmark performance across brands, and give every SKU specialist attention — without scaling headcount for every acquisition.",
    valueProps: [
      { title: "Portfolio Playbooks", description: "Proven, repeatable processes applied consistently across every brand." },
      { title: "Cross-Brand Benchmarking", description: "See which brands are winning, and why, from one view." },
      { title: "Elastic Capacity", description: "Take on new acquisitions without a proportional headcount jump." },
    ],
    stats: [
      { value: 50, suffix: "+", label: "Brands operable from one partner" },
      { value: 18, label: "Specialist services applied per brand" },
      { value: 1, label: "Standardized playbook across the portfolio" },
    ],
    capabilities: [
      "Standardized launch, ads, and ops playbooks across brands",
      "Cross-portfolio benchmarking to spot winners and laggards",
      "Specialist attention on every SKU without new hires",
      "Consolidated reporting your investors can read at a glance",
      "Rapid onboarding of newly acquired brands and catalogs",
      "Brand protection and account health across the whole portfolio",
    ],
  },
  {
    slug: "software-vendor",
    name: "Wholesale & Resellers",
    headline: "Win the Buy Box and protect margin across a broad catalog",
    subhead: "For sellers competing on shared listings, we defend margin with smart repricing, keep your account bulletproof, and recover every reimbursement dollar Amazon owes you.",
    valueProps: [
      { title: "Buy Box Strategy", description: "Win and hold the Buy Box without a race to the bottom." },
      { title: "Account Protection", description: "Compliance and health monitoring that keeps you selling." },
      { title: "Margin Recovery", description: "Reimbursement audits that turn Amazon's losses into profit." },
    ],
    stats: [
      { value: 18, suffix: " mo", label: "Of transactions audited for reimbursements" },
      { value: 100, suffix: "%", label: "Account health under active watch" },
      { value: 24, suffix: "/7", label: "Buy Box and repricing monitoring" },
    ],
    capabilities: [
      "Repricing and Buy Box strategy that defends your margin",
      "Account-health and compliance monitoring, every day",
      "IP-complaint and condition-issue resolution before they escalate",
      "Reimbursement recovery across lost, damaged, and overcharged units",
      "Catalog hygiene across thousands of shared listings",
      "Fast reinstatement support if a SKU or account is flagged",
    ],
  },
  {
    slug: "sales",
    name: "Account Recovery & Reinstatement",
    headline: "Suspended or struggling? We get you selling again — fast",
    subhead: "Whether it's a suspended account, a suppressed bestseller, or a stalled brand, we diagnose the root cause, write the Plan of Action, and rebuild your performance.",
    valueProps: [
      { title: "Fast Reinstatement", description: "Root-cause Plans of Action written to actually get accepted." },
      { title: "Listing Recovery", description: "Restore suppressed listings and rebuild lost rank quickly." },
      { title: "Turnaround Strategy", description: "A clear plan to rebuild performance after the fire is out." },
    ],
    stats: [
      { value: 24, suffix: "/7", label: "Account-health monitoring once you're back" },
      { value: 100, suffix: "%", label: "Appeals built on documented root cause" },
      { value: 1, label: "Dedicated specialist on your case" },
    ],
    capabilities: [
      "Root-cause analysis of the suspension or performance issue",
      "Plans of Action written to Amazon's actual acceptance criteria",
      "Suppressed and inactive listing restoration",
      "Rank recovery after stockouts, hijacks, or listing changes",
      "Ongoing account-health monitoring to prevent a repeat",
      "A rebuild plan that returns you to profitable growth",
    ],
  },
];

export function getSolutionBySlug(slug: string) {
  return SOLUTIONS.find((solution) => solution.slug === slug);
}
