
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Users, Zap, TrendingUp, Award, Phone, DollarSign } from "lucide-react";
import { useEffect } from "react";

declare global {
  interface Window {
    Calendly: any;
  }
}

const Pricing = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/flowmatrixai-info/consultation-call',
        prefill: {},
        utm: {}
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-background via-secondary/20 to-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            AI Automation Solutions for{" "}
            <span className="bg-gradient-to-r from-interactive-primary to-interactive-accent bg-clip-text text-transparent">
              Trade | Real Estate | Home Improvement
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-4">
            Residential & Commercial Services – Toronto & GTA
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Start with a Free Consultation → Get a Pay-What-You-Think Audit → One Partnership for Implementation & Scaling
          </p>
          <Button 
            onClick={openCalendly}
            size="lg" 
            className="bg-gradient-to-r from-interactive-primary to-interactive-accent hover:from-interactive-primary-hover hover:to-interactive-accent-hover text-lg px-8 py-6 animate-fade-in"
          >
            Book Your Free Consultation <Phone className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Process Flow */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 animate-slide-up">
            Our Simple 5-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Free Consultation", description: "30-minute discovery call to understand your business needs", icon: Phone },
              { step: "02", title: "Trade Automation Audit", description: "Pay-what-you-think-it's-worth comprehensive audit", icon: Zap },
              { step: "03", title: "Assessment", description: "Custom implementation scope based on audit findings", icon: TrendingUp },
              { step: "04", title: "Implementation", description: "Custom automation development and integration", icon: Users },
              { step: "05", title: "Scale", description: "Ongoing optimization and expansion", icon: Award }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-interactive-primary to-interactive-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-interactive-primary mb-2">{item.step}</div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-interactive-primary to-interactive-accent opacity-30 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Transparent Pricing Structure
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Free Consultation */}
            <Card className="relative hover:shadow-xl transition-shadow border-2 border-interactive-secondary/30 animate-fade-in">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground">Free Consultation</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Your entry point to automation
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-interactive-primary">$0</span>
                  <p className="text-muted-foreground mt-2">30-minute discovery call</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Business process assessment</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Automation opportunity identification</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>ROI potential discussion</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Audit scope definition</span>
                  </li>
                </ul>
                <Button onClick={openCalendly} className="w-full bg-interactive-primary hover:bg-interactive-primary-hover">
                  Book Free Consultation <Phone className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Audit */}
            <Card className="relative hover:shadow-xl transition-shadow border-2 border-interactive-accent/50 bg-gradient-to-br from-interactive-accent/5 to-interactive-primary/5 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground">Pay-What-You-Think-It's-Worth Trade Automation Audit</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  You decide the value after delivery
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-interactive-accent to-interactive-primary bg-clip-text text-transparent">
                    You Decide
                  </span>
                  <p className="text-muted-foreground mt-2">Value-based pricing</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Complete workflow analysis</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>ROI snapshot & projections</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Visual automation roadmap</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Competitor benchmark analysis</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Industry-specific recommendations</span>
                  </li>
                </ul>
                <Button onClick={openCalendly} className="w-full bg-gradient-to-r from-interactive-accent to-interactive-primary hover:from-interactive-accent-hover hover:to-interactive-primary-hover">
                  Request Audit Today <Zap className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Partnership */}
            <Card className="relative hover:shadow-xl transition-shadow border-2 border-interactive-secondary animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground">Automation Partnership</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Implementation & scaling support
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-interactive-primary">Custom Quote</span>
                  <p className="text-muted-foreground mt-2">Based on assessment</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Custom automation implementation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>System integrations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Team training & onboarding</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Ongoing optimization</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Scaling roadmap execution</span>
                  </li>
                </ul>
                <Button onClick={openCalendly} className="w-full bg-interactive-secondary hover:bg-interactive-secondary-hover">
                  Start Partnership <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="bg-card rounded-2xl p-8 shadow-lg mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Serving Trade, Residential, Commercial & Real Estate Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-interactive-primary mb-2">Trade Services</div>
              <p className="text-muted-foreground">Contractors, plumbers, electricians, HVAC</p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-interactive-accent mb-2">Real Estate</div>
              <p className="text-muted-foreground">Agents, brokers, property management</p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-interactive-secondary mb-2">Home Improvement</div>
              <p className="text-muted-foreground">Renovations, landscaping, design</p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-interactive-primary mb-2">Commercial</div>
              <p className="text-muted-foreground">Office buildings, retail, industrial</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 animate-fade-in">
              <h3 className="font-semibold text-foreground mb-3">Why pay-what-you-think-it's-worth for the audit?</h3>
              <p className="text-muted-foreground">This low-risk model ensures you're completely satisfied with the value delivered. We're confident in our audit quality and want you to experience the insights before determining fair compensation. It eliminates upfront barriers and builds trust.</p>
            </Card>
            <Card className="p-6 animate-fade-in">
              <h3 className="font-semibold text-foreground mb-3">What happens after the consultation?</h3>
              <p className="text-muted-foreground">After your free consultation, we'll define the scope for your audit. Once the audit is complete and you've paid what you think it's worth, we'll present partnership options based on the findings.</p>
            </Card>
            <Card className="p-6 animate-fade-in">
              <h3 className="font-semibold text-foreground mb-3">Why only one partnership package?</h3>
              <p className="text-muted-foreground">Every business is unique. Rather than forcing you into preset tiers, we create a custom partnership based on your specific audit results and assessment needs. This ensures optimal value and fit.</p>
            </Card>
            <Card className="p-6 animate-fade-in">
              <h3 className="font-semibold text-foreground mb-3">Do you work with businesses outside the GTA?</h3>
              <p className="text-muted-foreground">While we specialize in serving the Greater Toronto Area trade, real estate, and home improvement sectors, we do work with qualified businesses across Canada. Contact us to discuss your specific needs.</p>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-interactive-primary/10 to-interactive-accent/10 rounded-2xl p-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join 50+ GTA businesses already saving 120+ hours per month through intelligent automation. Start with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={openCalendly}
              size="lg" 
              className="bg-gradient-to-r from-interactive-primary to-interactive-accent hover:from-interactive-primary-hover hover:to-interactive-accent-hover text-lg px-8 py-6"
            >
              Book Your Free Consultation <Phone className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={openCalendly}
              size="lg" 
              variant="outline"
              className="border-interactive-primary text-interactive-primary hover:bg-interactive-primary hover:text-white text-lg px-8 py-6"
            >
              Request Audit Today <DollarSign className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
