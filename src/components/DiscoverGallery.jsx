import { useRef } from 'react'

const cards = [
  { title: 'Film Diary', author: '@joannahalpin' },
  { title: 'Excerpts', author: '@mathilde' },
  { title: 'Exø', author: '@losingmyego' },
  { title: 'Just Like Flowers', author: '@sabini' },
  { title: 'Design', author: '@alexisfoucault' },
  { title: 'Sit', author: '@ryanbelk' },
  { title: 'Editorial', author: '@krystynapy' },
  { title: 'Planetary Files', author: '@mel' },
]

export default function DiscoverGallery() {
  const scroller = useRef(null)

  return (
    <section id="discover-gallery-section" className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-semibold">Cosmos</h2>
            <p className="text-white/70">A focused, distraction-free space. No likes, comments, or social noise — just expression and discovery.</p>
          </div>
          <p className="text-sm text-white/60">Drag to explore</p>
        </div>
      </div>
      <div
        ref={scroller}
        className="overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing"
      >
        <div className="flex gap-5 px-4 sm:px-6 lg:px-8 min-w-max">
          {cards.map((c) => (
            <div key={c.title} className="w-[320px] shrink-0 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-zinc-200/10 to-zinc-50/10 dark:from-purple-500/20 dark:to-indigo-500/20" />
              <div className="mt-3">
                <h3 className="font-medium">{c.title}</h3>
                <p className="text-sm text-white/60">{c.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}