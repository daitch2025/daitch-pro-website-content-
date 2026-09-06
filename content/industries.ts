import type { Industry } from "@/types/content";

export const INDUSTRIES: Industry[] = [
  {
    slug: "supplements",
    name: "Supplements & Nutrition",
    shortName: "supplement brands",
    eyebrow: "Health & Wellness",
    problemNarrative:
      "Supplements are the most competitive, most regulated category on Amazon. Claims get listings suppressed, reviews are impossible to earn, and CPCs are brutal — so brands burn ad budget while unranked competitors quietly steal the buy box with cleaner compliance and sharper creative.",
    solutionNarrative:
      "Knowledge Inn runs supplement growth end to end: compliant copy and A+ that survives Amazon's health-claim filters, an SEO and PPC push tuned for high-CPC categories, and a review engine that builds the social proof this category lives and dies by.",
    relatedAgentSlugs: ["ai-seo", "ai-sales-conversation-agent", "ai-chat-agent"],
    results: ["Compliant listings that stay live", "Lower ACoS in a high-CPC category", "A steady climb in verified reviews"],
    journeySteps: [
      { title: "Compliance-first audit", description: "We strip risky claims and rebuild copy that ranks without triggering suppression." },
      { title: "Rank & advertise", description: "SEO plus a profit-tuned PPC push climb page one on the terms that convert." },
      { title: "Compound with reviews", description: "A compliant review engine builds the social proof that lifts conversion." },
    ],
    whyBestHere: [
      { title: "We speak Amazon compliance", description: "Copy and claims built to survive the health-and-supplement filters that flag most brands." },
      { title: "Built for high-CPC math", description: "Every dollar of spend is managed against margin, not vanity ACoS." },
    ],
  },
  {
    slug: "beauty",
    name: "Beauty & Personal Care",
    shortName: "beauty brands",
    eyebrow: "Beauty & Personal Care",
    problemNarrative:
      "Beauty shoppers buy with their eyes and their trust. Weak imagery, a thin Brand Store, and gaps in reviews send them straight to a competitor — and DTC beauty brands often arrive on Amazon with creative that simply doesn't convert on the marketplace.",
    solutionNarrative:
      "Knowledge Inn rebuilds the visual story — hero photography, Premium A+, and a shoppable Brand Store — then drives it with Sponsored Brands video and DSP retargeting so your beauty line looks and sells like the premium brand it is.",
    relatedAgentSlugs: ["ad-communication-agent-non-billing", "social-media-posting-agent", "community-engagement-and-reply-agent"],
    results: ["Higher conversion from premium creative", "A Brand Store that converts ad traffic", "Stronger repeat purchase"],
    journeySteps: [
      { title: "Visual overhaul", description: "New photography, infographics, and Premium A+ built for beauty buyers." },
      { title: "Store & video", description: "A shoppable Brand Store paired with scroll-stopping video ads." },
      { title: "Retarget & retain", description: "DSP and Subscribe & Save turn first purchases into repeat revenue." },
    ],
    whyBestHere: [
      { title: "Creative that converts on Amazon", description: "We design for the marketplace, not repurpose your Instagram grid." },
      { title: "Premium positioning", description: "Storefront and content that justify a premium price point." },
    ],
  },
  {
    slug: "home-kitchen",
    name: "Home & Kitchen",
    shortName: "home & kitchen brands",
    eyebrow: "Home & Kitchen",
    problemNarrative:
      "Home & Kitchen is enormous and endlessly competitive. Near-identical products win or lose on images, variations, and review count — and a broken variation family or a suppressed listing can vanish your bestseller overnight.",
    solutionNarrative:
      "Knowledge Inn tightens the fundamentals that decide this category: clean variation families, conversion-tested main images and infographics, and an aggressive PPC and SEO program that keeps you above the wall of look-alikes.",
    relatedAgentSlugs: ["ai-knowledge-and-training-voice-agent", "ai-conversion-funnel-voice-agent", "ai-sales-conversation-agent"],
    results: ["Clean, review-pooling variations", "Higher conversion from tested images", "More units above the look-alikes"],
    journeySteps: [
      { title: "Fix the catalog", description: "We rebuild variation families so reviews and rank pool where they should." },
      { title: "Test what converts", description: "A/B testing on images and price finds your winning combination." },
      { title: "Push above the pack", description: "PPC and SEO keep you visible in a crowded category." },
    ],
    whyBestHere: [
      { title: "Variation experts", description: "Complex parent-child families handled without breaking your reviews." },
      { title: "Conversion-obsessed", description: "We win the margins competitors leave on the table by testing relentlessly." },
    ],
  },
  {
    slug: "electronics",
    name: "Electronics & Accessories",
    shortName: "electronics brands",
    eyebrow: "Electronics",
    problemNarrative:
      "Electronics move fast and get hijacked faster. Counterfeits and unauthorized sellers pile onto your listing, negative reviews land on technical misunderstandings, and pricing pressure erodes margin before you can react.",
    solutionNarrative:
      "Knowledge Inn protects and grows electronics brands: Brand Registry enforcement to shut out hijackers, technical copy and A+ that reduce returns, and a Buy Box and pricing strategy that defends margin without a race to the bottom.",
    relatedAgentSlugs: ["brand-communication-agent", "ai-content-writer", "ai-conversion-funnel-voice-agent"],
    results: ["Hijackers removed from your listings", "Fewer returns from clearer specs", "A defended Buy Box and margin"],
    journeySteps: [
      { title: "Lock down the brand", description: "Brand Registry and takedowns clear counterfeit and unauthorized sellers." },
      { title: "Clarify the tech", description: "Copy and A+ that answer technical questions and cut returns." },
      { title: "Defend the box", description: "Pricing and Buy Box strategy that holds margin under pressure." },
    ],
    whyBestHere: [
      { title: "Brand defense first", description: "We treat hijacker control as a growth lever, not an afterthought." },
      { title: "Returns-aware content", description: "Clearer listings mean fewer returns and a healthier account." },
    ],
  },
  {
    slug: "pet",
    name: "Pet Supplies",
    shortName: "pet brands",
    eyebrow: "Pet",
    problemNarrative:
      "Pet buyers are fiercely loyal — once you win them. But consumables mean the real money is in repeat purchase, and most pet brands leave Subscribe & Save and retention on autopilot while pouring budget into one-time acquisition.",
    solutionNarrative:
      "Knowledge Inn builds the pet flywheel: rank and convert the first purchase, then grow Subscribe & Save, Brand Follow, and win-back remarketing so a single customer becomes years of predictable, high-margin revenue.",
    relatedAgentSlugs: ["ai-crm-voice-agent", "re-engagement-and-retention-agent", "ai-sales-conversation-agent"],
    results: ["Faster first-purchase rank", "Higher Subscribe & Save adoption", "Rising customer lifetime value"],
    journeySteps: [
      { title: "Win the first order", description: "Launch and PPC drive rank and that critical first purchase." },
      { title: "Convert to subscription", description: "Subscribe & Save and offers turn buyers into subscribers." },
      { title: "Retain and win back", description: "Remarketing keeps lapsed pet parents coming back." },
    ],
    whyBestHere: [
      { title: "Retention-led strategy", description: "We optimize for lifetime value, the number that actually builds a pet brand." },
      { title: "Consumable expertise", description: "Replenishment and subscription growth done right." },
    ],
  },
  {
    slug: "grocery",
    name: "Grocery & Gourmet",
    shortName: "grocery & food brands",
    eyebrow: "Grocery & Gourmet",
    problemNarrative:
      "Food brands face thin margins, tight expiration windows, and strict content rules. Overstock spoils, stockouts kill rank, and one compliance slip on ingredients or claims can suppress a top listing at the worst possible time.",
    solutionNarrative:
      "Knowledge Inn runs grocery with a margin-and-freshness lens: demand forecasting to balance stock against shelf life, compliant listings that pass food-category review, and a profit-first ad program that respects razor-thin food margins.",
    relatedAgentSlugs: ["ai-smart-scheduler-voice-agent", "ai-content-writer", "ai-conversion-funnel-voice-agent"],
    results: ["Less spoilage from smarter forecasting", "Compliant, always-live listings", "Profitable spend on thin margins"],
    journeySteps: [
      { title: "Balance stock & shelf life", description: "Forecasting keeps you in stock without spoilage or storage fees." },
      { title: "Compliant content", description: "Listings and claims built to pass strict food-category review." },
      { title: "Protect the margin", description: "Ads and pricing tuned for the reality of food economics." },
    ],
    whyBestHere: [
      { title: "Freshness-aware planning", description: "Inventory strategy built around expiration, not just velocity." },
      { title: "Food-category compliant", description: "We keep ingredient and claim content inside the lines." },
    ],
  },
  {
    slug: "sports-outdoors",
    name: "Sports & Outdoors",
    shortName: "sports & outdoor brands",
    eyebrow: "Sports & Outdoors",
    problemNarrative:
      "Sports and outdoor gear is deeply seasonal and use-case driven. Miss the pre-season inventory window and you miss the year — and generic listings fail to answer the specific performance questions serious buyers ask before purchasing.",
    solutionNarrative:
      "Knowledge Inn times the season and speaks the buyer's language: Q-by-Q inventory and launch planning, spec-rich copy and comparison A+, and an SEO push that captures high-intent, use-case keywords the moment demand spikes.",
    relatedAgentSlugs: ["ai-smart-scheduler-voice-agent", "ai-seo", "social-media-posting-agent"],
    results: ["In stock through every peak season", "Higher rank on use-case keywords", "Higher conversion from spec-rich A+"],
    journeySteps: [
      { title: "Plan the season", description: "Inventory and launches timed to pre-season demand curves." },
      { title: "Rank the use case", description: "SEO captures the specific, high-intent terms buyers search." },
      { title: "Convert the specs", description: "Comparison A+ answers the performance questions that close sales." },
    ],
    whyBestHere: [
      { title: "Seasonality mastered", description: "We plan for the spike instead of scrambling when it hits." },
      { title: "Use-case SEO", description: "We rank you where serious, ready-to-buy shoppers actually search." },
    ],
  },
  {
    slug: "baby-kids",
    name: "Baby & Kids",
    shortName: "baby & kids brands",
    eyebrow: "Baby & Kids",
    problemNarrative:
      "Parents research obsessively and trust nothing without proof. Safety compliance is non-negotiable, reviews carry enormous weight, and a single suppressed listing over a documentation gap can stall an entire product line.",
    solutionNarrative:
      "Knowledge Inn earns parent trust and keeps you compliant: safety-aware content and documentation, a review and reputation engine that surfaces genuine social proof, and account-health monitoring that keeps sensitive baby listings live.",
    relatedAgentSlugs: ["ai-chat-agent", "ai-niche-authority-voice-agent", "social-media-posting-agent"],
    results: ["Compliant, always-live listings", "Deeper trust from genuine reviews", "Fewer suppressions on documentation"],
    journeySteps: [
      { title: "Compliance & docs", description: "We keep safety documentation and content audit-ready." },
      { title: "Build trust", description: "A+ and reviews give researching parents the proof they need." },
      { title: "Protect the listing", description: "Account-health monitoring keeps sensitive listings live." },
    ],
    whyBestHere: [
      { title: "Trust-first content", description: "Built for the most research-heavy shoppers on Amazon." },
      { title: "Compliance vigilance", description: "We keep documentation-sensitive categories out of trouble." },
    ],
  },
  {
    slug: "toys-games",
    name: "Toys & Games",
    shortName: "toy & game brands",
    eyebrow: "Toys & Games",
    problemNarrative:
      "Toys live or die in Q4. Up to 70% of the year's revenue can land in a few weeks, so a stockout, a suppressed listing, or an under-funded ad budget in November erases months of work in days.",
    solutionNarrative:
      "Knowledge Inn engineers the fourth quarter: months-ahead inventory and shipment planning, a holiday PPC and deal calendar built for the surge, and creative and A+ that win the gift-shopper's split-second decision.",
    relatedAgentSlugs: ["ai-smart-scheduler-voice-agent", "ai-sales-conversation-agent", "ad-communication-agent-non-billing"],
    results: ["Never out of stock in Q4", "A funded, planned holiday ad push", "Higher conversion from gift shoppers"],
    journeySteps: [
      { title: "Pre-position for Q4", description: "Inventory and shipments planned months before the surge." },
      { title: "Build the holiday plan", description: "A PPC and deal calendar sized for peak demand." },
      { title: "Win the gift click", description: "Creative that converts fast, impulse gift decisions." },
    ],
    whyBestHere: [
      { title: "Q4 is our specialty", description: "We plan the quarter that makes or breaks a toy brand." },
      { title: "Deal-event ready", description: "Prime Day and holiday events planned, not improvised." },
    ],
  },
  {
    slug: "apparel",
    name: "Apparel & Accessories",
    shortName: "apparel brands",
    eyebrow: "Apparel & Accessories",
    problemNarrative:
      "Apparel drowns in variations and returns. Size and color families balloon into unmanageable catalogs, sizing confusion drives return rates that wreck your margin, and weak lifestyle imagery leaves you invisible next to fast fashion.",
    solutionNarrative:
      "Knowledge Inn tames apparel complexity: clean size-and-color variation architecture, lifestyle photography and sizing content that slashes returns, and a fashion-aware ad and SEO strategy that keeps you found across a huge catalog.",
    relatedAgentSlugs: ["ai-knowledge-and-training-voice-agent", "ad-communication-agent-non-billing", "ai-seo"],
    results: ["Manageable variation families", "Lower returns from clear sizing", "More visibility across the catalog"],
    journeySteps: [
      { title: "Structure the catalog", description: "Size and color variations built to stay clean at scale." },
      { title: "Reduce returns", description: "Sizing content and lifestyle imagery that set expectations." },
      { title: "Get found", description: "SEO and ads across a broad, fast-moving catalog." },
    ],
    whyBestHere: [
      { title: "Variation architecture", description: "Big apparel catalogs organized so nothing breaks." },
      { title: "Returns-focused content", description: "We attack the return rate that quietly kills apparel margin." },
    ],
  },
  {
    slug: "tools-home-improvement",
    name: "Tools & Home Improvement",
    shortName: "tools & DIY brands",
    eyebrow: "Tools & Home Improvement",
    problemNarrative:
      "Tool buyers are technical and skeptical. They compare specs line by line, cross-shop relentlessly, and abandon listings that don't answer compatibility and performance questions up front — while cheaper knock-offs undercut on price.",
    solutionNarrative:
      "Knowledge Inn wins the technical buyer: spec-dense copy and comparison A+ that answer every question, competitor-conquesting PPC that intercepts cross-shoppers, and SEO built around the exact model and compatibility terms people search.",
    relatedAgentSlugs: ["ai-content-writer", "ai-sales-conversation-agent", "ai-seo"],
    results: ["Higher conversion from technical buyers", "Cross-shoppers intercepted on competitor pages", "Rank on model & compatibility terms"],
    journeySteps: [
      { title: "Answer every spec", description: "Copy and A+ that satisfy skeptical, technical shoppers." },
      { title: "Intercept cross-shoppers", description: "Competitor targeting catches buyers comparing options." },
      { title: "Rank the specifics", description: "SEO on model, size, and compatibility keywords." },
    ],
    whyBestHere: [
      { title: "Built for spec-shoppers", description: "Content that wins buyers who read every detail before buying." },
      { title: "Conquesting focus", description: "We put you on the pages where the comparison happens." },
    ],
  },
  {
    slug: "office-products",
    name: "Office Products",
    shortName: "office & B2B brands",
    eyebrow: "Office Products",
    problemNarrative:
      "Office and B2B selling on Amazon Business is a different game. Bulk buyers want quantity pricing and tax exemption, procurement compares on total cost, and consumer-style listings fail to speak to the business purchaser entirely.",
    solutionNarrative:
      "Knowledge Inn unlocks Amazon Business: quantity-discount and business-pricing setup, B2B-oriented content and comparison A+, and an ad strategy tuned to repeat, bulk purchasers rather than one-off consumers.",
    relatedAgentSlugs: ["ai-conversion-funnel-voice-agent", "ai-content-writer", "re-engagement-and-retention-agent"],
    results: ["More B2B and bulk orders", "Higher repeat-order rate", "Content that converts procurement"],
    journeySteps: [
      { title: "Set up B2B", description: "Business pricing, quantity discounts, and exemptions configured." },
      { title: "Speak to procurement", description: "Content and A+ built for the business buyer, not the consumer." },
      { title: "Grow repeat orders", description: "Retention tuned to recurring, bulk purchasers." },
    ],
    whyBestHere: [
      { title: "Amazon Business fluency", description: "We turn on the B2B levers most sellers ignore." },
      { title: "Bulk-buyer economics", description: "Pricing and content built around procurement behavior." },
    ],
  },
  {
    slug: "automotive",
    name: "Automotive Parts",
    shortName: "automotive parts brands",
    eyebrow: "Automotive",
    problemNarrative:
      "Auto parts sell on fitment, and fitment is unforgiving. A wrong or missing compatibility entry drives returns and one-star reviews, buried listings never surface for the exact year-make-model a shopper needs, and the catalog is punishingly complex.",
    solutionNarrative:
      "Knowledge Inn masters fitment and findability: accurate Part Finder and compatibility data, model-specific copy and SEO, and a catalog structure that keeps thousands of SKUs correct so the right buyer finds the right part.",
    relatedAgentSlugs: ["ai-knowledge-and-training-voice-agent", "ai-seo", "ai-content-writer"],
    results: ["Fewer returns from correct fitment", "Rank on year-make-model searches", "A correct, scalable parts catalog"],
    journeySteps: [
      { title: "Get fitment right", description: "Accurate compatibility data cuts wrong-part returns." },
      { title: "Rank the vehicle", description: "SEO on exact year-make-model search terms." },
      { title: "Scale the catalog", description: "Thousands of SKUs kept correct and connected." },
    ],
    whyBestHere: [
      { title: "Fitment specialists", description: "Compatibility data handled so returns and complaints drop." },
      { title: "Deep-catalog operators", description: "We keep massive parts catalogs accurate at scale." },
    ],
  },
  {
    slug: "arts-crafts",
    name: "Arts, Crafts & Hobbies",
    shortName: "arts & crafts brands",
    eyebrow: "Arts & Crafts",
    problemNarrative:
      "Craft buyers shop by project and passion, not brand. Niche, long-tail search terms go uncaptured, bundles and kits are hard to merchandise, and enthusiast communities that could fuel demand are left completely untapped.",
    solutionNarrative:
      "Knowledge Inn speaks to the maker: long-tail SEO that captures project-based searches, bundle and kit merchandising that lifts average order value, and creative that connects with a passionate, community-driven audience.",
    relatedAgentSlugs: ["ai-seo", "ai-conversion-funnel-voice-agent", "social-media-posting-agent"],
    results: ["Capture of long-tail project searches", "Higher order value from bundles", "Deeper connection with makers"],
    journeySteps: [
      { title: "Own the long tail", description: "SEO that captures niche, project-based search terms." },
      { title: "Merchandise kits", description: "Bundles and kits built to raise average order value." },
      { title: "Connect with makers", description: "Creative and A+ that resonate with a passionate community." },
    ],
    whyBestHere: [
      { title: "Long-tail experts", description: "We win the specific searches big brands overlook." },
      { title: "Bundle strategy", description: "Kits and sets merchandised to lift order value." },
    ],
  },
  {
    slug: "industrial-scientific",
    name: "Industrial & Scientific",
    shortName: "industrial & scientific brands",
    eyebrow: "Industrial & Scientific",
    problemNarrative:
      "Industrial and lab buyers need precise specs, certifications, and bulk options — details consumer listings never surface. Purchases are considered and repeat, yet most sellers treat these SKUs like impulse products and lose the professional buyer.",
    solutionNarrative:
      "Knowledge Inn serves the professional purchaser: certification- and spec-complete content, B2B pricing and bulk configuration, and a considered-purchase ad and retention strategy that earns repeat institutional orders.",
    relatedAgentSlugs: ["ai-content-writer", "ai-conversion-funnel-voice-agent", "re-engagement-and-retention-agent"],
    results: ["Content that satisfies technical buyers", "More bulk and institutional orders", "Higher repeat-order value"],
    journeySteps: [
      { title: "Complete the specs", description: "Certifications, tolerances, and specs buyers require up front." },
      { title: "Enable bulk B2B", description: "Business pricing and quantity options for professional buyers." },
      { title: "Earn the reorder", description: "Retention built for considered, repeat industrial purchasing." },
    ],
    whyBestHere: [
      { title: "Spec-complete content", description: "We surface the technical detail professionals demand." },
      { title: "B2B & repeat focus", description: "Strategy built around institutional, recurring buyers." },
    ],
  },
  {
    slug: "private-label",
    name: "Private Label Brands",
    shortName: "private-label brands",
    eyebrow: "Seller Type",
    problemNarrative:
      "Private label is a launch-and-rank game, and the honeymoon window is short. Most first-time sellers under-invest in the launch, plateau below page one, and can't build the review base fast enough to compete with entrenched incumbents.",
    solutionNarrative:
      "Knowledge Inn runs the private-label playbook: a coordinated launch that manufactures rank velocity, aggressive PPC and SEO to reach page one, and a compliant review engine that builds the social proof needed to hold position.",
    relatedAgentSlugs: ["ai-crm-voice-agent", "ai-sales-conversation-agent", "ai-chat-agent"],
    results: ["Faster page-one rank on launch", "A funded, sequenced launch plan", "A growing base of verified reviews"],
    journeySteps: [
      { title: "Engineer the launch", description: "A coordinated 90-day push builds rank velocity from day one." },
      { title: "Reach page one", description: "PPC and SEO push you onto the first page for money keywords." },
      { title: "Build the moat", description: "Reviews and retention hold the position you've earned." },
    ],
    whyBestHere: [
      { title: "Launch specialists", description: "We win the first 90 days that decide a private-label product." },
      { title: "Rank velocity focus", description: "Coordinated pushes that move rank fast, not slowly." },
    ],
  },
  {
    slug: "wholesale-reselling",
    name: "Wholesale & Reselling",
    shortName: "wholesale sellers",
    eyebrow: "Seller Type",
    problemNarrative:
      "Wholesale is a buy-box war on razor-thin margins. Multiple sellers share a listing, repricing races drive prices down, and without account-health discipline a single IP complaint or condition issue can wipe out a profitable SKU.",
    solutionNarrative:
      "Knowledge Inn helps wholesalers win profitably: Buy Box and repricing strategy that protects margin, account-health and compliance monitoring to keep you selling, and reimbursement recovery that turns Amazon's losses back into profit.",
    relatedAgentSlugs: ["ai-conversion-funnel-voice-agent", "ai-niche-authority-voice-agent", "ai-smart-billing-voice-agent"],
    results: ["More Buy Box share at healthy margin", "A protected, compliant account", "Recovered reimbursement dollars"],
    journeySteps: [
      { title: "Win the box profitably", description: "Repricing and Buy Box strategy that defends your margin." },
      { title: "Stay compliant", description: "Account-health monitoring keeps profitable SKUs live." },
      { title: "Recover what's owed", description: "Reimbursement audits turn Amazon's errors back into cash." },
    ],
    whyBestHere: [
      { title: "Buy Box economics", description: "We win share without racing your margin to zero." },
      { title: "Compliance discipline", description: "We keep multi-seller, high-risk accounts out of trouble." },
    ],
  },
  {
    slug: "dtc-brands",
    name: "DTC Brands on Amazon",
    shortName: "DTC brands",
    eyebrow: "Seller Type",
    problemNarrative:
      "Your Shopify store is thriving, but Amazon feels like a threat: fear of channel conflict, worry about brand control, and creative that converts on your own site but falls flat on the marketplace. Meanwhile, resellers are already listing your products for you.",
    solutionNarrative:
      "Knowledge Inn brings DTC brands to Amazon on their terms: Brand Registry to reclaim control from resellers, marketplace-native creative and Brand Store, and a strategy that grows Amazon as a complementary channel — not a cannibal.",
    relatedAgentSlugs: ["brand-communication-agent", "community-engagement-and-reply-agent", "ai-24-7-customer-care-voice-agent"],
    results: ["Reclaimed control from resellers", "Amazon growth without DTC cannibalization", "A brand-consistent marketplace presence"],
    journeySteps: [
      { title: "Reclaim control", description: "Brand Registry and enforcement take your listings back from resellers." },
      { title: "Translate the brand", description: "Marketplace-native creative and a Brand Store that convert on Amazon." },
      { title: "Grow the channel", description: "A positioning and pricing plan that protects your DTC business." },
    ],
    whyBestHere: [
      { title: "Channel-conflict aware", description: "We grow Amazon without undercutting your owned store." },
      { title: "Brand-control first", description: "You keep control of pricing, positioning, and presentation." },
    ],
  },
  {
    slug: "global-sellers",
    name: "Global & Cross-Border",
    shortName: "cross-border brands",
    eyebrow: "Seller Type",
    problemNarrative:
      "Your bestseller is proven in one marketplace — but expanding to the UK, EU, or beyond means new compliance regimes, VAT, translated listings, and separate inventory. Most brands stall because the operational lift feels overwhelming.",
    solutionNarrative:
      "Knowledge Inn handles global expansion end to end: marketplace-by-marketplace launch and compliance, professionally localized listings, and coordinated inventory and advertising so your winners scale into every region worth selling in.",
    relatedAgentSlugs: ["ai-content-writer", "ai-smart-scheduler-voice-agent", "ai-sales-conversation-agent"],
    results: ["Proven products live in new marketplaces", "Properly localized, compliant listings", "Coordinated global inventory & ads"],
    journeySteps: [
      { title: "Prioritize marketplaces", description: "We identify the regions where your winners will actually sell." },
      { title: "Localize & comply", description: "Translated listings and marketplace compliance handled for you." },
      { title: "Launch & advertise", description: "Inventory and ads coordinated across every new region." },
    ],
    whyBestHere: [
      { title: "Cross-border operators", description: "We manage the compliance and logistics that stall most expansions." },
      { title: "Real localization", description: "Listings adapted for each market, not machine-translated." },
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return INDUSTRIES.find((industry) => industry.slug === slug);
}
