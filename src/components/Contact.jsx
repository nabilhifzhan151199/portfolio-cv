import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionTitle } from './About'

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="section-hidden max-w-3xl mx-auto text-center">
        <SectionTitle label="Get In Touch" />

        <p className="mt-6 text-gray-400 leading-relaxed">
          I&apos;m currently open to new opportunities — whether that&apos;s a full-time role,
          freelance data project, or just a chat about data. My inbox is always open.
        </p>

        <a
          href="mailto:nabil.hifzhan@gmail.com"
          className="mt-8 inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg transition-all duration-200 shadow-[0_0_24px_rgba(99,102,241,0.35)] hover:shadow-[0_0_36px_rgba(99,102,241,0.55)]"
        >
          <span>✉️</span>
          Say Hello
        </a>

        <div className="mt-14 flex justify-center gap-6 flex-wrap">
          <SocialLink
            href="https://www.linkedin.com/in/nabil-hifzhan/"
            label="LinkedIn"
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            }
          />
          <SocialLink
            href="mailto:nabil.hifzhan@gmail.com"
            label="Email"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/50 transition-all duration-200 text-sm font-medium"
    >
      {icon}
      {label}
    </a>
  )
}
