import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Wrench, Home, Building2, Calendar, Phone, FileText, DollarSign, Users, TrendingUp, Clipboard, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

declare global {
  interface Window {
    Calendly: any;
  }
}

const UseCases = () => {
  const [activeTab, setActiveTab] = useState("trades");

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

  const handleKeyDown = (event: React.KeyboardEvent, tabId: string) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      const tabs = ['trades', 'real-estate', 'home-improvement'];
      const currentIndex = tabs.indexOf(tabId);
      let newIndex;
      
      if (event.key === 'ArrowLeft') {
        newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
      } else {
        newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
      }
      
      setActiveTab(tabs[newIndex]);
      // Focus the new tab
      const newTabButton = document.getElementById(`tab-${tabs[newIndex]}`);
      newTabButton?.focus();
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can automation help trades in Toronto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trade automation helps Toronto businesses by streamlining job scheduling, automating missed-call follow-ups, simplifying invoicing, and managing inventory - reducing admin time and improving customer response."
        }
      },
      {
        "@type": "Question", 
        "name": "What automation works for real estate agents in the GTA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Real estate automation includes lead nurturing sequences, property maintenance management, automated market reports, and document preparation - helping GTA agents focus on closing deals instead of paperwork."
        }
      },
      {
        "@type": "Question",
        "name": "How does automation benefit home improvement contractors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Home improvement automation covers project scheduling, AI-powered quoting, customer follow-up campaigns, and material procurement tracking - allowing contractors to focus on exceptional service delivery."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Automation Use Cases for Trade, Real Estate & Home Improvement | Toronto & GTA</title>
        <meta name="description" content="Discover AI automation solutions for trades, real estate, and home improvement businesses in Toronto & GTA. Free consultation and pay-what-you-think audit available." />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              AI Automation Use Cases for <span className="bg-gradient-to-r from-interactive-primary to-interactive-accent bg-clip-text text-transparent">Trade, Real Estate & Home Improvement</span> in Toronto & GTA
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Discover how FlowMatrix AI transforms business operations with custom automation solutions designed for your specific industry challenges.
            </p>
            
            {/* Persistent CTA Above Tabs */}
            <Button 
              onClick={openCalendly}
              size="lg" 
              className="bg-gradient-to-r from-interactive-primary to-interactive-accent hover:from-interactive-primary-hover hover:to-interactive-accent-hover text-lg px-8 py-6 animate-fade-in shadow-xl"
            >
              Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
            <div role="tablist" className="flex border-b bg-gray-50">
              <button
                id="tab-trades"
                role="tab"
                aria-selected={activeTab === "trades"}
                aria-controls="panel-trades"
                className={`flex-1 px-6 py-4 font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === "trades"
                    ? "bg-interactive-primary text-white border-b-2 border-interactive-primary"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("trades")}
                onKeyDown={(e) => handleKeyDown(e, "trades")}
              >
                <Wrench className="h-5 w-5" />
                Trades
              </button>
              <button
                id="tab-real-estate"
                role="tab"
                aria-selected={activeTab === "real-estate"}
                aria-controls="panel-real-estate"
                className={`flex-1 px-6 py-4 font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === "real-estate"
                    ? "bg-interactive-primary text-white border-b-2 border-interactive-primary"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("real-estate")}
                onKeyDown={(e) => handleKeyDown(e, "real-estate")}
              >
                <Building2 className="h-5 w-5" />
                Real Estate
              </button>
              <button
                id="tab-home-improvement"
                role="tab"
                aria-selected={activeTab === "home-improvement"}
                aria-controls="panel-home-improvement"
                className={`flex-1 px-6 py-4 font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === "home-improvement"
                    ? "bg-interactive-primary text-white border-b-2 border-interactive-primary"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("home-improvement")}
                onKeyDown={(e) => handleKeyDown(e, "home-improvement")}
              >
                <Home className="h-5 w-5" />
                Home Improvement
              </button>
            </div>

            {/* Tab Content - All panels exist in DOM for SEO */}
            <div className="p-8">
              {/* TRADES PANEL */}
              <div
                id="panel-trades"
                role="tabpanel"
                aria-labelledby="tab-trades"
                className={activeTab === "trades" ? "block" : "hidden"}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Trade Business Automation in Toronto & GTA</h2>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  HVAC, plumbing, electrical and construction businesses lose valuable admin time due to manual dispatch coordination, repetitive invoicing processes, and fragmented communications. FlowMatrix AI eliminates these bottlenecks with intelligent automation designed specifically for trade operations across Toronto and the Greater Toronto Area.
                </p>

                {/* Micro Use Cases - Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-white">Smart Job Dispatch</CardTitle>
                          <p className="text-sm text-gray-200">Auto-assign by location & skills</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-white">Missed Call Recovery</CardTitle>
                          <p className="text-sm text-gray-200">Instant SMS & email follow-up</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-white">Automated Invoicing</CardTitle>
                          <p className="text-sm text-gray-200">Generate & send post-service</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                          <DollarSign className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-white">Inventory Tracking</CardTitle>
                          <p className="text-sm text-gray-200">Parts & materials management</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>


                {/* Mini FAQ */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How can automation help trades in Toronto?</h3>
                  <p className="text-gray-700">Trade automation helps Toronto businesses by streamlining job scheduling, automating missed-call follow-ups, simplifying invoicing, and managing inventory - reducing admin time and improving customer response.</p>
                </div>

                <p className="text-lg text-gray-700 font-medium">
                  <strong>Starting point:</strong> Free Consultation → pay-what-you-think-it's-worth audit → 90-day automation roadmap.
                </p>
              </div>

              {/* REAL ESTATE PANEL */}
              <div
                id="panel-real-estate"
                role="tabpanel"
                aria-labelledby="tab-real-estate"
                className={activeTab === "real-estate" ? "block" : "hidden"}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Estate Automation in Toronto & GTA</h2>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Real estate agents and property managers face constant challenges with lead nurturing, property listings management, and tenant operations coordination. Instead of chasing paperwork and manual follow-ups, FlowMatrix AI helps Toronto and GTA real estate professionals focus on what matters most - closing deals and building relationships.
                </p>

                {/* Micro Use Cases - Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-white">Lead Nurturing Sequences</CardTitle>
                          <p className="text-sm text-gray-200">Automated email & SMS campaigns</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                          <Wrench className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-white">Maintenance Requests</CardTitle>
                          <p className="text-sm text-gray-200">Tenant work order automation</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                          <TrendingUp className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-white">Market Reports</CardTitle>
                          <p className="text-sm text-gray-200">AI-generated client updates</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-white">Document Prep</CardTitle>
                          <p className="text-sm text-gray-200">Contracts & compliance forms</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>


                {/* Mini FAQ */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What automation works for real estate agents in the GTA?</h3>
                  <p className="text-gray-700">Real estate automation includes lead nurturing sequences, property maintenance management, automated market reports, and document preparation - helping GTA agents focus on closing deals instead of paperwork.</p>
                </div>

                <p className="text-lg text-gray-700 font-medium">
                  <strong>Starting point:</strong> Free Consultation → pay-what-you-think-it's-worth audit → 90-day automation roadmap.
                </p>
              </div>

              {/* HOME IMPROVEMENT PANEL */}
              <div
                id="panel-home-improvement"
                role="tabpanel"
                aria-labelledby="tab-home-improvement"
                className={activeTab === "home-improvement" ? "block" : "hidden"}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Home Improvement Automation in Toronto & GTA</h2>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Home improvement contractors and renovation specialists spend countless hours on project scheduling complexities, detailed client follow-ups, and accurate quote preparations. FlowMatrix AI streamlines these time-consuming processes, allowing Toronto and GTA contractors to focus on delivering exceptional craftsmanship and customer service.
                </p>

                {/* Micro Use Cases - Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-white">Project Scheduling</CardTitle>
                          <p className="text-sm text-gray-200">AI-driven timeline management</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <DollarSign className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-white">AI-Powered Quoting</CardTitle>
                          <p className="text-sm text-gray-200">Instant accurate proposals</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-rose-600 rounded-xl flex items-center justify-center">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-white">Follow-Up Campaigns</CardTitle>
                          <p className="text-sm text-gray-200">Payment & approval reminders</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-violet-600 rounded-xl flex items-center justify-center">
                          <Clipboard className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-white">Material Procurement</CardTitle>
                          <p className="text-sm text-gray-200">Supply chain automation</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>


                {/* Mini FAQ */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How does automation benefit home improvement contractors?</h3>
                  <p className="text-gray-700">Home improvement automation covers project scheduling, AI-powered quoting, customer follow-up campaigns, and material procurement tracking - allowing contractors to focus on exceptional service delivery.</p>
                </div>

                <p className="text-lg text-gray-700 font-medium">
                  <strong>Starting point:</strong> Free Consultation → pay-what-you-think-it's-worth audit → 90-day automation roadmap.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center bg-gradient-to-r from-interactive-primary to-interactive-accent rounded-2xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate? Book Your Free Consultation
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join hundreds of Toronto and GTA businesses transforming their operations with custom AI automation solutions.
            </p>
            <Button 
              onClick={openCalendly}
              size="lg" 
              className="bg-white text-interactive-primary hover:bg-gray-100 text-lg px-8 py-6 shadow-lg"
            >
              Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseCases;
