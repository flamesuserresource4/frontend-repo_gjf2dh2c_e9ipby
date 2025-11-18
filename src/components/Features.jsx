import { motion } from 'framer-motion'
import { Bookmark, Camera, FileText, LinkIcon, Quote, Video, Tag, Search, BellOff } from 'lucide-react'

export default function Features() {
  const saveItems = [
    { icon: FileText, label: 'articles' },
    { icon: Bookmark, label: 'products' },
    { icon: Camera, label: 'photos' },
    { icon: Quote, label: 'quotes' },
    { icon: Video, label: 'videos' },
    { icon: LinkIcon, label: 'links' },
    { icon: Tag, label: 'notes' },
    { icon: FileText, label: 'text' },
  ]

  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-semibold mb-4">Save anything</h2>
            <p className="text-white/70 mb-6">Capture elements from anywhere and keep them safe in your library.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {saveItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-md bg-white/5 p-3">
                  <Icon size={18} className="text-white/80" />
                  <span className="text-sm text-white/80">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="text-2xl font-semibold mb-4">Save from anywhere with our extensions</h2>
            <p className="text-white/70 mb-6">Available on Chrome, Safari, and iOS.</p>
            <div className="flex flex-wrap gap-3">
              {['Chrome', 'Safari', 'iOS'].map(p => (
                <span key={p} className="px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-sm">{p}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.blockquote initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-16 p-6 rounded-xl bg-white/5 border border-white/10">
          <p className="text-lg md:text-xl italic">“I am always doing things I can’t do; that’s how I get to do them.”</p>
          <footer className="mt-2 text-white/60">— Picasso</footer>
        </motion.blockquote>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-xl font-semibold mb-3">Curate your elements</h3>
            <p className="text-white/70 mb-6">Organize your elements into clusters people can follow. Clusters can be private or public, collaborative.</p>
            <div className="flex flex-wrap gap-2">
              {['issey miyake','70s fashion','movement','fashion','fashion design','dress'].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-sm">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-xl font-semibold mb-3">AI-powered tagging system</h3>
            <p className="text-white/70">Cosmos uses AI to automatically tag every element.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-xl font-semibold mb-3">Resurface your elements instantly</h3>
            <p className="text-white/70">Find anything in your library with ease; Cosmos is your intelligent sanctuary of information.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-xl font-semibold mb-3">Zero noise, notifications, or distractions</h3>
            <p className="text-white/70">No likes, comments, or ego. Pure, harmonious expression.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
