import Link from "next/link";
import { Mail, Phone, ArrowUpRight, Layers, Workflow, Building2, Star, Bot, Sparkles } from "lucide-react";
import { FOOTER_NAV } from "@/content/nav";
import { INDUSTRIES } from "@/content/industries";
import { SITE } from "@/content/site";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Logo } from "./logo";

const COLUMNS = [
  { nav: FOOTER_NAV.solutions, icon: Layers },
  { nav: FOOTER_NAV.platform, icon: Workflow },
  { nav: FOOTER_NAV.company, icon: Building2 },
  { nav: FOOTER_NAV.benefits, icon: Star },
  { nav: FOOTER_NAV.aiProducts, icon: Bot },
  { nav: FOOTER_NAV.aiAgentProduct, icon: Sparkles },
];

const INDUSTRY_LINKS = INDUSTRIES.map((i) => ({ label: i.name, href: `/industries/${i.slug}/workflow` }));

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: SITE.social.linkedin,
    path: "M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.84v2.05h.05c.53-1 1.84-2.05 3.79-2.05C19.9 8 21 10.15 21 14.02V23h-4v-8.1c0-1.93-.03-4.42-2.69-4.42-2.7 0-3.11 2.11-3.11 4.28V23h-4V8z",
  },
  {
    label: "X",
    href: SITE.social.x,
    path: "M18.9 2H22l-7.6 8.7L23.3 22H16.7l-5.2-6.8L5.6 22H2.5l8.1-9.3L1.7 2h6.8l4.7 6.2L18.9 2zm-1.2 18h1.7L7.4 4H5.6l12.1 16z",
  },
  {
    label: "Instagram",
    href: SITE.social.instagram,
    path: "M12 2c2.7 0 3.1 0 4.1.06 1.1.05 1.8.2 2.4.45.6.25 1.1.6 1.6 1.1s.85 1 1.1 1.6c.25.6.4 1.3.45 2.4.05 1 .06 1.4.06 4.1s0 3.1-.06 4.1c-.05 1.1-.2 1.8-.45 2.4a4.4 4.4 0 0 1-1.1 1.6 4.4 4.4 0 0 1-1.6 1.1c-.6.25-1.3.4-2.4.45-1 .05-1.4.06-4.1.06s-3.1 0-4.1-.06c-1.1-.05-1.8-.2-2.4-.45a4.4 4.4 0 0 1-1.6-1.1 4.4 4.4 0 0 1-1.1-1.6c-.25-.6-.4-1.3-.45-2.4C2 15.1 2 14.7 2 12s0-3.1.06-4.1c.05-1.1.2-1.8.45-2.4.25-.6.6-1.1 1.1-1.6a4.4 4.4 0 0 1 1.6-1.1c.6-.25 1.3-.4 2.4-.45C8.9 2 9.3 2 12 2zm0 3.7A6.3 6.3 0 1 0 12 18.3 6.3 6.3 0 0 0 12 5.7zm0 2A4.3 4.3 0 1 1 12 16.3 4.3 4.3 0 0 1 12 7.7zm6.5-2.15a1.47 1.47 0 1 1-2.94 0 1.47 1.47 0 0 1 2.94 0z",
  },
];

export function Footer() {
  return (
    <footer className="section-forest noise-overlay relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] opacity-70"
        style={{ background: "radial-gradient(55% 60% at 18% 0%, rgba(60,153,91,0.22) 0%, transparent 70%), radial-gradient(45% 50% at 85% 10%, rgba(217,164,65,0.14) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[84rem] px-6 pt-16 lg:px-10 lg:pt-24">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div>
            <Logo dark />
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-forest-ink-muted uppercase">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-green-400" />
              </span>
              Your Amazon growth partner
            </span>
            <p className="mt-5 max-w-sm text-2xl leading-snug font-semibold text-balance text-white">
              Bigger sales. <span className="text-gradient-green">Better margins.</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-forest-ink-muted">{SITE.description}</p>
            <div className="mt-7 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex size-10 items-center justify-center rounded-full border border-white/15 text-forest-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-green-400 hover:bg-green-400/10 hover:text-green-400"
                  aria-label={social.label}
                >
                  <svg viewBox="0 0 24 24" className="size-4 fill-current">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-panel-dark rounded-[var(--radius-xl)] p-7 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-white">Get the Amazon growth playbook</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-forest-ink-muted">
              One email a month: PPC tactics, listing teardowns, algorithm changes, and what&apos;s actually working for brands scaling on Amazon right now.
            </p>
            <div className="mt-5">
              <NewsletterForm />
            </div>
            <p className="mt-3 text-xs text-forest-ink-muted/70">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 items-start gap-x-6 gap-y-10 border-b border-white/10 py-14 sm:grid-cols-3 lg:grid-cols-6">
          {COLUMNS.map(({ nav: col, icon: Icon }) => (
            <div key={col.title}>
              <div className="flex items-center gap-1.5 text-green-400">
                <Icon className="size-3.5" />
                <h3 className="text-xs font-semibold tracking-wider uppercase">{col.title}</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="group/link inline-flex items-center gap-1 text-sm text-forest-ink-muted transition-colors hover:text-white">
                      <span>{link.label}</span>
                      <ArrowUpRight className="size-3 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-b border-white/10 py-10">
          <h3 className="text-xs font-semibold tracking-wider text-green-400 uppercase">{FOOTER_NAV.industries.title}</h3>
          <div className="relative mt-5 -mx-6 lg:-mx-10 [mask-image:linear-gradient(to_right,transparent,black_5rem,black_calc(100%-5rem),transparent)]">
            <div className="animate-marquee flex w-max gap-3 px-6 hover:[animation-play-state:paused] lg:px-10">
              {[...INDUSTRY_LINKS, ...INDUSTRY_LINKS].map((link, i) => (
                <Link
                  key={`${link.href}-${i}`}
                  href={link.href}
                  tabIndex={i < INDUSTRY_LINKS.length ? undefined : -1}
                  aria-hidden={i < INDUSTRY_LINKS.length ? undefined : true}
                  className="shrink-0 rounded-full border border-white/10 px-4 py-1.5 text-xs text-forest-ink-muted transition-colors hover:border-green-400/60 hover:bg-green-400/10 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 py-10 sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
            <a href={SITE.emailHref} className="flex items-center gap-2 text-sm text-forest-ink-muted transition-colors hover:text-white">
              <Mail className="size-4 text-green-400" />
              {SITE.email}
            </a>
            <a href={SITE.phoneHref} className="flex items-center gap-2 text-sm text-forest-ink-muted transition-colors hover:text-white">
              <Phone className="size-4 text-green-400" />
              {SITE.phone}
            </a>
          </div>
          <p className="text-xs text-forest-ink-muted/70">© {new Date().getFullYear()} Knowledge Inn. All rights reserved.</p>
        </div>
      </div>

      <div className="pointer-events-none relative mt-4 select-none overflow-hidden" aria-hidden="true">
        <span
          className="block translate-y-[30%] text-center font-display leading-none font-bold text-white/[0.05]"
          style={{ fontSize: "clamp(5rem, 20vw, 18rem)" }}
        >
          Knowledge Inn
        </span>
      </div>
    </footer>
  );
}
