
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
const Solutions = lazy(() => import("./pages/Solutions"));
const Results = lazy(() => import("./pages/Results"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Construction = lazy(() => import("./pages/Construction"));
const HomeService = lazy(() => import("./pages/HomeService"));

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
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/results" element={<Results />} />
                <Route path="/newsletter" element={<Newsletter />} />
                <Route path="/newsletter/:issueId" element={<Newsletter />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />

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
