import Navigation from "@/components/Navigation";
import { Helmet } from "react-helmet";
import { Mail, Filter, Zap, TrendingUp, Building, Target, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmailManagement = () => {
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
        <title>Email Management: Streamlining Your Most Critical Channel | FlowMatrix AI Email Automation</title>
        <meta name="description" content="Automate your email management with AI. Achieve 50% faster response times and 30-40% reduction in inbox time. Email automation and inbox productivity solutions." />
        <meta name="keywords" content="email automation, AI email management, inbox automation, email productivity ROI, automated email responses" />
      </Helmet>
      
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <Navigation />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Email Management: <span className="bg-gradient-to-r from-interactive-primary to-interactive-accent bg-clip-text text-transparent">Streamlining Your Most Critical Channel</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your email from time-consuming burden to automated efficiency with AI-powered management solutions.
            </p>
          </header>

          <div className="space-y-16">
            {/* Why Email Still Matters Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Email Still Matters to Every Business</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Despite the rise of social media and instant messaging, <strong>email remains the backbone of business communication</strong>. From client updates and proposals to customer service and internal coordination, email is the most trusted and widely used professional channel.
                </p>
                <p>
                  The problem? Inboxes are overloaded. Staff spend hours each day sorting, responding, and manually managing communication—time that could be spent on higher-value work.
                </p>
              </div>
            </section>

            {/* Challenge Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                  <Filter className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Challenge of Manual Email Management</h2>
              </div>
              
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Employees spend <strong>2–3 hours per day</strong> reading and responding to emails.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Important client messages get buried under internal updates or spam.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Follow-ups are often forgotten, leading to lost opportunities.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Sorting, categorizing, and triaging emails consumes valuable administrative hours.
                </li>
              </ul>
            </section>

            {/* Automation Power Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Power of Automating Email Management</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 mb-6">
                <p>
                  Automation transforms how businesses handle email by reducing clutter and ensuring important messages are never missed. With AI-driven systems, companies can:
                </p>
              </div>
              
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Automatically classify and prioritize incoming emails.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Send personalized auto-replies for common inquiries.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Schedule and trigger follow-ups without manual effort.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Integrate email workflows with CRM and project management tools.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Create digest summaries so teams only see what matters.
                </li>
              </ul>
            </section>

            {/* ROI Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">ROI Potential of Email Automation</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Organizations that implement email automation consistently report:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                  <p className="text-gray-700"><strong>Faster response times</strong> to critical client inquiries.</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">30–40%</div>
                  <p className="text-gray-700"><strong>Reduction in time spent</strong> managing inboxes.</p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                  <div className="text-3xl font-bold text-orange-600 mb-2">Higher</div>
                  <p className="text-gray-700"><strong>Customer satisfaction scores</strong> with quicker, consistent replies.</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-2">20%</div>
                  <p className="text-gray-700"><strong>More deals closed</strong> as automated reminders reduce lost opportunities.</p>
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
                  A consulting firm automated its client inquiry emails, routing them into categories and triggering follow-ups automatically. Instead of manually managing a crowded inbox, consultants only received prioritized, relevant messages.
                </p>
                
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">
                    <strong>Result:</strong> Staff saved 25+ hours per month, response times improved by 60%, and client satisfaction scores rose significantly.
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
                <h2 className="text-3xl font-bold text-gray-900">Deep Dive: The Future of Email Management</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 mb-6">
                <p className="mb-6">
                  Email isn't going away—it's evolving. As inboxes grow, the only sustainable path is automation. Businesses that adopt AI-driven email systems will:
                </p>
                
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Reduce wasted time and labor costs.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Ensure no client communication slips through the cracks.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Build trust through fast, consistent, professional responses.
                  </li>
                </ul>
                
                <p className="mt-6">
                  The future of email management is <strong>smart, automated, and deeply integrated into business workflows</strong>.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-interactive-primary to-interactive-accent rounded-2xl shadow-lg p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Automate Your Inbox?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Stop letting email overload slow your business down. See how automation can streamline communication and free your team to focus on what matters most.
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

export default EmailManagement;