
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "@/components/layout/Footer";

// Eager load only the homepage for fastest FCP
import Index from "./pages/Index";

// Lazy load legal pages only
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load templates pages
const TemplatesLandingPage = lazy(() => import("./pages/templates").then(m => ({ default: m.TemplatesLandingPage })));
const TemplateDetailPage = lazy(() => import("./pages/templates").then(m => ({ default: m.TemplateDetailPage })));

// Lazy load service detail pages
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));

// Loading fallback component - black background for new design
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/free" element={<TemplatesLandingPage />} />
                <Route path="/free/:slug" element={<TemplateDetailPage />} />
                <Route path="/assessment" element={<ServiceDetail />} />
                <Route path="/database-mobilization" element={<ServiceDetail />} />
                <Route path="/ai-implementation" element={<ServiceDetail />} />
                <Route path="/personalized-software" element={<ServiceDetail />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
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
