import { Button } from "@/components/ui/enhanced-button";
import { ArrowRight, Globe, Award, Truck } from "lucide-react";
import { useState, useEffect } from "react";
import heroGrains from "@/assets/hero-grains.jpg";
import heroProducts from "@/assets/hero-agri-products.jpg";
import heroPulses from "@/assets/hero-indian-pulses.jpg";

const Hero = () => {
  const backgroundImages = [heroGrains, heroProducts, heroPulses];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Premium agricultural products"
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <div className="slide-up mb-8 sm:mb-12">           
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-2xl">
              The Taste of India,
              <span className="block text-transparent bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text">
                Across the World
              </span>
            </h1>
          </div>
          
          <div className="slide-up max-w-4xl mx-auto mb-12 sm:mb-16" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/95 leading-relaxed font-light">
              Your trusted partner in global agricultural trade. Rajlaxmi Global Ventures brings you 
              premium quality rice, wheat, pulses, and traditional Indian food products with 
              <span className="font-semibold text-accent"> 25 years of domestic market expertise.</span>
            </p>
          </div>

          <div className="stagger-animation flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20">
            <Button 
              variant="accent" 
              size="xl" 
              className="group w-full sm:w-auto text-lg px-8 py-4 shadow-2xl hover:shadow-accent/25 hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover Products
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="w-full sm:w-auto text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm shadow-2xl hover:scale-105 transition-all duration-300"
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKL01lZGlhQm94IFswIDAgNTk1IDg0Ml0KPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9MZW5ndGggMTQ0Cj4+CnN0cmVhbQpCVApxCjU2LjY5MjkxIDc5NC4wMDM5IGwKQlQKL0YxIDEyIFRmCjU2LjY5MjkxIDc1Ni4wMDM5IFRkCihSYWpsYXhtaSBPdmVyc2VhcyAtIFByb2R1Y3QgQ2F0YWxvZykgVGoKRVQKQlQKL0YxIDEwIFRmCjU2LjY5MjkxIDcyNi4wMDM5IFRkCihDb250YWN0OiBpbmZvQHJhamxheG1pb3ZlcnNlYXMuY29tKSBUagpFVApFVApRCmVuZHN0cmVhbQplbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwNTggMDAwMDAgbiAKMDAwMDAwMDExNSAwMDAwMCBuIAowMDAwMDAwMjQ1IDAwMDAwIG4gCjAwMDAwMDAzMjIgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA2Ci9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgo1MTYKJSVFT0Y=';
                link.download = 'Rajlaxmi-Global-Ventures-Catalog.pdf';
                link.click();
              }}
            >
              Download Catalog
            </Button>
          </div>

          {/* Key Features - Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="stagger-animation group bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 hover:border-accent/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Global Reach</h3>
              <p className="text-white/80 leading-relaxed">Expanding from 25 years of domestic success to international markets with world-class standards</p>
            </div>
            <div className="stagger-animation group bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 hover:border-accent/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Certified Quality</h3>
              <p className="text-white/80 leading-relaxed">FSSAI, APEDA, ISO certified operations with IEC code for seamless international trade</p>
            </div>
            <div className="stagger-animation group bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 hover:border-accent/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Reliable Supply</h3>
              <p className="text-white/80 leading-relaxed">Consistent quality and timely delivery across global markets with guaranteed satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <div className="w-1.5 h-4 bg-accent rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;