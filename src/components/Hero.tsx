import { useEffect, useState } from "react";
import heroBanner from "../assets/HeroBanner.png"; // <-- FIXED PATH

const heroSrc = heroBanner;

function Content() {
  return (
    <div className="flex flex-col gap-2 md:gap-4 items-start max-w-5xl">
      <h1
        className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-tight"
        style={{ fontWeight: 900 }}
      >
        How the Immune System's Conversations Shape COVID-19 Severity
      </h1>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px]" data-name="Hero 1">
      <img
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={heroSrc}
      />

      <div className="relative flex items-end h-full px-6 md:px-12 lg:px-16 pb-12 md:pb-16">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-end">
          <Content />
          <p className="text-xs text-white/60 mb-2">AI generated image</p>
        </div>
      </div>
    </section>
  );
}

