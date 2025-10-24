import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, DollarSign } from "lucide-react";

// Email Organizer Content
const emailOrganizerContent = {
  slug: "email-organizer",
  title: "Email Organizer and Summarizer",
  category: "AI-Powered Inbox",
  videoUrl: "https://www.youtube.com/embed/sZHSdYXZkp8",
  excalidrawUrl: "https://link.excalidraw.com/readonly/qYpvmz5dSgPTQTf7gZWF",
  roiMetrics: {
    timeSaved: "5-15+ hours saved weekly",
    costSavings: "Reduces missed opportunities and improves client relationships"
  },
  overview: "The Email Organizer and Summarizer transforms overwhelming email management into a strategic advantage for busy professionals. This AI-powered system automatically analyzes, categorizes, and prioritizes incoming emails, then delivers comprehensive daily summaries with actionable insights. By eliminating hours spent manually sorting and processing emails, professionals can focus on high-value activities while ensuring no important communication is missed.",
  phases: [
    {
      title: "Phase 1: Email Analysis & Organization",
      trigger: "Activated on a 24-hour cycle to process all new emails received.",
      capabilities: [
        "Intelligent Email Categorization: Automatically sorts emails into customizable folders (Active Projects, Suppliers, Past Clients, Estimates, etc.) based on content analysis and sender relationships.",
        "Historical Context Integration: Retrieves related email threads and previous interactions from a database to establish a comprehensive conversation context.",
        "Priority Detection Algorithm: Uses client preferences and natural language processing to identify time-sensitive requests and critical communications requiring immediate attention."
      ]
    },
    {
      title: "Phase 2: Daily Inbox Intelligence",
      trigger: "Generated at a user-specified time each day (most commonly triggered at the end of the work day).",
      capabilities: [
        "Executive Summary Generation: Produces a concise 2-3 minute overview highlighting the most significant emails and required actions based on client preferences and natural language detection.",
        "Comprehensive Breakdown Document: Creates a detailed 5-10 minute analysis of your inbox with category-by-category insights.",
        "Inbox Analytics Dashboard: Visualizes communication patterns, response times, and category distribution to identify trends and improvement opportunities.",
        "Direct Navigation Links: Embeds one-click links to specific emails requiring attention or follow-up."
      ]
    },
    {
      title: "Phase 3: Strategic Response Management",
      trigger: "Available on-demand through natural language queries to the system.",
      capabilities: [
        "Optimized Action Plan: Recommends the most efficient order to process emails based on priority and estimated response time.",
        "Response Templates Library: Maintains a growing collection of personalized response templates based on your previous communications.",
        "Follow-up Scheduling: Automatically tracks emails requiring follow-up and suggests optimal timing.",
        "Cross-platform Integration: Synchronizes with task management systems and calendars to convert email requests into scheduled activities.",
        "Automated Draft Responses (optional): Automatically creates context based drafted responses for high priority and time sensitive emails.",
        "Automated Responding with Human-in-the-loop: Sends drafted responses to a platform of your choosing (SMS, slack, telegram, etc) and either awaits for user feedback or approval to send. If feedback is given, the system will make the necessary adjustments and restart the process until you give it permission to respond."
      ]
    }
  ],
  roiDetails: [
    "Saving 5-15+ hours weekly typically spent on email management and organization",
    "Reducing missed opportunities by ensuring critical emails receive timely responses",
    "Decreasing stress and cognitive load associated with inbox overwhelm",
    "Improving professional relationships through more consistent and timely communication",
    "Providing actionable analytics to continually refine communication strategies and priorities"
  ],
  conclusion: "The modular architecture allows for customization to specific industry communication patterns and seamless integration with existing workflow tools, ensuring the system evolves with changing business needs."
};

