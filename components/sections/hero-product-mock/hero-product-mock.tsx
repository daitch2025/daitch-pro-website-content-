import { Users, Zap } from "lucide-react";
import { SidebarNavMock } from "./sidebar-nav-mock";
import { ChatSimulation } from "./chat-simulation";
import { AgentTicker } from "./agent-ticker";
import { MiniActivityFeed } from "./mini-activity-feed";
import { MetricTile } from "@/components/sections/dashboard-showcase/metric-tile";
import { cn } from "@/lib/utils";

export function HeroProductMock({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-[var(--radius-lg)] border-2 border-ink/10 bg-cream-100 shadow-[var(--shadow-elevated)]", className)}>
      {/* chrome bar */}
      <div className="flex items-center justify-between border-b border-ink/8 bg-cream-200/50 px-3 py-2 sm:px-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-ink/15" />
            <span className="size-2 rounded-full bg-ink/15" />
            <span className="size-2 rounded-full bg-ink/15" />
          </div>
          <span className="font-mono text-[10px] text-ink-500 sm:text-xs">Knowledge Inn — Amazon Command Center</span>
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[10px] font-medium text-green-600">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-green-500" />
          </span>
          LIVE
        </span>
      </div>

      {/* body */}
      <div className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[9rem_1fr_15rem]">
        <div className="hidden sm:block">
          <SidebarNavMock />
        </div>
        <div className="col-span-1 border-r border-ink/8 sm:col-span-1">
          <ChatSimulation />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-2.5 border-t border-ink/8 p-3 sm:col-span-1 sm:grid-cols-1 sm:border-t-0">
          <MetricTile label="Net Sales" value={48200} prefix="$" suffix="+" trend="+18% this month" icon={<Users className="size-3.5" />} className="p-3" />
          <MetricTile label="Services Active" value={18} trend="Across 4 pillars" icon={<Zap className="size-3.5" />} className="p-3" />
          <MiniActivityFeed className="col-span-2 sm:col-span-1" />
        </div>
      </div>

      <AgentTicker />
    </div>
  );
}
