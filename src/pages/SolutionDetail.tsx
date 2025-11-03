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

// Invoice Lifecycle Manager Content
const invoiceLifecycleManagerContent = {
  slug: "invoice-lifecycle-manager",
  title: "Invoice Lifecycle Manager",
  category: "AI-Powered Financial Automation",
  videoUrl: "https://www.youtube.com/embed/6_XnGTYzS7A",
  excalidrawUrl: null, // No workflow diagram provided yet
  roiMetrics: {
    timeSaved: "8-12+ hours saved monthly",
    costSavings: "40-60% faster payment collection"
  },
  overview: "The Invoice Lifecycle Manager transforms the entire invoicing process into a fully automated system that requires minimal human intervention. This AI-powered solution handles everything from invoice creation to payment collection, intelligently monitoring client communications and providing timely follow-ups. By eliminating hours spent on manual invoicing, payment tracking, and client follow-ups, professionals can focus on delivering value while ensuring consistent cash flow and reducing administrative overhead.",
  phases: [
    {
      title: "Phase 1: Automated Invoice Creation & Delivery",
      trigger: "Activated when a project status is changed to 'Complete' in your project management system.",
      capabilities: [
        "Intelligent Data Aggregation: Automatically collects all relevant client and project information from your business database to ensure accurate invoicing.",
        "Standardized Invoice Generation: Creates professionally formatted invoices with consistent branding, payment terms, and all required legal information.",
        "Multi-format Delivery: Converts HTML invoices to polished PDFs and delivers them to clients through their preferred communication channel.",
        "Centralized Record-Keeping: Updates your invoice tracking system with new invoice details and maintains a comprehensive financial database."
      ]
    },
    {
      title: "Phase 2: Communication Monitoring & Response",
      trigger: "Runs daily to analyze all incoming client communications related to invoices.",
      capabilities: [
        "Smart Email Classification: Uses natural language processing to categorize invoice-related emails (payment confirmations, questions, disputes) without manual sorting.",
        "Payment Recognition: Automatically identifies payment confirmations and updates your tracking system to reflect paid status.",
        "Priority Notification System: Sends real-time text alerts for important invoice communications, including direct links to the relevant email threads for immediate action.",
        "Client Response Management: Identifies questions requiring personal attention versus those that can be handled automatically."
      ]
    },
    {
      title: "Phase 3: Strategic Follow-up Automation",
      trigger: "Monitors invoice due dates and payment status continuously.",
      capabilities: [
        "Intelligent Reminder Sequence: Implements a progressive follow-up schedule with increasingly direct communications (1 week after sending, 2 weeks, due date, and daily after due date).",
        "Tone Calibration: Automatically adjusts communication tone from gentle reminders to more direct requests based on payment lateness.",
        "Multi-channel Escalation: Expands from email-only reminders to text and optional automated phone calls for severely overdue invoices.",
        "Payment Facilitation: Includes multiple payment options in follow-ups to reduce friction and accelerate collections."
      ]
    }
  ],
  roiDetails: [
    "Saving 8-12+ hours monthly typically spent on invoice creation, sending, tracking, and follow-ups",
    "Accelerating payment collection by 40-60% through consistent, timely follow-ups",
    "Reducing late payments by implementing systematic follow-up procedures",
    "Eliminating lost invoice situations through centralized tracking and monitoring",
    "Improving client relationships by maintaining professional communication throughout the payment process"
  ],
  conclusion: "The modular architecture allows for seamless integration with your existing business systems, including accounting software, project management tools, and communication platforms. Custom extensions can add capabilities like automatic revenue recognition, year-end financial reporting, or integration with tax preparation software."
};

