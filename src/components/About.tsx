import { Card, CardContent } from "@/components/ui/enhanced-card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, MapPin, Calendar, Award } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const About = () => {
  const features = [
    "Premium quality agricultural products",
    "25 years of domestic market experience", 
    "FSSAI & APEDA certified operations",
    "Global export capabilities with IEC code",
    "Sister company of Rajlaxmi Trading Company",
    "Specialized in rice, wheat, pulses & traditional foods"
  ];

  const stats = [
    { icon: Calendar, label: "Years of Experience", value: 25, suffix: "+" },
    { icon: Users, label: "Satisfied Customers", value: 600, suffix: "+" },
    { icon: MapPin, label: "Product Varieties", value: 50, suffix: "+" },
  ];

  return (
  <section
    id="about"
    className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/10"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
          <Award className="w-4 h-4 mr-2" />
          About Our Company
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Welcome to
         <span className="block pb-3 text-transparent bg-gradient-primary bg-clip-text">
            Rajlaxmi Global
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Building on{" "}
          <span className="font-semibold text-primary">
            25 years of agricultural expertise
          </span>{" "}
          from domestic markets, we're now bringing premium Indian agricultural
          products to the global stage with uncompromising quality and
          reliability in every shipment.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
        {/* Left side */}
        <div className="order-2 lg:order-1 space-y-10">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Global Solutions,
              <span className="block text-primary">Local Expertise</span>
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Building on 25 years of success in the domestic market, Rajlaxmi
              Global combines deep local knowledge with international
              standards to deliver premium agricultural products worldwide.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a sister company of the established Rajlaxmi Trading Company,
              we bring proven expertise in agricultural trade to new
              international markets.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side → Stats + QA */}
        <div className="order-1 lg:order-2 space-y-10">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                variant="floating"
                padding="none"
                className="text-center overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2 break-words">
                    <AnimatedCounter
                      endValue={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quality Assurance card */}
          <Card
            variant="floating"
            className="overflow-hidden hover:shadow-floating transition-all duration-500"
          >
            <CardContent className="p-6 sm:p-10 text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-foreground mb-6">
                Quality Assurance
              </h4>
              <p className="text-muted-foreground text-xl leading-relaxed mb-10">
                We ensure every product meets international standards through
                rigorous quality control processes, certified operations, and
                compliance with global food safety regulations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <div className="text-4xl font-bold text-primary mb-3 break-words">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground font-semibold">
                    Quality Assured
                  </div>
                </div>
                <div className="text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                  <div className="text-4xl font-bold text-accent mb-3 break-words">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground font-semibold">
                    Quality Control
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

};

export default About;