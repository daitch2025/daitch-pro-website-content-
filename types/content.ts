export type SubAgent = {
  name: string;
  description: string;
  /** set when this sub-agent also has its own dedicated page */
  href?: string;
};

export type AgentCategory =
  | "growth-marketing"
  | "sales-voice"
  | "billing-scheduling"
  | "knowledge-content";

export type Agent = {
  slug: string;
  /** set on the 6 agents nested under ai-growth-and-marketing-voice-agent */
  parentSlug?: string;
  name: string;
  category: AgentCategory;
  tagline: string;
  heroDescription: string;
  businessOutcomes: string[];
  subAgents: SubAgent[];
  ctaLabel: string;
};

export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  problemNarrative: string;
  solutionNarrative: string;
  /** real agent slugs that serve this vertical, for cross-linking */
  relatedAgentSlugs: string[];
  results: string[];
  journeySteps: { title: string; description: string }[];
  whyBestHere: { title: string; description: string }[];
};

export type ValueProp = {
  title: string;
  description: string;
};

export type StatItem = { value: number; prefix?: string; suffix?: string; label: string };

export type SolutionPage = {
  slug: string;
  name: string;
  headline: string;
  subhead: string;
  valueProps: ValueProp[];
  stats: StatItem[];
  capabilities: string[];
};

export type PlatformPage = {
  slug: string;
  name: string;
  headline: string;
  subhead: string;
  valueProps: ValueProp[];
  ctaLabel: string;
  stats: StatItem[];
  capabilities: string[];
};

export type PricingTier = {
  name: string;
  description: string;
  monthlyPrice: number | "free";
  yearlyPrice: number | "free";
  featured?: boolean;
  features: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  savedTime?: string;
};

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  children?: NavChild[];
};
