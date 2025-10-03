import { GlowingEffect } from "../components/ui/glowing-effect";
import GradientText from './ui/GradientText';

const Skills = () => {

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'Fluent UI', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fluent_React_UI_icon.svg' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
        { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
        { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
        { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
        { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
        { name: 'Android', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg' },
      ]
    }
  ]

  return (
    <section id="skills" className="h-screen bg-dark-bg light:bg-white transition-colors duration-300 relative" style={{scrollMarginTop: '4rem'}}>
      <div className="absolute flex items-start justify-center px-4 sm:px-6 lg:px-8 z-10" style={{top: '40%', left: '0', right: '0', transform: 'translateY(-50%)'}}>
        <div className="max-w-6xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ lineHeight: '1.3' }}>
          <GradientText
            animationSpeed={13}
            showBorder={false}
            fontWeight={700}
          >
            Technologies
          </GradientText>
        </h2>
        <p className="text-sm text-gray-500 light:text-gray-600 max-w-3xl mx-auto uppercase font-bold tracking-wide mb-20 transition-colors duration-300">
          HERE ARE SOME OF THE TECHNOLOGIES AND TOOLS I WORK WITH
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

interface SkillCardProps {
  category: {
    title: string;
    skills: { name: string; logo: string; }[];
  };
}

const SkillCard = ({ category }: SkillCardProps) => {
  return (
    <div className="relative h-full min-h-[300px]">
      <div className="relative h-full rounded-2xl border-2 border-dark-border light:border-gray-300 p-2 md:rounded-3xl md:p-3 transition-colors duration-300">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={60}
          inactiveZone={0.05}
          movementDuration={4}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 backdrop-blur-sm bg-dark-surface/50 light:bg-gray-100/85 transition-colors duration-300">
          <div className="relative flex flex-1 flex-col gap-6">
            <div className="space-y-4">
              <h3 className="font-sans text-lg sm:text-xl md:text-2xl font-medium text-balance text-dark-text light:text-light-text text-center transition-colors duration-300">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 justify-items-center">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-secondary-500/10 light:hover:bg-orange-500/10 transition-colors duration-200 group"
                    title={skill.name}
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transition-transform duration-200 group-hover:scale-110"
                    />
                    <span className="text-[10px] sm:text-xs text-dark-text-secondary light:text-light-text-secondary text-center leading-tight transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;