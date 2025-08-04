import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { 
  ArrowRight, 
  Clock, 
  BarChart3, 
  FileText, 
  MessageSquare, 
  CheckCircle, 
  Target, 
  Settings,
  TrendingUp,
  Users,
  MapPin,
  Award
} from "lucide-react";
import { useEffect } from "react";

declare global {
  interface Window {
    Calendly: any;
  }
}

const About = () => {
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
      if (document.body.contains(script)) document.body.removeChild(script);
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, []);

  // About Page Organization JSON-LD
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FlowMatrix AI",
    "url": "https://www.flowmatrixai.com",
    "logo": "https://www.flowmatrixai.com/logo.png",
    "description": "FlowMatrix AI helps trade, real estate and home improvement businesses in Toronto & GTA automate workflows, reduce admin overhead, and scale effectively.",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1‑647‑555‑1234",
        "contactType": "Customer Service"
      }
    ],
    "sameAs": ["https://www.linkedin.com/company/flowmatrix-ai"]
  };

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
    <>
      <Helmet>
        <title>About FlowMatrix AI - Trade & Real Estate Automation in Toronto & GTA</title>
        <meta name="description" content="FlowMatrix AI provides AI automation for trade, real estate & home improvement businesses in Toronto & GTA. Free consultation, audit-first approach, 120+ hours saved monthly." />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-interactive-primary to-interactive-accent bg-clip-text text-transparent">
              FlowMatrix AI
            </span> – Automation for Trade, Real Estate & Home Improvement Businesses in Toronto & the GTA
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            We save trade & property firms 120+ hours/month via an audit-first system—starting with a Free Consultation.
          </p>
          
          <Button 
            onClick={openCalendly}
            size="lg" 
            className="bg-gradient-to-r from-interactive-primary to-interactive-accent hover:from-interactive-primary-hover hover:to-interactive-accent-hover text-lg px-8 py-6 animate-fade-in shadow-xl"
          >
            Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Our Why Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why FlowMatrix Exists
          </h2>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600 mb-6">
              Trade and real estate businesses get caught in admin overload—from dispatching crews to chasing reviews. 
              Audits that quantify inefficiencies first, then build automation based on real data, not guesswork.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We built FlowMatrix to make <strong>AI automation accessible to local trades, renovation firms, and property services</strong> 
              throughout Toronto and the GTA.
            </p>
            <p className="text-base text-gray-500">
              We start with a <strong>Free Consultation</strong>—then deliver a <em>pay-what-you-think-it's-worth Trade Automation Audit</em> customized to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Time Back in Your Week</h3>
              <p className="text-gray-600 text-sm">
                Save 120+ hours monthly on administrative tasks and focus on what you do best.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ROI You Can Measure</h3>
              <p className="text-gray-600 text-sm">
                Data-driven audits that show exactly where automation will impact your bottom line.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Audit You Value</h3>
              <p className="text-gray-600 text-sm">
                Pay what you think it's worth after seeing the comprehensive automation roadmap.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works - Audit Process */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Audit Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Free Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-200">
                  No obligation call to map your pain points across Toronto and GTA service areas. We identify automation opportunities specific to your trade or real estate business.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Audit Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-200">
                  Pay-what-you-think-it's-worth audit with charts, benchmarks, and a custom 90-day roadmap tailored for Toronto & GTA market conditions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Automation Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-200">
                  Post-assessment, we build and implement automation solutions designed for Toronto's trade and real estate landscape.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Scale & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-200">
                  Ongoing training, system maintenance, and expansion into other verticals as your GTA business grows.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Newsletter CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 mb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Informed</h2>
            <p className="text-xl text-gray-600 mb-6">
              Get weekly insights on AI automation trends, case studies, and implementation strategies specifically for Toronto businesses.
            </p>
            <Link to="/newsletter" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Read Our Weekly Newsletter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Team Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Meet Your Local Automation Partners
          </h2>
          
          <div className="max-w-4xl mx-auto text-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-interactive-primary to-interactive-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-16 w-16 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">FlowMatrix AI Founding Team</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-gray-600">
                Decade of experience automating HVAC and real estate workflows in Toronto.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-gray-600">
                Certified member of Ontario Property Management & Construction networks.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-gray-600">
                We live in Toronto and serve only Toronto–GTA clients.
              </p>
            </div>
          </div>
        </div>

        {/* Micro-Case Snapshots */}
        <div className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Real Results for Toronto & GTA Businesses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-white">Trade Business Success</CardTitle>
                <div className="text-3xl font-bold text-blue-600">15+ hrs/week saved</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-200">
                  Saved 15+ hours/week for a GTA plumbing firm via automated invoice pipeline. Eliminated manual data entry and streamlined billing processes across multiple job sites.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-white">Real Estate Automation</CardTitle>
                <div className="text-3xl font-bold text-green-600">60-agent efficiency</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-200">
                  Automated a 60-agent brokerage's lead nurture cycle with email/SMS sequences in their local system. Improved response times and conversion rates significantly.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-white">Home Improvement ROI</CardTitle>
                <div className="text-3xl font-bold text-purple-600">80% time reduction</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-200">
                  Cut quoting time by 80% with an AI-based estimate builder for a Brampton renovation business. Faster quotes led to higher close rates and customer satisfaction.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How does AI automation help my trade business in Toronto?
              </h3>
              <p className="text-gray-600">
                AI automation helps Toronto trade businesses by eliminating repetitive administrative tasks like scheduling, invoicing, and customer follow-ups. 
                For HVAC, plumbing, electrical, and construction companies across the GTA, this typically saves 120+ hours monthly, allowing you to focus on 
                actual trade work and business growth. Our audit process identifies the highest-impact automation opportunities specific to your trade and service area.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What can I expect from the audit process for real estate firms?
              </h3>
              <p className="text-gray-600">
                Our real estate audit process analyzes your current workflows from lead generation to closing, identifying automation opportunities in client communication, 
                document management, and market analysis. Toronto and GTA real estate professionals receive a comprehensive 90-day roadmap showing exactly how 
                automation can streamline property management, client nurturing, and administrative tasks. The pay-what-you-think-it's-worth model ensures you only 
                pay after seeing the value we deliver.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Why choose FlowMatrix over generic marketing or automation firms in GTA?
              </h3>
              <p className="text-gray-600">
                Unlike generic firms, FlowMatrix specializes exclusively in trade, real estate, and home improvement businesses in Toronto and the GTA. 
                We understand local market conditions, regulatory requirements, and industry-specific challenges. Our audit-first approach means we quantify 
                improvements before implementation, and our local presence ensures ongoing support and partnership. We're not just vendors—we're your Toronto-based 
                automation partners invested in your long-term success.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-interactive-primary to-interactive-accent rounded-2xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Schedule your Free Consultation today and discover how AI automation can transform your Toronto or GTA trade, real estate, or home improvement business.
          </p>
          
          <div className="space-y-4">
            <Button 
              onClick={openCalendly}
              size="lg" 
              variant="secondary"
              className="bg-white text-interactive-primary hover:bg-gray-100 text-lg px-8 py-6 font-semibold"
            >
              Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-100">
              <Link to="/use-cases" className="hover:text-white underline">View Use Cases</Link>
              <Link to="/pricing" className="hover:text-white underline">Audit Pricing</Link>
              <a 
                href="https://business.google.com/dashboard/l/03209622293129830584" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white underline"
              >
                Google Business Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;