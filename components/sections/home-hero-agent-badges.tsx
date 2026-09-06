"use client";

import { useReducedMotion } from "@/components/animation/use-reduced-motion";

const BADGES = [
  {
    name: "PPC & Ads",
    color: "#4AAE68",
    textColor: "#FBFCF9",
    animName: "badge-sales",
    duration: "19s",
    keyframes: `@keyframes badge-sales {
      0%   { transform: translate(6vw, 4vh); }
      15%  { transform: translate(28vw, 10vh); }
      30%  { transform: translate(38vw, 22vh); }
      50%  { transform: translate(20vw, 30vh); }
      65%  { transform: translate(8vw, 18vh); }
      80%  { transform: translate(32vw, 6vh); }
      100% { transform: translate(6vw, 4vh); }
    }`,
  },
  {
    name: "Amazon SEO",
    color: "#D9A441",
    textColor: "#121627",
    animName: "badge-scheduler",
    duration: "23s",
    keyframes: `@keyframes badge-scheduler {
      0%   { transform: translate(64vw, 3vh); }
      20%  { transform: translate(50vw, 14vh); }
      40%  { transform: translate(66vw, 26vh); }
      55%  { transform: translate(78vw, 15vh); }
      75%  { transform: translate(58vw, 5vh); }
      90%  { transform: translate(70vw, 20vh); }
      100% { transform: translate(64vw, 3vh); }
    }`,
  },
  {
    name: "FBA & Logistics",
    color: "#2E7A48",
    textColor: "#FBFCF9",
    animName: "badge-care",
    duration: "27s",
    keyframes: `@keyframes badge-care {
      0%   { transform: translate(14vw, 32vh); }
      18%  { transform: translate(6vw, 20vh); }
      35%  { transform: translate(30vw, 12vh); }
      52%  { transform: translate(16vw, 34vh); }
      70%  { transform: translate(28vw, 24vh); }
      85%  { transform: translate(4vw, 30vh); }
      100% { transform: translate(14vw, 32vh); }
    }`,
  },
  {
    name: "DSP Ads",
    color: "#E8C468",
    textColor: "#121627",
    animName: "badge-billing",
    duration: "31s",
    keyframes: `@keyframes badge-billing {
      0%   { transform: translate(72vw, 30vh); }
      12%  { transform: translate(56vw, 8vh); }
      30%  { transform: translate(80vw, 18vh); }
      48%  { transform: translate(62vw, 34vh); }
      65%  { transform: translate(74vw, 12vh); }
      82%  { transform: translate(58vw, 26vh); }
      100% { transform: translate(72vw, 30vh); }
    }`,
  },
];

/**
 * Roaming AI-agent badges drifting around the hero text — adapted from a
 * reference template's "collaborator cursors" concept (multi-keyframe CSS
 * translate loops), reskinned to represent Knowledge Inn's agents actively
 * working rather than human collaborators. Pure CSS keyframe animation, no
 * JS animation loop; hidden entirely under prefers-reduced-motion.
 */
export function HomeHeroAgentBadges() {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-10 hidden overflow-hidden md:block" aria-hidden="true">
      <style>{BADGES.map((b) => b.keyframes).join("\n")}</style>
      {BADGES.map((badge) => (
        <div
          key={badge.name}
          className="absolute top-0 left-0"
          style={{
            animation: `${badge.animName} ${badge.duration} cubic-bezier(0.4, 0, 0.2, 1) infinite`,
            willChange: "transform",
          }}
        >
          <span
            className="flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold whitespace-nowrap shadow-[0_4px_14px_rgba(18,22,39,0.18)]"
            style={{ backgroundColor: badge.color, color: badge.textColor }}
          >
            <span className="size-1.5 rounded-full bg-current opacity-70" />
            {badge.name}
          </span>
        </div>
      ))}
    </div>
  );
}
