import { useEffect, useRef } from 'react'

const roles = ['Data & System Engineer', 'Data Analytics Engineer', 'BI Dashboard Developer', 'RPA & Automation Specialist']

export default function Hero() {
  const roleRef = useRef(null)

  useEffect(() => {
    let idx = 0
    let charIdx = 0
    let deleting = false
    let timer

    const type = () => {
      const current = roles[idx]
      if (!roleRef.current) return

      if (!deleting) {
        roleRef.current.textContent = current.slice(0, charIdx + 1)
        charIdx++
        if (charIdx === current.length) {
          deleting = true
          timer = setTimeout(type, 1800)
          return
        }
      } else {
        roleRef.current.textContent = current.slice(0, charIdx - 1)
        charIdx--
        if (charIdx === 0) {
          deleting = false
          idx = (idx + 1) % roles.length
        }
      }
      timer = setTimeout(type, deleting ? 50 : 80)
    }

    timer = setTimeout(type, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-cyan-600/8 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        {/* Profile picture */}
        <div className="mx-auto mb-8 relative w-36 h-36 sm:w-44 sm:h-44">
          <div className="w-full h-full rounded-full border-2 border-indigo-500/50 overflow-hidden bg-surface-2 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.25)]">
            <img
              src="/portfolio-cv/Formal Photo.JPG"
              alt="Muhammad Nabil Hifzhan"
              className="w-full h-full object-cover"
              onError={e => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextSibling.style.display = 'flex'
              }}
            />
            <div className="hidden w-full h-full items-center justify-center">
              <span className="text-4xl font-bold text-indigo-400">MN</span>
            </div>
          </div>
          <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#060612] shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
          Muhammad Nabil Hifzhan
        </h1>

        <div className="h-10 flex items-center justify-center mb-6">
          <span className="text-xl sm:text-2xl font-semibold gradient-text">
            <span ref={roleRef} />
            <span className="animate-pulse text-indigo-400">|</span>
          </span>
        </div>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Data & Analytics professional delivering end-to-end data solutions across
          FMCG, consulting, real estate, and technology-driven organizations in
          Singapore & Indonesia.
        </p>

        <div className="mt-4 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs tracking-widest uppercase">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-indigo-500/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
