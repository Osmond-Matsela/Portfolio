import React from 'react'

export default function Projects({Code,ExternalLink}: any) {
    interface Project {
      title: string;
      description: string;
      tags: string[];
      link?: string;
      gradient: string;
    }
    const projects: Project[] = [
    {
      title: "School Website",
      description: "School website with interactive features and responsive design.",
      tags: ["Next.js", "TypeScript", "NextAuth", "Firebase", "Tailwind CSS","Figma"],
      link: "https://www.moreko.co.za",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "BLOG IT",
      description: "Blog website with interactive features and responsive design.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "Prisma", "PostgreSQL" ,"framer-motion"],
      link: "https://blog-osmond.netlify.app",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];
  return (
    <div>
      <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl sm:text-6xl font-black mb-16 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`}></div>
                  <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-white/30 transition-all duration-300 hover:scale-105">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl mb-6 flex items-center justify-center`}>
                      <Code size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:gap-3 gap-2 transition-all`}
                      >
                        View Project <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}
