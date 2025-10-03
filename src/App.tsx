import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WorkHistory from './components/WorkHistory'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <WorkHistory />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App