import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am pursuing a Bachelor of Engineering in Information Technology at{" "}
              <span className="text-brand-blue font-semibold">
                Vasireddy Venkatadri Institute of Technology
              </span>
              . My passion lies in building real-world applications that solve meaningful problems.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy learning new technologies and staying up-to-date with industry trends. 
              I've completed internships in{" "}
              <span className="text-brand-purple font-semibold">AWS Data Engineering</span>{" "}
              and{" "}
              <span className="text-tech-accent font-semibold">Zero Trust Cloud Security</span>
              , which have given me valuable hands-on experience.
            </p>
            
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 scale-110"></div>
              <img
                src="/kusuma-profile.png"
                alt="Kusuma - IT Student"
                className="relative w-80 h-80 object-cover rounded-full shadow-strong border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;