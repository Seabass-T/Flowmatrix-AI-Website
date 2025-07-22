import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface NewsletterIssue {
  id: number;
  title: string;
  publish_date: string;
  content_markdown: string;
}

const Newsletter = () => {
  const { issueId } = useParams();
  const [newsletters, setNewsletters] = useState<NewsletterIssue[]>([]);
  const [currentNewsletter, setCurrentNewsletter] = useState<NewsletterIssue | null>(null);
  const [selectedNewsletterId, setSelectedNewsletterId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNewsletters();
  }, []);

  useEffect(() => {
    if (issueId && newsletters.length > 0) {
      const newsletter = newsletters.find(n => n.id.toString() === issueId);
      setCurrentNewsletter(newsletter || null);
    }
  }, [issueId, newsletters]);

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const id = event.target.value ? parseInt(event.target.value) : null;
    setSelectedNewsletterId(id);
    
    if (id && newsletters.length > 0) {
      const selectedNewsletter = newsletters.find(n => n.id === id);
      if (selectedNewsletter) {
        setCurrentNewsletter(selectedNewsletter);
      }
    } else {
      // Reset to latest newsletter
      setCurrentNewsletter(newsletters.length > 0 ? newsletters[0] : null);
    }
  };

  const fetchNewsletters = async () => {
    try {
      setLoading(true);
      // Use any type to bypass TypeScript restrictions for new table
      const { data, error } = await (supabase as any)
        .from('final_newsletters')
        .select('*')
        .order('id', { ascending: false });

      if (error) throw error;
      setNewsletters((data || []) as NewsletterIssue[]);
    } catch (err) {
      console.error('Error fetching newsletters:', err);
      setError('Failed to load newsletters. Table may not exist yet.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // If viewing a specific newsletter issue
  if (issueId) {
    if (loading) {
      return (
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
          <Navigation />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      );
    }

    if (!currentNewsletter) {
      return (
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
          <Navigation />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <Link to="/newsletter" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Newsletter Archive
            </Link>
            <Card className="shadow-lg border-0">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Newsletter Issue Not Found</h2>
                <p className="text-gray-600">The newsletter issue you're looking for doesn't exist.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    }

    const { content_markdown: content, title } = currentNewsletter;

    return (
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link to="/newsletter" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Newsletter Archive
          </Link>
          
          <Card className="shadow-lg border-0">
            <CardHeader className="text-center border-b">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/9b28d13a-dbf3-4c52-a9c5-6f2e7e9cab7f.png" 
                  alt="FlowMatrix AI" 
                  className="h-12 w-12 object-contain mr-3"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  FlowMatrix AI
                </span>
              </div>
              <CardTitle className="text-3xl">{title}</CardTitle>
              <CardDescription className="text-lg">
                Issue #{currentNewsletter.id} • {formatDate(currentNewsletter.publish_date)}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {content}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Newsletter archive view
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Previous Newsletters Dropdown */}
        <div className="flex justify-end mb-8">
          <select 
            value={selectedNewsletterId || ""}
            onChange={handleDropdownChange}
            className="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl shadow-lg text-base font-semibold text-gray-800 hover:border-blue-300 focus:outline-none focus:ring-3 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          >
            <option value="">Latest Issue</option>
            {newsletters.slice(1).map((newsletter) => (
              <option key={newsletter.id} value={newsletter.id}>
                Issue #{newsletter.id} - {formatDate(newsletter.publish_date)}
              </option>
            ))}
          </select>
        </div>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/9b28d13a-dbf3-4c52-a9c5-6f2e7e9cab7f.png" 
              alt="FlowMatrix AI" 
              className="h-16 w-16 object-contain mr-4"
            />
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                The Matrix
              </span>{" "}
              <span className="text-gray-900">- Weekly AI Newsletter</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with the latest AI developments, automation trends, and industry insights.
          </p>
        </div>

        {loading ? (
          <div className="animate-pulse max-w-2xl mx-auto">
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        ) : error ? (
          <Card className="shadow-lg border-0 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for Newsletter Content</h2>
              <p className="text-gray-600 mb-6">{error}</p>
              <p className="text-sm text-gray-500 mb-6">
                Once your n8n workflow adds content to the final_newsletters table, it will appear here.
              </p>
              <Button onClick={fetchNewsletters} className="bg-gradient-to-r from-blue-600 to-purple-600">
                Check for Updates
              </Button>
            </CardContent>
          </Card>
        ) : newsletters.length === 0 ? (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-lg">
              <div className="text-gray-700 leading-relaxed">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Welcome to The Matrix - Weekly AI Newsletter</h2>
                <p className="mb-4">
                  Your weekly dose of AI innovation, automation trends, and industry insights. 
                  Once your n8n workflow is activated, new issues will appear here automatically.
                </p>
                <p className="mb-4">
                  This week in AI: Revolutionary developments in machine learning, breakthrough automation tools, 
                  and the latest trends shaping the future of artificial intelligence.
                </p>
                <p className="text-sm text-gray-500 italic">
                  This is placeholder content. Your actual newsletter content will replace this once the n8n workflow is triggered.
                </p>
              </div>
            </div>
            <div className="text-center mb-8 mt-8">
              <Badge variant="secondary" className="mb-4">Issue #1</Badge>
              <div className="flex items-center justify-center text-sm text-gray-500 mb-6">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Last Week</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto mb-16">
            {/* Display selected newsletter or latest if none selected */}
            {(() => {
              const displayNewsletter = selectedNewsletterId 
                ? newsletters.find(n => n.id === selectedNewsletterId) 
                : newsletters[0];
              
              if (!displayNewsletter) return null;
              
              return (
                <div key={displayNewsletter.id}>
                  <div className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-lg">
                    <div 
                      className="text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: displayNewsletter.content_markdown }}
                    />
                  </div>
                  <div className="text-center mb-8 mt-8">
                    <Badge variant="secondary" className="mb-4">Issue #{displayNewsletter.id}</Badge>
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-6">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{formatDate(displayNewsletter.publish_date)}</span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Join The Matrix Section */}
        <div className="max-w-4xl mx-auto mt-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Join The Matrix
            </span>
          </h2>
          <p className="text-xl mb-8 text-gray-700 font-medium">
            Get our weekly newsletter delivered to your inbox plus access to exclusive content and more AI news.
          </p>
          <div className="max-w-md mx-auto">
            <div id="join" className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 border-2 border-gray-200 focus:outline-none focus:ring-3 focus:ring-blue-500 focus:border-blue-500 font-medium"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl h-auto">
                Subscribe
              </Button>
            </div>
            <p className="text-base text-gray-600 mt-6 font-medium">
              Join 1,000+ AI enthusiasts staying ahead of the curve
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;