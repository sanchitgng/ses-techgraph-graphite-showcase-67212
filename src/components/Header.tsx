import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>SES Bhopal, Madhya Pradesh, India</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+919981992284</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>ses.bpl@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 w-full bg-sky-300 shadow-lg z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ec083a61-942a-4ab9-88cf-b90da19ab600.png" 
                alt="SES Logo" 
                className="h-16 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-black hover:text-black/70 font-medium transition-colors duration-300"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-black hover:text-black/70 font-medium transition-colors duration-300"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('facility')}
                className="text-black hover:text-black/70 font-medium transition-colors duration-300"
              >
                Facility
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-black hover:text-black/70 font-medium transition-colors duration-300"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black hover:text-black/70 font-medium transition-colors duration-300"
              >
                Contact
              </button>
            </nav>

            {/* CTA Button */}
            <Button 
              variant="secondary"
              onClick={() => scrollToSection('contact')}
              className="bg-white text-sky-500 hover:bg-white/90 font-semibold"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;