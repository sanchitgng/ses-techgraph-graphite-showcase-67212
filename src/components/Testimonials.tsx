import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Steel Industries Ltd.",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "SES techGRAPH® has been our trusted partner for carburizers for over 3 years. Their consistent quality and timely delivery have significantly improved our steel production efficiency.",
      industry: "Steel Manufacturing"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Modern Foundries Pvt. Ltd.",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "The graphite granules from techGRAPH® have exceptional purity levels. Our casting quality has improved remarkably since we started using their products.",
      industry: "Foundry Operations"
    },
    {
      id: 3,
      name: "Amit Patel",
      company: "Aluminum Works Co.",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "Excellent pitch coke quality and professional service. The crushing and sieving precision at their Bhopal facility ensures we get exactly what we need for our applications.",
      industry: "Aluminum Industry"
    },
    {
      id: 4,
      name: "Dr. Suresh Gupta",
      company: "Industrial Research Institute",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "As a research facility, we require the highest grade carbon products. SES techGRAPH® consistently delivers premium quality materials that meet our stringent specifications.",
      industry: "Research & Development"
    },
    {
      id: 5,
      name: "Vikram Singh",
      company: "Heavy Industries Corporation",
      location: "Jamshedpur, Jharkhand",
      rating: 5,
      text: "Their technical support team is outstanding. They helped us optimize our carbon content requirements, resulting in improved product quality and cost savings.",
      industry: "Heavy Industries"
    },
    {
      id: 6,
      name: "Meera Reddy",
      company: "Export Trading House",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      text: "We've been exporting techGRAPH® products internationally. Our overseas clients are impressed with the consistent quality and packaging standards.",
      industry: "International Trading"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-accent fill-accent" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading companies across India for premium carbon products 
            and exceptional service quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-card-industrial animate-fade-in group hover-scale"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="w-8 h-8 text-accent/60 group-hover:text-accent transition-colors duration-300" />
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-accent/20 pt-4">
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-accent font-medium">{testimonial.company}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                    <div className="mt-2">
                      <span className="inline-block bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">
                        {testimonial.industry}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;