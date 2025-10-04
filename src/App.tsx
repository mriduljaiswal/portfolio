import { useState, useEffect, useMemo, memo } from 'react'
import { motion, LazyMotion, domAnimation } from 'motion/react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WorkHistory from './components/WorkHistory'
import Skills from './components/Skills'
import Contact from './components/Contact'

const App = memo(function App() {
  const [showContent, setShowContent] = useState(false)

  // Memoize motion variants for better performance
  const motionVariants = useMemo(() => ({
    headerTransition: { duration: 0.8, ease: "easeOut" as const },
    contentTransition: { duration: 0.8, ease: "easeOut" as const }
  }), []);

  useEffect(() => {
    // Show content with background veil
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 3000) // 3 seconds - exactly with background veil

    return () => clearTimeout(timer)
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-dark-bg text-dark-text transition-colors duration-300 gpu-accelerated">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: showContent ? 0 : -100,
            opacity: showContent ? 1 : 0
          }}
          transition={{ 
            duration: 0.6, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.5
          }}
          style={{ position: 'relative', zIndex: 60 }}
        >
          <Header />
        </motion.div>
        
        <main className="gpu-accelerated">
          <Hero />
          <motion.div
            className="animation-optimized motion-smooth"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
            transition={motionVariants.contentTransition}
          >
            <About />
            <WorkHistory />
            <Skills />
            <Contact />
          </motion.div>
        </main>
      </div>
    </LazyMotion>
  )
});

App.displayName = 'App';

export default App;