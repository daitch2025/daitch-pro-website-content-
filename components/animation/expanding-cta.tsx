"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ArrowRight } from "lucide-react";
import { linkButtonVariants } from "@/components/ui/link-button";
import { ContactForm } from "@/components/forms/contact-form";
import { useReducedMotion } from "@/components/animation/use-reduced-motion";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

type ExpandingCtaPanelProps = VariantProps<typeof linkButtonVariants> & {
  label: string;
  panelTitle?: string;
  panelDescription?: string;
  className?: string;
};

/**
 * A pill CTA that opens a contact panel in place, instead of navigating away.
 *
 * Note: an earlier version used a Framer `layoutId` shared-element morph
 * between the button and the panel. That approach reliably left a ghost
 * element stuck mid-transition (visible at a tiny scale, `pointer-events:
 * none`, never unmounted) because AnimatePresence has no defined `exit` to
 * complete when the only animation driving it is a layoutId FLIP — confirmed
 * via direct testing, not a hypothetical. A plain fade+scale open/close is
 * the reliable choice; it doesn't need reduced-motion special-casing beyond
 * a shorter duration, since there's no shared-layout animation to skip.
 */
export function ExpandingCtaPanel({ label, panelTitle = "Talk to our team", panelDescription, className, variant = "primary", size = "lg" }: ExpandingCtaPanelProps) {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const duration = reducedMotion ? 0.01 : 0.25;

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(linkButtonVariants({ variant, size }), "group/btn", className)}
      >
        {label}
        <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration }}
              className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
              aria-hidden="true"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={panelTitle}
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-cream-100 p-7 shadow-[var(--shadow-elevated)] sm:p-9"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-5 right-5 flex size-9 items-center justify-center rounded-full text-ink-500 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <X className="size-4" />
              </button>
              <h3 className="font-display text-xl font-semibold text-ink">{panelTitle}</h3>
              {panelDescription && <p className="mt-2 text-sm text-ink-500">{panelDescription}</p>}
              <div className="mt-6">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
