import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, CheckCircle, Globe } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import fssaicertificate from "../assets/FSSAI_RAJLAXMI.png";
import apedacertificate from "../assets/APEDA_RAJLAXMI.png";
import ieccertificate from "../assets/IEC_RAJLAXMI.png";
import fssailogo from "../assets/FssaiLogo.png";
import apedalog from "../assets/ApedaLogo.png";
import ieclogo from "../assets/IECCode.png";
import isologo from "../assets/IsoLogo.png";

const Certifications = () => {
  const certifications = [
    {
      name: "FSSAI License",
      description:
        "Food Safety and Standards Authority of India certification for food safety compliance",
      icon: Shield,
      logo: fssailogo,
      certificate: fssaicertificate,
      status: "Certified",
      color: "success",
    },
    {
      name: "APEDA Registration",
      description:
        "Agricultural and Processed Food Products Export Development Authority registration",
      icon: Award,
      logo: apedalog,
      certificate: apedacertificate,
      status: "Registered",
      color: "success",
    },
    {
      name: "IEC Code",
      description:
        "Import Export Code for international trade operations",
      icon: Globe,
      logo: ieclogo,
      certificate: ieccertificate,
      status: "Active",
      color: "success",
    },
    {
      name: "ISO Quality Standards",
      description:
        "Commitment to international quality management systems",
      icon: CheckCircle,
      logo: isologo,
      certificate: null,
      status: "Compliant",
      color: "success",
    },
  ];

  const qualities = [
    "Quality Assurance",
    "Competitive Prices",
    "Timely Delivery",
    "Decades of Expertise",
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-muted/10 via-background to-primary/5"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Certified Excellence
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Certifications &
            <span className="block pb-3 text-transparent bg-gradient-primary bg-clip-text">
              Quality Standards
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Building on the trusted foundation of Rajlaxmi Trading Company, our
            commitment to quality is backed by internationally recognized
            certifications and rigorous quality control processes, ensuring
            every product meets global standards.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => {
            const CertCard = (
              <Card
                key={index}
                variant="interactive"
                className="text-center h-full cursor-pointer"
              >
                <CardHeader>
                  {cert.logo ? (
                    <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <img
                        src={cert.logo}
                        alt={cert.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-lg flex items-center justify-center mx-auto mb-4 p-2">
                      <cert.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  )}

                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {cert.description}

                    {cert.certificate && (
                      <>
                        <br />
                        <span className="text-primary font-medium">
                          (Click to view certificate)
                        </span>
                      </>
                    )}
                  </p>

                  <Badge
                    variant="default"
                    className="bg-success text-success-foreground"
                  >
                    {cert.status}
                  </Badge>
                </CardContent>
              </Card>
            );

            return cert.certificate ? (
              <Dialog key={index}>
                <DialogTrigger asChild>{CertCard}</DialogTrigger>
                <DialogContent className="max-w-[95vw] max-h-[95vh] p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={cert.certificate}
                    alt={`${cert.name} Certificate`}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            ) : (
              CertCard
            );
          })}
        </div>

        {/* Quality Pillars */}
        {/*
        <Card variant="gradient" className="text-center">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Our Quality Pillars
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {qualities.map((quality, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground text-center">
                    {quality}
                  </h4>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        */}

        {/* Additional Information */}
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <Card variant="floating">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-6 h-6 text-primary mr-2" />
                Food Safety Compliance
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Our FSSAI certification ensures that all food products are
                processed, packaged, and stored according to the highest safety
                standards. We maintain strict quality control throughout our
                supply chain.
              </p>
            </CardContent>
          </Card>

          <Card variant="floating">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-6 h-6 text-primary mr-2" />
                Export Ready
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                With APEDA registration and IEC code, we are fully equipped for
                international trade. Our products meet global quality standards
                and export documentation requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;