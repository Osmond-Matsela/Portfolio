"use client";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Code,
  Sparkles,
  Zap,
} from "lucide-react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0"></div>

      <div className="relative z-10">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Navigation */}
        <Navigation X={X} Menu={Menu} />

        {/* Hero Section */}
        <Hero
          Sparkles={Sparkles}
          Code={Code}
          Zap={Zap}
          Github={Github}
          Linkedin={Linkedin}
          Mail={Mail}
        />
        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects Code={Code} ExternalLink={ExternalLink} />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
