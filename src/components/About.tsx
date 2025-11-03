import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Users, TrendingUp, Cog, Search, CheckCircle, Crosshair } from "lucide-react";

const About = () => {
  const capabilities = [
    {
      title: "Advanced Crushing",
      description: "State-of-the-art crushing equipment for precise particle size reduction and consistent product quality.",
      icon: Cog
    },
    {
      title: "Multi-Stage Sieving",
      description: "Sophisticated sieving systems to achieve exact size specifications and remove impurities.",
      icon: Search
    },
    {
      title: "Quality Control",
      description: "Rigorous testing and quality assurance protocols to ensure products meet industry standards.",
      icon: CheckCircle
    },
    {
      title: "Custom Processing",
      description: "Flexible processing capabilities to meet specific customer requirements and specifications.",
      icon: Crosshair
    }
  ];

  const values = [
    {
      title: "Precision",
      description: "Advanced quality control",
      icon: Target
    },
    {
      title: "Vision",
      description: "Industry leadership",
      icon: Eye
    },
    {
      title: "Team",
      description: "Expert professionals",
      icon: Users
    },
    {
      title: "Growth",
      description: "Continuous innovation",
      icon: TrendingUp
    }
  ];

  return (
    <section id="about" className="section-padding bg-steel-lighter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              About <span className="text-accent">techGRAPH®</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              SES operates under the registered trademark techGRAPH®, pioneering the future 
              of carbon products for the steel industry with precision, quality, and innovation.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-primary">Our Story</h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  SES, operating under the registered trademark <strong className="text-accent">techGRAPH®</strong>, 
                  is a leading manufacturer of premium carbon products serving the steel, foundry, and 
                  aluminum industries across India and beyond.
                </p>
                <p>
                  Our state-of-the-art processing facility in <strong className="text-primary">SES Bhopal, Madhya Pradesh  </strong> 
                  is equipped with advanced crushing and sieving technology, enabling us to deliver
                  consistently high-quality products that meet the most demanding specifications.
                </p>
                <p>
                  With years of expertise in carbon processing, we understand the critical role our 
                  products play in your operations. That's why we maintain the highest standards of 
                  quality control and customer service.
                </p>
              </div>
            </div>
            
            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="card-industrial p-6 text-center">
                    <IconComponent className="w-12 h-12 text-accent mx-auto mb-4" />
                    <div className="text-2xl font-bold text-primary mb-2">{value.title}</div>
                    <div className="text-muted-foreground">{value.description}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Capabilities Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-center text-primary">Our Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                return (
                  <Card 
                    key={index}
                    className="card-industrial hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader className="text-center pb-2">
                      <IconComponent className="w-12 h-12 text-accent mx-auto mb-4" />
                      <CardTitle className="text-lg text-primary">{capability.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-muted-foreground">
                        {capability.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;