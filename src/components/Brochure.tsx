import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Factory, Cog, Award, Globe } from "lucide-react";

const Brochure = () => {
  const brochureFeatures = [
    {
      icon: <Factory className="w-8 h-8 text-accent" />,
      title: "State-of-the-Art Facility",
      description: "Advanced crushing and sieving technology in Bhopal, Madhya Pradesh"
    },
    {
      icon: <Cog className="w-8 h-8 text-accent" />,
      title: "Premium Products",
      description: "Carburizers, Graphite Fines, and Pitch Coke for industrial applications"
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Quality Assurance",
      description: "Consistent quality with rigorous testing and quality control processes"
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Industry Experience",
      description: "Serving steel, foundry, and aluminum industries with expertise"
    }
  ];

  const handleDownload = () => {
    // Create a temporary link to download the PDF
    const link = document.createElement('a');
    link.href = '/ses-techgraph-brochure.pdf';
    link.download = 'SES-techGRAPH-Company-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="brochure" className="py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Company Brochure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover SES techGRAPH® - your trusted partner for premium carbon products. 
            Download our comprehensive brochure to learn more about our capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brochureFeatures.map((feature, index) => (
              <Card key={index} className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-industrial">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-accent/10 rounded-full">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right side - Brochure Preview */}
          <div className="flex flex-col items-center">
            <Card className="w-full max-w-md border-2 border-accent/30 shadow-card-industrial">
              <CardHeader className="bg-gradient-accent text-white text-center">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/lovable-uploads/ec083a61-942a-4ab9-88cf-b90da19ab600.png" 
                    alt="techGRAPH Logo" 
                    className="h-12 w-auto filter brightness-0 invert"
                  />
                </div>
                <CardTitle className="text-2xl text-accent">SES techGRAPH®</CardTitle>
                <p className="text-white/90">Premium Carbon Products</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <FileText className="w-16 h-16 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                  Company Profile & Product Catalog
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Company Overview
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Product Specifications
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Facility Details
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Quality Certifications
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Contact Information
                  </li>
                </ul>
                <Button 
                  variant="industrial" 
                  className="w-full"
                  onClick={handleDownload}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom section with quick stats */}
        <div className="mt-16 bg-accent/10 rounded-lg p-8 border border-accent/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">Premium</div>
              <div className="text-muted-foreground">Quality Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">Advanced</div>
              <div className="text-muted-foreground">Processing Technology</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">Bhopal</div>
              <div className="text-muted-foreground">Manufacturing Hub</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">Industrial</div>
              <div className="text-muted-foreground">Applications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure;