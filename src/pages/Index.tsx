
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Zap, Bot, Settings, Mail, Users, UserCheck, MessageCircle, FileBarChart, CreditCard } from "lucide-react";

const Index = () => {
  const useCases = [
    {
      icon: Mail,
      name: "AI Inbox Organizer",
      description: "Sorts emails by category, flags urgent items, and sends a daily summary.",
      helps: "Small consultants, solopreneurs, admin-heavy teams",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: UserCheck,
      name: "Lead Qualifier & Notifier",
      description: "Scores incoming leads from forms or emails, sends alerts for high-quality ones.",
      helps: "Small agencies, coaches, service providers",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      name: "Client Onboarding Flow",
      description: "Automates onboarding steps like scheduling, CRM entry, and contract setup.",
      helps: "Freelancers, small consultants, boutique agencies",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      name: "Custom Company Chatbot",
      description: "Builds a personalized AI chatbot trained on your business to handle inquiries 24/7.",
      helps: "Small businesses looking to save time and convert more customers",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: FileBarChart,
      name: "AI Report Generator",
      description: "Gathers data and generates branded reports for clients or internal teams.",
      helps: "Small marketing teams, agencies, operations leads",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: CreditCard,
      name: "Invoice Manager & Payment System",
      description: "Automates client invoicing, tracks payments, and integrates with payment platforms.",
      helps: "Small business owners, freelancers, service providers",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empower Your Small Business with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Smart Automation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Custom AI solutions designed specifically for small businesses and entrepreneurs. 
              Scale your operations, reduce manual work, and focus on what matters most - growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
              >
                Get Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                View Use Cases
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Small Business Success
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand the unique challenges small businesses face. Our automation solutions are designed to scale with you, not overwhelm you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Small Business Focused</h3>
              <p className="text-gray-600">
                Tailored automation that understands the constraints and opportunities of small business operations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">
                Every business is unique. We build personalized automation systems that fit your exact needs and budget
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Risk-Free Trial</h3>
              <p className="text-gray-600">
                Test our automation solutions with a free trial to ensure they deliver real value for your business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Use Cases */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Automation Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              These examples showcase just a fraction of what's possible. We specialize in creating completely personalized automation systems tailored to your unique business processes and challenges.
            </p>
            <p className="text-base text-blue-600 font-medium">
              Every small business is different. BrightPath AI customizes automation to fit your exact needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${useCase.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <useCase.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {useCase.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 font-medium">
                      Helps: <span className="text-gray-700">{useCase.helps}</span>
                    </p>
                  </div>
                  <Button 
                    className={`w-full bg-gradient-to-r ${useCase.gradient} hover:opacity-90 text-white font-semibold`}
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Beyond These Examples
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                The use cases above represent just a small sample of our capabilities. We excel at building completely custom automation solutions that address your specific business challenges, no matter how unique they may be.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
              >
                Discuss Your Custom Needs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Growing Small Businesses
            </h2>
            <p className="text-gray-600">
              Join forward-thinking entrepreneurs and small business owners who have transformed their operations with BrightPath AI
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-sm font-medium text-gray-500">Small Business</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-sm font-medium text-gray-500">Startup Client</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-sm font-medium text-gray-500">Local Business</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-sm font-medium text-gray-500">Growing Company</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Small Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start with a free trial to see how BrightPath AI can automate your operations and accelerate your growth. No commitment, just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
            >
              Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-blue-600"
            >
              Book Discovery Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                BrightPath AI
              </h3>
              <p className="text-gray-400">
                Intelligent automation solutions designed for small business success
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Automation</li>
                <li>Custom Systems</li>
                <li>Free Trials</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Use Cases</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Free Trial</li>
                <li>Support Center</li>
                <li>Book a Call</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BrightPath AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
