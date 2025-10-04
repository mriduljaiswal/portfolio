import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WorkHistory from './components/WorkHistory'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Show content with background veil
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 3000) // 3 seconds - exactly with background veil

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Header />
      </motion.div>
      
      <main>
        <Hero />
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <About />
            <WorkHistory />
            <Skills />
            <Contact />
          </motion.div>
        )}
      </main>
    </div>
  )
}

export default App