import { Hero } from './components/Hero';
import { CellDistributionChart } from './components/CellDistributionChart';
import { KeyFindings } from './components/KeyFindings';
import { Methodology } from './components/Methodology';
import { Links } from './components/Links';
import { Team } from './components/Team';

export default function App() {
  return (
    <div className="min-h-screen bg-[#2A2A2A]">
      <Hero />
      <CellDistributionChart />
      <KeyFindings />
      <Methodology />
      <Links />
      <Team />
    </div>
  );
}
