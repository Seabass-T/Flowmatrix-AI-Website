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
  session_id: string;
  message: any;
}

const Newsletter = () => {
  const { issueId } = useParams();
  const [newsletters, setNewsletters] = useState<NewsletterIssue[]>([]);
  const [currentNewsletter, setCurrentNewsletter] = useState<NewsletterIssue | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNewsletters();
  }, []);

  useEffect(() => {
    if (issueId && newsletters.length > 0) {
      const newsletter = newsletters.find(n => n.session_id === issueId);
      setCurrentNewsletter(newsletter || null);
    }
  }, [issueId, newsletters]);

  const fetchNewsletters = async () => {
    try {
      setLoading(true);
      // Direct query using any type to bypass TypeScript restrictions
      const { data, error } = await (supabase as any)
        .from('newsletter_db')
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

  const parseNewsletterContent = (message: any) => {
    try {
      // Handle the message format from your n8n workflow
      if (typeof message === 'string') {
        return { content: message, title: 'FlowMatrix AI Newsletter' };
      }
      if (message && typeof message === 'object') {
        return {
          content: message.content || message.text || JSON.stringify(message, null, 2),
          title: message.title || 'FlowMatrix AI Newsletter'
        };
      }
      return { content: 'No content available', title: 'FlowMatrix AI Newsletter' };
    } catch {
      return { content: 'Failed to parse content', title: 'FlowMatrix AI Newsletter' };
    }
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

    const { content, title } = parseNewsletterContent(currentNewsletter.message);

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
                Issue #{currentNewsletter.id} • Session: {currentNewsletter.session_id}
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
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/9b28d13a-dbf3-4c52-a9c5-6f2e7e9cab7f.png" 
              alt="FlowMatrix AI" 
              className="h-16 w-16 object-contain mr-4"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              AI{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Newsletter
              </span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with the latest AI developments, automation trends, and industry insights.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="shadow-lg border-0 animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <Card className="shadow-lg border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for Newsletter Content</h2>
              <p className="text-gray-600 mb-6">{error}</p>
              <p className="text-sm text-gray-500 mb-6">
                Once your n8n workflow adds content to the newsletter_db table, it will appear here.
              </p>
              <Button onClick={fetchNewsletters} className="bg-gradient-to-r from-blue-600 to-purple-600">
                Check for Updates
              </Button>
            </CardContent>
          </Card>
        ) : newsletters.length === 0 ? (
          <Card className="shadow-lg border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Newsletters Available</h2>
              <p className="text-gray-600 mb-6">
                Your n8n workflow will populate this page with newsletter content.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Test your webhook to see newsletters appear here automatically.
              </p>
              <Button onClick={fetchNewsletters} className="bg-gradient-to-r from-blue-600 to-purple-600">
                Refresh
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsletters.map((newsletter) => {
              const { title } = parseNewsletterContent(newsletter.message);
              return (
                <Card key={newsletter.id} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Issue #{newsletter.id}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Session: {newsletter.session_id.slice(0, 8)}...</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
                    <CardDescription>
                      Latest AI insights and automation trends
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/newsletter/${newsletter.session_id}`}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Read Newsletter
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;