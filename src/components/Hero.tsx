import DarkVeil from './DarkVeil';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [backgroundVisible, setBackgroundVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Hide arrow when scrolled more than 20% of viewport height
      setIsVisible(scrollY < windowHeight * 0.2);
    };

    // Animation sequence
    const timer2 = setTimeout(() => {
      setBackgroundVisible(true);
    }, 3500); // Show background after 2.8 seconds

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer2);
    };
  }, []);
  
  return (
    <section id="hero" className="h-screen relative overflow-hidden transition-colors duration-300">
      {/* Black background that fades to reveal gradient */}
      <motion.div 
        className="absolute inset-0 bg-black z-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: backgroundVisible ? 0 : 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      
      {/* Gradient Background - Single DarkVeil that shows when black fades */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: backgroundVisible ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <DarkVeil 
          hueShift={0}
          noiseIntensity={0.03}
          scanlineIntensity={0}
          speed={0.9}
          scanlineFrequency={0}
          warpAmount={0.1}
          resolutionScale={1}
        />
      </motion.div>
      
      {/* Animated Text Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          >
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight transition-colors duration-500 ${
              backgroundVisible ? 'text-dark-text' : 'text-white'
            }`}>
              Hi! I'm Swastik
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 2 }}
          >
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed transition-colors duration-700 ${
              backgroundVisible ? 'text-dark-text-secondary' : 'text-gray-300'
            }`}>
              Good to see you here! Welcome to my portfolio
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : 20 
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <a 
          href="#about" 
          className="text-gray-400 hover:text-gray-300 transition-all duration-300 cursor-pointer inline-block hover:scale-110"
        >
          <motion.svg 
            className="w-5 h-5 sm:w-6 sm:h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ y: [0, 5, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </motion.svg>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
