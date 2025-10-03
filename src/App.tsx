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
          <WorkHistory />
          <Skills />
          <Contact />
        </main>
        
        <ThemeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App