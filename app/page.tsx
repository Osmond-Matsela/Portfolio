"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Sparkles, Zap } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  gradient: string;
}

const Portfolio: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects: Project[] = [
    {
      title: "School Website",
      description: "School website with interactive features and responsive design.",
      tags: ["Next.js", "TypeScript", "NextAuth", "Firebase", "Tailwind CSS","Figma"],
      link: "https://www.moreko.co.za",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div 
          className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 z-0">
        {mounted && [...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-xl z-50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  &lt;/Osmond.Dev&gt;
                </span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {['about', 'projects', 'contact'].map((section) => (
                  <button 
                    key={section}
                    onClick={() => scrollToSection(section)} 
                    className="relative group text-lg font-medium"
                  >
                    <span className="relative z-10 group-hover:text-cyan-400 transition-colors duration-300">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></span>
                  </button>
                ))}
              </div>

              {/* Mobile menu button */}
              <button 
                className="md:hidden relative group"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>
                {mobileMenuOpen ? <X size={28} className="relative z-10" /> : <Menu size={28} className="relative z-10" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
              <div className="px-4 py-6 space-y-4">
                {['about', 'projects', 'contact'].map((section) => (
                  <button 
                    key={section}
                    onClick={() => scrollToSection(section)} 
                    className="block w-full text-left text-lg hover:text-cyan-400 transition py-2"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50 blur-2xl animate-pulse"></div>
                <Sparkles size={64} className="relative text-cyan-400 mx-auto animate-bounce" />
              </div>
            </div>
            
            <h1 
              className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight"
              style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Osmond Matsela
              </span>
            </h1>
            
            <div className="mb-8 space-y-2">
              <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                Software Developer
              </p>
              <p className="text-xl text-gray-400 flex items-center justify-center gap-2">
                <Code size={20} className="text-cyan-400" />
                Crafting Digital Experiences
                <Zap size={20} className="text-purple-400" />
              </p>
            </div>

            <div className="flex justify-center space-x-6 mb-12">
              {[
                { Icon: Github, href: 'https://github.com/Osmond-Matsela' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/osmond-matsela' },
                { Icon: Mail, href: 'mailto:osmond.creations@gmail.com' }
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i}
                  href={href} 
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
                  <div className="relative bg-white/5 p-4 rounded-full border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-110">
                    <Icon size={24} className="group-hover:text-cyan-400 transition-colors" />
                  </div>
                </a>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection('projects')}
              className="relative group px-8 py-4 font-bold text-lg overflow-hidden rounded-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              <span className="relative z-10">View My Work</span>
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl sm:text-6xl font-black mb-16 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10">
                <p className="text-gray-300 text-xl leading-relaxed mb-6">
                  I'm a passionate Software developer who thrives on turning complex problems into elegant, 
                  intuitive solutions. My code doesn't just work it tells a story.
                </p>
                <p className="text-gray-300 text-xl leading-relaxed">
                  With expertise spanning Next.js, React, TypeScript, and Node.js, I build applications 
                  that don't just meet expectations they exceed them. Every pixel, every interaction, 
                  every line of code is crafted with purpose.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                  {['Next.js', 'React', 'TypeScript', 'Node.js'].map((tech, i) => (
                    <div 
                      key={i}
                      className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-4 text-center border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                    >
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
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

        {/* Contact Section */}
        <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Create Together
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-400 mb-12 leading-relaxed">
              Have an ambitious project in mind? Let's turn your vision into reality.
            </p>
            <a 
              href="mailto:osmond.creations@gmail.com"
              className="relative inline-block group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70"></div>
              <div className="relative px-12 py-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                Get In Touch
              </div>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 text-center border-t border-white/10">
          <p className="text-gray-500">
            &copy; 2025 Osmond Matsela. Designed & Built with <span className="text-red-500">❤</span> using Next.js & TypeScript.
          </p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;