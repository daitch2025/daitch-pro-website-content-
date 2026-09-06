"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "@/components/animation/use-reduced-motion";
import { StaticGradient } from "./static-gradient";

const MeshGradientShader = dynamic(() => import("./mesh-gradient-shader").then((m) => m.MeshGradientShader), {
  ssr: false,
  loading: () => <StaticGradient className="size-full" />,
});

type ShaderMeshBackgroundProps = {
  className?: string;
  variant?: "light" | "dark";
};

/**
 * Brand-tuned wrapper around @paper-design/shaders-react's MeshGradient —
 * a real-time WebGL fragment shader used as ambient hero background instead
 * of a static gradient. Client-only, reduced-motion-safe (falls back to a
 * static radial-gradient composition that reads the same at a glance).
 */
export function ShaderMeshBackground({ className, variant = "light" }: ShaderMeshBackgroundProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className={className}>
        <StaticGradient className="size-full" />
      </div>
    );
  }

  return (
    <div className={className}>
      <MeshGradientShader variant={variant} />
    </div>
  );
}
