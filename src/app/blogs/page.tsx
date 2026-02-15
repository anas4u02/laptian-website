import { getSubdomain } from '@/lib/subdomain';
import { generateMetadata as createMetadata } from '@/lib/seo';
import InfoBar from '@/components/InfoBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogsLanding from '@/components/training/BlogsLanding';

export async function generateMetadata() {
    const subdomain = await getSubdomain();
    return createMetadata({
        title: subdomain === 'training' ? 'Blog - Laptian Academy' : 'Blog - Laptian Repair',
        description: 'Stay updated with the latest laptop repair tips, tutorials, and industry news.',
        subdomain,
        path: '/blogs',
    });
}

export default async function BlogsPage() {
    const subdomain = await getSubdomain();

    return (
        <>
            <InfoBar subdomain={subdomain} />
            <Header subdomain={subdomain} />
            <BlogsLanding />
            <Footer subdomain={subdomain} />
        </>
    );
}
