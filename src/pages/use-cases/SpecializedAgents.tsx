import Navigation from "@/components/Navigation";
import { Helmet } from "react-helmet";
import { Bot, Workflow, Rocket, CheckCircle, TrendingUp, Users, Clock, DollarSign, BookOpen, ExternalLink } from "lucide-react";
import { useEffect } from "react";

// Global declaration for Calendly
declare global {
  interface Window {
    Calendly: any;
  }
}

const SpecializedAgents = () => {
  useEffect(() => {
    // Load Calendly widget
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
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/flowmatrix/30min' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Specialized AI Agents | FlowMatrix AI</title>
        <meta name="description" content="Custom AI agents for business automation. Digital workforce solutions with specialized AI agents, AI employee ROI, and intelligent business automation." />
        <meta name="keywords" content="specialized AI agents, AI business automation, digital workforce, AI employee ROI" />
      </Helmet>
      
      <div className="bg-gradient-to-br from-surface-light to-surface-lighter min-h-screen">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-content-primary mb-6 animate-slide-up">
              Specialized AI Agents: Your Business's Personal <span className="bg-gradient-to-r from-interactive-primary to-interactive-accent bg-clip-text text-transparent">Digital Workforce</span>
            </h1>
            <p className="text-xl text-content-secondary max-w-4xl mx-auto leading-relaxed">
              Transform your business with AI agents that think, learn, and act on your behalf—like having a digital employee who never sleeps.
            </p>
          </div>

          <div className="space-y-20">
            {/* What is an AI Agent Section */}
            <section className="bg-surface-primary rounded-3xl shadow-lg p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full bg-interactive-primary/10">
                  <Bot className="h-8 w-8 text-interactive-primary" />
                </div>
                <h2 className="text-3xl font-bold text-content-primary">What is an AI Agent? (Explained Simply)</h2>
              </div>
              
              <div className="text-lg text-content-secondary space-y-6 leading-relaxed">
                <p>
                  An <strong className="text-content-primary">AI Agent</strong> is more than just a chatbot or automation script. It's a digital employee designed to <strong className="text-content-primary">think, learn, and act</strong> on your behalf.
                </p>
                
                <ul className="space-y-4 pl-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-interactive-primary mt-1 flex-shrink-0" />
                    <span>Technically speaking, an AI Agent combines <strong className="text-content-primary">AI models, workflows, and integrations</strong> to understand context, process data, and take action.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-interactive-primary mt-1 flex-shrink-0" />
                    <span>In plain terms, it's like having a staff member who never sleeps, knows every detail of your business, and can execute tasks faster and more accurately than any human.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-interactive-primary mt-1 flex-shrink-0" />
                    <span>Unlike off-the-shelf tools, AI Agents are <strong className="text-content-primary">specialized</strong>: they are designed for your business, trained on your workflows, and focused on solving your specific challenges.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* How We Build Section */}
            <section className="bg-surface-primary rounded-3xl shadow-lg p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full bg-interactive-primary/10">
                  <Workflow className="h-8 w-8 text-interactive-primary" />
                </div>
                <h2 className="text-3xl font-bold text-content-primary">How We Build Your AI Agent</h2>
              </div>
              
              <p className="text-lg text-content-secondary mb-8">
                Every agent is unique. We design yours using a <strong className="text-content-primary">three-step process</strong>:
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-interactive-primary/5 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-interactive-primary mb-3">1.</div>
                  <h3 className="text-xl font-bold text-content-primary mb-3">Map Out Pain Points</h3>
                  <p className="text-content-secondary">We start by identifying the bottlenecks in your business (missed leads, slow reporting, repetitive admin tasks, etc.).</p>
                </div>
                <div className="bg-interactive-primary/5 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-interactive-primary mb-3">2.</div>
                  <h3 className="text-xl font-bold text-content-primary mb-3">Design Targeted Solutions</h3>
                  <p className="text-content-secondary">We outline the workflows and tasks your AI Agent will handle, ensuring it integrates seamlessly into your operations.</p>
                </div>
                <div className="bg-interactive-primary/5 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-interactive-primary mb-3">3.</div>
                  <h3 className="text-xl font-bold text-content-primary mb-3">Build & Personalize the Agent</h3>
                  <p className="text-content-secondary">We create a specialized AI Agent that reflects your company knowledge, industry needs, and brand voice.</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg text-content-secondary">
                  The result? A digital team member that <strong className="text-content-primary">understands your business like no one else</strong>.
                </p>
              </div>
            </section>

            {/* Game-Changer Section */}
            <section className="bg-surface-primary rounded-3xl shadow-lg p-12">
              <h2 className="text-3xl font-bold text-content-primary mb-8">Why AI Agents Are a Game-Changer</h2>
              
              <p className="text-lg text-content-secondary mb-8">
                Think of your Specialized AI Agent as:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-interactive-primary mt-1" />
                    <div>
                      <strong className="text-content-primary">An employee with unlimited expertise</strong>
                      <p className="text-content-secondary">— trained on your industry, your company, and your processes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <TrendingUp className="h-6 w-6 text-interactive-primary mt-1" />
                    <div>
                      <strong className="text-content-primary">Multiple full-time staff in one</strong>
                      <p className="text-content-secondary">— capable of handling dozens of tasks simultaneously, across departments.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-interactive-primary mt-1" />
                    <div>
                      <strong className="text-content-primary">Faster than any human</strong>
                      <p className="text-content-secondary">— executing workflows in seconds, not hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <DollarSign className="h-6 w-6 text-interactive-primary mt-1" />
                    <div>
                      <strong className="text-content-primary">Cost-effective</strong>
                      <p className="text-content-secondary">— delivering the productivity of an entire team for a fraction of the cost.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-interactive-primary/10 rounded-2xl">
                <p className="text-lg text-content-primary font-semibold text-center">
                  This is the <strong>definition of operational leverage</strong>: more output, fewer resources, and exponential scalability.
                </p>
              </div>
            </section>

            {/* Competitive Edge Section */}
            <section className="bg-surface-primary rounded-3xl shadow-lg p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full bg-interactive-primary/10">
                  <Rocket className="h-8 w-8 text-interactive-primary" />
                </div>
                <h2 className="text-3xl font-bold text-content-primary">Competitive Edge for Small and Mid-Sized Businesses</h2>
              </div>
              
              <div className="text-lg text-content-secondary space-y-6">
                <p>
                  Large enterprises are already experimenting with AI — but their size is also their weakness. Implementation is slow, guardrails are heavy, and bureaucracy delays adoption.
                </p>
                
                <p>
                  Small and mid-sized businesses, on the other hand, can <strong className="text-content-primary">act now</strong>:
                </p>
                
                <ul className="space-y-3 pl-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-interactive-primary mt-1 flex-shrink-0" />
                    <span>Move faster than industry giants.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-interactive-primary mt-1 flex-shrink-0" />
                    <span>Implement affordable, customized AI Agents today.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-interactive-primary mt-1 flex-shrink-0" />
                    <span>Build experience with AI-driven workflows before large competitors catch up.</span>
                  </li>
                </ul>
                
                <div className="bg-interactive-accent/10 rounded-2xl p-6 mt-8">
                  <p className="font-semibold text-content-primary mb-3">When big firms eventually roll out their own agents, they'll be:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-interactive-accent">•</span>
                      <span><strong>Expensive</strong> – packaged as premium enterprise solutions.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-interactive-accent">•</span>
                      <span><strong>Exclusive</strong> – designed to give market leaders even more power.</span>
                    </li>
                  </ul>
                </div>
                
                <p className="font-semibold text-content-primary">
                  That's why <strong>now is the window</strong> for small and mid-sized businesses to gain an edge. By implementing early, you set your business on a trajectory of growth while larger competitors are still figuring out their strategy.
                </p>
              </div>
            </section>

            {/* ROI Section */}
            <section className="bg-surface-primary rounded-3xl shadow-lg p-12">
              <h2 className="text-3xl font-bold text-content-primary mb-8">ROI and Impact of Specialized AI Agents</h2>
              
              <p className="text-lg text-content-secondary mb-8">
                Businesses that adopt AI Agents experience:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-interactive-primary/5 rounded-2xl p-6">
                    <div className="text-3xl font-bold text-interactive-primary mb-2">60–80%</div>
                    <p className="text-content-secondary"><strong className="text-content-primary">less time wasted</strong> on repetitive administrative work.</p>
                  </div>
                  <div className="bg-interactive-primary/5 rounded-2xl p-6">
                    <div className="text-3xl font-bold text-interactive-primary mb-2">40+</div>
                    <p className="text-content-secondary"><strong className="text-content-primary">hours saved monthly</strong> per employee, freeing time for strategic initiatives.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-interactive-primary/5 rounded-2xl p-6">
                    <div className="text-3xl font-bold text-interactive-primary mb-2">50%</div>
                    <p className="text-content-secondary"><strong className="text-content-primary">faster client response times</strong>, boosting satisfaction and retention.</p>
                  </div>
                  <div className="bg-interactive-primary/5 rounded-2xl p-6">
                    <div className="text-3xl font-bold text-interactive-primary mb-2">Lower</div>
                    <p className="text-content-secondary"><strong className="text-content-primary">overhead costs</strong>, by replacing multiple manual tasks with one agent.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-interactive-primary/10 rounded-2xl text-center">
                <p className="text-lg text-content-primary font-semibold">
                  Your AI Agent becomes a <strong>profit center</strong>, not a cost — delivering measurable ROI within months.
                </p>
              </div>
            </section>

            {/* Research Section */}
            <section className="bg-surface-primary rounded-3xl shadow-lg p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full bg-interactive-primary/10">
                  <BookOpen className="h-8 w-8 text-interactive-primary" />
                </div>
                <h2 className="text-3xl font-bold text-content-primary">Relevant Research</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-interactive-primary pl-6">
                  <h3 className="text-xl font-bold text-content-primary mb-2 flex items-center gap-2">
                    McKinsey Global AI Adoption Report
                    <ExternalLink className="h-5 w-5 text-interactive-primary" />
                  </h3>
                  <p className="text-content-secondary">
                    Companies that adopt AI early see productivity gains of <strong className="text-content-primary">20–30% across functions</strong>.
                  </p>
                </div>
                
                <div className="border-l-4 border-interactive-primary pl-6">
                  <h3 className="text-xl font-bold text-content-primary mb-2 flex items-center gap-2">
                    Harvard Business Review – AI as a Strategic Advantage
                    <ExternalLink className="h-5 w-5 text-interactive-primary" />
                  </h3>
                  <p className="text-content-secondary">
                    AI systems enable small firms to compete with much larger competitors by scaling output without scaling costs.
                  </p>
                </div>
                
                <div className="border-l-4 border-interactive-primary pl-6">
                  <h3 className="text-xl font-bold text-content-primary mb-2 flex items-center gap-2">
                    PwC Future of Work Report
                    <ExternalLink className="h-5 w-5 text-interactive-primary" />
                  </h3>
                  <p className="text-content-secondary">
                    AI-driven automation is projected to contribute <strong className="text-content-primary">$15.7 trillion to the global economy by 2030</strong>, with the biggest gains going to early adopters.
                  </p>
                </div>
              </div>
            </section>

            {/* Real-World Example */}
            <section className="bg-interactive-primary/5 rounded-3xl shadow-lg p-12">
              <h2 className="text-3xl font-bold text-content-primary mb-8">A Real-World Example</h2>
              
              <div className="text-lg text-content-secondary space-y-6">
                <p>
                  A mid-sized marketing agency integrated a Specialized AI Agent trained on client data, campaign workflows, and reporting systems. Instead of manually preparing weekly reports, answering client FAQs, and triaging requests, the agent handled it all.
                </p>
                
                <div className="bg-surface-primary rounded-2xl p-6">
                  <p className="text-xl font-bold text-content-primary mb-3">Result:</p>
                  <p className="text-content-secondary">
                    Account managers saved <strong className="text-content-primary">45+ hours per month</strong>, client satisfaction increased, and the agency was able to scale without adding headcount.
                  </p>
                </div>
              </div>
            </section>

            {/* Future Section */}
            <section className="bg-surface-primary rounded-3xl shadow-lg p-12">
              <h2 className="text-3xl font-bold text-content-primary mb-8">Deep Dive: The Future of AI Agents</h2>
              
              <div className="text-lg text-content-secondary space-y-6">
                <p>
                  AI Agents aren't a distant vision — they're here now. The businesses that adopt them today will:
                </p>
                
                <ul className="space-y-3 pl-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-interactive-primary mt-1 flex-shrink-0" />
                    <span>Operate leaner, with fewer overhead costs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-interactive-primary mt-1 flex-shrink-0" />
                    <span>Deliver faster, more personalized service.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-interactive-primary mt-1 flex-shrink-0" />
                    <span>Scale growth without scaling headcount.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-interactive-primary mt-1 flex-shrink-0" />
                    <span>Secure a competitive advantage while others hesitate.</span>
                  </li>
                </ul>
                
                <p className="font-semibold text-content-primary">
                  In the near future, these agents will become standard — and extremely expensive. By implementing now, you can capitalize on the <strong>implementation lag</strong> and grow while competitors are stuck in planning mode.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-interactive-primary to-interactive-accent rounded-3xl shadow-lg p-12 text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Ready to Hire Your First AI Agent?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                This is your opportunity to put a <strong>digital employee</strong> to work — one that never sleeps, knows everything about your business, and delivers results at scale.
              </p>
              <p className="text-lg mb-8 opacity-90">
                See how a Specialized AI Agent can give your business the competitive edge it needs.
              </p>
              <button 
                onClick={openCalendly}
                className="bg-white text-interactive-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book Your Free Automation Audit
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecializedAgents;