
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Clock, Mail, Star, Zap, TrendingUp, Brain } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Here you would integrate with your email service
    console.log("Subscribing email:", email);
    setIsSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Newsletter
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with the latest AI developments, automation trends, and industry insights delivered to your inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Free Preview */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0 h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="w-fit">Free Preview</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    2-3 min read
                  </div>
                </div>
                <CardTitle className="text-2xl">This Week in AI: Revolutionary Automation Trends</CardTitle>
                <CardDescription className="text-lg">
                  December 2024 Edition - Discover the latest breakthroughs shaping the future of business automation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">AI-Powered Workflow Automation</h3>
                      <p className="text-gray-600">
                        New advances in machine learning are enabling businesses to automate complex decision-making processes, 
                        reducing manual work by up to 80% across various industries.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Small Business AI Adoption Surge</h3>
                      <p className="text-gray-600">
                        Small businesses are increasingly adopting AI tools, with a 300% increase in automation implementations 
                        this quarter alone. The key drivers include cost reduction and improved efficiency.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Brain className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Voice AI Integration Breakthroughs</h3>
                      <p className="text-gray-600">
                        Advanced voice AI systems are now capable of handling complex customer service scenarios...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Blurred Premium Content */}
                <div className="relative mt-8">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white z-10 rounded-lg"></div>
                  <div className="blur-sm space-y-4 text-gray-400">
                    <h3 className="font-semibold">🔒 Premium Content</h3>
                    <p>Detailed analysis of 15+ new AI tools and platforms that could revolutionize your business operations...</p>
                    <p>Case studies from 3 small businesses that achieved 500% ROI through strategic automation...</p>
                    <p>Exclusive interview with leading AI researchers about upcoming technologies...</p>
                    <p>Step-by-step implementation guides for the most effective automation strategies...</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <Card className="bg-white/95 backdrop-blur-sm border shadow-lg">
                      <CardContent className="p-6 text-center">
                        <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                        <h3 className="font-bold text-gray-900 mb-2">Unlock Full Access</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Get the complete newsletter with in-depth analysis, case studies, and actionable insights.
                        </p>
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          Subscribe for $3.99/month
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Subscription Panel */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Premium Newsletter</CardTitle>
                <CardDescription className="text-blue-100">
                  Comprehensive AI insights for serious business owners
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">$3.99<span className="text-lg font-normal">/month</span></div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Weekly in-depth analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Exclusive case studies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Implementation guides</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Early access to trends</span>
                  </div>
                </div>
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                  Start Premium Subscription
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <CardTitle className="text-lg">Email Delivery</CardTitle>
                </div>
                <CardDescription>
                  Get the newsletter delivered directly to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button
                  onClick={handleSubscribe}
                  disabled={!email || isSubscribed}
                  className="w-full"
                >
                  {isSubscribed ? "Subscribed!" : "Subscribe to Free Preview"}
                </Button>
                {isSubscribed && (
                  <p className="text-sm text-green-600 text-center">
                    ✓ You'll receive our free preview in your inbox!
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center shadow-lg border-0">
            <CardContent className="p-6">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Latest Trends</h3>
              <p className="text-sm text-gray-600">
                Stay updated with cutting-edge AI developments and automation breakthroughs
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-lg border-0">
            <CardContent className="p-6">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Business Impact</h3>
              <p className="text-sm text-gray-600">
                Real case studies showing how AI transforms small businesses across industries
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-lg border-0">
            <CardContent className="p-6">
              <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Actionable Insights</h3>
              <p className="text-sm text-gray-600">
                Step-by-step guides and practical advice you can implement immediately
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
