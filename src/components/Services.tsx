import { Globe, Server, Code, Layers, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <Layers className="text-primary" size={32} />,
      title: "Full-Stack Web Development",
      description: "End-to-end MERN stack solutions from concept to deployment",
      features: [
        "Custom web applications",
        "RESTful API development",
        "Database design & optimization",
        "Cloud deployment & hosting"
      ],
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      icon: <Globe className="text-secondary" size={32} />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      features: [
        "React.js applications",
        "Responsive design",
        "Performance optimization",
        "Cross-browser compatibility"
      ],
      gradient: "from-secondary/20 to-accent/20"
    },
    {
      icon: <Server className="text-accent" size={32} />,
      title: "Backend & API Development",
      description: "Building scalable server-side solutions",
      features: [
        "RESTful API design",
        "Authentication & security",
        "Database integration",
        "Third-party API integration"
      ],
      gradient: "from-accent/20 to-primary/20"
    },
    {
      icon: <Code className="text-primary" size={32} />,
      title: "MERN Stack Applications",
      description: "Complete web applications with modern best practices",
      features: [
        "MongoDB database design",
        "Express.js backend",
        "React.js frontend",
        "Node.js runtime"
      ],
      gradient: "from-primary/20 to-secondary/20"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforming ideas into powerful web solutions with modern technologies
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-2xl p-8 hover-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 inline-block p-3 bg-card rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <ArrowRight className="text-primary mt-0.5" size={16} />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="outline" size="sm" className="group-hover:border-primary">
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Have a project in mind? Let's work together to bring your vision to life.
          </p>
          <Button variant="gradient" size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;