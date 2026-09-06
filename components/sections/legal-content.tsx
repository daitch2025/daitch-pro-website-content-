import { Reveal } from "@/components/animation";

export type LegalSection = { heading: string; body: string[] };

export function LegalContent({ updatedAt, sections }: { updatedAt: string; sections: LegalSection[] }) {
  return (
    <section className="px-6 pb-24 lg:px-10">
      <div className="mx-auto max-w-[52rem]">
        <Reveal>
          <p className="text-sm text-ink-500">Last updated: {updatedAt}</p>
        </Reveal>
        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <Reveal key={section.heading}>
              <h2 className="font-display text-xl font-semibold text-ink">{section.heading}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-ink-500">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
