export function Conclusion() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-16" style={{ fontWeight: 900 }}>
          Conclusion
        </h2>
        <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
          <div className="text-gray-300 text-lg leading-relaxed space-y-6" style={{ textAlign: 'justify' }}>
            <p>
              Throughout this project, we wanted to answer a central question: <span style={{ color: '#D61C8C', fontWeight: 700 }}>why does COVID-19 affect individuals so differently?</span> By combining single-cell transcriptomics, cell-cell communication analysis, and causal reasoning, we show that disease severity is not driven by a single factor, but rather emerges from a <span style={{ color: '#F29900', fontWeight: 700 }}>complex reorganization of the immune system</span>. Furthermore, we show that <span style={{ color: '#C07DFF', fontWeight: 700 }}>severity can be predicted from a sample with high accuracy</span>.
            </p>
            
            <p>
              At the cellular level, we found that the overall structure of immune communication is surprisingly conserved across disease stages, relying on a shared baseline of communication, through ligand-receptor interactions. However, severity is marked by <span style={{ color: '#F29900', fontWeight: 700 }}>selective rewiring of this network</span>. As COVID-19 progresses, communication shifts from balanced surveillance to aggressive innate immune activation, followed by <span style={{ color: '#D61C8C', fontWeight: 700 }}>exhaustion and collapse of coordination</span> in severe and critical disease. Crucial immune players such as T cells gradually disconnect, while a small number of pathways become overly dominant, reflecting a <span style={{ color: '#C07DFF', fontWeight: 700 }}>loss of regulatory balance</span>.
            </p>
            
            <p>
              By explicitly accounting for demographic factors, we showed that <span style={{ color: '#F29900', fontWeight: 700 }}>age is the strongest confounder</span> shaping both disease severity and immune communication. Many interactions remain stable across age groups, but a subset of key ligand-receptor pairs exhibits strong age-dependent changes, helping explain why older patients are disproportionately affected by severe outcomes. In contrast, sex showed limited influence in this dataset, and smoking could not be robustly assessed due to sample size limitations.
            </p>
            
            <p>
              Importantly, we demonstrated that these communication patterns are not only biologically meaningful but also <span style={{ color: '#C07DFF', fontWeight: 700 }}>predictive</span>. A simple and interpretable machine learning model was able to classify disease severity with high accuracy using a small set of ligand-receptor-related genes, clearly distinguishing healthy from diseased states. The difficulty in separating intermediate severities further supports the idea that <span style={{ color: '#D61C8C', fontWeight: 700 }}>COVID-19 severity represents a continuous spectrum of immune dysfunction</span>, rather than discrete categories.
            </p>
            
            <p>
              Together, these results highlight that COVID-19 severity is best understood as a <span style={{ color: '#F29900', fontWeight: 700 }}>failure of immune coordination rather than a mere increase in inflammation</span>. By focusing on how immune cells "talk" to one another, and how this dialogue is reshaped by age and disease, our project provides a framework for interpreting immune dysregulation in infectious diseases and opens the door to more targeted, communication-aware therapeutic strategies.
            </p>
            
            <p style={{ fontStyle: 'italic', fontSize: '1.2rem', marginTop: '1.5rem' }}>
              In short, <span style={{ color: '#C07DFF', fontWeight: 700 }}>it's not just which cells are present, but how they communicate</span>, and <span style={{ color: '#D61C8C', fontWeight: 700 }}>how that communication breaks down</span>, that shapes the outcome of COVID-19.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}