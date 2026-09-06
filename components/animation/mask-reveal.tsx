"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type AllowedTag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

type MaskRevealProps = {
  /** A single line, or an array of lines each revealed as its own masked block (stagger via `lineDelay`) */
  children: ReactNode | ReactNode[];
  className?: string;
  lineClassName?: string;
  as?: AllowedTag;
  delay?: number;
  /** seconds between each line when `children` is an array */
  lineDelay?: number;
  duration?: number;
};

/**
 * Clip-mask line reveal: each line sits in an overflow-hidden box and slides
 * up from behind the mask on mount. Mount-triggered (plain `initial`/`animate`
 * objects, not `whileInView`) on purpose — the "hidden" starting position is
 * itself clipped out of view by its own overflow-hidden wrapper, so a
 * viewport observer watching that element would see 0% intersection forever
 * and never fire. That's fine since every current use (PageHero, home-hero)
 * is an above-the-fold heading anyway.
 */
export function MaskReveal({ children, className, lineClassName, as: Tag = "span", delay = 0, lineDelay = 0.08, duration = 0.85 }: MaskRevealProps) {
  const lines = Array.isArray(children) ? children : [children];

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className={`block overflow-hidden ${lineClassName ?? ""}`}>
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration, delay: delay + i * lineDelay, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
