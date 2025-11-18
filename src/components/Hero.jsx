import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80 pointer-events-none" />
      </div>

      <div className="relative z-10 pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium text-white/70 mb-3">For photographers • creatives • designers • curators • artists</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Bring order to your creative universe
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Save, organize, and rediscover the elements that inspire you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="https://apps.apple.com/us/app/cosmos-curate-your-universe/id1577975475" target="_blank" className="px-5 py-2.5 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">
                Download on iOS
              </a>
              <a href="#signup" className="px-5 py-2.5 rounded-md bg-white/10 text-white font-medium hover:bg-white/20 transition">
                Start on the web
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
