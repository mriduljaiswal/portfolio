import GradientText from './ui/GradientText';
import { useState } from 'react';

const Music = () => {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);

  const musicCategories = [
    {
      title: "Some India inspired tracks",
      tracks: [
        { 
          id: 1, 
          title: "Nirvra", 
          soundcloudUrl: "https://soundcloud.com/swstkk/nirvra",
          startTime: 0 // Tell me the exact start time
        },
        { 
          id: 2, 
          title: "Sampled This Shit And 808s Go Brrrrr", 
          soundcloudUrl: "https://soundcloud.com/swstkk/sampled-this-shit-and-808s-go-brrrrr",
          startTime: 0 // Tell me the exact start time
        },
        { 
          id: 3, 
          title: "808raag", 
          soundcloudUrl: "https://soundcloud.com/swstkk/808raag",
          startTime: 0 // Tell me the exact start time
        }
      ]
    },
    {
      title: "Cinematic sounds, if you're into that",
      tracks: [
        { 
          id: 4, 
          title: "Arrival Intro", 
          soundcloudUrl: "https://soundcloud.com/swstkk/arrival-intro",
          startTime: 0 // Tell me the exact start time
        },
        { 
          id: 5, 
          title: "Genesis Low", 
          soundcloudUrl: "https://soundcloud.com/swstkk/genesis-low",
          startTime: 0 // Tell me the exact start time
        },
        { 
          id: 6, 
          title: "Aether", 
          soundcloudUrl: "https://soundcloud.com/swstkk/aether",
          startTime: 0 // Tell me the exact start time
        }
      ]
    }
  ];

  const handlePlayTrack = (trackId: number, soundcloudUrl: string) => {
    setCurrentPlaying(trackId);
    // Open SoundCloud track in new tab for now
    // We'll implement embedded player once you provide start times
    window.open(soundcloudUrl, '_blank');
  };

  return (
    <section id="music" className="section-full bg-dark-bg py-32 mt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <GradientText
              colors={["#964ddbff", "#560ad1ff", "#964ddbff", "#560ad1ff", "#964ddbff"]}
              animationSpeed={13}
              showBorder={false}
              fontWeight={650}
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
              <h3 className="text-lg font-semibold text-dark-text mb-8">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.tracks.map((track) => (
                  <div 
                    key={track.id} 
                    className={`bg-dark-surface border border-dark-border rounded-2xl p-6 hover:border-secondary-500 transition-all duration-300 cursor-pointer ${
                      currentPlaying === track.id ? 'border-secondary-500 bg-secondary-500/10' : ''
                    }`}
                    onClick={() => handlePlayTrack(track.id, track.soundcloudUrl)}
                  >
                    <div className="aspect-square bg-dark-border rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <div className={`text-4xl mb-2 ${
                          currentPlaying === track.id ? 'text-secondary-400' : 'text-secondary-400'
                        }`}>
                          {currentPlaying === track.id ? '▶️' : '🎵'}
                        </div>
                        <p className="text-dark-text-secondary text-sm">
                          {currentPlaying === track.id ? 'Playing...' : 'Click to Play'}
                        </p>
                      </div>
                    </div>
                    <h4 className="text-base font-medium text-dark-text text-center">
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