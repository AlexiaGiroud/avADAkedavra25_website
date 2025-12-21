import React from 'react';
import imgHero1 from '../assets/abae2ce4402ffd267d03df7476134886e0fe5379.png';

function Content() {
  return (
    <div className="flex flex-col gap-2 md:gap-4 items-start max-w-5xl">
      <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl text-white uppercase" style={{ fontWeight: 900 }}>
        How the Immune System's Conversations Shape COVID-19 Severity
      </h1>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[500px] max-h-[900px]" data-name="Hero 1">
      <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgHero1} />
      <div className="relative flex items-end h-full px-4 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-16">
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-end gap-4">
          <Content />
          <p className="text-xs text-white/60 mb-1 md:mb-2 whitespace-nowrap">
            AI generated image
          </p>
        </div>
      </div>
    </section>
  );
}