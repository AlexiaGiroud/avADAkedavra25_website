import { useState } from 'react';

type ConfounderType = 'age' | 'sex' | 'smoking';

const confounders = [
  { id: 'age' as ConfounderType, label: 'Age 👴', color: '#D61C8C' },
  { id: 'sex' as ConfounderType, label: 'Sex', color: '#C07DFF' },
  { id: 'smoking' as ConfounderType, label: 'Smoking 🚬', color: '#F29900' },
];

export function CausalAnalysis() {
  const [selectedConfounder, setSelectedConfounder] = useState<ConfounderType>('age');

  return (
    <div className="space-y-16">
      {/* Subsection Title */}
      <div className="bg-gradient-to-r from-[#D61C8C] via-[#C07DFF] to-[#6811BA] rounded-2xl p-1">
        <div className="bg-[#000000] rounded-xl p-6">
          <h3 className="text-3xl md:text-4xl text-white uppercase tracking-tight" style={{ fontWeight: 700 }}>
            Causal analysis - Can Demographics influence your reaction to COVID?
          </h3>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
        <p className="text-gray-300 text-lg leading-relaxed">
          The main question is does COVID change cell-cell communication. However there might be a problem, maybe age changes communication not severity! As an example, old people might have different immune cell communication even without Covid! It's what will be investigated in this part. The sample population is heterogeneous, we want to make sure any findings aren't affected by the demographics. Cross-tabulation will be used to control the confounders.
        </p>
      </div>

      {/* DAG */}                    
        <div className="space-y-6">
          <div className="flex justify-center">
            <iframe
              src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/causal_analysis/causal_dag_interactive.html"
              style={{ 
                width: "100%",
                height: "850px",   // Ajuste si tu veux la taille exacte de ton HTML
                border: "none",
                background: "transparent"
              }}
            />
          </div>

        <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
          <h4 className="text-xl text-white mb-4" style={{ fontWeight: 600, color: '#C07DFF' }}>
            Understanding the DAG
          </h4>
          <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
            <p>
              <strong style={{ color: '#D61C8C' }}>Sex → Status on Day Collection:</strong> This arrow represents the assumption that biological sex directly influences COVID-19 mortality. Males have consistently shown higher death rates across populations, likely due to differences in immune response (stronger inflammatory responses in males), hormonal factors (estrogen may be protective), and higher prevalence of comorbidities.
            </p>
            <p>
              <strong style={{ color: '#C07DFF' }}>Age → Status on Day Collection:</strong> This edge reflects the well-established relationship between age and COVID-19 mortality. Older patients face higher risk of death due to immunosenescence (weakening immune system), accumulation of comorbidities, reduced physiological reserve, and impaired tissue repair mechanisms.
            </p>
            <p>
              <strong style={{ color: '#F29900' }}>Smoker → Status on Day Collection:</strong> This relationship captures how smoking history directly affects survival probability. Smokers have compromised respiratory function, chronic lung inflammation, and impaired immune responses, all of which increase mortality risk independently of disease severity.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Confounders Section */}
      <div className="space-y-8">
        <h4 className="text-2xl md:text-3xl text-white text-center" style={{ fontWeight: 600, color: '#C07DFF' }}>
          What demographics impact the severity of the COVID-19 reaction?
        </h4>

        {/* Confounder Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          {confounders.map((confounder) => (
            <button
              key={confounder.id}
              onClick={() => setSelectedConfounder(confounder.id)}
              className={`px-8 py-4 rounded-xl text-white text-lg transition-all ${
                selectedConfounder === confounder.id
                  ? 'transform scale-110 shadow-2xl'
                  : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: confounder.color,
                border: selectedConfounder === confounder.id ? '3px solid white' : '3px solid transparent',
                fontWeight: 700,
              }}
            >
              {confounder.label}
            </button>
          ))}
        </div>

        {/* Age Confounders */}
        {selectedConfounder === 'age' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex justify-center">
                <div className="w-full">
                  <p className="text-gray-400 text-center mb-4" style={{ fontWeight: 600 }}>
                    Status on Day of Collection
                  </p>
                    <div className="space-y-6">
                      <div className="flex justify-center">
                        <iframe
                        src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/causal_analysis/3_confounders/Age_interval_day_distribution.html"
                        style={{ 
                          width: "100%",
                          height: "600px",   // Ajuste si tu veux la taille exacte de ton HTML
                          border: "none",
                          background: "transparent"
                        }}
                      />
                    </div>
                    </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-full">
                  <p className="text-gray-400 text-center mb-4" style={{ fontWeight: 600 }}>
                    Worst Clinical Status
                  </p>
                    <div className="space-y-6">
                      <div className="flex justify-center">
                        <iframe
                        src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/causal_analysis/3_confounders/Age_interval_worst_distribution.html"
                        style={{ 
                          width: "100%",
                          height: "600px",   // Ajuste si tu veux la taille exacte de ton HTML
                          border: "none",
                          background: "transparent"
                        }}
                      />
                    </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#D61C8C]/30">
              <p className="text-gray-300 text-lg leading-relaxed">
                In this figure it's possible to see that in the younger population, there aren't patients that show severe COVID-19 symptoms, whereas in the older generations, above 40, severe cases start appearing. It's even possible to see that in the age range from 70 to 79 years old, the patients are severely ill and there are no healthy patients (with asymptomatic or mild reactions) to COVID. This hints that age might be an important confounder when looking at our data.
              </p>
            </div>
          </div>
        )}

        {/* Sex Confounders */}
        {selectedConfounder === 'sex' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex justify-center">
                <div className="w-full">
                  <p className="text-gray-400 text-center mb-4" style={{ fontWeight: 600 }}>
                    Status on Day of Collection
                  </p>
                    <div className="space-y-6">
                      <div className="flex justify-center">
                        <iframe
                        src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/causal_analysis/3_confounders/Sex_day_distribution.html"
                        style={{ 
                          width: "100%",
                          height: "600px",   // Ajuste si tu veux la taille exacte de ton HTML
                          border: "none",
                          background: "transparent"
                        }}
                      />
                    </div>
                    </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-full">
                  <p className="text-gray-400 text-center mb-4" style={{ fontWeight: 600 }}>
                    Worst Clinical Status
                  </p>
                    <div className="space-y-6">
                      <div className="flex justify-center">
                        <iframe
                        src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/causal_analysis/3_confounders/Sex_worst_distribution.html"
                        style={{ 
                          width: "100%",
                          height: "600px",   // Ajuste si tu veux la taille exacte de ton HTML
                          border: "none",
                          background: "transparent"
                        }}
                      />
                    </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
              <p className="text-gray-300 text-lg leading-relaxed">
                The balance between men and women shifts slightly between the groups, but the overall picture is relatively even. In the 'Mild' group, men make up the majority (54.9%), whereas in the 'Severe' group, women are more common (58.3%). However, since the total number of severe cases is very small (only 12 patients), this difference isn't large enough to prove that gender determines how sick someone gets. Overall, gender does not appear to be a strong predictor of outcome in this specific study.
              </p>
            </div>
          </div>
        )}

        {/* Smoking Confounders */}
        {selectedConfounder === 'smoking' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex justify-center">
                <div className="w-full">
                  <p className="text-gray-400 text-center mb-4" style={{ fontWeight: 600 }}>
                    Status on Day of Collection
                  </p>
                    <div className="space-y-6">
                      <div className="flex justify-center">
                        <iframe
                        src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/causal_analysis/3_confounders/Smoker_day_distribution.html"
                        style={{ 
                          width: "100%",
                          height: "600px",   // Ajuste si tu veux la taille exacte de ton HTML
                          border: "none",
                          background: "transparent"
                        }}
                      />
                    </div>
                    </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-full">
                  <p className="text-gray-400 text-center mb-4" style={{ fontWeight: 600 }}>
                    Worst Clinical Status
                  </p>
                    <div className="space-y-6">
                      <div className="flex justify-center">
                        <iframe
                        src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/causal_analysis/3_confounders/Smoker_worst_distribution.html"
                        style={{ 
                          width: "100%",
                          height: "600px",   // Ajuste si tu veux la taille exacte de ton HTML
                          border: "none",
                          background: "transparent"
                        }}
                      />
                    </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#F29900]/30">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Research has shown that smoking increases severity, indeed cigarette smoke causes hyperinflammatory immune response and a perturbation of viral-entry genes and host-pathogen interactions (Bowsher et al., European Respiratory Journal, 2024).
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                However, our cohort is overwhelmingly composed of non-smokers (90.6% in mild cases and 87.5% in severe cases), with only 3 smokers total across both groups (n=2 in mild, n=1 in severe). This extreme imbalance in smoking status distribution makes any meaningful statistical Analysis of smoking's impact on disease severity infeasible. Given the insufficient sample size of smokers, we have decided to exclude smoking status from further downstream analyses, as any conclusions drawn would lack statistical power and could be misleading.
              </p>
              <p className="text-gray-400 text-sm mt-4">
                Reference: European Respiratory Journal: "Smoking and vaping alter genes related to mechanisms of SARS-CoV-2 susceptibility and severity"
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Conclusions from confounders */}
      <div className="bg-gradient-to-br from-[#D61C8C]/20 via-[#C07DFF]/20 to-[#F29900]/20 rounded-xl p-8 border-2 border-[#C07DFF]/30">
        <h4 className="text-2xl text-white mb-6" style={{ fontWeight: 600, color: '#C07DFF' }}>
          Conclusions from Confounders
        </h4>
        <p className="text-gray-300 text-lg leading-relaxed">
          Age seems to be the strongest driver of illness severity, with serious cases appearing mostly in patients over 40 and dominating the oldest age groups. In contrast, gender does not appear to determine how sick someone gets, as the balance between men and women remained relatively even across both mild and severe cases. We were unable to measure the impact of smoking because our study included almost no smokers, leading us to exclude that factor from the final results. Ultimately, age stands out as the most critical influence on patient outcomes in this dataset, far more than gender or lifestyle factors.
        </p>
      </div>

      {/* Logistic Regression - Title removed, layout changed to 70% Figure - 30% Text */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          <div className="lg:col-span-7">
            <iframe
              src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/causal_analysis/logistic_regression_forest_plot.html"
              className="w-full h-[600px] border-0 rounded-xl"
              title="Logistic Regression Forest Plot"
              style={{ background: 'transparent' }}
            />
          </div>

          <div className="lg:col-span-3 bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30 flex items-center">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed" style={{ textAlign: 'justify' }}>
                A Logistic Regression was done to see which factor could drive severity. This shows patients between 60 and 80, indeed show increased COVID-19 severity. In this dataset the reference is a non smoker woman between 20 and 40. We can see that compared to this group people aged between 60 and 80 show a more severe form of COVID-19 with a p-value of 0.028.
              </p>
              <p className="text-gray-300 leading-relaxed" style={{ textAlign: 'justify' }}>
                As expected, sex doesn't seem to play a big role in the development of COVID-19.
              </p>
              <p className="text-gray-300 leading-relaxed" style={{ textAlign: 'justify' }}>
                The sample size was a big limitation for investigating the impact of smoking. We knew smoking had an impact but our dataset couldn't prove it alone (<a href="https://www.nature.com/articles/s42003-021-02685-y" className="text-[#C07DFF] hover:text-[#E5C9FF] underline" target="_blank" rel="noopener noreferrer">source</a>)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact of Age on Cell-Cell Communication - Title removed */}
      <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
        <p className="text-gray-300 text-lg leading-relaxed" style={{ textAlign: 'justify' }}>
          Now that we have shown the impact of aging over severity let's inspect how aging may influence Cell-Cell communication.
        </p>
      </div>

      {/* Communication Landscape - New layout: 50% Figure 1 & text, 50% Figure 2 & text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left side: Figure 1 & text */}
        <div className="space-y-4">
          <div className="space-y-6">
            <div className="flex justify-center">
              <iframe
                src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/causal_analysis/cell_cell_comm_across_age_groups.html"
                style={{ 
                  width: "100%",
                  height: "750px",   // Ajuste si tu veux la taille exacte de ton HTML
                  border: "none",
                  background: "transparent"
                }}
              />
            </div>
            </div>
          <div className="bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30 flex items-center" style={{ minHeight: '120px' }}>
            <p className="text-gray-300 leading-relaxed" style={{ textAlign: 'justify' }}>
              We can see that old patients tends to have a higher number of interactions and that they tend to have a higher strength
            </p>
          </div>
        </div>

        {/* Right side: Figure 2 & text */}
        <div className="space-y-4">
          <div className="space-y-6">
            <div className="flex justify-center">
              <iframe
                src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/causal_analysis/ligand_receptor_interactions_across_age_groups.html"
                style={{ 
                  width: "100%",
                  height: "750px",   // Ajuste si tu veux la taille exacte de ton HTML
                  border: "none",
                  background: "transparent"
                }}
              />
            </div>
            </div>
          <div className="bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30 flex items-center" style={{ minHeight: '120px' }}>
            <p className="text-gray-300 text-sm leading-relaxed" style={{ textAlign: 'justify' }}>
              Scatter plots showing ligand expression versus receptor expression for select ligand-receptor pairs across patient age groups (Young: orange; Middle: pink; Old: purple). Most communication pathways remain stable between young and old patients. However, specific interactions like PTPRC-CD22 shift significantly with age, suggesting that while the immune system's general wiring stays consistent, breakdowns in these few specific signals might explain why older individuals often face more severe COVID-19 outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Heatmap Top Interactions - Critical */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-[#2A2A2A] rounded-xl p-12 border-2 border-[#C07DFF]/30 flex items-center justify-center min-h-[500px]">
              <iframe
                src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/causal_analysis/heatmap_Critical.html"
                style={{ 
                  width: "100%",
                  height: "750px",   // Ajuste si tu veux la taille exacte de ton HTML
                  border: "none",
                  background: "transparent"
                }}
              />
          </div>
        </div>

        <div className="lg:col-span-2 bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30 flex items-center">
          <p className="text-gray-300 leading-relaxed" style={{ textAlign: 'justify' }}>
            Top interaction pairs are ANXA1-FPR1, ANXA1-FPR, CD99-PILRA, CCL5-CCR1, CD320-JAML for critical patients. The vast majority of Ligand Receptor Interactions don't depend on the age of the patients. However some Ligand-Receptor interactions such as ANXA1-FPR1 or PTPRC-CD22 are greatly affected by the age of the patients.
          </p>
        </div>
      </div>

      {/* Gene Expression Rates - Ligand and Receptor subsections */}
      <div className="space-y-12">
        {/* Ligand gene expression rates: 60% Figure - 40% Text */}
        <div>
          <h4 className="text-lg text-gray-400 mb-6" style={{ fontWeight: 400 }}>
            Ligand Gene Expression Rates
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Figure - 60% */}
            <div className="lg:col-span-3">
              <iframe
                src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/causal_analysis/exp_levels_ligands.html"
                className="w-full h-[600px] border-0 rounded-xl"
                title="Ligand Gene Expression Rates"
                style={{ background: 'transparent' }}
              />
            </div>

            {/* Text - 40% */}
            <div className="lg:col-span-2 bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30 flex items-center">
              <p className="text-gray-300 text-sm leading-relaxed" style={{ textAlign: 'justify' }}>
                Bars represent the percentage of cells with high expression (mean expression ≥ 1.0) for each ligand within each age group. Sample sizes (n) indicate the total number of cells analyzed per age group. P-values from chi-square tests are displayed above each plot to assess whether gene expression varies significantly with age independently of disease severity. Bar colors indicate statistical significance: purple (p &lt; 0.001, highly significant age effect), pink (p &lt; 0.01, very significant), and yellow (p ≥ 0.05, not significant). CCL5, ANXA1, TNF, TNFRSF1A and CD320 show significant age-dependent expression patterns (p &lt; 0.05), while CD99 demonstrates non-significant age effect (p = 1.000, yellow). These findings suggest that age modulates the expression of key ligands involved in cell-cell communication in severe COVID-19, potentially confounding severity-associated expression changes. Analysis performed on stratified severe COVID-19 cases only to isolate age effects from disease severity effects.
              </p>
            </div>
          </div>
        </div>
        
        <div className="h-8 lg:h-24" />

        {/* Receptor gene expression rates: 40% Text - 60% Figure */}
        <div>
          <h4 className="text-lg text-gray-400 mb-6" style={{ fontWeight: 400 }}>
            Receptor Gene Expression Rates
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Text - 40% */}
            <div className="lg:col-span-2 bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30 flex items-center">
              <p className="text-gray-300 text-sm leading-relaxed" style={{ textAlign: 'justify' }}>
                Bars represent the percentage of cells with high expression (mean expression ≥ 1.0) for each receptor within each age group. Sample sizes (n) indicate the total number of cells analyzed per age group. P-values from chi-square tests are displayed above each plot to assess whether gene expression varies significantly with age independently of disease severity. Bar colors indicate statistical significance: purple (p &lt; 0.001, highly significant age effect), pink (p &lt; 0.01, very significant), and yellow (p ≥ 0.05, not significant). CCR1, PILRA, FPR1, JAML and FPR2 show significant age-dependent expression patterns. These findings suggest that age modulates the expression of key receptors involved in cell-cell communication in severe COVID-19, potentially confounding severity-associated expression changes. Analysis performed on stratified severe COVID-19 cases only to isolate age effects from disease severity effects.
              </p>
            </div>

            {/* Figure - 60% */}
            <div className="lg:col-span-3">
              <iframe
                src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/DataSection/causal_analysis/exp_levels_receptors.html"
                className="w-full h-[600px] border-0 rounded-xl"
                title="Receptor Gene Expression Rates"
                style={{ background: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}