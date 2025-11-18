import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Collections from './components/Collections'
import QuoteBreak from './components/QuoteBreak'
import DiscoverGallery from './components/DiscoverGallery'
import Platforms from './components/Platforms'
import Brands from './components/Brands'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <ScrollProgress />
      <main>
        <Hero />
        <Features />
        <QuoteBreak />
        <Collections />
        <DiscoverGallery />
        <Platforms />
        <Brands />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
