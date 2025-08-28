import { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      label: "Email",
      value: "shreyatiwari2134@gmail.com",
      link: "mailto:shreyatiwari2134@gmail.com"
    },
    {
      icon: <Linkedin className="text-secondary" size={24} />,
      label: "LinkedIn",
      value: "Shreya Tiwari",
      link: "https://linkedin.com/in/shreya-tiwari-12685a2ab"
    },
    {
      icon: <Github className="text-accent" size={24} />,
      label: "GitHub",
      value: "@Shreyaa2134",
      link: "https://github.com/Shreyaa2134"
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      label: "Location",
      value: "Indore, India",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="p-3 bg-card rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability */}
              <div className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="text-primary" size={20} />
                  <h4 className="font-semibold">Availability</h4>
                </div>
                <p className="text-sm text-foreground/80">
                  Currently available for freelance projects and open to full-time opportunities. 
                  I typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="bg-card/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="bg-card/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="bg-card/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button type="submit" variant="gradient" size="lg" className="w-full">
                Send Message
                <Send className="ml-2" size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;