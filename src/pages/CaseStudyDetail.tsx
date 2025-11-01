import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import ClientSpotlight from "@/components/ClientSpotlight";
import { ArrowLeft } from "lucide-react";

const CaseStudyDetail = () => {
  // This page is specifically for the UBL Group case study
  // Route is hardcoded as /solutions/ubl-group in App.tsx
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <Helmet>
        <title>UBL Group Case Study | FlowMatrix AI - Construction Automation Success</title>
        <meta
          name="description"
          content="See how FlowMatrix AI helped UBL Group double their project capacity, save $10,000+ in three months, and reduce payment collection time by 73% through strategic automation."
        />
      </Helmet>

      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Back Button */}
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Solutions
        </Link>

        {/* Full Case Study */}
        <ClientSpotlight />
      </div>
    </div>
  );
};

export default CaseStudyDetail;
