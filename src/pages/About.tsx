
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Users, Zap, Heart, Globe, Building, TrendingUp } from "lucide-react";
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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
            About{" "}
            <span className="bg-gradient-to-r from-interactive-primary to-interactive-accent bg-clip-text text-transparent">
              FlowMatrix AI
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to helping modern businesses unlock their next chapter through intelligent automation and AI systems that transform operations and drive sustainable growth. Our mission is to become your trusted technology partner, working closely with you to understand your unique challenges and deliver solutions that truly make a difference.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-interactive-primary to-interactive-accent rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Partnership-First Mission</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-6">
              "To partner with modern businesses in unlocking their next chapter through intelligent automation and AI systems that enhance operational efficiency, reduce manual work, and create new possibilities for growth and innovation."
            </p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              We believe true success comes from understanding your business from the ground up. Our approach starts with your challenges, your goals, and your vision, then builds upward to create automation solutions that grow with you as a trusted partner.
            </p>
          </div>
        </div>

        {/* Small Business Success Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Empowering Small Businesses Worldwide
          </h2>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-6">
              We've had the privilege of partnering with 150+ small businesses across diverse industries and continents, 
              helping them streamline operations, reduce costs, and scale efficiently through intelligent automation. Our partnership approach ensures we understand each business's unique needs before implementing solutions.
            </p>
            <p className="text-base text-gray-500 text-center max-w-3xl mx-auto mb-12">
              From restaurant owners managing complex inventory systems to consultants optimizing their client workflows, we partner with businesses to understand their challenges first, then build automation solutions that truly fit their operational needs.
            </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  From local retailers in North America to service providers in Europe and manufacturers in Asia, 
                  we partner with businesses worldwide to understand their unique workflows and implement optimization solutions that fit their specific operational requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Diverse Industries</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our partnership approach has transformed operations across healthcare, e-commerce, professional services, 
                  manufacturing, hospitality, and many other sectors. We work closely with each client to understand their industry-specific challenges and develop tailored automation solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Measurable Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our partnership approach delivers measurable results: clients typically see 40-60% time savings on repetitive tasks, improved customer satisfaction, 
                  and significant cost reductions within the first quarter of implementation, enabling them to focus on strategic growth initiatives.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Professional Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We deliver enterprise-grade solutions with meticulous attention to detail and professional standards. Our commitment to excellence ensures reliable, scalable automation systems that perform consistently.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Scalability</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Our solutions are designed to grow with your business, from startup to enterprise scale. We build sustainable automation systems that evolve alongside your changing business needs.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Founder-Led Care</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Every client receives personal attention and dedicated support from our founding team, ensuring your success through direct partnership and ongoing collaboration.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Partnership Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We don't just deliver solutions – we become your trusted partner in digital transformation, working alongside you to achieve long-term operational excellence and business growth.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose FlowMatrix AI?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Technical Expertise</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Advanced Automation Systems</h4>
                  <p className="text-gray-600">
                    We specialize in building sophisticated automation workflows that handle complex business logic and integrate seamlessly with your existing tools, eliminating manual data transfer between systems.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Integration</h4>
                  <p className="text-gray-600">
                    Our team expertly integrates AI capabilities into automation workflows, creating intelligent systems that learn and adapt to your business needs, providing decision-making support and process optimization.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Custom Development</h4>
                  <p className="text-gray-600">
                    Every solution is tailored to your specific industry, business model, and operational requirements, ensuring optimal performance and seamless integration with your existing processes.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Partnership Approach</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Discovery & Analysis</h4>
                  <p className="text-gray-600">
                    We begin by thoroughly understanding your business operations, challenges, and objectives through comprehensive analysis and stakeholder interviews to identify optimization opportunities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Custom Solution Design</h4>
                  <p className="text-gray-600">
                    Our team collaborates with you to design automation workflows specifically tailored to your business processes, ensuring maximum efficiency and measurable return on investment.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Long-term Partnership</h4>
                  <p className="text-gray-600">
                    We provide continuous support, system optimization, and strategic evolution of your automation infrastructure as your business scales and requirements change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Story Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Founder-Led Excellence</h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-6">
              FlowMatrix AI was founded with a clear vision: to make advanced automation and AI accessible to businesses of all sizes through genuine partnership. Our founder-led approach ensures you receive direct access to decision-makers who are personally invested in your success.
            </p>
            <p className="text-base text-gray-300 max-w-2xl mx-auto mb-8">
              We established this company because we recognized the immense potential for technology to transform business operations, allowing owners to focus on strategic growth rather than repetitive administrative tasks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">150+</div>
                <div className="text-gray-300">Successful Implementations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-gray-300">Client Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Availability</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Partnership Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Understand Your Business</h3>
              <p className="text-gray-600 text-sm">We start by deeply understanding your operations, challenges, and goals through comprehensive business analysis.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Identify Opportunities</h3>
              <p className="text-gray-600 text-sm">We work with you to identify automation opportunities and prioritize solutions based on impact and feasibility.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Collaborate on Solutions</h3>
              <p className="text-gray-600 text-sm">Together, we design and develop automation solutions that align perfectly with your business processes and objectives.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Implement & Test</h3>
              <p className="text-gray-600 text-sm">We carefully implement automation systems with rigorous testing to ensure accuracy, reliability, and seamless integration.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">5</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Monitor & Optimize</h3>
              <p className="text-gray-600 text-sm">We continuously monitor system performance and optimize processes to maintain peak efficiency and prevent issues.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">6</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Scale Together</h3>
              <p className="text-gray-600 text-sm">As your business grows, we evolve your automation systems, ensuring they scale with your expanding operations and changing needs.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how FlowMatrix AI can partner with your business to unlock its next chapter through intelligent automation and AI systems that drive operational excellence.
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

export default About;
