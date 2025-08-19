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
      
      <div className="bg-background min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up">
              Client Management: <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Building Stronger Relationships with Automation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Nurture relationships, handle concerns proactively, and ensure long-term satisfaction with automated client management systems.
            </p>
          </div>

          {/* Why Client Management Matters Section */}
          <div className="bg-card rounded-2xl shadow-sm border p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <UserCheck className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Why Client Management Matters to Every Business</h2>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Clients are the lifeblood of your company. Effective client management means more than just closing a deal — it's about <strong className="text-foreground">nurturing relationships, handling concerns proactively, and ensuring long-term satisfaction</strong>.
              </p>
              <p>
                The problem? As businesses scale, requests and concerns multiply. Without the right systems, client communication becomes disorganized, disputes escalate, and service quality drops.
              </p>
            </div>
          </div>

          {/* Challenge Section */}
          <div className="bg-card rounded-2xl shadow-sm border p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-destructive/10 rounded-lg">
                <MessageCircle className="h-8 w-8 text-destructive" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">The Challenge of Manual Client Management</h2>
            </div>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                <span>Client requests and concerns are lost in messy inboxes or spreadsheets.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                <span>Delayed responses create frustration and erode trust.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                <span>Disputes escalate when issues aren't tracked or resolved quickly.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                <span>Businesses struggle to provide consistent service across multiple touchpoints.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                <span>Teams spend more time reacting to problems than preventing them.</span>
              </li>
            </ul>
          </div>

          {/* Automation Power Section */}
          <div className="bg-card rounded-2xl shadow-sm border p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">The Power of Automating Client Management</h2>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground mb-6">
              <p>
                Automation empowers businesses to provide faster, more consistent, and proactive client support. With AI-driven workflows, companies can:
              </p>
            </div>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span>Capture, track, and prioritize client requests automatically.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span>Route concerns to the right person or department instantly.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span>Send automated updates so clients never feel ignored.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span>Flag potential disputes early for proactive resolution.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span>Maintain a full history of interactions for context and accountability.</span>
              </li>
            </ul>
          </div>

          {/* ROI Section */}
          <div className="bg-card rounded-2xl shadow-sm border p-8 mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">ROI Potential of Client Management Automation</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Organizations that automate client management typically see:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-primary/5 rounded-xl p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-2">40-60%</div>
                <div className="text-sm text-muted-foreground">faster response times to client requests</div>
              </div>
              <div className="bg-secondary/5 rounded-xl p-6 text-center">
                <Shield className="h-8 w-8 text-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold text-secondary mb-2">50%</div>
                <div className="text-sm text-muted-foreground">fewer disputes with better tracking</div>
              </div>
              <div className="bg-primary/5 rounded-xl p-6 text-center">
                <Star className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-2">30%</div>
                <div className="text-sm text-muted-foreground">higher client satisfaction scores</div>
              </div>
              <div className="bg-secondary/5 rounded-xl p-6 text-center">
                <Users className="h-8 w-8 text-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold text-secondary mb-2">Higher</div>
                <div className="text-sm text-muted-foreground">retention rates and lifetime value</div>
              </div>
            </div>
          </div>

          {/* Real-World Example */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">A Real-World Example</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                A professional services firm adopted client management automation to route incoming concerns, track resolution status, and keep clients updated automatically.
              </p>
              <div className="bg-card rounded-lg p-6 border-l-4 border-primary">
                <p className="font-semibold text-foreground">
                  <strong>Result:</strong> Average response time dropped by 55%, disputes decreased by nearly half, and client satisfaction scores rose to their highest levels.
                </p>
              </div>
            </div>
          </div>

          {/* Deep Dive Section */}
          <div className="bg-card rounded-2xl shadow-sm border p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Deep Dive: The Future of Client Management</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Client expectations are higher than ever. They want <strong className="text-foreground">fast, transparent, and proactive communication</strong>. Businesses that automate client management will:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>Prevent disputes before they start.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>Ensure every request is acknowledged and tracked.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>Build trust through reliable, consistent service.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>Increase client loyalty and lifetime value.</span>
                </li>
              </ul>
              <p className="pt-4">
                The future of growth lies in <strong className="text-foreground">automating client success, not just client acquisition</strong>.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Strengthen Client Relationships?</h2>
            <p className="text-xl mb-8 opacity-90">
              Stop letting requests and concerns fall through the cracks. See how client management automation can protect your reputation and keep your customers satisfied.
            </p>
            <a 
              href="https://calendly.com/flowmatrix-ai/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-white text-primary rounded-lg hover:bg-gray-50 transition-all duration-200 hover:scale-105"
            >
              Book a Free Audit
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientManagement;