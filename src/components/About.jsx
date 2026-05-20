import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="section-hidden max-w-6xl mx-auto">
        <SectionTitle label="About Me" />

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-5 text-gray-400 leading-relaxed">
            <p>
              I&apos;m a passionate <span className="text-indigo-400 font-medium">Data Engineer & Data Analyst</span> with
              over 5 years of experience designing and optimizing data infrastructure, building end-to-end
              ETL pipelines, and translating complex datasets into clear, actionable business insights.
            </p>
            <p>
              My expertise spans the full data stack — from ingesting raw data with Kafka and Spark, to
              transforming it with dbt and Airflow, to surfacing it in Power BI or Tableau dashboards that
              stakeholders actually use. I believe good data engineering is invisible: pipelines just work,
              data is always fresh, and analysts can trust their numbers.
            </p>
            <p>
              I thrive in cross-functional environments, working closely with business teams to
              understand their questions and engineers to ensure scalability. I&apos;m also experienced
              in RPA automation using UiPath and Power Automate to eliminate repetitive manual processes.
            </p>
            <div className="pt-2">
              <a
                href="mailto:nabil.hifzhan@gmail.com"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                Get in touch →
              </a>
            </div>
          </div>

          {/* Info card */}
          <div className="glow-border rounded-2xl bg-[#0d0d1a] p-6 space-y-4">
            {[
              { icon: '📍', label: 'Location', value: 'Indonesia' },
              { icon: '💼', label: 'Role', value: 'Data Engineer & Data Analyst' },
              { icon: '✉️', label: 'Email', value: 'nabil.hifzhan@gmail.com' },
              { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/nabil-hifzhan', href: 'https://www.linkedin.com/in/nabil-hifzhan/' },
              { icon: '🟢', label: 'Status', value: 'Open to opportunities' },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="text-lg w-7 shrink-0">{icon}</span>
                <div>
                  <div className="text-xs text-gray-600 uppercase tracking-wider mb-0.5">{label}</div>
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors">
                      {value}
                    </a>
                  ) : (
                    <div className="text-gray-200 text-sm">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionTitle({ label }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-indigo-500 text-sm">{'// '}</span>
      <h2 className="text-3xl font-bold text-white">{label}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/40 to-transparent" />
    </div>
  )
}
