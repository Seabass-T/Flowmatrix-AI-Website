import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { CheckCircle, Clock, Target, TrendingUp, Zap, Users, Bot, ArrowRight, MapPin, Building, Home, Wrench, Calendar, DollarSign, BarChart3, Shield, Star, FileText, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import SimpleHero from "@/components/homepage/SimpleHero";
import CustomerJourneyDiagram from "@/components/homepage/CustomerJourneyDiagram";
import ICPPainPointSection from "@/components/homepage/ICPPainPointSection";
import DualPainPointSection from "@/components/homepage/DualPainPointSection";
import ProofSection from "@/components/homepage/ProofSection";
import FounderBadge from "@/components/homepage/FounderBadge";
import LogoBanner from "@/components/shared/LogoBanner";
import NewsletterSignupInline from "@/components/shared/NewsletterSignupInline";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Extend the Window interface to include Tally
declare global {
  interface Window {
    Tally?: any;
  }
}

const Index = () => {

  // Credibility logos - Static grid (4 logos centered)
  const credentialLogos = [
    {
      id: 'google-cloud',
      name: 'Google Cloud',
      imageUrl: '/logos/credibility/google-cloud.png',
      alt: 'Google Cloud Partner'
    },
    {
      id: 'n8n',
      name: 'n8n',
      imageUrl: '/logos/credibility/n8n.png',
      alt: 'n8n Badge'
    },
    {
      id: 'uli',
      name: 'Urban Land Institute',
      imageUrl: '/logos/credibility/uli.png',
      alt: 'Urban Land Institute Member'
    },
    {
      id: 'houzz',
      name: 'Houzz',
      imageUrl: '/logos/credibility/houzz.png',
      alt: 'Houzz Professional'
    }
  ];

  // Tech stack logos - Horizontal scrollable (no subheaders)
  const techStackLogos = [
    {
      id: 'openai',
      name: '',
      imageUrl: '/logos/tech-stack/openai 2.png',
      alt: 'OpenAI'
    },
    {
      id: 'anthropic',
      name: '',
      imageUrl: '/logos/tech-stack/anthropic.png',
      alt: 'Anthropic'
    },
    {
      id: 'gemini',
      name: '',
      imageUrl: '/logos/tech-stack/gemini.png',
      alt: 'Google Gemini'
    },
    {
      id: 'deepseek',
      name: '',
      imageUrl: '/logos/tech-stack/deepseek.png',
      alt: 'DeepSeek'
    },
    {
      id: 'perplexity',
      name: '',
      imageUrl: '/logos/tech-stack/perplexity.png',
      alt: 'Perplexity'
    },
    {
      id: 'openrouter',
      name: '',
      imageUrl: '/logos/tech-stack/openrouter.png',
      alt: 'OpenRouter'
    },
    {
      id: 'microsoft-office',
      name: '',
      imageUrl: '/logos/tech-stack/microsoft-office.png',
      alt: 'Microsoft Office'
    },
    {
      id: 'google-workplace',
      name: '',
      imageUrl: '/logos/tech-stack/google-workplace.png',
      alt: 'Google Workplace'
    },
    {
      id: 'slack',
      name: '',
      imageUrl: '/logos/tech-stack/slack.png',
      alt: 'Slack'
    },
    {
      id: 'notion',
      name: '',
      imageUrl: '/logos/tech-stack/notion.png',
      alt: 'Notion'
    },
    {
      id: 'airtable',
      name: '',
      imageUrl: '/logos/tech-stack/airtable.png',
      alt: 'Airtable'
    },
    {
      id: 'hubspot',
      name: '',
      imageUrl: '/logos/tech-stack/hubspot.png',
      alt: 'HubSpot'
    },
    {
      id: 'mongodb',
      name: '',
      imageUrl: '/logos/tech-stack/mongodb.png',
      alt: 'MongoDB'
    },
    {
      id: 'supabase',
      name: '',
      imageUrl: '/logos/tech-stack/supabase.png',
      alt: 'Supabase'
    },
    {
      id: 'pinecone',
      name: '',
      imageUrl: '/logos/tech-stack/pinecone.png',
      alt: 'Pinecone'
    },
    {
      id: 'vercel',
      name: '',
      imageUrl: '/logos/tech-stack/vercel.png',
      alt: 'Vercel'
    },
    {
      id: 'stripe',
      name: '',
      imageUrl: '/logos/tech-stack/stripe.png',
      alt: 'Stripe'
    },
    {
      id: 'square',
      name: '',
      imageUrl: '/logos/tech-stack/square.png',
      alt: 'Square'
    },
    {
      id: 'twilio',
      name: '',
      imageUrl: '/logos/tech-stack/twilio.png',
      alt: 'Twilio'
    },
    {
      id: 'telegram',
      name: '',
      imageUrl: '/logos/tech-stack/telegram.png',
      alt: 'Telegram'
    },
    {
      id: 'elleven-labs',
      name: '',
      imageUrl: '/logos/tech-stack/elleven-labs.png',
      alt: 'ElevenLabs'
    },
    {
      id: 'apify',
      name: '',
      imageUrl: '/logos/tech-stack/apify.png',
      alt: 'Apify'
    },
    {
      id: 'tavily',
      name: '',
      imageUrl: '/logos/tech-stack/tavily.png',
      alt: 'Tavily'
    },
    {
      id: 'canva',
      name: '',
      imageUrl: '/logos/tech-stack/canva.png',
      alt: 'Canva'
    },
    {
      id: 'copilot',
      name: '',
      imageUrl: '/logos/tech-stack/copilot.png',
      alt: 'GitHub Copilot'
    }
  ];

  // Load Tally widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const openTallyForm = () => {
    if (window.Tally) {
      window.Tally.openPopup('wMBOXE', {
        layout: 'modal',
        width: 600,
        autoClose: 3000,
      });
    } else {
      // Fallback to opening in new tab if Tally isn't loaded
      window.open('https://tally.so/r/wMBOXE', '_blank');
    }
  };

  // Homepage JSON-LD – Organization + Services
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FlowMatrix AI",
    "image": "https://www.flowmatrixai.com/logo.png",
    "@id": "https://www.flowmatrixai.com",
    "url": "https://www.flowmatrixai.com",
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" }
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
        "name": "Free 5-Day Diagnostic",
        "description": "Comprehensive workflow analysis for North American construction and trade businesses."
      },
      {
        "@type": "Service",
        "name": "2-Week Deep Audit",
        "description": "$300 deep dive audit with 100% satisfaction guarantee for construction, trade, and home service companies."
      },
      {
        "@type": "Service",
        "name": "Monthly Automation Retainer",
        "description": "Ongoing AI automation implementation and optimization ($2,000-$5,000/month)."
      }
    ],
    "sameAs": ["https://www.linkedin.com/company/flowmatrix-ai"]
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
        <title>AI Automation for North American Construction & Trade Businesses | FlowMatrix AI</title>
        <meta name="description" content="FlowMatrix AI helps construction and trade businesses across North America save 120+ hours/month with AI automation. $300 audit with 100% satisfaction guarantee. Get started today." />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="bg-white min-h-screen">
      <Navigation />

      {/* Hero Section - Simple, No ICP Toggle */}
      <section id="hero-section" className="relative overflow-hidden py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SimpleHero openTallyForm={openTallyForm} />
        </div>
      </section>

      {/* Customer Journey Diagram - 5 Steps with 2 Decision Points */}
      <CustomerJourneyDiagram openTallyForm={openTallyForm} />

      {/* Dual Pain Points Section - Side by Side on Desktop, Toggle on Mobile */}
      <DualPainPointSection
        constructionHeading="Common Challenges for Construction Contractors"
        constructionPainPoints={constructionPainPoints}
        homeServiceHeading="Common Challenges for Home Service Providers"
        homeServicePainPoints={homeServicePainPoints}
        ctaText="Get Started"
        onCtaClick={openTallyForm}
      />

      {/* Proof Section - Real Metrics */}
      <ProofSection openTallyForm={openTallyForm} />

      {/* Final CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Save 120+ Hours Monthly?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-slide-up">
            Join North American construction and trade businesses already automating their success. Start with our free 5-day diagnostic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button
              onClick={openTallyForm}
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-white/80 mt-6 text-sm animate-fade-in">
            ✓ Free 5-Day Diagnostic ✓ $300 Audit with 100% Guarantee ✓ Two Decision Points, Zero Risk
          </p>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="bg-white pt-16 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-8">
            Recognized By
          </p>
        </div>
      </section>
      <LogoBanner
        logos={credentialLogos}
        variant="static"
      />

      {/* Tech Stack Section */}
      <section className="bg-white pt-16 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-8">
            Tech Stack
          </p>
        </div>
      </section>
      <LogoBanner
        logos={techStackLogos}
        variant="scrollable"
        showMoreButton={true}
      />

      {/* Newsletter Signup - Below Tech Stack */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignupInline />
        </div>
      </section>

    </div>
    </>
  );
};

export default Index;
