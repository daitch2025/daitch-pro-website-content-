import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)} aria-label="Knowledge Inn home">
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" className={dark ? "text-white" : "text-ink"} />
        <path
          d="M16 3C22.6274 3 28 8.37258 28 15C28 15.5 27.96 15.99 27.9 16.47"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="text-green-500"
        />
        <circle cx="16" cy="16" r="6.5" fill="currentColor" className="text-green-600" />
        <circle cx="27" cy="17" r="2.4" fill="currentColor" className="text-gold-500" />
      </svg>
      <span className={cn("font-display text-lg font-semibold tracking-tight", dark ? "text-white" : "text-ink")}>Knowledge Inn</span>
    </Link>
  );
}
