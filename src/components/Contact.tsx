import GradientText from './ui/GradientText';

// Simple dotted map replacement
const DottedMap = ({ markers, ...props }: any) => (
  <div className="w-full h-96 bg-gradient-to-br from-dark-surface to-dark-bg rounded-lg flex items-center justify-center" {...props}>
    <p className="text-dark-text-secondary">Interactive Map</p>
  </div>
);

const markers = [
  { lat: 40.7128, lng: -74.006, size: 0.3 }, // New York
  { lat: 34.0522, lng: -118.2437, size: 0.3 }, // Los Angeles
  { lat: 51.5074, lng: -0.1278, size: 0.3 }, // London
  { lat: -33.8688, lng: 151.2093, size: 0.3 }, // Sydney
  { lat: 48.8566, lng: 2.3522, size: 0.3 }, // Paris
  { lat: 35.6762, lng: 139.6503, size: 0.3 }, // Tokyo
  { lat: 55.7558, lng: 37.6176, size: 0.3 }, // Moscow
  { lat: 39.9042, lng: 116.4074, size: 0.3 }, // Beijing
  { lat: 28.6139, lng: 77.209, size: 0.3 }, // New Delhi
  { lat: -23.5505, lng: -46.6333, size: 0.3 }, // São Paulo
  { lat: 1.3521, lng: 103.8198, size: 0.3 }, // Singapore
  { lat: 25.2048, lng: 55.2708, size: 0.3 }, // Dubai
  { lat: 52.52, lng: 13.405, size: 0.3 }, // Berlin
  { lat: 19.4326, lng: -99.1332, size: 0.3 }, // Mexico City
  { lat: -26.2041, lng: 28.0473, size: 0.3 }, // Johannesburg
];

const Contact = () => {
  return (
    <section id="contact" className="h-screen bg-black transition-colors duration-300 relative flex flex-col overflow-hidden" style={{scrollMarginTop: '4rem'}}>
      {/* Dotted Map Background - 90% coverage */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 w-[90%] h-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 z-10" />
          <DottedMap 
            width={150}
            height={75}
            markers={markers}
            dotColor="#d6dce8ff"
            markerColor="#6017e8ff"
            className="w-full h-full"
          />
        </div>
      </div>
      
      <div className="relative z-20 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
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
      <div className="absolute bottom-4 left-0 right-0 z-30 text-center">
        <p className="text-sm text-gray-500 transition-colors duration-300 leading-tight">
          Designed by Swastik
        </p>
        <p className="text-sm text-gray-500 transition-colors duration-300">
          Built in React
        </p>
      </div>
    </section>
  )
}

export default Contact
