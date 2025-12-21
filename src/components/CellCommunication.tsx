import { useState } from 'react';

type SeverityType = 'Healthy' | 'Mild' | 'Moderate' | 'Severe' | 'Critical';

const severityColors: Record<SeverityType, string> = {
  'Healthy': '#FFBC47',
  'Mild': '#F29900',
  'Moderate': '#FFC9E9',
  'Severe': '#D61C8C',
  'Critical': '#6811BA',
};

const networkDescriptions: Record<SeverityType, string> = {
  'Healthy': 'In a healthy individual, the immune cell network is organized around CD14+ Monocytes, which act as the central communication hub. These cells are the most active and connected because they are responsible for maintaining the body\'s baseline stability, or homeostasis, and constantly "checking in" with other immune cells. Closer to this center are the CD16+ NK (Natural Killer) cells, which maintain a semi-active role to bridge the gap between the body\'s immediate defenses and its long-term memory. In contrast, specialized fighters like CD4+ T cells are located on the far edges of the network with very few interactions. This peripheral position indicates that they are currently "quiescent," or in a resting state, waiting to be activated only when a specific threat, like a virus, is detected.',
  'Mild': 'In mild COVID-19 cases, the immune network undergoes a significant reorganization. While CD14+ Monocytes remain active, they step back from their primary leadership role, allowing CD16+ NK (Natural Killer) cells to emerge as the new dominant hub. These NK cells become the most connected part of the system, acting as first responders that coordinate with T cells to launch an immediate attack on the virus. This shift confirms that the body\'s innate immune system is fully engaged in early defense. We also see Proliferating Monocytes increasing their activity as the body rapidly produces new cells, while Dendritic Cells - which were effectively invisible in the healthy state - appear in the network to assist in signaling the disease\'s onset.',
  'Moderate': 'In the moderate condition, the immune network solidifies its focus on active combat, with CD16+ NK cells maintaining their position as the primary communication hub to direct the "kill" signals against the virus. While CD14+ Monocytes are still central, they shift into a supporting role, stepping back to let these cytotoxic (cell-killing) teams take full control of the coordination. We also see a surge in connectivity among Proliferating Monocytes and Lymphocytes, indicating that the immune system is working overtime to rapidly divide and generate new cells to replace those lost in the fight. Simultaneously, γδ (Gamma-Delta) T cells become critical players, increasing their connections to act as a bridge between the initial innate response and the more specialized adaptive immune system as the illness escalates.',
  'Severe': 'In the severe condition, the network reveals critical signs of immune system strain and exhaustion. While CD16+ NK cells remain the central hub, their overall activity begins to decline, shifting focus toward Proliferating Monocytes, which increase their interactions as the body drastically ramps up cell production to sustain the inflammation. Simultaneously, specialized fighters like γδ T cells and CD8+ T cells largely disconnect from the network. This reduction in connectivity suggests "T-cell exhaustion," a state where these crucial defenders become overworked and unresponsive due to the prolonged and intense battle against the virus.',
  'Critical': 'In the critical condition, the immune network becomes dangerously unbalanced and effectively enters a state of panic. The CD16+ NK cells become the sole focus of communication, drastically increasing their activity and connections as they attempt to manage the crisis alone. While this specific cell type is in overdrive, the rest of the immune team, including T cells and Dendritic Cells, disconnects and falls silent. This extreme centralization represents a collapse of coordination: the immune system is stuck in a "shouting match" of inflammation without the strategic support needed to actually resolve the infection.',
};

