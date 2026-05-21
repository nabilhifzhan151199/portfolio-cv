import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="section-hidden max-w-6xl mx-auto">
        <SectionTitle label="About Me" />

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-gray-400 leading-relaxed">
            <p>
              I&apos;m a <span className="text-indigo-400 font-medium">Data Analytics/Engineer professional</span> with
              5+ years of experience delivering end-to-end data solutions across FMCG, consulting,
              real estate, and technology-driven organizations.
            </p>
            <p>
              I architect data solutions from raw ingestion through <span className="text-indigo-400 font-medium">transformation 
              and modelling</span>, ensuring everything is clean using Python and SQL. I design and 
              deploy <span className="text-indigo-400 font-medium">cloud pipelines</span> across Azure, GCP, and AWS for batch 
              and event-driven workloads. then surface insights through <span className="text-indigo-400 font-medium">BI 
              dashboards</span> in Power BI and Tableau. I also <span className="text-indigo-400 font-medium">integrate 
              data</span> across APIs and enterprise platforms to ensure a reliable source of truth.
            </p>
            <p>
              At <span className="text-indigo-400 font-medium">Pontiac Land Group</span>, I architected a GCP enterprise data 
              lake and saved SGD 30k/year through platform migration. At <span className="text-indigo-400 font-medium">Unilever
              </span>, I built the Supply Chain Manufacturing Data Foundation for 6 factories — 85+ datasets, 15 automated 
              dashboards — eliminating 120 hours of manual work per month. At <span className="text-indigo-400 font-medium">
              Deloitte</span>, I delivered RPA solutions for Indonesia&apos;s largest telecom company.
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

          <div className="glow-border rounded-2xl bg-[#0d0d1a] p-6 space-y-4">
            {[
              { icon: '📍', label: 'Location', value: 'Singapore' },
              { icon: '💼', label: 'Current Role', value: 'Data & System Analyst/Engineer · Pontiac Land Group' },
              { icon: '✉️', label: 'Email', value: 'nabil.hifzhan@gmail.com' },
              { icon: '📱', label: 'Phone', value: '+65 8650 8946' },
              { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/nabil-hifzhan', href: 'https://www.linkedin.com/in/nabil-hifzhan' },
              { icon: '🎓', label: 'Education', value: 'B.Eng Chemical Engineering — Universitas Indonesia, GPA 3.65' },
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
