export function SingleCellDataset() {
  return (
    <div className="space-y-16">
      {/* Section Title */}
      <h3 className="text-3xl md:text-4xl text-white uppercase tracking-tight" style={{ fontWeight: 700, color: '#C07DFF' }}>
        Single-Cell RNA Sequencing Dataset
      </h3>

      {/* 5.1 General Info Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#2A2A2A] rounded-xl p-6 text-center border-2 border-[#D61C8C]/30">
          <div className="text-4xl mb-2" style={{ color: '#D61C8C', fontWeight: 900 }}>143</div>
          <div className="text-gray-300">Patients</div>
        </div>
        <div className="bg-[#2A2A2A] rounded-xl p-6 text-center border-2 border-[#C07DFF]/30">
          <div className="text-4xl mb-2" style={{ color: '#C07DFF', fontWeight: 900 }}>9</div>
          <div className="text-gray-300">Severities</div>
        </div>
        <div className="bg-[#2A2A2A] rounded-xl p-6 text-center border-2 border-[#F29900]/30">
          <div className="text-4xl mb-2" style={{ color: '#F29900', fontWeight: 900 }}>XXX</div>
          <div className="text-gray-300">Cells</div>
        </div>
      </div>

      {/* 5.2 Treemap Section (placeholder) */}
      <div className="space-y-6">
        <div className="bg-[#2A2A2A] rounded-xl p-12 border-2 border-[#C07DFF]/30 flex items-center justify-center min-h-[300px]">
          <p className="text-gray-400 text-xl text-center">
            📊 Place for Treemap interactive figure (placeholder)
          </p>
        </div>
        <div className="bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg">
            📝 What we can see on the Treemap.
          </p>
        </div>
      </div>

      {/* 5.3 UMAP (Initial Clustering) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* LEFT – UMAP (no purple background) */}
      <div className="lg:col-span-2 rounded-3xl p-0">
        <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden">
          <iframe 
            src="https://alexiagiroud.github.io/avADAkedavra25_website/umap_complete_website.html" 
            className="w-full h-[850px] border-0"
            title="UMAP colored by initial clustering"
            style={{ background: 'transparent' }}
          />
        </div>
      </div>

      {/* RIGHT – Text card (keeps purple accents) */}
      <div className="lg:col-span-1 bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30 flex items-center">
        <p className="text-gray-300 text-lg">
          📝 Text placeholder for UMAP insights
        </p>
      </div>

      </div>


      {/* 5.4 Dotplot (Gene Expression) */}
      <div className="space-y-6">
        <div className="bg-[#2A2A2A] rounded-xl p-12 border-2 border-[#C07DFF]/30 flex items-center justify-center min-h-[400px]">
          <p className="text-gray-400 text-xl text-center">
            📊 Place for Dotplot of gene expression
          </p>
        </div>
        <div className="bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg">
            📝 Why do we look at different severities?
          </p>
        </div>
      </div>
    </div>
  );
}
