"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/components/animation/use-reduced-motion";

const FLIP_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

type TypewriterRevealProps = {
  text: string;
  className?: string;
  /** ms per character */
  speed?: number;
  /** ms before the reveal starts */
  delay?: number;
  as?: "span" | "div" | "h1" | "h2";
};

/**
 * Per-character reveal: each letter flickers through a few random glyphs
 * before settling on the real character, left to right. Mount-triggered via
 * IntersectionObserver, once. Distinct from ScrambleTextHover (hover-repeatable)
 * and MaskReveal (line-mask slide) — this is the headline-specific treatment.
 */
export function TypewriterReveal({ text, className, speed = 45, delay = 100, as: Tag = "span" }: TypewriterRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState(text);
  const reducedMotion = useReducedMotion();
  const hasRun = useRef(false);

  useEffect(() => {
    if (reducedMotion || hasRun.current || !ref.current) return;
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;
        observer.disconnect();

        const chars = text.split("");
        const timeouts: ReturnType<typeof setTimeout>[] = [];

        chars.forEach((char, i) => {
          if (char === " ") return;
          const settleAt = delay + i * speed;
          const flickers = 3;
          for (let f = 0; f < flickers; f++) {
            timeouts.push(
              setTimeout(
                () => {
                  setDisplay((prev) => {
                    const next = prev.split("");
                    next[i] = FLIP_CHARS[Math.floor(Math.random() * FLIP_CHARS.length)];
                    return next.join("");
                  });
                },
                settleAt - (flickers - f) * 12,
              ),
            );
          }
          timeouts.push(
            setTimeout(() => {
              setDisplay((prev) => {
                const next = prev.split("");
                next[i] = char;
                return next.join("");
              });
            }, settleAt),
          );
        });

        return () => timeouts.forEach(clearTimeout);
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text, speed, delay, reducedMotion]);

  return (
    <Tag ref={ref as never} className={className} aria-label={text}>
      {display}
    </Tag>
  );
}
