export function GameSection() {
  return (
    <div className="space-y-8">
      {/* Section Title */}
      <div className="bg-gradient-to-r from-[#D61C8C] via-[#C07DFF] to-[#6811BA] rounded-2xl p-1">
        <div className="bg-[#1A1A1A] rounded-xl p-6">
          <h3 className="text-3xl md:text-4xl text-white uppercase tracking-tight text-center" style={{ fontWeight: 700 }}>
            Play Severity Guesser 🔬
          </h3>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30">
        <h4 className="text-xl text-white mb-4" style={{ fontWeight: 600, color: '#C07DFF' }}>
          Instructions:
        </h4>
        <ul className="text-gray-300 space-y-2 list-disc list-inside">
          <li>Choose a patient between the 14 possible.</li>
          <li>Based on the statistics given - Sex, Age, Smoker and immune cell distribution - guess the severity of the patient.</li>
          <li>Click to reveal the answer and see if you were correct!</li>
        </ul>
      </div>

      {/* Game Widget */}
      <div className="w-full">
        <iframe
          src="https://alexiagiroud.github.io/avADAkedavra25_website/figures/Game/game_widget.html"
          className="w-full h-[730px] border-0 rounded-xl"
          title="Severity Guesser Game"
          style={{ background: 'transparent' }}
        />
      </div>
    </div>
  );
}
