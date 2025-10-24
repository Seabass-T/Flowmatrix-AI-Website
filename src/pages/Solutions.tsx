import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import SolutionCard from "@/components/SolutionCard";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  // Sample case studies - Replace with real data when available
  const casStudies = [
    {
      id: "email-organizer",
      title: "Email Organizer and Summarizer",
      description: "AI-powered inbox management that automatically analyzes, categorizes, and prioritizes emails, then delivers comprehensive daily summaries with actionable insights. Eliminates hours spent manually sorting emails.",
      videoUrl: "https://www.youtube.com/embed/sZHSdYXZkp8",
      timeSaved: "5-15 hours/week",
      costSavings: "Reduces missed opportunities",
      industry: "AI-Powered Inbox",
    },
    {
      id: "code-compass",
      title: "Code Compass",
      description: "AI-powered regulatory compliance assistant that instantly retrieves, interprets, and explains relevant bylaws, zoning regulations, and building codes through natural conversation. Eliminates hours spent searching regulatory documents.",
      videoUrl: "https://www.youtube.com/embed/rn6eMUp9wPg",
      timeSaved: "8-20 hours/project",
      costSavings: "Prevents costly redesigns",
      industry: "Regulatory Compliance",
    },
    {
      id: "project-tracker",
      title: "Automated Project Status Tracker",
      description: "Pulls data from multiple tools, generates weekly status reports, and sends updates to stakeholders automatically. Eliminates manual reporting work.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      timeSaved: "8 hours/week",
      costSavings: "$1,600/month",
      industry: "Construction",
    },
    {
      id: "invoice-automation",
      title: "Invoice & Payment Processing System",
      description: "Automatically generates invoices from completed work orders, sends payment reminders, and tracks receivables. Improves cash flow and reduces late payments.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      timeSaved: "6 hours/week",
      costSavings: "$1,200/month",
      industry: "HVAC",
    },
    {
      id: "lead-qualifier",
      title: "Lead Qualification & Routing System",
      description: "Scores incoming leads based on criteria, routes high-value prospects to sales team, and nurtures others automatically. Increases conversion rates.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      timeSaved: "10 hours/week",
      costSavings: "$2,000/month",
      industry: "Real Estate",
    },
    {
      id: "scheduling-optimizer",
      title: "Smart Scheduling & Dispatch System",
      description: "Optimizes technician routes based on location and job type, sends automated appointment reminders, and handles rescheduling requests. Reduces no-shows by 40%.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      timeSaved: "15 hours/week",
      costSavings: "$3,000/month",
      industry: "HVAC",
    },
    {
      id: "document-generator",
      title: "Contract & Document Generator",
      description: "Auto-fills contracts and proposals from CRM data, generates PDF documents, and sends for e-signature. Accelerates deal closing process.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      timeSaved: "7 hours/week",
      costSavings: "$1,400/month",
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

        {/* Solutions Grid - Responsive: 1 column mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {casStudies.map((study) => (
            <SolutionCard key={study.id} {...study} />
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
