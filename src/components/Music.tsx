import GradientText from './ui/GradientText';

const Music = () => {
  const musicCategories = [
    {
      title: "Some India inspired tracks",
      tracks: [
        { id: 1, title: "Track 1", soundcloudId: "track1_id" },
        { id: 2, title: "Track 2", soundcloudId: "track2_id" },
        { id: 3, title: "Track 3", soundcloudId: "track3_id" }
      ]
    },
    {
      title: "Cinematic sounds, if you're into that",
      tracks: [
        { id: 4, title: "Track 4", soundcloudId: "track4_id" },
        { id: 5, title: "Track 5", soundcloudId: "track5_id" },
        { id: 6, title: "Track 6", soundcloudId: "track6_id" }
      ]
    }
  ]

  return (
    <section id="music" className="section-full bg-dark-bg py-32 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <GradientText
              colors={["#a162dc", "#3c0596", "#a162dc", "#3c0596", "#a162dc"]}
              animationSpeed={9}
              showBorder={false}
            >
              Personal Interests
            </GradientText>
          </h2>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto uppercase font-bold tracking-wide">
            I CREATE CINEMATIC ELECTRONIC MUSIC IN MY SPARE TIME
          </p>
        </div>

        <div className="space-y-16">
          {musicCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center">
              <h3 className="text-2xl font-semibold text-dark-text mb-8">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.tracks.map((track) => (
                  <div 
                    key={track.id} 
                    className="bg-dark-surface border border-dark-border rounded-2xl p-6 hover:border-secondary-500 transition-all duration-300 cursor-pointer"
                  >
                    <div className="aspect-square bg-dark-border rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <div className="text-secondary-400 text-4xl mb-2">🎵</div>
                        <p className="text-dark-text-secondary text-sm">
                          Click to Play
                        </p>
                      </div>
                    </div>
                    <h4 className="text-lg font-medium text-dark-text text-center">
                      {track.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Music