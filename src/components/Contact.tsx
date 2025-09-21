import GradientText from './ui/GradientText';

const Contact = () => {
  return (
    <section id="contact" className="section-full bg-dark-bg py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <GradientText
              colors={["#a162dc", "#3c0596", "#a162dc", "#3c0596", "#a162dc"]}
              animationSpeed={9}
              showBorder={false}
            >
              Get In Touch
            </GradientText>
          </h2>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto uppercase font-bold tracking-wide">
            I'M ALWAYS INTERESTED IN NEW OPPORTUNITIES AND COLLABORATIONS. 
            FEEL FREE TO REACH OUT IF YOU'D LIKE TO WORK TOGETHER!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-dark-text mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-secondary-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-secondary-400 text-sm">📧</span>
                </div>
                <span className="text-dark-text-secondary text-lg">swastik@example.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-secondary-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-secondary-400 text-sm">📱</span>
                </div>
                <span className="text-dark-text-secondary text-lg">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-secondary-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-secondary-400 text-sm">📍</span>
                </div>
                <span className="text-dark-text-secondary text-lg">Your City, Country</span>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-medium text-dark-text mb-6">Follow Me</h4>
              <div className="flex space-x-6">
                <a href="#" className="text-dark-text-secondary hover:text-secondary-400 transition-colors text-lg">
                  LinkedIn
                </a>
                <a href="#" className="text-dark-text-secondary hover:text-secondary-400 transition-colors text-lg">
                  GitHub
                </a>
                <a href="#" className="text-dark-text-secondary hover:text-secondary-400 transition-colors text-lg">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-text mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-dark-text placeholder-dark-text-secondary"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-text mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-dark-text placeholder-dark-text-secondary"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-text mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-dark-text placeholder-dark-text-secondary resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact