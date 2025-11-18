import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0
      setProgress(pct)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 select-none">
      <div className="rotate-[-90deg] origin-left text-xs tracking-widest text-black/60 dark:text-white/60">
        {progress.toFixed(0)}%
      </div>
      <div className="mt-2 h-24 w-1 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
        <div
          className="w-full bg-black dark:bg-white"
          style={{ height: `${Math.max(6, progress)}%` }}
        />
      </div>
    </div>
  )
}