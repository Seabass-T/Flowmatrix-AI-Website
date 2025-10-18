import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { ICPType } from "./ICPToggle";

interface HeroWithICPProps {
  icp: ICPType;
  openCalendly: () => void;
}

const HeroWithICP = ({ icp, openCalendly }: HeroWithICPProps) => {
  // Content for Construction ICP
  const constructionContent = {
    headline: "Stop Job Cost Overruns & Scheduling Chaos",
    subheadline: "We automate your construction workflows so you spend less on admin and scale faster. Free 5-Day Diagnostic → 2-Week Pilot → Month-to-Month Partnership.",
    primaryCTA: "Book Free Diagnostic",
    secondaryCTA: "See How It Works",
    secondaryCTALink: "/use-cases",
    imageAlt: "Construction worker using tablet for job management",
    imagePath: "/images/hero-construction.webp"
  };

  // Content for Home Service ICP
  const homeServiceContent = {
    headline: "End Dispatch Lag & Technician Idle Time",
    subheadline: "We automate your service workflows so your techs book more jobs per day. Free 5-Day Diagnostic → 2-Week Pilot → Month-to-Month Partnership.",
    primaryCTA: "Book Free Diagnostic",
    secondaryCTA: "See Case Study",
    secondaryCTALink: "/use-cases",
    imageAlt: "HVAC technician using mobile device for service management",
    imagePath: "/images/hero-home-service.webp"
  };

  // Select content based on ICP
  const content = icp === "construction" ? constructionContent : homeServiceContent;

  return (
    <section className="relative overflow-hidden py-20 lg:py-32" id="hero-content" role="tabpanel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-interactive-primary to-interactive-accent bg-clip-text text-transparent">
                {content.headline}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
              {content.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-scale-in">
              <Button
                onClick={openCalendly}
                size="lg"
                className="bg-gradient-to-r from-interactive-primary to-interactive-accent hover:from-interactive-primary-hover hover:to-interactive-accent-hover text-primary-foreground text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {content.primaryCTA}
                <Calendar className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = content.secondaryCTALink}
                className="text-lg px-8 py-6 border-2 hover:bg-gray-50 transition-all duration-300"
              >
                {content.secondaryCTA}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={content.imagePath}
                alt={content.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-interactive-primary to-interactive-accent rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-interactive-secondary to-interactive-accent rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithICP;
