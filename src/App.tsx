import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WorkHistory from './components/WorkHistory'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <WorkHistory />
        <Contact />
      </main>
      
      {/* Footer text */}
      <div className="text-center py-8 text-sm text-gray-500">
        Designed and Built in React
      </div>
    </div>
  )
}

export default App