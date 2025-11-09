import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedGrid from './components/FeaturedGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <FeaturedGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
