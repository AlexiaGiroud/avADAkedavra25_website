import imgHero1 from "figma:asset/1ab55b149e165e48dc162c288733d5c2ae289c59.png";

function Content() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 items-start max-w-4xl">
      <p className="text-lg md:text-xl text-black/60">
        The story of
      </p>
      <h1 className="text-4xl md:text-6xl lg:text-7xl text-black">
        Cell - Cell communication and its impact on COVID 19 reaction
      </h1>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px]" data-name="Hero 1">
      <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgHero1} />
      <div className="relative flex items-center h-full px-6 md:px-12 lg:px-16 py-12 md:py-20">
        <div className="w-full max-w-7xl mx-auto">
          <Content />
          <a className="inline-block mt-8 text-sm text-black underline hover:no-underline" href="https://doi.org/10.61474/ncs.2023.00009">
            Image extracted from Nature Cell and Science Book
          </a>
        </div>
      </div>
    </section>
  );
}