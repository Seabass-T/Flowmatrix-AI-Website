import Navigation from "@/components/Navigation";
import { Helmet } from "react-helmet";
import { UserCheck, Headphones, TrendingUp, Users, MessageCircle, Shield, Clock, Star } from "lucide-react";

const ClientManagement = () => {
  return (
    <>
      <Helmet>
        <title>Client Management Automation | FlowMatrix AI</title>
        <meta name="description" content="Automate client management, customer support, dispute resolution, and client satisfaction processes with AI-powered automation solutions." />
        <meta name="keywords" content="client management automation, customer support automation, dispute resolution AI, client satisfaction automation" />
      </Helmet>
      
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <Navigation />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Client Management: <span className="bg-gradient-to-r from-interactive-primary to-interactive-accent bg-clip-text text-transparent">Building Stronger Relationships with Automation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nurture relationships, handle concerns proactively, and ensure long-term satisfaction with automated client management systems.
            </p>
          </header>

          <div className="space-y-16">
            {/* Why Client Management Matters Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <UserCheck className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Client Management Matters to Every Business</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Clients are the lifeblood of your company. Effective client management means more than just closing a deal — it's about <strong>nurturing relationships, handling concerns proactively, and ensuring long-term satisfaction</strong>.
                </p>
                <p>
                  The problem? As businesses scale, requests and concerns multiply. Without the right systems, client communication becomes disorganized, disputes escalate, and service quality drops.
                </p>
              </div>
            </section>

            {/* Challenge Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Challenge of Manual Client Management</h2>
              </div>
              
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Client requests and concerns are lost in messy inboxes or spreadsheets.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Delayed responses create frustration and erode trust.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Disputes escalate when issues aren't tracked or resolved quickly.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Businesses struggle to provide consistent service across multiple touchpoints.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Teams spend more time reacting to problems than preventing them.
                </li>
              </ul>
            </section>

            {/* Automation Power Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Power of Automating Client Management</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 mb-6">
                <p>
                  Automation empowers businesses to provide faster, more consistent, and proactive client support. With AI-driven workflows, companies can:
                </p>
              </div>
              
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Capture, track, and prioritize client requests automatically.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Route concerns to the right person or department instantly.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Send automated updates so clients never feel ignored.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Flag potential disputes early for proactive resolution.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Maintain a full history of interactions for context and accountability.
                </li>
              </ul>
            </section>

            {/* ROI Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">ROI Potential of Client Management Automation</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Organizations that automate client management typically see:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">40–60%</div>
                  <p className="text-gray-700"><strong>faster response times</strong> to client requests.</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
                  <p className="text-gray-700"><strong>fewer disputes</strong>, thanks to better tracking and proactive communication.</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-2">30%</div>
                  <p className="text-gray-700"><strong>higher client satisfaction scores</strong>, with consistent follow-through.</p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                  <div className="text-3xl font-bold text-orange-600 mb-2">Stronger</div>
                  <p className="text-gray-700"><strong>retention rates</strong>, reducing churn and increasing lifetime value.</p>
                </div>
              </div>
            </section>

            {/* Real-World Example */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">A Real-World Example</h2>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                <p className="text-lg text-gray-700 mb-6">
                  A professional services firm adopted client management automation to route incoming concerns, track resolution status, and keep clients updated automatically.
                </p>
                
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">
                    <strong>Result:</strong> Average response time dropped by 55%, disputes decreased by nearly half, and client satisfaction scores rose to their highest levels.
                  </p>
                </div>
              </div>
            </section>

            {/* Deep Dive Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Deep Dive: The Future of Client Management</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 mb-6">
                <p className="mb-6">
                  Client expectations are higher than ever. They want <strong>fast, transparent, and proactive communication</strong>. Businesses that automate client management will:
                </p>
                
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Prevent disputes before they start.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Ensure every request is acknowledged and tracked.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Build trust through reliable, consistent service.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Increase client loyalty and lifetime value.
                  </li>
                </ul>
                
                <p className="mt-6">
                  The future of growth lies in <strong>automating client success, not just client acquisition</strong>.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-interactive-primary to-interactive-accent rounded-2xl shadow-lg p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Strengthen Client Relationships?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Stop letting requests and concerns fall through the cracks. See how client management automation can protect your reputation and keep your customers satisfied.
              </p>
              <a 
                href="https://calendly.com/flowmatrix/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-white text-interactive-primary rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book a Free Audit
              </a>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default ClientManagement;