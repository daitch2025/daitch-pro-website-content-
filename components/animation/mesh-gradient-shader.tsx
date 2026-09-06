"use client";

import { MeshGradient } from "@paper-design/shaders-react";

const PALETTES = {
  light: ["#F4F6F1", "#BFE8C7", "#4AAE68", "#D9A441", "#063A2F"],
  dark: ["#063A2F", "#1A4529", "#3C995B", "#D9A441", "#042A22"],
};

export function MeshGradientShader({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <MeshGradient
      colors={PALETTES[variant]}
      speed={0.35}
      distortion={0.75}
      swirl={0.35}
      grainMixer={0.05}
      grainOverlay={0.03}
      maxPixelCount={1_100_000}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
