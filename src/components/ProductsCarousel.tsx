import { useState, useEffect } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { ArrowRight, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
import riceImage from "@/assets/rice-varieties.png";
import wheatImage from "@/assets/wheat-products.png";
import pulsesImage from "@/assets/pulses-collection.png";
import traditionalImage from "@/assets/traditional-food.png";

const ProductsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Pulses & Legumes",
      image: pulsesImage,
    },
    {
      id: 2,
      name: "Wheat Products",
      image: wheatImage,
    },
    {
      id: 3,
      name: "Premium Rice",
      image: riceImage,
    },
    {
      id: 4,
      name: "Traditional Foods",
      image: traditionalImage,
    }
  ];

  // Auto-scroll carousel (right to left)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <section id="products" className="py-16 md:py-20 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <Leaf className="w-4 h-4 mr-2" />
            Our Products
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Premium
            <span className="block pb-3 text-transparent bg-gradient-primary bg-clip-text">
              Agricultural Products
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated selection of premium agricultural products,
            sourced from the finest farms across India.
          </p>
        </div>

        {/* Flex container with equal height children */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">

          {/* Left: Sliding Product Images */}
          <div className="w-full lg:flex-1 h-full">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-full flex flex-col">
              <div
                className="flex transition-transform duration-700 ease-in-out flex-1"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {products.map((product) => (
                  <div key={product.id} className="min-w-full relative h-full">
                    <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                      ? 'bg-white shadow-lg scale-110'
                      : 'bg-white/50 hover:bg-white/70'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Explore More Section */}
          <div className="w-full lg:w-96 h-full flex items-stretch">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-10 border border-primary/10 w-full flex flex-col justify-between">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-snug lg:leading-normal pb-1">
                Discover Our
                <span className="block text-transparent bg-gradient-primary bg-clip-text">
                  Complete Range
                </span>
              </h3>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                From premium basmati rice to traditional Indian pulses, explore our
                comprehensive collection of high-quality agricultural products.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">50+ Product Varieties</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Export Quality Standards</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Competitive Pricing</span>
                </div><div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Customizable Packaging</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Quality Assurance</span>
                </div>
              </div>

              <Button
                variant="default"
                size="lg"
                className="w-full lg:w-auto text-lg py-6 px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => navigate('/products')}
              >
                View All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
};

export default ProductsCarousel;