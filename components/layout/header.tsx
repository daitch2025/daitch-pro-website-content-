"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";
import { MobileNavSheet } from "./mobile-nav-sheet";
import { AnnouncementBar } from "./announcement-bar";
import { MEGA_NAV } from "@/content/nav";
import { LinkButton } from "@/components/ui/link-button";
import { ScrambleTextHover } from "@/components/animation";
import { cn } from "@/lib/utils";

export function Header() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = (label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenGroup(label);
  };
  const handleLeave = () => {
    closeTimeout.current = setTimeout(() => setOpenGroup(null), 180);
  };

  const activeGroup = MEGA_NAV.find((g) => g.label === openGroup && g.children);

  return (
    <div className="sticky top-0 z-40">
      <AnnouncementBar />
      <header
        className={cn("relative transition-all duration-300", scrolled ? "glass-panel shadow-[0_1px_0_0_rgba(18,22,39,0.06)]" : "bg-transparent")}
        onMouseLeave={handleLeave}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[84rem] items-center justify-between px-6 lg:px-10">
          <Logo />

          <nav className="hidden items-center gap-0.5 lg:flex">
            {MEGA_NAV.map((group) =>
              group.children ? (
                <button
                  key={group.label}
                  type="button"
                  onMouseEnter={() => handleEnter(group.label)}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink/5 hover:text-ink",
                    openGroup === group.label && "bg-ink/5 text-ink",
                  )}
                >
                  <ScrambleTextHover text={group.label} />
                  <ChevronDown className={cn("size-3.5 transition-transform duration-200", openGroup === group.label && "rotate-180")} />
                </button>
              ) : (
                <Link
                  key={group.label}
                  href={group.href!}
                  onMouseEnter={() => handleEnter("")}
                  className="rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  <ScrambleTextHover text={group.label} />
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-1">
            <Link href="/contact" className="hidden rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:text-ink lg:inline-flex">
              Client Login
            </Link>
            <LinkButton href="/contact" size="sm" className="hidden lg:inline-flex">
              Get My Free Audit
            </LinkButton>
            <MobileNavSheet />
          </div>
        </div>

        <AnimatePresence>
          {activeGroup && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => handleEnter(activeGroup.label)}
              className="absolute inset-x-0 top-full hidden border-t border-ink/8 bg-cream-100/98 shadow-[0_24px_48px_-24px_rgba(18,22,39,0.25)] backdrop-blur-xl lg:block"
            >
              <div className="mx-auto max-w-[84rem] px-10 py-8">
                <div
                  className={cn(
                    "grid gap-x-8 gap-y-3",
                    activeGroup.children!.length > 10 ? "grid-cols-4" : activeGroup.children!.length > 5 ? "grid-cols-3" : "grid-cols-2",
                  )}
                >
                  {activeGroup.children!.map((child) => (
                    <Link key={child.href} href={child.href} className="group/item -m-2 rounded-xl p-2 transition-colors hover:bg-ink/5">
                      <div className="flex items-center gap-1 text-sm font-medium text-ink group-hover/item:text-green-700">
                        {child.label}
                        <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover/item:opacity-100" />
                      </div>
                      {child.description && <div className="mt-0.5 line-clamp-1 text-xs text-ink-500">{child.description}</div>}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
