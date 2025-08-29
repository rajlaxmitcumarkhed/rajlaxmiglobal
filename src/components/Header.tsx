import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { Menu, X, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Products", href: "/products" },
    { label: "Certifications", href: "/#certifications" },
    { label: "Contact", href: "/#contact" },
  ];

  // Generic navigation handler for in-page anchors
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.substring(2);

      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Scroll to contact section (used for Get Quote button)
  const getQuoteRedirect = () => {
    const targetId = "sendMessage";

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/RajlaxmiIcon.png"
              alt="Rajlaxmi Global Ventures Logo"
              className="w-16 h-16 mr-3 object-contain"
            />
            <div>
              <h1 className="font-bold text-lg text-foreground">
                Rajlaxmi Global Ventures
              </h1>
              <p className="text-xs text-muted-foreground">
                Global Agricultural Excellence
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="hero"
              size="sm"
              className="ml-4"
              onClick={getQuoteRedirect}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="hero"
                size="sm"
                className="mt-4 w-fit"
                onClick={() => {
                  getQuoteRedirect();
                  setIsMenuOpen(false);
                }}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
