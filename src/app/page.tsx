import { getSubdomain } from '@/lib/subdomain';
import { generateMetadata as createMetadata, generateOrganizationSchema } from '@/lib/seo';
import commonContent from '@/data/common-content.json';
import InfoBar from '@/components/InfoBar';
import Header from '@/components/Header';
import PromotionalBar from '@/components/PromotionalBar';
import Footer from '@/components/Footer';

// Training components
import TrainingHero from '@/components/training/HeroSection';
import Gallery from '@/components/training/Gallery';
import TrainingTestimonials from '@/components/training/Testimonials';
import Placements from '@/components/training/Placements';
import ServicesCards from '@/components/training/ServicesCards';
import OtherServices from '@/components/training/OtherServices';

// Services components  
import ServicesHero from '@/components/services/HeroSection';
import ServicesList from '@/components/services/ServicesList';
import ProcessFlow from '@/components/services/ProcessFlow';
import ServicesTestimonials from '@/components/services/Testimonials';

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
    title: 'Professional Laptop Repair Training - Laptian Academy',
    description: 'Master laptop repair with hands-on training, industry certifications, and 95% placement rate. Join 2500+ successful technicians.',
    subdomain: 'training',
    path: '/',
  });
}

export default async function HomePage() {
  const subdomain = await getSubdomain();
  const { promotionalOffers } = commonContent;

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
          <PromotionalBar
            offerText={offerConfig.text}
            targetDate={offerEndDate.toISOString()}
          />
          <main>
            <TrainingHero />
            <Gallery />
            <TrainingTestimonials />
            <Placements />
            <ServicesCards />
            <OtherServices />
          </main>
        </>
      ) : (
        <>
          <PromotionalBar
            offerText={offerConfig.text}
            targetDate={offerEndDate.toISOString()}
          />
          <main>
            <ServicesHero />
            <ServicesList />
            <ProcessFlow />
            <ServicesTestimonials />
          </main>
        </>
      )}

      <Footer subdomain={subdomain} />
    </>
  );
}
