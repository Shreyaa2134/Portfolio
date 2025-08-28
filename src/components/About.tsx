import { GraduationCap, Code, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="glass-card rounded-2xl p-8 md:p-12 hover-glow">
            {/* Bio */}
            <div className="mb-12">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> currently 
                pursuing a B.Tech in Computer Science and Information Technology at IPS Academy, Indore. 
                My journey in web development is driven by a deep fascination with creating 
                <span className="text-secondary font-semibold"> visually appealing</span> and 
                <span className="text-accent font-semibold"> responsive web designs</span> that deliver 
                seamless user experiences.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                I specialize in building modern web applications using the MERN stack, with a particular 
                focus on integrating AI-powered features to create intelligent solutions. My approach 
                combines technical proficiency with creative problem-solving to deliver applications 
                that are not just functional, but truly delightful to use.
              </p>
            </div>

            {/* Education */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-primary" size={28} />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="bg-card/50 rounded-xl p-6 border border-border/50">
                <h4 className="text-xl font-semibold text-primary mb-2">
                  B.Tech in Computer Science & Information Technology
                </h4>
                <p className="text-foreground/80 mb-1">IPS Academy, Indore</p>
                <p className="text-muted-foreground">Expected Graduation: 2026</p>
              </div>
            </div>

            {/* Philosophy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-secondary" size={28} />
                <h3 className="text-2xl font-bold">Development Philosophy</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all">
                  <Code className="text-primary mb-3" size={24} />
                  <h4 className="font-semibold mb-2">Clean Code</h4>
                  <p className="text-sm text-muted-foreground">
                    Writing maintainable, scalable, and well-documented code
                  </p>
                </div>
                <div className="bg-card/50 rounded-xl p-6 border border-secondary/20 hover:border-secondary/50 transition-all">
                  <Sparkles className="text-secondary mb-3" size={24} />
                  <h4 className="font-semibold mb-2">User-Centric</h4>
                  <p className="text-sm text-muted-foreground">
                    Focusing on intuitive designs and seamless experiences
                  </p>
                </div>
                <div className="bg-card/50 rounded-xl p-6 border border-accent/20 hover:border-accent/50 transition-all">
                  <GraduationCap className="text-accent mb-3" size={24} />
                  <h4 className="font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Staying updated with latest technologies and best practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;