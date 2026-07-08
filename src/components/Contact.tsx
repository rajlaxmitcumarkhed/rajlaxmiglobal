
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send, Building } from "lucide-react";
import { useState } from "react";
import { useForm } from '@formspree/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    products: '',
    message: ''
  });
  const [state, handleSubmit] = useForm("xyzdklgb");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGetQuote = (e: React.FormEvent) => {
    e.preventDefault(); // prevent default form submission

    // Submit form data to Formspree
    handleSubmit({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      company: formData.company || "N/A",
      phone: formData.phone || "Please provide phone",
      products: formData.products || "Please specify products",
      message: formData.message || "Please provide your requirements, quantity, delivery location, etc."
    });

    // Optionally, show a thank you alert after submission
    if (state.succeeded) {
      alert("Thanks for considering us! We will be in touch with you shortly.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        products: "",
        message: "",
      });
    }
  };

  /*
  const handleGetQuote = () => {
    const subject = "Product Inquiry from Website - Rajlaxmi Global";
    const body = `Dear Rajlaxmi Global Team,

I am interested in getting a quote for your agricultural products.

Contact Details:
Name: ${formData.firstName} ${formData.lastName}
Company: ${formData.company || 'N/A'}
Email: ${formData.email || 'Please provide email'}
Phone: ${formData.phone || 'Please provide phone'}

Products of Interest: ${formData.products || 'Please specify products'}

Message: ${formData.message || 'Please provide your requirements, quantity needed, delivery location, etc.'}

Please provide detailed quotation including:
- Product specifications
- Pricing per unit/quantity
- Minimum order quantity
- Delivery timeline
- Payment terms

Looking forward to your response.

Best regards,
${formData.firstName} ${formData.lastName}`;

    const mailtoLink = `mailto:info@rajlaxmiglobal.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
   */

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Rajlaxmi Global
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to partner with us for premium agricultural products?
            Get in touch today for quotes, inquiries, or partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start w-full overflow-hidden">
          {/* Contact Information */}
          <div className="space-y-8 w-full">
            <Card variant="gradient" className="overflow-hidden w-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-2xl">
                  <Building className="w-7 h-7 text-primary mr-3" />
                  Company Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Address</h4>
                    <p className="text-muted-foreground leading-relaxed break-words">
                      Rajlaxmi Trading Company,
                      Pusad Road, Umarkhed<br />
                      Maharashtra, India - 445206
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                    <p className="text-muted-foreground break-words">
                      +91-7744824499 | +91-9422167917
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <p className="text-muted-foreground leading-relaxed break-all">
                      -
                      <a
                        href="mailto:sales@rajlaxmiglobal.in?subject=Business%20Inquiry&body=Hello%20Rajlaxmi%20Global,%0A%0AI%20would%20like%20to%20know%20more%20about..."
                        className="ml-1 hover:text-primary transition-colors underline"
                      >
                        sales@rajlaxmiglobal.in
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Sunday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card variant="floating" className="overflow-hidden w-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Why Choose Rajlaxmi Global?
                </h3>
                <div className="space-y-4">
                  {[
                    "25+ years of experience in agricultural trade",
                    "FSSAI, APEDA, ISO certified operations",
                    "Global export capabilities",
                    "Premium quality products",
                    "Competitive pricing and timely delivery"
                  ].map((point, i) => (
                    <div key={i} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card variant="floating" className="overflow-hidden w-full" id="sendMessage">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl font-bold">Send us a Message</CardTitle>
              <p className="text-muted-foreground text-lg">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      First Name *
                    </label>
                    <Input
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="h-12 w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Last Name *
                    </label>
                    <Input
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="h-12 w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">
                    Company Name
                  </label>
                  <Input
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="h-12 w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12 w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">
                    Phone Number
                  </label>
                  <Input
                    name="phone"
                    placeholder="+91 (XXX) XXX-XXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12 w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">
                    Products of Interest
                  </label>
                  <Input
                    name="products"
                    placeholder="Rice, Wheat, Pulses, etc."
                    value={formData.products}
                    onChange={handleInputChange}
                    className="h-12 w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your requirements, quantity needed, delivery location, etc."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="resize-none w-full"
                  />
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full h-14 text-lg font-semibold"
                  onClick={handleGetQuote}
                  type="button"
                >
                  <Send className="w-6 h-6 mr-3" />
                  Get Quote
                </Button>

                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );

};

export default Contact;
