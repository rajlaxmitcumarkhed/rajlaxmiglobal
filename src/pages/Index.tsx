
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductsCarousel from "@/components/ProductsCarousel";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <ProductsCarousel />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
