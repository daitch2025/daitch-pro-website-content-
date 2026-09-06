import { getTopLevelAgents } from "@/content/agents";
import { INDUSTRIES } from "@/content/industries";
import { SOLUTIONS } from "@/content/solutions";
import { PLATFORM_PAGES } from "@/content/platform";
import type { NavGroup } from "@/types/content";

const TOP_LEVEL_AGENTS = getTopLevelAgents();

/** Header mega-menu — derived from the same content arrays that drive the pages themselves */
export const MEGA_NAV: NavGroup[] = [
  {
    label: "Services",
    children: TOP_LEVEL_AGENTS.map((agent) => ({
      label: agent.name,
      href: `/ai-agent/${agent.slug}`,
      description: agent.tagline,
    })),
  },
  {
    label: "Who We Help",
    children: SOLUTIONS.map((solution) => ({
      label: solution.name,
      href: `/solutions/${solution.slug}`,
      description: solution.headline,
    })),
  },
  {
    label: "How We Work",
    children: PLATFORM_PAGES.map((page) => ({
      label: page.name,
      href: page.slug === "marketplace" ? "/marketplace" : `/platform/${page.slug}`,
      description: page.headline,
    })),
  },
  {
    label: "Categories",
    children: INDUSTRIES.map((industry) => ({
      label: industry.name,
      href: `/industries/${industry.slug}/workflow`,
    })),
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];

/** Footer sitemap columns */
export const FOOTER_NAV = {
  solutions: {
    title: "Who We Help",
    links: SOLUTIONS.map((s) => ({ label: s.name, href: `/solutions/${s.slug}` })),
  },
  platform: {
    title: "How We Work",
    links: [
      ...PLATFORM_PAGES.map((p) => ({
        label: p.name,
        href: p.slug === "marketplace" ? "/marketplace" : `/platform/${p.slug}`,
      })),
      { label: "Knowledge Inn Affiliate", href: "/affiliate" },
    ],
  },
  industries: {
    title: "Categories We Grow",
    links: INDUSTRIES.map((i) => ({ label: i.name, href: `/industries/${i.slug}/workflow` })),
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/faqs" },
      { label: "Pricing", href: "/pricing" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Affiliate Policy", href: "/affiliate/partner-policy" },
      { label: "Affiliate Program Terms", href: "/affiliate/program-terms" },
    ],
  },
  benefits: {
    title: "Benefits",
    links: [
      { label: "Reviews & Reputation", href: "/benefits/review-management" },
      { label: "FBA Reimbursements", href: "/benefits/phone-calling" },
    ],
  },
  aiProducts: {
    title: "Free Tools",
    links: [
      { label: "Free Listing Grader", href: "/products/ai-webchat" },
      { label: "Profit & ACoS Dashboard", href: "/products/crm" },
    ],
  },
  aiAgentProduct: {
    title: "Our Services",
    links: [
      { label: "See the Results", href: "/ai-agent/demo" },
      { label: "All Amazon Services", href: "/ai-agent/product" },
      { label: "Service Pricing", href: "/ai-agent/pricing" },
    ],
  },
} as const;
