import DarkVeil from './DarkVeil';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section id="hero" className="h-screen bg-dark-bg light:bg-white relative overflow-hidden transition-colors duration-300">
      {/* Background - Full Coverage */}
      <div className="absolute inset-0 w-full h-full z-0">
        {theme === 'dark' ? (
          <DarkVeil 
            hueShift={0}
            noiseIntensity={0.03}
            scanlineIntensity={0}
            speed={0.9}
            scanlineFrequency={0}
            warpAmount={0.1}
            resolutionScale={1}
            backgroundMode="dark"
          />
        ) : (
          // Light mode: Same DarkVeil gradient with white background
          <div className="w-full h-full bg-white relative">
            <DarkVeil 
              hueShift={0}
              noiseIntensity={0.03}
              scanlineIntensity={0}
              speed={0.9}
              scanlineFrequency={0}
              warpAmount={0.1}
              resolutionScale={1}
              backgroundMode="light"
            />
          </div>
        )}
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-dark-text light:text-black mb-6 transition-colors duration-300">
          Hi, I'm{' '}
          <span className="text-dark-text light:text-black">Swastik!</span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-dark-text-secondary light:text-gray-600 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
          Good to see you here! Welcome to my portfolio
        </p>
        </div>
      </div>
    </section>
  )
}

export default Hero