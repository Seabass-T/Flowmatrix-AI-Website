import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag, Quote as QuoteIcon } from "lucide-react";

// This would ideally come from a CMS or database
// For now, we'll define the posts here
interface BlogPostContent {
  slug: string;
  title: string;
  industry: string;
  systemUsed: string;
  systemSlug: string;
  date: string;
  readTime: string;
  clientContext: string[];
  implementation: string[];
  results: {
    metric: string;
    value: string;
  }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

const blogPosts: Record<string, BlogPostContent> = {
  "ubl-group-email-organizer": {
    slug: "ubl-group-email-organizer",
    title: "How UBL Group Saved 20 Hours/Week with Email Organizer",
    industry: "Construction",
    systemUsed: "Email Organizer System",
    systemSlug: "email-organizer",
    date: "2025-10-15",
    readTime: "5 min read",
    clientContext: [
      "UBL Group is a mid-sized construction firm specializing in commercial projects across North America. With 45 employees and multiple ongoing projects, they were handling 200+ client emails daily.",
      "The challenge: Project managers spent 3-4 hours per day manually sorting emails, categorizing requests, and creating follow-up tasks. Urgent client requests often got buried in crowded inboxes, leading to delayed responses and frustrated clients.",
      "The team had tried basic email filters and folders, but nothing scaled with their growing business. They needed intelligent automation that could understand context and prioritize based on urgency."
    ],
    implementation: [
      "We deployed our Email Organizer System over a 2-week period. The system connects to their email servers and uses AI to classify incoming messages based on project, urgency, and action required.",
      "Key features implemented: Automatic email categorization by project and urgency level, intelligent extraction of action items and deadlines, automatic task creation in their project management system (Asana), priority flagging for urgent client requests, and daily digest emails summarizing important communications.",
      "The system was trained on 6 months of historical emails to understand UBL Group's specific communication patterns and client types. We conducted 3 training sessions with the team to ensure smooth adoption."
    ],
    results: [
      { metric: "Time Saved", value: "20 hours/week" },
      { metric: "Cost Savings", value: "$2,400/month" },
      { metric: "Response Time", value: "Improved 65%" },
      { metric: "Missed Requests", value: "Reduced to near zero" }
    ],
    quote: {
      text: "The Email Organizer completely changed how we work. Our project managers can now focus on actually managing projects instead of sorting through hundreds of emails. We haven't missed a single urgent client request since implementation.",
      author: "Michael Chen",
      role: "Operations Manager, UBL Group"
    }
  },
  "hvac-scheduling-automation": {
    slug: "hvac-scheduling-automation",
    title: "HVAC Company Cuts No-Shows by 40% with Smart Scheduling",
    industry: "HVAC",
    systemUsed: "Smart Scheduling & Dispatch System",
    systemSlug: "scheduling-optimizer",
    date: "2025-10-08",
    readTime: "6 min read",
    clientContext: [
      "A regional HVAC service provider with 12 technicians covering a 50-mile radius. They were scheduling 40-60 appointments per day across residential and commercial clients.",
      "The problem: Manual scheduling meant inefficient routes with technicians zigzagging across the service area. Last-minute cancellations and no-shows created gaps that were hard to fill. Reminder calls required 2+ hours of admin time daily.",
      "Customer satisfaction was suffering due to late arrivals and rescheduling difficulties. The company was losing revenue from unfilled appointment slots."
    ],
    implementation: [
      "We implemented our Smart Scheduling & Dispatch System, integrating with their existing CRM and technician mobile apps. The system optimizes routes in real-time based on location, job type, and technician skills.",
      "Key features: AI-powered route optimization to minimize drive time, automated appointment reminders via SMS and email, intelligent rebooking for cancellations, real-time schedule updates pushed to technician mobile devices, and customer self-service rescheduling portal.",
      "Implementation took 3 weeks including data migration, system training, and a phased rollout to ensure zero disruption to existing appointments."
    ],
    results: [
      { metric: "Time Saved", value: "15 hours/week" },
      { metric: "Cost Savings", value: "$3,000/month" },
      { metric: "No-Show Rate", value: "Decreased 40%" },
      { metric: "Jobs Completed", value: "Increased 18%" }
    ],
    quote: {
      text: "Our technicians love the optimized routes. They're completing more jobs per day with less stress, and our customers appreciate the automated reminders. The no-show reduction alone paid for the system in the first month.",
      author: "Sarah Martinez",
      role: "Owner, Climate Control HVAC"
    }
  },
  "real-estate-lead-qualification": {
    slug: "real-estate-lead-qualification",
    title: "Real Estate Agency Doubles Conversion Rate with Lead Qualifier",
    industry: "Real Estate",
    systemUsed: "Lead Qualification & Routing System",
    systemSlug: "lead-qualifier",
    date: "2025-09-28",
    readTime: "4 min read",
    clientContext: [
      "A boutique real estate agency with 8 agents focusing on luxury residential properties. They were generating 100+ leads per month from various sources including website, social media, and referrals.",
      "The challenge: All leads were treated equally, forcing agents to spend time qualifying prospects manually. Hot leads often cooled while agents were busy with tire-kickers. No systematic follow-up for medium-priority leads meant potential buyers fell through the cracks.",
      "The agency had a CRM but no intelligent way to prioritize leads. Conversion rate was stuck at 2.5%, well below industry average."
    ],
    implementation: [
      "We built a Lead Qualification & Routing System that integrates with their website forms, CRM (HubSpot), and email system. The AI scores each lead based on 15+ factors including budget signals, urgency indicators, and engagement history.",
      "System features: Automatic lead scoring on a 0-100 scale, instant routing of high-priority leads to top agents, automated nurture sequences for medium-priority leads, scheduled follow-up reminders based on lead temperature, and analytics dashboard showing conversion trends.",
      "The system learned from 2 years of historical lead data to understand which characteristics predicted successful conversions. Setup took 10 days including CRM integration and agent training."
    ],
    results: [
      { metric: "Time Saved", value: "10 hours/week" },
      { metric: "Cost Savings", value: "$2,000/month" },
      { metric: "Conversion Rate", value: "Doubled to 5.1%" },
      { metric: "Revenue Impact", value: "+$340K annually" }
    ],
    quote: {
      text: "This system completely transformed our sales process. Our top agents now work exclusively with qualified buyers while the system nurtures everyone else. We're closing more deals with the same team size.",
      author: "David Thompson",
      role: "Managing Broker, Elite Properties Group"
    }
  }
};

const ResultsPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  // If post not found, show 404-style message
  if (!post) {
    return (
      <div className="bg-white dark:bg-gray-950 min-h-screen">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/results">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Results
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <Helmet>
        <title>{post.title} | FlowMatrix AI</title>
        <meta name="description" content={post.clientContext[0]} />
      </Helmet>

      <Navigation />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Back Button */}
        <Link
          to="/results"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Results
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
            <div className="flex items-center gap-1.5 text-primary">
              <Tag className="w-4 h-4" />
              <span className="font-medium">{post.industry}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* System Used Link */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <span className="text-sm text-gray-700 dark:text-gray-300">System Used: </span>
            <Link
              to={`/solutions#${post.systemSlug}`}
              className="text-sm font-semibold text-primary hover:underline"
            >
              {post.systemUsed} →
            </Link>
          </div>
        </header>

        {/* Client Context Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Client Context
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.clientContext.map((paragraph, idx) => (
              <p key={idx} className="text-gray-600 dark:text-gray-300 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Implementation Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Implementation
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.implementation.map((paragraph, idx) => (
              <p key={idx} className="text-gray-600 dark:text-gray-300 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {post.results.map((result, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6"
              >
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {result.metric}
                </div>
                <div className="text-2xl font-bold text-primary">
                  {result.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quote Section */}
        <section className="mb-12">
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-primary rounded-r-lg p-6 md:p-8">
            <QuoteIcon className="w-8 h-8 text-primary mb-4" />
            <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-200 italic mb-4">
              "{post.quote.text}"
            </blockquote>
            <div className="text-gray-900 dark:text-white font-semibold">
              {post.quote.author}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              {post.quote.role}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to achieve similar results?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
            Start with a free 5-day diagnostic. We'll analyze your workflows and create a custom automation plan.
          </p>
          <Button
            onClick={() => window.open('https://tally.so/r/wMBOXE', '_blank')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Get Started
          </Button>
        </div>
      </article>
    </div>
  );
};

export default ResultsPost;
