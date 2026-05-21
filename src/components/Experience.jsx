import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionTitle } from './About'

const experiences = [
  {
    title: 'Data & System Analyst/Engineer',
    company: 'Pontiac Land Group',
    location: 'Singapore',
    period: 'Feb 2025 – Present',
    type: 'Full-time',
    bullets: [
      'Led the design and implementation of a scalable enterprise data lake on Google Cloud Platform, integrating Cloud Storage, BigQuery, and Cloud Functions to centralize business data and enable advanced analytics.',
      'Developed and maintained 10 automated dashboards along with ETL pipelines, increasing operational efficiency by 70% and reducing manual work by ~60 hours per month.',
      'Saved annual cost of SGD 30k/year by leading migration of all modules from AoDocs to AppSheet.',
      'Designed and implemented 10 AppSheet applications to automate data collection and workflow management for non-technical users.',
      'Led a company-wide data cleanup initiative, designing a robust database architecture to support scalable and reliable data management.',
    ],
    tags: ['System Integration & Migration', 'Data Analytics & Engineering', 'Database Design', 'Cloud Architecture', 'Data Visualization', 'Chatbot', 'Automation' ],
  },
  {
    title: 'Data Analytics/Engineer — Finance & Supply Chain',
    company: 'Unilever',
    location: 'Indonesia',
    period: 'Nov 2022 – Jan 2025',
    type: 'Full-time',
    bullets: [
      'Led a team of 2 focused on creating the data foundation for Supply Chain and Finance, overseeing data ingestion into Azure Databricks and developing Power BI dashboards.',
      'Built Supply Chain Manufacturing Data Foundation for 6 factories: 85+ datasets, 15 automated dashboards, 80% data coverage, reducing manual operations by ~120 hours per month.',
      'Developed and maintained 30 SAP-replicated datasets in the data mart by recreating SAP backend logic, enabling automated data extraction for business reporting.',
      'Collaborated with data engineering teams to migrate and integrate 8 on-premise servers to Azure cloud, improving data accessibility and scalability.',
      'Developed and demonstrated an automated board performance deck covering 30+ cross-department KPIs — the primary data source for board meetings (Uniops SEA&I Director Award 2023).',
      'Developed and managed 5 automation workflows using Power Automate and UiPath, reducing manual processes and integrating with external platforms.',
    ],
    tags: ['Data Analytics & Engineering', 'Data Mart', 'Data Modeling', 'Data Visualization', 'System Integration', 'SAP Replication', 'Automation'],
  },
  {
    title: 'Artificial Intelligence & Data Analyst',
    company: 'Deloitte Consulting',
    location: 'Indonesia',
    period: 'Oct 2021 – Oct 2022',
    type: 'Full-time',
    bullets: [
      'Developed and implemented an end-to-end RPA solution for Indonesia\'s largest telecommunications company to improve operational efficiency and cost savings.',
      'Provided technical support and troubleshooting for 30+ robots, including the highest-FTE robot (~58 FTE), ensuring reliable production runs.',
      'Collaborated with clients and business stakeholders to identify automation opportunities, gather requirements, and design workflows.',
      'Monitored performance and utilization of each robot against ROI targets, decommissioning underperforming automations.',
    ],
    tags: ['RPA', 'ORC','Data Migration', 'Data Visualization', 'Troubleshooting'],
  },
  {
    title: 'City Growth Intern',
    company: 'Grab',
    location: 'Indonesia',
    period: 'Dec 2020 – Jun 2021',
    type: 'Internship',
    bullets: [
      'Supported strategic growth initiatives that increased GrabFood Jakarta demand by 15%, contributing performance analysis to guide commercial and marketing decisions.',
      'Planned, monitored, and optimized in-app customer assets, improving click-through rate by 10% through data-driven adjustments.',
      'Collaborated with marketing and sales teams to execute city-level campaigns.',
    ],
    tags: ['Data Analysis', 'Performance Analytics', 'Campaign Analytics'],
  },
]

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="py-24 px-6">
      <div ref={ref} className="section-hidden max-w-6xl mx-auto">
        <SectionTitle label="Work Experience" />

        <div className="mt-12 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-500/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="sm:pl-14 relative">
                <div className="hidden sm:flex absolute left-0 top-6 w-8 h-8 rounded-full bg-[#0d0d1a] border-2 border-indigo-500 items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                </div>

                <div className="glow-border rounded-2xl bg-[#0d0d1a] p-6 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                      <div className="text-indigo-400 font-medium mt-0.5">
                        {exp.company}
                        <span className="text-gray-500 font-normal"> · {exp.location}</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm text-gray-400 font-mono">{exp.period}</div>
                      <span className={`text-xs px-2 py-0.5 rounded border mt-1 inline-block ${
                        exp.type === 'Internship'
                          ? 'bg-cyan-900/40 text-cyan-300 border-cyan-700/30'
                          : 'bg-indigo-900/40 text-indigo-300 border-indigo-700/30'
                      }`}>
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
      </div>
    </section>
  )
}
