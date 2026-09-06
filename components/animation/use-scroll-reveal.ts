"use client";

import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/components/animation/use-reduced-motion";

type ScrollRevealOptions = {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  /** ScrollTrigger start/end, e.g. "top 80%" / "bottom 20%" */
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
};

/**
 * Escape hatch for scrub/pin-driven animation beyond what <Reveal> covers.
 * Wraps gsap.fromTo + ScrollTrigger inside useGSAP for automatic
 * App-Router-navigation-safe cleanup.
 */
export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}): RefObject<T | null> {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || reducedMotion) return;

      const { from = { opacity: 0, y: 40 }, to = { opacity: 1, y: 0 }, start = "top 85%", end = "bottom 60%", scrub = false, pin = false, markers = false } = options;

      gsap.fromTo(ref.current, from, {
        ...to,
        ease: to.ease ?? "power3.out",
        duration: to.duration ?? 0.9,
        scrollTrigger: {
          trigger: ref.current,
          start,
          end,
          scrub,
          pin,
          markers,
        },
      });
    },
    { scope: ref, dependencies: [reducedMotion] },
  );

  return ref;
}

export { ScrollTrigger };
