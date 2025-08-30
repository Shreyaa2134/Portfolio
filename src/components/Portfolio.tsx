import { useState } from 'react';
import { Github, ExternalLink, Brain, Users, Database, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AssignMateAI",
      category: "ai",
      description: "AI-powered task management system with intelligent prioritization",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Node.js", "Gemini AI", "MongoDB"],
      features: [
        "AI-powered task prioritization",
        "Real-time collaboration",
        "Smart deadline predictions",
        "Automated task assignment"
      ],
      github: "#",
      live: "#",
      icon: <Brain className="text-primary" size={24} />
    },
    {
      id: 2,
      title: "Employee Management System",
      category: "fullstack",
      description: "Comprehensive HR solution with advanced analytics",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Express.js", "MySQL", "JWT"],
      features: [
        "CRUD operations",
        "Secure authentication",
        "Role-based access",
        "Performance tracking"
      ],
      github: "#",
      live: "#",
      icon: <Users className="text-secondary" size={24} />
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "frontend",
      description: "Modern responsive personal branding website",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      features: [
        "Responsive design",
        "Dark mode support",
        "SEO optimized",
        "Performance focused"
      ],
      github: "#",
      live: "#",
      icon: <Database className="text-accent" size={24} />
    },
    {
      id: 4,
      title: "REST API Projects",
      category: "backend",
      description: "Scalable backend systems with robust security",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "Express.js", "MongoDB", "Redis"],
      features: [
        "RESTful architecture",
        "JWT authentication",
        "Rate limiting",
        "Database optimization"
      ],
      github: "#",
      live: "#",
      icon: <Shield className="text-primary" size={24} />
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 relative bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my recent projects and technical achievements
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={filter === cat.value ? "gradient" : "outline"}
              size="sm"
              onClick={() => setFilter(cat.value)}
              className="transition-all duration-300"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden hover-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 group-hover:opacity-75 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-1 mb-6">
                  {project.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="text-sm text-foreground/70">
                      • {feature}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button variant="gradient" size="sm" className="flex-1">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;