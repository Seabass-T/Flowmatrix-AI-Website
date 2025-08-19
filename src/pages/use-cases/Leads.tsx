import Navigation from "@/components/Navigation";
import { Helmet } from "react-helmet";
import { Users, AlertTriangle, Zap, TrendingUp, Building, Target, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Leads = () => {
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
        <title>Leads: The Lifeblood of Every Business | FlowMatrix AI Lead Generation Automation</title>
        <meta name="description" content="Discover the importance of leads and ROI of automating lead management. Transform lead generation with AI automation. Respond 7x faster and boost conversion rates by 391%." />
        <meta name="keywords" content="lead generation automation, importance of leads, ROI of automating lead management, lead response time, conversion rates" />
      </Helmet>
      
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <Navigation />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Leads: The <span className="bg-gradient-to-r from-interactive-primary to-interactive-accent bg-clip-text text-transparent">Lifeblood</span> of Every Business
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Without a steady flow of leads, growth stalls. Transform your lead management from chaotic to controlled with AI-powered automation.
            </p>
          </header>

          <div className="space-y-16">
            {/* Why Leads Matter Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Leads Matter to Every Business</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Without a steady flow of leads, growth stalls. Leads represent opportunity — every new inquiry, form submission, or phone call is the start of a potential customer relationship. Whether you're a construction firm, retail brand, or service provider, your ability to <strong>attract, manage, and convert leads</strong> directly determines revenue and long-term sustainability.
                </p>
                <p>
                  The problem? Most businesses struggle to keep pace. Leads slip through the cracks, follow-ups are delayed, and manual tracking eats away at valuable hours. In competitive industries, <strong>slow lead response often means lost business</strong>.
                </p>
              </div>
            </section>

            {/* Challenge Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Challenge of Manual Lead Management</h2>
              </div>
              
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Sorting and qualifying leads by hand drains time and focus.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Follow-ups are inconsistent, leading to missed opportunities.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Tracking across multiple channels (website, email, social media) is error-prone.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Sales teams waste hours on administrative work instead of closing deals.
                </li>
              </ul>
            </section>

            {/* Automation Power Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Power of Automating Lead Management</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 mb-6">
                <p>
                  Automation transforms the lead process from chaotic to controlled. Instead of relying on manual effort, AI-driven workflows:
                </p>
              </div>
              
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Instantly capture leads across every channel (forms, calls, emails, ads).
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Automatically qualify leads by relevance, budget, or priority.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Route leads to the right sales rep in real time.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Trigger personalized follow-ups so no opportunity goes cold.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Provide managers with live dashboards showing pipeline health.
                </li>
              </ul>
            </section>

            {/* ROI Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">ROI Potential of Lead Automation</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Businesses that automate lead management consistently see measurable gains:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">7×</div>
                  <p className="text-gray-700"><strong>Faster response times:</strong> Responding to new inquiries in under 5 minutes can improve contact and qualification likelihood by up to 7×.</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">391%</div>
                  <p className="text-gray-700"><strong>Higher conversions:</strong> Immediate responses within the first minute have shown up to 391% higher conversion rates.</p>
                </div>
                
                <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                  <div className="text-3xl font-bold text-red-600 mb-2">8×</div>
                  <p className="text-gray-700"><strong>Massive opportunity loss when delayed:</strong> Delaying follow-up by just five minutes can reduce conversion odds 8-fold.</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-2">$5.44</div>
                  <p className="text-gray-700"><strong>Better ROI from automation tools:</strong> Marketing automation returns $5.44 for every $1 spent over the first three years, with many businesses recouping their investment in under six months.</p>
                </div>
              </div>
            </section>

            {/* Sources Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                📚 Sources & Further Reading
              </h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <a 
                      href="https://superagi.com/from-minutes-to-seconds-the-impact-of-speed-to-lead-automation-on-customer-experience-and-revenue-growth/?utm_source=chatgpt.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                    >
                      Why quick follow-up matters – SuperAGI Research <ExternalLink className="h-4 w-4" />
                    </a>
                  </h4>
                  <p className="text-gray-600">Rapid response vastly increases contact and qualification odds.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <a 
                      href="https://www.plauti.com/blog/why-speed-to-lead-matters-and-how-you-can-improve-it?utm_source=chatgpt.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 flex items-center gap-2"
                    >
                      Conversion boost in the "Platinum Minute" – Plauti <ExternalLink className="h-4 w-4" />
                    </a>
                  </h4>
                  <p className="text-gray-600">Reaching out within a minute can deliver nearly 4× higher conversions.</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <a 
                      href="https://www.plauti.com/blog/why-speed-to-lead-matters-and-how-you-can-improve-it?utm_source=chatgpt.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-800 flex items-center gap-2"
                    >
                      The steep cost of delay – Plauti <ExternalLink className="h-4 w-4" />
                    </a>
                  </h4>
                  <p className="text-gray-600">Waiting more than five minutes can cause conversion odds to plummet by 8×.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <a 
                      href="https://www.comosoft.us/articles/the-roi-of-investing-in-marketing-automation-software/?utm_source=chatgpt.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 flex items-center gap-2"
                    >
                      Automation ROI – Comosoft <ExternalLink className="h-4 w-4" />
                    </a>
                  </h4>
                  <p className="text-gray-600">Marketing automation delivers $5.44 back for every $1 invested, often in under six months.</p>
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
                  A mid-sized construction company implemented our lead automation system. Previously, new job requests sat in inboxes for hours — sometimes days — before being followed up. With automation:
                </p>
                
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Leads are captured instantly from web forms and phone logs.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    High-value projects are routed directly to senior estimators.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Every prospect receives an immediate, personalized acknowledgment.
                  </li>
                </ul>
                
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">
                    <strong>Result:</strong> 40+ administrative hours saved monthly and a 20% increase in closed projects.
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
                <h2 className="text-3xl font-bold text-gray-900">Deep Dive: The Future of Lead Management</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 mb-6">
                <p className="mb-6">
                  As industries become more competitive, lead automation is no longer optional. AI and workflow automation are reshaping how businesses acquire and retain customers. Companies that adopt early will:
                </p>
                
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Build stronger pipelines with less effort.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Outpace competitors by responding in minutes, not days.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Create scalable systems that grow alongside their business.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-interactive-primary to-interactive-accent rounded-2xl shadow-lg p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Stop Losing Leads?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Don't let opportunities slip away. See how lead automation can transform your business operations and free your team to focus on closing deals.
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

export default Leads;