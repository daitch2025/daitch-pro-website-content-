"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/components/animation/use-reduced-motion";
import { cn } from "@/lib/utils";

type ScrollPinSectionProps = {
  children: ReactNode;
  className?: string;
  /** How many viewport-heights the pin lasts, e.g. 3 -> "+=300%" */
  pinFor?: number;
  /** Called on every scroll tick with progress 0..1 — keep this cheap (no setState) */
  onProgress?: (progress: number) => void;
};

/**
 * Pins its content in place while the user scrolls through `pinFor` viewport
 * heights, exposing progress as the `--scroll-progress` CSS custom property
 * on the root element (read it in child CSS/inline styles) rather than through
 * React state, so the scrub loop never triggers a re-render.
 */
export function ScrollPinSection({ children, className, pinFor = 2.5, onProgress }: ScrollPinSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!containerRef.current || reducedMotion) return;
      const el = containerRef.current;
      el.style.setProperty("--scroll-progress", "0");

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: `+=${pinFor * 100}%`,
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          el.style.setProperty("--scroll-progress", self.progress.toFixed(4));
          onProgress?.(self.progress);
        },
      });

      return () => trigger.kill();
    },
    { scope: containerRef, dependencies: [reducedMotion, pinFor] },
  );

  return (
    <div ref={containerRef} className={cn("relative", className)} style={{ ["--scroll-progress" as string]: 0 }}>
      {children}
    </div>
  );
}

export { gsap };
