import GradientText from './ui/GradientText';

const Contact = () => {
  return (
    <section id="contact" className="h-screen bg-dark-bg light:bg-white transition-colors duration-300 relative" style={{scrollMarginTop: '4rem'}}>
      <div className="absolute flex items-start justify-center px-4 sm:px-6 lg:px-8" style={{top: '40%', left: '0', right: '0', transform: 'translateY(-50%)'}}>
        <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          <GradientText
            animationSpeed={13}
            showBorder={false}
            fontWeight={700}
          >
            Let's Connect!
          </GradientText>
        </h2>
        <p className="text-base text-dark-text-secondary light:text-gray-600 max-w-full mx-auto mt-8 mb-16 transition-colors duration-300">
          Have something on your mind? Let's share thoughts, swap ideas, or simply start a conversation!
        </p>

        <div className="flex items-center justify-center gap-8">
          <a 
            href="mailto:swastikmishra.career@gmail.com" 
            className="hover:scale-105 transition-transform duration-200"
            title="swastikmishra.career@gmail.com"
          >
            <img 
              src="https://icons.veryicon.com/png/o/brands/application-logo/gmail-45.png" 
              alt="Gmail"
              className="w-10 h-10"
            />
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