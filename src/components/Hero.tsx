import DarkVeil from './DarkVeil';
import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { motion } from 'motion/react';

const Hero = memo(() => {
  const [isVisible, setIsVisible] = useState(true);
  const [backgroundVisible, setBackgroundVisible] = useState(false);
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(false);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Hide arrow when scrolled more than 20% of viewport height
    setIsVisible(scrollY < windowHeight * 0.2);
  }, []);

  // Memoize motion variants for better performance
  const motionVariants = useMemo(() => ({
    backgroundTransition: { duration: 1.2, ease: "easeOut" as const },
    textTransition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    scrollTransition: { duration: 0.3, ease: "easeOut" as const },
    arrowAnimation: { 
      duration: 2, 
      repeat: Infinity, 
      ease: "easeInOut" as const
    }
  }), []);

  useEffect(() => {
    let ticking = false;
    
    // Optimized scroll handler with requestAnimationFrame
    const optimizedHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Animation sequence - synchronized with App content timing
    const timer2 = setTimeout(() => {
      setBackgroundVisible(true);
    }, 2800); // Show background with content fade (2.8 seconds)

    // Show scroll indicator after header animation completes
    const timer3 = setTimeout(() => {
      setScrollIndicatorVisible(true);
    }, 4800); // 4.8s - after header slides in (4s + 0.6s animation + 0.2s buffer)

    window.addEventListener('scroll', optimizedHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', optimizedHandleScroll);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [handleScroll]);
  
  return (
    <section id="hero" className="h-screen relative overflow-hidden transition-colors duration-300 gpu-accelerated">
      {/* Black background that fades to reveal gradient */}
      <motion.div 
        className="absolute inset-0 bg-black z-0 animation-optimized motion-smooth"
        initial={{ opacity: 1 }}
        animate={{ opacity: backgroundVisible ? 0 : 1 }}
        transition={motionVariants.backgroundTransition}
      />
      
      {/* Gradient Background - Single DarkVeil that shows when black fades */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0 animation-optimized motion-smooth"
        initial={{ opacity: 0 }}
        animate={{ opacity: backgroundVisible ? 1 : 0 }}
        transition={motionVariants.backgroundTransition}
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
            className="mb-6 sm:mb-8 animation-optimized motion-smooth"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionVariants.textTransition, delay: 0.3 }}
          >
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight transition-colors duration-500 ${
              backgroundVisible ? 'text-dark-text' : 'text-white'
            }`}>
              Hi! I'm Mridul
            </h1>
          </motion.div>

          <motion.div
            className="animation-optimized motion-smooth"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionVariants.textTransition, delay: 2 }}
          >
            <p className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed transition-colors duration-700 ${
              backgroundVisible ? 'text-dark-text-secondary' : 'text-gray-300'
            }`}>
              Good to see you here! Welcome to my portfolio
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animation-optimized motion-smooth"
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: (isVisible && scrollIndicatorVisible) ? 1 : 0, 
          y: (isVisible && scrollIndicatorVisible) ? 0 : 30
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <a 
          href="#about" 
          className="text-gray-400 hover:text-gray-300 transition-optimized cursor-pointer inline-block hover:scale-110 gpu-accelerated"
        >
          <motion.svg 
            className="w-5 h-5 sm:w-6 sm:h-6 animation-optimized" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ y: [0, 5, 0] }}
            transition={motionVariants.arrowAnimation}
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
});

Hero.displayName = 'Hero';

export default Hero;
