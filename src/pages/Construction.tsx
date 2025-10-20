import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Calendar, FileText, CheckCircle, Mail, TrendingUp } from "lucide-react";
import LandingPageHero from "@/components/landing-pages/LandingPageHero";
import PainPointCards from "@/components/landing-pages/PainPointCards";
import OfferFunnel from "@/components/landing-pages/OfferFunnel";

// Extend the Window interface to include Calendly
declare global {
  interface Window {
    Calendly: any;
  }
}

const Construction = () => {
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
      icon: DollarSign,
      title: "Job Cost Overruns",
      description: "Poor cost tracking and invoice delays lead to budget overruns and reduced profitability on every job.",
      expandedDescription: "Without real-time visibility into project costs, you're constantly surprised by overages and struggling to maintain margins."
    },
    {
      icon: Calendar,
      title: "Scheduling Chaos",
      description: "Manual crew scheduling leads to gaps, idle time, missed deadlines, and frustrated clients.",
      expandedDescription: "Coordinating crews, equipment, and materials across multiple job sites wastes hours every day and creates costly delays."
    },
    {
      icon: FileText,
      title: "Invoice Delays",
      description: "Manual invoicing and approval bottlenecks slow your payment cycles and hurt cash flow.",
      expandedDescription: "Waiting weeks to send invoices means waiting even longer to get paid, creating unnecessary cash flow stress."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Construction Automation Solutions | FlowMatrix AI - Toronto & GTA</title>
        <meta name="description" content="Stop job cost overruns and scheduling chaos. Automate your construction workflows with FlowMatrix AI. Serving Toronto & GTA contractors." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <LandingPageHero
          headline="Stop Job Cost Overruns & Scheduling Chaos"
          subheadline="We automate your construction workflows so you spend less on admin and scale faster. Free 5-Day Diagnostic → 2-Week Pilot → Month-to-Month Partnership."
          ctaText="Book Free Diagnostic"
          onCTAClick={openCalendly}
        />

        {/* Pain Point Cards */}
        <PainPointCards painPoints={painPoints} variant="construction" />

        {/* Solutions Section */}
        <section className="py-20 bg-blue-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How We Solve These Problems
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Our automation solutions are built specifically for construction contractors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-4">Real-Time Cost Tracking</h3>
                  <p className="text-muted-foreground mb-4">
                    Automated expense tracking and budget alerts keep every job profitable from start to finish.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Instant budget variance alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Automated expense categorization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Profitability forecasting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-4">Automated Crew Scheduling</h3>
                  <p className="text-muted-foreground mb-4">
                    Smart scheduling optimizes crew assignments and eliminates gaps between jobs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Skill-based crew matching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Equipment conflict prevention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Automatic crew notifications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-4">Instant Invoicing</h3>
                  <p className="text-muted-foreground mb-4">
                    Generate and send invoices automatically as soon as jobs are completed.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Job completion triggers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Payment tracking & reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">QuickBooks integration</span>
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
                Real Results from a GTA Construction Contractor
              </h2>
              <p className="text-lg text-muted-foreground">
                See how UBL Group saved over 150 hours in just 3 months
              </p>
            </div>

            <Card className="border-0 shadow-2xl bg-blue-50 dark:bg-slate-800">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-4">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">150+ Hours</div>
                    <div className="text-lg font-semibold text-gray-700 mb-2">Saved in 3 Months</div>
                    <div className="text-sm text-gray-600">Email intelligence automation</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600 mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-green-600 mb-2">$3,500+</div>
                    <div className="text-lg font-semibold text-gray-700 mb-2">ROI Achieved</div>
                    <div className="text-sm text-gray-600">Combined automation savings</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-inner">
                  <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                    "The email intelligence system alone has transformed how we handle contractor communications. We're no longer drowning in our inbox, and urgent items are automatically flagged and prioritized."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      UBL
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">UBL Group</div>
                      <div className="text-sm text-gray-600">GTA Construction Contractor</div>
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
                  <div className="text-4xl font-bold text-blue-600 mb-6">$0</div>
                  <p className="text-gray-600 mb-6">
                    30-minute call to understand your workflow and identify quick wins
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Workflow assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Automation opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">ROI estimation</span>
                    </li>
                  </ul>
                  <Button onClick={openCalendly} variant="outline" size="lg" className="w-full">
                    Book Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-500 shadow-2xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">Audit</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">Pay What You Think</div>
                  <p className="text-sm text-gray-600 mb-6">After you see the value</p>
                  <p className="text-gray-600 mb-6">
                    Comprehensive 5-day workflow analysis with actionable automation roadmap
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Full workflow mapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Custom automation plan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">ROI projections</span>
                    </li>
                  </ul>
                  <Button onClick={openCalendly} size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">Partnership</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-6">Custom Quote</div>
                  <p className="text-gray-600 mb-6">
                    Ongoing automation development and optimization
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">2-week pilot project</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Month-to-month terms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Dedicated support</span>
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
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Stop Losing Money on Every Job?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Book your free consultation now. No credit card required, no pressure—just a conversation about how automation can transform your construction business.
            </p>
            <Button
              onClick={openCalendly}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-12 py-8 shadow-2xl"
            >
              Book Your Free Consultation
              <Calendar className="ml-3 h-6 w-6" />
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

export default Construction;
