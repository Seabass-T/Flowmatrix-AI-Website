
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
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
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Automation Journey
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business needs, from self-hosted solutions to full partnership programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Tier 1: Self-Hosted System */}
          <Card className="relative hover:shadow-xl transition-shadow border-2 border-gray-200">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold">Self-Hosted System</CardTitle>
              <CardDescription className="text-lg">
                One-time license with professional installation
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-blue-600">Custom Quote</span>
                <p className="text-gray-500 mt-2">License + Installation Fee</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Complete automation system</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Custom workflow design</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Professional installation & setup</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>3 months support included</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Self-hosted on your infrastructure</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Full source code access</span>
                </li>
              </ul>
              <Button onClick={openCalendly} className="w-full bg-blue-600 hover:bg-blue-700">
                Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Tier 2: BrightPath Partnership */}
          <Card className="relative hover:shadow-xl transition-shadow border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-blue-50">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                MOST POPULAR
              </span>
            </div>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold">BrightPath Partnership</CardTitle>
              <CardDescription className="text-lg">
                Ongoing partnership with dedicated support
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  $2K-$5K
                </span>
                <p className="text-gray-500 mt-2">Monthly Retainer</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Everything in Self-Hosted</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Ongoing automation development</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Monthly strategy calls</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Continuous optimization</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>New feature development</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Dedicated success manager</span>
                </li>
              </ul>
              <Button onClick={openCalendly} className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Tier 3: Custom Plan */}
          <Card className="relative hover:shadow-xl transition-shadow border-2 border-gray-200">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold">Enterprise Custom</CardTitle>
              <CardDescription className="text-lg">
                Tailored solutions for large organizations
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">Custom</span>
                <p className="text-gray-500 mt-2">Volume Pricing Available</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Everything in Partnership</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Multi-department automation</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Enterprise-grade security</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Dedicated development team</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>SLA guarantees</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>White-label options</span>
                </li>
              </ul>
              <Button onClick={openCalendly} className="w-full bg-gray-900 hover:bg-gray-800">
                Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* What's Included Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            What's Included in Every Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom Design</h3>
              <p className="text-gray-600 text-sm">Workflows designed specifically for your business processes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Automation Setup</h3>
              <p className="text-gray-600 text-sm">Complete implementation and configuration of your automation systems</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Team Onboarding</h3>
              <p className="text-gray-600 text-sm">Training and onboarding for your team to maximize adoption</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">Dedicated support to ensure your systems run smoothly</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a discovery call to discuss your automation needs and find the perfect plan for your business.
          </p>
          <Button 
            onClick={openCalendly}
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
          >
            Book Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
