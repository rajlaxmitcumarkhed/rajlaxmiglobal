import { useState } from "react";
import { Card, CardContent } from "@/components/ui/enhanced-card";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight, Award, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Import product images
import BasmatiRice from "@/assets/BasmatiRice.png";
import NonBasmatiRice from "@/assets/NonBasmati.png";
import ToorDal from "@/assets/ToorDal.png";
import Jaggery from "@/assets/OrganicJaggery.png";
import SesameSeeds from '@/assets/SesameSeeds.png'
import Poha from '@/assets/Poha.png'
import Sabudana from '@/assets/Sabudana.png'
import Groundnuts from '@/assets/Groundnuts.png'
import MoongDal from '@/assets/MoongDal.png'
import ChanaDal from '@/assets/ChanaDal.jpg'
import KabuliCheakpeas from '@/assets/KabuliChana.jpg'
import Cowpeas from '@/assets/Cowpeas.jpg'
import SoyabeanSeeds from '@/assets/Soyabean.jpg'
import BrownRice from '@/assets/BrownRice.png'
import Corn from '@/assets/Corns.jpg'
import Turmeric from '@/assets/Turmeric.png'
import BrownCoconuts from '@/assets/BrownCoconuts.png'
import Wheat from '@/assets/Wheat.png'
import Makhana from '@/assets/Makhana.png'


