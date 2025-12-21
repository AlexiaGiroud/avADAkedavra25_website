export function SeveritiesSection() {
  return (
    <div className="space-y-16">
      {/* Subsection Title */}
      <div className="bg-gradient-to-r from-[#D61C8C] via-[#C07DFF] to-[#6811BA] rounded-2xl p-1">
        <div className="bg-[#000000] rounded-xl p-6">
          <h3 className="text-3xl md:text-4xl text-white uppercase tracking-tight" style={{ fontWeight: 700 }}>
            Severities
          </h3>
        </div>
      </div>

      {/* Intro Text */}
      <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
        <p className="text-gray-300 text-lg leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
          In clinical practice, disease severity is typically defined by physicians based on a patient's symptoms. This classification helps guide medical decisions, such as whether a patient can safely recover at home or requires hospitalization, and it provides an indication of the risk of potential clinical deterioration. In our dataset, each patient is assigned a severity level corresponding to their clinical status on the day the sample was collected.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
          But what does a given severity level actually mean from the immune system's perspective? Disease severity is not only reflected in symptoms, but also in which immune cell types are mobilized and how actively they participate in the response. Different stages of COVID-19 are characterized by shifts in immune cell composition and activation states, as the immune system adapts (or sometimes overreacts) to the infection.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed" style={{ textAlign: 'justify' }}>
          To capture these dynamics, we visualize the data using UMAPs stratified by disease severity. By comparing UMAPs across severity levels, we can observe how the immune landscape evolves, revealing which cell populations expand, contract, or change their behavior as the disease progresses.
        </p>
      </div>

      {/* UMAP of the cells per severity - Title removed */}
      <div className="space-y-6">
        <div className="flex justify-center">
          <iframe
            src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/exploration/umap_website.html"
            className="w-full h-[600px] lg:h-[700px] border-0 rounded-xl"
            title="UMAP per Severity"
            style={{ background: 'transparent' }}
          />
        </div>

        <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg leading-relaxed" style={{ textAlign: 'justify' }}>
            To simplify this comparison, we focus on three representative severity groups: mild, moderate, and critical COVID-19. When visualizing one UMAP per severity, we observe that the overall structure of the immune landscape remains largely conserved across conditions. The global shape of the UMAP does not drastically change, suggesting that the main immune cell types are present at all stages of the disease.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4" style={{ textAlign: 'justify' }}>
            That said, subtle differences do emerge, particularly when zooming into specific regions of the UMAP, for example "Mono prolif". These variations hint at changes in immune composition or activation states between severities. However, differences in the total number of cells sampled for each severity make it difficult to draw strong conclusions from these visualizations alone. Rather than focusing on spatial rearrangements in the UMAP, a more informative approach is to quantify how immune cell populations shift with disease severity.
          </p>
        </div>
      </div>

      {/* Proportions of cells per severity - Title removed */}
      <div className="space-y-6">
        <div className="flex justify-center">
          <iframe
            src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/exploration/stacked_celltype_by_status_plotly.html"
            style={{ 
              width: "100%",
              height: "700px",
              border: "none",
              background: "transparent"
            }}
            title="Cell-type Proportions"
          />
        </div>

        <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
            To move beyond visualization in UMAP space, we next examine a stacked horizontal bar plot showing the proportions of different immune cell types across all disease severity groups. Unlike the previous comparison limited to a subset of severities, this representation allows us to directly compare how the immune landscape shifts in the different severities of the disease.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
            Some trends begin to emerge from this plot. For example, as disease severity worsens, we observe a progressive reduction in CD4 T cells alongside an increase in plasmablasts. Such changes suggest a rebalancing of the immune response as COVID-19 progresses, with certain cell populations becoming depleted while others expand. Overall, this plot highlights that different stages of the disease are characterized by distinct immune cell compositions. These shifts in cell-type proportions provide a first layer of biological differentiation between severities, setting the stage for deeper analyses of how immune function and communication evolve with disease progression. This results corroborates the results found in the paper provided to start this project.
          </p>
        </div>
      </div>

      {/* The Next Step */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 bg-gradient-to-br from-[#D61C8C] to-[#6811BA] rounded-xl p-8 flex items-center justify-center">
          <h4 className="text-white text-2xl md:text-3xl text-center" style={{ fontWeight: 700 }}>
            The Next Step
          </h4>
        </div>
        <div className="md:col-span-3 bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg leading-relaxed" style={{ textAlign: 'justify' }}>
            Having established that immune cell proportions change with disease severity, we next ask a deeper question: do cells of the same type behave differently at different stages of the disease? Even when a given immune cell population is present, variations in gene expression (particularly for ligands and receptors) can profoundly alter how these cells communicate with others. To investigate this, we focus on severity-dependent changes in gene expression within the same cell types. Such differences could reshape cell-cell communication networks, amplifying or dampening specific immune signaling pathways as the disease progresses. To systematically analyze these interactions, we turn to CellPhoneDB, a computational framework specifically designed to infer biologically meaningful ligand-receptor interactions from single-cell transcriptomic data. By applying this method across disease severities, we aim to uncover how immune cell conversations are rewired over the course of COVID-19 and how these changes may contribute to differences in clinical outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}