import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScrollProvider } from "@/components/animation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Preloader } from "@/components/layout/preloader";
import { ChatWidget } from "@/components/layout/chat-widget";
import { fontVariables } from "@/lib/fonts";
import { SITE } from "@/content/site";
import { organizationSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name + " — " + SITE.tagline,
    template: "%s | " + SITE.name,
  },
  description: SITE.description,
  openGraph: {
    title: SITE.name + " — " + SITE.tagline,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name + " — " + SITE.tagline,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} h-full overflow-x-hidden antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-background text-foreground">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
        <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false} disableTransitionOnChange>
          <Preloader />
          <TooltipProvider delay={150}>
            <SmoothScrollProvider>
              <Header />
              {children}
              <Footer />
            </SmoothScrollProvider>
            <ChatWidget />
          </TooltipProvider>
          <Toaster position="bottom-left" />
        </ThemeProvider>
      </body>
    </html>
  );
}
