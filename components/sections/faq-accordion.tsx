import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/animation";
import type { FAQItem } from "@/types/content";

export function FaqAccordion({ items, compact = false }: { items: FAQItem[]; compact?: boolean }) {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-[68rem] gap-12 lg:grid-cols-[0.9fr_1.4fr]">
        <Reveal>
          {!compact && <span className="text-xs font-semibold tracking-widest text-green-600 uppercase">FAQ</span>}
          <h2 className="mt-4 text-3xl font-semibold text-ink text-balance sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-ink-500">Everything you need to know about working with the Knowledge Inn Amazon agency.</p>
          <div className="mt-8 rounded-[var(--radius-lg)] border border-ink/8 bg-cream-200 p-6">
            <p className="font-display text-base font-semibold text-ink">Still have questions?</p>
            <p className="mt-1 text-sm text-ink-500">Our team is here to help — get in touch and we&apos;ll answer anything you need.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <LinkButton href="/contact" size="sm">
                Contact Us
              </LinkButton>
              <LinkButton href="/contact" variant="outline" size="sm">
                Book a Demo
              </LinkButton>
            </div>
          </div>
        </Reveal>

        <Reveal from="right" delay={0.1}>
          <Accordion className="divide-y divide-ink/8">
            {items.map((item, i) => (
              <AccordionItem key={i} value={String(i)} className="border-b-0 py-1">
                <AccordionTrigger className="py-4 text-base font-medium text-ink hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-ink-500">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
