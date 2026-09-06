import type { MetadataRoute } from "next";
import { getTopLevelAgents, AGENTS } from "@/content/agents";
import { INDUSTRIES } from "@/content/industries";
import { SOLUTIONS } from "@/content/solutions";
import { PLATFORM_PAGES } from "@/content/platform";
import { SITE } from "@/content/site";

const GROWTH_HUB_SLUG = "ai-growth-and-marketing-voice-agent";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/faqs`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE.url}/affiliate`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE.url}/affiliate/partner-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE.url}/affiliate/program-terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE.url}/benefits/review-management`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/benefits/phone-calling`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/products/ai-webchat`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/products/crm`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/ai-agent/demo`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/ai-agent/product`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/ai-agent/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/marketplace`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const agentRoutes: MetadataRoute.Sitemap = getTopLevelAgents().map((agent) => ({
    url: `${SITE.url}/ai-agent/${agent.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const growthSubAgentRoutes: MetadataRoute.Sitemap = AGENTS.filter((a) => a.parentSlug === GROWTH_HUB_SLUG).map((agent) => ({
    url: `${SITE.url}/ai-agent/${GROWTH_HUB_SLUG}/${agent.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES.map((industry) => ({
    url: `${SITE.url}/industries/${industry.slug}/workflow`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const solutionRoutes: MetadataRoute.Sitemap = SOLUTIONS.map((solution) => ({
    url: `${SITE.url}/solutions/${solution.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const platformRoutes: MetadataRoute.Sitemap = PLATFORM_PAGES.filter((p) => p.slug !== "marketplace").map((page) => ({
    url: `${SITE.url}/platform/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...agentRoutes, ...growthSubAgentRoutes, ...industryRoutes, ...solutionRoutes, ...platformRoutes];
}
