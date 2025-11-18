export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold">Start your journey</h3>
          </div>
          <div>
            <p className="text-white/70">Cosmos is the home you’ve been searching for.</p>
          </div>
          <div className="flex gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white">USEFUL</a>
            <a href="#" className="hover:text-white">LEGAL</a>
            <a href="#" className="hover:text-white">UPDATES</a>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 text-sm text-white/60">Creatives from the world’s biggest brands use Cosmos</div>
      </div>
    </footer>
  )
}
