import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionTitle } from './About'

const projects = [
  {
    title: 'Real-Time Sales Analytics Pipeline',
    description:
      'End-to-end streaming pipeline ingesting POS transaction data with Kafka, processing in near real-time with Spark Streaming, storing in Delta Lake on Databricks, and surfacing KPIs in a live Power BI dashboard.',
    tags: ['Kafka', 'Spark', 'Databricks', 'Delta Lake', 'Power BI', 'Python'],
    highlights: ['50M+ events/day', '< 2s latency', '99.9% uptime'],
    icon: '⚡',
    color: 'indigo',
  },
  {
    title: 'Customer Churn Prediction & Dashboard',
    description:
      'Machine learning pipeline using Python (scikit-learn) to predict customer churn from CRM data. Automated weekly retraining with Airflow, with results surfaced in a Tableau dashboard for the retention team.',
    tags: ['Python', 'scikit-learn', 'Airflow', 'PostgreSQL', 'Tableau'],
    highlights: ['85% recall', 'Weekly auto-retrain', 'Saved 30% churn'],
    icon: '🧠',
    color: 'cyan',
  },
  {
    title: 'Enterprise Data Warehouse Migration',
    description:
      'Led full migration from on-premise SQL Server to AWS Redshift. Rebuilt 80+ ETL packages as dbt models with full test coverage. Reduced query time by 60% and cut infrastructure costs by 35%.',
    tags: ['AWS Redshift', 'dbt', 'SQL Server', 'Python', 'S3'],
    highlights: ['80+ models', '60% faster queries', '35% cost reduction'],
    icon: '🏗️',
    color: 'emerald',
  },
  {
    title: 'Finance Report Automation (RPA)',
    description:
      'Automated monthly financial consolidation process using UiPath and Power Automate, pulling data from SAP, transforming in Excel/Python, and distributing formatted reports to 20+ stakeholders.',
    tags: ['UiPath', 'Power Automate', 'Python', 'VBA', 'SAP'],
    highlights: ['120 hrs saved/month', 'Zero manual errors', '20+ recipients'],
    icon: '🤖',
    color: 'violet',
  },
  {
    title: 'Supply Chain BI Dashboard Suite',
    description:
      'Designed a suite of 12 Power BI dashboards for supply chain operations, including inventory turnover, supplier performance, and logistics KPIs. Connected live to PostgreSQL and REST APIs.',
    tags: ['Power BI', 'DAX', 'PostgreSQL', 'REST API', 'SQL'],
    highlights: ['12 dashboards', '5 departments', 'Daily refresh'],
    icon: '📊',
    color: 'amber',
  },
  {
    title: 'GCP Data Lake Architecture',
    description:
      'Designed a multi-layer data lake on GCP (Cloud Storage + BigQuery + Dataflow) with Airflow orchestration. Implemented data quality checks with Great Expectations and automated alerting.',
    tags: ['GCP', 'BigQuery', 'Dataflow', 'Airflow', 'Python', 'dbt'],
    highlights: ['3-zone architecture', 'Data quality gates', 'Auto-alerts'],
    icon: '☁️',
    color: 'sky',
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
        <p className="mt-3 text-gray-500 text-sm">
          * Descriptions are representative examples — update with your real projects.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl bg-[#0d0d1a] border transition-all duration-300 p-6 flex flex-col ${colorMap[p.color]} hover:-translate-y-1`}
            >
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-4">{p.description}</p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.highlights.map(h => (
                  <span key={h} className={`text-xs px-2 py-0.5 rounded border font-medium ${highlightColorMap[p.color]}`}>
                    {h}
                  </span>
                ))}
              </div>

              {/* Tags */}
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
