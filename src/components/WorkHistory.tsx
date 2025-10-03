"use client";

import { GraduationCap, Briefcase, Building, Users } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import GradientText from './ui/GradientText';
import { useTheme } from '../contexts/ThemeContext';

const WorkHistory = () => {
  const experiences = [
    {
      id: 1,
      type: "education",
      title: "UPES",
      subtitle: "BACHELORS OF TECHNOLOGY",
      description: "Computer Science",
      dateRange: "2018 - 2022",
      icon: <GraduationCap className="h-6 w-6 text-purple-400" />,
      logoPath: "./img/UPES Logo.png",
      textPath: "./img/UPES Text.png",
      hasLogo: true,
      hasText: true
    },
    {
      id: 2,
      type: "internship",
      title: "To The New",
      subtitle: "INTERNSHIP", 
      description: "Backend / DevOps",
      dateRange: "06/2021 - 08/2021",
      icon: <Briefcase className="h-6 w-6 text-blue-400" />,
      logoPath: "./img/To The New Logo.png",
      textPath: "./img/To The New Text.png",
      hasLogo: true,
      hasText: true
    },
    {
      id: 3,
      type: "job",
      title: "Samsung",
      subtitle: "SOFTWARE ENGINEER",
      description: "Core OS / Android Frameworks",
      dateRange: "06/2022 - 04/2025",
      icon: <Building className="h-6 w-6 text-green-400" />,
      textPath: "./img/Samsung.png",
      hasLogo: false,
      hasText: true
    },
    {
      id: 4,
      type: "job", 
      title: "Microsoft",
      subtitle: "SOFTWARE ENGINEER",
      description: "FullStack",
      dateRange: "05/2025 - current",
      icon: <Users className="h-6 w-6 text-orange-400" />,
      logoPath: "./img/Microsoft Logo.png",
      textPath: "./img/Microsoft Text.png",
      hasLogo: true,
      hasText: true
    }
  ];

  return (
    <section id="work-history" className="min-h-screen bg-dark-bg light:bg-white transition-colors duration-300 py-20 pb-96" style={{scrollMarginTop: '4rem'}}>
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            <GradientText
              animationSpeed={13}
              showBorder={false}
              fontWeight={700}
            >
              Experience
            </GradientText>
          </h2>
          <p className="text-sm text-gray-400 light:text-gray-600 max-w-3xl mx-auto uppercase font-bold tracking-wide transition-colors duration-300">
            The positions I have worked in my career so far
          </p>
        </div>

        {/* Ladder Layout */}
        <div className="relative w-full max-w-none mx-auto">
          {/* Simple continuous line from first to last with fade effects */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 opacity-40"
            style={{
              top: '0',
              bottom: '0',
              zIndex: 0,
              background: 'linear-gradient(to bottom, transparent 0%, transparent 8%, #a855f7 12%, #3b82f6 50%, #10b981 88%, transparent 92%, transparent 100%)'
            }}
          />
          
          <div className="space-y-12">
            {experiences.slice().reverse().map((experience, index) => (
              <div
                key={experience.id}
                className="relative flex items-center"
              >
                {/* Experience Card positioned completely left or right */}
                {index % 2 === 0 ? (
                  <div className="flex justify-end pr-8 w-1/2">
                    <div className="w-full max-w-md">
                      <ExperienceCard experience={experience} />
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-start pl-8 w-1/2 ml-auto">
                    <div className="w-full max-w-md">
                      <ExperienceCard experience={experience} />
                    </div>
                  </div>
                )}
                
                {/* Timeline Dot at center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary-500 light:bg-orange-500 rounded-full border-4 border-dark-bg light:border-white shadow-lg z-10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: {
    id: number;
    type: string;
    title: string;
    subtitle: string;
    description: string;
    dateRange: string;
    icon: React.ReactNode;
    logoPath?: string;
    textPath?: string;
    hasLogo: boolean;
    hasText: boolean;
  };
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { theme } = useTheme();
  return (
    <div className="relative h-full min-h-[160px]">
      <div className="relative h-full rounded-2xl border-2 border-dark-border light:border-gray-300 p-2 md:rounded-3xl md:p-3 transition-colors duration-300">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={60}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 md:p-5 backdrop-blur-sm bg-dark-surface/50 light:bg-gray-100/85 transition-colors duration-300">
          <div className="relative flex flex-1 gap-6">
            {/* Logo column - left side */}
            <div className="flex-1 flex items-center justify-center">
              {(experience.hasLogo || experience.hasText) && (
                <div className="flex items-center gap-2 h-12 md:h-14">
                  {experience.hasLogo && experience.logoPath && (
                    <img 
                      src={experience.logoPath} 
                      alt={`${experience.title} Logo`}
                      className={`object-contain transition-all duration-300 ${
                        experience.title === "To The New" 
                          ? "w-8 h-8 md:w-10 md:h-10" 
                          : experience.title === "Microsoft"
                          ? "w-6 h-6 md:w-8 md:h-8"
                          : "w-6 h-6 md:w-8 md:h-8"
                      }`}
                    />
                  )}
                  {experience.hasText && experience.textPath && (
                    <img 
                      src={experience.textPath} 
                      alt={`${experience.title} Text`}
                      className={`object-contain transition-all duration-300 ${
                        experience.title === "To The New" 
                          ? "h-12 md:h-14" 
                          : experience.title === "Microsoft"
                          ? "h-6 md:h-8"
                          : experience.title === "Samsung"
                          ? "h-5 md:h-6"
                          : "h-6 md:h-8"
                      }`}
                      style={{
                        filter: experience.title === "UPES" 
                          ? (theme === 'dark' ? 'invert(1) brightness(2) contrast(2)' : 'none')
                          : 'var(--logo-filter, none)'
                      }}
                    />
                  )}
                </div>
              )}
            </div>
            
            {/* Content column - right side */}
            <div className="flex-1 flex flex-col justify-center space-y-3">
              <h4 className="font-sans text-sm font-bold text-secondary-400 light:text-orange-500 md:text-base">
                {experience.subtitle}
              </h4>
              <p className="font-sans text-xs text-dark-text-secondary light:text-light-text-secondary md:text-sm leading-relaxed transition-colors duration-300">
                {experience.description}
              </p>
              <div className="px-3 py-1 bg-secondary-500/20 light:bg-orange-500/20 text-secondary-300 light:text-black rounded-md text-sm font-medium w-fit">
                {experience.dateRange}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;