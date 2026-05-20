import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionTitle } from './About'

const certs = [
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    code: 'AZ-900',
    issuer: 'Microsoft',
    date: '',
    icon: '🔷',
    badge: 'Microsoft Azure',
    color: 'from-blue-600/20 to-cyan-600/10 border-blue-500/30',
    badgeColor: 'text-blue-400',
  },
]

const achievements = [
  {
    title: 'Uniops SEA&I Director Award 2023',
    description: 'Successfully implemented Board Performance Radar — Dec 2023',
    icon: '🏆',
    color: 'from-amber-600/20 to-yellow-600/10 border-amber-500/30',
    badgeColor: 'text-amber-400',
    badge: 'Unilever SEA&I',
  },
  {
    title: '2nd Runner Up — Most Outstanding Student',
    description: 'Faculty of Engineering, Universitas Indonesia — June 2020',
    icon: '🥉',
    color: 'from-emerald-600/20 to-teal-600/10 border-emerald-500/30',
    badgeColor: 'text-emerald-400',
    badge: 'Universitas Indonesia',
  },
  {
    title: 'Kyoto University Winter School',
    description: 'Energy Science Programme — Jan 2021 · Feb 2021',
    icon: '🎌',
    color: 'from-rose-600/20 to-red-600/10 border-rose-500/30',
    badgeColor: 'text-rose-400',
    badge: 'Kyoto University',
  },
]

export default function Certifications() {
  const ref = useScrollReveal()

  return (
    <section id="certifications" className="py-24 px-6">
      <div ref={ref} className="section-hidden max-w-6xl mx-auto">
        <SectionTitle label="Certifications & Achievements" />

        {/* Certifications */}
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mt-12 mb-6">Certifications</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c) => (
            <div
              key={c.name}
              className={`rounded-xl bg-gradient-to-br ${c.color} border p-6 card-hover flex items-start gap-4`}
            >
              <span className="text-4xl shrink-0">{c.icon}</span>
              <div>
                <span className={`text-xs font-bold uppercase tracking-widest ${c.badgeColor}`}>{c.badge}</span>
                <div className="text-sm font-semibold text-white mt-1 leading-snug">{c.name}</div>
                <div className="text-xs text-gray-500 mt-1 font-mono">{c.code}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mt-12 mb-6">Achievements & Awards</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a) => (
            <div
              key={a.title}
              className={`rounded-xl bg-gradient-to-br ${a.color} border p-6 card-hover flex items-start gap-4`}
            >
              <span className="text-4xl shrink-0">{a.icon}</span>
              <div>
                <span className={`text-xs font-bold uppercase tracking-widest ${a.badgeColor}`}>{a.badge}</span>
                <div className="text-sm font-semibold text-white mt-1 leading-snug">{a.title}</div>
                <div className="text-xs text-gray-400 mt-1">{a.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
