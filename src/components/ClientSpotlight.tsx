import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ClientSpotlightProps {
  scrollToSolution?: (solutionId: string) => void;
}

const ClientSpotlight = ({ scrollToSolution }: ClientSpotlightProps) => {
  const navigate = useNavigate();

  const handleSolutionClick = (solutionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    // Navigate to /solutions with state to scroll to the specific solution
    navigate('/solutions', { state: { scrollToSolution: solutionId } });
  };

  return (
    <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 md:p-12 mb-16 shadow-sm">
      {/* Featured Badge */}
      <div className="flex items-center gap-2 mb-6">
        <span className="inline-block px-4 py-2 text-sm font-bold text-primary bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800">
          FEATURED CLIENT SUCCESS STORY
        </span>
      </div>

      {/* Header with Client Info */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            UBL Group Case Study: Construction Automation Success Story
          </h2>

          {/* Client Details */}
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900 dark:text-white">Company:</span>
              <a
                href="https://www.ublgroup.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                UBL Group
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              <span><strong className="text-gray-900 dark:text-white">Industry:</strong> Construction (Interior & Exterior)</span>
              <span><strong className="text-gray-900 dark:text-white">Size:</strong> 15+ employees, $2M+ annual revenue</span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              <span><strong className="text-gray-900 dark:text-white">Location:</strong> Greater Toronto Area</span>
              <span><strong className="text-gray-900 dark:text-white">Established:</strong> 8+ years in business</span>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <div className="w-32 h-32 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm overflow-hidden">
            <img
              src="/ubl-group-logo.png"
              alt="UBL Group Logo"
              className="w-full h-full object-contain p-3"
            />
          </div>
        </div>
      </div>

      {/* The Challenge */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          The Challenge
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          UBL Group was experiencing significant operational bottlenecks that were limiting their ability to scale beyond two concurrent projects. As a growing construction firm handling complex interior and exterior contracts across the GTA, their leadership team was spending excessive time on administrative tasks instead of focusing on project delivery and business development.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          The founders, Umberto and Giani Lopardo, found themselves working full days on job sites (6-8 hours) and then dedicating an additional 2+ hours daily to backend operations. This unsustainable workload was affecting both their quality of life and the company's ability to grow.
        </p>

        {/* Key Operational Challenges */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Key Operational Challenges:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 font-bold">•</span>
              <span className="text-gray-600 dark:text-gray-300">
                <strong>Email Management & Customer Relations:</strong> 5-10 hours weekly lost sorting through emails, responding to inquiries, and managing client communications
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 font-bold">•</span>
              <span className="text-gray-600 dark:text-gray-300">
                <strong>Regulatory Compliance:</strong> 10-20 hours per project spent researching and ensuring adherence to building codes, bylaws, and construction regulations
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 font-bold">•</span>
              <span className="text-gray-600 dark:text-gray-300">
                <strong>Invoice Management & Financial Operations:</strong> 20-40+ hours monthly dedicated to creating invoices, following up on payments, and financial administration
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 font-bold">•</span>
              <span className="text-gray-600 dark:text-gray-300">
                <strong>Employee Communication & Coordination:</strong> 20+ hours monthly spent coordinating teams, managing schedules, and ensuring information flow
              </span>
            </li>
          </ul>
        </div>

        <blockquote className="mt-6 pl-6 border-l-4 border-primary italic text-gray-700 dark:text-gray-300">
          "We were spending more time on paperwork than actually growing our business. Every new project just meant more administrative overhead."
          <footer className="mt-2 text-sm font-medium text-gray-900 dark:text-white not-italic">
            — Umberto Lopardo, Co-Founder
          </footer>
        </blockquote>
      </div>

      {/* The Solution */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          The Solution
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          In July 2025, UBL Group engaged FlowMatrix AI to analyze their operational workflow and implement targeted automation solutions. After a thorough assessment, we identified the highest-impact opportunities and deployed a phased automation strategy.
        </p>

        {/* Phase 1 */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Phase 1: Immediate Relief (First 2 Weeks)
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We implemented three core systems that addressed their most pressing pain points:
          </p>

          <div className="space-y-4">
            {/* Email Organizer */}
            <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                1.{" "}
                <button
                  onClick={handleSolutionClick('email-organizer')}
                  className="text-primary hover:underline"
                >
                  Email Organizer and Summarizer
                </button>
              </h5>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Automatically categorized and prioritized all incoming communications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Delivered daily email summaries with action items and response recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Integrated with existing communication channels</span>
                </li>
              </ul>
            </div>

            {/* Code Compass */}
            <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                2.{" "}
                <button
                  onClick={handleSolutionClick('code-compass')}
                  className="text-primary hover:underline"
                >
                  Code & Bylaw Intelligence System
                </button>
              </h5>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Provided instant access to relevant construction regulations and requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Eliminated hours of research time per project</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Ensured compliance documentation was always current and accessible</span>
                </li>
              </ul>
            </div>

            {/* Invoice Lifecycle Manager */}
            <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                3.{" "}
                <button
                  onClick={handleSolutionClick('invoice-lifecycle-manager')}
                  className="text-primary hover:underline"
                >
                  Invoice Lifecycle Automation
                </button>
              </h5>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Automated the creation, sending, and tracking of all client invoices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Implemented strategic follow-up sequences for outstanding payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Integrated with existing Microsoft and HubSpot systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Phase 2: Operational Enhancement (Ongoing)
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            As our partnership continued, we expanded their automation ecosystem:
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 font-bold">•</span>
              <span><strong>Customer Support Agent:</strong> Handled routine client inquiries automatically and escalated priority issues with full context</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 font-bold">•</span>
              <span><strong>ERP System (in development):</strong> Comprehensive project management integration, resource allocation, and financial tracking</span>
            </li>
          </ul>
        </div>
      </div>

      {/* The Results */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          The Results
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          Within three months of implementation, UBL Group experienced transformative results:
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-5 border border-green-200 dark:border-green-800">
            <div className="text-3xl font-bold text-primary mb-1">15+ hours</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">Time Recovered Weekly</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Leadership team reclaimed valuable time</div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-5 border border-green-200 dark:border-green-800">
            <div className="text-3xl font-bold text-primary mb-1">2→4 Projects</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">Capacity Doubled</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">From 2 to 4 concurrent projects</div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-5 border border-green-200 dark:border-green-800">
            <div className="text-3xl font-bold text-primary mb-1">$10,000+</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">Direct Cost Savings</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Within first 3 months</div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-5 border border-green-200 dark:border-green-800">
            <div className="text-3xl font-bold text-primary mb-1">45→12 days</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">Payment Collection</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">73% faster cash flow</div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-5 border border-green-200 dark:border-green-800">
            <div className="text-3xl font-bold text-primary mb-1">Zero</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">Compliance Bottlenecks</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Eliminated research delays</div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-5 border border-green-200 dark:border-green-800">
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">Evening Time Back</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">No more after-hours admin work</div>
          </div>
        </div>

        <blockquote className="pl-6 border-l-4 border-primary italic text-gray-700 dark:text-gray-300 text-lg">
          "The systems FlowMatrix AI built have transformed how we operate. What used to take hours now happens automatically in the background. We're handling twice the projects with the same team, and I finally have my evenings back."
          <footer className="mt-3 text-base font-medium text-gray-900 dark:text-white not-italic">
            — Giani Lopardo, Co-Founder
          </footer>
        </blockquote>
      </div>

      {/* Ongoing Partnership */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Ongoing Partnership
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          Based on the success of the initial implementations, UBL Group has expanded their engagement with FlowMatrix AI to develop additional systems, including social media and marketing automation, material and tool rental optimization, lead generation and qualification, and a comprehensive ERP platform.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Our relationship includes weekly check-ins, immediate support for any issues, and monthly performance reports to ensure all systems continue to deliver maximum value.
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Could Your Construction Business Benefit from Similar Automation?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
          If you're facing similar challenges with administrative overload, regulatory compliance, or operational bottlenecks, we can help. Our process starts with understanding your specific pain points and identifying the highest-impact automation opportunities.
        </p>
        <div className="mb-6">
          <p className="text-gray-900 dark:text-white font-semibold mb-2">
            See if you qualify for our free automation diagnostic:
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 max-w-md mx-auto">
            <li>✓ 30-minute discovery call</li>
            <li>✓ No technical knowledge required</li>
            <li>✓ Receive a custom automation roadmap</li>
          </ul>
        </div>
        <Button
          onClick={() => window.open('https://tally.so/r/wMBOXE', '_blank')}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto"
        >
          Get Your Free Automation Diagnostic
        </Button>
      </div>
    </section>
  );
};

export default ClientSpotlight;
