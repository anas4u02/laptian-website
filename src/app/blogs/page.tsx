import { notFound } from 'next/navigation';
import { getSubdomain } from '@/lib/subdomain';
import { generateMetadata as createMetadata } from '@/lib/seo';
import InfoBar from '@/components/InfoBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogsLanding from '@/components/training/BlogsLanding';

export async function generateMetadata() {
    return createMetadata({
        title: 'Blog - Laptian Academy',
        description: 'Stay updated with the latest laptop repair tips, tutorials, and industry news from Laptian Academy.',
        subdomain: 'training',
        path: '/blogs',
    });
}

export default async function BlogsPage() {
    const subdomain = await getSubdomain();

    if (subdomain !== 'training') {
        notFound();
    }

    return (
        <>
            <InfoBar subdomain="training" />
            <Header subdomain="training" />
            <BlogsLanding />
            <Footer subdomain="training" />
        </>
    );
}
