import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, Target, TrendingUp, CheckCircle2 } from "lucide-react";

const About = () => {
  const openTallyForm = () => {
    window.open('https://tally.so/r/wMBOXE', '_blank');
  };

  // About Page Organization JSON-LD
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FlowMatrix AI",
    "url": "https://www.flowmatrixai.com",
    "logo": "https://www.flowmatrixai.com/logo.png",
    "description": "FlowMatrix AI provides AI automation for construction and trade businesses across North America. $300 audit with 100% satisfaction guarantee.",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": "info@flowmatrixai.com",
        "contactType": "Customer Service"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>About FlowMatrix AI | Construction Automation for North America</title>
        <meta name="description" content="FlowMatrix AI provides AI automation for North American construction and trade businesses. Founded by Sebastian Tamburro. $300 audit with 100% satisfaction guarantee." />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="bg-white min-h-screen">
        <Navigation />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About FlowMatrix AI
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specializing in automation for Construction and Trade businesses across North America.
            </p>
          </div>

          {/* Founder Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="flex flex-col items-center text-center gap-6">
                {/* Headshot */}
                <div className="flex-shrink-0">
                  <img
                    src="/founder-headshot.jpg"
                    alt="Sebastian Tamburro, Founder of FlowMatrix AI"
                    className="w-32 h-32 rounded-full object-cover shadow-md"
                  />
                </div>

                {/* Founder Info */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Sebastian Tamburro
                  </h2>
                  <p className="text-lg text-gray-600 mb-4">Founder</p>

                  <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    My automation journey began at Colgate University where I founded the Colgate AI Club while pursuing my education. I also serve on Colgate's Administrative AI Research Panel, a select committee tasked with preparing the institution for the technological revolution. Our panel explores how the university can leverage AI tools effectively and, most importantly, develops educational frameworks to help students thrive in an AI-powered future. This experience deepened my understanding of how intelligent automation can transform specialized industries when implemented thoughtfully.
                    <br /><br />
                    I created FlowMatrix AI after seeing firsthand how construction and trade businesses were losing countless hours to administrative tasks. Growing up around construction sites with family in the trades, I witnessed skilled professionals spending evenings on paperwork instead of with their families. These businesses needed specialized automation solutions that understood their unique workflows but faced a market offering only generic software that created more problems than it solved.
                    <br /><br />
                    Today, our mission is simple: help construction and trade businesses save time through practical automation that delivers measurable results from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why FlowMatrix AI Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
              Why FlowMatrix AI?
            </h2>
            <div className="text-center text-gray-600 space-y-4">
              <p className="text-lg leading-relaxed">
                Most construction and trade businesses lose 120+ hours every month to repetitive admin tasks. We observed this pattern across dozens of contractors, HVAC companies, and trade businesses throughout North America, and knew there had to be a better way.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Our difference is our approach:</strong> We never push pre-built solutions or generic software packages. Instead, we invest time in understanding not just your business workflows but also your team's comfort level with technology. This dual understanding allows us to create personalized automation systems that align perfectly with both your operational needs and adoption capabilities. In a world where technology advances exponentially every day, we serve as your bridge to practical innovation.
              </p>
              <p className="text-lg leading-relaxed">
                We deliberately chose to specialize exclusively in Construction and Trades rather than becoming general business consultants. This focused expertise ensures we understand the specific challenges, regulations, and workflows unique to your industry. By mastering one industry deeply rather than serving many superficially, we deliver significantly more value through our specialized knowledge and purpose-built solutions.
              </p>
            </div>
          </div>

          {/* Our Four-Phase Methodology Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Four-Phase Methodology
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  1. Understand & Analyze
                </h3>
                <p className="text-gray-600">
                  We begin with a comprehensive 5-day diagnostic of your specific construction or trade workflows, identifying exactly where automation will create the highest ROI. This initial phase is completely free because we believe in understanding your business before making any recommendations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  2. Transparent Assessment
                </h3>
                <p className="text-gray-600">
                  Our $300 deep-dive audit provides a complete roadmap of automation opportunities with projected ROI metrics. This phase includes our 100% satisfaction guarantee and represents the first of two clear decision points where you can walk away with no obligation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  3. Prove Value First
                </h3>
                <p className="text-gray-600">
                  Before full implementation, we deploy quick-win automations that demonstrate immediate value. This approach proves our concept with your specific workflows before you commit to a broader engagement, representing the second decision point in our low-friction process.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  4. Implement & Innovate
                </h3>
                <p className="text-gray-600">
                  Only after proving measurable value do we move to full implementation and continuous innovation. Each automation is tracked against specific ROI metrics, ensuring you can see exactly how many hours and dollars are being saved every month.
                </p>
              </div>
            </div>
          </div>

          {/* Our Approach Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              How We Work
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Diagnostic-First */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Diagnostic-First</h3>
                <p className="text-gray-600">
                  We analyze your specific workflows before recommending anything. Every business is different, so we don't believe in one-size-fits-all solutions. Our proprietary workflow assessment methodology identifies high-ROI automation opportunities unique to your operations.
                </p>
              </div>

              {/* Transparent Pricing */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Zero Risk</h3>
                <p className="text-gray-600">
                  $300 audit with 100% satisfaction guarantee. Two clear decision points where you can walk away, no questions asked. We're so confident in our value that we've structured our business model around proving results before you commit.
                </p>
              </div>

              {/* Results-Focused */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Results-Focused</h3>
                <p className="text-gray-600">
                  We measure success by the hours you save and the stress you avoid. Every automation we build tracks specific ROI metrics: time saved, costs reduced, revenue accelerated. If it doesn't improve your daily operations, we don't build it.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Talk</h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              No pressure, no sales pitch. Just a conversation about where automation could help your business.
            </p>

            <div className="space-y-4">
              <Button
                onClick={openTallyForm}
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 font-semibold"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-100">
                <Link to="/solutions" className="hover:text-white underline">View Solutions</Link>
                <Link to="/pricing" className="hover:text-white underline">Pricing</Link>
                <Link to="/contact" className="hover:text-white underline">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
