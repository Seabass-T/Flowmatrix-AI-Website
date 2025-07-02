
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Users, Zap, Heart, Globe, Building, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FlowMatrix AI
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help modern businesses unlock their next chapter through intelligent automation and AI systems that transform operations and drive growth. 
            <span className="font-semibold text-blue-600"> But honestly? We're just a bunch of automation nerds who got tired of watching business owners work 80-hour weeks on stuff a computer could do better.</span>
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission (And Why We Actually Care)</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-6">
              "To help modern businesses unlock their next chapter through intelligent automation and AI systems that enhance operational efficiency, reduce manual work, and create new possibilities for growth and innovation."
            </p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Translation: We want you to stop doing repetitive tasks that make you want to bang your head against the wall, and start focusing on the stuff that actually matters (like growing your business and maybe having a weekend again).
            </p>
          </div>
        </div>

        {/* Small Business Success Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Empowering Small Businesses Worldwide
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-6">
            We've had the privilege of working with 150+ small businesses across diverse industries and continents, 
            helping them streamline operations, reduce costs, and scale efficiently through intelligent automation.
          </p>
          <p className="text-base text-gray-500 text-center max-w-3xl mx-auto mb-12 italic">
            From that frazzled restaurant owner who was manually tracking inventory on sticky notes to the consultant who spent more time chasing invoices than consulting – we've seen it all, and we've fixed it all.
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
                  we've helped businesses worldwide optimize their workflows. Turns out, the pain of manual processes is universal – but so is the relief when they're automated.
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
                  Our solutions have transformed operations across healthcare, e-commerce, professional services, 
                  manufacturing, hospitality, and many other sectors. We've automated everything from coffee shop loyalty programs to complex manufacturing workflows (and yes, we're equally proud of both).
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
                  Our clients typically see 40-60% time savings on repetitive tasks, improved customer satisfaction, 
                  and significant cost reductions within the first quarter of implementation. But the real win? They get their sanity back.
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
                We deliver enterprise-grade solutions with meticulous attention to detail and professional standards. No duct tape and prayers here – just solid, reliable automation that actually works.
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
                Our solutions are designed to grow with your business, from startup to enterprise scale. Because nothing's worse than outgrowing your automation and having to start over.
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
                Every client receives personal attention and care from our founding team, ensuring your success. We're small enough to care, experienced enough to deliver.
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
                We don't just deliver solutions – we become your trusted partner in digital transformation. Think of us as your automation wingmen (or wingwomen).
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Expertise (AKA What We're Really Good At)</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Advanced Automation Systems</h4>
                  <p className="text-gray-600">
                    We specialize in building sophisticated n8n automation workflows that handle complex business logic and integrate seamlessly with your existing tools. No more copy-pasting between 47 different apps.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Integration</h4>
                  <p className="text-gray-600">
                    Our team expertly integrates AI capabilities into automation workflows, creating intelligent systems that learn and adapt to your business needs. It's like having a super-smart assistant that never calls in sick.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Custom Development</h4>
                  <p className="text-gray-600">
                    Every solution is tailored to your specific industry, business model, and operational requirements. One-size-fits-all is for t-shirts, not business automation.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Approach (How We Actually Do It)</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Discovery & Analysis</h4>
                  <p className="text-gray-600">
                    We start by deeply understanding your current processes, pain points, and automation opportunities. Translation: we figure out what's driving you crazy and fix it.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Custom Design</h4>
                  <p className="text-gray-600">
                    Our team designs automation workflows specifically for your business, ensuring maximum efficiency and ROI. We're basically workflow architects, but cooler.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ongoing Partnership</h4>
                  <p className="text-gray-600">
                    We provide continuous support, optimization, and evolution of your automation systems as your business grows. We're in this for the long haul, not just a quick setup-and-ghost situation.
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
              FlowMatrix AI was founded with a simple but powerful vision: to make advanced automation and AI accessible to businesses of all sizes. Our founder-led approach means you get direct access to the decision-makers who are invested in your success.
            </p>
            <p className="text-base text-gray-300 max-w-2xl mx-auto mb-8">
              We started this because we were tired of seeing brilliant business owners burn out on tasks that a computer could handle in seconds. Life's too short for manual data entry.
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

        {/* Technology Stack */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-blue-600">n8n</span>
              </div>
              <h3 className="font-semibold text-gray-900">Automation Platform</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-green-600">AI</span>
              </div>
              <h3 className="font-semibold text-gray-900">AI Integration</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-purple-600">API</span>
              </div>
              <h3 className="font-semibold text-gray-900">Custom APIs</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-orange-600">DB</span>
              </div>
              <h3 className="font-semibold text-gray-900">Database Systems</h3>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how FlowMatrix AI can help your business unlock its next chapter through intelligent automation and AI systems. (And maybe get you that weekend back.)
          </p>
          <Button 
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
