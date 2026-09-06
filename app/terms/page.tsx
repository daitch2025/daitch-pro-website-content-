import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { LegalContent } from "@/components/sections/legal-content";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing Knowledge Inn's Amazon management services.",
};

const SECTIONS = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      `By engaging Knowledge Inn for Amazon management services ("Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not engage the Services.`,
      "These terms apply to all clients, brand owners, and sellers who engage Knowledge Inn to manage advertising, listings, operations, or brand activity on their Amazon Seller Central or Vendor Central account.",
    ],
  },
  {
    heading: "2. Description of Service",
    body: [
      "Knowledge Inn provides full-service Amazon account management, including advertising (PPC and DSP), listing optimization and Amazon SEO, catalog and inventory management, brand protection and reinstatement support, FBA reimbursement recovery, and related growth services, delivered on a monthly retainer basis.",
    ],
  },
  {
    heading: "3. Account Access & Credentials",
    body: [
      "Delivering the Services requires access to your Amazon Seller Central or Vendor Central account, advertising console, and related tools. You are responsible for granting the appropriate level of access and for the accuracy of any account information you provide.",
    ],
  },
  {
    heading: "4. Retainer & Billing",
    body: [
      "Service retainers are billed in advance on a monthly basis. Fees are non-refundable except as required by law or as explicitly stated in these terms. You may cancel ongoing services with written notice, effective at the end of the current billing period.",
    ],
  },
  {
    heading: "5. Amazon Policy Compliance",
    body: [
      "You agree not to direct Knowledge Inn to engage in conduct that violates Amazon's Terms of Service, Community Guidelines, or advertising policies, including manipulated reviews, prohibited listing content, or other conduct that risks account suspension.",
    ],
  },
  {
    heading: "6. Data & Privacy",
    body: ["Your use of the Services is also governed by our Privacy Policy, which describes how we collect, use, and safeguard information, including data accessed through your Amazon account."],
  },
  {
    heading: "7. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Knowledge Inn shall not be liable for any indirect, incidental, special, or consequential damages arising from the Services, including actions taken by Amazon against your account.",
    ],
  },
  {
    heading: "8. Changes to Terms",
    body: ["We may update these terms from time to time. Continued engagement of the Services after changes take effect constitutes acceptance of the revised terms."],
  },
  {
    heading: "9. Contact",
    body: [`Questions about these Terms of Service can be sent to ${SITE.email}.`],
  },
];

export default function TermsPage() {
  return (
    <main>
      <PageHero eyebrow="Legal" title="Terms of Service" description="The terms and conditions governing Knowledge Inn's Amazon management services." primaryLabel="" />
      <LegalContent updatedAt="July 1, 2026" sections={SECTIONS} />
    </main>
  );
}
