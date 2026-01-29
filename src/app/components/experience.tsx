import { ArrowUpRight, Building2, Code, Globe, Layout, Zap } from "lucide-react";

export function Experience() {
  const projects = [
    {
      title: "Optimuz Homes",
      role: "Frontend Developer",
      type: "Real Estate Platform",
      period: "2024",
      description: "Engineered a modern real estate platform featuring advanced property search, interactive listings, and seamless user experience. Built with React and modern web technologies to deliver lightning-fast performance.",
      highlights: [
        "Implemented dynamic property filtering with real-time search capabilities",
        "Created responsive, mobile-first UI with smooth animations",
        "Integrated interactive maps and virtual tour features",
        "Optimized performance achieving 95+ Lighthouse scores"
      ],
      tech: ["HTML", "TypeScript", "Tailwind CSS", "CSS5"],
      icon: Building2
    },
    {
      title: "Enterprise SaaS Dashboard",
      role: "Full-Stack Developer",
      type: "B2B Software",
      period: "2023 - 2024",
      description: "Developed a comprehensive dashboard application for enterprise clients, featuring real-time analytics, complex data visualization, and multi-tenant architecture.",
      highlights: [
        "Architected scalable backend with microservices approach",
        "Built real-time data pipeline with WebSocket integration",
        "Designed intuitive admin panel with role-based access control",
        "Implemented advanced analytics and reporting features"
      ],
      tech: ["Node.js", "React", "PostgreSQL", "Redis"],
      icon: Zap
    },
    {
      title: "E-Commerce Ecosystem",
      role: "Lead Developer",
      type: "Retail Platform",
      period: "2023",
      description: "Created a full-featured e-commerce platform with inventory management, payment processing, and order tracking. Designed for scalability and high transaction volumes.",
      highlights: [
        "Built secure payment gateway integration with multiple providers",
        "Developed inventory management system with real-time updates",
        "Implemented order tracking and customer notification system",
        "Created admin dashboard for business intelligence"
      ],
      tech: ["Next.js", "Express", "MongoDB", "Stripe"],
      icon: Globe
    },
    {
      title: "Portfolio Management System",
      role: "Frontend Architect",
      type: "Financial Technology",
      period: "2022 - 2023",
      description: "Designed and built a sophisticated portfolio management platform for investment professionals, featuring real-time market data, advanced charting, and portfolio analytics.",
      highlights: [
        "Developed custom charting library for financial data visualization",
        "Implemented real-time market data streaming",
        "Created complex portfolio rebalancing algorithms",
        "Built responsive interface for desktop and mobile trading"
      ],
      tech: ["React", "D3.js", "WebSocket", "Material UI"],
      icon: Layout
    }
  ];

  return (
    <section id="experience" className="py-25 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium mb-4">Experience & Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of impactful projects that demonstrate technical expertise and product thinking
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-8 border border-gray-200 hover:border-primary transition-all group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-medium mb-1">{project.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="text-primary">{project.role}</span>
                        <span>•</span>
                        <span>{project.type}</span>
                        <span>•</span>
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3 text-gray-900">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
