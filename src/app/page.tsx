import { getSubdomain } from '@/lib/subdomain';
import { generateMetadata as createMetadata, generateOrganizationSchema } from '@/lib/seo';
import commonContent from '@/data/common-content.json';
import type { CommonContent } from '@/types';
import InfoBar from '@/components/InfoBar';
import Header from '@/components/Header';
import PromotionalBar from '@/components/PromotionalBar';
import Footer from '@/components/Footer';

// Training components
import TrainingHero from '@/components/training/HeroSection';
import WhyLaptian from '@/components/training/WhyLaptian';
import TrainingHighlights from '@/components/training/TrainingHighlights';
import TrainingTestimonials from '@/components/training/Testimonials';
import ServicesCards from '@/components/training/ServicesCards';
import SkillsMastery from '@/components/training/SkillsMastery';
import AboutInstitute from '@/components/training/AboutInstitute';
import TrainingFeatures from '@/components/training/TrainingFeatures';
import OtherServices from '@/components/training/OtherServices';

// Services components  
import ServicesHero from '@/components/services/HeroSection';
import ServiceAreas from '@/components/services/ServiceAreas';
import TrustedPartner from '@/components/services/TrustedPartner';
import WhyChoose from '@/components/services/WhyChoose';
import MultiBrand from '@/components/services/MultiBrand';
import CompleteServices from '@/components/services/CompleteServices';
import ChipLevelRepair from '@/components/services/ChipLevelRepair';
import ServicesList from '@/components/services/ServicesList';
import ProcessFlow from '@/components/services/ProcessFlow';
import ServicesTestimonials from '@/components/services/Testimonials';

// Shared components
import FAQ from '@/components/FAQ';

export async function generateMetadata() {
  const subdomain = await getSubdomain();

  if (subdomain === 'services') {
    return createMetadata({
      title: 'Expert Laptop Repair Services - Laptian',
      description: 'Fast, reliable laptop repair services for all brands. Same-day service, certified technicians, 6-month warranty. Free diagnosis!',
      subdomain: 'services',
      path: '/',
    });
  }

  return createMetadata({
    title: 'Professional Laptop Repair Training - Laptian Technical Institue',
    description: 'Master laptop repair with hands-on training, industry certifications, and 95% placement rate. Join 2500+ successful technicians.',
    subdomain: 'training',
    path: '/',
  });
}

export default async function HomePage() {
  const subdomain = await getSubdomain();
  const { promotionalOffers } = commonContent as CommonContent;

  // Set promotional offer end date from JSON config
  const offerConfig = promotionalOffers[subdomain];
  const offerEndDate = new Date();
  offerEndDate.setDate(offerEndDate.getDate() + offerConfig.daysValid);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateOrganizationSchema(subdomain),
        }}
      />

      <InfoBar subdomain={subdomain} />
      <Header subdomain={subdomain} />

      {subdomain === 'training' ? (
        <>
          {offerConfig.isVisible && (
            <PromotionalBar
              offerText={offerConfig.text}
              targetDate={offerEndDate.toISOString()}
            />
          )}
          <main>
            <TrainingHero />
            <WhyLaptian />
            <TrainingHighlights />
            <TrainingTestimonials />
            <ServicesCards />
            <SkillsMastery />
            <AboutInstitute />
            <TrainingFeatures />
            <OtherServices />
            <FAQ subdomain="training" />
          </main>
        </>
      ) : (
        <>
          {offerConfig.isVisible && (
            <PromotionalBar
              offerText={offerConfig.text}
              targetDate={offerEndDate.toISOString()}
            />
          )}
          <main>
            <ServicesHero />
            <ServiceAreas />
            <TrustedPartner />
            <WhyChoose />
            <MultiBrand />
            <CompleteServices />
            <ChipLevelRepair />
            <ServicesList />
            <ProcessFlow />
            <ServicesTestimonials />
            <FAQ subdomain="services" />
          </main>
        </>
      )}

      <Footer subdomain={subdomain} />
    </>
  );
}
