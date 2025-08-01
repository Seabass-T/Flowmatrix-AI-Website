import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Target, TrendingUp, Zap, Users, Bot, ArrowRight, MapPin, Building, Home, Wrench, Calendar, DollarSign, BarChart3, Shield, Star } from "lucide-react";
import Navigation from "@/components/Navigation";

// Extend the Window interface to include Calendly
declare global {
  interface Window {
    Calendly: any;
  }
}

const Index = () => {
  useEffect(() => {
    // Add SEO metadata
    document.title = "Toronto AI Automation for Trade, Real Estate & Home Improvement | FlowMatrix AI";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'FlowMatrix AI helps trade, residential, commercial and real estate businesses in Toronto & GTA save 120+ hours/month with AI automation. Book your free consultation today.');
    }

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

    // JSON-LD Schema for LocalBusiness
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "FlowMatrix AI",
      "description": "AI automation services for trade, real estate, and home improvement businesses in Toronto and GTA",
      "url": "https://flowmatrixai.com",
      "areaServed": [
        {
          "@type": "City",
          "name": "Toronto",
          "addressRegion": "ON",
          "addressCountry": "CA"
        },
        {
          "@type": "Place",
          "name": "Greater Toronto Area (GTA)"
        }
      ],
      "serviceType": ["AI Automation", "Trade Automation", "Real Estate Automation", "Home Improvement Automation", "Residential Services Automation", "Commercial Services Automation"],
      "priceRange": "Consultation-based"
    });
    document.head.appendChild(schemaScript);

    // Cleanup function
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.head.contains(schemaScript)) document.head.removeChild(schemaScript);
    };
  }, []);

  const navigate = useNavigate();

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/flowmatrixai/30min'
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-lg font-semibold text-blue-600">Serving Toronto & GTA</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
              Toronto AI Automation for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Trade, Real Estate & Home Improvement
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              We help trade, residential, commercial and real estate businesses in Toronto & GTA save 120+ hours/month with AI automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button onClick={openCalendly} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
                Book Your Free Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="py-8 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-300">120+</div>
              <div className="text-gray-200">Hours Saved Monthly</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-300">ROI</div>
              <div className="text-gray-200">Backed Deliverables</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-300">Toronto</div>
              <div className="text-gray-200">& GTA Service Area</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-300">Trade</div>
              <div className="text-gray-200">Real Estate | Home Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 4-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Audit Process Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process transforms your business operations across trade, real estate, and home improvement verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">1. Identify</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Analyze your current workflows and identify automation opportunities</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Property scheduling inefficiencies</li>
                  <li>• Trade service dispatching</li>
                  <li>• Renovation project coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">2. Quantify</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Calculate time savings, cost reductions, and ROI potential</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Lead qualification automation</li>
                  <li>• Invoice & payment processing</li>
                  <li>• Customer communication flows</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">3. Automate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Implement custom AI solutions for your specific vertical</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• MLS integration for realtors</li>
                  <li>• Trade job scheduling systems</li>
                  <li>• Home improvement CRM flows</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">4. Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Optimize and expand automation across your entire operation</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Multi-property management</li>
                  <li>• Fleet & crew optimization</li>
                  <li>• Cross-project coordination</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What You'll{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Receive
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              After your consultation, receive a comprehensive audit with vertical-specific insights and actionable recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">ROI Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Detailed breakdown of potential savings and revenue increases specific to your trade or real estate operations</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Benchmarking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Industry comparisons showing how automation can give you competitive advantages in Toronto's market</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Step-by-step implementation plan prioritized by impact and tailored to your business type</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Workflow Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Custom automation workflows designed for your specific vertical - trade dispatching, property management, or home improvement coordination</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-semibold text-blue-600">Pay-What-You-Think-It's-Worth Model:</span>
              </p>
              <p className="text-gray-600">
                After receiving your comprehensive audit, you decide what it's worth to you. No upfront fees, no pressure - just results-driven value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pay-What-You-Think-It's-Worth Audit?
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How can FlowMatrix help my real estate business in Toronto?</h3>
                <p className="text-gray-600 mb-4">
                  We specialize in automating property management workflows, lead qualification, client communication, and MLS integration. Our Toronto-based team understands the local market dynamics and compliance requirements.
                </p>
                <p className="text-gray-600">
                  <strong>Process:</strong> Free consultation → Custom audit → You pay what you think it's worth → Implementation (if you choose to proceed)
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What automation solutions work for trade businesses in the GTA?</h3>
                <p className="text-gray-600 mb-4">
                  We automate job scheduling, crew dispatching, invoice processing, customer follow-ups, and equipment tracking. Perfect for plumbing, electrical, HVAC, and general contracting businesses.
                </p>
                <p className="text-gray-600">
                  <strong>Our guarantee:</strong> We're so confident in our audit value that you only pay after seeing the results. Most clients find 10x+ ROI potential in their first audit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How does automation help home improvement companies scale?</h3>
                <p className="text-gray-600 mb-4">
                  We streamline project coordination, supplier management, customer communication, and quality control processes. Ideal for renovation companies, landscapers, and home service providers.
                </p>
                <p className="text-gray-600">
                  <strong>Fair pricing model:</strong> We believe in earning your business through value delivery, not sales pressure. See the value first, then decide what it's worth to you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Signals & Social Proof */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Toronto Businesses
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-800 to-gray-900">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white mb-6 italic">
                  "FlowMatrix automated our property showing scheduling and follow-up process. We're now booking 40% more viewings with half the manual work. Game changer for our Toronto real estate business."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                    MK
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white">Mike K.</div>
                    <div className="text-sm text-gray-200">Real Estate Agent, Toronto</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-800 to-gray-900">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white mb-6 italic">
                  "Our plumbing business was drowning in scheduling calls. Their AI system now handles 80% of appointment bookings automatically. We've saved 15 hours per week and increased customer satisfaction."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold">
                    JS
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white">John S.</div>
                    <div className="text-sm text-gray-200">GTA Plumbing Services</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-800 to-gray-900">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white mb-6 italic">
                  "The renovation project coordination system they built tracks all our contractors, suppliers, and timelines automatically. We're completing projects 25% faster with better client communication."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                    LC
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white">Lisa C.</div>
                    <div className="text-sm text-gray-200">Home Renovation Co.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Industry Affiliations */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Industry Partnerships & Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
              <div className="flex flex-col items-center">
                <Building className="h-12 w-12 text-gray-600 mb-2" />
                <span className="text-sm text-gray-600">Toronto Real Estate Board</span>
              </div>
              <div className="flex flex-col items-center">
                <Wrench className="h-12 w-12 text-gray-600 mb-2" />
                <span className="text-sm text-gray-600">Ontario Trade Associations</span>
              </div>
              <div className="flex flex-col items-center">
                <Home className="h-12 w-12 text-gray-600 mb-2" />
                <span className="text-sm text-gray-600">Home Improvement Council</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="h-12 w-12 text-gray-600 mb-2" />
                <span className="text-sm text-gray-600">AI Ethics Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Save 120+ Hours Monthly?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join Toronto & GTA businesses already automating their success. Get your free consultation and comprehensive audit - pay only what you think it's worth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openCalendly} size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              Book Your Free Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-blue-100 mt-6 text-sm">
            ✓ No upfront fees ✓ Custom vertical analysis ✓ ROI-backed recommendations ✓ Toronto & GTA focused
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;