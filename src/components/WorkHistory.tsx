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
      subtitle: "Bachelors of Technology",
      description: "Computer Science with specialization in Cloud Computing",
      icon: <GraduationCap className="h-6 w-6 text-purple-400" />,
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/UPES_Dehradun_Logo.png/220px-UPES_Dehradun_Logo.png"
    },
    {
      id: 2,
      type: "internship",
      title: "To The New",
      subtitle: "DevOps Internship", 
      description: "Worked with CloudKeeper team",
      icon: <Briefcase className="h-6 w-6 text-blue-400" />,
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGQe4v9zXCnEw/company-logo_200_200/company-logo_200_200/0/1630639067138/tothenew_logo?e=2147483647&v=beta&t=VkQhkTJwPXdcUJgBCKA4U6vXfPzKj8xHKCXjhtSkwIo"
    },
    {
      id: 3,
      type: "job",
      title: "Samsung",
      subtitle: "Android Developer",
      description: "Android / Core Android (Frameworks)",
      icon: <Building className="h-6 w-6 text-green-400" />,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg"
    },
    {
      id: 4,
      type: "job", 
      title: "Microsoft",
      subtitle: "AMC Team",
      description: "account.microsoft.com - one of the core product teams",
      icon: <Users className="h-6 w-6 text-orange-400" />,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
    }
  ];

  return (
    <section id="work-history" className="section-full bg-dark-bg py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <GradientText
              colors={["#a162dc", "#3c0596", "#a162dc", "#3c0596", "#a162dc"]}
              animationSpeed={9}
              showBorder={false}
            >
              Experience
            </GradientText>
          </h2>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto uppercase font-bold tracking-wide">
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
                  <div className="flex justify-end pr-11" style={{width: 'calc(50% - 1.5rem)'}}>
                    <div style={{width: '64%'}}>
                      <ExperienceCard experience={experience} />
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-start pl-11 ml-auto" style={{width: 'calc(50% - 1.5rem)'}}>
                    <div style={{width: '64%'}}>
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
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 md:p-5 bg-dark-surface/60 backdrop-blur-sm border border-dark-border/30">
          <div className="relative flex flex-1 flex-col justify-between gap-2">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                {experience.logo && (
                  <img 
                    src={experience.logo} 
                    alt={experience.title}
                    className="w-8 h-8 rounded-md object-contain bg-white/10 p-1"
                  />
                )}
                <h3 className="font-sans text-lg font-semibold text-balance text-dark-text md:text-xl">
                  {experience.title}
                </h3>
              </div>
              <h4 className="font-sans text-base font-medium text-purple-400 md:text-lg">
                {experience.subtitle}
              </h4>
              <p className="font-sans text-xs text-dark-text-secondary md:text-sm leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;