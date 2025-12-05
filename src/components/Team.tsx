const team = [
  {
    name: 'Alexia Giroud Nyer',
    role: 'Visualisation and Data Story Expert',
    cell: 'Dendritic Cell',
    color: '#F29900',
    description: 'Presenting information to activate understanding',
  },
  {
    name: 'Nafi Drame',
    role: 'Causal Analysis Expert',
    cell: 'NK Cell',
    color: '#FFC9E9',
    description: 'Eliminating confounders, targeting true effects',
  },
  {
    name: 'Tessnim Bechrifa',
    role: 'CellPhone DB Expert',
    cell: 'T Cell',
    color: '#C07DFF',
    description: 'Coordinating cellular communication analysis',
  },
  {
    name: 'Cheima Touhiri',
    role: 'CellPhone DB Expert',
    cell: 'B Cell',
    color: '#E5C9FF',
    description: 'Recognizing interaction patterns',
  },
  {
    name: 'Zoé Vogler',
    role: 'Pattern Recognition Expert',
    cell: 'Macrophage',
    color: '#D61C8C',
    description: 'Engulfing complexity, revealing insights',
  },
];

// Simple cell illustrations using SVG
const CellIllustration = ({ cell, color }: { cell: string; color: string }) => {
  // Different shapes for different cell types
  if (cell === 'Dendritic Cell') {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
        <circle cx="60" cy="60" r="25" fill={color} opacity="0.3" />
        <circle cx="60" cy="60" r="20" fill={color} />
        {/* Dendrites */}
        <line x1="60" y1="40" x2="60" y2="15" stroke={color} strokeWidth="3" />
        <line x1="60" y1="80" x2="60" y2="105" stroke={color} strokeWidth="3" />
        <line x1="40" y1="60" x2="15" y2="60" stroke={color} strokeWidth="3" />
        <line x1="80" y1="60" x2="105" y2="60" stroke={color} strokeWidth="3" />
        <line x1="45" y1="45" x2="25" y2="25" stroke={color} strokeWidth="3" />
        <line x1="75" y1="75" x2="95" y2="95" stroke={color} strokeWidth="3" />
        <line x1="75" y1="45" x2="95" y2="25" stroke={color} strokeWidth="3" />
        <line x1="45" y1="75" x2="25" y2="95" stroke={color} strokeWidth="3" />
      </svg>
    );
  } else if (cell === 'NK Cell') {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
        <circle cx="60" cy="60" r="30" fill={color} opacity="0.3" />
        <circle cx="60" cy="60" r="25" fill={color} />
        {/* Granules */}
        <circle cx="55" cy="55" r="4" fill="#fff" opacity="0.8" />
        <circle cx="68" cy="58" r="4" fill="#fff" opacity="0.8" />
        <circle cx="58" cy="68" r="4" fill="#fff" opacity="0.8" />
      </svg>
    );
  } else if (cell === 'T Cell') {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
        <circle cx="60" cy="60" r="28" fill={color} opacity="0.3" />
        <circle cx="60" cy="60" r="23" fill={color} />
        {/* T-cell receptor complex */}
        <rect x="55" y="30" width="10" height="20" fill="#fff" opacity="0.6" rx="2" />
      </svg>
    );
  } else if (cell === 'B Cell') {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
        <circle cx="60" cy="60" r="28" fill={color} opacity="0.3" />
        <circle cx="60" cy="60" r="23" fill={color} />
        {/* Antibody receptors */}
        <path d="M 55 35 Q 50 30 45 35" stroke="#fff" strokeWidth="2" fill="none" opacity="0.7" />
        <path d="M 65 35 Q 70 30 75 35" stroke="#fff" strokeWidth="2" fill="none" opacity="0.7" />
        <circle cx="45" cy="38" r="3" fill="#fff" opacity="0.7" />
        <circle cx="75" cy="38" r="3" fill="#fff" opacity="0.7" />
      </svg>
    );
  } else if (cell === 'Macrophage') {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
        <circle cx="60" cy="60" r="30" fill={color} opacity="0.3" />
        <path 
          d="M 60 60 m -25 0 a 25 25 0 1 0 50 0 a 25 25 0 1 0 -50 0" 
          fill={color} 
        />
        {/* Pseudopods */}
        <ellipse cx="35" cy="50" rx="8" ry="12" fill={color} opacity="0.7" />
        <ellipse cx="85" cy="65" rx="10" ry="8" fill={color} opacity="0.7" />
        {/* Nucleus */}
        <ellipse cx="60" cy="60" rx="12" ry="8" fill="#fff" opacity="0.3" />
      </svg>
    );
  }
  return null;
};

export function Team() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-white text-center mb-4">
          Meet the Team
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Each team member brings unique expertise, just like different immune cells working together
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#3A3A3A] rounded-3xl p-6 border-2 hover:transform hover:scale-105 transition-all text-center"
              style={{ borderColor: `${member.color}40` }}
            >
              <div 
                className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 relative"
                style={{ backgroundColor: `${member.color}10` }}
              >
                <CellIllustration cell={member.cell} color={member.color} />
              </div>
              
              <div className="mb-3">
                <div 
                  className="text-sm uppercase tracking-wider mb-2 opacity-80"
                  style={{ color: member.color }}
                >
                  {member.cell}
                </div>
                <h3 className="text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {member.role}
                </p>
              </div>
              
              <p className="text-xs text-gray-500 italic mt-3">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
