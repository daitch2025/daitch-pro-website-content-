"use client";

import { useId, useRef } from "react";
import { motion, useInView } from "motion/react";
import { useReducedMotion } from "@/components/animation/use-reduced-motion";

export type WorkflowNode = { label: string };

type WorkflowDiagramProps = {
  centerLabel?: string;
  /** rendered on the left, flowing in toward the center */
  inputs: WorkflowNode[];
  /** rendered on the right, flowing out from the center */
  outputs: WorkflowNode[];
  className?: string;
};

const WIDTH = 800;
const HEIGHT = 280;
const CENTER = { x: WIDTH / 2, y: HEIGHT / 2 };
const HUB_RADIUS = 34;
const PILL_W = 190;
const PILL_H = 34;
const PILL_PAD_X = 16;
const MAX_TEXT_W = PILL_W - PILL_PAD_X * 2;
/** Rough glyph-advance ratio for font-mono + tracking-wide at a given font-size, used only to decide whether a label needs shrinking/compressing — doesn't need to be exact. */
const CHAR_WIDTH_RATIO = 0.68;

function nodePositions(count: number) {
  const gap = HEIGHT / (count + 1);
  return Array.from({ length: count }, (_, i) => gap * (i + 1));
}

function pillFontSize(label: string) {
  if (label.length <= 15) return 11;
  if (label.length <= 20) return 10;
  if (label.length <= 26) return 9;
  return 8;
}

function Pill({ x, y, align, label, delay, inView }: { x: number; y: number; align: "left" | "right"; label: string; delay: number; inView: boolean }) {
  const px = align === "left" ? x : x - PILL_W;
  const fontSize = pillFontSize(label);
  const needsCompression = label.length * fontSize * CHAR_WIDTH_RATIO > MAX_TEXT_W;

  return (
    <motion.g initial={{ opacity: 0, x: align === "left" ? -16 : 16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay }}>
      <rect x={px} y={y - PILL_H / 2} width={PILL_W} height={PILL_H} rx={PILL_H / 2} className="fill-cream-100 stroke-ink/12" strokeWidth={1.25} />
      <text
        x={px + PILL_W / 2}
        y={y + 4}
        textAnchor="middle"
        textLength={needsCompression ? MAX_TEXT_W : undefined}
        lengthAdjust={needsCompression ? "spacingAndGlyphs" : undefined}
        style={{ fontSize }}
        className="fill-ink font-mono font-medium uppercase tracking-wide"
      >
        {label}
      </text>
    </motion.g>
  );
}

export function WorkflowDiagram({ centerLabel = "Knowledge Inn Engine", inputs, outputs, className }: WorkflowDiagramProps) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reducedMotion = useReducedMotion();
  const gradientId = useId();

  const inputYs = nodePositions(inputs.length);
  const outputYs = nodePositions(outputs.length);
  const edgeX = { left: 8 + PILL_W, right: WIDTH - 8 - PILL_W };

  return (
    <svg ref={ref} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className={className} role="img" aria-label="Diagram of requests flowing through Knowledge Inn's automation engine to outcomes">
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4AAE68" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#4AAE68" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* connector lines */}
      {inputs.map((_, i) => (
        <motion.line
          key={`in-line-${i}`}
          x1={edgeX.left}
          y1={inputYs[i]}
          x2={CENTER.x - HUB_RADIUS}
          y2={CENTER.y}
          className="stroke-ink/15"
          strokeWidth={1.25}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 + i * 0.08 }}
        />
      ))}
      {outputs.map((_, i) => (
        <motion.line
          key={`out-line-${i}`}
          x1={CENTER.x + HUB_RADIUS}
          y1={CENTER.y}
          x2={edgeX.right}
          y2={outputYs[i]}
          className="stroke-ink/15"
          strokeWidth={1.25}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.25 + i * 0.08 }}
        />
      ))}

      {/* flowing packets */}
      {!reducedMotion &&
        inView &&
        inputs.map((_, i) => (
          <motion.circle
            key={`in-packet-${i}`}
            r={3}
            fill="#4AAE68"
            initial={{ cx: edgeX.left, cy: inputYs[i], opacity: 0 }}
            animate={{ cx: [edgeX.left, CENTER.x - HUB_RADIUS], cy: [inputYs[i], CENTER.y], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.5 + i * 0.6, delay: 1 + i * 0.4, ease: "easeInOut" }}
          />
        ))}
      {!reducedMotion &&
        inView &&
        outputs.map((_, i) => (
          <motion.circle
            key={`out-packet-${i}`}
            r={3}
            fill="#D9A441"
            initial={{ cx: CENTER.x + HUB_RADIUS, cy: CENTER.y, opacity: 0 }}
            animate={{ cx: [CENTER.x + HUB_RADIUS, edgeX.right], cy: [CENTER.y, outputYs[i]], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.5 + i * 0.6, delay: 1.6 + i * 0.4, ease: "easeInOut" }}
          />
        ))}

      {/* center hub */}
      <circle cx={CENTER.x} cy={CENTER.y} r={HUB_RADIUS + 26} fill={`url(#${gradientId})`} />
      <motion.circle
        cx={CENTER.x}
        cy={CENTER.y}
        r={HUB_RADIUS}
        className="fill-forest stroke-green-400"
        strokeWidth={1.5}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      />
      {!reducedMotion && (
        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={HUB_RADIUS}
          className="fill-none stroke-green-400"
          strokeWidth={1.5}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: [0.5, 0, 0.5], scale: [1, 1.35, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <text x={CENTER.x} y={CENTER.y - 6} textAnchor="middle" className="fill-white font-display text-[11px] font-semibold">
        {centerLabel.split(" ")[0]}
      </text>
      <text x={CENTER.x} y={CENTER.y + 10} textAnchor="middle" className="fill-green-300 font-mono text-[9px] uppercase tracking-wide">
        {centerLabel.split(" ").slice(1).join(" ")}
      </text>

      {inputs.map((node, i) => (
        <Pill key={node.label} x={8} y={inputYs[i]} align="left" label={node.label} delay={0.1 + i * 0.08} inView={inView} />
      ))}
      {outputs.map((node, i) => (
        <Pill key={node.label} x={WIDTH - 8} y={outputYs[i]} align="right" label={node.label} delay={0.2 + i * 0.08} inView={inView} />
      ))}
    </svg>
  );
}
