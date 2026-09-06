import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { LegalContent } from "@/components/sections/legal-content";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Knowledge Inn collects, uses, and protects your information while managing your Amazon account.",
};

const SECTIONS = [
  {
    heading: "1. Information We Collect",
    body: [
      "We collect information you provide directly, such as account details, billing information, and access credentials for your Amazon Seller Central or Vendor Central account. We also collect performance data — sales, advertising, and account-health metrics — accessed through Amazon's APIs and reporting tools to deliver the Services.",
    ],
  },
  {
    heading: "2. How We Use Information",
    body: [
      "We use collected information to deliver and improve the Services, manage advertising and listings on your behalf, process billing, communicate with you, and prepare the performance reporting you receive.",
    ],
  },
  {
    heading: "3. Data Sharing",
    body: [
      "We do not sell your personal information. We share data with subprocessors (such as payment processors, advertising platforms, and cloud infrastructure providers) only as necessary to deliver the Services, under contractual confidentiality obligations.",
    ],
  },
  {
    heading: "4. Data Security",
    body: ["We employ industry-standard technical and organizational measures to protect information against unauthorized access, alteration, or destruction."],
  },
  {
    heading: "5. Data Retention",
    body: ["We retain account and performance data for as long as you engage the Services, or as needed to comply with legal obligations, after which it is deleted or anonymized."],
  },
  {
    heading: "6. Your Rights",
    body: [
      "Depending on your location, you may have rights to access, correct, export, or delete your personal information. Contact us to exercise these rights.",
    ],
  },
  {
    heading: "7. International Transfers",
    body: ["As we manage brands across multiple Amazon marketplaces globally, data may be processed in countries other than your own, under appropriate safeguards consistent with applicable law."],
  },
  {
    heading: "8. Changes to This Policy",
    body: ["We may update this Privacy Policy periodically. Material changes will be communicated through the Service or by email."],
  },
  {
    heading: "9. Contact",
    body: [`Privacy questions can be directed to ${SITE.email}.`],
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="How Knowledge Inn collects, uses, and protects your information." primaryLabel="" />
      <LegalContent updatedAt="July 1, 2026" sections={SECTIONS} />
    </main>
  );
}
