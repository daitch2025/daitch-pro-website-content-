"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import type { ReactNode, MouseEvent } from "react";
import { useReducedMotion } from "@/components/animation/use-reduced-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  as?: "button" | "div";
};

export function MagneticButton({ children, className, strength = 0.35, onClick, as = "div" }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement & HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    ref.current.style.setProperty("--mx", `${x}px`);
    ref.current.style.setProperty("--my", `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.setProperty("--mx", "0px");
    ref.current.style.setProperty("--my", "0px");
  };

  const style = {
    transform: "translate(var(--mx, 0px), var(--my, 0px))",
    transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
  };

  if (as === "button") {
    return (
      <motion.button
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className={cn("inline-block will-change-transform", className)}
        style={style}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn("inline-block will-change-transform", className)}
      style={style}
    >
      {children}
    </motion.div>
  );
}
