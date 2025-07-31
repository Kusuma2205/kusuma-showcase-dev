import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "GeeksforGeeks",
      description: "Successfully completed a 4-week comprehensive course on AWS Cloud fundamentals, covering core AWS services, cloud concepts, security, and pricing models. This certification demonstrates foundational knowledge of cloud computing and AWS services.",
      image: "/lovable-uploads/a67add9e-399d-429c-abbb-29d136e0b9b8.png",
      date: "2024",
      category: "Cloud Computing"
    },
    {
      title: "Programming in Java",
      issuer: "NPTEL (IIT Kharagpur)",
      description: "Elite certification in Java programming with a consolidated score of 60%. Completed online assignments and proctored exam covering object-oriented programming concepts, data structures, and Java fundamentals through a 12-week intensive course.",
      image: "/lovable-uploads/38377119-2304-4575-84e4-ab2ff7ea35df.png",
      date: "Jan-Apr 2024",
      category: "Programming"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle University",
      description: "Oracle Certified Foundations Associate certification demonstrating knowledge of Oracle Cloud Infrastructure services, architecture, and core concepts. This certification validates understanding of cloud computing fundamentals and Oracle's cloud platform.",
      image: "/lovable-uploads/c68a5038-c0a0-4325-b912-b2b48652fff4.png",
      date: "July 2025",
      category: "Cloud Infrastructure"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <Award className="inline-block w-12 h-12 mr-4 text-brand-blue" />
          <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 bg-background"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                  onClick={() => window.open(cert.image, '_blank')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-full">
                    {cert.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-brand-purple font-semibold text-sm mb-2">
                  {cert.issuer} • {cert.date}
                </p>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open(cert.image, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;