import type { Agent } from "@/types/content";

const GROWTH_HUB_SLUG = "ai-growth-and-marketing-voice-agent";

export const AGENTS: Agent[] = [
  // ---------------------------------------------------------------- sales-voice → Advertising & Growth
  {
    slug: "ai-sales-conversation-agent",
    name: "Amazon PPC Management",
    category: "sales-voice",
    tagline: "Sponsored Products, Brands & Display — engineered to a profitable ACoS.",
    heroDescription:
      "We turn ad spend into a profit engine. Every keyword, bid, and placement is managed against your target ACoS and TACoS — so growth doesn't quietly eat your margin. No wasted spend, no set-and-forget campaigns.",
    businessOutcomes: ["Lower ACoS, stronger TACoS", "More profitable ad-driven sales", "Full-funnel keyword coverage"],
    subAgents: [
      { name: "Keyword Harvesting & Research", description: "Mines search-term reports and competitor ASINs for high-intent, buy-ready keywords." },
      { name: "Bid & Budget Optimization", description: "Adjusts bids and budgets daily against your profit target — not a fixed rule." },
      { name: "Negative Targeting & Waste Control", description: "Ruthlessly cuts irrelevant terms so every click has a reason to convert." },
      { name: "Sponsored Brands & Video", description: "Runs headline and video ads that own branded real estate above the fold." },
      { name: "Product & Competitor Targeting", description: "Conquests competitor detail pages and defends your own from theirs." },
      { name: "Placement & Dayparting Tuning", description: "Shifts spend to the placements and hours that actually convert." },
    ],
    ctaLabel: "Scale My Ad Profit",
  },
  {
    slug: "ai-24-7-customer-care-voice-agent",
    name: "Amazon DSP & Programmatic",
    category: "sales-voice",
    tagline: "Retarget shoppers on and off Amazon and own the entire funnel.",
    heroDescription:
      "Sponsored Ads capture demand — DSP creates it. We retarget browsers, win back cart-abandoners, and put your brand in front of net-new audiences across Amazon, Twitch, and the open web, all measured back to real sales.",
    businessOutcomes: ["More new-to-brand sales", "Cheaper retargeting reach", "Full-funnel demand"],
    subAgents: [
      { name: "Audience Building & Segmentation", description: "Builds in-market, lookalike, and remarketing audiences from real shopping signals." },
      { name: "Retargeting & Remarketing", description: "Re-engages viewers and cart-abandoners before they buy elsewhere." },
      { name: "Awareness & Prospecting", description: "Introduces your brand to net-new, high-propensity shoppers." },
      { name: "Amazon Marketing Cloud Insights", description: "Uses AMC to uncover the paths that actually drive conversion." },
      { name: "Creative & Display Trafficking", description: "Builds and ships display and video creative across every placement." },
      { name: "Cross-Channel Attribution", description: "Ties on- and off-Amazon spend back to net sales, not vanity clicks." },
    ],
    ctaLabel: "Launch DSP Campaigns",
  },
  {
    slug: "ai-crm-voice-agent",
    name: "Product Launch & Ranking",
    category: "sales-voice",
    tagline: "Launch playbooks that manufacture rank velocity and Best Seller momentum.",
    heroDescription:
      "A launch is won in the first 30 days. We engineer rank velocity with a coordinated push of ads, promotions, external traffic, and reviews — so your product hits page one for the keywords that pay, and stays there.",
    businessOutcomes: ["Faster page-one rank", "Higher launch velocity", "Sticky organic rank"],
    subAgents: [
      { name: "Launch Strategy & Roadmap", description: "Maps the exact 90-day sequence from soft launch to category contender." },
      { name: "Rank Velocity Campaigns", description: "Concentrates spend and traffic to move rank fast on target keywords." },
      { name: "Review & Rating Kickstart", description: "Seeds early, compliant reviews through Vine and follow-up." },
      { name: "Promotions & Coupons Engine", description: "Times deals, coupons, and Lightning Deals for maximum velocity." },
      { name: "External Traffic & Influencers", description: "Drives Google, social, and creator traffic to boost the flywheel." },
      { name: "Honeymoon-Period Optimization", description: "Squeezes every advantage out of Amazon's new-listing boost." },
    ],
    ctaLabel: "Plan My Launch",
  },
  {
    slug: GROWTH_HUB_SLUG,
    name: "Full-Funnel Advertising Engine",
    category: "sales-voice",
    tagline: "One team orchestrating every ad, creative, and brand touchpoint.",
    heroDescription:
      "Ads, creative, storefront, and brand defense — coordinated by one senior pod instead of scattered across six freelancers. Six specialist services work underneath it, each with its own page below, compounding into a brand flywheel.",
    businessOutcomes: ["A compounding ad flywheel", "Consistent brand at scale", "Always-on campaign execution"],
    subAgents: [
      { name: "A+ & Premium A+ Content", description: "Comparison charts and brand modules that lift conversion.", href: `/ai-agent/${GROWTH_HUB_SLUG}/social-media-posting-agent` },
      { name: "Amazon Brand Store Design", description: "A shoppable, on-brand storefront that converts browsers.", href: `/ai-agent/${GROWTH_HUB_SLUG}/community-engagement-and-reply-agent` },
      { name: "Sponsored Brands Video & Creative", description: "Scroll-stopping video built for the Amazon feed.", href: `/ai-agent/${GROWTH_HUB_SLUG}/campaign-execution-agent` },
      { name: "Brand Registry & Protection", description: "Locks down your brand and kills hijackers.", href: `/ai-agent/${GROWTH_HUB_SLUG}/brand-communication-agent` },
      { name: "Product Photography & Infographics", description: "Images engineered to win the click and the sale.", href: `/ai-agent/${GROWTH_HUB_SLUG}/ad-communication-agent-non-billing` },
      { name: "Retention & Repeat Revenue", description: "Turns one-time buyers into recurring revenue.", href: `/ai-agent/${GROWTH_HUB_SLUG}/re-engagement-and-retention-agent` },
    ],
    ctaLabel: "Meet the Growth Team",
  },

  // ---------------------------------------------------------------- billing-scheduling → Operations & Logistics
  {
    slug: "ai-smart-billing-voice-agent",
    name: "FBA Reimbursements & Recovery",
    category: "billing-scheduling",
    tagline: "We audit Amazon and claw back every dollar you're owed.",
    heroDescription:
      "Amazon loses, damages, and over-charges — and rarely pays you back automatically. We run a forensic audit of 18 months of transactions, file the claims, and chase them until the reimbursements land back in your account.",
    businessOutcomes: ["Recovered FBA reimbursements", "Fewer unclaimed losses", "Cash back to your P&L"],
    subAgents: [
      { name: "Lost & Damaged Inventory Audits", description: "Reconciles every unit Amazon lost or damaged in the warehouse." },
      { name: "Fee & Overcharge Recovery", description: "Catches dimension, weight, and referral-fee overcharges." },
      { name: "Return Discrepancy Claims", description: "Recovers customer returns that were never returned to stock." },
      { name: "Case Filing & Follow-Up", description: "Files compliant cases and escalates until they're paid." },
      { name: "Removal & Disposal Audits", description: "Verifies removal orders and disposal credits owed to you." },
      { name: "Reimbursement Reporting", description: "Shows exactly what was recovered, claim by claim." },
    ],
    ctaLabel: "Recover My Money",
  },
  {
    slug: "ai-conversion-funnel-voice-agent",
    name: "Conversion Rate Optimization",
    category: "billing-scheduling",
    tagline: "Every listing element A/B-tested to lift conversion and unit-session rate.",
    heroDescription:
      "Traffic is expensive — wasting it is worse. We systematically test images, titles, price, and offers with Manage Your Experiments and real data, so more of the shoppers you already pay for actually buy.",
    businessOutcomes: ["Higher unit-session rate", "More sales per session", "Less dependence on ads"],
    subAgents: [
      { name: "Listing A/B Testing", description: "Runs Manage Your Experiments on images, titles, and A+ content." },
      { name: "Price & Offer Testing", description: "Finds the price and promo that maximize profit, not just units." },
      { name: "Image & Title Testing", description: "Tests the two elements that move conversion the most." },
      { name: "Buy Box & Pricing Strategy", description: "Wins and holds the Buy Box without racing to the bottom." },
      { name: "Coupon & Deal Optimization", description: "Tunes coupons and deals to lift conversion profitably." },
      { name: "Funnel Analytics", description: "Pinpoints exactly where sessions leak and why." },
    ],
    ctaLabel: "Lift My Conversion",
  },
  {
    slug: "ai-smart-scheduler-voice-agent",
    name: "Inventory & Supply Planning",
    category: "billing-scheduling",
    tagline: "Forecast demand, kill stockouts, and protect your IPI score.",
    heroDescription:
      "Stockouts erase your rank; overstock bleeds storage fees. We forecast demand, plan restocks, and manage FBA shipments so you stay in stock through Q4 and Prime Day without drowning in aged-inventory surcharges.",
    businessOutcomes: ["Fewer stockouts", "Healthier IPI score", "Lower storage fees"],
    subAgents: [
      { name: "Demand Forecasting", description: "Predicts velocity by SKU using seasonality and ad plans." },
      { name: "Restock & Reorder Planning", description: "Tells you what to reorder, how much, and exactly when." },
      { name: "FBA Shipment Creation", description: "Builds and optimizes shipment plans to cut placement fees." },
      { name: "Storage & Aged-Inventory Control", description: "Clears slow movers before long-term storage fees hit." },
      { name: "3PL & Multi-Warehouse Coordination", description: "Syncs FBA, FBM, and 3PL stock in one plan." },
      { name: "Season & Q4 Prep", description: "Pre-positions inventory for peak events well in advance." },
    ],
    ctaLabel: "Plan My Inventory",
  },
  {
    slug: "ai-niche-authority-voice-agent",
    name: "Account Health & Compliance",
    category: "billing-scheduling",
    tagline: "Keep your account bulletproof — and win suspensions back fast.",
    heroDescription:
      "One policy strike can end your business overnight. We monitor account health daily, fix issues before they escalate, and — if the worst happens — write the Plan of Action that gets you reinstated fast.",
    businessOutcomes: ["Protected account health", "Faster reinstatements", "Fewer policy strikes"],
    subAgents: [
      { name: "Account Health Monitoring", description: "Watches ODR, policy, and performance metrics every day." },
      { name: "Suspension Appeals & POAs", description: "Writes root-cause Plans of Action that actually get accepted." },
      { name: "Policy & Compliance Audits", description: "Finds compliance risks before Amazon does." },
      { name: "Listing Suppression Fixes", description: "Restores suppressed and inactive listings quickly." },
      { name: "IP & Complaint Resolution", description: "Resolves IP complaints and inauthentic claims." },
      { name: "Seller Performance Coaching", description: "Keeps your operation inside Amazon's tightening lines." },
    ],
    ctaLabel: "Secure My Account",
  },

  // ---------------------------------------------------------------- knowledge-content → Listings & Content
  {
    slug: "ai-knowledge-and-training-voice-agent",
    name: "Catalog & Flat-File Management",
    category: "knowledge-content",
    tagline: "Variations, bulk uploads, and a clean catalog that never breaks.",
    heroDescription:
      "A broken variation or a bad flat file can wipe out your reviews and rank. We manage the unglamorous, high-stakes catalog work — parentage, bulk uploads, category fixes — so your listings stay live, connected, and correct.",
    businessOutcomes: ["An error-free catalog", "Faster bulk changes", "Correct variation families"],
    subAgents: [
      { name: "Variation & Parentage Setup", description: "Builds clean parent-child families that pool reviews and rank." },
      { name: "Flat-File & Bulk Uploads", description: "Ships large catalog changes safely with validated flat files." },
      { name: "Catalog Error Resolution", description: "Untangles error 5665, stranded inventory, and merge issues." },
      { name: "Category & Node Fixes", description: "Gets you into the right browse nodes for visibility." },
      { name: "Global Catalog Sync", description: "Keeps listings consistent across every marketplace you sell in." },
      { name: "Data Feed Management", description: "Maintains accurate feeds between your systems and Amazon." },
    ],
    ctaLabel: "Fix My Catalog",
  },
  {
    slug: "ai-content-writer",
    name: "Listing Copywriting",
    category: "knowledge-content",
    tagline: "Titles, bullets, and descriptions that rank and sell — in your brand voice.",
    heroDescription:
      "Great copy does two jobs at once: it ranks for the terms shoppers search and convinces them to buy. We write keyword-rich, benefit-led listings that hit both — no keyword stuffing, no bland spec sheets.",
    businessOutcomes: ["Wider keyword coverage", "Higher conversion", "On-brand consistency"],
    subAgents: [
      { name: "Title Optimization", description: "Front-loads the keywords and hooks that win the click." },
      { name: "Benefit-Led Bullets", description: "Turns features into reasons to buy, scannable in seconds." },
      { name: "Backend Search Terms", description: "Fills every indexable field to widen keyword coverage." },
      { name: "Description & Brand Story", description: "Writes the narrative that separates you from the me-toos." },
      { name: "Localization & Translation", description: "Adapts copy for each marketplace, not just translates it." },
      { name: "Copy A/B Testing", description: "Proves which words actually convert with live tests." },
    ],
    ctaLabel: "Rewrite My Listings",
  },
  {
    slug: "ai-seo",
    name: "Amazon SEO & Keyword Ranking",
    category: "knowledge-content",
    tagline: "Reverse-engineer the A10 algorithm and climb page one on terms that pay.",
    heroDescription:
      "Organic rank is the cheapest sales you'll ever get. We reverse-ASIN your competitors, close indexing gaps, and build the on- and off-page signals that push your products to page one — and defend the position.",
    businessOutcomes: ["Higher organic rank", "More indexed keywords", "More organic sales"],
    subAgents: [
      { name: "Keyword & Reverse-ASIN Research", description: "Extracts the exact terms your best competitors rank for." },
      { name: "Indexing & Rank Tracking", description: "Confirms indexing and tracks daily movement on priority terms." },
      { name: "Competitor Gap Analysis", description: "Finds ranking terms you don't cover yet — and closes them." },
      { name: "Backend & On-Page SEO", description: "Optimizes every field Amazon's algorithm actually reads." },
      { name: "External SEO & Google Traffic", description: "Ranks your listing on Google to feed Amazon the signal." },
      { name: "Rank Recovery", description: "Rebuilds rank after stockouts, hijacks, or listing changes." },
    ],
    ctaLabel: "Rank My Products",
  },
  {
    slug: "ai-chat-agent",
    name: "Reviews & Reputation Management",
    category: "knowledge-content",
    tagline: "Grow verified reviews, defend your rating, and answer buyers fast.",
    heroDescription:
      "Your star rating is your conversion rate. We grow verified reviews the compliant way, get abusive and policy-violating reviews removed, and keep Q&A and buyer messages answered — so social proof works in your favor.",
    businessOutcomes: ["More verified reviews", "A higher star rating", "Faster buyer response"],
    subAgents: [
      { name: "Compliant Review Generation", description: "Grows reviews via Vine and TOS-safe follow-up — never fake." },
      { name: "Negative Review Mitigation", description: "Requests removal of reviews that break Amazon policy." },
      { name: "Q&A Management", description: "Answers product questions that quietly cost you sales." },
      { name: "Buyer-Seller Messaging", description: "Handles buyer messages fast to protect your ODR." },
      { name: "Rating Monitoring", description: "Flags rating drops the moment they start." },
      { name: "Feedback Removal Requests", description: "Strips seller feedback that belongs on the product, not you." },
    ],
    ctaLabel: "Grow My Reviews",
  },

  // ---------------------------------------------------------------- growth-marketing (Creative & Brand — nested under the hub)
  {
    slug: "social-media-posting-agent",
    parentSlug: GROWTH_HUB_SLUG,
    name: "A+ & Premium A+ Content",
    category: "growth-marketing",
    tagline: "Comparison charts and brand modules that lift conversion and cut returns.",
    heroDescription:
      "A+ Content is prime conversion real estate most brands waste. We design comparison charts, brand modules, and Premium A+ that answer objections visually — lifting conversion and reducing the returns that come from unclear listings.",
    businessOutcomes: ["Higher conversion rate", "Lower return rate", "Stronger brand recall"],
    subAgents: [
      { name: "A+ Module Design", description: "Builds high-converting modules mapped to buyer objections." },
      { name: "Comparison Charts", description: "Cross-sells your catalog and blocks competitor comparisons." },
      { name: "Brand Story Blocks", description: "Tells the story that justifies a premium price." },
    ],
    ctaLabel: "Upgrade My Listings",
  },
  {
    slug: "community-engagement-and-reply-agent",
    parentSlug: GROWTH_HUB_SLUG,
    name: "Amazon Brand Store Design",
    category: "growth-marketing",
    tagline: "A shoppable, on-brand storefront that turns browsers into buyers.",
    heroDescription:
      "Your Brand Store is the one place on Amazon where the competitor ads disappear. We design a multi-page, shoppable storefront that showcases your full catalog and becomes the perfect landing page for Sponsored Brands traffic.",
    businessOutcomes: ["More store visits converted", "Higher pages per visit", "More repeat buyers"],
    subAgents: [
      { name: "Store Architecture & Navigation", description: "Structures pages so shoppers find and buy more, faster." },
      { name: "Shoppable Landing Pages", description: "Builds campaign-ready pages for ad traffic to land on." },
      { name: "Seasonal Refreshes", description: "Keeps the store current for launches and peak events." },
    ],
    ctaLabel: "Design My Store",
  },
  {
    slug: "campaign-execution-agent",
    parentSlug: GROWTH_HUB_SLUG,
    name: "Sponsored Brands Video & Creative",
    category: "growth-marketing",
    tagline: "Scroll-stopping video and creative built for the Amazon feed.",
    heroDescription:
      "Video ads earn the cheapest, most valuable clicks on Amazon — if the first two seconds land. We produce and test brand video and creative built specifically for the Amazon feed, not repurposed from your TikTok.",
    businessOutcomes: ["Higher click-through", "Cheaper clicks", "More branded searches"],
    subAgents: [
      { name: "Brand Video Production", description: "Creates feed-native video that stops the scroll and sells." },
      { name: "Creative Testing", description: "A/B tests hooks and edits to find the winning cut." },
      { name: "Hook & Thumbnail Optimization", description: "Nails the first frame that decides whether they watch." },
    ],
    ctaLabel: "Produce My Creative",
  },
  {
    slug: "brand-communication-agent",
    parentSlug: GROWTH_HUB_SLUG,
    name: "Brand Registry & Protection",
    category: "growth-marketing",
    tagline: "Lock down your brand, kill hijackers, and stop counterfeit leakage.",
    heroDescription:
      "Unprotected brands lose the Buy Box, reviews, and margin to hijackers and counterfeiters. We enroll and enforce Brand Registry, hunt down unauthorized sellers, and keep control of your listings where it belongs — with you.",
    businessOutcomes: ["A protected Buy Box", "Fewer hijackers", "Cleaner brand equity"],
    subAgents: [
      { name: "Brand Registry Enrollment", description: "Gets you registered and unlocks brand-only tools." },
      { name: "Hijacker & Counterfeit Takedowns", description: "Removes unauthorized and counterfeit sellers fast." },
      { name: "Listing Change Monitoring", description: "Alerts you the instant someone alters your detail page." },
    ],
    ctaLabel: "Protect My Brand",
  },
  {
    slug: "ad-communication-agent-non-billing",
    parentSlug: GROWTH_HUB_SLUG,
    name: "Product Photography & Infographics",
    category: "growth-marketing",
    tagline: "Main images and infographics engineered to win the click and the sale.",
    heroDescription:
      "The main image wins the click; the infographics win the sale. We shoot studio and lifestyle photography and design mobile-first infographics that answer questions before they're asked — the highest-ROI change on most listings.",
    businessOutcomes: ["Higher click-through", "Higher conversion", "Fewer pre-sale questions"],
    subAgents: [
      { name: "Studio & Lifestyle Photography", description: "Shoots hero and in-context images that sell the outcome." },
      { name: "Infographic Design", description: "Turns specs into scannable, benefit-led visuals." },
      { name: "Mobile-First Optimization", description: "Designs for the phone screen where most sales happen." },
    ],
    ctaLabel: "Shoot My Catalog",
  },
  {
    slug: "re-engagement-and-retention-agent",
    parentSlug: GROWTH_HUB_SLUG,
    name: "Retention & Repeat Revenue",
    category: "growth-marketing",
    tagline: "Turn one-time buyers into recurring, predictable revenue.",
    heroDescription:
      "The most profitable customer is the one who buys again. We grow Subscribe & Save, build your Brand Follow audience, and run compliant win-back remarketing so lifetime value climbs while your cost to acquire falls.",
    businessOutcomes: ["Higher repeat-purchase rate", "Rising lifetime value", "Lower CAC payback"],
    subAgents: [
      { name: "Subscribe & Save Growth", description: "Converts one-off buyers into recurring subscribers." },
      { name: "Brand Follow & Remarketing", description: "Builds a followable audience you can market to again." },
      { name: "Loyalty & Win-Back", description: "Re-activates lapsed customers before they're gone for good." },
    ],
    ctaLabel: "Grow Retention",
  },
];

export function getAgentBySlug(slug: string, parentSlug?: string) {
  return AGENTS.find((agent) => agent.slug === slug && agent.parentSlug === parentSlug);
}

export function getTopLevelAgents() {
  return AGENTS.filter((agent) => !agent.parentSlug);
}

export function getAgentsByCategory(category: Agent["category"]) {
  return AGENTS.filter((agent) => agent.category === category);
}
