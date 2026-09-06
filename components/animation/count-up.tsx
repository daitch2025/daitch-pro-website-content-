"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/components/animation/use-reduced-motion";

type CountUpProps = {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

export function CountUp({ value, duration = 1.6, prefix = "", suffix = "", decimals = 0, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // Reduced motion renders the final value directly (see `shown` below) —
    // nothing to animate, so the effect has no work to do.
    if (!inView || reducedMotion) return;

    const counter = { n: 0 };
    const tween = gsap.to(counter, {
      n: value,
      duration,
      ease: "power2.out",
      onUpdate: () => setDisplay(counter.n),
    });

    return () => {
      tween.kill();
    };
  }, [inView, value, duration, reducedMotion]);

  const shown = reducedMotion ? value : display;
  const formatted = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(shown);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
