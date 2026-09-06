import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal, MaskReveal, MagneticButton, AmbientOrbs } from "@/components/animation";
import { LinkButton } from "@/components/ui/link-button";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  backHref?: string;
  backLabel?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  backHref,
  backLabel,
  primaryLabel = "Get My Free Audit",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: PageHeroProps) {
  return (
    <section className="noise-overlay relative overflow-hidden px-6 pt-24 pb-20 lg:px-10 lg:pt-32 lg:pb-28">
      <AmbientOrbs className="absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[62rem] text-center">
        {backHref && (
          <Reveal from="none">
            <Link href={backHref} className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-green-700">
              <ArrowLeft className="size-3.5" />
              {backLabel ?? "Back"}
            </Link>
          </Reveal>
        )}
        {eyebrow && (
          <Reveal from="none" delay={0.05} className={backHref ? "mt-5" : undefined}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-600/15 bg-green-50 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-green-700 uppercase shadow-[var(--shadow-soft)]">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-green-600" />
              </span>
              {eyebrow}
            </span>
          </Reveal>
        )}
        <h1 className="mt-4 text-5xl font-semibold text-ink text-balance sm:text-6xl lg:text-7xl">
          <MaskReveal as="span" delay={0.1}>
            {title}
          </MaskReveal>
        </h1>
        <Reveal delay={0.25}>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-500 sm:text-xl">{description}</p>
        </Reveal>
        {(primaryLabel || secondaryLabel) && (
          <Reveal delay={0.35} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {primaryLabel && (
              <MagneticButton strength={0.3} className="w-full sm:w-auto">
                <LinkButton href={primaryHref} size="lg" className="group/btn w-full sm:w-auto">
                  {primaryLabel}
                  <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                </LinkButton>
              </MagneticButton>
            )}
            {secondaryLabel && secondaryHref && (
              <LinkButton href={secondaryHref} variant="outline" size="lg" className="w-full sm:w-auto">
                {secondaryLabel}
              </LinkButton>
            )}
          </Reveal>
        )}
      </div>
    </section>
  );
}
