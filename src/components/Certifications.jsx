import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionTitle } from './About'

const certs = [
  {
    name: '[Your Certification Name]',
    issuer: 'Amazon Web Services (AWS)',
    date: '2024',
    icon: '☁️',
    badge: 'AWS',
    color: 'from-orange-600/20 to-yellow-600/10 border-orange-500/30',
    badgeColor: 'text-orange-400',
  },
  {
    name: '[Your Certification Name]',
    issuer: 'Databricks',
    date: '2023',
    icon: '⚡',
    badge: 'Databricks',
    color: 'from-red-600/20 to-rose-600/10 border-red-500/30',
    badgeColor: 'text-red-400',
  },
  {
    name: '[Your Certification Name]',
    issuer: 'Google Cloud',
    date: '2023',
    icon: '🌐',
    badge: 'GCP',
    color: 'from-blue-600/20 to-cyan-600/10 border-blue-500/30',
    badgeColor: 'text-blue-400',
  },
  {
    name: '[Your Certification Name]',
    issuer: 'Microsoft',
    date: '2022',
    icon: '📊',
    badge: 'Microsoft',
    color: 'from-indigo-600/20 to-violet-600/10 border-indigo-500/30',
    badgeColor: 'text-indigo-400',
  },
]

export default function Certifications() {
  const ref = useScrollReveal()

  return (
    <section id="certifications" className="py-24 px-6">
      <div ref={ref} className="section-hidden max-w-6xl mx-auto">
        <SectionTitle label="Certifications" />
        <p className="mt-3 text-gray-500 text-sm">
          * Replace placeholders with your actual certification names.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((c) => (
            <div
              key={c.name}
              className={`rounded-xl bg-gradient-to-br ${c.color} border p-5 card-hover flex flex-col items-center text-center`}
            >
              <div className="text-4xl mb-3">{c.icon}</div>
              <span className={`text-xs font-bold uppercase tracking-widest mb-2 ${c.badgeColor}`}>
                {c.badge}
              </span>
              <h3 className="text-sm font-semibold text-white mb-1 leading-snug">{c.name}</h3>
              <div className="text-xs text-gray-500 mt-auto pt-3">{c.issuer} · {c.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
