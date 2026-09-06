"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Sparkles } from "lucide-react";

const MESSAGES = [
  "New: FBA Reimbursement recovery — we find the money Amazon owes you",
  "Free 30-point Amazon account audit — no commitment",
  "Now expanding brands into 20+ global Amazon marketplaces",
  "Book a strategy call — see the fastest path to profitable growth",
];

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section-forest relative z-50 flex h-9 items-center justify-center overflow-hidden px-4 text-xs font-medium">
      <Sparkles className="mr-2 size-3.5 shrink-0 text-green-400" aria-hidden="true" />
      <div className="relative h-4 w-full max-w-md overflow-hidden text-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {MESSAGES[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
