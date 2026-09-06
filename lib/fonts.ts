import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";

export const fontDisplay = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const fontSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const fontMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const fontVariables = `${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`;
