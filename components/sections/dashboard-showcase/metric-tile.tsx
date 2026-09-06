import { CountUp } from "@/components/animation";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type MetricTileProps = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  trend?: string;
  icon?: ReactNode;
  className?: string;
};

export function MetricTile({ label, value, prefix, suffix, decimals, trend, icon, className }: MetricTileProps) {
  return (
    <div className={cn("glass-panel rounded-[var(--radius-lg)] p-5", className)}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-ink-500">{label}</span>
        {icon && <span className="text-green-600">{icon}</span>}
      </div>
      <div className="mt-2 font-mono text-2xl font-semibold text-ink tabular-nums">
        <CountUp value={value} prefix={prefix} suffix={suffix} decimals={decimals} />
      </div>
      {trend && <div className="mt-1 text-xs font-medium text-green-600">{trend}</div>}
    </div>
  );
}
