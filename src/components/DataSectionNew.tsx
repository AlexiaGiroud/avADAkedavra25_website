import { SingleCellDataset } from './SingleCellDataset';
import { SeveritiesSection } from './SeveritiesSection';
import { CellCommunication } from './CellCommunication';
import { CausalAnalysis } from './CausalAnalysis';
import { StatisticalAnalysis } from './MachineLearning';

export function DataSectionNew() {
  return (
    <section className="px-6 py-16 bg-[#000000]">
      <div className="max-w-6xl mx-auto">
        {/* Main Section Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-16" style={{ fontWeight: 900 }}>
          Data
        </h2>

        {/* All subsections */}
        <div className="space-y-24">
          <SingleCellDataset />
          <SeveritiesSection />
          <CellCommunication />
          <CausalAnalysis />
          <StatisticalAnalysis />
        </div>
      </div>
    </section>
  );
}