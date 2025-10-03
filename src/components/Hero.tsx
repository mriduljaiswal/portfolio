import DarkVeil from './DarkVeil';
import { useTheme } from '../contexts/ThemeContext';
import { useState, useEffect } from 'react';

const Hero = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Hide arrow when scrolled more than 20% of viewport height
      setIsVisible(scrollY < windowHeight * 0.2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="hero" className="h-screen bg-dark-bg light:bg-white relative overflow-hidden transition-colors duration-300">
      {/* Background - Single DarkVeil that transitions smoothly */}
      <div className="absolute inset-0 w-full h-full z-0">
        <DarkVeil 
          hueShift={0} // Keep original colors
          noiseIntensity={0.03}
          scanlineIntensity={0}
          speed={0.9}
          scanlineFrequency={0}
          warpAmount={0.1}
          resolutionScale={1}
          backgroundMode={theme}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-dark-text light:text-black mb-6 transition-colors duration-300">
          Hi, I'm{' '}
          <span className="text-dark-text light:text-black">Swastik!</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-dark-text-secondary light:text-gray-600 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
          Good to see you here! Welcome to my portfolio
        </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a 
          href="#about" 
          className="text-gray-400 light:text-gray-500 hover:text-gray-300 light:hover:text-gray-400 transition-colors duration-300 cursor-pointer inline-block animate-bounce"
          style={{
            animationDuration: '2s',
            animationIterationCount: 'infinite'
          }}
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero