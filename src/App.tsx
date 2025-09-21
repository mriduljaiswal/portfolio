import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WorkHistory from './components/WorkHistory'
import Skills from './components/Skills'
import Music from './components/Music'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <WorkHistory />
        <Music />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App