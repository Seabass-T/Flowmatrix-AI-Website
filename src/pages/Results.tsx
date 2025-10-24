import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import ResultsPostCard, { ResultsPost } from "@/components/ResultsPostCard";
import { Button } from "@/components/ui/button";

const Results = () => {
  // Placeholder blog posts - Replace with real content later
  const blogPosts: ResultsPost[] = [
    {
      id: "1",
      slug: "ubl-group-email-organizer",
      title: "How UBL Group Saved 20 Hours/Week with Email Organizer",
      excerpt: "UBL Group, a mid-sized construction firm, was drowning in unorganized client emails. Their team spent hours each day sorting through inboxes, missing urgent requests, and manually creating tasks. Our Email Organizer system transformed their workflow completely.",
      industry: "Construction",
      systemUsed: "Email Organizer System",
      systemSlug: "email-organizer",
      date: "2025-10-15",
      readTime: "5 min read",
    },
    {
      id: "2",
      slug: "hvac-scheduling-automation",
      title: "HVAC Company Cuts No-Shows by 40% with Smart Scheduling",
      excerpt: "A regional HVAC service provider struggled with appointment no-shows and inefficient routing. Technicians wasted hours driving between jobs, and last-minute cancellations created scheduling chaos. Our Smart Scheduling & Dispatch System changed everything.",
      industry: "HVAC",
      systemUsed: "Smart Scheduling & Dispatch System",
      systemSlug: "scheduling-optimizer",
      date: "2025-10-08",
      readTime: "6 min read",
    },
    {
      id: "3",
      slug: "real-estate-lead-qualification",
      title: "Real Estate Agency Doubles Conversion Rate with Lead Qualifier",
      excerpt: "A boutique real estate agency was overwhelmed with leads but couldn't identify which prospects were ready to buy. Sales reps wasted time on cold leads while hot prospects went cold. Our Lead Qualification & Routing System solved this challenge.",
      industry: "Real Estate",
      systemUsed: "Lead Qualification & Routing System",
      systemSlug: "lead-qualifier",
      date: "2025-09-28",
      readTime: "4 min read",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <Helmet>
        <title>Client Success Stories | FlowMatrix AI - Real Results</title>
        <meta
          name="description"
          content="Read real client success stories showcasing measurable ROI from AI automation. See how construction and trade businesses save 15-30 hours per week."
        />
      </Helmet>

      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real implementations, real ROI, real time savings.
          </p>
        </div>

        {/* Blog Posts List (Vertical Stack) */}
        <div className="space-y-8 mb-16">
          {blogPosts.map((post) => (
            <ResultsPostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Want similar results for your business?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
            Start with a free 5-day diagnostic. We'll identify automation opportunities tailored to your workflows.
          </p>
          <Button
            onClick={() => window.open('https://tally.so/r/wMBOXE', '_blank')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
