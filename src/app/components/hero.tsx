import { Code2, Rocket, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Available for Projects</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-medium leading-tight">
              Building the Future,
              <span className="block text-primary">One Line at a Time</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Full-stack developer and founder-minded builder crafting exceptional web experiences that drive business growth and user delight.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#contact" className="px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-colors">
                Get in Touch
              </a>
              <a href="#experience" className="px-8 py-4 border border-gray-300 text-gray-700 hover:border-primary hover:text-primary transition-colors">
                View Work
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-[500px] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1687389806477-22be64a5480f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHRlY2glMjBlbnRyZXByZW5ldXIlMjB3b3Jrc3BhY2UlMjBmdXR1cmlzdGljfGVufDF8fHx8MTc2OTU0OTE1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tech workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-8 -left-8 w-24 h-24 bg-primary/20 blur-3xl"></div>
            <div className="absolute bottom-8 -right-8 w-32 h-32 bg-primary/10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
