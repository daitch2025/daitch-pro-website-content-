import type { Metadata } from "next";
import { Mail, Phone, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/animation";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Ready to scale on Amazon? Send Knowledge Inn a message about PPC, listings, or logistics and we'll respond within one business day.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Get in Touch" title="Let's grow your Amazon brand" description="Tell us about your account and goals. We'll come back with a free 30-point audit covering ads, listings, and account health." primaryLabel="" />

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto grid max-w-[68rem] gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="rounded-[var(--radius-xl)] border border-ink/8 bg-cream-100 p-7 sm:p-10">
            <h2 className="font-display text-xl font-semibold text-ink">Send us a Message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>

          <div className="space-y-5">
            <Reveal from="right" className="rounded-[var(--radius-lg)] border border-ink/8 bg-cream-100 p-6">
              <h3 className="font-display text-sm font-semibold text-ink">Contact Information</h3>
              <div className="mt-4 space-y-3.5">
                <a href={SITE.emailHref} className="flex items-center gap-3 text-sm text-ink-700 transition-colors hover:text-green-700">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <Mail className="size-4" />
                  </span>
                  {SITE.email}
                </a>
                <a href={SITE.phoneHref} className="flex items-center gap-3 text-sm text-ink-700 transition-colors hover:text-green-700">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <Phone className="size-4" />
                  </span>
                  {SITE.phone}
                </a>
              </div>
            </Reveal>

            <Reveal from="right" delay={0.08} className="rounded-[var(--radius-lg)] border border-ink/8 bg-cream-100 p-6">
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-green-600" />
                <h3 className="font-display text-sm font-semibold text-ink">Support Hours</h3>
              </div>
              <p className="mt-3 text-sm text-ink-500">{SITE.supportHours.weekday}</p>
              <p className="mt-1 text-sm text-ink-500">{SITE.supportHours.weekend}</p>
            </Reveal>

            <Reveal from="right" delay={0.16} className="section-forest rounded-[var(--radius-lg)] p-6">
              <MessageCircle className="size-6 text-green-400" />
              <h3 className="mt-3 font-display text-base font-semibold text-white">Need Immediate Help?</h3>
              <p className="mt-2 text-sm text-forest-ink-muted">Book a strategy call and get a free Amazon audit that pinpoints your fastest wins on ACoS, ranking, and conversion.</p>
              <LinkButton href="/contact" size="sm" className="mt-4">
                Book a Strategy Call
              </LinkButton>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
