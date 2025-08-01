
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import UseCases from "./pages/UseCases";
import Newsletter from "./pages/Newsletter";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

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
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
