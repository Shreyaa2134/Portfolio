import { Code2, Database, Globe, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="text-primary" size={24} />,
      skills: ["JavaScript/TypeScript", "Python", "C/C++"]
    },
    {
      title: "Frontend",
      icon: <Globe className="text-secondary" size={24} />,
      skills: ["React.js", "Tailwind CSS", "HTML5/CSS3", "Bootstrap"]
    },
    {
      title: "Backend",
      icon: <Database className="text-accent" size={24} />,
      skills: ["Node.js", "Express.js", "Django", "REST APIs"]
    },
    {
      title: "Databases",
      icon: <Database className="text-primary" size={24} />,
      skills: ["MongoDB", "MySQL", "NoSQL"]
    },
    {
      title: "Dev Tools",
      icon: <Wrench className="text-secondary" size={24} />,
      skills: ["Git/GitHub", "Vercel", "Linux", "Postman"]
    },
    {
      title: "Professional",
      icon: <Users className="text-accent" size={24} />,
      skills: ["Project Management", "Team Collaboration", "Code Review", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 hover-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-card/50 rounded-lg text-sm text-foreground/90 border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Also experienced with: <span className="text-foreground">WebSockets, NPM/Yarn, WordPress, Responsive Design</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;