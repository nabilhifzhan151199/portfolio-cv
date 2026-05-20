import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionTitle } from './About'

const experiences = [
  {
    title: 'Senior Data Engineer',
    company: '[Your Company Name]',
    period: '2023 – Present',
    type: 'Full-time',
    bullets: [
      'Designed and maintained real-time data pipelines processing 50M+ events/day using Apache Kafka and Spark Streaming',
      'Migrated legacy ETL jobs to a modern dbt + Airflow stack, reducing pipeline failures by 40%',
      'Built a centralised data warehouse on AWS (Redshift + S3) serving analytics teams across 4 business units',
      'Led adoption of Databricks for large-scale ML feature engineering and batch transformation',
    ],
    tags: ['Kafka', 'Spark', 'Airflow', 'dbt', 'AWS', 'Databricks'],
  },
  {
    title: 'Data Analyst',
    company: '[Your Company Name]',
    period: '2021 – 2023',
    type: 'Full-time',
    bullets: [
      'Developed and maintained 15+ Power BI dashboards used daily by C-suite and operations teams',
      'Automated weekly/monthly reporting processes with Python and Power Automate, saving 20+ hours/month',
      'Conducted cohort analysis and customer segmentation using SQL and Python (pandas, scikit-learn)',
      'Collaborated with product teams to define KPIs and instrument tracking via API integrations',
    ],
    tags: ['Power BI', 'Python', 'SQL', 'Power Automate', 'PostgreSQL'],
  },
  {
    title: 'Junior Data Analyst',
    company: '[Your Company Name]',
    period: '2019 – 2021',
    type: 'Full-time',
    bullets: [
      'Built and maintained SQL Server stored procedures and SSIS packages for data transformation',
      'Created Tableau dashboards for sales and finance stakeholders',
      'Developed VBA macros to automate Excel-based reporting workflows',
      'Supported UiPath RPA implementations for back-office process automation',
    ],
    tags: ['SQL Server', 'Tableau', 'VBA', 'UiPath', 'SSIS'],
  },
]

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="py-24 px-6">
      <div ref={ref} className="section-hidden max-w-6xl mx-auto">
        <SectionTitle label="Work Experience" />

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-500/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="sm:pl-14 relative">
                {/* Dot */}
                <div className="hidden sm:block absolute left-0 top-6 w-8 h-8 rounded-full bg-[#0d0d1a] border-2 border-indigo-500 flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                </div>

                <div className="glow-border rounded-2xl bg-[#0d0d1a] p-6 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                      <div className="text-indigo-400 font-medium mt-0.5">{exp.company}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm text-gray-400 font-mono">{exp.period}</div>
                      <span className="text-xs px-2 py-0.5 rounded bg-indigo-900/40 text-indigo-300 border border-indigo-700/30 mt-1 inline-block">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-gray-400">
                        <span className="text-indigo-500 mt-0.5 shrink-0">▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(t => (
                      <span key={t} className="skill-tag text-xs px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-600 italic">
          * Replace [Your Company Name] placeholders with your actual employer names.
        </p>
      </div>
    </section>
  )
}
