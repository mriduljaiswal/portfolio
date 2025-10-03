import GradientText from './ui/GradientText';

const Contact = () => {
  return (
    <section id="contact" className="h-screen bg-dark-bg transition-colors duration-300 relative flex flex-col" style={{scrollMarginTop: '4rem'}}>
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
          <GradientText
            animationSpeed={15}
            showBorder={false}
            fontWeight={700}
          >
            Let's Connect!
          </GradientText>
        </h2>
        <p className="text-sm sm:text-base text-dark-text-secondary max-w-full mx-auto mt-6 sm:mt-8 mb-12 sm:mb-16 transition-colors duration-300">
          Have something on your mind? Let's share thoughts, swap ideas, or simply start a conversation!
        </p>



        {/* Terminal Component with Resume Viewer */}
        <div className="flex justify-center px-4 sm:px-0">
          <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
            <div className="bg-dark-bg border border-gray-700 rounded-xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex justify-between items-center border-b border-gray-700 p-2 sm:p-3 md:p-4">
                <div className="flex flex-row gap-x-1 sm:gap-x-2">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500"></div>
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-yellow-500"></div>
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500"></div>
                </div>
                
                {/* Download Icon in Top Bar */}
                <a
                  href="https://drive.google.com/file/d/1tFUZdyPnPkIFZuYqbenISny19xMuwP1T/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
                  title="Download Resume"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>
              
              {/* Terminal Content */}
              <div className="p-2 sm:p-3 md:p-4">
                {/* Resume Viewer with Aspect Ratio */}
                <div className="bg-white rounded overflow-hidden" style={{aspectRatio: '420 / 297'}}>
                  <iframe
                    src="https://drive.google.com/file/d/1tFUZdyPnPkIFZuYqbenISny19xMuwP1T/preview"
                    width="100%"
                    height="100%"
                    className="border-0"
                    title="Swastik's Resume"
                    allow="autoplay"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </div>
      </div>
      
      {/* Footer at bottom of Contact section */}
      <div className="pb-8 text-center">
        <p className="text-sm text-gray-500 transition-colors duration-300">
          Designed by Swastik | Built in React
        </p>
      </div>
    </section>
  )
}

export default Contact
