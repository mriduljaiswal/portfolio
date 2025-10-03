import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WorkHistory from './components/WorkHistory'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-dark-bg light:bg-white text-dark-text light:text-black transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <WorkHistory />
          <Contact />
        </main>
        
        {/* Footer text */}
        <div className="text-center py-8 text-sm text-gray-500 light:text-gray-600">
          Designed by Swastik | Built in React
        </div>
        
        <ThemeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App