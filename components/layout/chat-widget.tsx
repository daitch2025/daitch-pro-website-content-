"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, X, Send, ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "@/components/animation/use-reduced-motion";
import { cn } from "@/lib/utils";

type Message = { id: string; from: "bot" | "user"; text: string; href?: string; hrefLabel?: string };

const QUICK_REPLIES = [
  { label: "See pricing", key: "pricing" },
  { label: "Book a free audit", key: "demo" },
  { label: "What services do you offer?", key: "agents" },
  { label: "Talk to a human", key: "contact" },
];

const RESPONSES: Record<string, { text: string; href: string; hrefLabel: string }> = {
  pricing: {
    text: "Plans start with a free audit, then scale from Launch to Growth to Scale — transparent monthly retainers, no lock-in.",
    href: "/pricing",
    hrefLabel: "View pricing",
  },
  demo: {
    text: "Happy to — we'll run a free 30-point audit of your Amazon account and map the fastest path to profitable growth.",
    href: "/contact",
    hrefLabel: "Get my free audit",
  },
  agents: {
    text: "18 specialist services across advertising, listings, operations, and brand — PPC, DSP, Amazon SEO, A+, FBA, reimbursements, and more, all done-for-you.",
    href: "/ai-agent/product",
    hrefLabel: "Browse all services",
  },
  contact: {
    text: "Happy to connect you with our team directly — they typically respond within one business day.",
    href: "/contact",
    hrefLabel: "Contact us",
  },
  fallback: {
    text: "Good question — one of our Amazon strategists can give you a precise answer on that.",
    href: "/contact",
    hrefLabel: "Contact us",
  },
};

function matchKey(input: string): string {
  const t = input.toLowerCase();
  if (/price|cost|plan|retainer|\$/.test(t)) return "pricing";
  if (/audit|demo|see it|show me|try|review my/.test(t)) return "demo";
  if (/service|ppc|seo|listing|ad|dsp|fba|reimburs|launch|review/.test(t)) return "agents";
  if (/human|team|contact|sales|support|talk/.test(t)) return "contact";
  return "fallback";
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function Waveform() {
  const bars = [
    { height: 6, delay: "0ms" },
    { height: 11, delay: "150ms" },
    { height: 8, delay: "300ms" },
  ];
  return (
    <span className="flex items-end gap-0.5" aria-hidden="true">
      {bars.map((bar, i) => (
        <span
          key={i}
          className="w-0.5 animate-bounce rounded-full bg-green-400"
          style={{ height: bar.height, animationDelay: bar.delay, animationDuration: "0.9s" }}
        />
      ))}
    </span>
  );
}

export function ChatWidget() {
  const reducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [everOpened, setEverOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "intro", from: "bot", text: "Hey! I'm the Knowledge Inn assistant. Ask me about our Amazon services, pricing, or book a free audit." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: reducedMotion ? "auto" : "smooth" });
  }, [messages, typing, open, reducedMotion]);

  function respond(key: string) {
    const r = RESPONSES[key] ?? RESPONSES.fallback;
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { id: makeId(), from: "bot", text: r.text, href: r.href, hrefLabel: r.hrefLabel }]);
    }, 850);
  }

  function handleQuickReply(qr: (typeof QUICK_REPLIES)[number]) {
    setMessages((m) => [...m, { id: makeId(), from: "user", text: qr.label }]);
    respond(qr.key);
  }

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { id: makeId(), from: "user", text }]);
    setInput("");
    respond(matchKey(text));
  }

  return (
    <>
      <div className="fixed right-6 bottom-6 z-50">
        <div className="relative size-14">
          <span className="chat-pulse-ring pointer-events-none absolute inset-0 rounded-full bg-green-500" aria-hidden="true" />

          {!everOpened && (
            <>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <span className="chat-orbit size-1.5 rounded-full bg-gold-400 shadow-[0_0_6px_rgba(217,164,65,0.8)]" />
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <span className="chat-orbit-reverse size-1 rounded-full bg-green-300 shadow-[0_0_6px_rgba(74,174,104,0.8)]" />
              </div>
            </>
          )}

          <motion.button
            type="button"
            onClick={() => {
              setOpen((o) => !o);
              setEverOpened(true);
            }}
            className="relative flex size-14 items-center justify-center rounded-full text-white shadow-[var(--shadow-elevated)]"
            style={{ background: "linear-gradient(135deg, var(--color-green-500) 0%, var(--color-green-700) 100%)" }}
            aria-label={open ? "Close chat" : "Open chat with the Knowledge Inn assistant"}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ rotate: -100, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 100, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-6 bottom-24 z-50 flex h-[32rem] max-h-[75vh] w-[min(24rem,calc(100vw-3rem))] flex-col overflow-hidden rounded-[var(--radius-xl)] border border-ink/10 bg-cream-100 shadow-[0_8px_40px_-8px_rgba(60,153,91,0.35),var(--shadow-elevated)]"
            role="dialog"
            aria-label="Knowledge Inn chat assistant"
          >
            <div className="section-forest noise-overlay flex items-center gap-3 px-5 py-4">
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-green-400 opacity-50 blur-md" aria-hidden="true" />
                <span className="relative flex size-9 items-center justify-center rounded-full bg-green-500/20 text-green-300">
                  <MessageCircle className="size-4" />
                </span>
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-white">Knowledge Inn Assistant</p>
                <div className="mt-0.5 flex items-center gap-1.5 text-xs text-forest-ink-muted">
                  <Waveform />
                  Online now
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              <AnimatePresence initial={false}>
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={cn("flex", m.from === "user" ? "justify-end" : "justify-start")}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                        m.from === "user" ? "bg-green-600 text-white" : "bg-cream-200 text-ink-700",
                      )}
                    >
                      {m.text}
                      {m.href && (
                        <Link href={m.href} className="mt-2 flex items-center gap-1 text-xs font-semibold text-green-700 hover:underline">
                          {m.hrefLabel}
                          <ArrowUpRight className="size-3" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {typing && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl bg-cream-200 px-4 py-3">
                    <span className="size-1.5 animate-bounce rounded-full bg-green-500" style={{ animationDelay: "0s" }} />
                    <span className="size-1.5 animate-bounce rounded-full bg-gold-400" style={{ animationDelay: "0.15s" }} />
                    <span className="size-1.5 animate-bounce rounded-full bg-green-500" style={{ animationDelay: "0.3s" }} />
                  </div>
                </motion.div>
              )}
            </div>

            {messages.length < 3 && (
              <div className="flex flex-wrap gap-2 border-t border-ink/8 px-5 py-3">
                {QUICK_REPLIES.map((qr) => (
                  <button
                    key={qr.key}
                    type="button"
                    onClick={() => handleQuickReply(qr)}
                    className="rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-medium text-green-800 transition-colors hover:border-green-400"
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-ink/8 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                aria-label="Message"
                className="h-10 flex-1 rounded-full border border-ink/15 bg-white px-4 text-sm text-ink outline-none focus:border-green-500"
              />
              <button
                type="submit"
                className="flex size-10 shrink-0 items-center justify-center rounded-full text-white transition-transform hover:scale-105"
                style={{ background: "linear-gradient(135deg, var(--color-green-500) 0%, var(--color-green-700) 100%)" }}
                aria-label="Send message"
              >
                <Send className="size-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
