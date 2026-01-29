import { Mail, Phone, Globe, Twitter } from "lucide-react";
import cardImage from "../../assets/50755bac2a426e94081f1e7b8b892411bde0bc33.png";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adaraloyeakorede@gmail.com",
      href: "mailto:adaraloyeakorede@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "07039875356",
      href: "tel:07039875356"
    },
    {
      icon: Globe,
      label: "Website",
      value: "tomiwa-coderx.vercel.app",
      href: "https://tomiwa-coderx.vercel.app"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@Tomiwa_Coderx",
      href: "https://twitter.com/Tomiwa_Coderx"
    }
  ];

  return (
    <section id="contact" className="py-15 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium mb-4">Let's Build Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can create something exceptional together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium mb-4">Get in Touch</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Whether you're looking to build a new product, scale your team, or just want to chat about technology and innovation, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 border border-gray-200 hover:border-primary transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">{contact.label}</div>
                    <div className="font-medium text-gray-900">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 border border-gray-200">
            <div className="mb-8">
              <img 
                src={cardImage} 
                alt="Business Card" 
                className="w-full h-auto border border-gray-200"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary flex items-center justify-center">
                  <span className="text-white text-xl font-medium">C</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium">CODER</h4>
                  <p className="text-sm text-gray-600">Web developer | Entreprenuer</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Transforming ideas into scalable web solutions. Let's collaborate on your next breakthrough project.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} CODER. Crafted with passion and purpose.
          </p>
        </div>
      </div>
    </section>
  );
}
