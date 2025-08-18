import Navigation from "@/components/Navigation";
import { Helmet } from "react-helmet";

const ContentCreation = () => {
  return (
    <>
      <Helmet>
        <title>Business Content Creation Automation | FlowMatrix AI</title>
        <meta name="description" content="Automate your business content creation with AI-powered solutions. Generate marketing copy, blog posts, and business communications." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Business Content Creation <span className="bg-gradient-to-r from-interactive-primary to-interactive-accent bg-clip-text text-transparent">Automation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Streamline your content creation process with intelligent automation for marketing, communications, and business materials.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center py-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-lg text-gray-600">
                We're building comprehensive automation solutions for business content creation. Check back soon for detailed use cases and implementation guides.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCreation;