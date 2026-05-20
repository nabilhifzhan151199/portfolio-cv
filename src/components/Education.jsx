import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionTitle } from './About'

const education = [
  {
    degree: 'Bachelor of Chemical Engineering',
    school: 'Universitas Indonesia',
    period: 'Aug 2017 – Aug 2021',
    gpa: '3.65 / 4.00',
    description:
      'Graduated with strong analytical and quantitative foundations. Active in engineering student organisations. Awarded 2nd Runner Up Most Outstanding Student, Faculty of Engineering (June 2020).',
    icon: '🎓',
    flag: '🇮🇩',
  },
  {
    degree: 'Energy Science — Winter School',
    school: 'Kyoto University',
    period: 'Jan 2021 – Feb 2021',
    gpa: null,
    description:
      'Selected for Kyoto University\'s competitive Winter School programme in Energy Science, gaining international academic exposure in Japan.',
    icon: '🏛️',
    flag: '🇯🇵',
  },
]

const courses = [
  'Google Cloud Professional Data Engineer (ongoing)',
  'Azure Data Engineering (DP-203)',
  'Apache Airflow for Data Engineers',
  'dbt — Analytics Engineering Bootcamp',
  'Apache Spark with PySpark',
  'Power BI Data Analyst Associate (PL-300)',
]

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education" className="py-24 px-6 bg-[#0a0a14]">
      <div ref={ref} className="section-hidden max-w-6xl mx-auto">
        <SectionTitle label="Education" />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Formal Education</h3>
            {education.map((e, i) => (
              <div key={i} className="glow-border rounded-xl bg-[#0d0d1a] p-6 card-hover">
                <div className="flex gap-4 items-start">
                  <div className="text-3xl shrink-0">{e.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold text-white leading-snug">{e.degree}</h3>
                      <span className="text-lg">{e.flag}</span>
                    </div>
                    <div className="text-indigo-400 text-sm mt-1 font-medium">{e.school}</div>
                    <div className="flex items-center gap-3 mt-1 flex-wrap">
                      <span className="text-gray-500 text-xs font-mono">{e.period}</span>
                      {e.gpa && (
                        <span className="text-xs px-2 py-0.5 rounded bg-indigo-900/40 text-indigo-300 border border-indigo-700/30 font-mono">
                          GPA {e.gpa}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">{e.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Continuous Learning</h3>
            <div className="space-y-3">
              {courses.map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#0d0d1a] border border-white/5">
                  <span className="text-indigo-500 text-sm shrink-0">✓</span>
                  <span className="text-sm text-gray-300">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
