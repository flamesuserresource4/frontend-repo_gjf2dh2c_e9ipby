import { motion } from 'framer-motion'

const collections = [
  { name: 'Film Diary', author: '@joannahalpin', link: 'https://www.cosmos.so/joannahalpin/film-diary' },
  { name: 'Excerpts', author: '@mathilde', link: 'https://www.cosmos.so/mathilde/excerpts' },
  { name: 'Exø', author: '@losingmyego', link: 'https://www.cosmos.so/losingmyego/ex%C3%B8' },
  { name: 'Just Like Flowers', author: '@sabini', link: 'https://www.cosmos.so/sabini/just-like-flowers' },
  { name: 'Design', author: '@alexisfoucault', link: 'https://www.cosmos.so/alexisfoucault/design' },
  { name: 'Sit', author: '@ryanbelk', link: 'https://www.cosmos.so/ryanbelk/sit' },
  { name: 'Editorial', author: '@krystynapy', link: 'https://www.cosmos.so/krystynapy/editorial-%26-layout' },
  { name: 'Planetary Files', author: '@mel', link: 'https://www.cosmos.so/mel/planetary-files' },
]

export default function Collections() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl font-semibold">Featured Collections</h2>
          <p className="text-white/60 text-sm">Curated by the community</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {collections.map((c, i) => (
            <motion.a
              href={c.link}
              target="_blank"
              rel="noreferrer"
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-purple-500/30 to-indigo-500/30 group-hover:from-purple-500/40 group-hover:to-indigo-500/40 transition" />
              <div className="mt-3">
                <h3 className="font-medium text-white group-hover:text-white">{c.name}</h3>
                <p className="text-sm text-white/60">{c.author}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
