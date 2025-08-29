import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/RajlaxmiIcon.png"
                alt="Rajlaxmi Global Exports Logo"
                className="w-20 h-20 mr-4 object-contain rounded-full"
              />

              <div>
                <h3 className="text-2xl font-bold">Rajlaxmi Global Ventures</h3>
                <p className="text-primary-foreground/80">Global Agricultural Excellence</p>
              </div>
            </div>

            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Sister company of Rajlaxmi Trading Company, bringing 25 years of agricultural
              expertise to global markets. Specializing in premium rice, wheat, pulses,
              and traditional Indian food products.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-primary-foreground/80">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-sm">
                  Rajlaxmi Global Ventures, Pusad Road, Umarkhed, Maharashtra, India - 445206
                </span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-sm">+91-7744824499</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-sm">info@rajlaxmiglobalventures.com</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-sm">sales@rajlaxmiglobalventures.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-primary-foreground/80">Premium Rice Varieties</li>
              <li className="text-primary-foreground/80">Wheat Products</li>
              <li className="text-primary-foreground/80">Pulses & Legumes</li>
              <li className="text-primary-foreground/80">Traditional Foods</li>
            </ul>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <Instagram className="w-4 h-4" />
                </Button>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Rajlaxmi Global Ventures. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Export Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;