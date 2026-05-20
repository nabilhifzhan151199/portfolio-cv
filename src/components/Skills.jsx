import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionTitle } from './About'

const skillGroups = [
  {
    category: 'Data Engineering & Analytics',
    icon: '⚙️',
    skills: ['SQL', 'Python', 'Apache Airflow', 'dbt', 'Apache Spark', 'Hadoop', 'Hive', 'API Integration', 'Google Apps Script'],
  },
  {
    category: 'Cloud — GCP',
    icon: '☁️',
    skills: ['BigQuery', 'Cloud Functions', 'Cloud Storage', 'Dataflow'],
  },
  {
    category: 'Cloud — Azure',
    icon: '🔷',
    skills: ['Azure Databricks', 'Azure Data Factory', 'Azure Synapse'],
  },
  {
    category: 'BI & Visualization',
    icon: '📊',
    skills: ['Power BI', 'Tableau', 'Looker Studio', 'DAX'],
  },
  {
    category: 'Automation & RPA',
    icon: '🤖',
    skills: ['Power Automate', 'UiPath', 'Google AppSheet', 'VBA', 'Ephesoft'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['Microsoft SQL Server', 'MySQL', 'PostgreSQL', 'SAP ERP'],
  },
]

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0a14]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="section-hidden">
          <SectionTitle label="Technical Skills" />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      </div>
    </section>
  )
}
