import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { LegalContent } from "@/components/sections/legal-content";

export const metadata: Metadata = {
  title: "Affiliate Program Terms",
  description: "Commission structure, payout terms, and conditions for the Knowledge Inn Affiliate Program.",
};

const SECTIONS = [
  {
    heading: "1. Commission Structure",
    body: ["Affiliates earn recurring commission on referred clients' monthly retainer payments for as long as the referred account remains active and in good standing."],
  },
  {
    heading: "2. Cookie & Attribution Window",
    body: ["Referrals are attributed via a tracking link with a 60-day attribution window. Last-click attribution applies when multiple affiliates refer the same customer."],
  },
  {
    heading: "3. Payout Terms",
    body: ["Commissions are paid monthly for the prior month's earnings, provided the minimum payout threshold is met. Payouts are issued via the payment method on file."],
  },
  {
    heading: "4. Refunds & Chargebacks",
    body: ["Commission is reversed for any referred payment that is later refunded or charged back."],
  },
  {
    heading: "5. Termination",
    body: ["Knowledge Inn may suspend or terminate an affiliate account for violation of the Partner Policy or these terms, including forfeiture of pending commission tied to prohibited conduct."],
  },
];

export default function ProgramTermsPage() {
  return (
    <main>
      <PageHero eyebrow="Affiliate" title="Affiliate Program Terms" description="Commission structure, payout terms, and conditions." primaryLabel="" backHref="/affiliate" backLabel="Back to Affiliate Program" />
      <LegalContent updatedAt="July 1, 2026" sections={SECTIONS} />
    </main>
  );
}
