
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Users, Clock, TrendingUp, Award } from "lucide-react";

const AnimatedFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Zap,
      title: "Lightning-Fast Implementation",
      description: "Get your automation systems up and running in just 1-2 weeks with our streamlined process.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Shield,
      title: "Proven Track Record",
      description: "Successfully automated 150+ small businesses worldwide with 99.9% client satisfaction rate.",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Users,
      title: "Small Business Specialists",
      description: "We understand small business challenges and create solutions that scale with your growth.",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Clock,
      title: "24/7 Support & Maintenance",
      description: "Round-the-clock monitoring and support to ensure your automations run smoothly.",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: TrendingUp,
      title: "Guaranteed ROI",
      description: "Most clients see 300%+ return on investment within the first 6 months of implementation.",
      color: "from-indigo-400 to-blue-500",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning automation solutions recognized by leading business publications.",
      color: "from-red-400 to-rose-500",
      bgColor: "bg-red-50"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FlowMatrix AI?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another automation company. We're your dedicated partners in transforming your small business for the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = index === activeFeature;
            
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden transition-all duration-700 transform hover:scale-105 cursor-pointer border-0 shadow-lg ${
                  isActive 
                    ? `${feature.bgColor} shadow-2xl scale-105 animate-pulse` 
                    : 'bg-white hover:shadow-xl'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <CardContent className="p-8 relative z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 transform transition-all duration-500 ${
                    isActive ? 'animate-bounce' : 'group-hover:rotate-12'
                  }`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                    isActive ? 'text-gray-900' : 'text-gray-800 group-hover:text-blue-600'
                  }`}>
                    {feature.title}
                  </h3>
                  
                  <p className={`text-gray-600 leading-relaxed transition-all duration-300 ${
                    isActive ? 'text-gray-700' : 'group-hover:text-gray-700'
                  }`}>
                    {feature.description}
                  </p>
                  
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 transition-opacity duration-500 ${
                    isActive ? 'opacity-5' : 'group-hover:opacity-5'
                  }`} />
                </CardContent>
                
                {/* Animated border */}
                <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${feature.color} opacity-0 transition-opacity duration-500 ${
                  isActive ? 'opacity-100' : 'group-hover:opacity-50'
                } -z-10`} style={{ padding: '2px', borderRadius: '0.75rem' }}>
                  <div className="w-full h-full bg-white rounded-lg" />
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Progress indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeFeature 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedFeatures;
