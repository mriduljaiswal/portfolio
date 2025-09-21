import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Tech', href: '#skills' },
    { name: 'Experience', href: '#work-history' },
    { name: 'Music', href: '#music' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection || '')
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 bg-dark-bg/70 backdrop-blur-sm border-b border-dark-border z-50">
      <nav className="w-full px-8 sm:px-12 lg:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-xl font-bold text-dark-text hover:text-secondary-400 transition-colors duration-200">
              Swastik
            </a>
          </div>

          {/* Desktop navigation - Right aligned with reduced spacing */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-dark-text-secondary hover:text-purple-600'
                    }`}
                    style={isActive ? {
                      textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                    } : {}}
                  >
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-text-secondary hover:text-dark-text focus:outline-none focus:text-dark-text"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-bg border-t border-dark-border">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-all duration-300 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-dark-text-secondary hover:text-purple-600'
                    }`}
                    style={isActive ? {
                      textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                    } : {}}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header