type HeroProps = {
  Sparkles: React.ComponentType<{ size?: number; className?: string }>;
  Zap: React.ComponentType<{ size?: number; className?: string }>;
  Code: React.ComponentType<{ size?: number; className?: string }>;
  Github: React.ComponentType<{ size?: number; className?: string }>;
  Linkedin: React.ComponentType<{ size?: number; className?: string }>;
  Mail: React.ComponentType<{ size?: number; className?: string }>;
};
export default function Hero({
  Sparkles,
  Zap,
  Code,
  Github,
  Linkedin,
  Mail,
}: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50 blur-2xl animate-pulse"></div>
              <Sparkles
                size={64}
                className="relative text-cyan-400 mx-auto animate-bounce"
              />
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-pulse">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ">
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
              { Icon: Github, href: "https://github.com/Osmond-Matsela" },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/osmond-matsela",
              },
              { Icon: Mail, href: "mailto:osmond.creations@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
                <div className="relative bg-white/5 p-4 rounded-full border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-110">
                  <Icon
                    size={24}
                    className="group-hover:text-cyan-400 transition-colors"
                  />
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("projects")}
            className="relative group px-8 py-4 font-bold text-lg overflow-hidden rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
            <span className="relative z-10">View My Work</span>
          </button>
        </div>
      </section>
    </div>
  );
}
