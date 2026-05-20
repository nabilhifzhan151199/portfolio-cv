import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionTitle } from './About'

const education = [
  {
    degree: '[Your Degree] — e.g. Bachelor of Computer Science',
    school: '[Your University Name]',
    period: '2015 – 2019',
    description:
      'Major in [Your Major]. Relevant coursework: Database Systems, Statistics, Data Structures, Machine Learning, Business Intelligence.',
    icon: '🎓',
  },
]

const courses = [
  'Data Engineering on Google Cloud (Coursera)',
  'Apache Kafka for Beginners (Udemy)',
  'dbt Fundamentals (dbt Labs)',
  'Databricks Lakehouse Fundamentals',
  'Power BI Data Analyst Associate (Microsoft)',
]

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education" className="py-24 px-6 bg-[#0a0a14]">
      <div ref={ref} className="section-hidden max-w-6xl mx-auto">
        <SectionTitle label="Education" />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Formal education */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Formal Education</h3>
            {education.map((e, i) => (
              <div key={i} className="glow-border rounded-xl bg-[#0d0d1a] p-6 card-hover">
                <div className="flex gap-4 items-start">
                  <span className="text-3xl">{e.icon}</span>
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">{e.degree}</h3>
                    <div className="text-indigo-400 text-sm mt-1 font-medium">{e.school}</div>
                    <div className="text-gray-500 text-xs font-mono mt-1">{e.period}</div>
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">{e.description}</p>
                  </div>
                </div>
              </div>
            ))}
            <p className="text-xs text-gray-600 italic">* Update with your actual education details.</p>
          </div>

          {/* Online courses */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Online Courses & Training</h3>
            <div className="space-y-3">
              {courses.map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#0d0d1a] border border-white/5">
                  <span className="text-indigo-500 text-sm">✓</span>
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
