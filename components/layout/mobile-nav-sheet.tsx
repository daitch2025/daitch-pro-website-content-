"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { MEGA_NAV } from "@/content/nav";
import { Logo } from "./logo";

export function MobileNavSheet() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
            <Menu className="size-5" />
          </Button>
        }
      />
      <SheetContent side="right" className="w-full max-w-sm overflow-y-auto bg-cream-100 p-0">
        <SheetHeader className="border-b border-ink/10 px-5 py-4">
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <Logo />
        </SheetHeader>

        <nav className="flex flex-col gap-1 px-3 py-4">
          <Accordion multiple>
            {MEGA_NAV.map((group) =>
              group.children ? (
                <AccordionItem key={group.label} value={group.label} className="border-b-0">
                  <AccordionTrigger className="px-2 text-base font-medium text-ink">{group.label}</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-0.5 pl-2">
                      {group.children.map((child) => (
                        <SheetClose
                          key={child.href}
                          render={
                            <Link href={child.href} className="rounded-lg px-3 py-2 text-sm text-ink-500 transition-colors hover:bg-ink/5 hover:text-ink">
                              {child.label}
                            </Link>
                          }
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <SheetClose
                  key={group.label}
                  render={
                    <Link href={group.href!} className="px-2 py-3 text-base font-medium text-ink">
                      {group.label}
                    </Link>
                  }
                />
              ),
            )}
          </Accordion>
        </nav>

        <div className="mt-auto flex flex-col gap-3 border-t border-ink/10 px-5 py-5">
          <SheetClose
            render={
              <Link href="/contact" className="text-center text-sm font-medium text-ink-700">
                Client Login
              </Link>
            }
          />
          <LinkButton href="/contact" size="lg" className="w-full">
            Get My Free Audit
          </LinkButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}
