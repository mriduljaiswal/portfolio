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
  const [showHeader, setShowHeader] = useState(false)

  // Memoize motion variants for better performance
  const motionVariants = useMemo(() => ({
    headerTransition: { duration: 0.8, ease: "easeOut" as const },
    contentTransition: { duration: 0.8, ease: "easeOut" as const },
    headerSlideTransition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }), []);

  useEffect(() => {
    // Show content with background veil
    const contentTimer = setTimeout(() => {
      setShowContent(true)
    }, 3000) // 3 seconds - exactly with background veil

    // Show header after 4 seconds (after both texts display and background fades)
    const headerTimer = setTimeout(() => {
      setShowHeader(true)
    }, 4000) // 4 seconds - after background veil completes

    return () => {
      clearTimeout(contentTimer)
      clearTimeout(headerTimer)
    }
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      {/* Fixed Header - Animated slide-in with persistent fixed positioning */}
      <motion.div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 9999,
          pointerEvents: 'auto',
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: showHeader ? 0 : -100, 
          opacity: showHeader ? 1 : 0 
        }}
        transition={motionVariants.headerSlideTransition}
      >
        <Header />
      </motion.div>
      
      {/* Main Content */}
      <div className="min-h-screen bg-dark-bg text-dark-text transition-colors duration-300 gpu-accelerated">
        <main className="gpu-accelerated">
          <Hero />
          <motion.div
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