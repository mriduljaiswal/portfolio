import GradientText from './ui/GradientText';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/api/placeholder/400/300',
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      image: '/api/placeholder/400/300',
      github: '#',
      demo: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts',
      technologies: ['JavaScript', 'CSS3', 'Weather API', 'Chart.js'],
      image: '/api/placeholder/400/300',
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="h-screen bg-dark-bg transition-colors duration-300 relative" style={{scrollMarginTop: '4rem'}}>
      <div className="absolute flex items-start justify-center px-4 sm:px-6 lg:px-8" style={{top: '40%', left: '0', right: '0', transform: 'translateY(-50%)'}}>
        <div className="max-w-6xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          <GradientText
            animationSpeed={15}
            showBorder={false}
            fontWeight={700}
          >
            Featured Projects
          </GradientText>
        </h2>
        <p className="text-sm text-gray-500 max-w-3xl mx-auto uppercase font-bold tracking-wide mb-16 transition-colors duration-300">
          HERE ARE SOME OF MY RECENT PROJECTS THAT SHOWCASE MY SKILLS AND EXPERIENCE
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-dark-surface border border-dark-border rounded-2xl overflow-hidden hover:border-secondary-500 transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-dark-border flex items-center justify-center">
                <span className="text-dark-text-secondary transition-colors duration-300">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-text mb-3 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-dark-text-secondary mb-4 leading-relaxed transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-dark-border text-dark-text-secondary rounded-md text-sm border border-dark-border transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-secondary-400 hover:text-secondary-300 font-medium text-sm transition-colors"
                  >
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    className="text-secondary-400 hover:text-secondary-300 font-medium text-sm transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