const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Toor Dal",
      category: "pulses",
      image: ToorDal,
      description: "High-quality pigeon peas rich in protein and essential nutrients.",
      varieties: ["Plain Toor Dal", "Oily Toor Dal"],
      tags: ["High Protein", "Natural", "Split Variety"]
    },
    {

      id: 2,
      name: "Chana Dal",
      category: "pulses",
      image: ChanaDal,
      description: "Premium split chickpeas with excellent taste and nutritional value.",
      varieties: ["Split Chickpeas", "Roasted Chana"],
      tags: ["High Protein", "Versatile", "Premium Quality"]
    },
    {
      id: 3,
      name: "Groundnuts",
      category: "pulses",
      image: Groundnuts,
      description: "Fresh groundnuts (peanuts) with natural flavor and high oil content.",
      varieties: ["Bold Peanuts", "Java Peanuts", "Red Skin Peanuts"],
      tags: ["High Oil Content", "Fresh", "Export Grade"]
    },
    {
      id: 4,
      name: "Kabuli Chickpeas",
      category: "pulses",
      image: KabuliCheakpeas,
      description: "High-quality Kabuli chickpeas, rich in protein and fiber, ideal for a variety of nutritious dishes.",
      varieties: ["Bold Kabuli", "Medium Kabuli", "Small Kabuli"],
      tags: ["Protein-Rich", "Nutritious", "Versatile"]
    },
    {
      id: 5,
      name: "Cowpeas",
      category: "pulses",
      image: Cowpeas,
      description: "Nutritious cowpeas packed with protein and fiber, perfect for soups, stews, and traditional recipes.",
      varieties: ["Red Cowpeas", "White Cowpeas", "Brown Cowpeas"],
      tags: ["Protein-Rich", "Healthy", "Traditional"]
    },
    {
      id: 6,
      name: "Soyabean Seeds",
      category: "pulses",
      image: SoyabeanSeeds,
      description: "Premium soyabean seeds, rich in protein and essential nutrients, widely used for oil extraction and food products.",
      varieties: ["Yellow Soyabean", "Black Soyabean"],
      tags: ["Protein-Rich", "Nutrient-Dense", "Versatile"]
    },
    {
      id: 7,
      name: "Basmati Rice",
      category: "rice",
      image: BasmatiRice,
      description: "Premium aromatic basmati rice with long grains and authentic taste, perfect for global markets.",
      varieties: ["Traditional Basmati", "Sella Basmati", "Steam Basmati"],
      tags: ["Premium Grade", "Export Quality", "Aromatic"]
    },
    {
      id: 8,
      name: "Non-Basmati Rice",
      category: "rice",
      image: NonBasmatiRice,
      description: "High-quality non-basmati rice varieties including IR-64, PR-11, and parboiled rice.",
      varieties: ["IR-64", "PR-11", "Parboiled Rice"],
      tags: ["Bulk Available", "Cost Effective", "Nutritious"]
    },
    {
      id: 9,
      name: "Brown Rice",
      category: "rice",
      image: BrownRice,
      description: "Healthy brown rice with natural bran layer intact, rich in fiber and nutrients.",
      varieties: ["Long Grain Brown", "Medium Grain Brown"],
      tags: ["Healthy Choice", "High Fiber", "Natural"]

    },
    {
      id: 10,
      name: "Corn(Maize)",
      category: "grains",
      image: Corn,
      description: "High-quality corn kernels used for food, feed, and industrial applications with rich nutritional value.",
      varieties: ["Sweet Corn", "Popcorn", "Flint Corn", "Dent Corn"],
      tags: ["Nutritious", "Versatile", "High Energy"]
    },
    {
      id: 11,
      name: "Moong Dal",
      category: "pulses",
      image: MoongDal,
      description: "Green gram dal with excellent digestibility and nutritional benefits.",
      varieties: ["Green Moong", "Yellow Moong", "Moong Whole"],
      tags: ["Easy Digest", "Nutritious", "Protein Rich"]
    },
    {
      id: 12,
      name: "Organic Jaggery",
      category: "traditional",
      image: Jaggery,
      description: "Pure organic jaggery made from sugarcane with traditional processing methods.",
      varieties: ["Block Jaggery", "Powder Jaggery"],
      tags: ["100% Organic", "Traditional", "Pure"]
    },
    {
      id: 13,
      name: "Poha",
      category: "traditional",
      image: Poha,
      description: "Flattened rice processed hygienically for ready-to-cook applications.",
      varieties: ["Thick Poha", "Thin Poha", "Medium Poha"],
      tags: ["Ready to Cook", "Hygienic", "Traditional"]
    },
    {
      id: 14,
      name: "Sabudana",
      category: "traditional",
      image: Sabudana,
      description: "Premium tapioca pearls perfect for fasting foods and desserts.",
      varieties: ["Small Pearl", "Medium Pearl", "Large Pearl"],
      tags: ["Premium Grade", "Fasting Food", "Versatile"]
    },
    {
      id: 15,
      name: "Sesame Seeds",
      category: "traditional",
      image: SesameSeeds,
      description: "High-quality sesame seeds rich in natural oils and nutrients.",
      varieties: ["White Sesame", "Black Sesame", "Natural Sesame"],
      tags: ["High Oil Content", "Natural", "Nutrient Rich"]
    },
    {
      id: 16,
      name: "Turmeric",
      category: "traditional",
      image: Turmeric,
      description: "Premium quality turmeric with a rich golden color and high curcumin content.",
      varieties: ["Finger Turmeric", "Powdered Turmeric", "Bulb Turmeric"],
      tags: ["High Curcumin", "Organic", "Freshly Harvested"]
    },
    {
      id: 17,
      name: "Brown Coconuts",
      category: "traditional",
      image: BrownCoconuts,
      description: "Naturally matured brown coconuts, known for their hard shell, rich kernel, and refreshing water.",
      varieties: ["Semi Husked", "Fully Husked", "Dehusked"],
      tags: ["High Oil Content", "Rich Kernel", "Long Shelf Life"]
    },
    {
      id: 18,
      name: "Wheat",
      category: "wheat",
      image: Wheat,
      description: "High-quality wheat grains, carefully sourced for their rich nutrition and superior milling properties.",
      varieties: ["Durum Wheat", "Sharbati Wheat", "Lokwan Wheat", "Emmer Wheat"],
      tags: ["High Fibre", "Stone-Milled", "Whole Grain"]
    },
    {
      id: 19,
      name: "Makhana",
      category: "traditional",
      image: Makhana,
      description: "Premium quality fox nuts (makhana) known for their crunch, purity, and rich nutritional profile.",
      varieties: ["Raw Makhana", "Roasted Makhana", "Flavored Makhana"],
      tags: ["High Protein", "Low Fat", "Gluten-Free", "Superfood"]
    }
  ];

  const categories = [
    { id: "all", name: "All Products", count: products.length },
    { id: "rice", name: "Rice Varieties", count: products.filter(p => p.category === "rice").length },
    { id: "wheat", name: "Wheat Products", count: products.filter(p => p.category === "wheat").length },
    { id: "pulses", name: "Pulses & Legumes", count: products.filter(p => p.category === "pulses").length },
    { id: "traditional", name: "Traditional Foods", count: products.filter(p => p.category === "traditional").length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const scrollToContact = () => {
    navigate("/#contact");
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b border-border/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 lg:leading-normal pb-1 ">
              Our Complete
              <span className="block text-transparent bg-gradient-primary bg-clip-text">
                Product Range
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discover our extensive collection of premium quality products,
              carefully sourced and processed to meet international standards for global markets.
            </p>
          </div>
        </div>
      </section>

      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Search */}
                <Card className="p-6 mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Search Products</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </Card>

                {/* Categories */}
                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Filter className="w-4 h-4 mr-2 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Categories</h3>
                  </div>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between ${selectedCategory === category.id
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : 'hover:bg-muted/50 text-foreground'
                          }`}
                      >
                        <span className="font-medium">{category.name}</span>
                        <Badge variant={selectedCategory === category.id ? "secondary" : "outline"} className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-muted-foreground">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} variant="interactive" className="group overflow-hidden card-hover">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {product.description}
                        </p>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Available Varieties:</h4>
                        <div className="space-y-1">
                          {product.varieties.slice(0, 2).map((variety, index) => (
                            <div key={index} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                              {variety}
                            </div>
                          ))}
                          {product.varieties.length > 2 && (
                            <div className="text-xs text-primary font-medium">
                              +{product.varieties.length - 2} more varieties
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* <Button
                        onClick={scrollToContact}
                        className="w-full group-hover:shadow-lg transition-all duration-300"
                        variant="default"
                      >
                        Get Quote
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button> */}
                      <Button
                        onClick={() => {
                          const message = `Hello, I have a requirement for ${product.name}`;
                          const whatsappUrl = `https://wa.me/917841868799?text=${encodeURIComponent(message)}`;
                          window.open(whatsappUrl, "_blank");
                        }}
                        className="w-full group-hover:shadow-lg transition-all duration-300"
                        variant="default"
                      >
                        Get Quote
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>

                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">No products found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Products;