import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Check, ArrowRight, Phone, FileText, Calendar, DollarSign, Users, TrendingUp, Shield, Clock, Target, Sparkles, Zap, BarChart3, Repeat } from "lucide-react";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    Tally?: any;
  }
}

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<'getting-started' | 'monthly-retainer'>('getting-started');

  // Load Tally widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const openTallyForm = () => {
    if (window.Tally) {
      window.Tally.openPopup('wMBOXE', {
        layout: 'modal',
        width: 600,
        autoClose: 3000,
      });
    } else {
      // Fallback to opening in new tab if Tally isn't loaded
      window.open('https://tally.so/r/wMBOXE', '_blank');
    }
  };

  // Pricing Service JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Automation for North American Construction & Trade Businesses",
    "description": "$300 comprehensive audit with 100% satisfaction guarantee. Custom automation implementation for construction and trade businesses across North America.",
    "provider": {
      "@type": "Organization",
      "name": "FlowMatrix AI",
      "url": "https://www.flowmatrixai.com"
    },
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" }
    ],
    "offers": {
      "@type": "Offer",
      "price": "300",
      "priceCurrency": "USD",
      "description": "2-Week Deep Audit with 100% Satisfaction Guarantee"
    }
  };

  return (
    <>
      <Helmet>
        <title>Transparent Pricing for Construction AI Automation | FlowMatrix AI</title>
        <meta name="description" content="Clear, transparent pricing for North American construction and trade businesses. $300 audit with 100% satisfaction guarantee. Two decision points, zero risk." />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="bg-white">
        <Navigation />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Transparent Pricing for{" "}
              <span className="text-primary">
                North American Construction Companies
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Clear pricing. Two decision points. Zero risk.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              $300 audit with 100% satisfaction guarantee. Walk away at two points with zero penalty.
            </p>
            <Button
              onClick={openTallyForm}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 animate-fade-in"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Toggle/Tab System */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border-2 border-gray-200 p-1 bg-white shadow-sm">
              <button
                onClick={() => setActiveTab('getting-started')}
                className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === 'getting-started'
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white text-gray-900 hover:bg-gray-50'
                }`}
              >
                Getting Started
              </button>
              <button
                onClick={() => setActiveTab('monthly-retainer')}
                className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === 'monthly-retainer'
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white text-gray-900 hover:bg-gray-50'
                }`}
              >
                Monthly Retainer
              </button>
            </div>
          </div>

          {/* Tab Content - Getting Started */}
          {activeTab === 'getting-started' && (
            <div className="animate-fade-in">
              {/* 5-Step Process Cards */}
              <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4 animate-slide-up">
              Our 5-Step Process
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              A simple, transparent journey with two clear decision points where you can walk away with zero risk.
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <Card className="hover:shadow-xl transition-shadow border-2 border-gray-200 animate-fade-in">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wide">Step 1</span>
                        <span className="text-sm bg-green-100 text-primary px-2 py-1 rounded">FREE • 5 Minutes</span>
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900">Client Intake Form</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Tell us about your business and automation needs through our simple intake form. Takes just 2-3 minutes to complete.
                  </p>
                  <Button onClick={openTallyForm} className="bg-primary hover:bg-primary/90 text-white">
                    Fill Out Intake Form <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="hover:shadow-xl transition-shadow border-2 border-gray-200 animate-fade-in">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wide">Step 2</span>
                        <span className="text-sm bg-green-100 text-primary px-2 py-1 rounded">FREE • No Commitment</span>
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900">5-Day Free Diagnostic</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We analyze your workflows and identify automation opportunities. Completely free with no obligation to continue.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Initial workflow assessment</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Quick win opportunities identified</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Preliminary ROI estimates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="hover:shadow-xl transition-shadow border-2 border-gray-200 animate-fade-in">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wide">Step 3</span>
                        <span className="text-sm bg-green-100 text-primary px-2 py-1 rounded">FREE • 30 Minutes</span>
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900">30-Minute Discovery Call</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We present diagnostic results and discuss next steps. You decide if you want to continue with the comprehensive audit.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Review diagnostic findings together</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Discuss potential automation systems</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Answer all your questions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Decision Point #1 */}
              <Card className="bg-green-50 border-2 border-primary animate-fade-in">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="inline-block bg-primary text-white px-4 py-2 rounded-lg font-bold mb-4">
                      DECISION POINT #1
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Continue with 2-Week Audit?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                      <div className="bg-white rounded-lg p-6 border-2 border-primary/20">
                        <div className="text-primary font-bold mb-2">✓ YES</div>
                        <p className="text-gray-700">Proceed to $300 comprehensive audit</p>
                      </div>
                      <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                        <div className="text-gray-600 font-bold mb-2">○ NO</div>
                        <p className="text-gray-700">Part ways with zero obligation</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-6 italic">
                      "We're confident you'll see value in the diagnostic. Choose what's right for your business."
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="hover:shadow-xl transition-shadow border-2 border-primary/30 animate-fade-in">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wide">Step 4</span>
                        <span className="text-sm bg-primary text-white px-2 py-1 rounded font-bold">$300 • 100% Satisfaction Guarantee</span>
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900">2-Week Deep Audit</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 border-l-4 border-primary p-4 mb-4">
                    <div className="flex items-start">
                      <Shield className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-green-900 mb-1">100% Satisfaction Guarantee</p>
                        <p className="text-sm text-green-800">Not satisfied? Keep all deliverables AND get a full refund. No questions asked.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Comprehensive workflow analysis, automation blueprint, ROI projections, and implementation roadmap.
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Complete workflow analysis</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Detailed automation blueprint</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>ROI projections with real numbers</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Implementation roadmap</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>1-on-1 strategy session</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Decision Point #2 */}
              <Card className="bg-green-50 border-2 border-primary animate-fade-in">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="inline-block bg-primary text-white px-4 py-2 rounded-lg font-bold mb-4">
                      DECISION POINT #2
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Start Monthly Retainer Partnership?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                      <div className="bg-white rounded-lg p-6 border-2 border-primary/20">
                        <div className="text-primary font-bold mb-2">✓ YES</div>
                        <p className="text-gray-700">Implement systems ($2,000-$5,000/month custom pricing)</p>
                      </div>
                      <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                        <div className="text-gray-600 font-bold mb-2">○ NO</div>
                        <p className="text-gray-700">Keep audit findings and part ways</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-6 italic">
                      "Only partner with us if you're 100% confident in the value we'll deliver."
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Step 5 */}
              <Card className="hover:shadow-xl transition-shadow border-2 border-primary/30 animate-fade-in">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wide">Step 5</span>
                        <span className="text-sm bg-primary text-white px-2 py-1 rounded font-bold">$1,500-5,000+/month</span>
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900">Monthly Retainer Partnership</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We build, deploy, and maintain your automation systems. Continuous optimization and expansion based on your evolving needs.
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Custom automation development</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>System deployment and integration</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Ongoing maintenance and support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Continuous optimization</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Monthly strategy sessions</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>System expansion as you grow</span>
                    </li>
                  </ul>
                  <div className="bg-green-50 border-l-4 border-primary p-4">
                    <p className="text-green-900 font-semibold">
                      "Most clients see positive ROI within 60 days"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Two Decision Points Section */}
          <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Why Two Decision Points?
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-gray-700">
                We're confident in the value we deliver. By offering two clear exit points with zero penalty, we:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Remove Pressure</h3>
                      <p className="text-gray-600 text-sm">No high-pressure sales tactics. You decide what's right for your business at each stage.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Build Trust</h3>
                      <p className="text-gray-600 text-sm">Transparency builds confidence. We show our work before asking for commitment.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Demonstrate Confidence</h3>
                      <p className="text-gray-600 text-sm">We're so confident in our diagnostic quality that we let you walk away after seeing the results.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Ensure Fit</h3>
                      <p className="text-gray-600 text-sm">Only qualified, enthusiastic clients continue. This ensures better results for everyone.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-xl font-semibold text-primary">
                  Low friction isn't a bug. It's a feature.
                </p>
              </div>
            </div>
          </div>
            </div>
          )}

          {/* Tab Content - Monthly Retainer */}
          {activeTab === 'monthly-retainer' && (
            <div className="animate-fade-in">
              {/* Hero Section */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Monthly Retainer Partnership
                </h2>
                <p className="text-2xl text-primary mb-6">
                  Your Dedicated AI Team & Research Task Force
                </p>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                  We're not just your automation builders - we're your AI research team staying on top of every new development and leveraging it for your competitive advantage.
                </p>
                <div className="bg-green-50 border-l-4 border-primary p-6 max-w-2xl mx-auto mb-8">
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-green-900 mb-1 text-lg">60-Day ROI Guarantee</p>
                      <p className="text-green-800">We guarantee ROI within the first 60 days or your money back.</p>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={openTallyForm}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Pricing Packages */}
              <div className="mb-20">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                  Choose Your Package
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {/* Starter Package */}
                  <Card className="hover:shadow-xl transition-shadow border-2 border-gray-200">
                    <CardHeader className="pb-4">
                      <div className="text-center">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wide">Starter</span>
                        <CardTitle className="text-3xl font-bold text-gray-900 mt-2">$1,500 - $3,000<span className="text-lg text-gray-600">/month</span></CardTitle>
                        <p className="text-sm text-gray-600 mt-2">Best for: Small teams (5-15 people)</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Client portal access</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Direct Slack/email support</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">24/7 system monitoring & maintenance</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Access to our AI research insights</span>
                        </li>
                      </ul>
                      <Button onClick={openTallyForm} className="w-full bg-primary hover:bg-primary/90 text-white">
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Professional Package */}
                  <Card className="hover:shadow-xl transition-shadow border-2 border-gray-200">
                    <CardHeader className="pb-4">
                      <div className="text-center">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wide">Professional</span>
                        <CardTitle className="text-3xl font-bold text-gray-900 mt-2">$3,000 - $5,000<span className="text-lg text-gray-600">/month</span></CardTitle>
                        <p className="text-sm text-gray-600 mt-2">Best for: Growing teams (15-30 people)</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4 font-medium">Includes all Starter features, plus:</p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Priority support queue</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Monthly ROI reports</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Advanced integrations (ERP, APIs, databases)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Bi-weekly strategic check-ins</span>
                        </li>
                      </ul>
                      <Button onClick={openTallyForm} className="w-full bg-primary hover:bg-primary/90 text-white">
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Enterprise Package */}
                  <Card className="hover:shadow-xl transition-shadow border-2 border-gray-200">
                    <CardHeader className="pb-4">
                      <div className="text-center">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wide">Enterprise</span>
                        <CardTitle className="text-3xl font-bold text-gray-900 mt-2">Custom Pricing</CardTitle>
                        <p className="text-sm text-gray-600 mt-2">Best for: Large teams (30-50+ people)</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4 font-medium">Includes all Professional features, plus:</p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Dedicated support line</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Weekly strategic sessions</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Custom development capabilities</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">White-glove implementation</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Everything tailored to your business</span>
                        </li>
                      </ul>
                      <Button onClick={openTallyForm} className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                        Contact Us
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-center text-gray-600 mt-8 italic">
                  All packages include our 60-day ROI guarantee
                </p>
              </div>

              {/* What's Included Section */}
              <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                  What's Included in Every Retainer
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                  Your own AI team + research task force without the $10K+/month salary.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Custom System Development</h3>
                    </div>
                    <p className="text-gray-600">
                      We build new automation systems every month based on your needs.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">24/7 Monitoring & Maintenance</h3>
                    </div>
                    <p className="text-gray-600">
                      Your systems run around the clock. We keep them optimized and error-free.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Target className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">AI Research Task Force</h3>
                    </div>
                    <p className="text-gray-600">
                      We stay on top of every AI development and implement innovations that give you a competitive edge.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Direct Support Access</h3>
                    </div>
                    <p className="text-gray-600">
                      Slack/email access to our team. Fast responses when you need help.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <BarChart3 className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Monthly ROI Reports</h3>
                    </div>
                    <p className="text-gray-600">
                      Detailed reports showing hours saved, cost savings, and system performance.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Continuous Innovation</h3>
                    </div>
                    <p className="text-gray-600">
                      We follow a proven 5-step cycle to maximize your automation ROI.
                    </p>
                  </div>
                </div>
              </div>

              {/* Client Portal Demo Section */}
              <div className="mb-20 bg-green-50 border-2 border-primary rounded-2xl p-8 md:p-12 text-center">
                <div className="flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    See Your ROI in Real-Time
                  </h2>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                  Every retainer client gets access to our custom client portal to track system performance, time savings, and ROI metrics 24/7.
                </p>
                <Button
                  onClick={() => window.open('https://client.flowmatrixai.com/demo', '_blank')}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
                >
                  View Portal Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* 5-Step Cycle Section */}
              <div className="mb-20">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                  Our Continuous Improvement Cycle
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                  This is how we maximize your ROI month after month.
                </p>

                {/* Desktop Circular Layout */}
                <div className="hidden md:block max-w-5xl mx-auto relative">
                  <div className="relative w-full" style={{ paddingBottom: '80%' }}>
                    {/* Center Circle - Continuous Cycle Indicator */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="bg-green-50 border-2 border-primary rounded-full w-32 h-32 flex flex-col items-center justify-center">
                        <Repeat className="h-8 w-8 text-primary mb-1" />
                        <span className="text-xs font-bold text-primary text-center px-2">Continuous Cycle</span>
                      </div>
                    </div>

                    {/* Step 1 - Top Center (12 o'clock) */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <span className="text-3xl font-bold text-white">1</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Identify</h3>
                        <p className="text-sm text-gray-600">Spot opportunities for automation and optimization</p>
                      </div>
                    </div>

                    {/* Arrow 1 to 2 */}
                    <div className="absolute top-[15%] right-[28%]">
                      <ArrowRight className="h-6 w-6 text-gray-400 transform rotate-[60deg]" />
                    </div>

                    {/* Step 2 - Top Right (2 o'clock) */}
                    <div className="absolute top-[20%] right-0 w-48">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <span className="text-3xl font-bold text-white">2</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Build</h3>
                        <p className="text-sm text-gray-600">Develop custom systems tailored to your workflows</p>
                      </div>
                    </div>

                    {/* Arrow 2 to 3 */}
                    <div className="absolute top-[52%] right-[18%]">
                      <ArrowRight className="h-6 w-6 text-gray-400 transform rotate-[120deg]" />
                    </div>

                    {/* Step 3 - Bottom Right (4 o'clock) */}
                    <div className="absolute bottom-[8%] right-[10%] w-48">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <span className="text-3xl font-bold text-white">3</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Implement</h3>
                        <p className="text-sm text-gray-600">Deploy systems and train your team</p>
                      </div>
                    </div>

                    {/* Arrow 3 to 4 */}
                    <div className="absolute bottom-[18%] left-[35%]">
                      <ArrowRight className="h-6 w-6 text-gray-400 transform rotate-[180deg]" />
                    </div>

                    {/* Step 4 - Bottom Left (8 o'clock) */}
                    <div className="absolute bottom-[8%] left-[10%] w-48">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <span className="text-3xl font-bold text-white">4</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Optimize</h3>
                        <p className="text-sm text-gray-600">Refine based on real usage data</p>
                      </div>
                    </div>

                    {/* Arrow 4 to 5 */}
                    <div className="absolute top-[52%] left-[18%]">
                      <ArrowRight className="h-6 w-6 text-gray-400 transform rotate-[-120deg]" />
                    </div>

                    {/* Step 5 - Top Left (10 o'clock) */}
                    <div className="absolute top-[20%] left-0 w-48">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <span className="text-3xl font-bold text-white">5</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Innovate</h3>
                        <p className="text-sm text-gray-600">Leverage new AI developments for your advantage</p>
                      </div>
                    </div>

                    {/* Arrow 5 back to 1 */}
                    <div className="absolute top-[15%] left-[28%]">
                      <ArrowRight className="h-6 w-6 text-gray-400 transform rotate-[-60deg]" />
                    </div>
                  </div>

                  <p className="text-center text-gray-600 mt-12 italic text-lg">
                    This cycle repeats continuously. Your automation suite gets better every month, not stagnant. Our partnership grows with your business success—we don't win unless you do.
                  </p>
                </div>

                {/* Mobile Vertical Flow Layout */}
                <div className="md:hidden max-w-md mx-auto space-y-6">
                  {/* Step 1 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Identify</h3>
                    <p className="text-sm text-gray-600">Spot opportunities for automation and optimization</p>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-gray-400 transform rotate-90" />
                  </div>

                  {/* Step 2 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Build</h3>
                    <p className="text-sm text-gray-600">Develop custom systems tailored to your workflows</p>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-gray-400 transform rotate-90" />
                  </div>

                  {/* Step 3 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Implement</h3>
                    <p className="text-sm text-gray-600">Deploy systems and train your team</p>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-gray-400 transform rotate-90" />
                  </div>

                  {/* Step 4 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <span className="text-2xl font-bold text-white">4</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Optimize</h3>
                    <p className="text-sm text-gray-600">Refine based on real usage data</p>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-gray-400 transform rotate-90" />
                  </div>

                  {/* Step 5 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <span className="text-2xl font-bold text-white">5</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Innovate</h3>
                    <p className="text-sm text-gray-600">Leverage new AI developments for your advantage</p>
                  </div>

                  {/* Return to Step 1 Indicator */}
                  <div className="bg-green-50 border-2 border-primary rounded-lg p-4 mt-6">
                    <div className="flex items-center justify-center gap-2">
                      <Repeat className="h-6 w-6 text-primary" />
                      <span className="text-sm font-bold text-primary">Cycle Returns to Step 1</span>
                    </div>
                  </div>

                  <p className="text-center text-gray-600 mt-8 italic">
                    This cycle repeats continuously. Your automation suite gets better every month, not stagnant. Our partnership grows with your business success—we don't win unless you do.
                  </p>
                </div>
              </div>

              {/* Proof Section */}
              <div className="mb-20 bg-green-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                  Real Results from a Real Client
                </h2>
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-xl font-semibold text-primary mb-2">UBL Group - Construction & Trade Business</p>
                  <div className="space-y-2 mb-6">
                    <p className="text-gray-700"><strong>Week 1:</strong> Two systems deployed</p>
                    <p className="text-gray-700"><strong>Month 3:</strong> $5,000+ saved, 150+ hours reclaimed</p>
                    <p className="text-gray-700"><strong>Today:</strong> Custom ERP integration in development</p>
                  </div>
                  <blockquote className="text-lg text-gray-600 italic mb-8">
                    "FlowMatrix AI delivered value from day one. The systems they built in the first week are still running flawlessly months later."
                  </blockquote>
                  <Button onClick={() => window.location.href = '/solutions'} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    View Our Systems
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 animate-fade-in hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Can I cancel anytime?</h3>
                <p className="text-gray-600">
                  Yes, with 30 days notice. No long-term contracts. You keep all systems we built.
                </p>
              </Card>

              <Card className="p-6 animate-fade-in hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">What's your 60-day ROI guarantee?</h3>
                <p className="text-gray-600">
                  If you don't see positive ROI within 60 days, we refund your money. Simple as that.
                </p>
              </Card>

              <Card className="p-6 animate-fade-in hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Do I own the systems?</h3>
                <p className="text-gray-600">
                  Yes, 100%. Everything we build is yours.
                </p>
              </Card>

              <Card className="p-6 animate-fade-in hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">How do you determine which package I need?</h3>
                <p className="text-gray-600">
                  Based on your audit findings - team size, complexity, and volume of automation needed. We'll recommend the right fit.
                </p>
              </Card>

              <Card className="p-6 animate-fade-in hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">What's included in the client portal?</h3>
                <p className="text-gray-600">
                  Real-time dashboards showing system performance, time saved, cost savings, and ROI tracking. Available 24/7.
                </p>
              </Card>

              <Card className="p-6 animate-fade-in hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Can I upgrade or downgrade packages?</h3>
                <p className="text-gray-600">
                  Yes, with 30 days notice. As your needs change, your package can too.
                </p>
              </Card>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-primary rounded-2xl p-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join North American construction and trade businesses already saving 120+ hours per month. Two decision points. Zero risk. 100% satisfaction guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openTallyForm}
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-white/90 mt-6 text-sm">
              ✓ Free 5-Day Diagnostic ✓ $300 Audit with 100% Guarantee ✓ Custom Retainer Pricing
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
