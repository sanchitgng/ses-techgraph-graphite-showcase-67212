import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import carburizerImage from "@/assets/carburizer-product.jpg";
import graphiteFinesImage from "@/assets/graphite-granules.jpg";
import pitchCokeImage from "@/assets/pitch-coke-granules.jpg";

const Products = () => {
  const products = [
    {
      title: "Carburizers",
      description: "High-quality carbon additives for steel and iron production, providing excellent carbon recovery and consistent performance.",
      image: carburizerImage,
      features: ["High Carbon Content", "Low Sulfur", "Consistent Quality", "Various Sizes Available"]
    },
    {
      title: "Graphite Granules",
      description: "Premium graphite granules for foundry applications, lubricants, and specialized industrial processes.",
      image: graphiteFinesImage,
      features: ["Range of Particle Size", "High Purity", "Excellent Lubrication", "Low Electrical Resistance"]
    },
    {
      title: "Pitch Coke",
      description: "High-grade petroleum coke for aluminum and steel industries, offering superior thermal properties.",
      image: pitchCokeImage,
      features: ["Low Ash Content", "High Fixed Carbon", "Thermal Stability", "Processed & Graded"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engineered for excellence, our carbon products meet the highest industry standards 
            and are trusted by manufacturers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-industrial transition-all duration-300 hover:-translate-y-2 bg-card border-border"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{product.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="industrial-outline" 
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;