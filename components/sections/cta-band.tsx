import { LinkButton } from "@/components/ui/link-button";
import { Reveal, ExpandingCtaPanel, MagneticButton } from "@/components/animation";
import { ArrowRight } from "lucide-react";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({
  eyebrow = "Free Amazon audit",
  title,
  description,
  primaryLabel = "Get My Free Audit",
  primaryHref = "/contact",
  secondaryLabel = "Book a Strategy Call",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-10">
      <div className="section-forest noise-overlay relative mx-auto max-w-[72rem] overflow-hidden rounded-[var(--radius-xl)] px-8 py-16 text-center sm:px-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "radial-gradient(60% 80% at 50% 0%, rgba(60,153,91,0.35) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <Reveal className="relative">
          <span className="text-xs font-semibold tracking-widest text-green-400 uppercase">{eyebrow}</span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold text-white text-balance sm:text-4xl lg:text-5xl">{title}</h2>
          {description && <p className="mx-auto mt-4 max-w-xl text-forest-ink-muted">{description}</p>}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MagneticButton strength={0.3} className="w-full sm:w-auto">
              <LinkButton href={primaryHref} size="lg" className="group/btn w-full sm:w-auto">
                {primaryLabel}
                <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
              </LinkButton>
            </MagneticButton>
            <ExpandingCtaPanel
              label={secondaryLabel}
              variant="outline-light"
              size="lg"
              panelTitle="Talk to an Amazon strategist"
              panelDescription="Tell us your brand and category and we'll map the fastest path to profitable growth on Amazon."
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
