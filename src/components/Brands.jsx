export default function Brands() {
  const brands = Array.from({ length: 10 }, (_, i) => `Brand ${i + 1}`)
  return (
    <section className="bg-black text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg font-medium text-white/80">Creatives from the world’s biggest brands use Cosmos</h3>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm text-white/60">
          {brands.map((b) => (
            <div key={b} className="h-12 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}