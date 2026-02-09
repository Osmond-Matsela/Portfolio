import React from "react";

export default function Contact() {
  return (
    <div>
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Let&apos;s Create Together
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 leading-relaxed">
            Have an ambitious project in mind? Let&apos;s turn your vision into
            reality.
          </p>
          <a
            href="mailto:osmond.creations@gmail.com"
            className="relative inline-block group"
          >
            <div className="relative px-12 py-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full font-bold text-xl group-hover:scale-110 transition-transform duration-300">
              Get In Touch
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
