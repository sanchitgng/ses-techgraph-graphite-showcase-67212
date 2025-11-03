import { Button } from "@/components/ui/button";
import { ArrowDown, Shield, Award, Zap } from "lucide-react";
import industrialFacility from "@/assets/industrial-facility.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={industrialFacility}
          alt="Industrial Facility - Steel and Carbon Manufacturing"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <div className="mb-6">
            <span className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Premium Carbon Products Since 2017
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Industrial Grade
            <span className="block bg-gradient-to-r from-accent to-orange-300 bg-clip-text text-transparent">
              Carbon Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            SES operates under the registered trademark <strong className="text-accent">techGRAPH®</strong>, delivering 
            premium carburizers, graphite fines, and pitch coke to the steel industry with 
            uncompromising quality and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="industrial" 
              size="lg"
              onClick={scrollToProducts}
              className="min-w-[200px] bg-accent hover:bg-accent/90"
            >
              <Zap className="w-5 h-5 mr-2" />
              Explore Products
            </Button>
            <Button 
              variant="industrial-outline" 
              size="lg"
              onClick={scrollToContact}
              className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary"
            >
              Get Quote
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-white/60" />
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
            <div className="text-2xl font-bold text-white mb-2">Quality Assured</div>
            <div className="text-white/80">Quality assured manufacturing with rigorous quality control</div>
          </div>
          <div className="animate-fade-in bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Award className="w-12 h-12 text-accent mx-auto mb-4" />
            <div className="text-2xl font-bold text-white mb-2">Industry Leader</div>
            <div className="text-white/80">Trusted by steel manufacturers across India</div>
          </div>
          <div className="animate-fade-in bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
            <div className="text-2xl font-bold text-white mb-2">Advanced Processing</div>
            <div className="text-white/80">State-of-the-art crushing and sieving capabilities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;