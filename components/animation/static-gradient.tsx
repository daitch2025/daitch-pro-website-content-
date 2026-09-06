type StaticGradientProps = { className?: string };

/**
 * Zero-JS CSS radial-gradient tuned to the same brand palette as
 * ShaderMeshBackground's own reduced-motion fallback. Used anywhere a live
 * WebGL shader isn't worth the bundle weight and GPU cost — e.g. PageHero,
 * which mounts on every templated page rather than just the homepage hero.
 */
export function StaticGradient({ className }: StaticGradientProps) {
  return (
    <div
      className={className}
      style={{
        background:
          "radial-gradient(60% 55% at 30% 20%, rgba(74,174,104,0.35) 0%, transparent 70%), radial-gradient(55% 50% at 80% 60%, rgba(217,164,65,0.22) 0%, transparent 70%), radial-gradient(70% 70% at 50% 100%, rgba(6,58,47,0.25) 0%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
