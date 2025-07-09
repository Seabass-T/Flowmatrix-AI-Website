
import Navigation from "@/components/Navigation";
import AnimatedFeatures from "@/components/AnimatedFeatures";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star, Users, Zap, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

declare global {
  interface Window {
    Calendly: any;
  }
}

const Index = () => {
  const navigate = useNavigate();

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

  const goToPricing = () => {
    navigate('/pricing');
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
              Automate Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Small Business
              </span>
              <br />
              With AI Magic
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business operations with intelligent automation. Save 20+ hours per week, 
              reduce costs by 40%, and scale without the stress. Built specifically for small businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button onClick={() => navigate('/use-cases')} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
                Start Your Automation Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sm text-gray-700 text-center mb-1">
                <span className="font-medium">🎯 Free 30-Minute Automation Audit:</span> Get a comprehensive analysis of your business operations to identify automation opportunities.
              </p>
              <p className="text-xs text-gray-600 text-center">
                <span className="font-medium">Bonus:</span> Single-use automation systems include a free week trial period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-300">150+</div>
              <div className="text-gray-200">Businesses Automated</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-300">20+</div>
              <div className="text-gray-200">Hours Saved Weekly</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-300">40%</div>
              <div className="text-gray-200">Cost Reduction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-300">99.9%</div>
              <div className="text-gray-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Replace the existing "Why Choose" section with the new animated component */}
      <AnimatedFeatures />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Automation{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple task automation to complex workflow orchestration, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  Workflow Automation
                </CardTitle>
                <CardDescription className="text-base">
                  Streamline repetitive tasks and create seamless workflows that run on autopilot.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Email automation & follow-ups
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lead qualification & nurturing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Task scheduling & reminders
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                  Customer Service AI
                </CardTitle>
                <CardDescription className="text-base">
                  24/7 intelligent customer support that learns and improves over time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    AI chatbots & voice assistants
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Ticket routing & prioritization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Customer sentiment analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                  Data Analytics & Insights
                </CardTitle>
                <CardDescription className="text-base">
                  Turn your business data into actionable insights and automated reports.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Automated reporting dashboards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Predictive analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what small business owners are saying about their automation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Our small coffee shop was drowning in customer inquiries on social media. FlowMatrix AI set up an automated system that handles 80% of our questions about hours, menu items, and orders. Now I actually have time to focus on making great coffee instead of being glued to my phone all day."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">Sarah M.</div>
                    <div className="text-sm text-gray-600">Local Coffee Shop Owner</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "As a freelance graphic designer, I was spending more time on invoicing and follow-ups than actual design work. Their invoice automation system sends payment reminders, tracks overdue amounts, and even follows up with clients automatically. I got my life back and my cash flow improved dramatically."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold">
                    JR
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">Jake R.</div>
                    <div className="text-sm text-gray-600">Freelance Designer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Running a small plumbing business means juggling appointments, emergency calls, and paperwork. The workflow automation they built sends appointment confirmations, follows up after service calls, and even handles basic scheduling questions from customers. It's like having a personal assistant that never sleeps."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                    LC
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">Lisa C.</div>
                    <div className="text-sm text-gray-600">Plumbing Services</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join hundreds of small businesses that have already automated their way to success. 
            Book a free consultation and see how we can help you save time and money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openCalendly} size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              Get Your Free Automation Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button onClick={goToPricing} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              View Pricing Plans
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
