import Link from "next/link";
import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkButtonVariants = cva(
  "group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-pill)] font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-[var(--shadow-glow-green)] hover:brightness-110 active:brightness-95",
        secondary: "bg-ink text-cream-100 hover:bg-ink-700",
        outline: "border border-ink/15 bg-transparent text-ink hover:border-ink/30 hover:bg-ink/5",
        "outline-light": "border border-white/25 bg-transparent text-white hover:border-white/50 hover:bg-white/10",
        ghost: "bg-transparent text-ink hover:bg-ink/5",
        gold: "bg-gold-500 text-ink shadow-[var(--shadow-glow-gold)] hover:brightness-105",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type LinkButtonProps = VariantProps<typeof linkButtonVariants> & {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export function LinkButton({ href, children, variant, size, className, target, rel }: LinkButtonProps) {
  return (
    <Link href={href} target={target} rel={rel} className={cn(linkButtonVariants({ variant, size }), className)}>
      {children}
    </Link>
  );
}

export { linkButtonVariants };
