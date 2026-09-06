"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Direction the content travels in from */
  from?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  /** Stagger children (use with <Reveal as="ul"> + motion children, or via RevealGroup) */
  once?: boolean;
  amount?: number;
  as?: keyof typeof motion;
};

const OFFSETS: Record<NonNullable<RevealProps["from"]>, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

export function Reveal({
  children,
  className,
  from = "up",
  delay = 0,
  duration = 0.7,
  distance,
  once = true,
  amount = 0.3,
  as = "div",
}: RevealProps) {
  const offset = OFFSETS[from];
  const initial = {
    opacity: 0,
    filter: "blur(6px)",
    x: offset.x !== undefined ? (distance ?? offset.x) : 0,
    y: offset.y !== undefined ? (distance ?? offset.y) : 0,
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export const REVEAL_STAGGER_CONTAINER: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const REVEAL_STAGGER_ITEM: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Wrap a grid/list of items; give each child item `variants={REVEAL_STAGGER_ITEM}` */
export function RevealGroup({
  children,
  className,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={REVEAL_STAGGER_CONTAINER}
    >
      {children}
    </motion.div>
  );
}
