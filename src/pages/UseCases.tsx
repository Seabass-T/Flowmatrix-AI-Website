import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Wrench, Home, Building2 } from "lucide-react";
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
        "name": "How can AI help my HVAC business in Toronto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI automation can optimize job scheduling, automate missed-call follow-ups, and streamline invoicing for trade businesses in Toronto and the GTA. FlowMatrix AI helps HVAC companies reduce administrative overhead and improve customer response times."
        }
      },
      {
        "@type": "Question", 
        "name": "What automation solutions work for real estate agents in the GTA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Real estate automation includes lead nurturing sequences, property maintenance request management, automated market reports, and document preparation. FlowMatrix AI helps GTA real estate professionals focus on closing deals instead of paperwork."
        }
      },
      {
        "@type": "Question",
        "name": "How does AI automation benefit home improvement contractors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Home improvement automation includes project scheduling, AI-powered quoting, customer follow-up campaigns, and material procurement tracking. FlowMatrix AI helps contractors in Toronto and the GTA streamline operations and improve project delivery."
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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              AI Automation Solutions for{" "}
              <span className="bg-gradient-to-r from-interactive-primary to-interactive-accent bg-clip-text text-transparent">
                Trade | Real Estate | Home Improvement
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Residential & Commercial Services – Toronto & GTA
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how FlowMatrix AI transforms your business operations with custom automation solutions. Start with a free consultation and see real results.
            </p>
          </div>

          {/* CTA Above Fold */}
          <div className="text-center mb-16">
            <Button 
              onClick={openCalendly}
              size="lg" 
              className="bg-gradient-to-r from-interactive-primary to-interactive-accent hover:from-interactive-primary-hover hover:to-interactive-accent-hover text-lg px-8 py-6 animate-fade-in"
            >
              Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div role="tablist" className="flex flex-wrap justify-center gap-4 mb-8 border-b pb-4">
              <button
                id="tab-trades"
                role="tab"
                aria-selected={activeTab === "trades"}
                aria-controls="panel-trades"
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === "trades"
                    ? "bg-interactive-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === "real-estate"
                    ? "bg-interactive-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === "home-improvement"
                    ? "bg-interactive-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("home-improvement")}
                onKeyDown={(e) => handleKeyDown(e, "home-improvement")}
              >
                <Home className="h-5 w-5" />
                Home Improvement
              </button>
            </div>

            {/* Tab Content - All panels exist in DOM for SEO */}
            <div
              id="panel-trades"
              role="tabpanel"
              aria-labelledby="tab-trades"
              className={`prose max-w-none ${activeTab === "trades" ? "block" : "hidden"}`}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Automation Use Cases for Trade Businesses in Toronto & GTA</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Trade businesses like HVAC, plumbing, electrical, and construction companies face unique operational challenges: managing crews, handling customer calls, preparing invoices, and staying on top of schedules. FlowMatrix AI specializes in solving these problems with tailored automation that saves time, reduces errors, and boosts profitability.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Here are some real-world automation use cases for trades:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-interactive-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Job Scheduling & Dispatch Automation:</strong> Automatically assign jobs to technicians based on location, availability, and skill set, reducing administrative overhead and improving response times.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-interactive-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Missed-Call AI Follow-Up:</strong> Never lose a lead again. Our AI agents can respond instantly to missed calls with automated SMS and email follow-ups, securing more booked jobs.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-interactive-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Invoicing & Payment Processing:</strong> Generate invoices automatically after service completion and integrate with payment gateways to reduce manual data entry.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-interactive-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Inventory Tracking:</strong> Automate inventory management for parts and materials, ensuring your teams always have what they need.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-interactive-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Customer Feedback & Review Requests:</strong> Automatically collect and organize customer reviews to build your reputation in the GTA trade market.
                  </div>
                </li>
              </ul>

              <p className="text-lg text-gray-700">
                Every trade automation audit begins with a <strong>Free Consultation</strong> and ends with a pay-what-you-think-it's-worth audit. From there, we build a 90-day roadmap to implement your custom solutions and help your business scale.
              </p>
            </div>

            <div
              id="panel-real-estate"
              role="tabpanel"
              aria-labelledby="tab-real-estate"
              className={`prose max-w-none ${activeTab === "real-estate" ? "block" : "hidden"}`}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Automation Use Cases for Real Estate in Toronto & GTA</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Real estate professionals juggle property listings, client communications, lead nurturing, and transaction management—often manually. FlowMatrix AI streamlines these workflows, empowering agents, brokerages, and property managers to focus on closing deals instead of chasing paperwork.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Key automation use cases for real estate include:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-interactive-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Lead Nurturing Sequences:</strong> Automatically follow up with new leads via email or SMS, providing property details, scheduling tours, and keeping prospects engaged.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-interactive-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Property Maintenance Requests:</strong> For property managers, automate tenant maintenance requests and work orders to save hours every week.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-interactive-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">AI-Powered Market Reports:</strong> Automatically generate and send market updates to clients, establishing authority and keeping your name top of mind.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-interactive-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Document Preparation:</strong> Automate repetitive paperwork like listing agreements, rental forms, and compliance documentation.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-interactive-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Client Feedback & Closing Surveys:</strong> Automatically collect client feedback to improve service quality and build referrals.
                  </div>
                </li>
              </ul>

              <p className="text-lg text-gray-700">
                Start with a <strong>Free Consultation</strong> to uncover your bottlenecks. Our pay-what-you-think-it's-worth audit will provide a clear, visual roadmap, including ROI calculations, competitor benchmarks, and quick-win automations customized for real estate businesses in Toronto and the GTA.
              </p>
            </div>

            <div
              id="panel-home-improvement"
              role="tabpanel"
              aria-labelledby="tab-home-improvement"
              className={`prose max-w-none ${activeTab === "home-improvement" ? "block" : "hidden"}`}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Automation Use Cases for Home Improvement Businesses in Toronto & GTA</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Home improvement companies—from renovation contractors to remodeling specialists—spend too much time on scheduling, quoting, and client follow-ups. FlowMatrix AI helps automate these manual tasks so you can focus on delivering exceptional service.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Here are a few automation use cases tailored to home improvement:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-interactive-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Project Scheduling Automation:</strong> Automatically manage project timelines, assign crews, and track progress with AI-driven scheduling tools.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-interactive-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">AI-Powered Quoting:</strong> Generate accurate quotes in minutes, integrate pricing calculators, and send polished proposals directly to clients.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-interactive-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Customer Follow-Up Campaigns:</strong> Automatically follow up with clients for approvals, payments, and reviews—without adding to your workload.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-interactive-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Material Procurement Tracking:</strong> Streamline ordering and delivery of building materials with automated workflows to prevent costly delays.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-interactive-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Team Communication Automation:</strong> Centralize updates and notifications for your crew, ensuring everyone stays aligned and informed.
                  </div>
                </li>
              </ul>

              <p className="text-lg text-gray-700">
                We start every relationship with a <strong>Free Consultation</strong> to assess your workflows. Our pay-what-you-think-it's-worth audit provides a 90-day automation roadmap that turns inefficiencies into scalable systems for your home improvement business.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-interactive-primary to-interactive-accent rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Start Automating Your Business Today
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join hundreds of Toronto and GTA businesses that have transformed their operations with AI automation.
            </p>
            <Button 
              onClick={openCalendly}
              size="lg" 
              className="bg-white text-interactive-primary hover:bg-gray-100 text-lg px-8 py-6"
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
