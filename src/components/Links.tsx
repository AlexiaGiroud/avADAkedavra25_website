import { ExternalLink, Code, FileText } from 'lucide-react';

export function Links() {
  return (
    <section className="px-6 py-16 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-16" style={{ fontWeight: 900 }}>
          More
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="https://www.nature.com/articles/s41591-021-01329-2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#D61C8C] to-[#6811BA] rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all group"
          >
            <FileText size={40} className="mx-auto mb-4 text-white" />
            <h3 className="text-xl text-white mb-2">Read Full Paper</h3>
            <p className="text-white/80 mb-4">
              Explore the original Nature publication
            </p>
            <ExternalLink size={20} className="mx-auto text-white group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="https://github.com/epfl-ada/ada-2025-project-avadakedavra25.git"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#C07DFF] to-[#F29900] rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all group"
          >
            <Code size={40} className="mx-auto mb-4 text-white" />
            <h3 className="text-xl text-white mb-2">View Code</h3>
            <p className="text-white/80 mb-4">
              Access our analysis pipeline and notebooks
            </p>
            <ExternalLink size={20} className="mx-auto text-white group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#"
            className="bg-gradient-to-br from-[#F29900] to-[#D61C8C] rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all group"
          >
            <FileText size={40} className="mx-auto mb-4 text-white" />
            <h3 className="text-xl text-white mb-2">Download Data</h3>
            <p className="text-white/80 mb-4">
              Get the datasets used in this study
            </p>
            <ExternalLink size={20} className="mx-auto text-white group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}