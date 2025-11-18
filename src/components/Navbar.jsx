import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Navbar() {
  const [theme, setTheme] = useState('dark')
  const [email, setEmail] = useState('')
  const [referral, setReferral] = useState('')

  useEffect(() => {
    const saved = window.localStorage.getItem('theme') || 'dark'
    setTheme(saved)
    document.documentElement.classList.toggle('dark', saved === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    window.localStorage.setItem('theme', next)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    // In a real app, send to backend. For now, provide friendly feedback.
    alert(`Thanks! We'll reach out at ${email}${referral ? ` (referred by: ${referral})` : ''}.`)
    setEmail('')
    setReferral('')
  }

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-black/30 dark:bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg" />
          <span className="font-semibold text-white tracking-tight">Cosmos</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a href="https://cosmos.so/login" className="text-sm text-white/80 hover:text-white transition">Log in</a>
          <form onSubmit={onSubmit} className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-9 rounded-md bg-white/10 text-white placeholder-white/50 px-3 text-sm outline-none focus:ring-2 ring-purple-400"
            />
            <input
              type="text"
              placeholder="Where did you hear about us?"
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
              className="h-9 rounded-md bg-white/10 text-white placeholder-white/50 px-3 text-sm outline-none focus:ring-2 ring-purple-400 min-w-[220px]"
            />
            <button type="submit" className="h-9 px-4 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium hover:opacity-90 transition">Sign up</button>
          </form>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="h-9 w-9 grid place-items-center rounded-md bg-white/10 text-white hover:bg-white/20 transition">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="h-9 w-9 grid place-items-center rounded-md bg-white/10 text-white hover:bg-white/20 transition">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
