"use client";

import { useCallback, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/components/animation/use-reduced-motion";

const GLYPHS = "!@#$%^&*()_+-=<>?/\\[]{}Xx01";

function runScramble(text: string, duration: number, setDisplay: (v: string) => void) {
  const locked = new Set<number>();
  const chars = text.split("");
  const progressObj = { p: 0 };

  return gsap.to(progressObj, {
    p: 1,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      const numLocked = Math.floor(progressObj.p * chars.length);
      for (let i = 0; i < numLocked; i++) locked.add(i);
      setDisplay(chars.map((c, i) => (locked.has(i) || c === " " ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])).join(""));
    },
    onComplete: () => setDisplay(text),
  });
}

type ScrambleTextHoverProps = {
  text: string;
  className?: string;
  duration?: number;
  as?: "span" | "div";
};

/** Glyph-scramble-to-resolve text, triggered on hover. Used sparingly — nav links, select card titles. */
export function ScrambleTextHover({ text, className, duration = 0.5, as: Tag = "span" }: ScrambleTextHoverProps) {
  const [display, setDisplay] = useState(text);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const reducedMotion = useReducedMotion();

  const handleEnter = useCallback(() => {
    if (reducedMotion) return;
    tweenRef.current?.kill();
    tweenRef.current = runScramble(text, duration, setDisplay);
  }, [text, duration, reducedMotion]);

  const handleLeave = useCallback(() => {
    if (reducedMotion) return;
    // Let the in-flight resolve finish naturally rather than snapping back —
    // re-triggering on every mouseleave reads as flicker, not polish.
  }, [reducedMotion]);

  return (
    <Tag onMouseEnter={handleEnter} onMouseLeave={handleLeave} className={className}>
      {display}
    </Tag>
  );
}
