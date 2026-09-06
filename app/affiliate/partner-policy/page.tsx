import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { LegalContent } from "@/components/sections/legal-content";

export const metadata: Metadata = {
  title: "Affiliate Partner Policy",
  description: "Guidelines and expectations for Knowledge Inn affiliate partners.",
};

const SECTIONS = [
  {
    heading: "1. Eligibility",
    body: ["Anyone with an audience relevant to Amazon sellers, brand owners, or e-commerce operators may apply. Applications are reviewed before approval."],
  },
  {
    heading: "2. Approved Promotion Methods",
    body: [
      "Affiliates may promote Knowledge Inn through content marketing, email, social media, and paid advertising, subject to the restrictions below. Bidding on Knowledge Inn's own brand terms in paid search is not permitted.",
    ],
  },
  {
    heading: "3. Prohibited Conduct",
    body: [
      "Affiliates may not make misleading claims about Knowledge Inn's services or pricing, spam, or incentivize referrals through cash-back or reward schemes without prior written approval.",
    ],
  },
  {
    heading: "4. Brand Guidelines",
    body: ["Use of the Knowledge Inn name and logo must follow provided brand assets and may not imply an official partnership beyond the affiliate relationship."],
  },
  {
    heading: "5. Policy Changes",
    body: ["This policy may be updated periodically. Continued participation in the program constitutes acceptance of the current policy."],
  },
];

export default function PartnerPolicyPage() {
  return (
    <main>
      <PageHero eyebrow="Affiliate" title="Partner Policy" description="Guidelines and expectations for Knowledge Inn affiliate partners." primaryLabel="" backHref="/affiliate" backLabel="Back to Affiliate Program" />
      <LegalContent updatedAt="July 1, 2026" sections={SECTIONS} />
    </main>
  );
}
