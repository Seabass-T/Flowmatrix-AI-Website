import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions - FlowMatrix AI Toronto Services</h1>
          <p className="text-gray-600 text-lg mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          {/* Introduction Section */}
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Welcome to FlowMatrix AI</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              FlowMatrix AI provides specialized automation and AI implementation services for trade, real estate, and home improvement 
              businesses across Toronto and the Greater Toronto Area. Our services help local businesses streamline operations, 
              reduce manual work, and increase efficiency through custom automation solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              These Terms and Conditions govern your use of our services, including our Pay-What-You-Think-It's-Worth audit process, 
              automation implementation, and ongoing support services. By engaging with FlowMatrix AI, you acknowledge that you have 
              read, understood, and agree to be bound by these terms.
            </p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By accessing and using FlowMatrix AI's services, you agree to be bound by these Terms and Conditions. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              FlowMatrix AI provides custom automation and backend SaaS solutions designed for small and medium businesses (SMBs) 
              and enterprise clients. Our services include but are not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Workflow automation using tools like n8n and custom integrations</li>
              <li>Database management and backend solutions using Supabase, MongoDB, and other platforms</li>
              <li>AI-powered automation and chatbot development using OpenAI and similar technologies</li>
              <li>Business process optimization and integration with platforms like Notion, Calendly, and CRM systems</li>
              <li>Custom software development and API integrations</li>
              <li>Consultation, implementation, and ongoing technical support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Ownership and Code Transfer Limitations</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Unless explicitly stated in a separate written agreement:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>FlowMatrix AI retains ownership of all proprietary methodologies, frameworks, and reusable components</li>
              <li>Clients receive usage rights to the delivered automation solutions for their business operations</li>
              <li>Source code transfer requires a separate agreement and may incur additional fees</li>
              <li>Clients may not redistribute, resell, or transfer automation solutions to third parties without written consent</li>
              <li>Custom configurations and client-specific data remain the property of the client</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Structure</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              FlowMatrix AI offers flexible payment structures based on project scope and client needs:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li><strong>One-time Setup Fees:</strong> For initial automation implementation and configuration</li>
              <li><strong>Subscription Services:</strong> For ongoing maintenance, hosting, and support services</li>
              <li><strong>Custom Build Projects:</strong> Milestone-based payments for complex, bespoke solutions</li>
              <li><strong>Consultation Services:</strong> Hourly or project-based rates for strategic guidance</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              Payment terms are typically 30 days from invoice date unless otherwise agreed. Late payments may incur fees 
              as outlined in your service agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Platform Disclaimers</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our solutions integrate with various third-party platforms and services. FlowMatrix AI disclaims liability for:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Changes to third-party APIs, pricing, or service availability that may affect functionality</li>
              <li>Downtime or service interruptions caused by third-party platform issues</li>
              <li>Data loss or security breaches occurring on third-party platforms</li>
              <li>Changes in third-party terms of service that may impact your automation workflows</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              Clients are responsible for maintaining valid accounts and subscriptions with required third-party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To the maximum extent permitted by law, FlowMatrix AI's liability is limited to the amount paid for services 
              in the 12 months preceding any claim. We are not liable for indirect, incidental, or consequential damages 
              including but not limited to lost profits, business interruption, or data loss.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Either party may terminate services with 30 days written notice. Upon termination:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Outstanding payments become immediately due</li>
              <li>Access to FlowMatrix AI-hosted services may be suspended</li>
              <li>Data export assistance will be provided for 30 days after termination (fees may apply)</li>
              <li>Certain automation workflows may cease to function without ongoing maintenance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              These terms are governed by the laws of Ontario, Canada. Any disputes will be resolved in the courts of 
              Ontario, Canada. If any provision of these terms is found unenforceable, the remaining provisions will 
              continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              FlowMatrix AI reserves the right to modify these terms at any time. Significant changes will be communicated 
              to clients via email or through our service platform. Continued use of services constitutes acceptance of 
              modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-gray-600">
                <strong>FlowMatrix AI</strong><br />
                Email: legal@flowmatrixai.com<br />
                Website: www.flowmatrixai.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;