import { useState } from "react";

export function BonusPrediction() {
  const [tab, setTab] = useState("matrix");

  return (
    <div className="space-y-8">
      {/* Section Title */}
      <h3
        className="text-3xl md:text-4xl text-white uppercase tracking-tight"
        style={{ fontWeight: 700, color: "#C07DFF" }}
      >
        Bonus — Prediction
      </h3>

      {/* How did we do this? */}
      <div className="space-y-4">
        <h4
          className="text-2xl text-white"
          style={{ fontWeight: 600, color: "#F29900" }}
        >
          How did we do this?
        </h4>
        <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#F29900]/30">
          <p className="text-gray-300 text-lg">
            📝 Explanation of prediction methodology
          </p>
        </div>
      </div>

      {/* Show results */}
      <div className="space-y-4">
        <h4
          className="text-2xl text-white"
          style={{ fontWeight: 600, color: "#D61C8C" }}
        >
          Show results
        </h4>

        {/* --- TABS --- */}
        <div className="flex gap-4">
          <button
            onClick={() => setTab("matrix")}
            className={`px-5 py-2 rounded-xl font-semibold transition ${
              tab === "matrix"
                ? "bg-[#D61C8C] text-white"
                : "bg-[#2A2A2A] text-gray-300 hover:bg-[#3A3A3A]"
            }`}
          >
            Confusion Matrix
          </button>

          <button
            onClick={() => setTab("features")}
            className={`px-5 py-2 rounded-xl font-semibold transition ${
              tab === "features"
                ? "bg-[#D61C8C] text-white"
                : "bg-[#2A2A2A] text-gray-300 hover:bg-[#3A3A3A]"
            }`}
          >
            Feature Importance
          </button>
        </div>

        {/* --- CONTENT BOX --- */}
        <div className="bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#D61C8C]/30 min-h-[450px] flex justify-center items-center">
          {tab === "matrix" && (
            <iframe
              src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/confusion_matrix_rf.html"
              title="Confusion Matrix"
              className="w-full h-[450px] rounded-lg border border-[#D61C8C]/20"
            ></iframe>
          )}

          {tab === "features" && (
            <iframe
              src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/feature_importance_rf.html"
              title="Feature Importance"
              className="w-full h-[450px] rounded-lg border border-[#D61C8C]/20"
            ></iframe>
          )}
        </div>

        {/* Analysis */}
        <div className="bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#D61C8C]/30">
          <p className="text-gray-300 text-lg">
            📝 Analysis and interpretation of prediction results
          </p>
        </div>
      </div>
    </div>
  );
}
