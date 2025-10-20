
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "@/components/Footer";

// Eager load only the homepage for fastest FCP
import Index from "./pages/Index";

// Lazy load all other pages for code splitting
const Pricing = lazy(() => import("./pages/Pricing"));
const UseCases = lazy(() => import("./pages/UseCases"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Construction = lazy(() => import("./pages/Construction"));
const HomeService = lazy(() => import("./pages/HomeService"));

// Lazy load use case pages
const Leads = lazy(() => import("./pages/use-cases/Leads"));
const ContentCreation = lazy(() => import("./pages/use-cases/ContentCreation"));
const SocialMedia = lazy(() => import("./pages/use-cases/SocialMedia"));
const EmailManagement = lazy(() => import("./pages/use-cases/EmailManagement"));
const ClientManagement = lazy(() => import("./pages/use-cases/ClientManagement"));
const PersonalAssistants = lazy(() => import("./pages/use-cases/PersonalAssistants"));
const SpecializedAgents = lazy(() => import("./pages/use-cases/SpecializedAgents"));
const BusinessOperations = lazy(() => import("./pages/use-cases/BusinessOperations"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const queryClient = new QueryClient();

// WebSite + SearchAction JSON-LD
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.flowmatrixai.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.flowmatrixai.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/use-cases" element={<UseCases />} />
                <Route path="/newsletter" element={<Newsletter />} />
                <Route path="/newsletter/:issueId" element={<Newsletter />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />

                {/* Use Case Category Routes */}
                <Route path="/use-cases/leads" element={<Leads />} />
                <Route path="/use-cases/content-creation" element={<ContentCreation />} />
                <Route path="/use-cases/social-media" element={<SocialMedia />} />
                <Route path="/use-cases/email-management" element={<EmailManagement />} />
                <Route path="/use-cases/client-management" element={<ClientManagement />} />
                <Route path="/use-cases/personal-assistants" element={<PersonalAssistants />} />
                <Route path="/use-cases/specialized-agents" element={<SpecializedAgents />} />
                <Route path="/use-cases/business-operations" element={<BusinessOperations />} />

                {/* ICP Landing Pages */}
                <Route path="/construction" element={<Construction />} />
                <Route path="/home-service" element={<HomeService />} />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
