"use client";

import { useId } from "react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

type RadialNode = { slug: string; name: string; href: string };

type RadialAgentMapProps = {
  nodes: RadialNode[];
  icon: LucideIcon;
  accentFrom: string;
  accentTo: string;
  className?: string;
};

const WIDTH = 440;
const HEIGHT = 240;
const HUB = { x: WIDTH / 2, y: HEIGHT - 6 };
const HUB_RADIUS = 30;
const NODE_RADIUS = 15;
const SPREAD = Math.PI * 0.82;

function nodePosition(index: number, count: number, radius: number) {
  const t = count > 1 ? index / (count - 1) : 0.5;
  const angle = -Math.PI / 2 + (t - 0.5) * SPREAD;
  return { x: HUB.x + radius * Math.cos(angle), y: HUB.y + radius * Math.sin(angle) * 1.05 };
}

/**
 * A category's agents rendered as nodes fanned out above a pulsing central
 * hub, connected by animated draw-in lines — the visual centerpiece of the
 * agent console, replacing a plain list with something that actually looks
 * like a live coordinated system.
 */
export function RadialAgentMap({ nodes, icon: Icon, accentFrom, accentTo, className }: RadialAgentMapProps) {
  const gradientId = useId();
  const glowId = useId();
  const radius = Math.min(150, 90 + nodes.length * 6);

  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className={className} role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accentFrom} />
          <stop offset="100%" stopColor={accentTo} />
        </linearGradient>
        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accentFrom} stopOpacity="0.35" />
          <stop offset="100%" stopColor={accentFrom} stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={HUB.x} cy={HUB.y} r={HUB_RADIUS + 46} fill={`url(#${glowId})`} />

      {nodes.map((node, i) => {
        const pos = nodePosition(i, nodes.length, radius);
        return (
          <motion.line
            key={`line-${node.slug}`}
            x1={HUB.x}
            y1={HUB.y}
            x2={pos.x}
            y2={pos.y}
            stroke={`url(#${gradientId})`}
            strokeWidth={1.5}
            strokeOpacity={0.5}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.06, ease: "easeOut" }}
          />
        );
      })}

      {nodes.map((node, i) => {
        const pos = nodePosition(i, nodes.length, radius);
        return (
          <motion.circle
            key={`pulse-${node.slug}`}
            cx={pos.x}
            cy={pos.y}
            r={NODE_RADIUS}
            fill="none"
            stroke={accentFrom}
            strokeWidth={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0], scale: [1, 1.6, 1.6] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: 1 + i * 0.3, ease: "easeOut" }}
            style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
          />
        );
      })}

      {nodes.map((node, i) => {
        const pos = nodePosition(i, nodes.length, radius);
        return (
          <motion.g
            key={node.slug}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.35 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <circle cx={pos.x} cy={pos.y} r={NODE_RADIUS} className="fill-cream-100 stroke-ink/15" strokeWidth={1.25} />
            <text x={pos.x} y={pos.y + 4} textAnchor="middle" className="fill-ink font-mono text-[11px] font-bold">
              {node.name
                .replace(/^AI\s+/, "")
                .split(" ")
                .map((w) => w[0])
                .slice(0, 2)
                .join("")}
            </text>
          </motion.g>
        );
      })}

      <motion.circle
        cx={HUB.x}
        cy={HUB.y}
        r={HUB_RADIUS}
        fill={`url(#${gradientId})`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      <motion.circle
        cx={HUB.x}
        cy={HUB.y}
        r={HUB_RADIUS}
        fill="none"
        stroke={accentFrom}
        strokeWidth={1.5}
        animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.4, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
      />
      <foreignObject x={HUB.x - 14} y={HUB.y - 14} width={28} height={28}>
        <Icon className="size-7 text-white" strokeWidth={2} />
      </foreignObject>
    </svg>
  );
}
