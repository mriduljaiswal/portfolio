import GradientText from './ui/GradientText'

const About = () => {
  return (
    <section id="about" className="section-full bg-dark-bg py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <GradientText
              colors={["#a162dc", "#3c0596", "#a162dc", "#3c0596", "#a162dc"]}
              animationSpeed={9}
              showBorder={false}
            >
              About Me
            </GradientText>
          </h2>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto uppercase font-bold tracking-wide">
            MY BACKGROUND, EXPERIENCE, AND WHAT DRIVES MY PASSION FOR DEVELOPMENT
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-80 h-80 bg-dark-surface border border-dark-border rounded-2xl mx-auto mb-8 flex items-center justify-center">
              <span className="text-dark-text-secondary text-lg">Your Photo Here</span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-black text-dark-text mb-6">
              Hello! I'm Swastik
            </h3>
            <p className="text-dark-text-secondary text-lg leading-relaxed">
              I'm a Software Engineer who loves solving real-world problems with clean, efficient code. I enjoy working with passionate teams and building systems that make a difference.
            </p>
            <p className="text-dark-text-secondary text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or enjoying outdoor activities. 
              I believe in continuous learning and staying up-to-date with industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About