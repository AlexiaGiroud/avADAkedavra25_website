import { Hero } from "./components/Hero";
import { CellDistributionChart } from "./components/CellDistributionChart";
import { KeyFindings } from "./components/KeyFindings";
import { Methodology } from "./components/Methodology";
import { Links } from "./components/Links";
import { Team } from "./components/Team";
import { Navbar } from "./components/Navbar";
import { DataSection } from "./components/DataSection";
import { Conclusion } from "./components/Conclusion";
import { CovidStats } from "./components/CovidStats";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <CovidStats />
      <div id="findings" className="bg-[#000000]">
        <KeyFindings />
      </div>
      <div id="methodology" className="bg-[#2A2A2A]">
        <Methodology />
      </div>
      <div id="data" className="bg-[#000000]">
        <DataSection />
      </div>
      <div id="resources" className="bg-[#2A2A2A]">
        <Links />
      </div>
      <div id="conclusion" className="bg-[#000000]">
        <Conclusion />
      </div>
      <div id="team" className="bg-[#2A2A2A]">
        <Team />
      </div>
    </div>
  );
}