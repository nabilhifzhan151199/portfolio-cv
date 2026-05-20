import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionTitle } from './About'

const projects = [
  {
    title: 'GCP Enterprise Data Lake — Pontiac Land Group',
    description:
      'Architected and implemented a scalable enterprise data lake on Google Cloud Platform integrating Cloud Storage, BigQuery, and Cloud Functions to centralize business data across the organization and enable advanced analytics.',
    tags: ['GCP', 'BigQuery', 'Cloud Functions', 'Cloud Storage', 'ETL'],
    highlights: ['Enterprise-scale', 'Centralized data', '10 dashboards'],
    icon: '☁️',
    color: 'indigo',
    company: 'Pontiac Land Group · 2025',
  },
  {
    title: 'Supply Chain Manufacturing Data Foundation',
    description:
      'Built the end-to-end data foundation for 6 Unilever factories — 85+ datasets in a data mart sourced from Azure Databricks, with 15 automated Power BI dashboards achieving 80% data coverage and eliminating 120 hours of manual work per month.',
    tags: ['Azure Databricks', 'Power BI', 'dbt', 'Data Mart', 'SQL'],
    highlights: ['85+ datasets', '6 factories', '~120 hrs saved/month'],
    icon: '🏭',
    color: 'cyan',
    company: 'Unilever · 2022–2025',
  },
  {
    title: 'Board Performance Radar (Director Award 2023)',
    description:
      'Led, developed and demonstrated an automated board performance deck covering 30+ cross-department KPIs with a full ETL pipeline. Became the primary data source for board meetings at Unilever SEA&I, winning the Uniops SEA&I Director Award in December 2023.',
    tags: ['Power BI', 'Azure', 'ETL Pipeline', 'KPI Dashboard', 'SAP'],
    highlights: ['30+ KPIs', 'Board-level', 'Director Award 2023'],
    icon: '🏆',
    color: 'amber',
    company: 'Unilever · 2023',
  },
  {
    title: 'SAP Data Mart Replication',
    description:
      'Developed and maintained 30 SAP-replicated datasets in the data mart by recreating SAP backend logic, enabling fully automated data extraction and fulfilling business reporting requirements without manual SAP access.',
    tags: ['SAP ERP', 'SQL', 'Azure Databricks', 'Python', 'Data Engineering'],
    highlights: ['30 datasets', 'Full automation', 'SAP backend logic'],
    icon: '⚙️',
    color: 'emerald',
    company: 'Unilever · 2022–2025',
  },
  {
    title: 'Telecom RPA Solution — Deloitte',
    description:
      'Developed and implemented end-to-end RPA solutions for Indonesia\'s largest telecommunications company, managing 30+ production robots (peak FTE ~58). Monitored ROI targets and collaborated with stakeholders to identify and design new automation opportunities.',
    tags: ['UiPath', 'RPA', 'Process Automation', 'Ephesoft', 'Python'],
    highlights: ['30+ robots', '~58 FTE peak', 'ROI-tracked'],
    icon: '🤖',
    color: 'violet',
    company: 'Deloitte Consulting · 2021–2022',
  },
  {
    title: 'AoDocs → AppSheet Migration',
    description:
      'Led and implemented the migration of all document management modules from AoDocs to Google AppSheet, including the design of 10 AppSheet applications for data collection and workflow automation, saving SGD 30k per year in licensing costs.',
    tags: ['AppSheet', 'GCP', 'Google Apps Script', 'Workflow Automation'],
    highlights: ['SGD 30k saved/year', '10 apps built', 'Non-technical users'],
    icon: '📱',
    color: 'sky',
    company: 'Pontiac Land Group · 2025',
  },
]

const colorMap = {
  indigo: 'border-indigo-500/30 hover:border-indigo-500/60',
  cyan: 'border-cyan-500/30 hover:border-cyan-500/60',
  emerald: 'border-emerald-500/30 hover:border-emerald-500/60',
  violet: 'border-violet-500/30 hover:border-violet-500/60',
  amber: 'border-amber-500/30 hover:border-amber-500/60',
  sky: 'border-sky-500/30 hover:border-sky-500/60',
}

const highlightColorMap = {
  indigo: 'bg-indigo-900/30 text-indigo-300 border-indigo-700/30',
  cyan: 'bg-cyan-900/30 text-cyan-300 border-cyan-700/30',
  emerald: 'bg-emerald-900/30 text-emerald-300 border-emerald-700/30',
  violet: 'bg-violet-900/30 text-violet-300 border-violet-700/30',
  amber: 'bg-amber-900/30 text-amber-300 border-amber-700/30',
  sky: 'bg-sky-900/30 text-sky-300 border-sky-700/30',
}

export default function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a14]">
      <div ref={ref} className="section-hidden max-w-6xl mx-auto">
        <SectionTitle label="Portfolio & Projects" />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl bg-[#0d0d1a] border transition-all duration-300 p-6 flex flex-col ${colorMap[p.color]} hover:-translate-y-1`}
            >
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="text-base font-bold text-white mb-1">{p.title}</h3>
              <div className="text-xs text-gray-600 mb-3 font-mono">{p.company}</div>
              <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-4">{p.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.highlights.map(h => (
                  <span key={h} className={`text-xs px-2 py-0.5 rounded border font-medium ${highlightColorMap[p.color]}`}>
                    {h}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
