export function UMAP() {
  return (
    <section id="umap" className="w-full bg-[#0b1220] py-20">
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-white uppercase tracking-tight"
            style={{ fontWeight: 700 }}
          >
            UMAP
          </h2>
        </div>

        <div className="mt-8">
          <div className="max-w-7xl mx-auto h-[1000px] rounded-2xl overflow-hidden">
            <iframe
              src={`${import.meta.env.BASE_URL}umap_website.html`}
              className="w-full h-full border-0 bg-white"
              title="UMAP"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
