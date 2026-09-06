import { getTopLevelAgents } from "@/content/agents";

const NAMES = getTopLevelAgents().map((a) => a.name);

export function AgentTicker() {
  return (
    <div className="overflow-hidden border-t border-ink/8 bg-cream-200/60 py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-6 whitespace-nowrap">
        {[...NAMES, ...NAMES].map((name, i) => (
          <span key={i} className="flex items-center gap-2 font-mono text-[10px] text-ink-500">
            <span className="size-1 rounded-full bg-green-500" />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