// Digital Permit & Inspection Coordinator Content
const digitalPermitCoordinatorContent = {
  slug: "digital-permit-coordinator",
  title: "Digital Permit & Inspection Coordinator",
  category: "AI-Powered Regulatory Compliance",
  videoUrl: null,
  excalidrawUrl: "https://link.excalidraw.com/readonly/t7LICQ8cwhj8nl1GsO9n",
  roiMetrics: {
    timeSaved: "15-20+ hours per project",
    costSavings: "Reduces project delays by up to 70%"
  },
  overview: "The Digital Permit & Inspection Coordinator transforms the frustrating, time-consuming permit process into a streamlined, automated workflow. This system analyzes project details, determines required permits, creates application documents, manages submissions to all relevant authorities, and coordinates inspections all with minimal human oversight. By eliminating the administrative burden of permit management and preventing costly project delays, construction businesses can accelerate timelines while ensuring full compliance with local regulations.",
  phases: [
    {
      title: "Phase 1: Permit Curation & Submission",
      trigger: "Activated when a project is initiated in your project management system.",
      capabilities: [
        "AI-Powered Scope Analysis: Automatically reviews project details to identify all necessary permits (building, electrical, plumbing, HVAC) based on scope and location.",
        "Document Creation & Assembly: Generates complete permit application documents with required information and specifications formatted to jurisdiction standards.",
        "Human-in-the-Loop Quality Control: Routes completed applications to your team for review and approval before submission.",
        "Multi-Jurisdiction Submission Management: Handles submission to appropriate authorities (city, county, state) based on project location and requirements."
      ]
    },
    {
      title: "Phase 2: Tracking & Inspection Coordination",
      trigger: "Initiated upon permit submission and continues throughout the project lifecycle.",
      capabilities: [
        "Automated Status Monitoring: Continuously scans email inboxes to detect and categorize permit status updates without manual checking.",
        "Real-Time Notifications: Delivers instant alerts via email/SMS when permits are approved, rejected, or require modifications.",
        "Database Integration: Updates your central project database with current permit status and relevant documentation.",
        "Inspection Scheduling Automation: Coordinates with inspectors via email/SMS based on project timeline and availability.",
        "Calendar Integration: Automatically books inspection appointments in your team's calendar system with all relevant details.",
        "Follow-Up Management: Handles rescheduling and confirmation requests when inspectors don't respond."
      ]
    }
  ],
  roiDetails: [
    "Eliminating 15-20+ hours of administrative work per project typically spent on permit application and tracking",
    "Reducing project delays by up to 70% by preventing permit-related bottlenecks",
    "Preventing costly labor standby charges when inspections aren't scheduled properly",
    "Minimizing compliance risks through consistent, accurate permit submissions",
    "Improving client satisfaction through faster project completion and transparent status updates"
  ],
  conclusion: "For construction businesses managing multiple projects, the permit and inspection process is often the biggest source of unpredictable delays and administrative overhead. Our Digital Permit & Inspection Coordinator eliminates this friction point entirely, creating a predictable, efficient pathway through regulatory requirements that scales across your entire project portfolio."
};

