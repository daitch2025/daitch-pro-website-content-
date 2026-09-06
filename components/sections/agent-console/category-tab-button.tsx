"use client";

import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CategoryTabButtonProps = {
  label: string;
  description: string;
  count: number;
  icon: LucideIcon;
  active: boolean;
  accentFrom: string;
  onClick: () => void;
};

export function CategoryTabButton({ label, description, count, icon: Icon, active, accentFrom, onClick }: CategoryTabButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group flex w-full items-center gap-3 rounded-[var(--radius-lg)] border px-4 py-3.5 text-left transition-all duration-300",
        active ? "border-transparent bg-cream-100 shadow-[var(--shadow-elevated)]" : "border-ink/8 bg-transparent hover:border-ink/15 hover:bg-cream-100/60",
      )}
      style={active ? { boxShadow: `0 0 0 1.5px ${accentFrom} inset, var(--shadow-elevated)` } : undefined}
    >
      <span
        className={cn("flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] transition-colors", active ? "text-white" : "bg-ink/5 text-ink-500")}
        style={active ? { backgroundColor: accentFrom } : undefined}
      >
        <Icon className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span className={cn("truncate font-display text-sm font-semibold", active ? "text-ink" : "text-ink-700")}>{label}</span>
          <span className="shrink-0 rounded-full bg-ink/5 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-ink-500">{count}</span>
        </span>
        <span className="mt-0.5 hidden truncate text-xs text-ink-500 lg:block">{description}</span>
      </span>
      <ChevronRight className={cn("size-4 shrink-0 transition-transform", active ? "text-ink" : "text-ink-300 group-hover:translate-x-0.5")} />
    </button>
  );
}
