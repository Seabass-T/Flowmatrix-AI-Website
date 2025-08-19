import Navigation from "@/components/Navigation";
import { Helmet } from "react-helmet";
import { Calculator, Database, Settings, TrendingUp, Building, Target, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const BusinessOperations = () => {
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
        <title>Business Operations: Automating the Backbone of Your Company | FlowMatrix AI Business Automation</title>
        <meta name="description" content="Automate your business operations with AI. Achieve 60-80% faster invoice processing and 90% fewer payroll errors. Business operations automation and financial projections AI." />
        <meta name="keywords" content="business operations automation, invoice automation, payroll automation, financial projections AI, operational efficiency" />
      </Helmet>
      
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <Navigation />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Business Operations: <span className="bg-gradient-to-r from-interactive-primary to-interactive-accent bg-clip-text text-transparent">Automating the Backbone of Your Company</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your business operations from manual bottleneck to automated efficiency with AI-powered management solutions.
            </p>
          </header>

          <div className="space-y-16">
            {/* Why Business Operations Matter Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Business Operations Matter to Every Organization</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Behind every customer-facing success lies <strong>strong operational management</strong>. From invoices and payroll to cost tracking and financial planning, operations keep a company running smoothly.
                </p>
                <p>
                  The problem? Manual processes slow everything down. Businesses lose time, make avoidable errors, and miss opportunities to analyze financial data that could guide growth.
                </p>
              </div>
            </section>

            {/* Challenge Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Challenge of Manual Operations Management</h2>
              </div>
              
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Invoices are delayed or misplaced, slowing cash flow.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Payroll errors lead to compliance risks and employee dissatisfaction.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Timesheets are often incomplete or inaccurate.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Financial data is scattered across spreadsheets and emails, making projections unreliable.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Staff waste hours reconciling costs instead of focusing on higher-value work.
                </li>
              </ul>
            </section>

            {/* Automation Power Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Power of Automating Business Operations</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 mb-6">
                <p>
                  Automation streamlines the core functions that keep your company stable and scalable. With integrated AI-driven workflows, businesses can:
                </p>
              </div>
              
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Generate and send invoices automatically.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Track costs and expenses in real time.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Process employee timesheets and calculate wages instantly.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Update financial sheets with live data feeds.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Build accurate financial projections without manual input.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Provide leadership with dashboards for full operational visibility.
                </li>
              </ul>
            </section>

            {/* ROI Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">ROI Potential of Operations Automation</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Organizations that automate their back-office processes typically achieve:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">60–80%</div>
                  <p className="text-gray-700"><strong>Faster invoice processing</strong> reducing late payments.</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
                  <p className="text-gray-700"><strong>Fewer payroll errors</strong> protecting compliance and employee trust.</p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                  <div className="text-3xl font-bold text-orange-600 mb-2">30–40%</div>
                  <p className="text-gray-700"><strong>Savings on administrative overhead</strong> by reducing manual financial work.</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Stronger</div>
                  <p className="text-gray-700"><strong>Financial forecasting accuracy</strong> enabling smarter, data-driven decisions.</p>
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
                  A construction company automated invoices, payroll, and cost tracking with integrated workflows. Instead of chasing late payments and manually updating spreadsheets, the system handled everything in real time.
                </p>
                
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">
                    <strong>Result:</strong> Invoice processing time dropped by 70%, payroll accuracy improved to 99.9%, and management gained full visibility into monthly expenses and projections.
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
                <h2 className="text-3xl font-bold text-gray-900">Deep Dive: The Future of Business Operations</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 mb-6">
                <p className="mb-6">
                  Financial operations are no longer just about keeping the books balanced—they are the foundation for scaling growth. Businesses that automate their operations will:
                </p>
                
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Improve cash flow and reduce payment delays.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Eliminate costly human errors in payroll and invoicing.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Gain accurate, real-time visibility into financial health.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Free teams to focus on growth, not paperwork.
                  </li>
                </ul>
                
                <p className="mt-6">
                  The companies that thrive tomorrow are the ones that <strong>automate the backbone of their business today</strong>.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-interactive-primary to-interactive-accent rounded-2xl shadow-lg p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Automate Your Operations?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Stop wasting time on manual processes. See how operations automation can streamline costs, improve accuracy, and give you full financial control.
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

export default BusinessOperations;