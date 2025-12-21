export function SingleCellDataset() {
  return (
    <div className="space-y-16">
      {/* General Information - One Line with Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#2A2A2A] rounded-xl p-8 text-center border-2 border-[#D61C8C]/40">
          <div className="text-5xl md:text-6xl mb-3" style={{ color: '#D61C8C', fontWeight: 900 }}>143</div>
          <div className="text-gray-300 text-lg">Patients</div>
        </div>
        <div className="bg-[#2A2A2A] rounded-xl p-8 text-center border-2 border-[#C07DFF]/40">
          <div className="text-5xl md:text-6xl mb-3" style={{ color: '#C07DFF', fontWeight: 900 }}>6</div>
          <div className="text-gray-300 text-lg">Severity Levels</div>
        </div>
        <div className="bg-[#2A2A2A] rounded-xl p-8 text-center border-2 border-[#F29900]/40">
          <div className="text-5xl md:text-6xl mb-3" style={{ color: '#F29900', fontWeight: 900 }}>640k+</div>
          <div className="text-gray-300 text-lg">Cells</div>
        </div>
      </div>

      {/* Introductory Text */}
      <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
        <p className="text-gray-300 text-lg leading-relaxed" style={{ textAlign: 'justify' }}>
          To explore this question, we relied on a dataset combining single-cell transcriptomic data, surface proteomic profiles, and T and B lymphocyte antigen receptor analyses. The dataset includes over 647,366 peripheral blood mononuclear cells collected from a cross-sectional cohort of 143 patients spanning 6 levels of COVID-19 severity. For each cell, detailed information is available not only about the cell itself, but also about the patient it came from, including age, sex, smoking status, disease onset, and clinical severity.
        </p>
      </div>

      <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
        <p className="text-gray-300 text-lg leading-relaxed" style={{ textAlign: 'justify' }}>
          As a first step, we focused on identifying immune cell types, since different populations play distinct roles and are activated at specific stages of an immune response. Understanding which immune cells are present and active can therefore provide valuable insight into disease progression. The dataset offers two levels of cellular clustering: a broader, initial classification and a more detailed, fine-grained clustering, visualized in our interactive Treemap as outer and inner rectangles respectively. While the finer clustering reveals subpopulations - such as naïve CD4 cells within the larger CD4 group - the initial clustering remains a reliable representation of the overall immune landscape. Misclassifications between the two are minimal, with, for example, only 0.8% of cells labeled as B cells in the initial clustering corresponding to NKT cells in the finer analysis. Given its robustness and clarity, we decided to use the initial clustering as the foundation for our subsequent analyses.
        </p>
      </div>

      {/* Treemap of cell proportions */}
      <div className="space-y-6">
        <div className="flex justify-center">
          <iframe
          src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/exploration/treemap_mode_mapped.html"
          style={{ 
            width: "1200px",
            height: "650px",   // Ajuste si tu veux la taille exacte de ton HTML
            border: "none",
            background: "transparent"
          }}
          title="Treemap: mode mapped"
        />
      </div>
      </div>
      
      {/* UMAP colored by initial clustering - Title removed */}
      <div className="space-y-6">
        {/* Changed layout to 60% Figure - 40% Text */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Figure - 60% */}
          <div className="lg:col-span-3">
              <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden">
                <iframe 
                  src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/exploration/umap_complete_website.html" 
                  style={{ 
                    width: "100%",
                    height: "850px",   // Ajuste si tu veux la taille exacte de ton HTML
                    border: "none",
                    background: "transparent"
                  }}
                  title="UMAP of all the cells in the dataset"
                />
              </div>
          </div>

          {/* Text - 40% */}
          <div className="lg:col-span-2">
            <div className="bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30 h-full flex flex-col justify-center">
              <p className="text-gray-300 leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
                As mentioned earlier, immune cell types differ in their biological characteristics, such as gene expression and surface protein profiles, which allows them to be grouped into distinct clusters. To visualize these differences, a UMAP (Uniform Manifold Approximation and Projection) is used, a dimensionality-reduction technique that compresses complex, high-dimensional single-cell data into two dimensions while preserving meaningful relationships between cells. In this representation, each point corresponds to a single cell, and cells with similar transcriptional and proteomic profiles naturally group together.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
                The resulting UMAP reveals a clear and structured organization of the immune landscape. Major immune populations are distinctly separated, including multiple T cell subsets, B cell lineage, monocytes and dendritic cells. Additional clusters correspond to lymphoid progenitors, hematopoietic stem cells, and a small number of non-immune contaminants such as red blood cells and platelets.
              </p>
              <p className="text-gray-300 leading-relaxed" style={{ textAlign: 'justify' }}>
                Overall, the strong segregation of these diverse populations highlights the substantial transcriptional heterogeneity captured in the dataset. This clear clustering not only confirms the high quality and resolution of the data, but also provides a solid foundation for downstream analyses - such as differential gene expression and ligand-receptor interaction mapping - by enabling precise, cell-type-specific exploration of immune communication across COVID-19 severities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dotplot of gene expression - Title removed */}
      <div className="space-y-6">
        <div className="flex justify-center">
          <iframe
            src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/exploration/dotplot_gene_expression.html"
            style={{ 
              width: "100%",
              height: "820px",   // Ajuste si tu veux la taille exacte de ton HTML
              border: "none",
              background: "transparent"
            }}
            title="Dotplot of Gene Expression"
          />
        </div>

        <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
            Now that we have identified the different immune cell types present in the dataset, we can move one step deeper and examine the genes they express. A cell's gene expression profile determines not only its identity, but also the types of interactions it can engage in with other cells. One of the most important communication mechanisms used by immune cells is receptor-ligand signaling. For instance, antigen presentation by Dendritic Cells and the subsequent activation of T cells relies on interactions between MHC molecules and CD4 or CD8 receptors. For such communication to occur, both interacting cells must express the appropriate ligands and receptors.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
            To explore these molecular interactions, we use a dot plot to visualize gene and protein expression across immune cell clusters. In this representation, each row corresponds to a distinct cell cluster, while each column represents a selected gene of interest. Color intensity reflects the level of expression, with purple indicating high expression, orange medium expression, and pink low or absent expression. Dot size conveys how widespread that expression is within a cluster: larger dots indicate that a greater proportion of cells express the marker, whereas smaller dots reflect more restricted expression patterns. Reading across a row reveals the characteristic expression signature - or molecular fingerprint - of a given cell type, while reading down a column highlights which cell populations express a specific gene or protein, helping identify lineage-specific or functionally important markers.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed" style={{ textAlign: 'justify' }}>
            By mapping these expression patterns, we can begin to infer how immune cell communication may change in the context of COVID-19. If disease progression alters ligand or receptor expression, these changes are likely to differ across stages of severity, ultimately reshaping the network of immune interactions.
          </p>
        </div>
      </div>
    </div>
  );
}