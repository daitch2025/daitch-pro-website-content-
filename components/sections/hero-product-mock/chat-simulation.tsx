"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useReducedMotion } from "@/components/animation/use-reduced-motion";

type Scenario = {
  customerMsg: string;
  agentName: string;
  agentMsg: string;
  confirmText: string;
};

const SCENARIOS: Scenario[] = [
  {
    customerMsg: "Our ACoS is at 42% and eating all the margin. Can you help?",
    agentName: "PPC Management",
    agentMsg: "Yes — we'll restructure campaigns and cut wasted spend. Brands like yours land near 20%.",
    confirmText: "ACoS target set — 20%",
  },
  {
    customerMsg: "Amazon lost a whole shipment. Can we get that money back?",
    agentName: "FBA Reimbursements",
    agentMsg: "We'll audit 18 months of transactions and file every claim you're owed.",
    confirmText: "Recovery audit started",
  },
  {
    customerMsg: "We're stuck on page 3 for our main keyword.",
    agentName: "Amazon SEO",
    agentMsg: "We'll reverse-ASIN the leaders and close your indexing gaps to climb page one.",
    confirmText: "Rank plan queued",
  },
  {
    customerMsg: "We're launching a new product next month.",
    agentName: "Product Launch",
    agentMsg: "Perfect timing — a 90-day velocity plan drives rank fast in the honeymoon window.",
    confirmText: "Launch roadmap sent",
  },
];

// 0 idle, 1 customer msg, 2 typing, 3 agent reply, 4 confirmation, 5 fading out
type Phase = 0 | 1 | 2 | 3 | 4 | 5;

const PHASE_DELAYS: Record<Phase, number> = {
  0: 300,
  1: 650,
  2: 1100,
  3: 900,
  4: 2400,
  5: 450,
};

export function ChatSimulation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reducedMotion = useReducedMotion();
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>(reducedMotion ? 4 : 0);

  useEffect(() => {
    if (!inView || reducedMotion) return;

    const timeout = setTimeout(() => {
      if (phase === 5) {
        setScenarioIndex((i) => (i + 1) % SCENARIOS.length);
        setPhase(0);
      } else {
        setPhase((p) => (p + 1) as Phase);
      }
    }, PHASE_DELAYS[phase]);

    return () => clearTimeout(timeout);
  }, [inView, reducedMotion, phase]);

  const scenario = SCENARIOS[scenarioIndex];
  const visible = phase !== 5;

  return (
    <div ref={ref} className="flex h-full flex-col justify-center gap-2 overflow-hidden p-3 sm:p-4">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div key={scenarioIndex} className="flex flex-col gap-2" exit={{ opacity: 0, transition: { duration: 0.35 } }}>
            <AnimatePresence>
              {phase >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="max-w-[85%] self-start rounded-2xl rounded-bl-sm bg-ink/6 px-3 py-2 text-xs text-ink-700"
                >
                  {scenario.customerMsg}
                </motion.div>
              )}

              {phase === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex max-w-[60%] items-center gap-1 self-start rounded-2xl rounded-bl-sm bg-ink/6 px-3 py-2.5"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="size-1.5 rounded-full bg-ink-300"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </motion.div>
              )}

              {phase >= 3 && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="max-w-[85%] self-end">
                  <div className="rounded-2xl rounded-br-sm bg-green-600 px-3 py-2 text-xs text-white">{scenario.agentMsg}</div>
                  <p className="mt-1 text-right font-mono text-[9px] text-ink-300">{scenario.agentName}</p>
                </motion.div>
              )}

              {phase >= 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-1 flex items-center gap-1.5 self-center rounded-full bg-green-50 px-3 py-1 text-[10px] font-semibold text-green-700"
                >
                  <CheckCircle2 className="size-3" />
                  {scenario.confirmText}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
