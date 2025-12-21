export function ThankYou() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-gradient-to-br from-[#D61C8C]/20 via-[#C07DFF]/20 to-[#F29900]/20 rounded-2xl p-12 border-2 border-[#C07DFF]/50">
          <h2 className="text-4xl md:text-5xl text-white mb-8" style={{ fontWeight: 800 }}>
            Thank you for following along
          </h2>
          
          {/* Confetti explosion */}
          <div className="flex justify-center gap-3 mb-8 text-5xl animate-bounce">
            <span style={{ color: '#D61C8C' }}>🎉</span>
            <span style={{ color: '#C07DFF' }}>✨</span>
            <span style={{ color: '#F29900' }}>🎊</span>
            <span style={{ color: '#FFC9E9' }}>🎈</span>
            <span style={{ color: '#FFBC47' }}>🌟</span>
          </div>

          <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed">
            Check out the{' '}
            <span style={{ color: '#D61C8C', fontWeight: 700 }}>more information</span>
            {' '}and the{' '}
            <span style={{ color: '#C07DFF', fontWeight: 700 }}>members of the team</span>
            {' '}after this{' '}
            <span style={{ color: '#F29900', fontWeight: 700 }}>!</span>
          </p>
        </div>
      </div>
    </section>
  );
}
