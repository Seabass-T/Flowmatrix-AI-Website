import { useState } from "react";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface DualPainPointSectionProps {
  constructionHeading: string;
  constructionPainPoints: PainPoint[];
  homeServiceHeading: string;
  homeServicePainPoints: PainPoint[];
  ctaText: string;
  onCtaClick: () => void;
}

const DualPainPointSection = ({
  constructionHeading,
  constructionPainPoints,
  homeServiceHeading,
  homeServicePainPoints,
  ctaText,
  onCtaClick,
}: DualPainPointSectionProps) => {
  const [activeMobileTab, setActiveMobileTab] = useState<'construction' | 'home-service'>('construction');

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mobile Toggle Menu */}
        <div className="md:hidden mb-8">
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveMobileTab('construction')}
              className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeMobileTab === 'construction'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Construction
            </button>
            <button
              onClick={() => setActiveMobileTab('home-service')}
              className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeMobileTab === 'home-service'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home Service
            </button>
          </div>
        </div>

        {/* Desktop: Side-by-Side Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8 lg:gap-12">

          {/* Construction Column */}
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center">
              {constructionHeading}
            </h2>
            <div className="space-y-4">
              {constructionPainPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {point.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center pt-4">
              <Button
                onClick={onCtaClick}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8"
              >
                {ctaText}
              </Button>
            </div>
          </div>

          {/* Home Service Column */}
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center">
              {homeServiceHeading}
            </h2>
            <div className="space-y-4">
              {homeServicePainPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {point.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center pt-4">
              <Button
                onClick={onCtaClick}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8"
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile: Toggle View */}
        <div className="md:hidden">
          {activeMobileTab === 'construction' ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 text-center">
                {constructionHeading}
              </h2>
              <div className="space-y-4">
                {constructionPainPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 p-6 rounded-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {point.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center pt-4">
                <Button
                  onClick={onCtaClick}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8"
                >
                  {ctaText}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 text-center">
                {homeServiceHeading}
              </h2>
              <div className="space-y-4">
                {homeServicePainPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 p-6 rounded-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {point.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center pt-4">
                <Button
                  onClick={onCtaClick}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8"
                >
                  {ctaText}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DualPainPointSection;
