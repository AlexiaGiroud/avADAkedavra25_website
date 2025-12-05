import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data showing cell distribution across different COVID severity levels
const data = [
  {
    severity: 'Asymptomatic',
    'T Cells': 32,
    'B Cells': 18,
    'NK Cells': 15,
    'Monocytes': 22,
    'Dendritic Cells': 8,
    'Neutrophils': 5,
  },
  {
    severity: 'Mild',
    'T Cells': 28,
    'B Cells': 16,
    'NK Cells': 14,
    'Monocytes': 25,
    'Dendritic Cells': 10,
    'Neutrophils': 7,
  },
  {
    severity: 'Moderate',
    'T Cells': 24,
    'B Cells': 14,
    'NK Cells': 12,
    'Monocytes': 28,
    'Dendritic Cells': 9,
    'Neutrophils': 13,
  },
  {
    severity: 'Severe',
    'T Cells': 18,
    'B Cells': 10,
    'NK Cells': 8,
    'Monocytes': 32,
    'Dendritic Cells': 7,
    'Neutrophils': 25,
  },
  {
    severity: 'Critical',
    'T Cells': 12,
    'B Cells': 8,
    'NK Cells': 5,
    'Monocytes': 35,
    'Dendritic Cells': 5,
    'Neutrophils': 35,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1A1A1A] border border-[#6811BA]/50 rounded-lg p-4 shadow-xl">
        <p className="text-white mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function CellDistributionChart() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Immune Cell Distribution Across COVID-19 Severity
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore how immune cell populations shift as disease severity increases. 
            Hover over the bars to see detailed percentages.
          </p>
        </div>
        
        <div className="bg-[#3A3A3A] rounded-2xl p-8 border border-[#6811BA]/30">
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#555" />
              <XAxis 
                dataKey="severity" 
                stroke="#fff"
                tick={{ fill: '#fff' }}
              />
              <YAxis 
                stroke="#fff"
                tick={{ fill: '#fff' }}
                label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', fill: '#fff' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ color: '#fff' }}
                iconType="circle"
              />
              <Bar dataKey="T Cells" fill="#C07DFF" />
              <Bar dataKey="B Cells" fill="#E5C9FF" />
              <Bar dataKey="NK Cells" fill="#FFC9E9" />
              <Bar dataKey="Monocytes" fill="#D61C8C" />
              <Bar dataKey="Dendritic Cells" fill="#F29900" />
              <Bar dataKey="Neutrophils" fill="#FFBC47" />
            </BarChart>
          </ResponsiveContainer>
          
          <p className="text-sm text-gray-400 mt-6 text-center">
            Data represents the percentage distribution of major immune cell types in patients with varying COVID-19 severity levels.
            Note the dramatic shift in T cell and neutrophil populations in severe cases.
          </p>
        </div>
      </div>
    </section>
  );
}
