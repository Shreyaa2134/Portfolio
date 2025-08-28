import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Building modern, responsive, and intelligent web solutions.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-40 h-40 rounded-full bg-gradient-primary p-1 animate-gradient-shift">
              <img 
                src={profileImage} 
                alt="Shreya Tiwari - Full Stack Developer"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -inset-2 bg-gradient-primary rounded-full blur-xl opacity-50 animate-pulse"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
            <span className="gradient-text">Shreya Tiwari</span>
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/80 mb-6">
            Full Stack Developer
          </p>

          {/* Animated Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 h-8">
            {text}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse"></span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="gradient" size="lg" className="group">
              View My Work
              <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Shreyaa2134"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors hover:-translate-y-1 duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/shreya-tiwari-12685a2ab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors hover:-translate-y-1 duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shreyatiwari2134@gmail.com"
              className="text-foreground/60 hover:text-primary transition-colors hover:-translate-y-1 duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-foreground/40" />
      </div>
    </section>
  );
};

export default Hero;