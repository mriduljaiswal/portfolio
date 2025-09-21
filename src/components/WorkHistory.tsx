"use client";

import { GraduationCap, Briefcase, Building, Users } from "lucide-react";
import { GlowingEffect } from "../components/ui/glowing-effect";
import GradientText from './ui/GradientText';

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
      logo: "/img/UPES.png"
    },
    {
      id: 2,
      type: "internship",
      title: "To The New",
      subtitle: "INTERNSHIP", 
      description: "Backend / DevOps",
      dateRange: "06/2021 - 08/2021",
      icon: <Briefcase className="h-6 w-6 text-blue-400" />,
      logo: "/img/To The New.png"
    },
    {
      id: 3,
      type: "job",
      title: "Samsung",
      subtitle: "SOFTWARE ENGINEER",
      description: "Core OS / Android Frameworks",
      dateRange: "06/2022 - 04/2025",
      icon: <Building className="h-6 w-6 text-green-400" />,
      logo: "/img/Samsung.png"
    },
    {
      id: 4,
      type: "job", 
      title: "Microsoft",
      subtitle: "SOFTWARE ENGINEER",
      description: "FullStack",
      dateRange: "05/2025 - current",
      icon: <Users className="h-6 w-6 text-orange-400" />,
      logo: "/img/Microsoft.png"
    }
  ];

  return (
    <section id="work-history" className="section-full bg-dark-bg py-16 mt-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <GradientText
              colors={["#964ddbff", "#560ad1ff", "#964ddbff", "#560ad1ff", "#964ddbff"]}
              animationSpeed={13}
              showBorder={false}
              fontWeight={650}
            >
              Experience
            </GradientText>
          </h2>
          <p className="text-sm text-gray-400 max-w-3xl mx-auto uppercase font-bold tracking-wide">
            MY JOURNEY FROM EDUCATION TO PROFESSIONAL EXPERIENCE
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
            {experiences.map((experience, index) => (
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
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-dark-bg shadow-lg z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
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
    logo?: string;
  };
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="relative h-full min-h-[160px]">
      <div className="relative h-full rounded-2xl border border-dark-border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 md:p-5 backdrop-blur-sm" style={{backgroundColor: '#060606'}}>
          <div className="relative flex flex-1 gap-6">
            {/* Logo column - left side */}
            <div className="flex-1 flex items-center justify-center">
              {experience.logo && (
                <img 
                  src={experience.logo} 
                  alt={experience.title}
                  className={`rounded-lg object-contain ${
                    experience.title === "To The New" 
                      ? "w-24 h-24 md:w-28 md:h-28" 
                      : "w-28 h-28 md:w-32 md:h-32"
                  }`}
                />
              )}
            </div>
            
            {/* Content column - right side */}
            <div className="flex-1 flex flex-col justify-center space-y-3">
              <h4 className="font-sans text-sm font-bold text-purple-400 md:text-base">
                {experience.subtitle}
              </h4>
              <p className="font-sans text-xs text-dark-text-secondary md:text-sm leading-relaxed">
                {experience.description}
              </p>
              <div className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-md text-sm font-medium w-fit">
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