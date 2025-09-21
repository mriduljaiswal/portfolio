import GradientText from './ui/GradientText';

const Contact = () => {
  return (
    <section id="contact" className="section-full bg-dark-bg py-16 mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <GradientText
              colors={["#964ddbff", "#560ad1ff", "#964ddbff", "#560ad1ff", "#964ddbff"]}
              animationSpeed={13}
              showBorder={false}
              fontWeight={650}
            >
              Let's Connect!
            </GradientText>
          </h2>
          <p className="text-lg text-dark-text-secondary max-w-3xl mx-auto mt-8">
            Have something on your mind? Let's share thoughts, swap ideas, or simply start a conversation!
          </p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-8">
            <a 
              href="mailto:swastikmishra.career@gmail.com" 
              className="text-dark-text text-xl hover:text-secondary-400 transition-colors"
            >
              swastikmishra.career@gmail.com
            </a>
            
            <a 
              href="https://in.linkedin.com/in/swastik-mishra-1128bb20a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-400 hover:text-secondary-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact