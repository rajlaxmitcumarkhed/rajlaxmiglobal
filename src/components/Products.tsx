import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card";
import { Button } from "@/components/ui/enhanced-button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Wheat, Grape, Bean, Leaf, ArrowRight, Award } from "lucide-react";
import riceImage from "@/assets/rice-varieties.jpg";
import wheatImage from "@/assets/wheat-products.jpg";
import pulsesImage from "@/assets/ToorDal.png";
import traditionalImage from "@/assets/OrganicJaggery.png";

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      name: "Premium Rice",
      icon: Grape,
      image: riceImage,
      description: "High-quality rice varieties sourced from India's premium growing regions, processed with advanced technology to maintain nutritional value and authentic taste.",
      shortDescription: "Premium quality rice varieties for global markets",
      varieties: [
        "Basmati Rice (Traditional & Sella)",
        "Non-Basmati Rice (IR-64, PR-11)",
        "Parboiled Rice",
        "Brown Rice",
        "Jasmine Rice",
        "Long Grain White Rice"
      ],
      tags: ["Premium Grade", "Export Quality", "Aromatic"]
    },
    {
      id: 2,
      name: "Wheat Products",
      icon: Wheat,
      image: wheatImage,
      description: "Superior wheat varieties and processed products from certified farms, meeting international quality standards for nutrition and consistency.",
      shortDescription: "Superior wheat varieties and processed products",
      varieties: [
        "Durum Wheat",
        "Hard Red Winter Wheat",
        "Soft White Wheat",
        "Whole Wheat Flour",
        "Refined Wheat Flour",
        "Semolina (Suji)"
      ],
      tags: ["High Protein", "Premium Milling", "Bulk Available"]
    },
    {
      id: 3,
      name: "Pulses & Legumes",
      icon: Bean,
      image: pulsesImage,
      description: "Nutritious pulses and legumes rich in protein and essential nutrients, carefully processed to retain their natural goodness.",
      shortDescription: "Nutritious pulses rich in protein and nutrients",
      varieties: [
        "Toor Dal (Pigeon Peas)",
        "Chana Dal (Split Chickpeas)",
        "Groundnuts (Peanuts)",
        "Moong Dal (Green Gram)",
        "Urad Dal (Black Gram)",
        "Kidney Beans (Rajma)"
      ],
      tags: ["High Protein", "Natural & Organic", "Split & Whole"]
    },
    {
      id: 4,
      name: "Traditional Foods",
      icon: Leaf,
      image: traditionalImage,
      description: "Authentic Indian traditional food products processed using time-honored methods while maintaining modern hygiene standards.",
      shortDescription: "Authentic Indian traditional food products",
      varieties: [
        "Organic Jaggery (Gur)",
        "Palm Jaggery",
        "Poha (Flattened Rice)",
        "Sabudana (Tapioca Pearls)",
        "Rock Salt",
        "Sesame Seeds"
      ],
      tags: ["100% Natural", "Traditional Processing", "Organic"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentSlide];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Premium Quality Products
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Our Premium 
            <span className="block text-transparent bg-gradient-primary bg-clip-text">
              Agricultural Products
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover our extensive range of premium quality agricultural products, carefully sourced 
            and processed to meet international standards. From traditional Indian grains to exotic pulses, 
            we bring you the finest selection for global markets.
          </p>
        </div>

        {/* Interactive Product Slider */}
        <div className="relative w-full mb-16">
          <Card variant="floating" className="overflow-hidden shadow-2xl hover:shadow-floating transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
              {/* Product Image */}
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2">
                    {currentProduct.tags.map((tag, index) => (
                      <span key={index} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-4xl font-bold text-foreground mb-4 leading-tight">
                    {currentProduct.name}
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                    {currentProduct.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Varieties Available:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {currentProduct.varieties.map((variety, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-foreground font-medium">{variety}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="default" 
                    size="lg" 
                    className="w-full text-lg py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Quote for {currentProduct.name}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={prevSlide}
              className="group hover:scale-105 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Previous
            </Button>
            
            <div className="flex space-x-3">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentSlide 
                      ? 'bg-primary shadow-lg' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="lg"
              onClick={nextSlide}
              className="group hover:scale-105 transition-all duration-300"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Product Grid Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {products.map((product, index) => (
            <Card
              key={product.id}
              variant={index === currentSlide ? "glow" : "interactive"}
              className={`cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                index === currentSlide ? 'ring-2 ring-primary ring-offset-2' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                  <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    index === currentSlide ? 'bg-primary/20' : 'bg-transparent hover:bg-primary/10'
                  }`}></div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{product.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.shortDescription}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;