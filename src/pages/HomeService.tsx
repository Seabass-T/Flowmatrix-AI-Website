import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Phone, CheckCircle, Mail, TrendingUp } from "lucide-react";
import LandingPageHero from "@/components/landing-pages/LandingPageHero";
import PainPointCards from "@/components/landing-pages/PainPointCards";
import OfferFunnel from "@/components/landing-pages/OfferFunnel";

// Extend the Window interface to include Calendly
declare global {
  interface Window {
    Calendly: any;
  }
}

const HomeService = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Cleanup function
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/flowmatrixai-info/consultation-call'
      });
    }
  };

  // Pain Points Data
  const painPoints = [
    {
      icon: Clock,
      title: "Dispatch Lag",
      description: "Manual scheduling and job assignment wastes hours that could be spent serving more customers.",
      expandedDescription: "Every minute spent manually coordinating technician schedules is a minute you could be booking more profitable service calls."
    },
    {
      icon: Users,
      title: "Technician Idle Time",
      description: "Poor route optimization leaves technicians idle instead of maximizing billable hours.",
      expandedDescription: "Inefficient routing means your techs spend more time driving and less time on profitable service calls, killing your margins."
    },
    {
      icon: Phone,
      title: "Customer Wait Times",
      description: "Delayed response times mean customers book with competitors who respond faster.",
      expandedDescription: "When customers call for service, they want immediate answers. Slow responses send them straight to your competitors."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Home Service Automation Solutions | FlowMatrix AI - Toronto & GTA</title>
        <meta name="description" content="End dispatch lag and technician idle time. Automate your home service workflows with FlowMatrix AI. Serving Toronto & GTA HVAC, plumbing, and electrical contractors." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <LandingPageHero
          headline="End Dispatch Lag & Technician Idle Time"
          subheadline="We automate your service workflows so your techs book more jobs per day. Free 5-Day Diagnostic → 2-Week Pilot → Month-to-Month Partnership."
          ctaText="Book Free Diagnostic"
          onCTAClick={openCalendly}
        />

        {/* Pain Point Cards */}
        <PainPointCards painPoints={painPoints} variant="home-service" />

        {/* Solutions Section */}
        <section className="py-20 bg-green-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How We Solve These Problems
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Our automation solutions are built specifically for home service providers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-4">AI-Powered Dispatching</h3>
                  <p className="text-muted-foreground mb-4">
                    Intelligent job assignment gets the right tech to the right job at the right time.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Skill-based technician matching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Real-time availability tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Emergency call prioritization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-4">Optimized Routing</h3>
                  <p className="text-muted-foreground mb-4">
                    Smart route planning maximizes billable hours and minimizes drive time.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Dynamic route optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Traffic & weather integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Same-day scheduling fill-ins</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-4">Automated Follow-Ups</h3>
                  <p className="text-muted-foreground mb-4">
                    Instant customer communication keeps them informed and satisfied.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">ETA notifications & updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Automated appointment reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Post-service review requests</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Proof / Case Study Section */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Real Results from Real Service Businesses
              </h2>
              <p className="text-lg text-muted-foreground">
                See how automation transformed dispatch and scheduling efficiency
              </p>
            </div>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 mb-4">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-green-600 mb-2">150+ Hours</div>
                    <div className="text-lg font-semibold text-gray-700 mb-2">Saved in 3 Months</div>
                    <div className="text-sm text-gray-600">Automated dispatch and scheduling</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">$3,500+</div>
                    <div className="text-lg font-semibold text-gray-700 mb-2">ROI Achieved</div>
                    <div className="text-sm text-gray-600">Combined automation savings</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-inner">
                  <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                    "The automated dispatch system eliminated hours of daily phone tag. Our technicians now complete 2-3 more jobs per day, and customer satisfaction has skyrocketed."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white font-bold">
                      UBL
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">UBL Group</div>
                      <div className="text-sm text-gray-600">GTA Home Service Provider</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Offer Funnel */}
        <OfferFunnel />

        {/* Pricing Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                No long-term contracts. No hidden fees. Pay only for value delivered.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">Free Consultation</h3>
                  <div className="text-4xl font-bold text-green-600 mb-6">$0</div>
                  <p className="text-muted-foreground mb-6">
                    30-minute call to understand your dispatch workflow and identify quick wins
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Workflow assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Automation opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">ROI estimation</span>
                    </li>
                  </ul>
                  <Button onClick={openCalendly} variant="outline" size="lg" className="w-full">
                    Book Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-500 shadow-2xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">Audit</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">Pay What You Think</div>
                  <p className="text-sm text-muted-foreground mb-6">After you see the value</p>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive 5-day workflow analysis with actionable automation roadmap
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Full dispatch flow mapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Custom automation plan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">ROI projections</span>
                    </li>
                  </ul>
                  <Button onClick={openCalendly} size="lg" className="w-full bg-green-600 hover:bg-green-700">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">Partnership</h3>
                  <div className="text-4xl font-bold text-green-600 mb-6">Custom Quote</div>
                  <p className="text-muted-foreground mb-6">
                    Ongoing automation development and optimization
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">2-week pilot project</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Month-to-month terms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Dedicated support</span>
                    </li>
                  </ul>
                  <Button onClick={openCalendly} variant="outline" size="lg" className="w-full">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Book More Jobs Per Day?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Book your free consultation now. No credit card required, no pressure—just a conversation about how automation can transform your home service business.
            </p>
            <Button
              onClick={openCalendly}
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 text-xl px-12 py-8 shadow-2xl"
            >
              Book Your Free Consultation
              <Phone className="ml-3 h-6 w-6" />
            </Button>
            <p className="text-white/80 mt-6 text-sm">
              ✓ 30-minute call ✓ No obligations ✓ Instant booking
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeService;
