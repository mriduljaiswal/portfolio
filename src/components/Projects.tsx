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
    <section id="projects" className="section-full bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-dark-text mb-6">
            Featured Projects
          </h2>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto uppercase font-bold tracking-wide">
            HERE ARE SOME OF MY RECENT PROJECTS THAT SHOWCASE MY SKILLS AND EXPERIENCE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-dark-surface border border-dark-border rounded-2xl overflow-hidden hover:border-secondary-500 transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-dark-border flex items-center justify-center">
                <span className="text-dark-text-secondary">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-text mb-3">
                  {project.title}
                </h3>
                <p className="text-dark-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-dark-border text-dark-text-secondary rounded-md text-sm border border-dark-border"
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
    </section>
  )
}

export default Projects