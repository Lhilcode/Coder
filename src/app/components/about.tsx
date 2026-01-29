import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "Mastering the craft of web development with cutting-edge technologies and best practices"
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Building scalable solutions that push boundaries and solve real-world problems"
    },
    {
      icon: Lightbulb,
      title: "Strategic Thinking",
      description: "Combining technical prowess with business acumen to create value-driven products"
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Crafting intuitive experiences that users love and businesses thrive on"
    }
  ];

  return (
    <section id="about" className="py-15 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate full-stack developer and entrepreneur who believes in the power of code to transform ideas into reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-medium">Founder-Minded Builder</h3>
            <p className="text-gray-700 leading-relaxed">
              I’m more than a developer I’m a builder who thinks like a founder. With experience across both frontend and backend development, I focus on creating digital products that don’t just work well technically, but also make real business sense.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I care deeply about writing clean, maintainable code, but I also think about the bigger picture: users, scalability, and long-term growth. From designing intuitive interfaces to architecting systems that can scale, I approach each project with a balanced, product-first mindset.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I do my best work in environments where ideas move quickly into execution, solving complex problems with thoughtful, practical solutions that deliver clear, measurable impact.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 border border-gray-200 hover:border-primary transition-colors group">
                <value.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-medium mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
