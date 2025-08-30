import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Code2, Rocket } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import profileImage from '@/assets/shreya-pic.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const fullText = "Building modern, responsive, and intelligent web solutions.";
  
  // Typing animation
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Mouse tracking for gradient effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.15), transparent 50%)`,
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Floating badges */}
          <div className="absolute -top-10 left-1/4 animate-float">
            <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs text-foreground/70">AI-Powered</span>
            </div>
          </div>
          <div className="absolute -top-10 right-1/4 animate-float-delayed">
            <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
              <Code2 className="w-4 h-4 text-secondary" />
              <span className="text-xs text-foreground/70">Full Stack</span>
            </div>
          </div>
          
          {/* Profile Image with glass morphism */}
          <div className="mb-8 relative inline-block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-40 animate-pulse-slow"></div>
              <div className="glass-card p-2 rounded-full">
                <div className="w-40 h-40 rounded-full bg-gradient-primary p-[2px] animate-gradient-shift">
                  <img 
                    src={profileImage} 
                    alt="Shreya Tiwari - Full Stack Developer"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 glass-card p-2 rounded-full animate-bounce-slow">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          {/* Name and Title with enhanced typography */}
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up">
              <span className="relative">
                <span className="gradient-text-animated">Shreya Tiwari</span>
                <div className="absolute -inset-2 bg-gradient-primary opacity-20 blur-2xl animate-pulse-slow"></div>
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <p className="text-2xl md:text-3xl text-foreground/80 font-light tracking-wide">
                Full Stack Developer
              </p>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </div>

          {/* Animated Tagline with better cursor */}
          <div className="mb-10 h-12 flex items-center justify-center">
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              {text}
              {showCursor && (
                <span className="inline-block w-[3px] h-6 bg-gradient-primary ml-1 animate-blink rounded-full"></span>
              )}
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="glow" size="lg" className="group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                View My Work
                <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button variant="glass" size="lg" className="backdrop-blur-sm">
              Get in Touch
              <Mail className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Shreyaa2134"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-xl text-foreground/60 hover:text-primary hover:shadow-glow-primary transition-all hover:-translate-y-1 duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/shreya-tiwari-12685a2ab"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-xl text-foreground/60 hover:text-primary hover:shadow-glow-primary transition-all hover:-translate-y-1 duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shreyatiwari2134@gmail.com"
              className="glass-card p-3 rounded-xl text-foreground/60 hover:text-primary hover:shadow-glow-primary transition-all hover:-translate-y-1 duration-300"
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