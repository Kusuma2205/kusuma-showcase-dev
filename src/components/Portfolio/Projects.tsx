import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import fraudDetectionImage from "@/assets/fraud-detection-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Career Guidance Platform",
      description: "Platform that helps students discover suitable career paths based on interests and trends.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web Application",
      githubUrl: "https://github.com/Kusuma2205/CareerGuidancePlatform.git"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio to showcase skills and projects using modern web technologies. Features include smooth scrolling, project previews, and an elegant interface designed for better visibility and interaction.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      category: "Frontend",
      githubUrl: "https://github.com/Kusuma2205/Portfolio.git"
    },
    {
      title: "Fraud Detection in Banking",
      description: "An advanced system designed to identify and prevent fraudulent transactions in the banking sector using blockchain technology and real-time data analysis.",
      image: fraudDetectionImage,
      technologies: ["Java", "Blockchain"],
      category: "Blockchain",
      githubUrl: "https://github.com/Kusuma2205/fraud-detection-banking.git"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;