export function CellCommunication() {
  const [selectedNetwork, setSelectedNetwork] = useState<SeverityType>('Healthy');
  const [selectedBubble, setSelectedBubble] = useState<SeverityType>('Healthy');
  const [selectedSankey, setSelectedSankey] = useState<SeverityType>('Mild');

  const severities: SeverityType[] = ['Healthy', 'Mild', 'Moderate', 'Severe', 'Critical'];
  const sankeyOptions: SeverityType[] = ['Mild', 'Moderate', 'Severe', 'Critical'];

  return (
    <div className="space-y-16">
      {/* Subsection Title */}
      <div className="bg-gradient-to-r from-[#D61C8C] via-[#C07DFF] to-[#6811BA] rounded-2xl p-1">
        <div className="bg-[#000000] rounded-xl p-6">
          <h3 className="text-3xl md:text-4xl text-white uppercase tracking-tight" style={{ fontWeight: 700 }}>
            Looking at how cells communicate
          </h3>
        </div>
      </div>

      {/* Which cells communicate with each other? */}
      <div className="space-y-8">
        <h4 className="text-2xl md:text-3xl text-white" style={{ fontWeight: 600, color: '#C07DFF' }}>
          Which cells communicate with each other?
        </h4>

        {/* Severity Buttons - Bigger and full width */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {severities.map((severity) => (
            <button
              key={severity}
              onClick={() => setSelectedNetwork(severity)}
              className={`px-8 py-6 rounded-xl transition-all ${
                selectedNetwork === severity
                  ? 'transform scale-105 shadow-2xl'
                  : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: severityColors[severity],
                color: '#fff',
                border: selectedNetwork === severity ? '3px solid white' : '3px solid transparent',
                fontWeight: 700,
                fontSize: '1.3rem',
              }}
            >
              {severity}
            </button>
          ))}
        </div>

        {/* New Layout: 25% Text - 75% Figure */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Text - 25% - Left aligned, not justified */}
          <div className="lg:col-span-1 bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30 flex items-center">
            <p className="text-gray-300 leading-relaxed" style={{ textAlign: 'left' }}>
              {networkDescriptions[selectedNetwork]}
            </p>
          </div>

          {/* Figure - 75% */}
          <div className="lg:col-span-3">
            <iframe
              src={`https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/communication/network_LR/network_LR_${selectedNetwork === 'Healthy' ? 'Healthy%20' : selectedNetwork}.html`}
              className="w-full h-[700px] border-0 rounded-xl"
              title={`${selectedNetwork} Network`}
              style={{ background: 'transparent' }}
            />
          </div>
        </div>
      </div>

      {/* Conclusion on the networks */}
      <div className="bg-gradient-to-br from-[#D61C8C]/20 to-[#6811BA]/20 rounded-xl p-8 border-2 border-[#C07DFF]/50">
        <h4 className="text-2xl text-white mb-6" style={{ fontWeight: 600, color: '#C07DFF' }}>
          Conclusion on the networks
        </h4>
        <p className="text-gray-300 text-lg leading-relaxed">
          Comparing these stages reveals how the immune system attempts to adapt to the virus but eventually becomes overwhelmed. The network begins as a balanced surveillance system led by Monocytes, but shifts to an aggressive combat mode led by NK cells during mild and moderate infection. As the disease worsens, however, this coordination breaks down: crucial T cells become exhausted and disconnect, forcing the body to rely on other cells. By the critical stage, the organized defense has collapsed into a panicked, isolated response where the remaining active cells are disconnected from the rest of the immune team.
        </p>
      </div>

      {/* Interaction load per cell type */}
      <div className="space-y-6">
        <div className="flex justify-center">
          <iframe
            src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/communication/interaction_load_per_celltype_severity.html"
            className="w-full h-[600px] lg:h-[700px] border-0 rounded-xl"
            title="Interaction load per cell type"
            style={{ background: 'transparent' }}
          />
        </div>

        <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg leading-relaxed">
            Here we see two key points: first, some immune cells clearly participate in more significant interactions than others, as shown by their taller bars; second, what ultimately matters biologically is not just how many interactions there are, but which specific ligand-receptor pairs and pathways are involved. This is why the analysis focuses on specific interacting ligand-receptor pairs, because only by examining those concrete pairs can we understand which signaling pathways differ across severities rather than just how many total interactions each cell type has.
          </p>
        </div>
      </div>

      {/* Bubble plots - vertical layout with buttons on left */}
      <div className="space-y-8">
        <h4 className="text-2xl md:text-3xl text-white" style={{ fontWeight: 600, color: '#C07DFF' }}>
          Top Ligand-Receptor Interactions by Severity
        </h4>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Buttons Column */}
          <div className="lg:col-span-1 flex flex-row lg:flex-col gap-4">
            {severities.map((severity) => (
              <button
                key={severity}
                onClick={() => setSelectedBubble(severity)}
                className={`px-6 py-4 rounded-xl transition-all flex-1 ${
                  selectedBubble === severity
                    ? 'transform scale-105 shadow-xl'
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: severityColors[severity],
                  color: '#fff',
                  border: selectedBubble === severity ? '2px solid white' : '2px solid transparent',
                  fontWeight: 600,
                }}
              >
                {severity}
              </button>
            ))}
          </div>

          {/* Bubble Plot */}
          <div className="lg:col-span-4">
            <iframe
              src={`https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/communication/bubbles/bubble_${severities.indexOf(selectedBubble) + 1}.%20${selectedBubble}.html`}
              className="w-full h-[700px] border-0 rounded-xl"
              title={`Bubble plot ${selectedBubble}`}
              style={{ background: 'transparent' }}
            />
          </div>
        </div>

        <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg leading-relaxed">
            Across all disease groups, the loudest signals come from the same small set of ligand–receptor pairs, as if every stage of COVID-19 relies on a shared "baseline vocabulary" of communication. CD320–JAML, ANXA1–FPR1/2, CD99–PILRA, and CCL5–CCR1 repeatedly appear among the most highly expressed interactions, suggesting core roles in leukocyte adhesion, trafficking, and resolution or modulation of inflammation that the immune system uses in health and disease alike. Even so, the specificity of these pairs shifts with severity, with some connections becoming more tightly focused on particular cell–cell contacts in severe and critical disease. This repeated prominence across severities makes them look almost like housekeeping communication axes, fundamental circuits that remain active and strong regardless of how mild or severe the infection becomes, even though their exact cellular wiring and functional consequences can still shift with disease state.
          </p>
        </div>
      </div>

      {/* Top interactions CD14 and CD16 */}
      <div className="space-y-6">
        <div className="flex justify-center">
          <iframe
            src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/top_interactions_CD14_CD16_N10.html"
            className="w-full h-[600px] lg:h-[700px] border-0 rounded-xl"
            title="Top interactions CD14 and CD16"
            style={{ background: 'transparent' }}
          />
        </div>

        <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg leading-relaxed">
            Across disease stages, some connections are gained, others are lost, and even for conserved pairs the interaction strength sometimes rises and sometimes fades, giving a sense of dynamic rewiring in how CD14/CD16 monocytes communicate. Here the focus is on one specific cell–cell pair, but the same "switching on and off" of interactions appears again and again across the broader network. CCL3–CCR1 and CD48–CD244 dominate in healthy, mild, and moderate stages before waning in severe and critical disease, as if early inflammatory recruitment and checkpoint/co‑stimulatory channels gradually hand over to alternative pathways as pathology deepens. CCL3–CCR3 behaves even more dramatically, present only in healthy, mild, and moderate patients and then vanishing in severe and critical cases, pointing to a very selective shutdown of this chemokine route. In contrast, PTPRC–MRC1 is silent in healthy donors but emerges with disease, hinting at a pathology‑associated contact axis between T cells and M2‑like macrophages that is "installed" as inflammation takes hold. ANXA1–FPR1 traces a bell‑shaped curve, ramping up from healthy to severe stages and then dropping again in critical patients, evocative of a pro‑resolving pathway that intensifies with activation and may then become exhausted, down‑regulated, or rerouted through other receptors at the most advanced stage.
          </p>
        </div>
      </div>

      {/* Interactive exploration */}
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-[#D61C8C]/20 to-[#6811BA]/20 rounded-xl p-6 border-2 border-[#C07DFF]/50">
          <p className="text-white text-xl text-center" style={{ fontWeight: 600 }}>
            And now we let you play around to investigate how communication changes across cell pairs!
          </p>
        </div>

        <div className="flex justify-center">
          <iframe
            src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/communication/top_interactions_all_severities_interactive.html"
            className="w-full h-[700px] border-0 rounded-xl"
            title="Interactive exploration"
            style={{ background: 'transparent' }}
          />
        </div>
      </div>

      {/* DEG Section */}
      <div className="bg-gradient-to-r from-[#D61C8C] via-[#C07DFF] to-[#6811BA] rounded-2xl p-1 mt-16">
        <div className="bg-[#000000] rounded-xl p-6">
          <h3 className="text-2xl md:text-3xl text-white uppercase tracking-tight" style={{ fontWeight: 700 }}>
            Differentially expressed genes
          </h3>
        </div>
      </div>

      <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
        <p className="text-gray-300 text-lg leading-relaxed">
          Differential gene expression (DEG) analysis was performed to quantify transcriptional changes associated with disease severity. For each cell type, gene expression levels in COVID-19 samples were compared against a healthy reference group, and differential expression was summarized using the log fold change (logFC). The logFC represents the logarithm of the ratio between gene expression in a given disease severity and the corresponding expression in healthy samples, such that positive values indicate upregulation and negative values indicate downregulation relative to the healthy baseline.
        </p>
      </div>

      {/* DEG logFC progression */}
      <div className="space-y-6">
        <div className="flex justify-center">
          <iframe
            src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/communication/DEG_logFC_progression.html"
            className="w-full h-[700px] border-0 rounded-xl"
            title="DEG logFC progression"
            style={{ background: 'transparent' }}
          />
        </div>

        <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The progression heatmap reveals a staged and non-monotonic reorganization of DEG-driven cell-cell interactions across disease severity. Early disease stages (Mild-Moderate) are characterized by prominent immune regulatory and contact-mediated interactions, including co-stimulatory and inhibitory signaling such as CD86→CD28 and CD86→CTLA4, as well as adhesion and recognition pathways including SIRPG→CD47 and CD48↔CD244. Several of these interactions, notably PTPRC→CD22 and SIRPG→CD47, exhibit strong upregulation in Mild and Moderate disease but attenuate in later stages, indicating tightly regulated early immune activation rather than progressive amplification.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            As disease severity increases, an intermediate phase emerges in which chemokine-driven recruitment and immune amplification dominate, exemplified by interactions such as CCL3→CCR1 and DPP4→CXCL2, which peak in Moderate to Severe disease and mark a transition toward enhanced immune cell influx and signaling escalation. In Severe and Critical stages, the interaction landscape shifts toward late-stage programs enriched for endothelial-associated signaling, including sustained ESAM→ESAM interactions, consistent with vascular involvement and tissue stress. Notably, the ANXA1-FPR1/FPR2 axis remains consistently downregulated across stages, suggesting a persistent impairment of signaling pathways associated with inflammatory resolution.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            The Critical stage is not characterized by a global amplification of interactions; rather, multiple early and intermediate DEG-driven interactions diminish or disappear, indicating a shift in the composition of the cell–cell communication landscape at the most severe stage.
          </p>
        </div>
      </div>

      {/* Summary of interactions table */}
      <div className="space-y-6">
        <h4 className="text-2xl md:text-3xl text-white" style={{ fontWeight: 600, color: '#C07DFF' }}>
          Summary of interactions
        </h4>

        <div className="overflow-x-auto rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(192,125,255,0.6),_0_30px_60px_rgba(192,125,255,0.35)]"
             style={{
               boxShadow: '0 0 0 1px rgba(192, 125, 255, 0.35), 0 20px 40px rgba(192, 125, 255, 0.15)', 
             }}>
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ backgroundColor: '#C07DFF' }}>
                <th className="p-4 text-left text-white border-r-2 border-white/30" style={{ fontWeight: 700 }}>Phase</th>
                <th className="p-4 text-left text-white border-r-2 border-white/30" style={{ fontWeight: 700 }}>Interaction(s)</th>
                <th className="p-4 text-left text-white" style={{ fontWeight: 700 }}>Primary Biological Function</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: '#ffffff' }}>
              {[...Array(6)].map((_, i) => (
                <tr key={i} className="border-t-2 border-gray-300">
                  <td className="p-4 text-gray-700 border-r-2 border-gray-300">📝 Complete here</td>
                  <td className="p-4 text-gray-700 border-r-2 border-gray-300">📝 Complete here</td>
                  <td className="p-4 text-gray-700">📝 Complete here</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sankey plots */}
      <div className="space-y-8">
        <h4 className="text-2xl md:text-3xl text-white" style={{ fontWeight: 600, color: '#C07DFF' }}>
          Severity-Specific Interaction Pathways
        </h4>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Buttons Column */}
          <div className="lg:col-span-1 flex flex-row lg:flex-col gap-4">
            {sankeyOptions.map((severity) => (
              <button
                key={severity}
                onClick={() => setSelectedSankey(severity)}
                className={`px-6 py-4 rounded-xl transition-all flex-1 ${
                  selectedSankey === severity
                    ? 'transform scale-105 shadow-xl'
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: severityColors[severity],
                  color: '#fff',
                  border: selectedSankey === severity ? '2px solid white' : '2px solid transparent',
                  fontWeight: 600,
                }}
              >
                {severity}
              </button>
            ))}
          </div>

          {/* Sankey Plot */}
          <div className="lg:col-span-4">
            <iframe
              src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/severities_sankey.html"
              className="w-full h-[700px] border-0 rounded-xl"
              title="Sankey diagram"
              style={{ background: 'transparent' }}
            />
          </div>
        </div>

        <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg leading-relaxed">
            The severity-specific Sankey plots provide a functional view of how DEG-driven ligand-receptor interactions evolve across disease progression. In Mild disease, interactions are dominated by pathways regulating immune activation and cell-cell crosstalk, including co-stimulatory and inhibitory signaling (CD86→CD28, CD86→CTLA4) and recognition pathways (CD47→SIRPG, CD48 → CD244), consistent with controlled immune regulation. Chemokine signaling (CCL5→CCR1, CCL5→CCR4) is already detectable but remains limited, suggesting basal immune surveillance. In Moderate disease, recruitment-associated interactions increase in prominence, notably CCL3→CCR1 and CXCL2/DPP4-related pathways, indicating enhanced inflammatory cell recruitment and amplification of immune signaling. In Severe disease, interactions such as ESAM→ESAM and CD320→JAML emerge, consistent with increased endothelial-leukocyte adhesion and disruption of the blood–tissue barrier, while several early regulatory interactions are reduced or lost, reflecting diminished contribution of pathways regulating immune activation thresholds under sustained inflammation. Across all severities, interactions involving the ANXA1-FPR1/FPR2 axis remain downregulated, indicating impaired engagement of inflammatory resolution pathways. In the Critical stage, late-stage interactions such as these persist, whereas multiple early and intermediate interactions are absent, indicating a redistribution of DEG-driven interactions toward pathways associated with tissue stress and barrier dysfunction.
          </p>
        </div>
      </div>
    </div>
  );
}