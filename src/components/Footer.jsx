export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 text-center">
      <p className="text-gray-600 text-sm">
        Designed & Built by{' '}
        <span className="text-indigo-400 font-medium">Muhammad Nabil Hifzhan</span>
        {' '}· {new Date().getFullYear()}
      </p>
      <p className="text-gray-700 text-xs mt-1 font-mono">
        React + Tailwind CSS
      </p>
    </footer>
  )
}
