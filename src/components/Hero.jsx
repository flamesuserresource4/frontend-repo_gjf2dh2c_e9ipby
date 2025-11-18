import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useEffect, useState } from 'react'

const words = ['photographers', 'creatives', 'designers', 'curators', 'artists']

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="hero" className="relative min-h-[100vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 pointer-events-none" />
      </div>

      <div className="relative z-10 pt-28 pb-16">
        <div className="mx-auto w-[min(1100px,80vw)] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-sm font-medium text-white/80 mb-3">Tagline</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              A discovery engine for{' '}
              <span className="inline-block align-baseline">
                <span className="relative inline-block min-w-[10ch]">
                  {words.map((w, i) => (
                    <span
                      key={w}
                      className={`absolute left-0 top-0 transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                      {w}
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl">
              One home for your creative universe – a calm space to collect, organize, and rediscover visual inspiration.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#final-cta" className="px-5 py-2.5 rounded-md bg-white text-black font-medium hover:bg-white/90 transition" id="hero-signup">
                Sign up
              </a>
              <a href="https://cosmos.so/login" target="_blank" className="px-5 py-2.5 rounded-md bg-white/10 text-white font-medium hover:bg-white/20 transition" id="hero-login">
                Log in
              </a>
            </div>
            <div className="mt-10 flex items-center gap-2 text-white/70">
              <ArrowDown className="animate-bounce" size={16} />
              <span className="text-sm">Scroll to explore</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}