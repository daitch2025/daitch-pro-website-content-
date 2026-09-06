import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ValuePropCards } from "@/components/sections/value-prop-cards";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Affiliate Program",
  description: "Earn recurring commission referring Amazon brands and sellers to the Knowledge Inn Amazon agency.",
};

const VALUE_PROPS = [
  { title: "Recurring Commission", description: "Earn on every referred brand's retainer for as long as they stay a client — not just a one-time payout." },
  { title: "Marketing Assets", description: "Ready-to-use landing pages, banners, and email copy to help you promote Knowledge Inn to Amazon sellers." },
  { title: "Dedicated Support", description: "A partner manager to help you optimize referrals and answer questions fast." },
];

export default function AffiliatePage() {
  return (
    <main>
      <PageHero
        eyebrow="Knowledge Inn Affiliate"
        title="Earn by referring Amazon brands to Knowledge Inn"
        description="Join the affiliate program and earn recurring commission for every Amazon seller or brand you refer."
        primaryLabel="Join the Program"
        secondaryLabel="Read Partner Policy"
        secondaryHref="/affiliate/partner-policy"
      />
      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-[72rem]">
          <ValuePropCards items={VALUE_PROPS} />
        </div>
      </section>
      <CtaBand title="Ready to start earning?" description="Sign up for the Knowledge Inn Affiliate Program in minutes." primaryLabel="Join the Program" />
    </main>
  );
}
