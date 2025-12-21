import { Hero } from "./components/Hero";
import { KeyFindings } from "./components/KeyFindings";
import { MethodologyInteractive } from "./components/MethodologyInteractive";
import { Links } from "./components/Links";
import { Team } from "./components/Team";
import { Navbar } from "./components/Navbar";
import { DataSectionNew } from "./components/DataSectionNew";
import { Conclusion } from "./components/Conclusion";
import { CovidStats } from "./components/CovidStats";
import { GameSection } from "./components/GameSection";
import { ThankYou } from "./components/ThankYou";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div className="bg-[#2A2A2A]">
        <CovidStats />
      </div>
      <div id="game" className="bg-[#1A1A1A] px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <GameSection />
        </div>
      </div>
      <div id="findings" className="bg-[#000000]">
        <KeyFindings />
      </div>
      <div id="methodology" className="bg-[#2A2A2A]">
        <MethodologyInteractive />
      </div>
      <div id="data" className="bg-[#000000]">
        <DataSectionNew />
      </div>
      <div id="conclusion" className="bg-[#1A1A1A]">
        <Conclusion />
      </div>
      <div className="bg-[#000000]">
        <ThankYou />
      </div>
      <div id="resources" className="bg-[#1A1A1A]">
        <Links />
      </div>
      <div id="team" className="bg-[#000000]">
        <Team />
      </div>
    </div>
  );
}