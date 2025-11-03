import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/ec083a61-942a-4ab9-88cf-b90da19ab600.png" 
                alt="techGRAPH Logo" 
                className="h-16 w-auto filter brightness-0 invert"
              />
              <div>
                <div className="text-2xl font-bold text-accent">techGRAPH®</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Leading manufacturer of premium carbon products for the steel industry. 
              Delivering quality, precision, and innovation since 2017.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Products</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="hover:text-accent transition-colors cursor-pointer">Carburizers</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Graphite Granules</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Pitch Coke</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Custom Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4 text-primary-foreground/80">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p>SES Bhopal</p>
                  <p>Bhopal, Madhya Pradesh</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <p>+919981992284</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <p>ses.bpl@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              &copy; 2024 SES. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;