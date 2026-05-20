import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionTitle } from './About'

const skillGroups = [
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: ['Python', 'SQL', 'R', 'VBA'],
  },
  {
    category: 'Big Data & Streaming',
    icon: '⚡',
    skills: ['Apache Spark', 'Apache Kafka', 'Hadoop', 'Hive', 'Databricks'],
  },
  {
    category: 'Data Pipeline & Orchestration',
    icon: '🔄',
    skills: ['Apache Airflow', 'dbt', 'ETL/ELT', 'API Integration'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'NoSQL'],
  },
  {
    category: 'Data Visualization & BI',
    icon: '📊',
    skills: ['Power BI', 'Tableau', 'Looker', 'DAX', 'Data Storytelling'],
  },
  {
    category: 'Cloud Platforms',
    icon: '☁️',
    skills: ['AWS', 'Google Cloud Platform', 'Microsoft Azure'],
  },
  {
    category: 'Automation & RPA',
    icon: '🤖',
    skills: ['UiPath', 'Power Automate', 'Python Automation'],
  },
]

const proficiencies = [
  { label: 'Python / SQL', level: 92 },
  { label: 'Data Pipeline (Airflow, dbt)', level: 88 },
  { label: 'Big Data (Spark, Kafka)', level: 82 },
  { label: 'Power BI / Tableau', level: 90 },
  { label: 'Cloud (AWS / GCP / Azure)', level: 78 },
  { label: 'RPA (UiPath / Power Automate)', level: 80 },
]

export default function Skills() {
  const ref = useScrollReveal()
  const barRef = useScrollReveal()

  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0a14]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="section-hidden">
          <SectionTitle label="Technical Skills" />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skillGroups.map(({ category, icon, skills }) => (
              <div key={category} className="glow-border rounded-xl bg-[#0d0d1a] p-5 card-hover">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{icon}</span>
                  <h3 className="text-sm font-semibold text-gray-300">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map(s => (
                    <span key={s} className="skill-tag text-xs px-2.5 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proficiency bars */}
        <div ref={barRef} className="section-hidden mt-16">
          <h3 className="text-lg font-semibold text-gray-300 mb-8 text-center">Proficiency Overview</h3>
          <div className="max-w-2xl mx-auto space-y-5">
            {proficiencies.map(({ label, level }) => (
              <div key={label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">{label}</span>
                  <span className="text-indigo-400 font-mono">{level}%</span>
                </div>
                <div className="h-2 bg-[#1a1a2e] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 transition-all duration-1000"
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
