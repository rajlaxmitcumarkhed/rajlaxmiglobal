
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setShowTooltip(true);
      }
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const whatsappNumber = "+917841868799";
  const message = "Hello! I'm interested in your agricultural products.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleDismissTooltip = () => {
    setShowTooltip(false);
    setIsDismissed(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Animated tooltip */}
      {showTooltip && !isDismissed && (
        <div className="absolute bottom-16 right-0 mb-2 animate-fade-in">
          <div className="bg-primary text-primary-foreground p-3 rounded-lg shadow-floating relative min-w-[150px]">
            <button
              onClick={handleDismissTooltip}
              className="absolute top-1 right-1 w-4 h-4 flex items-center justify-center hover:bg-primary-foreground/20 rounded"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-sm font-medium pr-4">
              👋 Need help? Click here for a quick quote!
            </p>
            {/* Arrow pointing to WhatsApp button */}
            <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-primary"></div>
          </div>
        </div>
      )}
      
      {/* WhatsApp button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-floating flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
