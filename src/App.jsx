import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Collections from './components/Collections'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Collections />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
