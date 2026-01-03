import { getSubdomain } from '@/lib/subdomain';
import { generateMetadata as createMetadata } from '@/lib/seo';
import InfoBar from '@/components/InfoBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata() {
    const subdomain = await getSubdomain();

    if (subdomain === 'services') {
        return createMetadata({
            title: 'Contact Us - Laptian Repair Services',
            description: 'Get in touch with Laptian for laptop repair services. Quick quote, same-day service available. Call us or submit the form.',
            subdomain: 'services',
            path: '/contact',
        });
    }

    return createMetadata({
        title: 'Contact Us - Laptian Training Center',
        description: 'Contact Laptian Training Center for laptop repair courses. Get course details, admission info, and enrollment support.',
        subdomain: 'training',
        path: '/contact',
    });
}

export default async function ContactPage() {
    const subdomain = await getSubdomain();

    return (
        <>
            <InfoBar subdomain={subdomain} />
            <Header subdomain={subdomain} />

            <main>
                <div style={{ paddingTop: 'var(--spacing-8)' }}>
                    <div className="container">
                        <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }}>
                            <h1 style={{ fontSize: 'var(--font-size-5xl)', marginBottom: 'var(--spacing-4)' }}>
                                Contact <span className="text-highlight">Us</span>
                            </h1>
                            <p style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                                {subdomain === 'training'
                                    ? 'Ready to start your laptop repair career? Get in touch with us today!'
                                    : 'Need laptop repair? Contact us for a free diagnosis and quick service!'}
                            </p>
                        </div>
                    </div>
                </div>

                <ContactForm subdomain={subdomain} />
            </main>

            <Footer subdomain={subdomain} />
        </>
    );
}
