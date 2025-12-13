import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  label: string;
  suffix: string;
  color: string;
}

const stats: Stat[] = [
  {
    value: 775000000,
    label: 'COVID-19 Cases',
    suffix: '+',
    color: '#D61C8C',
  },
  {
    value: 40,
    label: 'Asymptomatic Patients',
    suffix: '%',
    color: '#C07DFF',
  },
  {
    value: 7000000,
    label: 'COVID-19 Deaths',
    suffix: '+',
    color: '#F29900',
  },
];

function formatNumber(num: number, suffix: string): string {
  if (suffix === '%') {
    return num.toFixed(0);
  }
  
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function CountingNumber({ targetValue, suffix, color }: { targetValue: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = targetValue / steps;
          let current = 0;
          const stepDuration = duration / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= targetValue) {
              setCount(targetValue);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, stepDuration);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue, hasAnimated]);

  return (
    <div ref={elementRef} className="text-center">
      <div 
        className="text-5xl md:text-7xl mb-4"
        style={{ 
          color: color,
          fontWeight: 900
        }}
      >
        {formatNumber(count, suffix)}{suffix}
      </div>
    </div>
  );
}

export function CovidStats() {
  return (
    <section className="px-6 py-16 bg-[#2A2A2A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <CountingNumber 
                targetValue={stat.value} 
                suffix={stat.suffix}
                color={stat.color}
              />
              <p className="text-white text-lg md:text-xl text-center mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <div className="text-gray-400 text-sm prose prose-invert max-w-3xl mx-auto text-left">
            <p className="mb-6">
              According to the World Health Organization (WHO), more than 778 million cases of COVID have been reported since the beginning of the global pandemic in late 2019 (<a href="https://data.who.int/dashboards/covid19/cases?n=o" className="text-gray-300 underline">WHO COVID-19 dashboard</a>). In early 2020, the rapid spread of the virus led to unprecedented public health problems, and a global health crisis which had us all locked at home for a few months. Masks, diagnostic swab tests and social distancing had become our new reality.
            </p>

            <p className="mb-6">
              One striking observation soon emerged: COVID-19 doesn’t affect us all in the same way. While around 60% of infected individuals experience mild or no symptoms, as reported in a 2020 Nature article (<a href="https://www.nature.com/articles/d41586-020-00822-x" className="text-gray-300 underline">Nature News</a>), the disease has also proven deadly, causing over 7 million COVID-related deaths worldwide.
            </p>

            <p className="mb-6">
              Understanding what determines the severity of an individual's response to COVID-19 has therefore been a central question in research. Literature shows that the differences in symptom severity may be linked to the distribution of immune cell types in the organism (<a href="https://www.nature.com/articles/s41591-021-01329-2" className="text-gray-300 underline">Nature Medicine</a>).
            </p>

            <p className="mb-6">
              Beyond cell composition, we hypothesized that the way immune cells communicate with one another may also play an important role. Even when the same cell types are present, signalling pathways may be activated differently depending on symptom severity. In some cases, cellular communication may even be dysregulated or impaired.
            </p>

            <p className="mb-6">Let’s dig into the secrets of cell communication together! 🔍</p>

            <div className="text-left text-xs text-gray-500 mt-4">
              <strong>References</strong>
              <ol className="ml-4 list-decimal">
                <li>World Health Organization. WHO COVID-19 dashboard. https://data.who.int/dashboards/covid19/cases?n=o (accessed 2025). No DOI available.</li>
                <li>Normile, D. (2020). Coronavirus cases may be higher than reported. Nature News. doi:10.1038/d41586-020-00822-x.</li>
                <li>Schulte-Schrepping, J. et al. (2021). Severe COVID-19 is marked by a dysregulated myeloid cell compartment. Nature Medicine. doi:10.1038/s41591-021-01329-2.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
