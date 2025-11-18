export default function CTA() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Find inspiration, anywhere it strikes</h2>
            <p className="text-white/80 mt-2">Available on web and iOS</p>
          </div>
          <div className="flex gap-3">
            <a href="https://apps.apple.com/us/app/cosmos-curate-your-universe/id1577975475" target="_blank" className="px-5 py-2.5 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">Download iOS</a>
            <a href="#signup" className="px-5 py-2.5 rounded-md bg-white/10 text-white font-medium hover:bg-white/20 transition">Start on Web</a>
          </div>
        </div>
      </div>
    </section>
  )
}
