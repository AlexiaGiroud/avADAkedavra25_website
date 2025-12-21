import { MessageSquare, Activity, Network, TrendingDown } from 'lucide-react';

const findings = [
  {
    icon: MessageSquare,
    title: 'Key Finding 1',
    description: 'Our analysis revealed that across disease progression, immune cell interaction density is largely conserved, but communication is selectively restructured. While dominant signaling pairs persist, distinct cell–cell connections emerge, weaken, or disappear at different disease stages.',
    color: '#D61C8C',
  },
  {
    icon: Network,
    title: 'Key Finding 2',
    description: 'Aging has an impact on both COVID-19 severity and Expression of Critical Ligand Receptor Couples for severity',
    color: '#C07DFF',
  },
  {
    icon: Activity,
    title: 'Key Finding 3',
    description: 'It is possible to predict COVID-19 symptom severity with high accuracy using a Machine Learning Model. It clearly distinguishes healthy from diseased states, while intermediate severities are harder to separate, suggesting a gradual progression of immune dysfunction.',
    color: '#F29900',
  },
];

export function KeyFindings() {
  return (
    <section className="px-6 py-16 bg-[#000000]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-16" style={{ fontWeight: 900 }}>
          Key Findings
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {findings.map((finding, index) => {
            const Icon = finding.icon;
            return (
              <div
                key={index}
                className="bg-[#2A2A2A] rounded-2xl p-8 border border-[#6811BA]/30 hover:border-[#6811BA]/60 transition-all hover:transform hover:scale-105"
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${finding.color}20` }}
                >
                  <Icon size={28} style={{ color: finding.color }} />
                </div>
                <h3 className="text-xl text-white mb-3" style={{ color: finding.color }}>
                  {finding.title}
                </h3>
                <p className="text-gray-300 leading-relaxed" style={{ textAlign: 'justify' }}>
                  {finding.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}