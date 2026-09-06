import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
  reverse?: boolean;
};

/**
 * Infinite CSS marquee. Renders the item list twice back-to-back so the
 * translateX(-50%) loop is seamless; consumers should keep `items` a
 * reasonably short, repeatable set (e.g. industries served, not logos we
 * don't have real permission to display).
 */
export function LogoMarquee({ items, className, reverse }: MarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
      <div className={cn("flex w-max gap-10 whitespace-nowrap", reverse ? "animate-marquee-reverse" : "animate-marquee")}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-sm font-medium text-ink-300">
            <span className="size-1.5 rounded-full bg-green-500/60" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
