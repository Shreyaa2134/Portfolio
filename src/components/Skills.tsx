import { Code2, Database, Globe, GitBranch, Wrench, Users } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="text-primary" size={24} />,
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "C/C++", level: 80 },
      ]
    },
    {
      title: "Frontend",
      icon: <Globe className="text-secondary" size={24} />,
      skills: [
        { name: "React.js", level: 92 },
        { name: "Tailwind CSS", level: 88 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Bootstrap", level: 85 },
      ]
    },
    {
      title: "Backend",
      icon: <Database className="text-accent" size={24} />,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Django", level: 75 },
        { name: "REST APIs", level: 90 },
      ]
    },
    {
      title: "Databases",
      icon: <Database className="text-primary" size={24} />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 82 },
        { name: "NoSQL", level: 80 },
      ]
    },
    {
      title: "Dev Tools",
      icon: <Wrench className="text-secondary" size={24} />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Vercel", level: 85 },
        { name: "Linux", level: 75 },
        { name: "Postman", level: 88 },
      ]
    },
    {
      title: "Professional",
      icon: <Users className="text-accent" size={24} />,
      skills: [
        { name: "Project Management", level: 85 },
        { name: "Team Collaboration", level: 90 },
        { name: "Code Review", level: 88 },
        { name: "Performance Optimization", level: 82 },
      ]
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
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-foreground/80">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-2" />
                      <div 
                        className="absolute inset-0 h-2 bg-gradient-primary rounded-full opacity-50 blur-sm"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
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