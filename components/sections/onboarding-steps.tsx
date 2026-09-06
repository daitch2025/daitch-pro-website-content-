import { Target, Cpu, Rocket } from "lucide-react";
import { Reveal } from "@/components/animation";
import { LinkButton } from "@/components/ui/link-button";

const STEPS = [
  {
    icon: Target,
    title: "Free Account Audit",
    description: "We tear down your listings, advertising, and account health, then hand you a custom growth roadmap — no cost, no commitment.",
  },
  {
    icon: Cpu,
    title: "Strategy & Setup",
    description: "Your dedicated pod builds the plan — campaign structure, listing overhaul, launch and inventory strategy — tuned to your category and margins.",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description: "We execute across ads, SEO, and operations, then compound rank, reviews, and profit while you focus on building the product.",
  },
];

export function OnboardingSteps() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-[72rem]">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold tracking-widest text-green-600 uppercase">From Audit to Scale</span>
          <h2 className="mt-4 text-3xl font-semibold text-ink text-balance sm:text-4xl">How we grow your brand</h2>
          <p className="mt-4 text-ink-500">A clear, done-for-you path from a free audit to a brand that dominates its category — no guesswork on your end.</p>
        </Reveal>

        <div className="relative mt-14 grid gap-8 lg:grid-cols-3">
          <div className="absolute top-8 right-[16.5%] left-[16.5%] hidden h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent lg:block" aria-hidden="true" />
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.12} className="relative text-center">
              <div className="relative mx-auto flex size-16 items-center justify-center rounded-full bg-cream-100 shadow-[var(--shadow-soft)] ring-8 ring-cream">
                <step.icon className="size-6 text-green-600" />
                <span className="absolute -top-1.5 -right-1.5 flex size-6 items-center justify-center rounded-full bg-green-600 font-mono text-[0.65rem] font-semibold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-500">{step.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-12 flex justify-center">
          <LinkButton href="/contact" size="lg">
            Get My Free Audit
          </LinkButton>
        </Reveal>
      </div>
    </section>
  );
}
