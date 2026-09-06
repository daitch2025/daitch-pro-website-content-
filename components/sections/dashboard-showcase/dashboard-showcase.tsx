import { Activity, TrendingUp, Users, Zap } from "lucide-react";
import { MetricTile } from "./metric-tile";
import { MiniChart } from "./mini-chart";
import { LiveActivity } from "./live-activity";
import { cn } from "@/lib/utils";

type DashboardShowcaseProps = {
  className?: string;
  /** "card" = compact (default, used in narrow contexts); "hero" = wide layout for the full-bleed hero panel */
  variant?: "card" | "hero";
};

export function DashboardShowcase({ className, variant = "card" }: DashboardShowcaseProps) {
  const isHero = variant === "hero";

  return (
    <div className={cn("relative w-full", !isHero && "max-w-[30rem]", className)}>
      <div className={cn("glass-panel rounded-[var(--radius-xl)] shadow-[var(--shadow-elevated)]", isHero ? "p-5 sm:p-7" : "p-3 sm:p-4")}>
        <div className="flex items-center justify-between px-2 pt-1 pb-3">
          <div>
            <p className="text-xs font-medium text-ink-500">Growth Analytics</p>
            <p className="font-display text-sm font-semibold text-ink sm:text-base">This week</p>
          </div>
          <div className="flex -space-x-2">
            {["bg-green-400", "bg-gold-400", "bg-green-600"].map((c, i) => (
              <span key={i} className={cn("size-6 rounded-full border-2 border-cream-100", c)} />
            ))}
          </div>
        </div>

        {isHero ? (
          <>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              <MetricTile label="Net Sales" value={48200} prefix="$" suffix="+" trend="+18% this month" icon={<Users className="size-3.5" />} />
              <MetricTile label="ACoS" value={19} suffix="%" trend="Down from 42%" icon={<Activity className="size-3.5" />} />
              <MetricTile label="Services Active" value={18} trend="Across 4 pillars" icon={<Zap className="size-3.5" />} />
              <MetricTile label="Conversion" value={34} suffix="%" trend="+34% lift" icon={<TrendingUp className="size-3.5" />} />
            </div>
            <div className="mt-3 grid gap-3 lg:grid-cols-[1.2fr_1fr]">
              <div className="glass-panel rounded-[var(--radius-lg)] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-ink-500">Sales Growth</span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-green-600">
                    <TrendingUp className="size-3.5" />
                    +34%
                  </span>
                </div>
                <MiniChart className="mt-3 h-24 w-full lg:h-32" />
              </div>
              <LiveActivity />
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3">
              <MetricTile label="Net Sales" value={48200} prefix="$" suffix="+" trend="+18% this month" icon={<Users className="size-3.5" />} />
              <MetricTile label="ACoS" value={19} suffix="%" trend="Down from 42%" icon={<Activity className="size-3.5" />} />
            </div>
            <div className="glass-panel mt-3 rounded-[var(--radius-lg)] p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-ink-500">Sales Growth</span>
                <span className="flex items-center gap-1 text-xs font-semibold text-green-600">
                  <TrendingUp className="size-3.5" />
                  +34%
                </span>
              </div>
              <MiniChart className="mt-3 h-16 w-full" />
            </div>
            <LiveActivity className="mt-3" />
          </>
        )}
      </div>
    </div>
  );
}