// Code Compass Content
const codeCompassContent = {
  slug: "code-compass",
  title: "Code Compass",
  category: "AI-Powered Regulatory Compliance",
  videoUrl: "https://www.youtube.com/embed/rn6eMUp9wPg",
  excalidrawUrl: "https://link.excalidraw.com/readonly/teqCsIs2zAnvnzq18k3O",
  roiMetrics: {
    timeSaved: "8-20+ hours saved per project",
    costSavings: "Prevents costly redesigns and compliance issues"
  },
  overview: "The Code Compass System transforms complex regulatory compliance into an accessible strategic advantage for construction, real estate, and home improvement professionals. This AI-powered agent instantly retrieves, interprets, and explains relevant bylaws, zoning regulations, building codes and any other relevant regulation documentation through natural conversation. By eliminating hours spent searching through regulatory documents and reducing compliance risks, professionals can make informed decisions faster and with greater confidence.",
  phases: [
    {
      title: "Phase 1: Regulatory Knowledge Base (Vector Database)",
      trigger: "Activated by the manual addition of regulatory documents into a storing/drive interface (platforms like google drive, microsoft onedrive, notion, etc)",
      capabilities: [
        "Comprehensive Document Ingestion: Automatically processes and indexes municipal bylaws, zoning regulations, building codes, and permit requirements from official sources.",
        "Geolocation-Specific Results: Delivers regulations specifically applicable to the user's jurisdiction or project location, eliminating irrelevant information.",
        "Plain Language Translation: Converts complex legal and technical language into clear, actionable explanations accessible to non-specialists."
      ]
    },
    {
      title: "Phase 2: Contextual Analysis & Application",
      trigger: "Initiated when users provide specific project parameters or compliance questions.",
      capabilities: [
        "Project-Specific Requirement Identification: Analyzes project details to identify all applicable regulations and requirements.",
        "Compliance Gap Analysis: Compares project specifications against regulatory requirements to flag potential compliance issues.",
        "Visual Interpretation: Provides diagrams and visual aids to clarify spatial requirements, setbacks, and dimensional regulations.",
        "Precedent Retrieval: Identifies similar approved projects or relevant precedents to guide compliance strategies."
      ]
    },
    {
      title: "Phase 3: Strategic Compliance Planning",
      trigger: "Available for complex projects requiring multi-faceted regulatory navigation.",
      capabilities: [
        "Approval Pathway Mapping: Outlines optimal permitting and approval processes based on project scope and location.",
        "Regulatory Change Monitoring: Tracks pending and recent changes to relevant codes and regulations that may impact projects.",
        "Alternative Compliance Strategies: Suggests multiple pathways to achieve compliance when projects face regulatory challenges.",
        "Documentation Preparation: Assists in generating compliant documentation and application materials for permit submissions."
      ]
    }
  ],
  roiDetails: [
    "Saving 8-20+ hours per project typically spent researching and interpreting regulatory requirements",
    "Reducing compliance risks by ensuring all relevant regulations are identified and addressed",
    "Accelerating project timelines through faster regulatory navigation and decision-making",
    "Preventing costly redesigns by identifying compliance issues early in the planning process",
    "Improving client confidence through clear communication of regulatory requirements and solutions"
  ],
  conclusion: "The system continuously updates as regulations change and learns from each interaction to become increasingly tailored to specific industries and project types."
};

const SolutionDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Get content based on slug
  let content;
  if (slug === "email-organizer") {
    content = emailOrganizerContent;
  } else if (slug === "code-compass") {
    content = codeCompassContent;
  }

  // If content not found, show fallback
  if (!content) {
    return (
      <div className="bg-white dark:bg-gray-950 min-h-screen">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Solution Details Coming Soon
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Detailed information for this solution is being prepared.
          </p>
          <Link to="/solutions">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Solutions
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <Helmet>
        <title>{content.title} | FlowMatrix AI - Detailed Solution</title>
        <meta name="description" content={content.overview} />
      </Helmet>

      <Navigation />

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Back Button */}
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Solutions
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-green-50 dark:bg-green-900/20 rounded-full">
              {content.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {content.title}
          </h1>

          {/* ROI Metrics */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Time Saved</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{content.roiMetrics.timeSaved}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Impact</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{content.roiMetrics.costSavings}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Video Embed */}
        <div className="mb-12">
          <div className="relative w-full rounded-lg overflow-hidden shadow-md" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={content.videoUrl}
              title={content.title}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Project Overview
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {content.overview}
          </p>
        </section>

        {/* Excalidraw Workflow Diagram */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Workflow Diagram
          </h2>
          <div className="w-full max-w-4xl mx-auto rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
            <iframe
              src={content.excalidrawUrl}
              width="100%"
              height="500px"
              frameBorder="0"
              allowFullScreen
              title="Email Organizer Workflow Diagram"
              className="bg-white"
            />
          </div>
        </section>

        {/* Implementation Phases */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Implementation Phases
          </h2>
          <div className="space-y-8">
            {content.phases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 md:p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  <strong>Trigger:</strong> {phase.trigger}
                </p>
                <div className="space-y-3">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {idx === 0 ? "Key Capabilities:" : "Functionality:"}
                  </p>
                  <ul className="space-y-2">
                    {phase.capabilities.map((capability, capIdx) => (
                      <li key={capIdx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Return on Investment */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Return on Investment
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            This AI-powered inbox management system delivers transformative efficiency by:
          </p>
          <ul className="space-y-3">
            {content.roiDetails.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">{detail}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 dark:text-gray-300 mt-6 italic">
            {content.conclusion}
          </p>
        </section>

        {/* CTA Section */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to transform your inbox?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Get your free automation diagnostic. We'll analyze your email workflows and create a custom implementation plan.
          </p>
          <Button
            onClick={() => window.open('https://tally.so/r/wMBOXE', '_blank')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto"
          >
            Get Your Free Automation Diagnostic
          </Button>
        </div>
      </article>
    </div>
  );
};

export default SolutionDetail;
