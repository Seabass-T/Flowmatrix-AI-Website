import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-slate max-w-none dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              FlowMatrix AI collects information to provide and improve our automation services. We collect:
            </p>
            
            <h3 className="text-xl font-medium text-foreground mb-3">Information You Provide Directly</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Contact Information:</strong> Name, email address, phone number, business address</li>
              <li><strong>Business Details:</strong> Company name, industry, business size, automation requirements</li>
              <li><strong>Account Information:</strong> Username, encrypted passwords, billing information</li>
              <li><strong>Communication Data:</strong> Messages, support tickets, consultation notes, project specifications</li>
              <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely by third-party payment processors)</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">Information Collected Automatically</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Usage Behavior:</strong> How you interact with our services, automation performance metrics</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, access times</li>
              <li><strong>Service Performance:</strong> Automation execution logs, error reports, system performance data</li>
              <li><strong>Analytics Data:</strong> Website usage patterns, feature utilization, user engagement metrics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use your information for the following purposes:
            </p>
            
            <h3 className="text-xl font-medium text-foreground mb-3">Service Delivery</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Designing, implementing, and maintaining your automation solutions</li>
              <li>Providing technical support and troubleshooting</li>
              <li>Processing payments and managing billing</li>
              <li>Monitoring system performance and preventing issues</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">Analytics and Improvement</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Analyzing service usage to improve our offerings</li>
              <li>Identifying trends and optimizing automation performance</li>
              <li>Developing new features and capabilities</li>
              <li>Conducting security monitoring and fraud prevention</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">Communication (Optional Marketing)</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Sending service updates and important notifications</li>
              <li>Providing educational content about automation best practices (with consent)</li>
              <li>Sharing relevant product updates and new service offerings (with consent)</li>
              <li>Conducting customer satisfaction surveys (with consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Third-Party Tools and Data Processing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To deliver our services effectively, we integrate with various third-party platforms that may process your data:
            </p>
            
            <h3 className="text-xl font-medium text-foreground mb-3">Automation and Integration Platforms</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>n8n:</strong> Workflow automation and data processing</li>
              <li><strong>Notion:</strong> Project management and documentation</li>
              <li><strong>Calendly:</strong> Appointment scheduling and calendar integration</li>
              <li><strong>Various CRM platforms:</strong> Customer relationship management</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">Infrastructure and Data Storage</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Supabase:</strong> Database hosting and backend services</li>
              <li><strong>MongoDB:</strong> Document database for certain applications</li>
              <li><strong>Cloud hosting providers:</strong> Secure data storage and processing</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">AI and Analytics Services</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>OpenAI:</strong> AI-powered automation and natural language processing</li>
              <li><strong>Analytics platforms:</strong> Service performance monitoring and optimization</li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-4">
              We ensure all third-party integrations maintain appropriate security standards and data protection measures 
              consistent with this privacy policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Storage and Protection</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Encryption:</strong> Data is encrypted in transit and at rest using industry-standard protocols</li>
              <li><strong>Access Controls:</strong> Strict access limitations to authorized personnel only</li>
              <li><strong>Regular Security Audits:</strong> Ongoing monitoring and security assessments</li>
              <li><strong>Secure Infrastructure:</strong> Use of reputable cloud providers with robust security measures</li>
              <li><strong>Backup and Recovery:</strong> Regular data backups with secure storage</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights and Choices</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have several rights regarding your personal information:
            </p>
            
            <h3 className="text-xl font-medium text-foreground mb-3">Access and Portability</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Request access to your personal data</li>
              <li>Receive a copy of your data in a portable format</li>
              <li>Review how your information is being used</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">Correction and Deletion</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal data (subject to legal and contractual obligations)</li>
              <li>Withdraw consent for optional data processing activities</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">Marketing and Communication Preferences</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Opt out of marketing communications at any time</li>
              <li>Choose which types of communications you receive</li>
              <li>Manage notification preferences for your automation services</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">GDPR and CCPA Compliance</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you are a resident of the European Union or California, you may have additional rights under GDPR or CCPA, 
              including the right to restrict processing, object to certain uses of your data, and receive detailed information 
              about our data practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We retain your information for as long as necessary to provide services and fulfill legal obligations:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Active Accounts:</strong> Data retained while your account is active and for ongoing service delivery</li>
              <li><strong>Terminated Accounts:</strong> Essential data retained for 1 year after termination for potential service restoration</li>
              <li><strong>Financial Records:</strong> Billing and payment data retained for 7 years as required by law</li>
              <li><strong>Legal Compliance:</strong> Certain data may be retained longer if required by legal obligations</li>
            </ul>
            
            <h3 className="text-xl font-medium text-foreground mb-3">Data Deletion Requests</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To request deletion of your personal data, contact us at privacy@flowmatrixai.com. We will process deletion 
              requests within 30 days, subject to legal and contractual retention requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              FlowMatrix AI is based in Canada, and we may process data internationally to provide our services. 
              We ensure appropriate safeguards are in place for international data transfers, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Use of adequacy decisions where applicable</li>
              <li>Standard contractual clauses for data protection</li>
              <li>Compliance with relevant data protection frameworks</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update this Privacy Policy to reflect changes in our practices or legal requirements. 
              Significant changes will be communicated via:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Email notification to registered users</li>
              <li>Prominent notice on our website</li>
              <li>In-service notifications for major changes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For questions about this Privacy Policy or to exercise your privacy rights, contact us:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-muted-foreground">
                <strong>FlowMatrix AI</strong><br />
                Email: privacy@flowmatrixai.com<br />
                Subject Line: "Privacy Policy Inquiry"<br />
                Website: www.flowmatrixai.com
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We will respond to your privacy-related inquiries within 30 days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;