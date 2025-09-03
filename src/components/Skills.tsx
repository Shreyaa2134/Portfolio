import { Code2, Database, Globe, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="text-primary" size={24} />,
      skills: ["JavaScript/TypeScript", "Python", "C/C++"],
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      title: "Frontend",
      icon: <Globe className="text-secondary" size={24} />,
      skills: ["React.js", "Tailwind CSS", "HTML5/CSS3", "Bootstrap"],
      gradient: "from-secondary/20 to-accent/20"
    },
    {
      title: "Backend",
      icon: <Database className="text-accent" size={24} />,
      skills: ["Node.js", "Express.js", "Django", "REST APIs"],
      gradient: "from-accent/20 to-primary/20"
    },
    {
      title: "Databases",
      icon: <Database className="text-primary" size={24} />,
      skills: ["MongoDB", "MySQL", "NoSQL"],
      gradient: "from-primary/20 to-accent/20"
    },
    {
      title: "Dev Tools",
      icon: <Wrench className="text-secondary" size={24} />,
      skills: ["Git/GitHub", "Vercel", "Linux", "Postman"],
      gradient: "from-secondary/20 to-primary/20"
    },
    {
      title: "Professional",
      icon: <Users className="text-accent" size={24} />,
      skills: ["Project Management", "Team Collaboration", "Code Review", "Performance Optimization"],
      gradient: "from-accent/20 to-secondary/20"
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
              className="group glass-card rounded-2xl p-6 hover-glow animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-card rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const gradients = [
                      "from-blue-500 to-purple-500",
                      "from-green-500 to-teal-500",
                      "from-orange-500 to-red-500",
                      "from-pink-500 to-rose-500",
                      "from-indigo-500 to-blue-500",
                      "from-yellow-500 to-orange-500",
                      "from-purple-500 to-pink-500",
                      "from-cyan-500 to-blue-500"
                    ];
                    const gradient = gradients[skillIndex % gradients.length];
                    
                    return (
                      <span 
                        key={skill}
                        className="relative px-3 py-1.5 rounded-lg text-sm font-medium text-white overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105"
                      >
                        <span className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-90 group-hover:opacity-100 transition-opacity`}></span>
                        <span className="relative z-10">{skill}</span>
                      </span>
                    );
                  })}
                </div>
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