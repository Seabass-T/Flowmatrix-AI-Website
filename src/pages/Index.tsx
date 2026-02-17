import { Helmet } from 'react-helmet';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import StakesSection from '@/components/sections/StakesSection';
import PillarsSection from '@/components/sections/PillarsSection';
import ProofSection from '@/components/sections/ProofSection';
import FoundersSection from '@/components/sections/FoundersSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import { LazySection } from '@/components/shared/LazySection';
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
          <HeroSection />
          <LazySection minHeight="80vh">
            <StakesSection />
          </LazySection>
          <LazySection minHeight="100vh">
            <PillarsSection />
          </LazySection>
          <LazySection minHeight="60vh">
            <ProofSection />
          </LazySection>
          <LazySection minHeight="60vh">
            <FoundersSection />
          </LazySection>
          <LazySection minHeight="50vh">
            <FAQSection />
          </LazySection>
          <LazySection minHeight="50vh">
            <CTASection />
          </LazySection>
        </main>
      </div>
    </>
  );
};

export default Index;
