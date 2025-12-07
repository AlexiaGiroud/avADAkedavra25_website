export function UMAP() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl text-white uppercase tracking-tight"
          style={{ fontWeight: 700 }}
        >
          UMAP
        </h2>

        <div className="mt-6 w-full h-[800px] rounded-2xl overflow-hidden">
          <iframe
            src={`${import.meta.env.BASE_URL}umap_website.html`}
            className="w-full h-full border-0 bg-white"
            title="UMAP"
          />
        </div>
      </div>
    </section>
  );
}
