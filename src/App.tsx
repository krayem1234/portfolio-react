import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Background from './components/Background'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const INTRO_DURATION = 1700

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), INTRO_DURATION)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>{loading && <Preloader key="preloader" />}</AnimatePresence>

      <Background />
      <CustomCursor />
      <ScrollProgress />

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  )
}

export default App
