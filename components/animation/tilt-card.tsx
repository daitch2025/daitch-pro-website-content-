"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import type { ReactNode, MouseEvent as ReactMouseEvent } from "react";
import { useReducedMotion } from "@/components/animation/use-reduced-motion";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** max tilt in degrees */
  maxTilt?: number;
  /** lift on hover, in px */
  lift?: number;
  glare?: boolean;
};

/**
 * Mouse-tracked subtle 3D tilt-on-hover — replaces the flat
 * `hover:-translate-y-1` pattern on cards with real depth/perspective.
 * Falls back to a plain static card under reduced-motion.
 */
export function TiltCard({ children, className, maxTilt = 8, lift = 6, glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const hoverLift = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 28, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-maxTilt, maxTilt]), springConfig);
  const translateZ = useSpring(hoverLift, springConfig);
  const glareX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  function handleMouseMove(e: ReactMouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseEnter() {
    hoverLift.set(lift);
  }

  function handleMouseLeave() {
    hoverLift.set(0);
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, translateZ, transformPerspective: 800 }}
      className={cn("group relative will-change-transform", className)}
    >
      {children}
      {glare && <TiltGlare glareX={glareX} glareY={glareY} />}
    </motion.div>
  );
}

function TiltGlare({ glareX, glareY }: { glareX: MotionValue<string>; glareY: MotionValue<string> }) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background: useTransform([glareX, glareY], ([x, y]) => `radial-gradient(400px circle at ${x} ${y}, rgba(255,255,255,0.35), transparent 60%)`),
      }}
      aria-hidden="true"
    />
  );
}
