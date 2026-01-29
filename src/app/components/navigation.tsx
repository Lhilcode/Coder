export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center">
            <span className="text-white font-medium">C</span>
          </div>
          <div>
            <h1 className="text-lg font-medium">CODER</h1>
            <p className="text-xs text-gray-600">Web developer | Entreprenuer</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("about")} className="text-sm text-gray-700 hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection("experience")} className="text-sm text-gray-700 hover:text-primary transition-colors">Experience</button>
          <button onClick={() => scrollToSection("certifications")} className="text-sm text-gray-700 hover:text-primary transition-colors">Certifications</button>
          <button onClick={() => scrollToSection("contact")} className="text-sm text-gray-700 hover:text-primary transition-colors">Contact</button>
        </div>
      </div>
    </nav>
  );
}
