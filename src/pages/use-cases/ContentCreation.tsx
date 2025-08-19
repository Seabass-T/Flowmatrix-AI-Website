import Navigation from "@/components/Navigation";
import { Helmet } from "react-helmet";
import { PenTool, AlertTriangle, Layers, TrendingUp, Building, Target, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContentCreation = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/flowmatrix/30min'
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Content Creation: Powering Brand Growth | FlowMatrix AI Content Automation</title>
        <meta name="description" content="Scale your content production with AI automation. Generate blogs, social posts, and marketing copy 55% faster. Content marketing ROI and scaling content production solutions." />
        <meta name="keywords" content="content automation, AI content creation, content marketing ROI, scaling content production, automated content generation" />
      </Helmet>
      
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <Navigation />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Content Creation: <span className="bg-gradient-to-r from-interactive-primary to-interactive-accent bg-clip-text text-transparent">Powering Brand Growth</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your content creation from bottleneck to competitive advantage with AI-powered automation solutions.
            </p>
          </header>

          <div className="space-y-16">
            {/* Why Content Matters Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <PenTool className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Content Matters to Every Business</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Content is the voice of your business. From blog posts and social media updates to product descriptions and newsletters, <strong>consistent, high-quality content is what drives visibility, trust, and conversions</strong>.
                </p>
                <p>
                  In today's digital-first world, businesses that don't publish regularly get left behind. Customers expect education, engagement, and proof of expertise before making a decision. The challenge? Producing enough content—fast enough—to stay competitive.
                </p>
              </div>
            </section>

            {/* Challenge Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Challenge of Manual Content Creation</h2>
              </div>
              
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Producing articles, blogs, and social posts by hand consumes valuable hours.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Inconsistent publishing schedules reduce SEO rankings and brand trust.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Teams spend more time creating content than analyzing performance.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Scaling content across multiple platforms is costly and time-intensive.
                </li>
              </ul>
            </section>

            {/* Automation Power Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Power of Automating Content Creation</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 mb-6">
                <p>
                  Automation and AI change the equation. Instead of struggling with bottlenecks, businesses can:
                </p>
              </div>
              
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Generate blogs, emails, and posts in minutes—not days.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Repurpose content across multiple formats and channels instantly.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Ensure brand consistency with templates and AI-driven tone control.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Scale production to meet demand without increasing headcount.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Free creative teams to focus on strategy, storytelling, and innovation.
                </li>
              </ul>
            </section>

            {/* ROI Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">ROI Potential of Content Automation</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Companies that automate content creation typically report:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">55%</div>
                  <p className="text-gray-700"><strong>Faster publishing cycles</strong> compared to traditional methods.</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">2–3×</div>
                  <p className="text-gray-700"><strong>More output</strong> with the same team size.</p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                  <div className="text-3xl font-bold text-orange-600 mb-2">30–50%</div>
                  <p className="text-gray-700"><strong>Cost savings</strong> when reducing reliance on outsourced copywriters.</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-2">67%</div>
                  <p className="text-gray-700"><strong>More leads</strong> driven by consistent, high-quality publishing.</p>
                </div>
              </div>
            </section>


            {/* Real-World Example */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">A Real-World Example</h2>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                <p className="text-lg text-gray-700 mb-6">
                  A B2B services company used automated content generation to maintain a consistent blog and LinkedIn presence. Instead of producing four posts per month manually, automation enabled them to publish twelve high-quality pieces.
                </p>
                
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">
                    <strong>Result:</strong> Website traffic tripled in six months, inbound leads grew by 67%, and the team cut outsourcing costs by nearly 40%.
                  </p>
                </div>
              </div>
            </section>

            {/* Future Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Deep Dive: The Future of Content Creation</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 mb-6">
                <p className="mb-6">
                  Content is no longer just "nice to have"—it's the currency of trust in business. As AI and automation tools mature, companies that systematize their content will:
                </p>
                
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Dominate SEO rankings with consistent publishing.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Build stronger brand authority at scale.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Engage customers across multiple platforms effortlessly.
                  </li>
                </ul>
                
                <p className="mt-6">
                  The future of growth belongs to businesses that <strong>combine human creativity with AI-driven efficiency</strong>.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-interactive-primary to-interactive-accent rounded-2xl shadow-lg p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Scale Your Content?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Stop struggling with bottlenecks and irregular posting. See how content automation can help your business scale brand visibility and drive more leads.
              </p>
              <Button 
                onClick={openCalendly}
                size="lg"
                className="bg-white text-interactive-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Free Audit
              </Button>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default ContentCreation;