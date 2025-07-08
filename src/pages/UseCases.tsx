import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Users, Database, FileText, ShoppingCart, CreditCard, ArrowRight, Bot, Zap } from "lucide-react";
import { useEffect } from "react";

declare global {
  interface Window {
    Calendly: any;
  }
}

const UseCases = () => {
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

  const useCases = [
    {
      icon: Mail,
      title: "AI Inbox Organizer",
      description: "Automatically categorize, prioritize, and route emails using intelligent AI classification. Reduce email overwhelm and ensure nothing important gets missed.",
      features: [
        "Smart email categorization",
        "Priority scoring based on content",
        "Automatic routing to team members",
        "Follow-up reminders and scheduling",
        "Integration with popular email clients"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Sales Lead Qualifier",
      description: "Score and route leads automatically based on engagement and qualification criteria. Convert more prospects with intelligent lead management.",
      features: [
        "Automated lead scoring algorithms",
        "Behavioral tracking and analysis",
        "Dynamic routing to sales reps",
        "Real-time qualification updates",
        "CRM integration and sync"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Notion CRM Automator",
      description: "Sync customer data, automate follow-ups, and maintain perfect CRM hygiene. Keep your Notion workspace organized and up-to-date automatically.",
      features: [
        "Automated data synchronization",
        "Follow-up sequence automation",
        "Contact enrichment and updates",
        "Pipeline stage automation",
        "Custom field mapping and rules"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Document Processor",
      description: "Extract, analyze, and organize data from documents with AI-powered processing. Transform unstructured data into actionable insights.",
      features: [
        "Intelligent document parsing",
        "Data extraction and validation",
        "Automated filing and organization",
        "Content analysis and summaries",
        "Multi-format support (PDF, Word, etc.)"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Order Automation",
      description: "Streamline order processing, inventory management, and customer communications. Reduce manual work and improve order accuracy.",
      features: [
        "Automated order processing",
        "Inventory level monitoring",
        "Customer notification sequences",
        "Shipping and tracking updates",
        "Return and refund automation"
      ],
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: CreditCard,
      title: "Invoice Manager & Payment System",
      description: "Automates client invoicing, tracks payments, and integrates with payment platforms for seamless financial management.",
      features: [
        "Automated invoice generation and delivery",
        "Payment tracking and reconciliation",
        "Recurring billing automation",
        "Payment reminder sequences",
        "Integration with accounting software"
      ],
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Automation{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Use Cases
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how BrightPath AI transforms business operations with intelligent automation systems designed for real-world challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-0 bg-white">
              <CardHeader className="pb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.gradient} rounded-2xl flex items-center justify-center mb-4`}>
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {useCase.title}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  {useCase.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`w-2 h-2 bg-gradient-to-r ${useCase.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Use Case - Full Width */}
        <Card className="hover:shadow-xl transition-shadow border-0 bg-gradient-to-r from-gray-900 to-gray-800 text-white mb-16">
          <CardHeader className="pb-6 lg:pb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
              <div className="flex-1">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold mb-4">
                  Custom AI Assistant
                </CardTitle>
                <CardDescription className="text-xl text-gray-200">
                  Build your own AI assistant tailored to your business needs. From customer support to internal operations, create intelligent automation that understands your unique requirements.
                </CardDescription>
              </div>
              <div className="mt-6 lg:mt-0">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-semibold"
                >
                  Explore Custom Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Lightning Fast</h4>
                <p className="text-gray-300 text-sm">Instant responses and real-time processing</p>
              </div>
              <div className="text-center">
                <Bot className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">AI-Powered</h4>
                <p className="text-gray-300 text-sm">Advanced machine learning capabilities</p>
              </div>
              <div className="text-center">
                <Database className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Scalable</h4>
                <p className="text-gray-300 text-sm">Grows with your business needs</p>
              </div>
            </div>
          </CardContent>
        </Card>


        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how these automation solutions can transform your specific business processes and challenges.
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

export default UseCases;
