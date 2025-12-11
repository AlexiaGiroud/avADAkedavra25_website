export function SeveritiesSection() {
  return (
    <div className="space-y-16">
      {/* Section Title */}
      <h3 className="text-3xl md:text-4xl text-white uppercase tracking-tight" style={{ fontWeight: 700, color: '#C07DFF' }}>
        Severities
      </h3>

      {/* 6.1 Intro Row (3 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-1 flex justify-center">
          <div className="w-32 h-32 bg-[#2A2A2A] rounded-full flex items-center justify-center text-6xl">
            🦠
          </div>
        </div>
        <div className="md:col-span-2 bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg">
            📝 Why do we look at different severities?
          </p>
        </div>
        <div className="md:col-span-2 bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg">
            📝 How did we separate by severities?
          </p>
        </div>
      </div>

      {/* 6.2 Intro Paragraph */}
      <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
        <p className="text-gray-300 text-lg leading-relaxed">
          📝 Intro severities
        </p>
      </div>

      {/* 6.3 UMAP per Severity */}
      <div className="space-y-6">
        <iframe
          src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/umap_website.html"
          className="w-full"
          style={{ 
            height: "620px",   // Adjust here the height to fit your HTML content
            border: "none",
            background: "transparent"
          }}
          title="Dotplot: gene expression"
        />
        </div>
        <div className="bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg">
            📝 Placeholder text for UMAP per severity insights
          </p>
      </div>

      {/* 6.4 Cell-type Proportions per Severity */}
      <div className="space-y-6">
        <iframe
          src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/stacked_celltype_by_status_plotly.html"
          className="w-full"
          style={{ 
            height: "620px",   // Adjust here the height to fit your HTML content
            border: "none",
            background: "transparent"
          }}
          title="Dotplot: gene expression"
        />
        </div>
        <div className="bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg">
            📝 Placeholder text for cell-type proportions
          </p>
      </div>

      {/* 6.5 Next Steps Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 bg-gradient-to-br from-[#D61C8C] to-[#6811BA] rounded-xl p-6 flex items-center justify-center">
          <h4 className="text-white text-2xl text-center" style={{ fontWeight: 700 }}>
            The Next Step
          </h4>
        </div>
        <div className="md:col-span-3 bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg">
            📝 Explain why we change and look at cell communication
          </p>
        </div>
      </div>
    </div>
  );
}
