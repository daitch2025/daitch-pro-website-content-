"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const POINTS = [
  { x: 0, y: 62 },
  { x: 20, y: 55 },
  { x: 40, y: 58 },
  { x: 60, y: 40 },
  { x: 80, y: 44 },
  { x: 100, y: 26 },
  { x: 120, y: 30 },
  { x: 140, y: 12 },
];

function toPath(points: typeof POINTS) {
  return points.reduce((acc, p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`), "");
}

export function MiniChart({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const linePath = toPath(POINTS);
  const areaPath = `${linePath} L 140 70 L 0 70 Z`;

  return (
    <svg ref={ref} viewBox="0 0 140 70" className={className} preserveAspectRatio="none">
      <defs>
        <linearGradient id="dashboard-chart-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3C995B" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3C995B" stopOpacity="0" />
        </linearGradient>
      </defs>
      {inView && (
        <>
          <motion.path
            d={areaPath}
            fill="url(#dashboard-chart-fill)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.path
            d={linePath}
            fill="none"
            stroke="#3C995B"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.circle
            cx={POINTS[POINTS.length - 1].x}
            cy={POINTS[POINTS.length - 1].y}
            r={3}
            fill="#3C995B"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.1 }}
          />
        </>
      )}
    </svg>
  );
}
