"use client";

import { Megaphone, TrendingUp, Package, Search } from "lucide-react";
import { motion } from "motion/react";

const ITEMS = [
  { icon: Megaphone, label: "Advertising & Growth", active: true },
  { icon: TrendingUp, label: "Creative & Brand" },
  { icon: Package, label: "Operations & Logistics" },
  { icon: Search, label: "Listings & Content" },
];

export function SidebarNavMock() {
  return (
    <div className="flex h-full flex-col gap-1 border-r border-ink/8 p-3">
      <p className="px-2 pb-1 font-mono text-[9px] font-semibold tracking-widest text-ink-300 uppercase">Services</p>
      {ITEMS.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
          className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium ${
            item.active ? "bg-green-600 text-white" : "text-ink-500"
          }`}
        >
          <item.icon className="size-3.5 shrink-0" />
          <span className="hidden truncate sm:inline">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
