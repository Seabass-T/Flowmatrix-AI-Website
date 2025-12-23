import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">Oops! Page not found</p>
          <a href="/" className="text-white hover:text-accent underline text-lg">
            Return to Home
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
