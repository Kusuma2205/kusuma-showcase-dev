import { Button } from "@/components/ui/button";
import { Download, MessageCircle, Eye } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          Hello, I'm{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Kusuma
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          IT Undergraduate specializing in{" "}
          <span className="text-brand-blue font-semibold">software development</span>{" "}
          and{" "}
          <span className="text-brand-purple font-semibold">cloud security</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => scrollToSection('projects')}
            className="group"
          >
            <Eye className="mr-2 group-hover:scale-110 transition-transform" />
            View My Work
          </Button>
          
          <Button 
            variant="outline" 
            size="xl"
            onClick={() => scrollToSection('contact')}
            className="group"
          >
            <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" />
            Get In Touch
          </Button>
          
          <Button 
            variant="tech" 
            size="xl"
            onClick={() => window.open('/lovable-uploads/3245d4cb-f810-4c95-828d-8d11aea4ce21.png', '_blank')}
            className="group"
          >
            <Download className="mr-2 group-hover:scale-110 transition-transform" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;