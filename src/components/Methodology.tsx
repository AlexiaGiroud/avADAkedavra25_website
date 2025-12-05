import { Database, GitBranch, BarChart3 } from 'lucide-react';

const methods = [
  {
    icon: Database,
    title: 'Single-Cell RNA Sequencing',
    description: 'We analyzed single-cell transcriptomic data from COVID-19 patients across multiple severity levels to identify cell types and their gene expression profiles.',
    color: '#D61C8C',
  },
  {
    icon: GitBranch,
    title: 'CellPhoneDB Analysis',
    description: 'Using CellPhoneDB, we mapped ligand-receptor interactions between immune cells to understand how cells communicate in different disease states.',
    color: '#C07DFF',
  },
  {
    icon: BarChart3,
    title: 'Causal Inference',
    description: 'We applied statistical causal analysis methods to determine whether cell communication patterns causally influence disease severity, beyond mere correlation.',
    color: '#F29900',
  },
];

export function Methodology() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-white text-center mb-12">
          Methodology
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="bg-[#3A3A3A] rounded-2xl p-8 border border-[#6811BA]/30 text-center"
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
                <p className="text-gray-300 leading-relaxed">
                  {method.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
