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
        { name: 'Fluent UI', logo: 'https://docs.microsoft.com/en-us/fluentui/images/fluent-ui-logo.svg' },
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
    <section id="skills" className="section-full bg-dark-bg py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <GradientText
              colors={["#a162dc", "#3c0596", "#a162dc", "#3c0596", "#a162dc"]}
              animationSpeed={9}
              showBorder={false}
            >
              Technologies
            </GradientText>
          </h2>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto uppercase font-bold tracking-wide">
            HERE ARE SOME OF THE TECHNOLOGIES AND TOOLS I WORK WITH
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
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
      <div className="relative h-full rounded-2xl border border-dark-border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-dark-surface/60 backdrop-blur-sm border border-dark-border/30">
          <div className="relative flex flex-1 flex-col gap-6">
            <div className="space-y-4">
              <h3 className="font-sans text-xl font-semibold text-balance text-dark-text md:text-2xl text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-4 justify-items-center">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-secondary-500/10 transition-colors duration-200 group"
                    title={skill.name}
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-200 group-hover:scale-110"
                    />
                    <span className="text-xs text-dark-text-secondary text-center leading-tight">
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