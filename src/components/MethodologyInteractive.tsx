import { Database, GitBranch, BarChart3 } from 'lucide-react';
import { useState } from 'react';

const methods = [
  {
    icon: Database,
    title: 'Single-Cell RNA Sequencing',
    shortDesc: 'Single Cell Analysis',
    overview: '🔬 Single Cell Analysis allows scientists to examine a patient\'s sample cell by cell, rather than looking at the average of millions mixed together. After separating a sample like blood or a nasal swab into individual cells, machines read the genetic material to see which genes are "switched on" in each one. This data creates a unique fingerprint for every cell, allowing us to group them into clusters based on their type. This high-resolution view reveals critical details about how the body responds to COVID-19.',
    description: 'We analyzed a single-cell RNA sequencing dataset from COVID-19 patients to characterize immune cell populations and their gene expression profiles. Cells were clustered based on transcriptomic similarity and annotated into immune cell types using known marker genes, allowing us to assess data quality and cellular diversity. To study disease progression, cells were grouped according to patient clinical severity at the time of collection, as provided in the metadata. We then compared cell-type distributions and expression patterns across severities to investigate how the immune landscape evolves during COVID-19.',
    color: '#D61C8C',
  },
  {
    icon: GitBranch,
    title: 'CellPhoneDB Analysis',
    shortDesc: 'CellPhone DB',
    overview: '📞 CellPhoneDB is a computational tool that predicts how immune cells "talk" to each other by analyzing which receptor-ligand pairs are expressed between different cell types. Think of it like a telephone network: if one cell has the "phone" (receptor) and another has the "caller" (ligand), they can communicate. By mapping these connections across different COVID-19 severities, we can see how the immune system\'s internal conversations change as disease progresses.',
    description: 'We used CellPhoneDB to systematically identify ligand-receptor interactions between immune cell types. This analysis quantifies the strength and specificity of cell-cell communication pathways across disease severities, revealing how immune signaling networks are rewired during COVID-19 progression. The tool integrates gene expression data with curated databases of known receptor-ligand pairs to predict biologically meaningful interactions.',
    color: '#C07DFF',
  },
  {
    icon: BarChart3,
    title: 'Causal Inference',
    shortDesc: 'Causal Analysis',
    overview: '🔗 Causal Analysis helps us distinguish between correlation and causation. Just because two things happen together doesn\'t mean one causes the other. In our study, we need to know: does disease severity directly change cell communication, or are other factors like age, sex, or smoking status responsible for both? By using statistical methods to control for these confounding variables, we can isolate the true causal relationships.',
    description: 'The aim is to determine if demographic factors such as aging, smoking, and sex can be considered as confounders between cell-cell communication and severity. We first investigate the relationship between potential confounders (demographics) and the outcome (severity). Then, we study how aging impacts cell-cell communication for selected ligand-receptor interactions. This approach ensures that observed associations between immune communication patterns and disease severity are not simply driven by demographic differences in the patient population.',
    color: '#F29900',
  },
];

export function MethodologyInteractive() {
  const [selectedMethod, setSelectedMethod] = useState<number | null>(null);

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-16" style={{ fontWeight: 900 }}>
          Methodology
        </h2>
        
        {selectedMethod === null ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methods.map((method, index) => {
              const Icon = method.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedMethod(index)}
                  className="bg-[#3A3A3A] rounded-2xl p-8 border border-[#6811BA]/30 hover:border-[#6811BA]/60 transition-all hover:transform hover:scale-105 text-center cursor-pointer"
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${method.color}20` }}
                  >
                    <Icon size={32} style={{ color: method.color }} />
                  </div>
                  <h3 className="text-xl text-white mb-4" style={{ color: method.color }}>
                    {method.title}
                  </h3>
                  <p className="text-gray-300">
                    Click to learn more
                  </p>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="animate-fadeIn">
            <button
              onClick={() => setSelectedMethod(null)}
              className="mb-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              ← Back to all methods
            </button>
            <div className="bg-[#2A2A2A] rounded-2xl p-12 border-2" style={{ borderColor: methods[selectedMethod].color }}>
              <div className="flex items-start gap-6 mb-6">
                {(() => {
                  const Icon = methods[selectedMethod].icon;
                  return (
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${methods[selectedMethod].color}20` }}
                    >
                      <Icon size={40} style={{ color: methods[selectedMethod].color }} />
                    </div>
                  );
                })()}
                <div>
                  <h3 className="text-3xl text-white mb-4" style={{ color: methods[selectedMethod].color }}>
                    {methods[selectedMethod].title}
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-[#3A3A3A] rounded-xl p-6">
                      <h4 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>Overview</h4>
                      <p className="text-gray-300 leading-relaxed" style={{ fontSize: '0.95rem', textAlign: 'justify' }}>
                        {methods[selectedMethod].overview}
                      </p>
                    </div>
                    <div className="bg-[#3A3A3A] rounded-xl p-6">
                      <h4 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>Technical Details</h4>
                      <p className="text-gray-300 leading-relaxed" style={{ fontSize: '0.95rem', textAlign: 'justify' }}>
                        {methods[selectedMethod].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}