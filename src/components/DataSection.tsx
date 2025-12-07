import imgWhoIsIn from "../assets/who_is_in_dataset.png";
import imgSingleCell from "../assets/what_is_in_a_single_cell_analysis.png";
import imgRawData from "../assets/from_raw_data_to_insights.png";
import AutoIframe from "./AutoIframe";

const dataSubsections = [
  {
    title: "Who is in the dataset?",
    color: "#C07DFF",
    image: imgWhoIsIn,
    iframeUrls: ["stacked_celltype_by_status_plotly.html", "umap_website.html"],
  },
  {
    title: "What is in a Single Cell Analysis?",
    color: "#C07DFF",
    image: imgSingleCell,
  },
  {
    title: "From Raw Data into Insights?",
    color: "#C07DFF",
    image: imgRawData,
    subtopics: [
      "From Raw Data into Insights",
      "CellPhone DB",
      "Causal Analysis",
      "Statistical Signification",
    ],
  },
];

export function DataSection() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto space-y-16">
        <h2
          className="text-3xl md:text-4xl text-white uppercase tracking-tight"
          style={{ fontWeight: 700 }}
        >
          Data
        </h2>
        {dataSubsections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8"
          >
            {/* Left column - 25% - Title */}
            <div className="md:w-1/4 flex items-start">
              <div
                className="relative overflow-hidden rounded-2xl p-6 w-full min-h-[400px] flex flex-col justify-center"
                style={{
                  backgroundColor: `${section.color}20`,
                  borderWidth: "2px",
                  borderColor: section.color,
                }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url(${section.image})`,
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

            {/* Right column - 75% - Content */}
            <div className="md:w-3/4 flex flex-col gap-8">
              {section.iframeUrls && section.iframeUrls.length ? (
                section.iframeUrls.map((url, i) => (
                  <div key={i} className="w-full rounded-2xl">
                    <AutoIframe
                      src={`${import.meta.env.BASE_URL}${url}`}
                      className="w-full border-0 bg-white"
                      title={`${section.title} - Figure ${i + 1}`}
                    />
                  </div>
                ))
              ) : (
                <div
                  className="rounded-2xl p-8 min-h-[400px] flex items-center justify-center"
                  style={{
                    borderWidth: "2px",
                    borderColor: section.color,
                    backgroundColor: "#1A1A1A",
                    overflow: "visible",
                  }}
                >
                  <p className="text-gray-400 text-center">Relevant figures will be there</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}