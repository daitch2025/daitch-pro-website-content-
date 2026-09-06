/**
 * Drifting ambient-color background — a creative alternative to a flat
 * gradient or a live WebGL shader for pages where the latter isn't worth the
 * bundle/GPU cost (see PageHero, mounted on every templated page). Pure CSS
 * transform animation only: GPU-composited, no JS ticker, no WebGL context,
 * and respects prefers-reduced-motion natively via a media query — so this
 * needs no client JS at all and can render as a Server Component.
 */
export function AmbientOrbs({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <span
        className="ambient-orb ambient-orb-1"
        style={{ top: "-12%", left: "6%", width: "26rem", height: "26rem", background: "radial-gradient(circle, var(--color-green-400) 0%, transparent 72%)", opacity: 0.4 }}
      />
      <span
        className="ambient-orb ambient-orb-2"
        style={{ top: "18%", right: "4%", width: "20rem", height: "20rem", background: "radial-gradient(circle, var(--color-gold-400) 0%, transparent 72%)", opacity: 0.32 }}
      />
      <span
        className="ambient-orb ambient-orb-3"
        style={{ bottom: "-18%", left: "38%", width: "28rem", height: "28rem", background: "radial-gradient(circle, var(--color-forest) 0%, transparent 72%)", opacity: 0.28 }}
      />
    </div>
  );
}
