import React, { useState } from "react";
import { Logo } from "./logo/Logo";

interface NavigationProps {
  X: React.ComponentType<{ size?: number; className?: string }>;
  Menu: React.ComponentType<{ size?: number; className?: string }>;
}

export default function Navigation({ X, Menu }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };
  return (
    <div>
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["about", "projects", "contact"].map((section) => (
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
              {mobileMenuOpen ? (
                <X size={28} className="relative z-10" />
              ) : (
                <Menu size={28} className="relative z-10" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {["about", "projects", "contact"].map((section) => (
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
    </div>
  );
}
