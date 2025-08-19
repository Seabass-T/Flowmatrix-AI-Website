import Navigation from "@/components/Navigation";
import { Helmet } from "react-helmet";
import { Share2, AlertTriangle, Repeat, TrendingUp, Target, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialMedia = () => {
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
        <title>Social Media: Automating Your Digital Presence | FlowMatrix AI Social Media Automation</title>
        <meta name="description" content="Automate your social media posting and engagement with AI. Achieve 66% higher engagement rates and 50-60% more consistent posting. Social media automation and AI marketing solutions." />
        <meta name="keywords" content="social media automation, automated posting, AI marketing automation, social engagement ROI, social media management" />
      </Helmet>
      
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <Navigation />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Social Media: <span className="bg-gradient-to-r from-interactive-primary to-interactive-accent bg-clip-text text-transparent">Automating Your Digital Presence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your social media from time-consuming chore to automated growth engine with AI-powered management solutions.
            </p>
          </header>

          <div className="space-y-16">
            {/* Why Social Media Matters Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Share2 className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Social Media Matters to Every Business</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Social media is where customers spend their time, form opinions, and decide who they trust. Platforms like LinkedIn, Instagram, Facebook, and TikTok aren't just channels for marketing — they're <strong>critical touchpoints for brand awareness, engagement, and lead generation</strong>.
                </p>
                <p>
                  The challenge? Maintaining a consistent presence across platforms is exhausting. Manual posting, replying, and monitoring quickly drain resources. Businesses that fail to keep up risk losing relevance and visibility.
                </p>
              </div>
            </section>

            {/* Challenge Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Challenge of Manual Social Media Management</h2>
              </div>
              
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Posting schedules are inconsistent without dedicated staff.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Time spent replying to comments and messages pulls focus away from core business.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Insights and analytics are often overlooked due to lack of bandwidth.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Managing multiple accounts and platforms creates bottlenecks.
                </li>
              </ul>
            </section>

            {/* Automation Power Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Repeat className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Power of Automating Social Media</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 mb-6">
                <p>
                  Automation ensures your brand stays visible, responsive, and professional 24/7. With AI-driven workflows, businesses can:
                </p>
              </div>
              
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Schedule and publish posts automatically across multiple platforms.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Repurpose existing content into new formats (e.g., blogs into LinkedIn posts, videos into reels).
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Respond instantly to common comments, DMs, and inquiries.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Monitor account activity and flag engagement opportunities.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Track campaign performance with live dashboards and insights.
                </li>
              </ul>
            </section>

            {/* ROI Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">ROI Potential of Social Media Automation</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Companies that automate social media management typically achieve:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50–60%</div>
                  <p className="text-gray-700"><strong>More consistent posting</strong> across platforms.</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">66%</div>
                  <p className="text-gray-700"><strong>Higher engagement rates</strong> from timely responses and activity.</p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                  <div className="text-3xl font-bold text-orange-600 mb-2">30–40%</div>
                  <p className="text-gray-700"><strong>Reduction in marketing labor costs</strong> by cutting manual work.</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2×</div>
                  <p className="text-gray-700"><strong>More inbound opportunities</strong> when social channels are consistently managed.</p>
                </div>
              </div>
            </section>

            {/* Future Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Deep Dive: The Future of Social Media Management</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 mb-6">
                <p className="mb-6">
                  In today's fast-paced digital environment, customers expect <strong>real-time interaction</strong> and consistent visibility. Automation ensures your brand:
                </p>
                
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Never misses a chance to engage with customers.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Maintains a steady presence without increasing headcount.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Gains detailed insights into campaign performance.
                  </li>
                </ul>
                
                <p className="mt-6">
                  The future belongs to businesses that <strong>automate the routine and personalize the strategic</strong>.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-interactive-primary to-interactive-accent rounded-2xl shadow-lg p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Automate Your Social Presence?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Free your team from the grind of posting and replying. See how social media automation can keep your brand active, engaged, and growing every day.
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

export default SocialMedia;