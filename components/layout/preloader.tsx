"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useReducedMotion } from "@/components/animation/use-reduced-motion";
import { CountUp } from "@/components/animation/count-up";
import { ShaderMeshBackground } from "@/components/animation/shader-mesh-background";

const STATUS_LINES = ["Initializing growth engine", "Syncing 18 Amazon services", "Connecting ads, listings & logistics", "Systems online"];

const BAR_TRANSITION = { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const };

/**
 * First-visit intro: a full-screen cinematic title sequence — letterboxed,
 * full-bleed animated gradient, a huge kinetic percentage counter, cycling
 * status lines — before a dramatic wipe reveals the page. Session-scoped
 * (sessionStorage) so internal navigation never replays it.
 *
 * The previous version combined the `noise-overlay` utility (which sets its
 * own `position: relative`) directly on the same element as Tailwind's
 * `fixed` class. Equal-specificity classes resolve by source order, and
 * `noise-overlay` was winning — silently downgrading the "full-screen"
 * overlay to a ~150px strip in normal document flow at the top of the page.
 * Fixed by keeping the noise texture on its own inner layer, positioned via
 * inline style (which always wins over any class) instead of a Tailwind
 * position utility that could lose the same fight again.
 */
export function Preloader() {
  const reducedMotion = useReducedMotion();
  const [show, setShow] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Reduced-motion visitors skip the intro entirely rather than seeing a
    // shortened version — `show` never becomes true for them.
    if (reducedMotion) return;
    if (sessionStorage.getItem("dp-intro-seen")) return;
    sessionStorage.setItem("dp-intro-seen", "1");
    // sessionStorage is an external system with no render-time equivalent —
    // this one-time gate has to live in an effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShow(true);
  }, [reducedMotion]);

  useEffect(() => {
    if (!show) return;
    const t1 = setTimeout(() => setStatusIndex(1), 550);
    const t2 = setTimeout(() => setStatusIndex(2), 1100);
    const t3 = setTimeout(() => setStatusIndex(3), 1650);
    const t4 = setTimeout(() => setExiting(true), 2500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [show]);

  if (!show) return null;

  return (
    <AnimatePresence onExitComplete={() => setShow(false)}>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-forest-deep"
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 opacity-70">
            <ShaderMeshBackground variant="dark" className="size-full" />
          </div>
          <div className="noise-overlay" style={{ position: "absolute", inset: 0 }} aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(4,42,34,0.55) 0%, transparent 30%, transparent 70%, rgba(4,42,34,0.7) 100%)" }}
            aria-hidden="true"
          />

          <motion.div
            className="absolute inset-x-0 top-0 z-10 bg-black"
            style={{ height: "9vh" }}
            exit={{ y: "-100%" }}
            transition={BAR_TRANSITION}
            aria-hidden="true"
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 z-10 bg-black"
            style={{ height: "9vh" }}
            exit={{ y: "100%" }}
            transition={BAR_TRANSITION}
            aria-hidden="true"
          />

          <div className="relative z-10 flex size-full flex-col items-center justify-center px-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-[0.35em] text-green-300/70 uppercase"
            >
              Knowledge Inn
            </motion.span>

            <div className="font-display mt-2 text-[clamp(4.5rem,16vw,11rem)] leading-none font-bold tabular-nums text-white">
              <CountUp value={100} duration={2.2} suffix="%" />
            </div>

            <div className="mt-7 h-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={statusIndex}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="font-mono text-xs tracking-widest text-green-300/80 uppercase"
                >
                  {STATUS_LINES[statusIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