// Project Status Tracker Content
const projectStatusTrackerContent = {
  slug: "project-status-tracker",
  title: "Project Status Tracker",
  category: "AI-Powered Project Management",
  videoUrl: null,
  excalidrawUrl: "https://link.excalidraw.com/readonly/S2vCSUZkuRRsF5D7bsGm",
  roiMetrics: {
    timeSaved: "10-15+ hours per week",
    costSavings: "Improves profit margins by up to 40%"
  },
  overview: "The Project Status Tracker transforms scattered project data into a unified intelligence system that continuously monitors progress, costs, and timelines without manual effort. Unlike one-size-fits-all software, this solution is built to integrate with YOUR specific tech stack, whether you use ServiceTitan, Microsoft tools, Procore, or any combination of platforms. It automatically collects updates from your existing systems, analyzes them with AI, delivers prioritized insights to stakeholders, and builds a comprehensive knowledge repository for future intelligence. By eliminating the administrative burden of tracking projects and providing real-time financial visibility tailored to your exact workflow, construction businesses can identify cost overruns early, optimize resource allocation, and make data-driven decisions that maximize profit margins.",
  phases: [
    {
      title: "Phase 1: Customizable Data Collection",
      trigger: "Continuous monitoring of YOUR existing business systems and communication channels.",
      capabilities: [
        "Universal Integration Framework: Connects to virtually any business system you already use, including ServiceTitan, Microsoft, Procore, Quickbooks, Sage, and custom internal tools.",
        "Workflow-Specific Configuration: Adapts to your unique project management approach rather than forcing you to change your processes.",
        "Flexible Input Sources: Pulls from task management, team communications, email threads, time tracking, accounting systems, or any other data source relevant to your operation.",
        "Zero-Friction Implementation: Overlays on your existing tech stack without disrupting your established workflows or requiring team retraining."
      ]
    },
    {
      title: "Phase 2: Intelligent Analysis & Documentation Repository",
      trigger: "Activated automatically when new project data is collected.",
      capabilities: [
        "Continuous Status Monitoring: Analyzes project developments in real-time to track progress against timelines and budgets.",
        "Comprehensive Documentation Generation: Creates detailed, searchable reports that build an evolving knowledge base specific to your business.",
        "Priority-Based Distribution: Uses AI to categorize updates based on urgency and business impact, delivering critical alerts via SMS, standard updates via email, and archiving routine information.",
        "Historical Intelligence System: Maintains a growing repository of project data that becomes increasingly valuable over time for training custom AI models specific to your business patterns."
      ]
    },
    {
      title: "Phase 3: Financial Intelligence & Business Knowledge Hub",
      trigger: "Available 24/7 with real-time updates as new information is processed.",
      capabilities: [
        "Real-Time ROI Tracking: Displays estimated vs. actual profit alongside comprehensive financial metrics specific to your business's unique KPIs.",
        "Customizable Reporting Framework: Adapts financial dashboards to highlight the specific metrics that matter most to your operation.",
        "Retrieval-Augmented Business Intelligence: Builds a growing knowledge repository that can power future AI applications specific to your company's historical data.",
        "Projection Modeling: Uses your historical project data to create increasingly accurate estimates and forecasts based on your company's actual performance patterns."
      ]
    }
  ],
  roiDetails: [
    "Eliminating 10-15+ hours weekly spent manually tracking project status across multiple platforms",
    "Building a valuable business intelligence repository that grows more valuable with each completed project",
    "Reducing costly project delays by identifying and addressing issues before they impact timelines",
    "Improving profit margins by up to 40% through early detection of budget overruns",
    "Enabling more accurate estimating for future projects based on your company's actual historical performance",
    "Creating a foundation for advanced AI applications by maintaining structured records of all project knowledge"
  ],
  conclusion: "The Project Status Tracker isn't a rigid, off-the-shelf solution, but rather a flexible framework that adapts to your exact business needs. Every implementation is unique, with integrations, workflows, and reporting customized to your specific operations. This approach allows the system to evolve alongside your business, with the potential to expand into increasingly sophisticated capabilities as your needs grow. What begins as project tracking today can develop into predictive analytics, automated decision support, or custom AI applications tomorrow, all built on the foundation of your company's unique data and processes."
};

const SolutionDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Get content based on slug
  let content;
  if (slug === "email-organizer") {
    content = emailOrganizerContent;
  } else if (slug === "code-compass") {
    content = codeCompassContent;
  } else if (slug === "invoice-lifecycle-manager") {
    content = invoiceLifecycleManagerContent;
  } else if (slug === "digital-permit-coordinator") {
    content = digitalPermitCoordinatorContent;
  } else if (slug === "project-status-tracker") {
    content = projectStatusTrackerContent;
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

        {/* Video Embed - Only show if URL is provided */}
        {content.videoUrl && (
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
        )}

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Project Overview
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {content.overview}
          </p>
        </section>

        {/* Excalidraw Workflow Diagram - Only show if URL is provided */}
        {content.excalidrawUrl && (
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
                title="Workflow Diagram"
                className="bg-white"
              />
            </div>
          </section>
        )}

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
            Ready to implement this solution?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Get your free automation diagnostic. We'll analyze your workflows and create a custom implementation plan tailored to your business.
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
