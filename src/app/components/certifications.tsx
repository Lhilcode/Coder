import { Award, CheckCircle2, GraduationCap } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      title: "Full Stack Web Development - Frontend",
      issuer: "New Horizons",
      description: "Comprehensive training in modern frontend technologies including React, TypeScript, and advanced JavaScript. Mastered responsive design, state management, and performance optimization.",
      skills: ["Vue.js", "React.js", "HTML5", "TypeScript", "Modern CSS", "Web APIs", "Performance Optimization"]
    },
    {
      title: "Full Stack Software Development - Backend",
      issuer: "New Horizons",
      description: "In-depth backend development covering server architecture, databases, APIs, and security best practices. Expert-level training in building scalable server-side applications.",
      skills: ["Node.js", "Laravel", "Php", "MySQL", "Database Design", "RESTful APIs", "Authentication", "System Architecture"]
    }
  ];

  return (
    <section id="certifications" className="py-25 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium mb-4">Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development to stay at the forefront of technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="p-8 border border-gray-200 hover:border-primary transition-all group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <GraduationCap className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {cert.description}
              </p>

              <div>
                <h4 className="text-sm font-medium mb-3 text-gray-900">Skills Acquired:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gray-50 border border-gray-200">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Continuous Growth Mindset</h3>
              <p className="text-gray-700 leading-relaxed">
                Beyond formal certifications, I'm constantly expanding my skillset through hands-on projects, 
                open-source contributions, and staying current with emerging technologies. My commitment to 
                learning ensures I bring the latest best practices and innovations to every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
