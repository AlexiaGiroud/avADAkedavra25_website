import imgBackground from "../assets/51124e77e3c2f96afd7eb1dc6df942843a3a2cb5.png";
import imgSingleCell from "../assets/93be32fb021fefefaa0ce0e541b1371082525cff.png";
import imgRawData from "../assets/a86c4713b836193b96a3ed13c114acc3f0fd91db.png";

const dataSubsections = [
  {
    title: "Who is in the dataset?",
    color: "#C07DFF",
    backgroundImage: imgBackground,
    figures: [
      {
        type: "iframe",
        src: "stacked_celltype_by_status_plotly.html",
        title: "Stacked Cell Type Distribution",
      },
      // UMAP removed: only keeping the stacked cell type figure here
    ],
  },
  {
    title: "What is in a Single Cell?",
    color: "#C07DFF",
    backgroundImage: imgSingleCell,
    figures: [],
  },
  {
    title: "From Raw Data into Insights?",
    color: "#C07DFF",
    backgroundImage: imgRawData,
    subtopics: [
      "From Raw Data into Insights",
      "CellPhone DB",
      "Causal Analysis",
      "Statistical Signification",
    ],
    figures: [],
  },
];

export function DataSection() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Section Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-16" style={{ fontWeight: 900 }}>
          Data
        </h2>

        {/* Subsections */}
        <div className="space-y-16">
          {dataSubsections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8"
            >
              {/* Left column - 25% - Title (sticky) */}
              <div className="md:w-1/4 flex items-start">
                <div
                  className="relative overflow-hidden rounded-2xl p-6 w-full md:sticky md:top-24"
                  style={{
                    backgroundColor: `${section.color}20`,
                    borderWidth: "2px",
                    borderColor: section.color,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-60"
                    style={{
                      backgroundImage: `url(${section.backgroundImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <h3
                    className="relative z-10 text-white text-xl md:text-2xl uppercase tracking-wide"
                    style={{ fontWeight: 700 }}
                  >
                    {section.title}
                  </h3>
                  {section.subtopics && (
                    <ul className="relative z-10 mt-4 space-y-2">
                      {section.subtopics.map(
                        (subtopic, subIndex) => (
                          <li
                            key={subIndex}
                            className="text-white/80 text-sm"
                          >
                            • {subtopic}
                          </li>
                        ),
                      )}
                    </ul>
                  )}
                </div>
              </div>

              {/* Right column - 75% - Figures */}
              <div className="md:w-3/4 space-y-8">
                {section.figures.length > 0 ? (
                  section.figures.map((figure, figIndex) => (
                    <div key={figIndex} className="rounded-xl p-8 min-h-[300px] flex flex-col items-center justify-center bg-[#1A1A1A]" style={{ borderWidth: '2px', borderColor: section.color }}>
                      <p className="text-gray-300 text-lg mb-4">{figure.title} (interactive figure available)</p>
                      <a href={`/avADAkedavra25_website/${figure.src}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C07DFF] text-white px-4 py-2 rounded-md">Open figure in new tab</a>
                    </div>
                  ))
                ) : (
                  <div 
                    className="rounded-2xl p-8 min-h-[400px] flex items-center justify-center" 
                    style={{
                      borderWidth: "2px",
                      borderColor: section.color,
                      backgroundColor: "#1A1A1A",
                    }}
                  >
                    <p className="text-gray-400 text-center">
                      [Figures coming soon for {section.title}]
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}