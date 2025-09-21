import DarkVeil from './DarkVeil';

const Hero = () => {
  return (
    <section id="hero" className="section-full bg-dark-bg relative overflow-hidden">
      {/* Dark Veil Background - Full Coverage */}
      <div className="absolute inset-0 w-full h-full z-0">
        <DarkVeil 
          hueShift={0}
          noiseIntensity={0.03}
          scanlineIntensity={0.02}
          speed={0.9}
          scanlineFrequency={0.5}
          warpAmount={0.1}
          resolutionScale={1}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-dark-text mb-6">
            Hi, I'm{' '}
            <span className="text-dark-text">Swastik!</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-dark-text-secondary max-w-2xl mx-auto leading-relaxed">
            Good to see you here! Welcome to my web portfolio
          </p>
        </div>
      </div>


    </section>
  )
}

export default Hero