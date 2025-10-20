import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Target, TrendingUp, Zap, Users, Bot, ArrowRight, MapPin, Building, Home, Wrench, Calendar, DollarSign, BarChart3, Shield, Star, FileText, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import ICPToggle, { ICPType } from "@/components/homepage/ICPToggle";
import HeroWithICP from "@/components/homepage/HeroWithICP";
import ICPPainPointSection from "@/components/homepage/ICPPainPointSection";
import ProofSection from "@/components/homepage/ProofSection";
import FounderBadge from "@/components/homepage/FounderBadge";
import OfferFunnelGraphic from "@/components/homepage/OfferFunnelGraphic";
import LeadMagnetModal from "@/components/homepage/LeadMagnetModal";

// Extend the Window interface to include Calendly
declare global {
  interface Window {
    Calendly: any;
  }
}

const Index = () => {
  const [selectedICP, setSelectedICP] = useState<ICPType>("construction");
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Cleanup function
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, []);

  // Lead Magnet Modal Trigger (PRD Section 4.10)
  useEffect(() => {
    // Add global helper function for testing
    (window as any).resetLeadMagnet = () => {
      localStorage.removeItem("leadMagnetSeen");
      setShowLeadMagnet(false);
      console.log("✅ Lead magnet reset! Scroll down to trigger the modal again.");
    };

    // Check if user has already seen the modal
    const hasSeenModal = localStorage.getItem("leadMagnetSeen");
    if (hasSeenModal) {
      console.log("Lead magnet modal already seen, not showing again");
      console.log("💡 To test again, run: resetLeadMagnet()");
      return;
    }

    let triggered = false;

    const handleScroll = () => {
      if (triggered) return;

      // Get hero section height (approximate if element not found)
      const heroElement = document.getElementById("hero-section");
      const heroHeight = heroElement?.offsetHeight || 800;

      // Trigger at 60% past the hero section
      const scrollTriggerPoint = heroHeight * 0.6;

      console.log(`Scroll position: ${window.scrollY}px, Trigger point: ${scrollTriggerPoint}px`);

      if (window.scrollY > scrollTriggerPoint) {
        console.log("Triggering lead magnet modal!");
        triggered = true;
        setShowLeadMagnet(true);
        localStorage.setItem("leadMagnetSeen", "true");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Initial check in case user is already scrolled
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Homepage JSON-LD – LocalBusiness + Services
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FlowMatrix AI",
    "image": "https://www.flowmatrixai.com/logo.png",
    "@id": "https://www.flowmatrixai.com",
    "url": "https://www.flowmatrixai.com",
    "telephone": "+1‑647‑555‑1234",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Example Street",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "postalCode": "M5H2N2",
      "addressCountry": "CA"
    },
    "areaServed": [
      { "@type": "City", "name": "Toronto" },
      { "@type": "AdministrativeArea", "name": "Greater Toronto Area" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "serviceOffered": [
      {
        "@type": "Service",
        "name": "Trade Automation Consultation",
        "description": "Free line-by-line workflow consultation for trade businesses in Toronto & GTA."
      },
      {
        "@type": "Service",
        "name": "Trade Automation Audit",
        "description": "Pay‑What‑You‑Think‑it's‑Worth 1‑month audit for trade companies (HVAC, plumbing, electrical, construction)."
      },
      {
        "@type": "Service",
        "name": "Automation Partnership (Implementation & Scale)",
        "description": "Post‑audit implementation & scaling services for trades, real estate & home improvement firms."
      }
    ],
    "sameAs": ["https://www.linkedin.com/company/flowmatrix-ai"]
  };

  const navigate = useNavigate();
  const SHOW_SOCIAL_PROOF = false;

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/flowmatrixai-info/consultation-call'
      });
    }
  };

  // Construction Pain Points Data
  const constructionPainPoints = [
    {
      icon: DollarSign,
      title: "Job Cost Overruns",
      description: "Poor cost tracking and invoice delays lead to budget overruns and reduced profitability on every job."
    },
    {
      icon: Calendar,
      title: "Scheduling Chaos",
      description: "Manual crew scheduling leads to gaps, idle time, missed deadlines, and frustrated clients."
    },
    {
      icon: FileText,
      title: "Invoice Delays",
      description: "Manual invoicing and approval bottlenecks slow your payment cycles and hurt cash flow."
    }
  ];

  // Home Service Pain Points Data
  const homeServicePainPoints = [
    {
      icon: Clock,
      title: "Dispatch Lag",
      description: "Manual scheduling and job assignment wastes hours that could be spent serving more customers."
    },
    {
      icon: Users,
      title: "Technician Idle Time",
      description: "Poor route optimization leaves technicians idle instead of maximizing billable hours."
    },
    {
      icon: Phone,
      title: "Customer Wait Times",
      description: "Delayed response times mean customers book with competitors who respond faster."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Toronto AI Automation for Trade, Real Estate & Home Improvement | FlowMatrix AI</title>
        <meta name="description" content="FlowMatrix AI helps trade, residential, commercial and real estate businesses in Toronto & GTA save 120+ hours/month with AI automation. Book your free consultation today." />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      
      <div className="bg-surface-light min-h-screen">
      <Navigation />

      {/* Hero Section with ICP Toggle */}
      <section id="hero-section" className="relative overflow-hidden py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ICPToggle selectedICP={selectedICP} onToggle={setSelectedICP} />
          <HeroWithICP icp={selectedICP} openCalendly={openCalendly} />
        </div>
      </section>

      {/* Offer Funnel Graphic */}
      <OfferFunnelGraphic />

      {/* Construction Pain Points Section */}
      <ICPPainPointSection
        icp="construction"
        heading="We Fix These Problems for Construction Contractors"
        painPoints={constructionPainPoints}
        ctaText="See Construction Solutions"
        ctaLink="/construction"
        backgroundColor="bg-blue-50 dark:bg-slate-800"
        iconGradient="bg-blue-600"
      />

      {/* Home Service Pain Points Section */}
      <ICPPainPointSection
        icp="home-service"
        heading="We Fix These Problems for Home Service Providers"
        painPoints={homeServicePainPoints}
        ctaText="See Home Service Solutions"
        ctaLink="/home-service"
        backgroundColor="bg-green-50 dark:bg-slate-800"
        iconGradient="bg-green-600"
      />

      {/* Proof Section - Real Metrics */}
      <ProofSection openCalendly={openCalendly} />

      {/* Founder Badge */}
      <FounderBadge />

      {/* Trust Signals Bar */}
      <section className="py-12 bg-surface-dark text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-interactive-secondary animate-pulse-glow">120+</div>
              <div className="text-gray-300">Hours Saved Monthly</div>
            </div>
            <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-interactive-secondary animate-pulse-glow">ROI</div>
              <div className="text-gray-300">Backed Deliverables</div>
            </div>
            <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-interactive-accent animate-pulse-glow">Toronto</div>
              <div className="text-gray-300">& GTA Service Area</div>
            </div>
            <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-interactive-accent animate-pulse-glow">Trade</div>
              <div className="text-gray-300">Real Estate | Home Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 4-Step Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              How Our{" "}
              <span className="text-blue-600">
                Audit Process Works
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Our proven 4-step process transforms your business operations across trade, real estate, and home improvement verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group animate-fade-in bg-card">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-blue-600 transition-colors">1. Identify</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Analyze your current workflows and identify automation opportunities</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Property scheduling inefficiencies</li>
                  <li>• Trade service dispatching</li>
                  <li>• Renovation project coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group animate-fade-in bg-card">
              <CardHeader>
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-green-600 transition-colors">2. Quantify</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Calculate time savings, cost reductions, and ROI potential</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Lead qualification automation</li>
                  <li>• Invoice & payment processing</li>
                  <li>• Customer communication flows</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group animate-fade-in bg-card">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-blue-600 transition-colors">3. Automate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Implement custom AI solutions for your specific vertical</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• MLS integration for realtors</li>
                  <li>• Trade job scheduling systems</li>
                  <li>• Home improvement CRM flows</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group animate-fade-in bg-card">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-blue-600 transition-colors">4. Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Optimize and expand automation across your entire operation</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Multi-property management</li>
                  <li>• Fleet & crew optimization</li>
                  <li>• Cross-project coordination</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-surface-light dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="text-gray-900 dark:text-white">What You'll</span>{" "}
              <span className="text-blue-600">
                Receive
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              After your consultation, receive a comprehensive audit with vertical-specific insights and actionable recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg text-card-foreground group-hover:text-green-600 transition-colors">ROI Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Detailed breakdown of potential savings and revenue increases specific to your trade or real estate operations</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg text-card-foreground group-hover:text-blue-600 transition-colors">Benchmarking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Industry comparisons showing how automation can give you competitive advantages in Toronto's market</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg text-card-foreground group-hover:text-blue-600 transition-colors">Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Step-by-step implementation plan prioritized by impact and tailored to your business type</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg text-card-foreground group-hover:text-blue-600 transition-colors">Workflow Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Custom automation workflows designed for your specific vertical - trade dispatching, property management, or home improvement coordination</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center animate-scale-in">
            <div className="bg-card border border-border rounded-lg p-6 max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg text-card-foreground mb-2">
                <span className="font-semibold text-interactive-primary">Pay-What-You-Think-It's-Worth Model:</span>
              </p>
              <p className="text-muted-foreground mb-4">
                After receiving your comprehensive audit, you decide what it's worth to you. No upfront fees, no pressure - just results-driven value.
              </p>
              <p className="text-sm text-muted-foreground">
                Want to stay updated on the latest automation trends? <Link to="/newsletter" className="text-interactive-primary hover:text-interactive-primary-hover underline">Subscribe to our weekly AI newsletter</Link> for Toronto businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Pricing Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Why{" "}
              <span className="text-blue-600">
                Pay-What-You-Think-It's-Worth Audit?
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-card-foreground mb-4">How can FlowMatrix help my real estate business in Toronto?</h3>
                <p className="text-muted-foreground mb-4">
                  We specialize in automating property management workflows, lead qualification, client communication, and MLS integration. Our Toronto-based team understands the local market dynamics and compliance requirements.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-blue-600">Process:</strong> Free consultation → Custom audit → You pay what you think it's worth → Implementation (if you choose to proceed)
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-card-foreground mb-4">What automation solutions work for trade businesses in the GTA?</h3>
                <p className="text-muted-foreground mb-4">
                  We automate job scheduling, crew dispatching, invoice processing, customer follow-ups, and equipment tracking. Perfect for plumbing, electrical, HVAC, and general contracting businesses.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-green-600">Our guarantee:</strong> We're so confident in our audit value that you only pay after seeing the results. Most clients find 10x+ ROI potential in their first audit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-card-foreground mb-4">How does automation help home improvement companies scale?</h3>
                <p className="text-muted-foreground mb-4">
                  We streamline project coordination, supplier management, customer communication, and quality control processes. Ideal for renovation companies, landscapers, and home service providers.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-blue-600">Fair audit pricing:</strong> Our consultation is free, and you pay what you think the audit is worth after receiving it. Implementation and systems development are separately estimated based on your specific requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Signals & Social Proof */}
      {SHOW_SOCIAL_PROOF && (
      <section className="py-20 bg-surface-light dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="text-gray-900 dark:text-white">Trusted by</span>{" "}
              <span className="text-blue-600">
                Toronto Businesses
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-surface-dark">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-100 mb-6 italic">
                  "FlowMatrix automated our property showing scheduling and follow-up process. We're now booking 40% more viewings with half the manual work. Game changer for our Toronto real estate business."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    MK
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-100">Mike K.</div>
                    <div className="text-sm text-gray-300">Real Estate Agent, Toronto</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-surface-dark">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-100 mb-6 italic">
                  "Our plumbing business was drowning in scheduling calls. Their AI system now handles 80% of appointment bookings automatically. We've saved 15 hours per week and increased customer satisfaction."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    JS
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-100">John S.</div>
                    <div className="text-sm text-gray-300">GTA Plumbing Services</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-surface-dark">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-100 mb-6 italic">
                  "The renovation project coordination system they built tracks all our contractors, suppliers, and timelines automatically. We're completing projects 25% faster with better client communication."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    LC
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-100">Lisa C.</div>
                    <div className="text-sm text-gray-300">Home Renovation Co.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Industry Affiliations */}
          <div className="text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Industry Partnerships & Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <Building className="h-12 w-12 text-interactive-primary mb-2 group-hover:text-interactive-primary-hover transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Toronto Real Estate Board</span>
              </div>
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <Wrench className="h-12 w-12 text-interactive-secondary mb-2 group-hover:text-interactive-secondary-hover transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Ontario Trade Associations</span>
              </div>
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <Home className="h-12 w-12 text-interactive-accent mb-2 group-hover:text-interactive-accent-hover transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Home Improvement Council</span>
              </div>
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <Shield className="h-12 w-12 text-interactive-primary mb-2 group-hover:text-interactive-primary-hover transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">AI Ethics Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Final CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Save 120+ Hours Monthly?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-slide-up">
            Join Toronto & GTA businesses already automating their success. Get your free consultation and comprehensive audit - pay only what you think it's worth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button
              onClick={openCalendly}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Free Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-white/80 mt-6 text-sm animate-fade-in">
            ✓ No upfront fees ✓ Custom vertical analysis ✓ ROI-backed recommendations ✓ Toronto & GTA focused
          </p>
        </div>
      </section>
    </div>

    {/* Lead Magnet Modal */}
    <LeadMagnetModal
      isOpen={showLeadMagnet}
      onClose={() => setShowLeadMagnet(false)}
    />
    </>
  );
};

export default Index;
