import { Helmet } from 'react-helmet';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import StakesSection from '@/components/sections/StakesSection';
import PillarsSection from '@/components/sections/PillarsSection';
import ProofSection from '@/components/sections/ProofSection';
import FoundersSection from '@/components/sections/FoundersSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import { SEO } from '@/lib/constants';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:image" content={SEO.ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="bg-black min-h-screen">
        <Navigation />

        <main>
          {/* Hero Section - Full viewport */}
          <HeroSection />

          {/* Stakes Section - Adapt or become irrelevant */}
          <StakesSection />

          {/* Pillars Section - Discover, Build, Scale */}
          <PillarsSection />

          {/* Proof Section - Real outcomes */}
          <ProofSection />

          {/* Founders Section - Team intro */}
          <FoundersSection />

          {/* FAQ Section - Common questions */}
          <FAQSection />

          {/* Final CTA Section - The question isn't if, it's when */}
          <CTASection />
        </main>
      </div>
    </>
  );
};

export default Index;
