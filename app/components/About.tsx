import React from "react";

export default function About() {
  return (
    <div>
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
                Recent Software Engineering graduate with practical experience
                in full-stack web development, API integration, and systems
                integration. Experienced in building web applications using
                React, Next.js, Node.js and working across the stack with
                JavaScript, Python, TypeScript and Java. Eager to continuously
                learn and grow across diverse technological fields, with a
                growing interest in cybersecurity.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                {["Next.js", "React", "TypeScript", "Node.js"].map(
                  (tech, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-4 text-center border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                    >
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                        {tech}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
