import GradientText from './ui/GradientText'
import { Tilt } from '../../components/motion-primitives/tilt'
import { GlowingEffect } from './ui/glowing-effect'

const About = () => {
  return (
    <section id="about" className="h-screen bg-dark-bg transition-colors duration-300 relative" style={{scrollMarginTop: '4rem'}}>
      <div className="absolute flex items-start justify-center px-4 sm:px-6 lg:px-8" style={{top: '40%', left: '0', right: '0', transform: 'translateY(-50%)'}}>
        <div className="max-w-6xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12">
          <GradientText
            animationSpeed={15}
            showBorder={false}
            fontWeight={700}
          >
            About Me
          </GradientText>
        </h2>

        {/* Main Content Layout: Image on left, Content on right - Same height */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-8 mb-8">
            {/* Left Side - Image with Tilt Effect and Card Styling - 50% width */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Tilt rotationFactor={8} isRevese>
                <div className="relative w-full h-full rounded-2xl border-2 border-dark-border p-2 md:rounded-3xl md:p-3 transition-colors duration-300" style={{maxWidth: '349px'}}>
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={60}
                    inactiveZone={0.01}
                  />
                  <div className="relative h-full overflow-hidden rounded-xl backdrop-blur-sm bg-dark-surface/50 transition-colors duration-300 flex items-center justify-center">
                    <img 
                      src="/img/me.jpg" 
                      alt="Swastik Mishra"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </Tilt>
            </div>

            {/* Right Side - Content - 50% width */}
            <div className="w-full lg:w-1/2 text-left lg:text-left">
              <div className="space-y-6">
                <p className="text-dark-text-secondary text-lg leading-relaxed transition-colors duration-300">
                  Hey, I'm Swastik, a software engineer who enjoys building systems that perform. 
                </p>
                <p className="text-dark-text-secondary text-lg leading-relaxed transition-colors duration-300">
                  At <em>Microsoft</em>, I work on AMC Portal used by millions! Before that I spent time at <em>Samsung</em> making Android devices faster and more reliable. I care about simplicity, performance, and writing code that lasts.
                </p>
                <p className="text-dark-text-secondary text-lg leading-relaxed transition-colors duration-300">
                  Along the way, I've filed <em>patents</em> in listener-aware audio encoding and VR locomotion controls, contributing to enhancing user experience to give people more.
                </p>
                <p className="text-dark-text-secondary text-lg leading-relaxed transition-colors duration-300">
                  Away from code, I'm big on exploring sound, stories, and spaces - from music and films to new places.
                  These experiences keep me curious and bring me fresh perspective back into my work.
                </p>
              </div>
              
              {/* Social Links - Left aligned under content */}
              <div className="flex items-center justify-start gap-8 mt-8">
            <a 
              href="mailto:swastikmishra.career@gmail.com" 
              className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
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
              className="text-secondary-400 hover:text-secondary-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a 
              href="https://leetcode.com/u/swaastikkk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
              title="LeetCode Profile"
            >
              <img 
                src="https://scontent.fdel11-1.fna.fbcdn.net/v/t39.30808-6/305317853_616467910000160_3824851731065368025_n.png?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_aid=0&_nc_ohc=ESCvTfZAoD4Q7kNvwE7sZ2E&_nc_oc=Adkv5FHimsXjfODc9L-wx6Lh036yL9izns8uetf863TDvoBJTBhIKBP4NymFk7AbCNbqaiWlaVUUz04M3Ba5OJ6u&_nc_zt=23&_nc_ht=scontent.fdel11-1.fna&_nc_gid=o8MdcoWFt1AL6qLApK8Dyw&oh=00_AfetnBYKMMXG30SHUnmxHor1iUJzKL955Fh12YNKkyfrBA&oe=68E5731B" 
                alt="LeetCode"
                className="w-10 h-10 rounded-lg"
              />
            </a>
              </div>
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  )
}

export default About
