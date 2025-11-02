import { Helmet } from "react-helmet";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import SolutionCard from "@/components/SolutionCard";
import ClientSpotlightPreview from "@/components/ClientSpotlightPreview";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  const location = useLocation();
  // Refs for solution cards to enable scrolling
  const solutionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Function to scroll to a specific solution card
  const scrollToSolution = (solutionId: string) => {
    const element = solutionRefs.current[solutionId];
    if (element) {
      // Scroll with offset for fixed header
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Add a subtle highlight effect
      element.classList.add('ring-4', 'ring-primary', 'ring-opacity-50');
      setTimeout(() => {
        element.classList.remove('ring-4', 'ring-primary', 'ring-opacity-50');
      }, 2000);
    }
  };

  // Handle navigation from case study detail page
  useEffect(() => {
    const state = location.state as { scrollToSolution?: string } | null;
    if (state?.scrollToSolution) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        scrollToSolution(state.scrollToSolution!);
      }, 100);
    }
  }, [location]);
  // Real case studies with working demos
  const casStudies = [
    {
      id: "email-organizer",
      title: "Email Organizer and Summarizer",
      description: "AI-powered inbox management that automatically analyzes, categorizes, and prioritizes emails, then delivers comprehensive daily summaries with actionable insights. Eliminates hours spent manually sorting emails.",
      videoUrl: "https://www.youtube.com/embed/sZHSdYXZkp8",
      excalidrawUrl: "https://link.excalidraw.com/readonly/qYpvmz5dSgPTQTf7gZWF",
      timeSaved: "5-15 hours/week",
      costSavings: "Reduces missed opportunities",
      industry: "AI-Powered Inbox",
    },
    {
      id: "code-compass",
      title: "Code Compass",
      description: "AI-powered regulatory compliance assistant that instantly retrieves, interprets, and explains relevant bylaws, zoning regulations, and building codes through natural conversation. Eliminates hours spent searching regulatory documents.",
      videoUrl: "https://www.youtube.com/embed/rn6eMUp9wPg",
      excalidrawUrl: "https://link.excalidraw.com/readonly/teqCsIs2zAnvnzq18k3O",
      timeSaved: "8-20 hours/project",
      costSavings: "Prevents costly redesigns",
      industry: "Regulatory Compliance",
    },
    {
      id: "invoice-lifecycle-manager",
      title: "Invoice Lifecycle Manager",
      description: "AI-powered financial automation that handles everything from invoice creation to payment collection, intelligently monitoring client communications and providing timely follow-ups. Eliminates manual invoicing and payment tracking.",
      videoUrl: "https://www.youtube.com/embed/6_XnGTYzS7A",
      excalidrawUrl: null,
      timeSaved: "8-12+ hours/month",
      costSavings: "40-60% faster payment collection",
      industry: "Financial Automation",
    },
    {
      id: "digital-permit-coordinator",
      title: "Digital Permit & Inspection Coordinator",
      description: "AI-powered system that automates the entire permit lifecycle from application creation and submission to inspection scheduling and status tracking. Eliminates permit-related delays that cost projects thousands.",
      videoUrl: null,
      excalidrawUrl: "https://link.excalidraw.com/readonly/t7LICQ8cwhj8nl1GsO9n",
      timeSaved: "15-20+ hours per project",
      costSavings: "Reduces project delays by up to 70%",
      industry: "Construction",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <Helmet>
        <title>Solutions Gallery | FlowMatrix AI - Real Automation Case Studies</title>
        <meta
          name="description"
          content="Browse automation solutions delivering 15-30 hours/week in time savings. Each case study includes video demos and ROI metrics for construction and trade businesses."
        />
      </Helmet>

      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Automation Systems We've Built
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Browse real systems saving our clients 15-30 hours/week. Each includes video demo + ROI metrics.
          </p>
        </div>

        {/* Client Spotlight Preview - Links to detailed case study */}
        <ClientSpotlightPreview />

        {/* Solutions Grid - Responsive: 1 column mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {casStudies.map((study) => (
            <div
              key={study.id}
              ref={(el) => (solutionRefs.current[study.id] = el)}
              className="transition-all duration-300"
            >
              <SolutionCard {...study} />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 text-center border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to build your custom solution?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Start with a free 5-day diagnostic. We'll analyze your workflows and identify automation opportunities with zero commitment.
          </p>
          <Button
            onClick={() => window.open('https://tally.so/r/wMBOXE', '_blank')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
