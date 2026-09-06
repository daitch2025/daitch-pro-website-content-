"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterForm({ dark = true }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Enter a valid email address.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("You're subscribed — welcome aboard.");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setStatus("idle");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center gap-2 lg:ml-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        aria-label="Email address"
        className={cn(
          "h-11 w-full rounded-full border px-4 text-sm outline-none transition-colors",
          dark
            ? "border-white/15 bg-white/5 text-white placeholder:text-white/40 focus:border-green-400"
            : "border-ink/15 bg-white text-ink placeholder:text-ink-300 focus:border-green-500",
        )}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex size-11 shrink-0 items-center justify-center rounded-full bg-green-500 text-forest-deep transition-transform hover:scale-105 disabled:opacity-60"
        aria-label="Subscribe"
      >
        {status === "loading" ? <Loader2 className="size-4 animate-spin" /> : <ArrowRight className="size-4" />}
      </button>
    </form>
  );
}
