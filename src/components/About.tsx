import GradientText from './ui/GradientText'

const About = () => {
  return (
    <section id="about" className="h-screen bg-dark-bg light:bg-white transition-colors duration-300 relative" style={{scrollMarginTop: '4rem'}}>
      <div className="absolute flex items-start justify-center px-4 sm:px-6 lg:px-8" style={{top: '40%', left: '0', right: '0', transform: 'translateY(-50%)'}}>
        <div className="max-w-6xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-12">
          <GradientText
            animationSpeed={13}
            showBorder={false}
            fontWeight={700}
          >
            About Me
          </GradientText>
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-dark-text-secondary light:text-gray-600 text-lg leading-relaxed transition-colors duration-300">
            Hey, I'm Swastik, a software engineer who enjoys building systems that perform. At Microsoft, I work on AMC Portal used by millions! Before that I spent time at Samsung making Android devices faster and more reliable. I care about simplicity, performance, and writing code that lasts.
          </p>
          <p className="text-dark-text-secondary light:text-gray-600 text-lg leading-relaxed transition-colors duration-300">
            Along the way, I've filed patents in listener-aware audio encoding and VR locomotion controls, contributing to enhancing user experience to give people more.
          </p>
          <p className="text-dark-text-secondary light:text-gray-600 text-lg leading-relaxed transition-colors duration-300">
            Away from code, I'm big on exploring sound, stories, and spaces - from music and films to new places.ct us all.
            These experiences keep me curious and bring me fresh perspective back into my work.
          </p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About