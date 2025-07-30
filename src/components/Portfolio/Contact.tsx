import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Download, FileText } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bandarupallikusuma@gmail.com",
      href: "mailto:bandarupallikusuma@gmail.com",
      color: "text-red-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6300889683",
      href: "tel:+916300889683",
      color: "text-green-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Kusuma2205",
      href: "https://github.com/Kusuma2205",
      color: "text-gray-700"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kusumabandarupalli",
      href: "https://www.linkedin.com/in/kusumabandarupalli/",
      color: "text-blue-600"
    }
  ];

  const handleResumeView = () => {
    // This would open the resume in a new tab
    window.open('/lovable-uploads/3245d4cb-f810-4c95-828d-8d11aea4ce21.png', '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to connect!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card 
                key={index} 
                className="group bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-soft mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${contact.color}`} />
                  </div>
                  <h3 className="font-semibold mb-2">{contact.label}</h3>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-brand-blue transition-colors break-all"
                  >
                    {contact.value}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Card className="inline-block bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-soft mb-4 mx-auto">
                <FileText className="w-6 h-6 text-tech-accent" />
              </div>
              <h3 className="font-semibold mb-4">Want to see my full experience?</h3>
              <Button 
                variant="tech" 
                size="lg"
                onClick={handleResumeView}
                className="group"
              >
                <Download className="mr-2 group-hover:scale-110 transition-transform" />
                View My Resume
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;