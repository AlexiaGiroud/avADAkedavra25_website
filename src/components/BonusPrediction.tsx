export function BonusPrediction() {
  return (
    <div className="space-y-8">
      {/* Section Title */}
      <h3 className="text-3xl md:text-4xl text-white uppercase tracking-tight" style={{ fontWeight: 700, color: '#C07DFF' }}>
        Bonus — Prediction
      </h3>

      {/* How did we do this? */}
      <div className="space-y-4">
        <h4 className="text-2xl text-white" style={{ fontWeight: 600, color: '#F29900' }}>
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
        <h4 className="text-2xl text-white" style={{ fontWeight: 600, color: '#D61C8C' }}>
          Show results
        </h4>
        <div className="bg-[#2A2A2A] rounded-xl p-12 border-2 border-[#D61C8C]/30 flex items-center justify-center min-h-[400px]">
          <p className="text-gray-400 text-xl text-center">
            📊 Prediction results visualization
          </p>
        </div>
        <div className="bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#D61C8C]/30">
          <p className="text-gray-300 text-lg">
            📝 Analysis and interpretation of prediction results
          </p>
        </div>
      </div>
    </div>
  );
}
