export default function Platforms() {
  return (
    <section className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Available on web and iOS</h2>
            <p className="text-white/70 mt-2">Use Cosmos wherever inspiration appears.</p>
            <div className="mt-6">
              <a href="https://apps.apple.com/us/app/cosmos-curate-your-universe/id1577975475" target="_blank" className="px-5 py-2.5 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">Download the App</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[9/16] rounded-xl bg-white/5 border border-white/10" />
            <div className="aspect-video rounded-xl bg-white/5 border border-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}